import React from "react";
import Link from "next/link";

const ApartmentsTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(160deg,#1e3555 0%,#0b1a2e 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-white">
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning<br /><span style={{ color:"#6FB44A" }}>for Apartments</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Specialized water tank cleaning for apartment buildings and complexes across Dubai — efficient, certified, minimal disruption.</p>
            <ul className="list-unstyled mb-4">
              {["Multi-floor tank coverage","Resident-friendly scheduling","DM compliance reports","Fast 2-hour service"].map((item,i)=>(
                <li key={i} className="mb-2 d-flex align-items-center gap-2">
                  <i className="bi bi-check-circle-fill" style={{ color:"#6FB44A" }}></i>
                  <span style={{ opacity:0.9 }}>{item}</span>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-4 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <div style={{ background:"rgba(111,180,74,0.1)",border:"2px dashed rgba(111,180,74,0.4)",borderRadius:20,padding:"36px 24px" }}>
              <i className="bi bi-buildings" style={{ fontSize:80,color:"#6FB44A" }}></i>
              <div className="text-white fw-bold fs-5 mt-3">Apartment Buildings</div>
              <div className="mt-3" style={{ color:"#6FB44A",fontSize:13 }}>Available 7 days a week</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Services — 4-col compact cards */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Our Apartment Tank Services</h2>
          <p className="text-muted">Comprehensive solutions for all apartment building water systems.</p>
        </div>
        <div className="row g-3">
          {[
            { ic:"bi-layers",t:"Multi-Floor Service",d:"All floors, rooftop and basement tanks covered." },
            { ic:"bi-people-fill",t:"Resident Safety",d:"Scheduled around resident routines." },
            { ic:"bi-clipboard-data",t:"Health Reports",d:"Detailed water health reports for management." },
            { ic:"bi-wrench-adjustable",t:"Tank Maintenance",d:"Float valve, inlet, and outlet checks included." },
            { ic:"bi-lightning-charge",t:"Fast Turnaround",d:"Water restored within 2 hours of start." },
            { ic:"bi-chat-square-text",t:"FM Support",d:"Dedicated manager for building owners." },
            { ic:"bi-droplet-half",t:"Water Testing",d:"Full microbiological analysis on request." },
            { ic:"bi-shield-fill-check",t:"100% Safe",d:"DM-approved chemicals only — always safe." },
          ].map((s,i)=>(
            <div className="col-6 col-md-3" key={i}>
              <div className="text-center p-3 h-100" style={{ border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6" }}>
                <i className={"bi "+s.ic} style={{ color:"#6FB44A",fontSize:26 }}></i>
                <div className="fw-semibold small mt-2 mb-1">{s.t}</div>
                <p className="text-muted" style={{ fontSize:11,margin:0 }}>{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps — numbered badge horizontal */}
    <section className="py-5" style={{ background:"#f0f8e8" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5">How We Clean Your Apartment Tanks</h2>
        <div className="row g-4">
          {[
            { n:1,t:"Building Assessment",d:"We assess the number of tanks, sizes, and access points across all floors." },
            { n:2,t:"Coordinated Shutdown",d:"Water shutdown coordinated with building management to notify residents." },
            { n:3,t:"Simultaneous Cleaning",d:"Our team cleans all tanks simultaneously to minimise downtime." },
            { n:4,t:"Quality Check & Report",d:"Final water quality test and full service report delivered to management." },
          ].map((s,i)=>(
            <div className="col-md-3" key={i}>
              <div style={{ background:"#fff",borderRadius:16,padding:"28px 20px",textAlign:"center",boxShadow:"0 2px 12px rgba(111,180,74,0.1)",height:"100%" }}>
                <span className="d-inline-flex align-items-center justify-content-center rounded-circle fw-bold mb-3" style={{ width:48,height:48,background:"#6FB44A",color:"#fff",fontSize:20 }}>{s.n}</span>
                <h4 className="h6 fw-bold mb-2">{s.t}</h4>
                <p className="text-muted small mb-0">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#1e3555" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Clean Tanks for Every Resident</h2>
        <p className="mb-4" style={{ opacity:0.8 }}>Dubai's trusted apartment water tank cleaning team — book today.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li><li className="breadcrumb-item active">Apartments</li></ol></nav>
    </div>
  </div>
);

export default ApartmentsTank;
export const metadata = {
  title: "Water Tank Cleaning Apartments Dubai | Akkad Services",
  description: "Professional water tank cleaning for apartment buildings in Dubai. Certified, disruption-free service for residential complexes.",
};
