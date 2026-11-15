import React from "react";
import Link from "next/link";
import BookNow from "@/Components/Sections/BookNow/BookNow";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";
export const metadata = {
    title: "Professional Ant Pest Control for Bookshelves | Safe & Effective Solutions",
    description:
      "Ants infesting your bookshelf? Our expert pest control services eliminate ants from bookshelves using safe, eco-friendly treatments. Protect your books and home with reliable pest control solutions. ",
  };
  
const chairContent = [
  "1.Remove Items and Clean Thoroughly: Remove all books and belongings from the shelf and clean it to remove food crumbs or ant trails.",
  "2.Inspect the Shelves for Ant Activity: Look for signs of ants, including trails or nests. ",
  "3.Use Ant Bait: We place ant baits on or around the bookshelf to target and eliminate ants.",
  "4.Seal Cracks and Gaps: Ensure any cracks in or around the bookshelf are sealed. ",
  "5.Professional Treatment: Akkad Pest Control provides safe insecticide treatments to keep ants out of your bookshelf."


];

const CockroachesChair = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h1 className="my-4 mb-5">Pest Control for Ants in Bookshelf</h1>
            <p className="para my-2 fw-500">
            Ants can invade bookshelves, attracted by dust, debris, and possible food particles, leading to damage and contamination. Signs of infestation include visible ants, dirt trails, and insects hiding between books or crevices. Professional pest control is necessary to remove ants from bookshelves and protect your home. Safe, eco-friendly treatments effectively target ants, ensuring your books and shelves remain clean and pest-free.
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
            Steps to Control Ants in Bookshelf
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
       headertitle="Products Used To Ants "
      insects="antsproducts" />
      <FAQs faqs="antcontrolfaq" title="FAQ Pest Control for Ants in Bookshelf" />

    </>
  );
};

export default CockroachesChair;
