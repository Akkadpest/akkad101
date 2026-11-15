import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Pest Control for Termites in Cabinet | Safe & Effective Removal",
    description:
      "Eliminate termites from your cabinet with our expert pest control services. We provide safe, fast, and efficient solutions to remove termites and protect your furniture. Contact us today for a termite-free home!",
  };
  
const chairContent = [
  "1.Inspect the Cabinet: Check for signs of termites such as hollow wood, droppings, or small holes in the cabinet.",
  "2.Clean the Cabinet Area: Ensure the area around the cabinet is clean to remove any potential termite food sources.",
  "3.Place Termite Bait: We strategically place termite bait near the cabinet to attract and eliminate termites.",
  "4.Seal Entry Points: Ensure that cracks or gaps near the cabinet are sealed to prevent termites from entering.",
  "5.Professional Extermination: Akkad Pest Control offers professional termite control services to eliminate termites and prevent further damage to your cabinet and home."
];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Termites in Cabinet</h1>
            <p className="para my-2 fw-500">
            Termites can damage wooden cabinets, causing long-term damage and loss. Akkad Pest Control offers expert services to remove termites from cabinets and ensure your furniture stays safe.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images_seo/image_4/termites-cabinet.webp" alt="termites_cabinet" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3 ">
            Steps to Control Termites in Cabinet                        
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
      headertitle ="Products Used For Termites Treatment"
      insects="antiTermiteProducts" />
      <FAQs imageToShow={false} faqs="TermiteControlDubai"title="FAQ" />    </>
  );
};

export default CockroachesChair;
