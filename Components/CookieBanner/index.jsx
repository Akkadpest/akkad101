"use client";
import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const [prefs, setPrefs] = useState({
    necessary: true,
    performance: true,
    functional: true,
    targeting: true,
  });

  useEffect(() => {
    if (!document.cookie.includes("akkadCookieConsent=true")) {
      setShowBanner(true);
    }

    const savedPrefs = getCookie("akkadCookiePrefs");
    if (savedPrefs) {
      setPrefs(JSON.parse(savedPrefs));
    }
  }, []);

  const acceptAll = () => {
    const all = {
      necessary: true,
      performance: true,
      functional: true,
      targeting: true,
    };
    saveConsent(all);
  };

  const saveSettings = () => {
    saveConsent(prefs);
  };

  const saveConsent = (values) => {
    document.cookie =
      "akkadCookieConsent=true; path=/; max-age=31536000; SameSite=Lax";
    document.cookie =
      "akkadCookiePrefs=" +
      JSON.stringify(values) +
      "; path=/; max-age=31536000; SameSite=Lax";

    setShowBanner(false);
    setShowSettings(false);
  };

  const toggle = (key) => {
    setPrefs((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!showBanner && !showSettings) return null;

  return (
    <>
      {/* ===== BANNER ===== */}
      {showBanner && (
        <div style={styles.bannerWrapper}>
          <div style={styles.banner}>
            <h2>Cookie settings</h2>

            <p style={styles.text}>
              We use cookies to personalise content and analyse traffic.{" "}
              <a href="/cookie-policy" style={styles.link}>
                Cookie policy
              </a>
            </p>

            <div style={styles.actions}>
              <button
                style={styles.manageBtn}
                onClick={() => {
                  setShowBanner(false);
                  setShowSettings(true);
                }}
              >
                Manage cookies
              </button>

              <button style={styles.acceptBtn} onClick={acceptAll}>
                Accept all cookies
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== SETTINGS PANEL ===== */}
      {showSettings && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <h3>Privacy preference centre</h3>
            <p style={styles.modalText}>
              You can choose which cookies you allow. Necessary cookies are always enabled.
            </p>

            <ToggleRow title="Strictly necessary cookies" checked disabled />

            <ToggleRow
              title="Performance cookies"
              checked={prefs.performance}
              onChange={() => toggle("performance")}
            />

            <ToggleRow
              title="Functional cookies"
              checked={prefs.functional}
              onChange={() => toggle("functional")}
            />

            <ToggleRow
              title="Targeting cookies"
              checked={prefs.targeting}
              onChange={() => toggle("targeting")}
            />

            <div style={{ textAlign: "right", marginTop: 20 }}>
              <button style={styles.acceptBtn} onClick={saveSettings}>
                Save settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ===== TOGGLE ROW ===== */
function ToggleRow({ title, checked, disabled, onChange }) {
  return (
    <div style={styles.row}>
      <span>{title}</span>

      <label style={{ ...styles.switch, opacity: disabled ? 0.5 : 1 }}>
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          style={styles.input}
        />

        <span
          style={{
            ...styles.slider,
            background: checked ? "#7BC043" : "#ccc",
          }}
        >
          <span
            style={{
              ...styles.knob,
              transform: checked ? "translateX(18px)" : "translateX(0)",
            }}
          />
        </span>
      </label>
    </div>
  );
}

/* ===== COOKIE HELPER ===== */
function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}

/* ===== STYLES ===== */
const styles = {
  bannerWrapper: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    background: "rgba(0,0,0,0.5)",
    zIndex: 9999,
  },
  banner: {
    background: "#fff",
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "30px",
  },
  text: { fontSize: 14 },
  link: { color: "#7BC043", fontWeight: 600 },
  actions: { marginTop: 20, display: "flex", gap: 15 },

  manageBtn: {
    border: "2px solid #7BC043",
    background: "#fff",
    color: "#7BC043",
    padding: "10px 18px",
    fontWeight: 600,
    cursor: "pointer",
  },
  acceptBtn: {
    background: "#7BC043",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    fontWeight: 600,
    cursor: "pointer",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.6)",
    zIndex: 10000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "#fff",
    width: 460,
    padding: 25,
    borderRadius: 6,
  },
  modalText: { fontSize: 14, marginBottom: 15 },

  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "12px 0",
    borderBottom: "1px solid #eee",
  },

  input: {
    display: "none",
  },

  switch: {
    position: "relative",
    width: 42,
    height: 22,
  },

  slider: {
    position: "relative",
    display: "block",
    width: 42,
    height: 22,
    borderRadius: 22,
    transition: "background 0.25s",
    cursor: "pointer",
  },

  knob: {
    position: "absolute",
    top: 2,
    left: 2,
    width: 18,
    height: 18,
    background: "#fff",
    borderRadius: "50%",
    transition: "transform 0.25s",
  },
};
