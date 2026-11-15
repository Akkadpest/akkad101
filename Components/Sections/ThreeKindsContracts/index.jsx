
import React from "react";
import Link from "next/link";


const ThreeKindsContracts = ({title , price , warranty }) => {
  return (
     

<>

<div className="container my-5">
  <div className="row mx-auto">
    <div className="col-md-12 text-center">
    <h2 className="dark-black fw-600 mb-3">Pricing for Pest Control Services for {title}</h2>
<p className="lead">Our pest control services are designed to protect your inventory, staff, and operational efficiency, with pricing customized to meet the needs of {title} environments.</p>
<p>We offer flexible plans to ensure your warehouse remains a clean and pest-free environment:</p>

</div>
</div>

<div className="row mx-auto justify-content-center mt-4">
  <div className="col-md-5 mb-3">
    <div className="card shadow-sm">
      <div className="card-body">
      <h5 className="card-title fw-bold">One-Time Service</h5>
<p className="card-text">Starting from <strong>{price}</strong>, our one-time service provides a comprehensive pest control treatment to address immediate pest issues in {title} spaces, with follow-up inspections as needed to ensure effectiveness.</p>

      </div>
    </div>
  </div>
  <div className="col-md-5 mb-3">
    <div className="card shadow-sm">
      <div className="card-body">
      <h5 className="card-title fw-bold">{warranty} Plan</h5>
<p className="card-text">6 months plan includes regular inspections, preventive treatments, and priority service to ensure a consistently pest-free environment in your {title}.</p>

      </div>
    </div>
  </div>
</div>

<div className="row mx-auto justify-content-center mt-4">
  <div className="col-md-5 mb-3">
    <div className="card shadow-sm">
      <div className="card-body">
      <h5 className="card-title fw-bold">Customized Multi-Year Contracts</h5>
<p className="card-text">For large {title} facilities, we offer customized multi-year contracts with discounted pricing and tailored services to meet comprehensive pest management needs. Contact us for a consultation and quote.</p>

      </div>
    </div>
  </div>
</div>
</div>






           
       

 
  </>

);
};

export default ThreeKindsContracts;
