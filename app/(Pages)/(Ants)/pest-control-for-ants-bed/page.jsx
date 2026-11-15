import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Effective Ant Pest Control for Beds | Safe & Professional Solutions",
    description:
      " Dealing with ants in your bed? Our expert pest control services eliminate ants from beds using safe, eco-friendly treatments. Ensure a pest-free and clean sleeping environment with reliable solutions.",
  };
  
const chairContent = [
  "1.Remove Bedding and Clean: Take off all bedding and wash it in hot water to remove any ants or eggs. ",
  "2.Inspect the Bed Frame: Look for signs of ants around the bed frame and headboard. ",
  "3.Use Ant Bait: Place ant bait near the bed to lure ants out of hiding and eliminate the colony. ",
  "4.Apply Safe Pesticides: Akkad Pest Control uses safe pesticides around the bed to prevent future infestations. ",
  "5.Keep Food Out of the Bedroom: Avoid eating in bed, as food crumbs can attract ants. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Bed</h1>
            <p className="para my-2 fw-500">
            Ants in your bed can be a nuisance, often attracted by food crumbs or moisture. Signs of infestation include visible ants, small dirt trails, or bites while you sleep. To eliminate ants from your bed and ensure a hygienic sleep environment, professional pest control is essential. Safe, eco-friendly treatments effectively target the ants, keeping your bed clean and pest-free. Regular cleaning and preventing food or spills in the bedroom can help avoid future infestations
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
            Steps to Control Ants in Bed
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
       headertitle="Products Used To Control Ants "

       insects="antsproducts" />
      <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Bed" />
      <ReviewsSchema />
    </>
  );
};

export default CockroachesChair;
