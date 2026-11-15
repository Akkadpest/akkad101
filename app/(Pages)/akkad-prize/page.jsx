"use client";
import { useState, useRef, useEffect } from "react";

const WHATSAPP_NUMBER = "97144251557";
const ADMIN_PASS = "akkad2025";

// ── Segments: overall win rate ~35%, 20% OFF dominates wins ───────────────────
// Total pool = 100. Win=35 (20%OFF=21,30%OFF=9,50%OFF=3,Free=2), Lose=65
const SEGMENTS = [
  { label: "20% OFF",       color: "#16a34a", lose: false, chance: 21 },
  { label: "No Luck",       color: "#94a3b8", lose: true,  chance: 17 },
  { label: "30% OFF",       color: "#0891b2", lose: false, chance: 9  },
  { label: "No Luck",       color: "#64748b", lose: true,  chance: 16 },
  { label: "50% OFF",       color: "#f59e0b", lose: false, chance: 3  },
  { label: "No Luck",       color: "#94a3b8", lose: true,  chance: 16 },
  { label: "Free\nService", color: "#ef4444", lose: false, chance: 2  },
  { label: "No Luck",       color: "#64748b", lose: true,  chance: 16 },
];

const PRIZE_TEMPLATES = {
  "20% OFF": {
    title: "20% Discount",
    subtitle: "OFF your next treatment",
    desc: "Valid for apartments & villas. Book within 30 days.",
    codePrefix: "AKKAD20",
    color: "#16a34a", bg: "#f0fdf4", border: "#bbf7d0", emoji: "🎉",
    terms: "Valid for 1 booking. Cannot be combined with other offers.",
  },
  "30% OFF": {
    title: "30% Discount",
    subtitle: "OFF your next treatment",
    desc: "Valid for apartments & villas. Book within 30 days.",
    codePrefix: "AKKAD30",
    color: "#0891b2", bg: "#f0f9ff", border: "#bae6fd", emoji: "🎊",
    terms: "Valid for 1 booking. Cannot be combined with other offers.",
  },
  "50% OFF": {
    title: "50% Discount",
    subtitle: "OFF your next treatment",
    desc: "Valid for apartments & villas. Book within 30 days.",
    codePrefix: "AKKAD50",
    color: "#d97706", bg: "#fffbeb", border: "#fde68a", emoji: "🏆",
    terms: "Valid for 1 booking. Cannot be combined with other offers.",
  },
  "Free\nService": {
    title: "Free Service",
    subtitle: "One complete treatment on us",
    desc: "Full pest control treatment — completely FREE.",
    codePrefix: "AKKAD-FREE",
    color: "#dc2626", bg: "#fff1f2", border: "#fecdd3", emoji: "🎁",
    terms: "Valid for 1 standard treatment. Subject to availability.",
  },
};

const SEG_ANGLE = 360 / SEGMENTS.length;

function weightedRandom() {
  const pool = [];
  SEGMENTS.forEach((s, i) => { for (let t = 0; t < s.chance; t++) pool.push(i); });
  return pool[Math.floor(Math.random() * pool.length)];
}

function generateVoucherCode(prefix) {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let suffix = "";
  for (let i = 0; i < 6; i++) suffix += chars[Math.floor(Math.random() * chars.length)];
  return `${prefix}-${suffix}`;
}

