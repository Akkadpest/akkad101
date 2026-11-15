import React from "react";
import Link from "next/link";

const WarehousesTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#1f1f1f 0%,#0a0a0a 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-7 text-white">
            <span className="d-inline-flex align-items-center gap-2 mb-3 px-3 py-1 rounded-pill" style={{ background:"rgba(111,180,74,0.2)",border:"1px solid #6FB44A",color:"#6FB44A",fontSize:13,fontWeight:600 }}>
              <i className="bi bi-archive-fill"></i> Warehouses & Logistics
            </span>
            <h1 className="display-5 fw-bold mb-3">Water Tank Cleaning<br /><span style={{ color:"#6FB44A" }}>for Warehouses</span></h1>
            <p className="mb-4" style={{ opacity:0.85,fontSize:17 }}>Reliable water tank cleaning for warehouses and logistics facilities. Keeping workers hydrated and compliant with labour welfare regulations.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Call Now</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Book Online</Link>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            <i className="bi bi-archive-fill" style={{ fontSize:96,color:"#6FB44A",opacity:0.85 }}></i>
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
          <h2 className="fw-bold mt-2">for Warehouses Tank Services</h2>
        </div>
        <div className="row g-4">
            <div className="col-md-6" key={0}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-archive flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Warehouse Tank Service</h3>
                  <p className="text-muted small mb-0">Fast, efficient cleaning of all warehouse water storage.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={1}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-person-check flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Worker Welfare</h3>
                  <p className="text-muted small mb-0">Supporting MoHRE welfare standards for warehouse workers.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={2}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-thermometer-high flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Heat-Climate Plans</h3>
                  <p className="text-muted small mb-0">Extra-frequency plans for high-temperature environments.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={3}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-truck-front flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Logistics-Friendly</h3>
                  <p className="text-muted small mb-0">We work around your operations — no interference with goods.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={4}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-file-earmark-medical flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Welfare Certificates</h3>
                  <p className="text-muted small mb-0">Documentation for MoHRE audits and welfare inspections.</p>
                </div>
              </div>
            </div>

            <div className="col-md-6" key={5}>
              <div style={{ display:"flex",gap:16,padding:"22px 20px",border:"1px solid #e8f5e0",borderRadius:14,background:"#fff",height:"100%",boxShadow:"0 2px 8px rgba(0,0,0,0.04)" }}>
                <i className={"bi bi-currency-dollar flex-shrink-0"} style={{ color:"#6FB44A",fontSize:30 }}></i>
                <div>
                  <h3 className="h6 fw-bold mb-1">Bulk Pricing</h3>
                  <p className="text-muted small mb-0">Competitive pricing for multi-facility warehouse operators.</p>
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
                <h4 className="h6 fw-bold mb-2">Facility Check</h4>
                <p className="text-muted small">Survey of all water points, tanks, and worker welfare facilities.</p>
              </div>

              <div className="col-md-3 text-center" key={1}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{2}</div>
                <h4 className="h6 fw-bold mb-2">Off-Shift Timing</h4>
                <p className="text-muted small">Cleaning during shift changeovers to avoid workflow disruption.</p>
              </div>

              <div className="col-md-3 text-center" key={2}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{3}</div>
                <h4 className="h6 fw-bold mb-2">Full Clean</h4>
                <p className="text-muted small">Complete tank scrub and disinfection with welfare-grade products.</p>
              </div>

              <div className="col-md-3 text-center" key={3}>
                <div style={{ width:52,height:52,background:"#6FB44A",borderRadius:"50%",margin:"0 auto 14px",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>{4}</div>
                <h4 className="h6 fw-bold mb-2">Compliance Report</h4>
                <p className="text-muted small">MoHRE-ready welfare compliance certificate issued immediately.</p>
              </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#1f1f1f" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Keep Your Warehouse Workers Safe</h2>
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
        <li className="breadcrumb-item active">Warehouses</li>
      </ol></nav>
    </div>
  </div>
);

export default WarehousesTank;
export const metadata = {
  title: "Water Tank Cleaning Warehouses Dubai | Akkad Services",
  description: "Water tank cleaning for warehouses in Dubai. Worker welfare compliant, MoHRE-ready, efficient multi-site service.",
};
