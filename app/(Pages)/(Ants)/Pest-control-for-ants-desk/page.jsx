import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Effective Ant Pest Control for Desks | Safe & Professional Solutions",
    description:
      "Ants infesting your desk? Our expert pest control services eliminate ants from desks using safe, eco-friendly treatments. Keep your workspace clean and pest-free with reliable solutions.",
  };
  
const chairContent = [
  "1.Declutter the Desk: Remove all papers, electronics, and clutter to inspect for ants. ",
  "2.Vacuum the Desk: Vacuum the desk and surrounding area to remove crumbs and debris that attract ants. ",
  "3.Use Ant Bait Stations: We place ant bait stations near the desk to eliminate the entire ant colony. ",
  "4.Seal Entry Points: Seal any cracks or gaps around the desk that could allow ants to enter. ",
  "5.Professional Treatment: Akkad Pest Control can apply safe, non-toxic insecticides to ensure ants don’t return. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Desk</h1>
            <p className="para my-2 fw-500">
            Ants can invade desks, especially when food or crumbs are present, creating a disruptive and unsanitary work environment. Signs of infestation include visible ants, dirt trails, and food debris in drawers or on surfaces. Professional pest control is essential to remove ants from desks and ensure a clean, productive workspace.             
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
            Steps to Control Ants in Desk
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
     <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Desk" />
    

    </>
  );
};

export default CockroachesChair;
