import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Safe Cockroach Pest Control for Ovens | Professional Solutions",
    description:
      "Dealing with cockroaches in your oven? Our specialized pest control services remove cockroaches from ovens using safe, non-toxic methods. Protect your kitchen and ensure food safety with expert treatments. ",
  };
  
const chairContent = [
  "1.Clean the Oven Thoroughly: Remove any food debris or grease buildup inside the oven, as this attracts cockroaches. ",
  "2.Inspect Oven Gaps and Seals: Check the oven's door seals and air vents for any signs of cockroach activity. ",
  "3.Use Cockroach Bait: Place cockroach bait near the oven to lure hidden pests. ",
  "4.Professional Pesticide Application: Akkad Pest Control can apply safe insecticides near your oven to eliminate any remaining cockroaches. ",
  "5.Regular Oven Maintenance: Keep your oven clean and ensure food not left inside, which could attract pests. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Oven</h1>
            <p className="para my-2 fw-500">
            Cockroaches inside ovens are a major health risk as they can contaminate your food. Akkad Pest Control offers effective pest control solutions to remove cockroaches from ovens and ensure your kitchen remains hygienic.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/chair.png" alt="CockroachesChair" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3 ">
              steps to control cockroaches in oven
            </h2>
            
              {chairContent.map((item, index) => (
                <div key={index}>
                    <p className="  ps-5">{item}</p>
                </div>
              ))}

           
          </div>
        </div>
        
      </div>
     <BookNow /> 
     <FourKinds 
     headertitle="Products Used To Control Cockroaches "
     insects="cockroaches" />
     <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Oven" />
    </>
  );
};

export default CockroachesChair;
