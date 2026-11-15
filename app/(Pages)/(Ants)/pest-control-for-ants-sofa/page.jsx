import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Effective Ant Pest Control for Sofas | Safe & Professional Solutions",
    description:
      " Dealing with ants in your sofa? Our expert pest control services remove ants from sofas using safe, eco-friendly treatments. Keep your furniture and home pest-free with reliable solutions.",
  };
  
const chairContent = [
  "1.Vacuum the Sofa: Thoroughly vacuum the sofa, including cushions and crevices, to remove food crumbs that attract ants. ",
  "2.Inspect the Area Around the Sofa: Look for ant trails and follow them to their source to identify where the ants are entering. ",
  "3.Use Ant Bait Traps: We place ant bait traps near the sofa to attract and eliminate ants. ",
  "4.Apply Safe Insecticides: Akkad Pest Control can safely apply insecticides in and around the sofa to prevent future infestations. ",
  "5.Maintain Cleanliness: Regularly clean and vacuum the sofa to avoid attracting ants. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Sofa</h1>
            <p className="para my-2 fw-500">
            Ants can invade sofas in search of food crumbs, leading to an unsanitary and uncomfortable living space. Common signs of infestation include visible ants, small dirt trails, or crumbs in the cushions. To effectively remove ants from your sofa and restore cleanliness, professional pest control is essential. Safe and eco-friendly treatments target the ants, ensuring your home stays pest-free and hygienic. Regular cleaning and inspections can help prevent future infestations.
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
            Steps to Control Ants in Sofa            </h2>
            
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
    <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Sofa" />
    

    </>
  );
};

export default CockroachesChair;
