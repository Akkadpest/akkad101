import React from "react";
const control_process=[
{
    heading:"Inspection",
    desc:"We conduct a thorough inspection to identify the type and severity of the pest problem."
},
{
    heading:"Customized Treatment Plan",
    desc:"Based on our findings, we create a plan tailored to your specific needs."
},
{
    heading:"Treatment",
    desc:"Using safe, certified products, we treat the affected areas to eliminate pests."
},
{
    heading:"Follow-Up",
    desc:"We provide regular follow-ups to ensure pests don’t return, with optional annual maintenance plans."
},

]
const PestControlProcess = () => {
  return (
    <div className="container">
      <div className="row">
        <h3 className="text-center fw-600">Our Pest Control Process</h3>
        <div className="process-section">
          <div className="row ">
           {
            control_process.map((item,index)=>(
                <div className="process-step " key={index}>
                <h3>{item.heading}</h3>
  
                <p
                  className="fs-18 text-muted ps-5 process-text"
                  
                >
                  {item.desc}
                </p>
              </div>
            ))
           }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestControlProcess;