// ── Wheel Component ───────────────────────────────────────────────────────────
function Wheel({ rotation, spinning, onSpin, disabled, size = 340 }) {
  const cx = size / 2, cy = size / 2, r = size / 2 - 4;
  const hubR = size * 0.13;
  const WHEEL_COLORS = ["#16a34a","#e2e8f0","#0891b2","#cbd5e1","#f59e0b","#e2e8f0","#ef4444","#cbd5e1"];

  const renderArcText = (seg, i) => {
    const midAngle = (i * SEG_ANGLE + SEG_ANGLE / 2 - 90) * Math.PI / 180;
    const textR = r * 0.62;
    const tx = cx + textR * Math.cos(midAngle);
    const ty = cy + textR * Math.sin(midAngle);
    const angleDeg = (midAngle * 180 / Math.PI) + 90;
    const lines = seg.label.split("\n");
    const isWin = !seg.lose;
    const fs = size < 300 ? (isWin ? 9 : 8) : (isWin ? 12 : 10);
    const textColor = isWin ? "#ffffff" : "#475569";
    return (
      <g key={`text-${i}`} transform={`rotate(${angleDeg}, ${tx}, ${ty})`}>
        {lines.length === 1 ? (
          <text x={tx} y={ty} textAnchor="middle" dominantBaseline="middle"
            fill={textColor} fontSize={fs} fontWeight={isWin ? "800" : "500"}
            fontFamily="'Segoe UI', sans-serif" letterSpacing={isWin ? "0.3" : "0"}
          >{seg.label}</text>
        ) : (
          <>
            <text x={tx} y={ty - fs * 0.75} textAnchor="middle" dominantBaseline="middle"
              fill={textColor} fontSize={fs} fontWeight="800"
              fontFamily="'Segoe UI', sans-serif" letterSpacing="0.3"
            >{lines[0]}</text>
            <text x={tx} y={ty + fs * 0.75} textAnchor="middle" dominantBaseline="middle"
              fill={textColor} fontSize={fs - 1} fontWeight="600"
              fontFamily="'Segoe UI', sans-serif"
            >{lines[1]}</text>
          </>
        )}
      </g>
    );
  };

  return (
    <div style={{ position:"relative", userSelect:"none", display:"flex", alignItems:"center", justifyContent:"center", width:size+32, height:size+32 }}>
      {/* Pointer */}
      <div style={{ position:"absolute", top:-2, left:"50%", transform:"translateX(-50%)", zIndex:20, filter:"drop-shadow(0 2px 8px rgba(0,0,0,0.2))" }}>
        <svg width="22" height="30" viewBox="0 0 22 30">
          <polygon points="11,30 0,0 22,0" fill="#1e293b"/>
          <polygon points="11,23 4,4 18,4" fill="#334155"/>
        </svg>
      </div>
      {/* Outer ring */}
      <div style={{ position:"absolute", top:16, left:0, width:size+32, height:size+32, borderRadius:"50%", background:"linear-gradient(145deg,#f1f5f9,#e2e8f0)", boxShadow:"0 8px 40px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,1)", display:"flex", alignItems:"center", justifyContent:"center" }}>
        {/* Gold ring */}
        <div style={{ width:size+14, height:size+14, borderRadius:"50%", background:"linear-gradient(135deg,#fbbf24,#f59e0b,#d97706)", display:"flex", alignItems:"center", justifyContent:"center", boxShadow:"0 0 0 2px #fff, 0 4px 16px rgba(245,158,11,0.35)" }}>
          <div style={{ width:size+4, height:size+4, borderRadius:"50%", background:"#fff", display:"flex", alignItems:"center", justifyContent:"center" }}>
            {/* Spinning disc */}
            <div style={{ width:size, height:size, borderRadius:"50%", transition:spinning?"transform 5s cubic-bezier(0.08,0.82,0.17,1)":"none", transform:`rotate(${rotation}deg)`, cursor:disabled||spinning?"default":"pointer", overflow:"hidden" }}
              onClick={!disabled&&!spinning?onSpin:undefined}>
              <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
                {SEGMENTS.map((seg, i) => {
                  const sa = (i*SEG_ANGLE-90)*Math.PI/180, ea = ((i+1)*SEG_ANGLE-90)*Math.PI/180;
                  const x1=cx+r*Math.cos(sa), y1=cy+r*Math.sin(sa), x2=cx+r*Math.cos(ea), y2=cy+r*Math.sin(ea);
                  return <path key={i} d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`} fill={WHEEL_COLORS[i%WHEEL_COLORS.length]} stroke="#fff" strokeWidth="2"/>;
                })}
                {SEGMENTS.map((seg, i) => renderArcText(seg, i))}
                <circle cx={cx} cy={cy} r={hubR+6} fill="#fff" stroke="#e2e8f0" strokeWidth="2"/>
                <circle cx={cx} cy={cy} r={hubR+2} fill="#1e293b"/>
                <circle cx={cx} cy={cy} r={hubR-2} fill="#0f172a"/>
                <text x={cx} y={cy-6} textAnchor="middle" fill="#f59e0b" fontSize={size*0.032} fontWeight="900" fontFamily="'Segoe UI',sans-serif" letterSpacing="1.5">AKKAD</text>
                <text x={cx} y={cy+8} textAnchor="middle" fill="rgba(134,239,172,0.85)" fontSize={size*0.018} fontFamily="'Segoe UI',sans-serif" letterSpacing="0.5">PEST CONTROL</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Coupon Card ───────────────────────────────────────────────────────────────
function CouponCard({ prize, code }) {
  return (
    <div style={{ background:prize.bg, border:`2px dashed ${prize.border}`, borderRadius:16, padding:"20px 22px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", left:-12, top:"50%", transform:"translateY(-50%)", width:24, height:24, borderRadius:"50%", background:"#fff", border:`2px solid ${prize.border}` }}/>
      <div style={{ position:"absolute", right:-12, top:"50%", transform:"translateY(-50%)", width:24, height:24, borderRadius:"50%", background:"#fff", border:`2px solid ${prize.border}` }}/>
      <div style={{ textAlign:"center" }}>
        <div style={{ fontSize:30, marginBottom:6 }}>{prize.emoji}</div>
        <div style={{ color:prize.color, fontWeight:900, fontSize:22, letterSpacing:-0.5, lineHeight:1 }}>{prize.title}</div>
        <div style={{ color:"#64748b", fontSize:12, marginTop:3, marginBottom:12 }}>{prize.subtitle}</div>
        <div style={{ borderTop:`1.5px dashed ${prize.border}`, marginBottom:12 }}/>
        <div style={{ color:"#94a3b8", fontSize:10, fontWeight:700, letterSpacing:2, marginBottom:6, textTransform:"uppercase" }}>Your Unique Voucher Code</div>
        <div style={{ background:"#fff", border:`2px solid ${prize.color}`, borderRadius:10, padding:"10px 14px", fontFamily:"'Courier New',monospace", fontSize:20, fontWeight:900, color:prize.color, letterSpacing:4, boxShadow:`0 2px 12px ${prize.color}20` }}>{code}</div>
        <div style={{ color:"#94a3b8", fontSize:10, marginTop:10, lineHeight:1.5 }}>{prize.terms}</div>
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
  const [submitted, setSubmitted] = useState(false);
  const [voucherCode, setVoucherCode] = useState("");

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Required";
    if (!email.trim() || !email.includes("@")) e.email = "Valid email required";
    if (!phone.trim()) e.phone = "Required";
    setErrs(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    const code = generateVoucherCode(prize.codePrefix);
    setVoucherCode(code);
    setSubmitted(true);
    await onSubmit({ name, email, phone, code });
  };

  const fields = [
    { key:"name",  label:"Full Name",      placeholder:"Ahmed Al Mansouri", type:"text",  val:name,  set:setName  },
    { key:"email", label:"Email Address",   placeholder:"ahmed@email.com",   type:"email", val:email, set:setEmail },
    { key:"phone", label:"WhatsApp Number", placeholder:"0501234567",        type:"tel",   val:phone, set:setPhone },
  ];

  return (
    <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.7)", backdropFilter:"blur(6px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9999, padding:20 }}>
      <style>{`@keyframes slideUp{from{opacity:0;transform:translateY(24px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}`}</style>
      <div style={{ background:"#fff", borderRadius:24, padding:"28px 24px", maxWidth:360, width:"100%", animation:"slideUp 0.4s cubic-bezier(0.34,1.56,0.64,1)", boxShadow:"0 24px 80px rgba(0,0,0,0.22)", maxHeight:"90vh", overflowY:"auto" }}>

        {!submitted ? (
          <>
            <div style={{ textAlign:"center", marginBottom:20 }}>
              <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:prize.bg, border:`1px solid ${prize.border}`, borderRadius:20, padding:"5px 14px", marginBottom:14 }}>
                <span style={{ fontSize:14 }}>{prize.emoji}</span>
                <span style={{ color:prize.color, fontWeight:800, fontSize:12, letterSpacing:1 }}>YOU WON!</span>
              </div>
              <div style={{ background:prize.bg, border:`1.5px solid ${prize.border}`, borderRadius:14, padding:"16px 14px", marginBottom:16 }}>
                <div style={{ color:prize.color, fontWeight:900, fontSize:20 }}>{prize.title}</div>
                <div style={{ color:"#64748b", fontSize:12, marginTop:3 }}>{prize.subtitle}</div>
                <div style={{ color:"#94a3b8", fontSize:11, marginTop:10, lineHeight:1.5 }}>{prize.desc}</div>
                <div style={{ marginTop:12, background:"rgba(0,0,0,0.03)", border:"1.5px dashed #cbd5e1", borderRadius:10, padding:"10px 12px", display:"flex", alignItems:"center", gap:8, justifyContent:"center" }}>
                  <span style={{ fontSize:16 }}>🔒</span>
                  <span style={{ color:"#94a3b8", fontSize:11, fontWeight:600 }}>Voucher code unlocks after submitting</span>
                </div>
              </div>
              <div style={{ color:"#1e293b", fontWeight:700, fontSize:14 }}>Enter your details to claim</div>
              <div style={{ color:"#94a3b8", fontSize:11, marginTop:3 }}>Used only to send your discount</div>
            </div>

            {fields.map(f => (
              <div key={f.key} style={{ marginBottom:12 }}>
                <label style={{ color:"#475569", fontSize:11, fontWeight:700, marginBottom:5, display:"block", textTransform:"uppercase", letterSpacing:0.5 }}>{f.label}</label>
                <input value={f.val} onChange={e=>f.set(e.target.value)} placeholder={f.placeholder} type={f.type}
                  style={{ width:"100%", background:"#f8fafc", border:`1.5px solid ${errs[f.key]?"#ef4444":"#e2e8f0"}`, borderRadius:10, padding:"11px 13px", color:"#0f172a", fontSize:14, outline:"none", boxSizing:"border-box", fontFamily:"inherit" }}/>
                {errs[f.key] && <div style={{ color:"#ef4444", fontSize:10, marginTop:3 }}>{errs[f.key]}</div>}
              </div>
            ))}

            <button onClick={handleSubmit} disabled={loading}
              style={{ width:"100%", background:loading?"#f1f5f9":"linear-gradient(135deg,#25D366,#128C7E)", color:loading?"#94a3b8":"#fff", border:"none", borderRadius:12, padding:"13px", fontSize:14, fontWeight:800, cursor:loading?"not-allowed":"pointer", marginTop:4, boxShadow:loading?"none":"0 4px 20px rgba(37,211,102,0.3)" }}>
              {loading ? "Saving..." : "🎁 Reveal My Voucher Code"}
            </button>
            <p style={{ color:"#94a3b8", fontSize:10, textAlign:"center", marginTop:10, marginBottom:0, lineHeight:1.6 }}>
              Screenshot the next screen — your code is unique to you.
            </p>
          </>
        ) : (
          <>
            <div style={{ textAlign:"center", marginBottom:16 }}>
              <div style={{ fontSize:40, marginBottom:8 }}>✅</div>
              <div style={{ color:"#1e293b", fontWeight:900, fontSize:18, marginBottom:4 }}>Your Voucher is Ready!</div>
              <div style={{ color:"#64748b", fontSize:12 }}>Screenshot this screen as proof of your win</div>
            </div>
            <CouponCard prize={prize} code={voucherCode}/>
            <div style={{ background:"#fffbeb", border:"1px solid #fde68a", borderRadius:10, padding:"10px 14px", margin:"14px 0", display:"flex", gap:8, alignItems:"flex-start" }}>
              <span style={{ fontSize:16 }}>📸</span>
              <span style={{ color:"#92400e", fontSize:11, lineHeight:1.5, fontWeight:600 }}>Take a screenshot now! This code is unique to you and cannot be regenerated.</span>
            </div>
            <div style={{ color:"#64748b", fontSize:12, textAlign:"center", marginBottom:14, lineHeight:1.6 }}>
              We've opened WhatsApp — send the message to book your service with this code.
            </div>
            <div style={{ background:"#f8fafc", borderRadius:10, padding:"10px 14px", textAlign:"center" }}>
              <div style={{ color:"#94a3b8", fontSize:10, marginBottom:2 }}>Need help? Call us directly</div>
              <div style={{ color:"#0891b2", fontWeight:700, fontSize:12 }}>+971 4 425 1557</div>
            </div>
          </>
        )}
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
    setAuth(true); setLoading(true);
    try { const res = await fetch("/api/leads"); const data = await res.json(); setLeads(data.leads||[]); } catch { setLeads([]); }
    setLoading(false);
  };

  const exportCSV = () => {
    const rows = [["Name","Email","Phone","Prize","Code","Date"],...leads.map(l=>[l.name,l.email,l.phone,l.prize||"No Luck",l.code||"-",l.date])];
    const csv = rows.map(r=>r.map(c=>`"${c}"`).join(",")).join("\n");
    const a = document.createElement("a"); a.href="data:text/csv;charset=utf-8,"+encodeURIComponent(csv); a.download="akkad-leads.csv"; a.click();
  };

  const s = { minHeight:"100vh", background:"#f8fafc", fontFamily:"'Segoe UI',sans-serif", padding:24 };

  if (!auth) return (
    <div style={{ ...s, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <div style={{ background:"#fff", borderRadius:20, padding:32, maxWidth:320, width:"100%", textAlign:"center", boxShadow:"0 4px 24px rgba(0,0,0,0.08)", border:"1px solid #e2e8f0" }}>
        <div style={{ width:48, height:48, background:"#f0fdf4", borderRadius:14, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 16px", fontSize:22 }}>🔐</div>
        <h2 style={{ color:"#1e293b", margin:"0 0 6px", fontSize:18, fontWeight:800 }}>Admin Access</h2>
        <p style={{ color:"#64748b", fontSize:12, margin:"0 0 20px" }}>Enter password to view leads</p>
        <input value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&login()} type="password" placeholder="Password"
          style={{ width:"100%", background:"#f8fafc", border:"1.5px solid #e2e8f0", borderRadius:10, padding:"11px 13px", color:"#1e293b", fontSize:13, outline:"none", boxSizing:"border-box", marginBottom:10, fontFamily:"inherit" }}/>
        {err && <div style={{ color:"#ef4444", fontSize:11, marginBottom:8 }}>{err}</div>}
        <button onClick={login} style={{ width:"100%", background:"#1e293b", color:"#fff", border:"none", borderRadius:10, padding:"11px", fontSize:13, fontWeight:700, cursor:"pointer", marginBottom:10 }}>Login</button>
        <button onClick={onBack} style={{ background:"none", border:"none", color:"#94a3b8", fontSize:11, cursor:"pointer" }}>← Back to wheel</button>
      </div>
    </div>
  );

  const winners = leads.filter(l=>l.prize&&l.prize!=="No Luck");
  const losers  = leads.filter(l=>!l.prize||l.prize==="No Luck");

  return (
    <div style={s}>
      <div style={{ maxWidth:860, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:24, flexWrap:"wrap", gap:12 }}>
          <div>
            <div style={{ color:"#1e293b", fontWeight:900, fontSize:20 }}>AKKAD Leads Dashboard</div>
            <div style={{ color:"#64748b", fontSize:12, marginTop:2 }}>{leads.length} total entries</div>
          </div>
          <div style={{ display:"flex", gap:8 }}>
            <button onClick={exportCSV} style={{ background:"#16a34a", color:"#fff", border:"none", borderRadius:8, padding:"9px 16px", fontSize:12, fontWeight:700, cursor:"pointer" }}>Export CSV</button>
            <button onClick={onBack} style={{ background:"#fff", color:"#475569", border:"1px solid #e2e8f0", borderRadius:8, padding:"9px 16px", fontSize:12, cursor:"pointer" }}>← Back</button>
          </div>
        </div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))", gap:12, marginBottom:24 }}>
          {[
            { label:"Total Leads", val:leads.length,   color:"#1e293b", bg:"#f8fafc", border:"#e2e8f0" },
            { label:"Winners",     val:winners.length,  color:"#16a34a", bg:"#f0fdf4", border:"#bbf7d0" },
            { label:"No Luck",     val:losers.length,   color:"#64748b", bg:"#f8fafc", border:"#e2e8f0" },
            { label:"Win Rate",    val:leads.length?Math.round(winners.length/leads.length*100)+"%":"—", color:"#0891b2", bg:"#f0f9ff", border:"#bae6fd" },
          ].map((stat,i)=>(
            <div key={i} style={{ background:stat.bg, borderRadius:14, padding:"16px 18px", border:`1px solid ${stat.border}` }}>
              <div style={{ color:stat.color, fontSize:28, fontWeight:900 }}>{stat.val}</div>
              <div style={{ color:"#94a3b8", fontSize:11, marginTop:3, fontWeight:600, textTransform:"uppercase", letterSpacing:0.5 }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {loading ? (
          <div style={{ textAlign:"center", color:"#94a3b8", padding:48, fontSize:13 }}>Loading leads...</div>
        ) : leads.length===0 ? (
          <div style={{ textAlign:"center", color:"#94a3b8", padding:48, fontSize:13, background:"#fff", borderRadius:16, border:"1px solid #e2e8f0" }}>No leads yet. Share the spin wheel to collect entries!</div>
        ) : leads.map((l,i)=>{
          const isWinner = l.prize&&l.prize!=="No Luck";
          return (
            <div key={i} style={{ background:"#fff", borderRadius:12, padding:"14px 18px", border:`1px solid ${isWinner?"#bbf7d0":"#e2e8f0"}`, display:"grid", gridTemplateColumns:"1fr auto", gap:"6px 16px", marginBottom:8, alignItems:"center" }}>
              <div>
                <div style={{ color:"#1e293b", fontWeight:700, fontSize:14 }}>{l.name}</div>
                <div style={{ color:"#64748b", fontSize:11, marginTop:2 }}>{l.phone} · {l.email}</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ display:"inline-block", background:isWinner?"#f0fdf4":"#f8fafc", color:isWinner?"#16a34a":"#64748b", border:`1px solid ${isWinner?"#bbf7d0":"#e2e8f0"}`, borderRadius:20, padding:"3px 10px", fontSize:11, fontWeight:700, marginBottom:4 }}>{l.prize||"No Luck"}</div>
                {l.code&&l.code!=="-"&&<div style={{ color:"#f59e0b", fontSize:11, fontWeight:800, fontFamily:"monospace", letterSpacing:1 }}>{l.code}</div>}
                <div style={{ color:"#cbd5e1", fontSize:10, marginTop:2 }}>{l.date}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Main Page ─────────────────────────────────────────────────────────────────
export default function SpinPage() {
  const [page, setPage]                   = useState("wheel");
  const [spinning, setSpinning]           = useState(false);
  const [rotation, setRotation]           = useState(0);
  const [result, setResult]               = useState(null);
  const [hasWon, setHasWon]               = useState(false);
  const [showClaimForm, setShowClaimForm] = useState(false);
  const [showLoseModal, setShowLoseModal] = useState(false);
  const [claimLoading, setClaimLoading]   = useState(false);
  const [spinsLeft, setSpinsLeft]         = useState(3);
  const [ready, setReady]                 = useState(false);
  const currentRotation = useRef(0);

  useEffect(() => {
    const saved = localStorage.getItem("akkad_spin");
    if (saved) {
      try { const s=JSON.parse(saved); setSpinsLeft(s.spinsLeft??3); setHasWon(s.hasWon??false); } catch {}
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem("akkad_spin", JSON.stringify({ spinsLeft, hasWon }));
  }, [spinsLeft, hasWon, ready]);

  const spin = () => {
    if (spinning||hasWon||spinsLeft<=0) return;
    setSpinning(true); setShowLoseModal(false);
    const idx = weightedRandom();
    const segCenter = idx*SEG_ANGLE+SEG_ANGLE/2;
    const target = 270-segCenter;
    const extra = (7+Math.floor(Math.random()*4))*360;
    const final = currentRotation.current+extra+((target-(currentRotation.current%360))+360)%360;
    currentRotation.current = final;
    setRotation(final);
    setTimeout(() => {
      const seg = SEGMENTS[idx];
      setResult(seg); setSpinning(false);
      if (!seg.lose) { setHasWon(true); setShowClaimForm(true); }
      else { setSpinsLeft(s=>s-1); setShowLoseModal(true); }
    }, 5200);
  };

  const handleClaim = async ({ name, email, phone, code }) => {
    setClaimLoading(true);
    const template = PRIZE_TEMPLATES[result.label];
    const payload = { name, email, phone, prize:template.title, code, date:new Date().toLocaleString("en-GB") };
    const sheetsUrl = process.env.NEXT_PUBLIC_SHEETS_URL;
    if (sheetsUrl) {
      try { await fetch(sheetsUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}); } catch(e){console.error(e);}
    }
    try { await fetch("/api/leads",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(payload)}); } catch(e){console.error(e);}
    const msg = encodeURIComponent(`AKKAD Spin & Win\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nPrize: ${template.title}\nCode: ${code}\n\nI would like to claim my prize.`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`,"_blank");
    setClaimLoading(false);
  };

  const waOffer = () => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I tried the AKKAD spin wheel. Can I get a special offer?")}`, "_blank");
  const wheelSize = typeof window!=="undefined" ? Math.min(window.innerWidth-56,360) : 340;

  if (page==="admin") return <AdminPanel onBack={()=>setPage("wheel")}/>;

  if (!ready) return (
    <div style={{ minHeight:"100vh", display:"flex", alignItems:"center", justifyContent:"center", background:"#fff" }}>
      <div style={{ color:"#94a3b8", fontSize:13 }}>Loading...</div>
    </div>
  );

  if (hasWon&&!showClaimForm) return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#fff", fontFamily:"'Segoe UI',sans-serif", padding:24, textAlign:"center" }}>
      <div style={{ background:"#f0fdf4", borderRadius:24, padding:"40px 32px", maxWidth:360, width:"100%", border:"1px solid #bbf7d0", boxShadow:"0 4px 24px rgba(22,163,74,0.08)" }}>
        <div style={{ fontSize:52, marginBottom:12 }}>🏆</div>
        <div style={{ color:"#16a34a", fontWeight:900, fontSize:20, marginBottom:8 }}>You Already Won!</div>
        <p style={{ color:"#64748b", fontSize:13, lineHeight:1.7, margin:"0 0 24px" }}>You've already claimed your prize. Contact our team to book your service using your voucher code.</p>
        <button onClick={waOffer} style={{ width:"100%", background:"linear-gradient(135deg,#25D366,#128C7E)", color:"#fff", border:"none", borderRadius:12, padding:"13px", fontSize:14, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 16px rgba(37,211,102,0.3)" }}>
          Contact Us on WhatsApp
        </button>
      </div>
    </div>
  );

  if (spinsLeft<=0&&!spinning) return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#fff", fontFamily:"'Segoe UI',sans-serif", padding:24, textAlign:"center" }}>
      <div style={{ background:"#fff", borderRadius:24, padding:"40px 32px", maxWidth:360, width:"100%", border:"1px solid #e2e8f0", boxShadow:"0 4px 24px rgba(0,0,0,0.06)" }}>
        <div style={{ fontSize:52, marginBottom:12 }}>😔</div>
        <div style={{ color:"#1e293b", fontWeight:900, fontSize:20, marginBottom:8 }}>No Spins Remaining</div>
        <p style={{ color:"#64748b", fontSize:13, lineHeight:1.7, margin:"0 0 24px" }}>You've used all your spins. Contact our team — we'll give you a special offer!</p>
        <button onClick={waOffer} style={{ width:"100%", background:"linear-gradient(135deg,#25D366,#128C7E)", color:"#fff", border:"none", borderRadius:12, padding:"13px", fontSize:14, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 16px rgba(37,211,102,0.3)" }}>
          Get Special Offer on WhatsApp
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", background:"#ffffff", fontFamily:"'Segoe UI',Arial,sans-serif", padding:"24px 16px", position:"relative", overflow:"hidden" }}>
      <style>{`
        @keyframes popIn{from{opacity:0;transform:scale(0.85)}to{opacity:1;transform:scale(1)}}
        @keyframes spinBtn{0%,100%{box-shadow:0 4px 20px rgba(22,163,74,0.2)}50%{box-shadow:0 4px 36px rgba(22,163,74,0.5)}}
        @keyframes fadeIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
      `}</style>

      {/* Subtle bg accents */}
      <div style={{ position:"absolute", top:-140, right:-140, width:420, height:420, borderRadius:"50%", background:"radial-gradient(circle,rgba(22,163,74,0.05) 0%,transparent 70%)", pointerEvents:"none" }}/>
      <div style={{ position:"absolute", bottom:-120, left:-120, width:380, height:380, borderRadius:"50%", background:"radial-gradient(circle,rgba(8,145,178,0.04) 0%,transparent 70%)", pointerEvents:"none" }}/>

      {/* Header */}
      <div style={{ textAlign:"center", marginBottom:28, zIndex:1, animation:"fadeIn 0.5s ease" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:10, marginBottom:16, background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:16, padding:"8px 16px" }}>
          <div style={{ width:36, height:36, background:"#1e293b", borderRadius:9, display:"flex", alignItems:"center", justifyContent:"center" }}>
            <span style={{ color:"#f59e0b", fontWeight:900, fontSize:14, letterSpacing:0.5 }}>A</span>
          </div>
          <div style={{ textAlign:"left" }}>
            <div style={{ color:"#1e293b", fontWeight:900, fontSize:16, letterSpacing:3, lineHeight:1 }}>AKKAD</div>
            <div style={{ color:"#94a3b8", fontSize:8, letterSpacing:3, fontWeight:600 }}>PEST CONTROL</div>
          </div>
        </div>

        <div style={{ maxWidth:320, margin:"0 auto" }}>
          <h1 style={{ color:"#1e293b", fontSize:26, fontWeight:900, margin:"0 0 6px", letterSpacing:-0.5 }}>Spin & Win</h1>
          <p style={{ color:"#64748b", fontSize:13, margin:"0 0 16px", lineHeight:1.6 }}>
            Spin the wheel for an exclusive discount on your pest control service
          </p>
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:spinsLeft>0?"#f0fdf4":"#fff1f2", border:`1px solid ${spinsLeft>0?"#bbf7d0":"#fecdd3"}`, borderRadius:20, padding:"6px 16px" }}>
            <span style={{ fontSize:13 }}>{spinsLeft>0?"🎯":"⛔"}</span>
            <span style={{ color:spinsLeft>0?"#16a34a":"#dc2626", fontWeight:700, fontSize:12 }}>
              {hasWon?"You won! Claim your prize.":spinsLeft>0?`${spinsLeft} spin${spinsLeft>1?"s":""} remaining`:"No spins left"}
            </span>
          </div>
        </div>
      </div>

      {/* Wheel */}
      <div style={{ zIndex:1, marginBottom:28, animation:"fadeIn 0.6s ease 0.1s both" }}>
        <Wheel rotation={rotation} spinning={spinning} onSpin={spin} disabled={hasWon||spinsLeft<=0} size={wheelSize}/>
      </div>

      {/* CTA */}
      <div style={{ zIndex:1, display:"flex", flexDirection:"column", alignItems:"center", gap:14, width:"100%", maxWidth:320, animation:"fadeIn 0.6s ease 0.2s both" }}>
        {!hasWon&&spinsLeft>0&&(
          <button onClick={spin} disabled={spinning} style={{ width:"100%", background:spinning?"#f1f5f9":"linear-gradient(135deg,#16a34a,#15803d)", color:spinning?"#94a3b8":"#fff", border:spinning?"1.5px solid #e2e8f0":"none", borderRadius:14, padding:"15px", fontSize:16, fontWeight:900, cursor:spinning?"not-allowed":"pointer", letterSpacing:1.5, animation:spinning?"none":"spinBtn 2s ease-in-out infinite", transition:"all 0.3s" }}>
            {spinning?"SPINNING...":"SPIN NOW"}
          </button>
        )}
        {hasWon&&(
          <button onClick={()=>setShowClaimForm(true)} style={{ width:"100%", background:"linear-gradient(135deg,#25D366,#128C7E)", color:"#fff", border:"none", borderRadius:14, padding:"15px", fontSize:15, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 20px rgba(37,211,102,0.35)" }}>
            🎁 Claim Your Prize on WhatsApp
          </button>
        )}

        {/* Prize legend */}
        <div style={{ display:"flex", gap:8, flexWrap:"wrap", justifyContent:"center" }}>
          {[["20% OFF","#16a34a"],["30% OFF","#0891b2"],["50% OFF","#f59e0b"],["Free Service","#ef4444"]].map(([label,color])=>(
            <div key={label} style={{ display:"flex", alignItems:"center", gap:5, background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:20, padding:"4px 10px" }}>
              <div style={{ width:8, height:8, borderRadius:"50%", background:color }}/>
              <span style={{ color:"#64748b", fontSize:10, fontWeight:600 }}>{label}</span>
            </div>
          ))}
        </div>

        <div style={{ display:"flex", alignItems:"center", gap:6 }}>
          <span style={{ color:"#e2e8f0", fontSize:11 }}>🔒</span>
          <span style={{ color:"#cbd5e1", fontSize:10 }}>Your details are private and never shared</span>
        </div>
      </div>

      {/* Lose Modal */}
      {showLoseModal&&!hasWon&&(
        <div style={{ position:"fixed", inset:0, background:"rgba(15,23,42,0.6)", backdropFilter:"blur(4px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:9999, padding:20 }}>
          <div style={{ background:"#fff", borderRadius:24, padding:"32px 28px", maxWidth:320, width:"100%", textAlign:"center", animation:"popIn 0.35s cubic-bezier(0.34,1.56,0.64,1)", boxShadow:"0 24px 80px rgba(0,0,0,0.18)" }}>
            <div style={{ fontSize:44, marginBottom:10 }}>😔</div>
            <h2 style={{ color:"#1e293b", margin:"0 0 8px", fontSize:20, fontWeight:900 }}>Not this time!</h2>
            <p style={{ color:"#64748b", fontSize:13, margin:"0 0 20px", lineHeight:1.6 }}>
              {spinsLeft>0?`You have ${spinsLeft} spin${spinsLeft>1?"s":""} left. Give it another go!`:"You've used all your spins. Contact us for a special offer."}
            </p>
            <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
              {spinsLeft>0&&<button onClick={()=>setShowLoseModal(false)} style={{ background:"linear-gradient(135deg,#16a34a,#15803d)", color:"#fff", border:"none", borderRadius:12, padding:"12px", fontSize:14, fontWeight:800, cursor:"pointer", boxShadow:"0 4px 16px rgba(22,163,74,0.3)" }}>Spin Again 🎯</button>}
              <button onClick={()=>{setShowLoseModal(false);waOffer();}} style={{ background:"#25D366", color:"#fff", border:"none", borderRadius:12, padding:"11px", fontSize:13, fontWeight:700, cursor:"pointer" }}>Contact Us on WhatsApp</button>
              <button onClick={()=>setShowLoseModal(false)} style={{ background:"none", border:"none", color:"#94a3b8", fontSize:11, cursor:"pointer", marginTop:2 }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {/* Claim Form */}
      {showClaimForm&&result&&PRIZE_TEMPLATES[result.label]&&(
        <ClaimForm prize={PRIZE_TEMPLATES[result.label]} onSubmit={handleClaim} loading={claimLoading}/>
      )}

      <button onClick={()=>setPage("admin")} style={{ position:"fixed", bottom:12, right:12, background:"none", border:"none", color:"#e2e8f0", fontSize:10, cursor:"pointer", zIndex:1 }}>Admin</button>
    </div>
  );
}