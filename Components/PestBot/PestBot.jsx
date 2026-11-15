"use client";
import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "97144251557";

const SYSTEM_PROMPT = `You are an expert pest detection AI for PestControl.ae in the UAE.

When given an image:
1. Identify the pest or insect in the image.
2. If no pest is visible, say so clearly.
3. Respond ONLY in this exact JSON format, no extra text:

{
  "detected": true,
  "pestName": "Cockroach",
  "riskLevel": "CRITICAL",
  "description": "2-3 sentences describing the serious danger this pest poses to health and home in the UAE. Be alarming and urgent.",
  "signs": "One sentence about signs of infestation.",
  "treatment": "One sentence about the professional treatment needed."
}

If no pest detected:
{
  "detected": false,
  "message": "No pest detected in this image. Please upload a clearer photo."
}

Risk levels: LOW, MEDIUM, HIGH, CRITICAL
Always be alarming and urgent to motivate the customer to contact pest control immediately.`;

const SCAN_MESSAGES = [
  "Scanning image...",
  "Analyzing pest type...",
  "Cross-referencing UAE pest database...",
  "Threat level assessment...",
];

const RISK_COLORS = {
  LOW: "#16a34a",
  MEDIUM: "#d97706",
  HIGH: "#ea580c",
  CRITICAL: "#dc2626",
};

