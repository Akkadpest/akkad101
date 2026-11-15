import React from "react";
import Link from "next/link";

const SchoolsUniversitiesTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#1f2a5e 0%,#0c1130 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-mortarboard-fill"></i> Schools & Universities
            </span>
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning for<br /><span style={{ color:"#6FB44A" }}>Schools & Universities</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Safe, certified water tank cleaning for schools, universities, and educational institutions. Protecting students and staff with clean, healthy water.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-mortarboard-fill" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
          <h2 className="fw-bold mt-2">Schools & Universities Tank Services</h2>
        </div>
        <div className="row g-4">
            <div className="col-6 col-md-3" key={0}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-mortarboard"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Campus-Wide Service</h3>
                <p className="text-muted small mb-0">All buildings, canteens, and sports facilities covered.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={1}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-child"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Child-Safe Solutions</h3>
                <p className="text-muted small mb-0">Only approved disinfectants — never harsh industrial chemicals.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={2}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-calendar3"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Holiday Scheduling</h3>
                <p className="text-muted small mb-0">Timed during school holidays to avoid student disruption.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={3}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-journal-check"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">KHDA Compliance</h3>
                <p className="text-muted small mb-0">Meets KHDA and Dubai Municipality requirements for schools.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={4}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-megaphone"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Parent Transparency</h3>
                <p className="text-muted small mb-0">Reports available for school newsletters and parent comms.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={5}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-recycle"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Eco-Friendly</h3>
                <p className="text-muted small mb-0">Environmentally responsible cleaning that teaches green values.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={6}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-droplet-fill"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Drinking Water Safe</h3>
                <p className="text-muted small mb-0">Drinking fountains and canteen water tested post-service.</p>
              </div>
            </div>

            <div className="col-6 col-md-3" key={7}>
              <div style={{ textAlign:"center",padding:"24px 16px",border:"1px solid #e8f5e0",borderRadius:14,background:"#f9fdf6",height:"100%" }}>
                <div style={{ width:56,height:56,background:"#6FB44A22",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px" }}>
                  <i className={"bi bi-shield-check"} style={{ color:"#6FB44A",fontSize:26 }}></i>
                </div>
                <h3 className="h6 fw-bold mb-1">Student Health First</h3>
                <p className="text-muted small mb-0">Everything we do is designed around student wellbeing.</p>
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
                <h4 className="h6 fw-bold mb-2">Campus Audit</h4>
                <p className="text-muted small">Full audit of all water tanks and drinking points on campus.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">Holiday Plan</h4>
                <p className="text-muted small">Service scheduled to align with school holiday calendar.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Safe Cleaning</h4>
                <p className="text-muted small">Child-safe chemicals throughout — every product SDS approved.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Term-Ready Cert</h4>
                <p className="text-muted small">Water tested and certified before the first day of term.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#1f2a5e" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">School Term Starting? Book Before It Does.</h2>
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
        <li className="breadcrumb-item active">Schools & Universities</li>
      </ol></nav>
    </div>
  </div>
);

export default SchoolsUniversitiesTank;
export const metadata = {
  title: "Water Tank Cleaning Schools & Universities Dubai | Akkad",
  description: "Safe, child-friendly water tank cleaning for Dubai schools. KHDA-compliant, holiday-scheduled, certified for educational environments.",
};
