import React from "react";
import Link from "next/link";

const HotelsResortsTank = () => (
  <div>
    {/* Hero — light elegant */}
    <div style={{ background:"linear-gradient(135deg,#f9fdf6 0%,#e8f5de 100%)", borderBottom:"3px solid #6FB44A", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <span style={{ color:"#6FB44A",fontWeight:700,letterSpacing:3,fontSize:12,textTransform:"uppercase" }}>Hotels &amp; Resorts</span>
            <h1 className="display-5 fw-bold mt-2 mb-3" style={{ color:"#1a2e1a" }}>5-Star Water Tank<br />Hygiene Service</h1>
            <p className="mb-4 text-muted" style={{ fontSize:17 }}>Discreet, professional water tank cleaning for Dubai&apos;s leading hotels and resorts. Meeting the highest international standards — overnight, every time.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-5" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Contact Us</a>
              <Link href="https://wa.me/97144251557" className="btn btn-lg rounded-pill px-4 fw-semibold" style={{ background:"#fff",color:"#6FB44A",border:"2px solid #6FB44A" }}>Book Service</Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                { ic:"bi-stars",lb:"5-Star Standard",v:"Premium" },
                { ic:"bi-moon-stars",lb:"Overnight Work",v:"Discreet" },
                { ic:"bi-shield-check",lb:"Legionella Safe",v:"Certified" },
                { ic:"bi-receipt-cutoff",lb:"Audit Reports",v:"Detailed" },
              ].map((item,i)=>(
                <div className="col-6" key={i}>
                  <div style={{ background:"#fff",border:"1px solid #d0ebc2",borderRadius:14,padding:"20px 16px",textAlign:"center",boxShadow:"0 2px 8px rgba(111,180,74,0.08)" }}>
                    <i className={"bi "+item.ic} style={{ color:"#6FB44A",fontSize:28 }}></i>
                    <div style={{ color:"#6FB44A",fontWeight:700,fontSize:13,marginTop:8 }}>{item.v}</div>
                    <div className="text-muted small">{item.lb}</div>
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
          <h2 className="fw-bold">Hotel-Grade Tank Services</h2>
          <p className="text-muted">The same standards your guests expect — applied to your water supply.</p>
        </div>
        <div className="row g-4">
          {[
            { ic:"bi-stars",t:"Premium Tank Hygiene",d:"Cleaning standards tailored for luxury hospitality water systems." },
            { ic:"bi-clock",t:"Off-Peak Scheduling",d:"We work overnight and during low-occupancy periods." },
            { ic:"bi-water",t:"Pool & Spa Tanks",d:"Specialist cleaning for spa and wellness water storage." },
            { ic:"bi-thermometer-sun",t:"Legionella Control",d:"Hot water system Legionella risk reduction and management." },
            { ic:"bi-receipt-cutoff",t:"Audit Documentation",d:"Comprehensive records for hotel safety and insurance audits." },
            { ic:"bi-person-lines-fill",t:"Guest Safety Cert",d:"Guest-safe water quality guaranteed on completion." },
          ].map((s,i)=>(
            <div className="col-md-6 col-lg-4" key={i}>
              <div style={{ padding:"28px 24px",border:"1px solid #e8f5e0",borderRadius:16,background:"#fafdf7",height:"100%",transition:"box-shadow 0.2s" }}>
                <div style={{ width:52,height:52,background:"linear-gradient(135deg,#6FB44A22,#6FB44A44)",borderRadius:14,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:16 }}>
                  <i className={"bi "+s.ic} style={{ color:"#6FB44A",fontSize:24 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-2">{s.t}</h3>
                <p className="text-muted small mb-0">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps — elegant cards */}
    <section className="py-5" style={{ background:"#f4fbef" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Our Overnight Hotel Process</h2>
        <div className="row justify-content-center g-4">
          {[
            { t:"Hotel Survey",d:"Comprehensive mapping of all water storage and distribution points." },
            { t:"Night Scheduling",d:"Work begins after midnight to protect the guest experience." },
            { t:"Premium Cleaning",d:"White-glove cleaning and disinfection of every tank." },
            { t:"Morning Clearance",d:"System restored and certified before the morning rush." },
          ].map((s,i)=>(
            <div className="col-md-6 col-lg-3" key={i}>
              <div style={{ background:"#fff",borderRadius:16,padding:"28px 20px",textAlign:"center",boxShadow:"0 4px 20px rgba(111,180,74,0.1)",position:"relative" }}>
                <div style={{ position:"absolute",top:-18,left:"50%",transform:"translateX(-50%)",width:36,height:36,background:"#6FB44A",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700 }}>{i+1}</div>
                <h4 className="h6 fw-bold mt-3 mb-2">{s.t}</h4>
                <p className="text-muted small mb-0">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#fff",borderTop:"3px solid #6FB44A" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-3" style={{ color:"#1a2e1a" }}>Elevate Your Hotel&apos;s Water Hygiene</h2>
        <p className="text-muted mb-4">Discreet, overnight service. Legionella control. 5-star certified.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-success btn-lg rounded-pill px-4 fw-semibold"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li><li className="breadcrumb-item active">Hotels &amp; Resorts</li></ol></nav>
    </div>
  </div>
);

export default HotelsResortsTank;
export const metadata = {
  title: "Water Tank Cleaning Hotels & Resorts Dubai | Akkad",
  description: "Luxury hotel water tank cleaning in Dubai. Discreet overnight service, Legionella control, and 5-star hygiene standards.",
};