export default function PestBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("idle");
  const [scanStep, setScanStep] = useState(0);
  const [result, setResult] = useState(null);
  const [imgData, setImgData] = useState(null);
  const [unread, setUnread] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const fileRef = useRef(null);
  const cameraRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (open) setUnread(0);
  }, [open]);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const toBase64 = (file) => new Promise((res, rej) => {
    const r = new FileReader();
    r.onload = () => res(r.result.split(",")[1]);
    r.onerror = rej;
    r.readAsDataURL(file);
  });

  const processFile = async (file) => {
    if (!file) return;

    // Show preview immediately
    const reader = new FileReader();
    reader.onload = (ev) => setImgData(ev.target.result);
    reader.readAsDataURL(file);

    // Get base64 for API
    let base64;
    try {
      base64 = await toBase64(file);
    } catch (e) {
      setStep("error");
      return;
    }

    setStep("scanning");
    setScanStep(0);

    // Run animation independently — keep cycling until API responds
    let animStep = 0;
    const tick = () => {
      animStep = (animStep + 1) % (SCAN_MESSAGES.length + 1);
      setScanStep(animStep === 0 ? 1 : animStep); // keep it moving
      animationRef.current = setTimeout(tick, 600);
    };
    animationRef.current = setTimeout(tick, 600);

    const mediaType = file.type && file.type.startsWith("image/") ? file.type : "image/jpeg";

    // Call API — show result AS SOON as it returns
    try {
      const apiRes = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          system: SYSTEM_PROMPT,
          messages: [{
            role: "user",
            content: [
              {
                type: "image",
                source: { type: "base64", media_type: mediaType, data: base64 }
              },
              {
                type: "text",
                text: "Identify the pest in this image and respond in the required JSON format."
              }
            ]
          }]
        })
      });

      // Stop animation immediately
      clearTimeout(animationRef.current);
      setScanStep(SCAN_MESSAGES.length);

      const data = await apiRes.json();
      const text = data.content?.find(b => b.type === "text")?.text || "";
      const clean = text.replace(/```json|```/g, "").trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
      setStep(parsed.detected === false ? "notfound" : "result");

    } catch {
      clearTimeout(animationRef.current);
      setStep("error");
    }
  };

  const handleFile = (e) => {
    const f = e.target.files[0];
    e.target.value = "";
    if (f) processFile(f);
  };

  const handleCamera = (e) => {
    const f = e.target.files[0];
    e.target.value = "";
    if (f) processFile(f);
  };

  const reset = () => {
    clearTimeout(animationRef.current);
    setStep("idle");
    setResult(null);
    setImgData(null);
    setScanStep(0);
  };

  const contactWhatsApp = () => {
    if (imgData) {
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "pest-photo.jpg";
      link.click();
    }
    const msg = encodeURIComponent(
      `URGENT PEST ALERT!\n\nPest: ${result?.pestName || "Unknown"}\nRisk: ${result?.riskLevel || "HIGH"}\n\n${result?.description || ""}\n\nI need immediate help! Sending photo now.`
    );
    setTimeout(() => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank"), 600);
  };

  const riskColor = result ? (RISK_COLORS[result.riskLevel] || "#dc2626") : "#dc2626";

  return (
    <>
      <style>{`
        @keyframes slideUp { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:translateY(0) } }
        @keyframes pulse { 0%,100% { box-shadow:0 4px 20px rgba(22,163,74,0.5) } 50% { box-shadow:0 4px 36px rgba(22,163,74,0.9) } }
        @keyframes scanLine { 0% { top:0% } 100% { top:100% } }
        @keyframes blink { 0%,100% { opacity:1 } 50% { opacity:0.3 } }
        @keyframes shake { 0%,100%{transform:translateX(0)} 20%,60%{transform:translateX(-3px)} 40%,80%{transform:translateX(3px)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        .scan-btn:hover { opacity:0.9; transform:translateY(-1px); }
        .scan-btn { transition: all 0.2s; }
      `}</style>

      {/* Floating bubble */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            position:"fixed", bottom:20, right:20, zIndex:9999,
            width:60, height:60, borderRadius:"50%", border:"none",
            background:"linear-gradient(135deg,#15803d,#16a34a)",
            cursor:"pointer", animation:"pulse 2s infinite",
            display:"flex", alignItems:"center", justifyContent:"center"
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
            <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          {unread > 0 && (
            <span style={{ position:"absolute", top:0, right:0, background:"#ef4444", color:"#fff", borderRadius:"50%", width:18, height:18, fontSize:10, fontWeight:700, display:"flex", alignItems:"center", justifyContent:"center" }}>
              {unread}
            </span>
          )}
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div style={{
          position:"fixed", zIndex:9999,
          bottom: isMobile ? 0 : 20,
          right: isMobile ? 0 : 20,
          left: isMobile ? 0 : "auto",
          top: isMobile ? 0 : "auto",
          width: isMobile ? "100%" : 370,
          height: isMobile ? "100%" : "min(620px, calc(100vh - 40px))",
          borderRadius: isMobile ? 0 : 20,
          overflow:"hidden",
          boxShadow:"0 12px 48px rgba(0,0,0,0.25)",
          display:"flex", flexDirection:"column",
          background:"#fff",
          animation:"slideUp 0.25s ease",
          fontFamily:"'Segoe UI', Arial, sans-serif"
        }}>

          {/* Header */}
          <div style={{
            background:"linear-gradient(135deg,#14532d,#16a34a)",
            padding:"12px 16px",
            display:"flex", alignItems:"center", gap:12,
            flexShrink:0
          }}>
            <div style={{ width:42, height:42, borderRadius:"50%", background:"rgba(255,255,255,0.15)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <circle cx="11" cy="11" r="7" stroke="white" strokeWidth="2"/>
                <path d="M11 8v6M8 11h6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                <path d="M16.5 16.5L21 21" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </div>
            <div style={{ flex:1 }}>
              <div style={{ color:"#fff", fontWeight:700, fontSize:15 }}>Engineer Online</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background:"rgba(255,255,255,0.15)", border:"none", color:"#fff", borderRadius:"50%", width:32, height:32, cursor:"pointer", fontSize:16, display:"flex", alignItems:"center", justifyContent:"center" }}>✕</button>
          </div>

          {/* Body */}
          <div style={{ flex:1, overflowY:"auto", padding:16, display:"flex", flexDirection:"column", alignItems:"center", background:"#f8fafc" }}>

            {/* IDLE */}
            {step === "idle" && (
              <div style={{ width:"100%", maxWidth:320, paddingTop:8, animation:"fadeIn 0.3s ease" }}>
                <div style={{ textAlign:"center", marginBottom:24 }}>
                  <div style={{ width:72, height:72, borderRadius:"50%", background:"linear-gradient(135deg,#dcfce7,#bbf7d0)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="#16a34a" strokeWidth="2"/>
                      <path d="M11 8v6M8 11h6" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M16.5 16.5L21 21" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p style={{ color:"#64748b", fontSize:20, fontWeight:800, lineHeight:1.65, margin:0 }}>
                    Want to know what pest you have?
                  </p>
                </div>

                <div style={{ display:"flex", gap:10, marginBottom:14 }}>
                  <button className="scan-btn" onClick={() => fileRef.current.click()} style={{ flex:1, background:"#fff", border:"2px solid #e2e8f0", borderRadius:14, padding:"16px 10px", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#f0fdf4,#dcfce7)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ color:"#1e293b", fontWeight:700, fontSize:13 }}>Upload Photo</div>
                      <div style={{ color:"#94a3b8", fontSize:11 }}>From gallery</div>
                    </div>
                  </button>

                  <button className="scan-btn" onClick={() => cameraRef.current.click()} style={{ flex:1, background:"#fff", border:"2px solid #e2e8f0", borderRadius:14, padding:"16px 10px", cursor:"pointer", display:"flex", flexDirection:"column", alignItems:"center", gap:8 }}>
                    <div style={{ width:44, height:44, borderRadius:12, background:"linear-gradient(135deg,#eff6ff,#dbeafe)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="13" r="4" stroke="#2563eb" strokeWidth="2"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ color:"#1e293b", fontWeight:700, fontSize:13 }}>Take Photo</div>
                      <div style={{ color:"#94a3b8", fontSize:11 }}>Use camera</div>
                    </div>
                  </button>
                </div>

                <div style={{ background:"#fff", borderRadius:12, padding:"12px 14px", border:"1px solid #e2e8f0" }}>
                  <div style={{ color:"#64748b", fontSize:11, fontWeight:600, marginBottom:8, letterSpacing:0.5 }}>WHAT WE DETECT</div>
                  <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                    {["Cockroaches","Bed Bugs","Termites","Rats","Mosquitoes","Ants","Wasps","Flies"].map(p => (
                      <span key={p} style={{ background:"#f1f5f9", color:"#475569", fontSize:11, padding:"3px 10px", borderRadius:20, fontWeight:500 }}>{p}</span>
                    ))}
                  </div>
                </div>
                <p style={{ color:"#cbd5e1", fontSize:11, textAlign:"center", marginTop:14 }}>Free scan • Instant AI results</p>
              </div>
            )}

            {/* SCANNING */}
            {step === "scanning" && (
              <div style={{ width:"100%", paddingTop:8, animation:"fadeIn 0.3s ease" }}>
                {imgData && (
                  <div style={{ position:"relative", borderRadius:16, overflow:"hidden", marginBottom:16 }}>
                    <img src={imgData} alt="scan" style={{ width:"100%", maxHeight:200, objectFit:"cover", display:"block" }} />
                    <div style={{ position:"absolute", left:0, right:0, height:2, background:"rgba(22,163,74,0.9)", animation:"scanLine 1s linear infinite", boxShadow:"0 0 12px rgba(22,163,74,1)" }} />
                    <div style={{ position:"absolute", inset:0, background:"rgba(22,163,74,0.1)" }} />
                    <div style={{ position:"absolute", top:10, left:10, background:"#16a34a", color:"#fff", fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:20, animation:"blink 0.8s infinite" }}>AI SCANNING</div>
                  </div>
                )}
                <div style={{ background:"#fff", borderRadius:14, padding:16, boxShadow:"0 2px 12px rgba(0,0,0,0.06)", border:"1px solid #e2e8f0" }}>
                  <div style={{ color:"#1e293b", fontWeight:700, fontSize:13, marginBottom:12 }}>Analyzing your photo...</div>
                  {SCAN_MESSAGES.map((msg, i) => (
                    <div key={i} style={{ display:"flex", alignItems:"center", gap:10, padding:"9px 0", borderBottom: i < SCAN_MESSAGES.length-1 ? "1px solid #f8fafc" : "none", opacity: scanStep > i ? 1 : 0.2, transition:"opacity 0.5s" }}>
                      <div style={{ width:20, height:20, borderRadius:"50%", background: scanStep > i ? "#16a34a" : "#e2e8f0", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"background 0.3s" }}>
                        {scanStep > i
                          ? <svg width="11" height="11" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          : <div style={{ width:6, height:6, borderRadius:"50%", background:"#94a3b8" }}/>
                        }
                      </div>
                      <span style={{ fontSize:13, color: scanStep > i ? "#1e293b" : "#94a3b8", fontWeight: scanStep > i ? 600 : 400 }}>{msg}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* RESULT */}
            {step === "result" && result && (
              <div style={{ width:"100%", animation:"shake 0.35s ease" }}>
                {imgData && (
                  <div style={{ position:"relative", borderRadius:14, overflow:"hidden", marginBottom:14 }}>
                    <img src={imgData} alt="pest" style={{ width:"100%", maxHeight:180, objectFit:"cover", display:"block" }} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(220,38,38,0.1), rgba(220,38,38,0.3))" }} />
                    <div style={{ position:"absolute", top:10, left:10, background:"#dc2626", color:"#fff", fontSize:10, fontWeight:700, padding:"4px 10px", borderRadius:20 }}>PEST IDENTIFIED</div>
                  </div>
                )}
                <div style={{ background:"#fff", borderRadius:16, overflow:"hidden", boxShadow:`0 4px 24px rgba(220,38,38,0.15)`, border:`2px solid ${riskColor}`, marginBottom:12 }}>
                  <div style={{ background:riskColor, padding:"12px 16px", display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ color:"#fff", fontWeight:800, fontSize:15 }}>{result.pestName} Detected</div>
                      <div style={{ color:"rgba(255,255,255,0.8)", fontSize:11, marginTop:2 }}>Risk Level: {result.riskLevel}</div>
                    </div>
                    <div style={{ background:"rgba(255,255,255,0.2)", borderRadius:8, padding:"4px 10px" }}>
                      <span style={{ color:"#fff", fontSize:11, fontWeight:700 }}>{result.riskLevel}</span>
                    </div>
                  </div>
                  <div style={{ padding:"14px 16px" }}>
                    <p style={{ fontSize:13, color:"#1e293b", lineHeight:1.65, margin:"0 0 12px" }}>{result.description}</p>
                    {result.signs && (
                      <div style={{ background:"#fffbeb", borderRadius:10, padding:"10px 12px", marginBottom:10, border:"1px solid #fde68a" }}>
                        <div style={{ fontSize:11, fontWeight:700, color:"#92400e", marginBottom:3 }}>Signs of infestation</div>
                        <div style={{ fontSize:12, color:"#78350f", lineHeight:1.5 }}>{result.signs}</div>
                      </div>
                    )}
                    {result.treatment && (
                      <div style={{ background:"#f0fdf4", borderRadius:10, padding:"10px 12px", marginBottom:14, border:"1px solid #bbf7d0" }}>
                        <div style={{ fontSize:11, fontWeight:700, color:"#15803d", marginBottom:3 }}>Recommended treatment</div>
                        <div style={{ fontSize:12, color:"#166534", lineHeight:1.5 }}>{result.treatment}</div>
                      </div>
                    )}
                    <button onClick={contactWhatsApp} style={{ width:"100%", background:"linear-gradient(135deg,#25D366,#128C7E)", color:"#fff", border:"none", borderRadius:12, padding:"13px", fontSize:14, fontWeight:700, cursor:"pointer", boxShadow:"0 4px 14px rgba(37,211,102,0.35)", marginBottom:10 }}>
                      Contact Pest Expert Now
                    </button>
                    <div style={{ background:"#f8fafc", borderRadius:10, padding:"9px 12px", textAlign:"center", border:"1px solid #e2e8f0" }}>
                      <p style={{ fontSize:11, color:"#64748b", margin:0, lineHeight:1.5 }}>Your photo will auto-download then WhatsApp opens. Attach the photo and send it to our expert.</p>
                    </div>
                  </div>
                </div>
                <button onClick={reset} style={{ width:"100%", background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"11px", fontSize:13, color:"#64748b", cursor:"pointer", fontWeight:600 }}>Scan Another Photo</button>
              </div>
            )}

            {/* NOT FOUND */}
            {step === "notfound" && (
              <div style={{ textAlign:"center", paddingTop:24, animation:"fadeIn 0.3s ease", width:"100%" }}>
                <div style={{ width:64, height:64, borderRadius:"50%", background:"#fffbeb", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <circle cx="11" cy="11" r="7" stroke="#d97706" strokeWidth="2"/>
                    <path d="M16.5 16.5L21 21" stroke="#d97706" strokeWidth="2.5" strokeLinecap="round"/>
                    <path d="M11 8v4M11 14v1" stroke="#d97706" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{ color:"#d97706", margin:"0 0 8px", fontSize:17, fontWeight:700 }}>No Pest Detected</h3>
                <p style={{ color:"#64748b", fontSize:13, lineHeight:1.6, margin:"0 0 20px" }}>{result?.message || "We couldn't detect a pest. Please try a clearer, closer photo."}</p>
                <div style={{ display:"flex", gap:10 }}>
                  <button onClick={() => fileRef.current.click()} style={{ flex:1, background:"#fff", border:"1.5px solid #e2e8f0", borderRadius:12, padding:"11px", fontSize:13, color:"#475569", cursor:"pointer", fontWeight:600 }}>Upload Photo</button>
                  <button onClick={() => cameraRef.current.click()} style={{ flex:1, background:"linear-gradient(135deg,#15803d,#16a34a)", color:"#fff", border:"none", borderRadius:12, padding:"11px", fontSize:13, fontWeight:700, cursor:"pointer" }}>Take Photo</button>
                </div>
              </div>
            )}

            {/* ERROR */}
            {step === "error" && (
              <div style={{ textAlign:"center", paddingTop:24, animation:"fadeIn 0.3s ease", width:"100%" }}>
                <div style={{ width:64, height:64, borderRadius:"50%", background:"#fef2f2", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 14px" }}>
                  <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="9" stroke="#dc2626" strokeWidth="2"/>
                    <path d="M12 8v5M12 15v1" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 style={{ color:"#dc2626", margin:"0 0 8px", fontSize:17, fontWeight:700 }}>Scan Failed</h3>
                <p style={{ color:"#64748b", fontSize:13, margin:"0 0 20px", lineHeight:1.5 }}>Something went wrong. Check your connection and try again.</p>
                <button onClick={reset} style={{ background:"#dc2626", color:"#fff", border:"none", borderRadius:12, padding:"11px 28px", fontSize:13, fontWeight:700, cursor:"pointer" }}>Try Again</button>
              </div>
            )}
          </div>

          {/* WhatsApp bar */}
          <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
            style={{ background:"#25D366", color:"#fff", textAlign:"center", padding:"11px", fontSize:12, fontWeight:700, textDecoration:"none", display:"block", flexShrink:0, letterSpacing:0.3 }}>
            WhatsApp Us — Free Inspection & Fast Response
          </a>
        </div>
      )}

      {/* Hidden file inputs */}
      <input ref={fileRef} type="file" accept="image/*" onChange={handleFile} style={{ display:"none" }} />
      <input ref={cameraRef} type="file" accept="image/*" capture="environment" onChange={handleCamera} style={{ display:"none" }} />
    </>
  );
}