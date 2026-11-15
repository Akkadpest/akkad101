import React from "react";
import Link from "next/link";

const RooftopTanksTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#04202e 0%,#010c12 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-arrow-up-circle-fill"></i> Rooftop Tanks
            </span>
            <h1 className="display-5 fw-bold mb-3">Rooftop Water Tank<br /><span style={{ color:"#6FB44A" }}>Cleaning Services</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Expert rooftop water tank cleaning with full height safety compliance. Cleaning at altitude — with zero compromise on safety or quality.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-arrow-up-circle-fill" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
          </div>
        </div>
      </div>
    </div>

    {/* Trust */}
    <div style={{ background:"#fff",borderBottom:"1px solid #e8f5e0" }}>
      <div className="container">
        <div className="row text-center">
          {[["bi-patch-check-fill","DM Licensed"],["bi-clock-fill","24/7 Service"],["bi-award-fill","10+ Yrs"],["bi-star-fill","5-Star Rated"]].map(([ic,lb],i)=>(
            <div className="col-6 col-md-3 py-3" key={i}>
              <i className={"bi "+ic} style={{ color:"#6FB44A" }}></i>
              <span className="ms-2 text-muted small fw-semibold">{lb}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Services */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color:"#6FB44A",fontWeight:700,fontSize:12,letterSpacing:2,textTransform:"uppercase" }}>Our Services</span>
          <h2 className="fw-bold mt-2">Cleaning Services Tank Services</h2>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-4" key={0}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-arrow-up-circle"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Height-Safe Access</h3>
                <p className="text-muted small mb-0">Working at height specialists with all required fall protection.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={1}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-sun"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">UV Damage Check</h3>
                <p className="text-muted small mb-0">Inspection for UV degradation and heat damage to tank materials.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={2}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-wind"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Sand & Dust Removal</h3>
                <p className="text-muted small mb-0">Dubai desert environment means extra sediment removal is essential.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={3}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-shield-fill"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Height Safety Cert</h3>
                <p className="text-muted small mb-0">All works carried out under a live working-at-height permit.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={4}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-moisture"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Lid Sealing</h3>
                <p className="text-muted small mb-0">Inspection and sealing of lids and hatches against dust ingress.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={5}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-binoculars"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Structural Survey</h3>
                <p className="text-muted small mb-0">Visual survey of rooftop tank supports and mounting brackets.</p>
              </div>
            </div></div>
      </div>
    </section>

    {/* Steps */}
    <section className="py-5" style={{ background:"#f4fbef" }}>
      <div className="container">
        <h2 className="fw-bold text-center mb-5">How It Works</h2>
        <div className="row g-4 justify-content-center">
          
              <div className="col-md-3 text-center" key={0}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{1}</div>
                <h4 className="h6 fw-bold mb-2">Rooftop Survey</h4>
                <p className="text-muted small">Working at height survey — anchor points and routes confirmed.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">PPE & Permits</h4>
                <p className="text-muted small">Full PPE fitted and height permit issued before ascending.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Rooftop Clean</h4>
                <p className="text-muted small">Tank exterior cleared, interior fully cleaned and disinfected.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Lid & Seal Check</h4>
                <p className="text-muted small">All lids, gaskets, and hatches inspected before descent.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#04202e" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Book Rooftop Tank Cleaning Today</h2>
        <p className="mb-4" style={{ opacity:0.85 }}>Dubai Municipality certified. Available 7 days a week across all UAE.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small">
        <li className="breadcrumb-item"><Link href="/">Home</Link></li>
        <li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li>
        <li className="breadcrumb-item active">Rooftop Tanks</li>
      </ol></nav>
    </div>
  </div>
);

export default RooftopTanksTank;
export const metadata = {
  title: "Rooftop Water Tank Cleaning Dubai | Akkad Services",
  description: "Safe rooftop water tank cleaning in Dubai. Height-certified specialists, UV damage checks, dust and sand removal.",
};
