import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Pest Control for Bedbugs in Bed | Safe & Effective Removal",
    description:
      "Eliminate bedbugs from your bed with our expert pest control services. We provide safe, fast, and efficient solutions to remove bedbugs and protect your home. Contact us today for a bedbug-free environment!",
  };
  
const chairContent = [
  "1.Inspect the Bed: Look for signs of bedbug activity, such as bloodstains, droppings, or actual bedbugs hiding in the seams, mattress, and bed frame.",
  "2.Clean the Bed: Vacuum the bed thoroughly to remove any visible bedbugs and eggs. Wash bedding and linens in hot water.",
  "3.Apply Bedbug Treatment: We use safe and effective treatments specifically designed to eliminate bedbugs in your bed and surrounding areas.",
  "4.Seal Entry Points: Ensure any cracks or gaps in walls or bed frames are sealed to prevent bedbugs from spreading further.",
  "5.Professional Extermination: Akkad Pest Control offers professional bedbug control services to eliminate infestations and prevent future outbreaks."
];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Bedbugs in Bed</h1>
            <p className="para my-2 fw-500">
            Bedbugs can infest beds, hiding in seams, mattresses, and bed frames, causing discomfort and health risks. Akkad Pest Control offers expert services to remove bedbugs from beds and ensure your home remains clean and safe.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images_seo/image_4/bed-bugs-bed.webp" alt="bedbugsinbed" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3 ">
            Steps to Control Bedbugs in Bed                        
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
      <FAQs faqs="bedbugcontrolfaq" title="FAQ Pest Control for Bed bugs" />    </>
  );
};

export default CockroachesChair;
