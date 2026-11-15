import React from "react";
import Link from "next/link";

const ConstructionSitesTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#1a1200 0%,#3d2800 100%)", padding:"72px 0 56px", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute",top:0,left:0,right:0,bottom:0,backgroundImage:"repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(111,180,74,0.04) 20px,rgba(111,180,74,0.04) 40px)" }}></div>
      <div className="container" style={{ position:"relative" }}>
        <div className="row align-items-center g-5">
          <div className="col-lg-7 text-white">
            <div className="d-inline-flex align-items-center gap-2 mb-4 px-3 py-2 rounded-2" style={{ background:"#6FB44A",fontSize:13,fontWeight:700 }}>
              <i className="bi bi-cone-striped"></i> CONSTRUCTION SITES
            </div>
            <h1 className="display-4 fw-bold mb-3">Water Tank Cleaning<br />on Construction Sites</h1>
            <p className="mb-4" style={{ opacity:0.8,fontSize:17 }}>Construction sites demand clean water for workers and processes. Our rugged on-site tank cleaning keeps you compliant and operational.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-2 px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-2 px-4">Book Service</Link>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="row g-2 text-white text-center">
              {[["bi-truck","Mobile Units"],["bi-geo-alt-fill","All Dubai"],["bi-clock-fill","48Hr Response"],["bi-file-earmark-check","HSE Ready"]].map(([ic,lb],i)=>(
                <div className="col-6" key={i}>
                  <div style={{ padding:"18px 12px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:8 }}>
                    <i className={"bi "+ic} style={{ color:"#6FB44A",fontSize:26 }}></i>
                    <div className="small fw-semibold mt-2">{lb}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Services — bordered top cards */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Construction Site Tank Services</h2>
        </div>
        <div className="row g-4">
          {[
            { ic:"bi-hammer",t:"On-Site Tank Cleaning",d:"Portable and permanent water tanks cleaned on your active site." },
            { ic:"bi-person-fill-check",t:"Worker Safety",d:"Drinking and utility water that meets health standards for your workforce." },
            { ic:"bi-truck",t:"Mobile Service Units",d:"Our mobile units come directly to your site — no transport needed." },
            { ic:"bi-geo-alt-fill",t:"Any Dubai Location",d:"We service all Dubai districts and surrounding emirates." },
            { ic:"bi-clock-fill",t:"48-Hr Response",d:"Urgent on-site cleaning requests handled within 48 hours." },
            { ic:"bi-file-earmark-check",t:"HSE Documentation",d:"Service records ready for HSE audits and site inspections." },
          ].map((s,i)=>(
            <div className="col-md-6 col-lg-4" key={i}>
              <div style={{ borderTop:"4px solid #6FB44A",background:"#fff",borderRadius:"0 0 12px 12px",padding:"24px 20px",boxShadow:"0 2px 12px rgba(0,0,0,0.06)",height:"100%" }}>
                <i className={"bi "+s.ic} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">{s.t}</h3>
                <p className="text-muted small mb-0">{s.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Steps — horizontal bar */}
    <section className="py-5" style={{ background:"#fffbf0" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5">Our On-Site Process</h2>
        <div className="d-flex flex-column flex-md-row gap-0 position-relative">
          <div className="d-none d-md-block" style={{ position:"absolute",top:28,left:"12.5%",right:"12.5%",height:3,background:"linear-gradient(90deg,#6FB44A,#6FB44A88)" }}></div>
          {[
            { t:"Site Visit",d:"Team arrives in PPE and surveys water storage setup on-site." },
            { t:"Isolation & Drain",d:"Tanks isolated from site water system and fully drained." },
            { t:"Heavy-Duty Clean",d:"Pressure washing removes construction debris and biofilm." },
            { t:"Disinfect & Certify",d:"Disinfection applied, water refilled, HSE certificate issued." },
          ].map((s,i)=>(
            <div className="col-md-3 text-center px-3 mb-4 mb-md-0" key={i} style={{ position:"relative" }}>
              <div style={{ width:56,height:56,background:"#6FB44A",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 16px",fontSize:22,color:"#fff",fontWeight:700,position:"relative",zIndex:1 }}>{i+1}</div>
              <h4 className="h6 fw-bold mb-2">{s.t}</h4>
              <p className="text-muted small">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#3d2800" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Require On-Site Tank Cleaning?</h2>
        <p className="mb-4" style={{ opacity:0.8 }}>Mobile units ready to deploy to your construction site today.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-2 px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-2 px-4"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li><li className="breadcrumb-item active">Construction Sites</li></ol></nav>
    </div>
  </div>
);

export default ConstructionSitesTank;
export const metadata = {
  title: "Water Tank Cleaning Construction Sites Dubai | Akkad",
  description: "On-site water tank cleaning for construction projects in Dubai. Mobile units, rapid response, HSE-compliant service.",
};
