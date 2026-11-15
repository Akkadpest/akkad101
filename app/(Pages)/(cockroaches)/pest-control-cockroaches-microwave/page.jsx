import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Cockroach Pest Control for Microwaves | Safe & Effective",
    description:
      "Discover cockroaches in your microwave? Our expert pest control services safely eliminate cockroaches from microwaves, ensuring your kitchen and food remain safe. Get reliable, non-toxic solutions today. ",
  };
  
const chairContent = [
  "1.Clean the Microwave Regularly: Ensure the microwave is thoroughly cleaned after every use to remove any food particles that could attract cockroaches. ",
  "2.Inspect Seams and Vents: Cockroaches often hide in the seams and air vents of microwaves, so check these areas regularly. ",
  "3.Place Gel Bait: We use specialized cockroach gel baits that are safe around kitchen appliances and target hidden pests. ",
  "4.Professional Treatment: If necessary, our team at Akkad Pest Control will apply safe insecticides to areas around the microwave to prevent future infestations. ",
  "5.Preventative Maintenance: Always cover food while using the microwave and keep it clean to avoid attracting cockroaches. "


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in microwave</h1>
            <p className="para my-2 fw-500">
            Finding cockroaches in your microwave is not only unsettling but also a health risk, as these pests can contaminate your food and appliances. Common signs include droppings, a strange odor, and visible insects. To eliminate cockroaches from your microwave and prevent further contamination, professional pest control is essential. Safe, targeted treatments effectively remove cockroaches from your appliance, ensuring your kitchen remains clean and hygienic. Regular maintenance can help prevent future infestations, keeping your food and kitchen safe.
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
              steps to control cockroaches in Microwave
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
      <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Microwave" />
    </>
  );
};

export default CockroachesChair;
