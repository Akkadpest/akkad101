import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
export const metadata = {
    title: "Professional Pest Control for Lizards in Wardrobe | Safe & Effective Removal",
    description:
      "Eliminate lizards from your wardrobe with our expert pest control services. We provide safe, fast, and efficient solutions to remove lizards and protect your home. Contact us today for a lizard-free environment!",
  };
  
const chairContent = [
  "1.Inspect the Wardrobe: Look for signs of lizard activity, such as droppings or sightings inside or around the wardrobe.",
  "2.Clean the Wardrobe Area: Remove any food crumbs or debris inside or around the wardrobe that may attract lizards.",
  "3.Place Lizard Traps: We strategically place lizard traps near the wardrobe to capture and remove any hiding lizards.",
  "4.Seal Entry Points: Ensure cracks or gaps near windows and doors around the wardrobe area are sealed to prevent lizards from entering.",
  "5.Professional Extermination: Akkad Pest Control offers professional lizard control services to safely remove lizards and prevent future infestations in your home."
];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Lizards in Wardrobe</h1>
            <p className="para my-2 fw-500">
            Lizards can hide in wardrobes, posing hygiene concerns and damaging clothing. Akkad Pest Control offers expert services to remove lizards from wardrobes and keep your home safe and clean.
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
            Steps to Control Lizards in Wardrobe                        
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
