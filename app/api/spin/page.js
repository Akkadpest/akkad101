"use client";
import { useState, useRef } from "react";

const WHATSAPP_NUMBER = "97144251557";
const ADMIN_PASS = "akkad2025";
const SHEETS_URL = process.env.NEXT_PUBLIC_SHEETS_URL || "";

const SEGMENTS = [
  { label: "20% OFF",       color: "#2e7d32", lose: false, chance: 5  },
  { label: "No Luck",       color: "#37474f", lose: true,  chance: 23 },
  { label: "30% OFF",       color: "#1b5e20", lose: false, chance: 3  },
  { label: "No Luck",       color: "#455a64", lose: true,  chance: 22 },
  { label: "50% OFF",       color: "#0d3b1e", lose: false, chance: 1  },
  { label: "No Luck",       color: "#37474f", lose: true,  chance: 23 },
  { label: "Free\nService", color: "#0891b2", lose: false, chance: 1  },
  { label: "No Luck",       color: "#455a64", lose: true,  chance: 22 },
];

const PRIZES = {
  "20% OFF": {
    title: "20% Discount",
    desc: "20% OFF your pest control treatment. Valid for apartments and villas.",
    code: "AKKAD20",
    terms: "Valid for 1 booking. Cannot be combined with other offers.",
  },
  "30% OFF": {
    title: "30% Discount",
    desc: "30% OFF your pest control treatment. Valid for apartments and villas.",
    code: "AKKAD30",
    terms: "Valid for 1 booking. Cannot be combined with other offers.",
  },
  "50% OFF": {
    title: "50% Discount",
    desc: "50% OFF your pest control treatment. Valid for apartments and villas.",
    code: "AKKAD50",
    terms: "Valid for 1 booking. Cannot be combined with other offers.",
  },
  "Free\nService": {
    title: "Free Service",
    desc: "One completely FREE pest control treatment for your property.",
    code: "AKKAD-FREE",
    terms: "Valid for 1 standard treatment. Subject to availability.",
  },
};

const SEG_ANGLE = 360 / SEGMENTS.length;

function weightedRandom() {
  const pool = [];
  SEGMENTS.forEach((s, i) => { for (let t = 0; t < s.chance; t++) pool.push(i); });
  return pool[Math.floor(Math.random() * pool.length)];
}

