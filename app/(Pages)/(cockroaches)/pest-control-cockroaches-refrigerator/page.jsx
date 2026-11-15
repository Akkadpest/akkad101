import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Cockroach Pest Control for Refrigerators | Safe Removal Solutions",
    description:
      "Found cockroaches in your refrigerator? Our expert pest control services safely eliminate cockroaches from refrigerators, ensuring your food stays clean and pest-free. Contact us for reliable solutions. ",
  };
  
const chairContent = [
  "1.Clean the Refrigerator Thoroughly: Empty the refrigerator and clean it with disinfectant to remove food particles that attract cockroaches. ",
  "2.Inspect the Seals and Vents: Check door seals and air vents for cockroach activity, as they often hide in these areas. ",
  "3.Place Gel Bait Near Refrigerator: We place cockroach gel bait around the refrigerator to attract and eliminate hidden pests. ",
  "4.Seal Cracks and Gaps: Seal any cracks around the refrigerator where cockroaches could be entering. ",
  "5.Maintain Cleanliness: Keep your refrigerator clean and avoid leaving food out to deter cockroaches. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Refrigerators</h1>
            <p className="para my-2 fw-500">
            Akkad Pest Control understands how unsettling it can be to discover cockroaches in your sofa. These pests not only damage your furniture but also pose serious health risks, spreading diseases and allergens. Our expert team at Akkad Pest Control specializes in eliminating cockroaches from sofas using safe, eco-friendly methods. We thoroughly inspect and treat your furniture, ensuring your home remains pest-free. Keep your living spaces clean and hygienic with our sofa-specific cockroach extermination services.
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
              steps to control cockroaches in Refrigerators
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
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Refrigerator" />
    </>
  );
};

export default CockroachesChair;
