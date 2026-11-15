"use client";
import { useEffect } from "react";

export default function AnalyticsLoader() {
  useEffect(() => {
    const prefsCookie = getCookie("akkadCookiePrefs");
    if (!prefsCookie) return;

    const prefs = JSON.parse(prefsCookie);

    // Only load GA if performance cookies are allowed
    if (!prefs.performance) return;

    // Prevent loading twice
    if (window.gtagLoaded) return;
    window.gtagLoaded = true;

    // ---- Your GA script (converted for JS) ----
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-CG06NCRF50";
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag("js", new Date());
    gtag("config", "G-CG06NCRF50");

    console.log("Google Analytics loaded (with consent)");
  }, []);

  return null;
}

function getCookie(name) {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith(name + "="))
    ?.split("=")[1];
}