// ── Wheel ─────────────────────────────────────────────────────────────────────
function Wheel({ rotation, spinning, onSpin, disabled }) {
  const size = 270;
  const cx = size / 2, cy = size / 2, r = size / 2 - 2;
  return (
    <div style={{ position: "relative", userSelect: "none" }}>
      <div style={{ position: "absolute", top: -16, left: "50%", transform: "translateX(-50%)", zIndex: 10 }}>
        <svg width="20" height="28" viewBox="0 0 20 28">
          <polygon points="10,28 0,0 20,0" fill="#f59e0b" stroke="#fff" strokeWidth="1.5" />
          <polygon points="10,22 4,5 16,5" fill="#fbbf24" />
        </svg>
      </div>
      <div style={{ width: size + 8, height: size + 8, borderRadius: "50%", background: "linear-gradient(135deg,#fbbf24,#d97706)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 0 3px rgba(255,255,255,0.06), 0 16px 48px rgba(0,0,0,0.55)" }}>
        <div
          style={{
            width: size, height: size, borderRadius: "50%",
            transition: spinning ? "transform 5s cubic-bezier(0.12,0.9,0.18,1)" : "none",
            transform: `rotate(${rotation}deg)`,
            cursor: disabled || spinning ? "default" : "pointer",
          }}
          onClick={!disabled && !spinning ? onSpin : undefined}
        >
          <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
            {SEGMENTS.map((seg, i) => {
              const sa = (i * SEG_ANGLE - 90) * Math.PI / 180;
              const ea = ((i + 1) * SEG_ANGLE - 90) * Math.PI / 180;
              const x1 = cx + r * Math.cos(sa), y1 = cy + r * Math.sin(sa);
              const x2 = cx + r * Math.cos(ea), y2 = cy + r * Math.sin(ea);
              const ma = (sa + ea) / 2, tr = r * 0.65;
              const tx = cx + tr * Math.cos(ma), ty = cy + tr * Math.sin(ma);
              const ta = ma * 180 / Math.PI + 90;
              const lines = seg.label.split("\n");
              return (
                <g key={i}>
                  <path d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`} fill={seg.color} stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
                  <text textAnchor="middle" dominantBaseline="middle" fill="#fff" fontWeight="700" fontFamily="'Segoe UI',sans-serif" transform={`rotate(${ta},${tx},${ty})`}>
                    {lines.map((ln, li) => (
                      <tspan key={li} x={tx} fontSize={lines.length > 1 ? "8" : "9.5"} dy={li === 0 ? (lines.length > 1 ? -4.5 : 0) : 11}>{ln}</tspan>
                    ))}
                  </text>
                </g>
              );
            })}
            <circle cx={cx} cy={cy} r="26" fill="#0a1f12" stroke="#fbbf24" strokeWidth="2.5" />
            <circle cx={cx} cy={cy} r="19" fill="#15391f" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            <text x={cx} y={cy - 3} textAnchor="middle" fill="#fbbf24" fontSize="6" fontWeight="900" fontFamily="Segoe UI">AKKAD</text>
            <text x={cx} y={cy + 6} textAnchor="middle" fill="#86efac" fontSize="4.5" fontFamily="Segoe UI">PEST CONTROL</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ── Claim Form ────────────────────────────────────────────────────────────────
function ClaimForm({ prize, onSubmit, loading }) {
  const [name, setName]   = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errs, setErrs]   = useState({});

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Required";
    if (!email.trim() || !email.includes("@")) e.email = "Valid email required";
    if (!phone.trim()) e.phone = "Required";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const fields = [
    { key: "name",  label: "Full Name",       placeholder: "Ahmed Al Mansouri", type: "text",  val: name,  set: setName  },
    { key: "email", label: "Email Address",    placeholder: "ahmed@email.com",   type: "email", val: email, set: setEmail },
    { key: "phone", label: "WhatsApp Number",  placeholder: "0501234567",        type: "tel",   val: phone, set: setPhone },
  ];

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 20 }}>
      <style>{`@keyframes popIn{from{opacity:0;transform:scale(0.3)}to{opacity:1;transform:scale(1)}}`}</style>
      <div style={{ background: "#fff", borderRadius: 22, padding: "28px 22px", maxWidth: 340, width: "100%", animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <div style={{ color: "#16a34a", fontWeight: 900, fontSize: 13, letterSpacing: 1, marginBottom: 10 }}>YOU WON!</div>
          <div style={{ background: "#f0fdf4", border: "1.5px dashed #16a34a", borderRadius: 12, padding: "12px 14px", marginBottom: 14 }}>
            <div style={{ color: "#15803d", fontWeight: 900, fontSize: 17 }}>{prize.title}</div>
            <div style={{ color: "#555", fontSize: 12, marginTop: 4, lineHeight: 1.5 }}>{prize.desc}</div>
            <div style={{ color: "#16a34a", fontWeight: 900, fontSize: 20, letterSpacing: 3, marginTop: 8 }}>{prize.code}</div>
            <div style={{ color: "#aaa", fontSize: 10, marginTop: 4 }}>{prize.terms}</div>
          </div>
          <p style={{ color: "#374151", fontSize: 13, margin: 0, fontWeight: 600 }}>Enter your details to claim</p>
        </div>

        {fields.map(f => (
          <div key={f.key} style={{ marginBottom: 11 }}>
            <label style={{ color: "#6b7280", fontSize: 11, marginBottom: 4, display: "block" }}>{f.label}</label>
            <input
              value={f.val} onChange={e => f.set(e.target.value)}
              placeholder={f.placeholder} type={f.type}
              style={{ width: "100%", background: "#f9fafb", border: `1px solid ${errs[f.key] ? "#ef4444" : "#e5e7eb"}`, borderRadius: 9, padding: "10px 12px", color: "#111", fontSize: 13, outline: "none", boxSizing: "border-box" }}
            />
            {errs[f.key] && <div style={{ color: "#ef4444", fontSize: 10, marginTop: 2 }}>{errs[f.key]}</div>}
          </div>
        ))}

        <button
          onClick={() => { if (validate()) onSubmit({ name, email, phone }); }}
          disabled={loading}
          style={{ width: "100%", background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", border: "none", borderRadius: 11, padding: "12px", fontSize: 14, fontWeight: 800, cursor: "pointer", marginTop: 4 }}
        >
          {loading ? "Saving..." : "Claim on WhatsApp"}
        </button>
        <p style={{ color: "#aaa", fontSize: 10, textAlign: "center", marginTop: 8, marginBottom: 0 }}>Screenshot this screen as proof of your win.</p>
      </div>
    </div>
  );
}

// ── Admin Panel ───────────────────────────────────────────────────────────────
function AdminPanel({ onBack }) {
  const [pass, setPass]   = useState("");
  const [auth, setAuth]   = useState(false);
  const [leads, setLeads] = useState([]);
  const [err, setErr]     = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (pass !== ADMIN_PASS) { setErr("Wrong password"); return; }
    setAuth(true);
    setLoading(true);
    try {
      const res = await fetch("/api/leads");
      const data = await res.json();
      setLeads(data.leads || []);
    } catch { setLeads([]); }
    setLoading(false);
  };

  const exportCSV = () => {
    const rows = [
      ["Name", "Email", "Phone", "Prize", "Code", "Date"],
      ...leads.map(l => [l.name, l.email, l.phone, l.prize || "No Luck", l.code || "-", l.date]),
    ];
    const csv = rows.map(r => r.map(c => `"${c}"`).join(",")).join("\n");
    const a = document.createElement("a");
    a.href = "data:text/csv;charset=utf-8," + encodeURIComponent(csv);
    a.download = "akkad-leads.csv";
    a.click();
  };

  const s = { minHeight: "100vh", background: "#0a1f12", fontFamily: "'Segoe UI',sans-serif", padding: 20 };

  if (!auth) return (
    <div style={{ ...s, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: 20, padding: 32, maxWidth: 320, width: "100%", textAlign: "center", border: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 style={{ color: "#fff", margin: "0 0 20px", fontSize: 18 }}>Admin Access</h2>
        <input value={pass} onChange={e => setPass(e.target.value)} onKeyDown={e => e.key === "Enter" && login()} type="password" placeholder="Password"
          style={{ width: "100%", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "11px 13px", color: "#fff", fontSize: 13, outline: "none", boxSizing: "border-box", marginBottom: 10 }} />
        {err && <div style={{ color: "#f87171", fontSize: 11, marginBottom: 8 }}>{err}</div>}
        <button onClick={login} style={{ width: "100%", background: "#16a34a", color: "#fff", border: "none", borderRadius: 10, padding: "11px", fontSize: 13, fontWeight: 700, cursor: "pointer", marginBottom: 10 }}>Login</button>
        <button onClick={onBack} style={{ background: "none", border: "none", color: "rgba(255,255,255,0.35)", fontSize: 11, cursor: "pointer" }}>Back</button>
      </div>
    </div>
  );

  return (
    <div style={s}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 10 }}>
          <div>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: 16 }}>AKKAD Admin Panel</div>
            <div style={{ color: "#86efac", fontSize: 11 }}>{leads.length} total leads</div>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={exportCSV} style={{ background: "#16a34a", color: "#fff", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Export CSV</button>
            <button onClick={onBack} style={{ background: "rgba(255,255,255,0.08)", color: "#fff", border: "none", borderRadius: 8, padding: "8px 14px", fontSize: 12, cursor: "pointer" }}>Back</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))", gap: 10, marginBottom: 20 }}>
          {[
            { label: "Total Leads", val: leads.length,                          color: "#16a34a" },
            { label: "Winners",     val: leads.filter(l => l.prize && l.prize !== "No Luck").length, color: "#f59e0b" },
            { label: "No Luck",     val: leads.filter(l => !l.prize || l.prize === "No Luck").length, color: "#64748b" },
          ].map((stat, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: "14px 16px", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div style={{ color: stat.color, fontSize: 24, fontWeight: 900 }}>{stat.val}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11, marginTop: 2 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", padding: 40 }}>Loading...</div>
        ) : leads.length === 0 ? (
          <div style={{ textAlign: "center", color: "rgba(255,255,255,0.3)", padding: 40, fontSize: 13 }}>No leads yet.</div>
        ) : leads.map((l, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", borderRadius: 12, padding: "13px 16px", border: `1px solid ${l.prize && l.prize !== "No Luck" ? "rgba(22,163,74,0.25)" : "rgba(255,255,255,0.05)"}`, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5px 14px", marginBottom: 8 }}>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 13 }}>{l.name}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>{l.phone}</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: 11 }}>{l.email}</div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ color: l.prize && l.prize !== "No Luck" ? "#86efac" : "#94a3b8", fontWeight: 700, fontSize: 12 }}>{l.prize || "No Luck"}</div>
              {l.code && l.code !== "-" && <div style={{ color: "#fbbf24", fontSize: 11, fontWeight: 700 }}>{l.code}</div>}
              <div style={{ color: "rgba(255,255,255,0.25)", fontSize: 10, marginTop: 4 }}>{l.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function SpinPage() {
  const [page, setPage]               = useState("wheel");
  const [spinning, setSpinning]       = useState(false);
  const [rotation, setRotation]       = useState(0);
  const [result, setResult]           = useState(null);
  const [hasWon, setHasWon]           = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [claimLoading, setClaimLoading]   = useState(false);
  const [spinsLeft, setSpinsLeft]     = useState(3);
  const currentRotation = useRef(0);

  const spin = () => {
    if (spinning || hasWon || spinsLeft <= 0) return;
    setSpinning(true);
    setShowLoseModal(false);

    const idx = weightedRandom();
    const segCenter = idx * SEG_ANGLE + SEG_ANGLE / 2;
    const target = 270 - segCenter;
    const extra = (7 + Math.floor(Math.random() * 4)) * 360;
    const final = currentRotation.current + extra + ((target - (currentRotation.current % 360)) + 360) % 360;
    currentRotation.current = final;
    setRotation(final);

    setTimeout(() => {
      const seg = SEGMENTS[idx];
      setResult(seg);
      setSpinning(false);
      if (!seg.lose) {
        setHasWon(true);
        setShowClaimForm(true);
      } else {
        setSpinsLeft(s => s - 1);
        setShowLoseModal(true);
      }
    }, 5200);
  };

  const handleClaim = async ({ name, email, phone }) => {
    setClaimLoading(true);
    const prize = PRIZES[result.label];
    const payload = { name, email, phone, prize: prize.title, code: prize.code, date: new Date().toLocaleString("en-GB") };

    // Save to Next.js API route (which saves to Google Sheets + local file)
    try { await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) }); } catch {}

    const msg = encodeURIComponent(`AKKAD Spin & Win\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPrize: ${prize.title}\nCode: ${prize.code}\n\nI would like to claim my prize.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    setClaimLoading(false);
    setShowClaimForm(false);
  };

  const waOffer = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I tried the AKKAD spin wheel. Can I get a special offer?")}`, "_blank");

  if (page === "admin") return <AdminPanel onBack={() => setPage("wheel")} />;

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "linear-gradient(160deg,#0a1f12 0%,#15391f 55%,#0a1f12 100%)", fontFamily: "'Segoe UI',sans-serif", padding: 20, position: "relative", overflow: "hidden" }}>
      <style>{`@keyframes popIn{from{opacity:0;transform:scale(0.3)}to{opacity:1;transform:scale(1)}}`}</style>
      {[280, 420, 560].map((s, i) => <div key={i} style={{ position: "absolute", width: s, height: s, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.03)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />)}

      <div style={{ textAlign: "center", marginBottom: 16, zIndex: 1 }}>
        <div style={{ color: "#fff", fontWeight: 900, fontSize: 22, letterSpacing: 4 }}>AKKAD</div>
        <div style={{ color: "#86efac", fontSize: 10, letterSpacing: 3, marginBottom: 8 }}>PEST CONTROL</div>
        <div style={{ color: "#fff", fontSize: 15, fontWeight: 700 }}>Spin & Win</div>
        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: 11, marginTop: 3 }}>
          {hasWon ? "You won! Claim your prize." : spinsLeft > 0 ? `${spinsLeft} spin${spinsLeft > 1 ? "s" : ""} remaining` : "No spins left."}
        </div>
      </div>

      <div style={{ zIndex: 1 }}>
        <Wheel rotation={rotation} spinning={spinning} onSpin={spin} disabled={hasWon || spinsLeft <= 0} />
      </div>

      <div style={{ marginTop: 22, zIndex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        {!hasWon && spinsLeft > 0 && (
          <button onClick={spin} disabled={spinning} style={{ background: spinning ? "rgba(255,255,255,0.06)" : "linear-gradient(135deg,#16a34a,#15803d)", color: spinning ? "rgba(255,255,255,0.25)" : "#fff", border: "none", borderRadius: 50, padding: "12px 48px", fontSize: 15, fontWeight: 800, cursor: spinning ? "not-allowed" : "pointer", boxShadow: spinning ? "none" : "0 4px 20px rgba(22,163,74,0.4)" }}>
            {spinning ? "Spinning..." : "SPIN NOW"}
          </button>
        )}
        {hasWon && (
          <button onClick={() => setShowClaimForm(true)} style={{ background: "linear-gradient(135deg,#25D366,#128C7E)", color: "#fff", border: "none", borderRadius: 30, padding: "12px 30px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>
            Claim Your Prize on WhatsApp
          </button>
        )}
        {spinsLeft <= 0 && !hasWon && (
          <div style={{ textAlign: "center" }}>
            <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 12, marginBottom: 10 }}>No spins remaining.</div>
            <button onClick={waOffer} style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 30, padding: "11px 26px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Contact Us for a Special Offer</button>
          </div>
        )}
      </div>

      {showLoseModal && !hasWon && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.82)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 9999, padding: 20 }}>
          <div style={{ background: "#fff", borderRadius: 22, padding: "28px 22px", maxWidth: 310, width: "100%", textAlign: "center", animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)" }}>
            <h2 style={{ color: "#374151", margin: "0 0 8px", fontSize: 19, fontWeight: 800 }}>Not this time</h2>
            <p style={{ color: "#6b7280", fontSize: 13, margin: "0 0 18px", lineHeight: 1.6 }}>
              {spinsLeft > 0 ? `You have ${spinsLeft} spin${spinsLeft > 1 ? "s" : ""} left. Try again!` : "You have used all your spins. Contact us for a special offer."}
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {spinsLeft > 0 && <button onClick={() => setShowLoseModal(false)} style={{ background: "linear-gradient(135deg,#16a34a,#15803d)", color: "#fff", border: "none", borderRadius: 11, padding: "11px", fontSize: 14, fontWeight: 800, cursor: "pointer" }}>Spin Again</button>}
              <button onClick={() => { setShowLoseModal(false); waOffer(); }} style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 11, padding: "10px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Contact Us on WhatsApp</button>
              <button onClick={() => setShowLoseModal(false)} style={{ background: "none", border: "none", color: "#aaa", fontSize: 11, cursor: "pointer" }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showClaimForm && result && PRIZES[result.label] && (
        <ClaimForm prize={PRIZES[result.label]} onSubmit={handleClaim} loading={claimLoading} />
      )}

      <button onClick={() => setPage("admin")} style={{ position: "fixed", bottom: 14, right: 14, background: "none", border: "none", color: "rgba(255,255,255,0.15)", fontSize: 10, cursor: "pointer", zIndex: 1 }}>Admin</button>
    </div>
  );
}