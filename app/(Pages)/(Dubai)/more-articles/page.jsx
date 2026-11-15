import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";

export const metadata = {
    title: "The Importance of Pest Control | Key Facts and Insights",
    description:
      "Discover why pest control is crucial for health and safety. Learn key facts about effective pest control measures, and how they protect your home and environment.",
};

const pestControlFacts = [
  "1. Health and Safety: Pests such as rodents, cockroaches, and mosquitoes can spread diseases like salmonella, hantavirus, and dengue fever. Pest control helps reduce the risk of these diseases spreading in homes and public areas.",
  "2. Property Damage: Termites, ants, and rodents can cause severe damage to the structural integrity of buildings. Professional pest control prevents costly repairs by eliminating infestations before they escalate.",
  "3. Food Contamination: Pests like cockroaches and flies are notorious for contaminating food and surfaces, leading to foodborne illnesses. Effective pest control measures ensure kitchens and food storage areas remain clean and safe.",
  "4. Allergies and Respiratory Issues: Dust mites, cockroach droppings, and pest debris can trigger allergies or worsen respiratory conditions like asthma. Pest control eliminates these allergens, improving air quality indoors.",
  "5. Eco-Friendly Solutions: Modern pest control often includes eco-friendly treatments that target pests without harming humans, pets, or the environment. This ensures safety while effectively eliminating unwanted organisms."
];

const PestControlArticle = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">The Importance of Pest Control: Facts and Insights</h1>
            <p className="para my-2 fw-500">
              Pest control plays a vital role in maintaining a clean, healthy, and safe environment. Whether it’s in residential homes, commercial establishments, or public spaces, managing pests like insects, rodents, and other harmful organisms is essential for preventing health risks and property damage. Here are some key reasons why pest control is important and the facts behind it.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3">Key Facts About Pest Control</h2>
            
              {pestControlFacts.map((fact, index) => (
                <div key={index}>
                    <p className="ps-5">{fact}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      <BookNow/> 
    </>
  );
};

export default PestControlArticle;
