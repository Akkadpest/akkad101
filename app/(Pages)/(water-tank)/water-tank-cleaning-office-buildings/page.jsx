import React from "react";
import Link from "next/link";

const OfficeBuildingsTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#16213e 0%,#0a0f1e 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-briefcase-fill"></i> Office Buildings
            </span>
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning for<br /><span style={{ color:"#6FB44A" }}>Office Buildings</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Premium water tank cleaning for office buildings and corporate towers in Dubai. Maintaining a healthy workplace for your employees.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-briefcase-fill" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
          <h2 className="fw-bold mt-2">Office Buildings Tank Services</h2>
        </div>
        <div className="row g-4">
            <div className="col-md-6 col-lg-4" key={0}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-briefcase"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Corporate Service</h3>
                <p className="text-muted small mb-0">Tailored tank cleaning for Grade A offices and corporate campuses.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={1}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-heart-pulse"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Employee Health</h3>
                <p className="text-muted small mb-0">Clean water reduces sick days — protect your team.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={2}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-wifi"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">Smart Monitoring</h3>
                <p className="text-muted small mb-0">Optional IoT water quality sensors installed post-cleaning.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={3}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-moon-stars"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">After-Hours Service</h3>
                <p className="text-muted small mb-0">All cleaning outside business hours — staff never notice.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={4}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-envelope-paper"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">FM Integration</h3>
                <p className="text-muted small mb-0">We integrate with your FM team and CAFM system.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-4" key={5}>
              <div style={{ padding:"24px 20px",borderRadius:14,background:"#f9fdf6",border:"1px solid #e8f5e0",height:"100%" }}>
                <i className={"bi bi-graph-up-arrow"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <h3 className="h6 fw-bold mt-3 mb-1">ESG Reporting</h3>
                <p className="text-muted small mb-0">Water hygiene data packaged for ESG and sustainability reports.</p>
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
                <h4 className="h6 fw-bold mb-2">FM Coordination</h4>
                <p className="text-muted small">We coordinate with your FM team for zero-disruption planning.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">After-Hours Mobilise</h4>
                <p className="text-muted small">Team arrives post-6PM and completes all work before morning.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Silent Clean</h4>
                <p className="text-muted small">Quiet, professional cleaning that never interrupts office life.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Digital Report</h4>
                <p className="text-muted small">Digital service report sent to FM by 7AM ready for the day.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#16213e" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Book After-Hours Office Tank Cleaning</h2>
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
        <li className="breadcrumb-item active">Office Buildings</li>
      </ol></nav>
    </div>
  </div>
);

export default OfficeBuildingsTank;
export const metadata = {
  title: "Water Tank Cleaning Office Buildings Dubai | Akkad",
  description: "After-hours water tank cleaning for Dubai office buildings. FM-integrated, ESG-ready, employee health-focused tank hygiene.",
};
