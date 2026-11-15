import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
export const metadata = {
    title: "Expert Ant Pest Control for Tables | Safe & Reliable Solutions",
    description:
      "Ants in your table? Our professional pest control services eliminate ants from tables using safe, eco-friendly treatments. Keep your furniture and home pest-free with expert solutions. ",
  };
  
const chairContent = [
  "1.Wipe the Table: Clean the table with a disinfectant, paying attention to cracks and joints where ants may hide. ",
  "2.Inspect Surrounding Area: Look for ant trails leading to the table and follow them to their source. ",
  "3.Place Ant Bait Traps: We use ant bait traps around the table to lure ants and eliminate the colony. ",
  "4.Seal Cracks: Seal any cracks or gaps in the table where ants might enter.",
  "5.Maintain Cleanliness: Keep the table clean and avoid leaving food out to prevent future infestations. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Table</h1>
            <p className="para my-2 fw-500">
            Ants can invade dining or work tables, leading to hygiene issues and discomfort. Common signs include visible ants, dirt trails, and food residue. To effectively eliminate ants from tables and maintain a clean environment, professional pest control is essential. Safe, eco-friendly treatments target the ants, ensuring your home or workspace remains pest-free. Regular cleaning and proper food handling can help prevent future infestations.
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
            Steps to Control Ants in Table
            </h2>
            
              {chairContent.map((item, index) => (
                <div key={index}>
                    <p className="  ps-5">{item}</p>
                </div>
              ))}

           
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Link href="https://www.pestcontrol.ae/customer-section/#/login" className="book_now_btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
     <BookNow />
     <FourKinds
      headertitle="Products Used To Control Ants "
      insects="antsproducts" />
     <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Table" />
   

    </>
  );
};

export default CockroachesChair;
