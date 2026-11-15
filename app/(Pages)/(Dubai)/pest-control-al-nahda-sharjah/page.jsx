import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";

export const metadata = {
    title: "Pest Control in Al Nahda, Sharjah | Safe & Reliable Solutions",
    description:
      "Looking for pest control in Al Nahda, Sharjah? Our expert pest control services provide safe and eco-friendly solutions to keep your home pest-free. Contact us for professional pest control treatments in Al Nahda, Sharjah.",
};

const pestControlContent = [
  "1.Regular Inspections: Conduct regular inspections in your home to identify early signs of pest infestations.",
  "2.Sealing Entry Points: We seal cracks, gaps, and openings to prevent pests from entering your home.",
  "3.Safe Pest Control Treatments: Our professional team uses eco-friendly pest control treatments that are safe for your family and pets.",
  "4.Maintain Cleanliness: Keeping your home clean and free from food debris reduces the likelihood of pests.",
  "5.Schedule Regular Services: Routine pest control services can prevent future infestations and keep your home pest-free.",
];

const PestControlAlNahdaSharjah = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control Services in Al Nahda, Sharjah</h1>
            <p className="para my-2 fw-500">
              Living in Al Nahda, Sharjah, requires effective pest control to ensure a healthy and comfortable living environment. Whether you're dealing with ants, cockroaches, termites, or other pests, our professional team provides reliable solutions that are safe for both your family and the environment. We focus on prevention, quick extermination, and long-lasting results. Regular maintenance and eco-friendly treatments ensure your home remains pest-free.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3">Steps for Effective Pest Control in Al Nahda, Sharjah</h2>
            
              {pestControlContent.map((item, index) => (
                <div key={index}>
                    <p className="ps-5">{item}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <BookNow/> 
    </>
  );
};

export default PestControlAlNahdaSharjah;
