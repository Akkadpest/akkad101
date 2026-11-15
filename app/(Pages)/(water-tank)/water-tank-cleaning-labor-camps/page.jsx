import React from "react";
import Link from "next/link";

const LaborCampsTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#2d1400 0%,#150900 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-person-fill-gear"></i> Labor Camps
            </span>
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning<br /><span style={{ color:"#6FB44A" }}>for Labor Camps</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Ensuring clean, safe water for labor accommodation facilities across Dubai. Worker welfare compliance at its best.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-person-fill-gear" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
          <h2 className="fw-bold mt-2">for Labor Camps Tank Services</h2>
        </div>
        <div className="row g-4">
            <div className="col-md-6" key={0}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-person-fill-gear flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Camp Water Safety</h3>
                  <p className="text-muted small mb-0">Complete water tank service for accommodation of all sizes.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={1}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-thermometer-sun flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Summer Heat Plans</h3>
                  <p className="text-muted small mb-0">Summer frequency upgrades for accelerated bacterial growth.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={2}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-clipboard-check flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">MoHRE Compliance</h3>
                  <p className="text-muted small mb-0">Full Ministry of Human Resources compliance documentation.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={3}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-translate flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Multilingual Team</h3>
                  <p className="text-muted small mb-0">We communicate in Arabic, English, Hindi, Urdu, and Tagalog.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={4}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-hospital flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Hygiene Packages</h3>
                  <p className="text-muted small mb-0">Bundled packages combining tank, canteen, and toilet hygiene.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={5}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-shield-exclamation flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Emergency Response</h3>
                  <p className="text-muted small mb-0">24-hour emergency response for contamination incidents.</p>
                </div>
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
                <h4 className="h6 fw-bold mb-2">Camp Survey</h4>
                <p className="text-muted small">We map all water tanks serving each accommodation block.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">Block-by-Block</h4>
                <p className="text-muted small">Tanks cleaned one block at a time — workers always have water.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Safe Disinfection</h4>
                <p className="text-muted small">All products safe for densely occupied accommodation facilities.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">MoHRE Docs</h4>
                <p className="text-muted small">Compliance certificates issued immediately for welfare records.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#2d1400" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Protect Your Workers — Book Now</h2>
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
        <li className="breadcrumb-item active">Labor Camps</li>
      </ol></nav>
    </div>
  </div>
);

export default LaborCampsTank;
export const metadata = {
  title: "Water Tank Cleaning Labor Camps Dubai UAE | Akkad",
  description: "Welfare-compliant water tank cleaning for labor camps in Dubai. MoHRE-certified, multilingual team, emergency response 24/7.",
};
