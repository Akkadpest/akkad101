import React from "react";
import Link from "next/link";

const CommercialBuildingsTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background: "linear-gradient(135deg,#1a2e1a 0%,#0d1a0d 100%)", padding: "72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-1 rounded-pill" style={{ border: "1px solid #6FB44A", color: "#6FB44A", fontSize: 13, fontWeight: 600 }}>
              <i className="bi bi-building"></i> Commercial Buildings
            </span>
            <h1 className="display-5 fw-bold mb-3" style={{ lineHeight: 1.2 }}>Water Tank Cleaning<br /><span style={{ color: "#6FB44A" }}>for Commercial Buildings</span></h1>
            <p className="mb-4" style={{ opacity: 0.8, fontSize: 17 }}>Professional water tank cleaning services tailored for commercial buildings in Dubai. We ensure your water supply meets health &amp; safety standards.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background: "#6FB44A", color: "#fff", border: "none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {[["bi-patch-check-fill","DM Licensed"],["bi-clock-fill","24 / 7 Service"],["bi-award-fill","10+ Yrs Exp"],["bi-star-fill","500+ Reviews"]].map(([ic,lb],i)=>(
                <div className="col-6" key={i}>
                  <div style={{ background: "rgba(111,180,74,0.12)", border: "1px solid rgba(111,180,74,0.3)", borderRadius: 14, padding: "20px 16px", textAlign: "center" }}>
                    <i className={"bi "+ic} style={{ color: "#6FB44A", fontSize: 28 }}></i>
                    <div className="text-white fw-semibold mt-2 small">{lb}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Services */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color: "#6FB44A", fontWeight: 700, fontSize: 13, letterSpacing: 2, textTransform: "uppercase" }}>What We Offer</span>
          <h2 className="fw-bold mt-2 mb-2">Commercial Tank Services</h2>
          <div style={{ width: 48, height: 4, background: "#6FB44A", borderRadius: 2, margin: "0 auto" }}></div>
        </div>
        <div className="row g-4">
          {[
            { ic: "bi-droplet-fill", t: "Deep Tank Cleaning", d: "Full removal of sediment, sludge, and biofilm from all commercial tank types." },
            { ic: "bi-shield-check", t: "Disinfection & Sanitization", d: "Hospital-grade disinfectants eliminate all bacteria, viruses, and fungi." },
            { ic: "bi-clipboard2-pulse", t: "Water Quality Testing", d: "On-site water analysis with certified laboratory reports." },
            { ic: "bi-tools", t: "Tank Inspection & Repair", d: "Structural inspection with detailed report on cracks and coating wear." },
            { ic: "bi-file-earmark-text", t: "Compliance Certificate", d: "Dubai Municipality compliance certificates issued after every service." },
            { ic: "bi-calendar-check", t: "Annual Maintenance", d: "Scheduled contracts to keep tanks in perfect condition year-round." },
          ].map((s,i)=>(
            <div className="col-md-6 col-lg-4" key={i}>
              <div style={{ borderLeft: "4px solid #6FB44A", padding: "22px 20px", borderRadius: "0 12px 12px 0", background: "#f9fdf6", height: "100%" }}>
                <i className={"bi "+s.ic} style={{ color: "#6FB44A", fontSize: 28 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">{s.t}</h3>
                <p className="text-muted small mb-0">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps */}
    <section className="py-5" style={{ background: "#f4fbef" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">How We Work</h2>
        </div>
        <div className="row g-0 align-items-start">
          {[
            { n:"01", t:"Site Survey", d:"Our engineer inspects your commercial property and assesses tank size and access." },
            { n:"02", t:"Tank Draining", d:"All water is safely drained and disposed of according to regulations." },
            { n:"03", t:"Scrubbing", d:"Manual and mechanical scrubbing removes all deposits and contaminants." },
            { n:"04", t:"Disinfect & Certify", d:"Approved disinfectants applied and DM certificate issued on completion." },
          ].map((s,i,arr)=>(
            <div className="col-md-3" key={i} style={{ position:"relative" }}>
              <div className="text-center px-3">
                <div style={{ width:56,height:56,background:"#6FB44A",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontWeight:700,fontSize:18,color:"#fff" }}>{s.n}</div>
                <h4 className="h6 fw-bold">{s.t}</h4>
                <p className="text-muted small">{s.d}</p>
              </div>
              {i < arr.length-1 && <div style={{ position:"absolute",top:27,right:0,width:"50%",height:2,background:"#6FB44A",opacity:0.3 }}></div>}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#1a2e1a" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Book Your Commercial Tank Cleaning Today</h2>
        <p className="mb-4" style={{ opacity:0.8 }}>Dubai Municipality certified. Same-day service available across all Dubai districts.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-5"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li><li className="breadcrumb-item active">Commercial Buildings</li></ol></nav>
    </div>
  </div>
);

export default CommercialBuildingsTank;
export const metadata = {
  title: "Water Tank Cleaning Commercial Buildings Dubai | Akkad",
  description: "Expert water tank cleaning for commercial buildings in Dubai. Certified, fast, and fully compliant with Dubai Municipality standards.",
};
