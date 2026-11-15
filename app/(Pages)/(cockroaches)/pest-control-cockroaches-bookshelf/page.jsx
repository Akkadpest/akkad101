import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Effective Cockroach Pest Control for Bookshelves | Safe & Targeted Solutions",
    description:
      " Dealing with cockroaches in your bookshelf? Our expert pest control services eliminate cockroaches from bookshelves using safe, eco-friendly treatments. Protect your books and home from infestations with professional solutions.",
  };
  
const chairContent = [
  "1.Remove Books and Clean Thoroughly: Take out all items from the bookshelf and vacuum the shelves to remove any debris. ",
  "2.Inspect for Cockroach Activity: Check for signs of cockroach droppings, eggs, or live cockroaches hiding in the bookshelf. ",
  "3.Place Gel Bait: We use cockroach gel bait to attract and kill cockroaches in hidden areas of the bookshelf. ",
  "4.Apply Safe Pesticides: If necessary, Akkad Pest Control will apply insecticides to keep cockroaches from returning to the bookshelf. ",
  "5.Regular Cleaning: Keep your bookshelf clean and dust-free to prevent cockroach infestations."


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Cockroaches in Bookshelf</h1>
            <p className="para my-2 fw-500">
            Cockroaches hiding in bookshelves can damage your books and contaminate your valuables.
             Signs of infestation include droppings, a musty odor, and visible insects among your books. 
             To protect your collection and eliminate cockroaches, professional pest control is crucial. 
             Safe, eco-friendly treatments target pests within your bookshelf, ensuring your space remains clean and pest-free. 
             Regular inspections can help prevent future infestations and preserve your books.
                        </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images_seo/image_1/cockroachs-chair.webp" alt="Cockroaches walking on Chair" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3 ">
              Steps to control cockroaches in bookshelves
            </h2>
            
              {chairContent.map((item, index) => (
                <div key={index}>
                    <p className="  ps-5">{item}</p>
                </div>
              ))}

           
          </div>
        </div>
        
 <BookNow />
 <FourKinds 
 headertitle="Products Used To Control Cockroaches "
 insects="cockroaches" />
 <FAQs faqs="cockroachpestcontrol" title="FAQ Pest Control for Cockroaches in Bookshelf" />
      </div>
   
    </>
  );
};

export default CockroachesChair;
