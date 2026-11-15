import React from "react";
import Link from "next/link";

const IndustrialTank = () => (
  <div>
    {/* Hero */}
    <div style={{ background:"linear-gradient(135deg,#1a0808 0%,#2d1010 100%)", padding:"72px 0 56px" }}>
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-8 text-white">
            <div className="d-flex align-items-center gap-3 mb-4">
              <div style={{ width:4,height:48,background:"#6FB44A",borderRadius:2 }}></div>
              <div>
                <div style={{ color:"#6FB44A",fontWeight:700,fontSize:12,letterSpacing:3,textTransform:"uppercase" }}>Industrial Grade</div>
                <h1 className="display-5 fw-bold mb-0">Industrial Water Tank Cleaning</h1>
              </div>
            </div>
            <p className="mb-4" style={{ opacity:0.8,fontSize:17,maxWidth:600 }}>Heavy-duty water tank cleaning for industrial facilities, factories, and manufacturing plants in Dubai. Zero downtime, full compliance.</p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="tel:+97144251557" className="btn btn-lg fw-bold rounded-pill px-4" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>Emergency Line</a>
              <Link href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4">Schedule Service</Link>
            </div>
          </div>
          <div className="col-lg-4 text-white">
            <div style={{ background:"rgba(255,255,255,0.05)",borderLeft:"3px solid #6FB44A",borderRadius:"0 12px 12px 0",padding:"24px 20px" }}>
              {["NEBOSH Certified Engineers","24/7 Industrial Response","Chemical-Safe Procedures","DEWA & DM Compliance"].map((t,i)=>(
                <div key={i} className="d-flex align-items-center gap-2 mb-3">
                  <i className="bi bi-check-circle-fill" style={{ color:"#6FB44A" }}></i>
                  <span className="small">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Services */}
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <span style={{ color:"#6FB44A",fontWeight:700,fontSize:12,letterSpacing:2,textTransform:"uppercase" }}>Industrial Services</span>
          <h2 className="fw-bold mt-2">Heavy-Duty Tank Solutions</h2>
        </div>
        <div className="row g-4">
          <div className="col-lg-6">
            <div style={{ background:"#6FB44A",color:"#fff",borderRadius:16,padding:"32px",height:"100%" }}>
              <i className="bi bi-gear-wide-connected" style={{ fontSize:40 }}></i>
              <h3 className="fw-bold mt-3 mb-2">Industrial Tank Deep Clean</h3>
              <p style={{ opacity:0.9 }}>Specialised cleaning for large-volume industrial water storage and process tanks. Our heavy-duty equipment handles tanks of any size.</p>
              <ul className="list-unstyled mt-3">
                {["Tanks up to 500,000L","High-pressure cleaning rigs","Chemical-resistant PPE team","Zero production stoppage"].map((t,i)=>(
                  <li key={i} className="mb-2"><i className="bi bi-arrow-right-circle-fill me-2"></i>{t}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              {[
                { ic:"bi-droplet-half",t:"Chemical Neutralisation",d:"Safe treatment of tanks previously used with industrial chemicals." },
                { ic:"bi-graph-up",t:"Efficiency Audit",d:"Full water system efficiency and tank condition audit." },
                { ic:"bi-shield-fill-exclamation",t:"Contamination Control",d:"Prevent cross-contamination between processes and water supply." },
                { ic:"bi-person-badge",t:"Certified Experts",d:"Industrial hygiene specialists with NEBOSH and DM certs." },
              ].map((s,i)=>(
                <div className="col-6" key={i}>
                  <div style={{ border:"1px solid #eee",borderRadius:12,padding:"20px 16px",height:"100%" }}>
                    <i className={"bi "+s.ic} style={{ color:"#6FB44A",fontSize:24 }}></i>
                    <div className="fw-semibold small mt-2 mb-1">{s.t}</div>
                    <p style={{ fontSize:11,color:"#888",margin:0 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Steps — left border timeline */}
    <section className="py-5" style={{ background:"#f5f5f5" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h2 className="fw-bold mb-5 text-center">Industrial Service Protocol</h2>
            {[
              { t:"Risk Assessment",d:"Full COSHH and site risk assessment before any cleaning commences." },
              { t:"System Isolation",d:"Complete isolation following safe work procedures and lock-out/tag-out." },
              { t:"Industrial Cleaning",d:"High-pressure cleaning with industry-grade equipment and agents." },
              { t:"Testing & Validation",d:"Water sampling and validation report before system returns to service." },
            ].map((s,i)=>(
              <div key={i} className="d-flex gap-4 mb-4 pb-4" style={{ borderBottom: i<3?"1px dashed #ddd":"none" }}>
                <div style={{ minWidth:48,height:48,background:"#6FB44A",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontWeight:700,fontSize:20 }}>0{i+1}</div>
                <div><h4 className="h6 fw-bold mb-1">{s.t}</h4><p className="text-muted small mb-0">{s.d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-5" style={{ background:"#1a0808" }}>
      <div className="container text-center text-white">
        <h2 className="fw-bold mb-3">Industrial Tank Emergency? We&apos;re Ready.</h2>
        <p className="mb-4" style={{ opacity:0.8 }}>24/7 industrial response. On-site within 4 hours across Dubai and UAE.</p>
        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="tel:+97144251557" className="btn btn-lg rounded-pill px-5 fw-bold" style={{ background:"#6FB44A",color:"#fff",border:"none" }}><i className="bi bi-telephone-fill me-2"></i>04 425 1557</a>
          <a href="https://wa.me/97144251557" className="btn btn-outline-light btn-lg rounded-pill px-4"><i className="bi bi-whatsapp me-2"></i>WhatsApp</a>
        </div>
      </div>
    </section>

    <div className="container py-3">
      <nav><ol className="breadcrumb mb-0 small"><li className="breadcrumb-item"><Link href="/">Home</Link></li><li className="breadcrumb-item"><Link href="/water-tank-cleaning/">Water Tank</Link></li><li className="breadcrumb-item active">Industrial</li></ol></nav>
    </div>
  </div>
);

export default IndustrialTank;
export const metadata = {
  title: "Industrial Water Tank Cleaning Dubai | Akkad Services",
  description: "Heavy-duty industrial water tank cleaning in Dubai. Certified specialists for factories, manufacturing plants, and industrial facilities.",
};
