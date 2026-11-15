import React from "react";
import Link from "next/link";

const UndergroundTanksTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#05080d 0%,#020305 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-arrow-down-circle-fill"></i> Underground Tanks
            </span>
            <h1 className="display-5 fw-bold mb-3">Underground Water Tank<br /><span style={{ color:"#6FB44A" }}>Cleaning Services</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Specialist underground water tank cleaning using certified confined space entry procedures. Safe, thorough, and fully certified.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-arrow-down-circle-fill" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
        <div className="col-lg-8 mx-auto">
            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={0}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-arrow-down-circle"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Confined Space Entry</h3>
                <p className="text-muted small mb-0">IOSH-certified operatives safely enter and clean underground tanks.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={1}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-wind"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Atmospheric Testing</h3>
                <p className="text-muted small mb-0">O2, CO, H2S, and LEL testing before any person enters.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={2}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-lightbulb-fill"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Specialist Equipment</h3>
                <p className="text-muted small mb-0">Submersible pumps, long-reach brushes, intrinsically safe lighting.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={3}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-shield-fill-check"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Safety Standby Team</h3>
                <p className="text-muted small mb-0">Dedicated standby team on-site during all confined space ops.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={4}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-water"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Sludge Removal</h3>
                <p className="text-muted small mb-0">Complete removal and disposal of accumulated floor sludge.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "none" }} key={5}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-check2-all"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Confined Space Cert</h3>
                <p className="text-muted small mb-0">Full completion certificate issued after every operation.</p>
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
                <h4 className="h6 fw-bold mb-2">Permit to Work</h4>
                <p className="text-muted small">Confined space permit issued and signed off before mobilisation.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">Gas Testing</h4>
                <p className="text-muted small">Atmosphere tested — safe entry confirmed before descent.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Entry & Clean</h4>
                <p className="text-muted small">Certified operatives clean all surfaces and remove sludge.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Disinfect & Close</h4>
                <p className="text-muted small">Biocide applied, tank refilled, permit closed out safely.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#05080d" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Safe Underground Tank Cleaning — Call Now</h2>
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
        <li className="breadcrumb-item active">Underground Tanks</li>
      </ol></nav>
    </div>
  </div>
);

export default UndergroundTanksTank;
export const metadata = {
  title: "Underground Water Tank Cleaning Dubai | Akkad Services",
  description: "Confined space water tank cleaning for underground tanks in Dubai. IOSH-certified, gas-tested, safe entry procedures.",
};
