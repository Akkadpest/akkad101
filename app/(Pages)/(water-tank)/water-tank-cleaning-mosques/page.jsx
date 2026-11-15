import React from "react";
import Link from "next/link";

const MosquesTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#0d2214 0%,#051009 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-moon-stars-fill"></i> Mosques & Islamic Centres
            </span>
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning<br /><span style={{ color:"#6FB44A" }}>for Mosques</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Respectful and professional water tank cleaning for mosques and Islamic centres. Ensuring pure water for wudu and community use.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-moon-stars-fill" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
          <h2 className="fw-bold mt-2">for Mosques Tank Services</h2>
        </div>
        <div className="col-lg-8 mx-auto">
            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={0}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-droplet"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Wudu Water Purity</h3>
                <p className="text-muted small mb-0">Guaranteeing purity of water used for ablution and prayer.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={1}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-people"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Community Safety</h3>
                <p className="text-muted small mb-0">Protecting the health of worshippers and mosque visitors.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={2}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-moon"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Respectful Service</h3>
                <p className="text-muted small mb-0">Team trained to work within Islamic spaces around prayer times.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={3}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-building-check"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">AWQAF Compliance</h3>
                <p className="text-muted small mb-0">Aligned with Islamic Affairs and Charitable Activities Department.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "1px solid #e8f5e0" }} key={4}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-calendar-event"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Ramadan Ready</h3>
                <p className="text-muted small mb-0">Intensive pre-Ramadan packages for peak community use.</p>
              </div>
            </div>

            <div className="d-flex gap-3 align-items-start mb-4 pb-4" style={{ borderBottom: "none" }} key={5}>
              <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center" }}>
                <i className={"bi bi-patch-check"} style={{ color:"#fff",fontSize:22 }}></i>
              </div>
              <div>
                <h3 className="h6 fw-bold mb-1">Halal Certified</h3>
                <p className="text-muted small mb-0">All disinfection agents are halal-certified and permissible.</p>
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
                <h4 className="h6 fw-bold mb-2">Prayer Time Review</h4>
                <p className="text-muted small">We plan cleaning during off-prayer hours every time.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">Respectful Setup</h4>
                <p className="text-muted small">Team arrives in modest attire and respects the sacred environment.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Halal Cleaning</h4>
                <p className="text-muted small">Tanks cleaned with halal-certified, food-safe products.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Certified Pure</h4>
                <p className="text-muted small">Water restored and certified pure for wudu and community use.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#0d2214" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Pure Water for Your Community</h2>
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
        <li className="breadcrumb-item active">Mosques</li>
      </ol></nav>
    </div>
  </div>
);

export default MosquesTank;
export const metadata = {
  title: "Water Tank Cleaning Mosques Dubai | Akkad Cleaning Services",
  description: "Respectful water tank cleaning for mosques in Dubai. Halal-certified chemicals, prayer-time-aware scheduling, AWQAF-compliant.",
};
