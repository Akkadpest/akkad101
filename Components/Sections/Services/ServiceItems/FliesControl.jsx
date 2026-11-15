"use client";
import React from "react";


const FliesControl = () => {
  return (
        <li className="d-none d-md-block">
          <div className="closebtn">
            <img
              src={`/images/services/flies.webp`}
              className={"img-fluid borderd_radius"}
              alt="Flies Pest Control"
            />
            <div className="bugs_grid text-center black">
              <h4 className="mb-0 fw-700 fs-16 pest_control_service_post_title hght-7">
              Flies Pest Control    
                                     </h4>
            </div>
          </div>
        </li>
     
  );
};
export default FliesControl;
