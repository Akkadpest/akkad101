import React from "react";

const Hero = (props) => {
  return (
    <section className="container banner_pest">
      <div id="customer_message" className="container">
        <div className="row align-items-end">
          <div className="col-md-8 list_customers">
            <div className="banners_left title_header_home">
              <h1 className="banner_pest_heading pt-2 mb-1 pt-4 ps-5 mobile-padding-left-0 roboto-medium fw-700">
                {props.title}
              </h1>
              <ul className="mobile-header-ui-li text-align-center-in-mobile ps-4 mobile-padding-left-0">
               <li>{props.list1}</li>
               <li>{props.list2}</li>
               <li>{props.list3}</li>
               <li>{props.list4}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
