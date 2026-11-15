import React from "react";
import Link from "next/link";

const ShoppingMallsTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#2a0a1e 0%,#150514 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-shop"></i> Shopping Malls
            </span>
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning<br /><span style={{ color:"#6FB44A" }}>for Shopping Malls</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Large-scale water tank cleaning for shopping malls and retail centres in Dubai. High footfall demands the highest hygiene standards.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-shop" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
          <h2 className="fw-bold mt-2">for Shopping Malls Tank Services</h2>
        </div>
        <div className="row g-4">
            <div className="col-6 col-md-3" key={0}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-shop"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Mall-Scale Cleaning</h3>
                <p className="text-muted small mb-0">Specialist equipment for Dubai's largest retail structures.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={1}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-food-menu"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Food Court Safety</h3>
                <p className="text-muted small mb-0">Extra focus on water feeding food courts and restaurants.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={2}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-fire"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Fire System Tanks</h3>
                <p className="text-muted small mb-0">Inspection and cleaning of fire suppression water tanks.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={3}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-eye"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Inspection-Ready</h3>
                <p className="text-muted small mb-0">Water quality passes any unannounced health inspection.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={4}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-camera-video"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">CCTV-Assisted Access</h3>
                <p className="text-muted small mb-0">We work with mall security for safe tank access.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={5}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-person-workspace"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Tenant Comms</h3>
                <p className="text-muted small mb-0">Water shutdown notices prepared for all mall tenants.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={6}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-clock-history"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Overnight Ops</h3>
                <p className="text-muted small mb-0">Full operations conducted overnight when mall is closed.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={7}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-patch-check-fill"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Open-Ready Cert</h3>
                <p className="text-muted small mb-0">Certified before mall opening time every morning.</p>
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
                <h4 className="h6 fw-bold mb-2">Management Briefing</h4>
                <p className="text-muted small">Full briefing with mall management on tanks and shutdown plan.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">Tenant Notification</h4>
                <p className="text-muted small">Tenant water shutdown notices issued well in advance.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Night Operation</h4>
                <p className="text-muted small">Full cleaning operations overnight when mall is closed.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Open-Ready Cert</h4>
                <p className="text-muted small">Water certified before mall opening — every single time.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#2a0a1e" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Ensure Your Mall is Hygiene Certified</h2>
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
        <li className="breadcrumb-item active">Shopping Malls</li>
      </ol></nav>
    </div>
  </div>
);

export default ShoppingMallsTank;
export const metadata = {
  title: "Water Tank Cleaning Shopping Malls Dubai | Akkad",
  description: "Large-scale water tank cleaning for Dubai malls. Food court safety, overnight service, tenant coordination, full compliance.",
};
