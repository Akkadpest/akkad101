import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Ant Pest Control for Cabinets | Safe & Professional Solutions",
    description:
      " Ants infesting your cabinets? Our expert pest control services eliminate ants from cabinets using safe, eco-friendly treatments. Keep your kitchen and storage areas clean and pest-free with reliable solutions.",
  };
  
const chairContent = [
  "1.Empty the Cabinet: Remove all items from the cabinet and check for signs of ants, such as trails or nests. ",
  "2.Clean the Cabinet Thoroughly: Use a mild detergent to clean the cabinet, ensuring no food particles remain.",
  "3.Use Ant Baits: Place ant baits inside the cabinet to attract and eliminate the entire colony. ",
  "4.Seal Gaps and Cracks: Seal any cracks or gaps inside the cabinet where ants may enter. ",
  "5.Professional Treatment: If necessary, Akkad Pest Control applies safe treatments to prevent future infestations. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Cabinet</h1>
            <p className="para my-2 fw-500">
            Ants in cabinets can contaminate food and disrupt the cleanliness of your kitchen. Signs of infestation include visible ants, dirt trails, and food packaging damage. To eliminate ants from cabinets and ensure a hygienic kitchen, professional pest control is essential. Safe, eco-friendly treatments target ants, keeping your storage areas clean and pest-free. Regular cleaning and proper food storage can help prevent future infestations.
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
            Steps to Control Ants in Cabinet
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
       headertitle="Products Used to Control Ants "

      insects="antsproducts" />
      <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Cabinet" />

    </>
  );
};

export default CockroachesChair;
