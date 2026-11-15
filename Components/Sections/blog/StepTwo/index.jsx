import React from "react";

const StepTwo = ({title , p1 , pic1 , alt }) => {
    return (
      

    
        
        
        <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h2 className="my-4 mb-5">{title}</h2>
            <p className="para my-2 fw-500">
{p1}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
          <img src={`/images/${pic1}`} alt={alt} className="img-fluid" />
          </div>
        </div>
        
          </div>
                    
        
        
        
        
        
        
    );
  };
  
  export default StepTwo;
  
