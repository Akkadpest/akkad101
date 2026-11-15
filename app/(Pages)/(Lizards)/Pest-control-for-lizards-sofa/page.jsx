import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
export const metadata = {
    title: "Professional Pest Control for Lizards in Sofa | Safe & Effective Removal",
    description:
      "Eliminate lizards from your sofa with our expert pest control services. We provide safe, fast, and efficient solutions to remove lizards and protect your home. Contact us today for a lizard-free environment!",
  };
  
const chairContent = [
  "1.Inspect the Sofa: Check for signs of lizard activity such as droppings or sightings near the sofa.",
  "2.Clean the Sofa Area: Ensure the area around the sofa is free of food crumbs and debris that may attract lizards.",
  "3.Place Lizard Traps: We strategically place lizard traps near the sofa to capture and remove any hiding lizards.",
  "4.Seal Entry Points: Ensure that cracks or gaps near windows and doors around the sofa area are sealed to prevent lizards from entering.",
  "5.Professional Extermination: Akkad Pest Control offers professional lizard control services to safely remove lizards and prevent future infestations in your home."
];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Lizards in Sofa</h1>
            <p className="para my-2 fw-500">
            Lizards can hide in sofas, making it uncomfortable and unsanitary. Akkad Pest Control offers expert services to safely remove lizards from sofas and keep your living space safe and clean.
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
            Steps to Control Lizards in Sofa                        
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
    </>
  );
};

export default CockroachesChair;
