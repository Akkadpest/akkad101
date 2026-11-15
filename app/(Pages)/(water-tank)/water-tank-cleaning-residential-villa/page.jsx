import React from "react";
import Link from "next/link";

const ResidentialVillaTank = () => (
  <div>
    {/* Hero — centered */}
    <div style={{ background:"#6FB44A", padding:"70px 0 56px" }}>
      <div className="container text-center text-white">
        <i className="bi bi-house-fill" style={{ fontSize:64,opacity:0.9 }}></i>
        <h1 className="display-5 fw-bold mt-3 mb-3">Water Tank Cleaning<br />for Residential Villas</h1>
        <p className="lead mb-4" style={{ opacity:0.9,maxWidth:560,margin:"0 auto 24px" }}>Keep your family safe with premium water tank cleaning for Dubai villas. Pure water — healthy living.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-light btn-lg rounded-pill px-5 fw-bold" style={{ color:"#6FB44A" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
          <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
        </div>
      </div>
    </div>

    {/* Stats row */}
    <div style={{ background:"#fff",borderBottom:"1px solid #e8f5e0",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
      <div className="container">
        <div className="row text-center">
          {[["500+","Villas Cleaned"],["6 Months","Recommended Frequency"],["2 Hrs","Average Service Time"],["100%","DM Compliance Rate"]].map(([v,l],i)=>(
            <div className="col-6 col-md-3 py-4" key={i} style={{ borderRight: i<3?"1px solid #e8f5e0":"none" }}>
              <div className="fw-bold" style={{ color:"#6FB44A",fontSize:28 }}>{v}</div>
              <div className="text-muted small">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Services — 2-col icon list */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-5">
            <span style={{ color:"#6FB44A",fontWeight:700,fontSize:13,letterSpacing:2,textTransform:"uppercase" }}>Villa Services</span>
            <h2 className="fw-bold mt-2 mb-3">Everything Your Villa Water Tank Needs</h2>
            <p className="text-muted">From deep cleaning to annual contracts — we handle every aspect of villa water tank hygiene so you never have to worry.</p>
            <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-4 mt-2 fw-semibold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}>Get Free Quote</a>
          </div>
          <div className="col-lg-7">
            <div className="row g-3">
              {[
                { ic:"bi-droplet-fill", t:"Villa Deep Clean", d:"Complete interior cleaning of underground and above-ground villa tanks." },
                { ic:"bi-shield-check", t:"Family-Safe Disinfection", d:"Child and pet-safe solutions with no harmful residues." },
                { ic:"bi-activity", t:"Bacteria Testing", d:"E.coli and coliform testing with same-day results." },
                { ic:"bi-house-gear", t:"Tank Coating", d:"Food-grade epoxy lining to protect tank walls." },
                { ic:"bi-bell", t:"Reminder Service", d:"Auto cleaning reminders every 6 months to your phone." },
                { ic:"bi-award", t:"Certified Team", d:"DM-certified, background-checked technicians only." },
              ].map((s,i)=>(
                <div className="col-md-6" key={i}>
                  <div className="d-flex align-items-start gap-3 p-3" style={{ borderRadius:12,background:"#f9fdf6",border:"1px solid #e8f5e0" }}>
                    <div style={{ width:42,height:42,minWidth:42,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                      <i className={"bi "+s.ic} style={{ color:"#fff",fontSize:18 }}></i>
                    </div>
                    <div><div className="fw-semibold small">{s.t}</div><div className="text-muted" style={{ fontSize:12 }}>{s.d}</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Steps — vertical timeline */}
    <section className="py-5" style={{ background:"#f9fdf6" }}>
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our 4-Step Process</h2>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-7">
            {[
              { t:"Booking", d:"Schedule online or call — we arrive at your chosen time slot." },
              { t:"Draining", d:"Tank water carefully drained without disrupting your home supply." },
              { t:"Deep Scrub", d:"Every corner scrubbed manually with approved brushes and equipment." },
              { t:"Disinfect & Refill", d:"Tank disinfected, rinsed, and refilled — water supply restored." },
            ].map((s,i)=>(
              <div className="d-flex gap-4 mb-4" key={i}>
                <div style={{ display:"flex",flexDirection:"column",alignItems:"center" }}>
                  <div style={{ width:40,height:40,minWidth:40,background:"#6FB44A",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700 }}>{i+1}</div>
                  {i<3 && <div style={{ width:2,flex:1,background:"#d0ebc2",minHeight:32,marginTop:4 }}></div>}
                </div>
                <div className="pb-2">
                  <div className="fw-bold mb-1">{s.t}</div>
                  <p className="text-muted small mb-0">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#fff",borderTop:"3px solid #6FB44A" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-3">Protect Your Family&apos;s Water Today</h2>
        <p className="text-muted mb-4">Same-day villa tank cleaning across Dubai. DM certified. Family-safe chemicals only.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-success btn-lg rounded-pill px-5 fw-semibold"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li><li className="breadcrumb-item active">Residential Villas</li></ol></nav>
    </div>
  </div>
);

export default ResidentialVillaTank;
export const metadata = {
  title: "Water Tank Cleaning Residential Villas Dubai | Akkad",
  description: "Safe and thorough water tank cleaning for Dubai villas. Certified, eco-friendly tank sanitation for your family.",
};
