import Offices from "@/Components/Sections/Offices";
import Link from "next/link";
import React from "react";
import off_data from "./pest-control-dubai/contact-us/offices.json";
import AkkadPestControlServices from "@/Components/Sections/AkkadPestService";



const Location = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="container container-max-width">
          <h1 className="fw-bold ">
            Pest Control Services Across Key Regions in the UAE
          </h1>
          <h5 style={{fontSize:'18px',lineHeight:"26px"}} className="my-3 ">
            At <Link href="/">Akkad Pest Control,</Link> we pride ourselves on
            delivering exceptional pest control solutions tailored to meet the
            needs of our clients across the UAE. With years of experience and a
            highly skilled team, we ensure that your home or business remains
            pest-free, creating a safe and hygienic environment for you.
          </h5>
          <h5 style={{fontSize:'18px',lineHeight:"26px"}} className="my-3 ">Our main service areas include:

</h5>
<section>
<div className="row">
          <div className="col-lg-8 col-sm-12" >
            <div id="content-wrapper">
              {off_data.contact_page.map((item, index) => (
                <Offices key={index} off={item} />
              ))}
            </div>
          </div>
        </div>
</section>
<section>
    <div className="row mb-3">
        <div className="col-12">
        <AkkadPestControlServices largeSize={true}/>
        </div>
    </div>
</section>
        </div>
      </div>
    </>
  );
};

export default Location;
export const metadata = {
  title: "Pest Control Services in UAE | Professional Pest Solutions Across the Emirates",
  description:
    "Discover expert pest control services throughout the UAE, including Dubai, Abu Dhabi, and Sharjah. Protect your home or business from pests with reliable, local solutions tailored to your needs.",
};