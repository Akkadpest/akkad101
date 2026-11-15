"use client";
import Offices from "@/Components/Sections/Offices";
import FAQs from "@/Components/Sections/FAQs";
import HereToHelp from "@/Components/Sections/HereToHelp";
import ContactForm from "@/Components/Sections/ContactForm";
import contactData from "../contact-us/offices.json";
import React from "react";
import Link from "next/link";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
import GoogleReview from "@/Components/Sections/GoogleReview";
import Services from "@/Components/Sections/Services";
import BookInDubai from "@/Components/Sections/BookInDubai";
import Infestation from "@/Components/Sections/Infestation";
import AreaWeServeInDuhai from "@/Components/Sections/ServeInDubai";
import LocationSection from "@/Components/Sections/LocationSection";
import PestControlProcess from "@/Components/Sections/PestControlProcess";
import { color } from "framer-motion";
const firstOffice = contactData.contact_page[0];
const what_offer = [
  {
    heading: "Safe for Children and Pets",
    desc: "We use non-toxic methods to ensure the safety of your loved ones.",
  },
  {
    heading: "Eco-friendly Pest Control",
    desc: "Our methods are environmentally safe and sustainable.",
  },
  {
    heading: "Certified Professionals",
    desc: "Our team is trained and certified to handle all types of pest issues.",
  },
  {
    heading: "24/7 Emergency Services",
    desc: "We are available around the clock for your pest emergencies.",
  },
];

const Contact = () => {
  return (
    <div className="body-bg-color">
      <div className="container  ">
        <div id="location_header" className="hide_modile hide-on-mobile">
          <img className="img-fluid" src="/images/contact-banner.jpeg" />
        </div>

        <section id="location_content">
          <h1 className="text-center mt-5">
            Pest Control in Dubai &amp; disinfecting treatments
          </h1>
          <p className="text-muted">
            pest Control Expert In Dubai " Providing a comprehensive array of
            pest control solutions, including treatments for bed bugs,
            cockroaches, ant control, and rodent pest control
          </p>
          <div id="subject_title">
            <h5 className="top text-muted red-title-banner border text-center mt-5">
              Pest Control In Dubai
            </h5>
          </div>
          <p className="text-muted text-center">
            Our Dubai pest control services offer quick, effective solutions to
            keep your home or business pest-free. Using eco-friendly products
            and advanced techniques, we ensure a safe and lasting result
            tailored to your needs. Trust our experts for reliable and discreet
            pest management.
          </p>
          <Link href="#">Read Article </Link>
        </section>
        
        <section>
       <div className='my-4'>
       <h2>
              <div class="offer-title text-center mb-3">What We Offer</div>
            </h2>
          <div className="offer-list">
            
           <div className='row d-flex justify-content-around'>
           {what_offer.map((offer, index) => (
              <div className="offer-item col-md-4" key={index}>
                <h5 style={{ color: "#5cb85c" }}>{offer.heading}</h5>
                <h6 className="para py-2">{offer.desc}</h6>
              </div>
            ))}
           </div>
          </div>
       </div>
        </section>
        <section>
          <GoogleReview />
        </section>
        <section>
          <Offices off={firstOffice} />
        </section>
        <Services
          title="Pest Control Services"
          description="Common pest infestation are prevailing in various locations in Dubai. These pests are found in every home. Places requiring pest control expertise include apartments, villas, industrial areas and business premises.Professionalize Services To Control Insects Your Needs"
        />
        <PestControlProcess />
        <ContactForm />
        <section>
          <div className="row ">
            <h6
              className="text-center mt-5 mb-2 fs-18"
              style={{ fontWeight: "500" }}
            >
              Pest Control services for residential in Dubai
            </h6>
            <p className="text-muted">
              In the densely populated city of Dubai, home to over 3 million
              people, the risk of pest infestations is high. Akkad has extensive
              experience in handling a variety of pest issues, from fly-infested
              kitchens to mosquito swarms.
            </p>
            <p className="text-muted">
              understanding the significant impact of pests on your home,
              health, and loved ones, Akkad, based in Dubai, UAE, offers prompt
              and effective pest control services. Our team, consisting of
              skilled technicians, surveyors, field biologists, and specialists
              in fumigation and bird control, is ready to provide quick and safe
              solutions to your pest problems. Our services include:
            </p>
            <ul>
              <li>
                Fast, efficient pest treatments that are specifically tailored
                to address the unique challenges posed by your pest problem in
                office environments.
              </li>
              <li>
                Expert pest proofing and preventive advice to help secure your
                office premises against future infestations.
              </li>
              <li>
                Certification by Dubai Municipality for all our technicians,
                ensuring that our services across Dubai are conducted with the
                utmost professionalism and adherence to safety standards.
              </li>
            </ul>
            <p className="text-muted mb-0 p-0">
              Akkad is committed to ensuring your office environment remains
              pest-free, using the latest technology and environmentally
              friendly methods for safe and effective pest control.
            </p>
          </div>

          <div className="row ">
            <h6
              className="text-center mt-5 mb-2"
              style={{ fontSize: "18px", fontWeight: "500" }}
            >
              Pest Control Services for Offices in Dubai
            </h6>
            <p className="text-muted">
              In Dubai's thriving business landscape, maintaining a clean and
              pest-free office environment is essential for the health and
              productivity of your employees. Akkad has extensive experience in
              managing a wide range of pest issues that can affect office
              spaces, from rodents and cockroaches to ants and termites.
            </p>
            <p className="text-muted">
              Understanding the significant impact of pests on your office,
              business operations, and the well-being of your staff, Akkad,
              based in Dubai, UAE, offers prompt and effective pest control
              services. Our team, consisting of skilled technicians, surveyors,
              field biologists, and specialists in fumigation and bird control,
              is ready to provide quick and safe solutions to your pest
              problems. Our office services include:
            </p>
            <ul>
              <li>
                Fast, efficient pest treatments that are specifically tailored
                to address the unique challenges posed by your pest problem.
              </li>
              <li>
                Expert pest proofing and preventive advice to help secure your
                premises against future infestations.
              </li>
              <li>
                Certification by Dubai Municipality for all our technicians,
                ensuring that our services across Dubai are conducted with the
                utmost professionalism and adherence to safety standards.
              </li>
            </ul>
            <p className="text-muted mb-0 p-0">
              Akkad is committed to ensuring your environment remains pest-free,
              using the latest technology and environmentally friendly methods
              for safe and effective pest control.
            </p>
          </div>
        </section>
        <BookInDubai />
        <AreaWeServeInDuhai />
        <Infestation />
        <LocationSection showAllSections={false} />
        <section>
          <div className="row d-flex justify-content-end">
            <div className="col-lg-6">
              {" "}
              <FAQs
                imageToShow={false}
                faqs="Contact"
                title="Frequently Asked Questions"
              />
            </div>
          </div>
        </section>
        <HereToHelp />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Services - Dubai",
      "image": "https://pestcontrol.ae/images/contact-banner.jpeg",
      "description": "Professional pest control services in Dubai for residential, commercial, and industrial spaces. Reliable and effective pest management solutions.",
      "brand": {
        "@type": "Brand",
        "name": "Akkad Pest Control",
        "logo": "https://www.pestcontrol.ae/images/img/logo_small_kuskus.png"
      },
      "manufacturer": {
        "@type": "Organization",
        "name": "Akkad Pest Control",
        "url": "https://pestcontrol.ae",
        "telephone": "+971 4 396 6211",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office 1001, Dubai",
          "addressLocality": "Dubai",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "UAE"
        }
      },
      "sku": "AKKAD-SERV-001",
      "offers": {
        "@type": "Offer",
        "price": "99",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "url": "https://pestcontrol.ae/pest-control-dubai",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "12450"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Mohammed Ali",
          "datePublished": "2024-11-10",
          "reviewBody": "Fantastic pest control services in Dubai! Akkad Pest Control exceeded my expectations.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Sara Khalid",
          "datePublished": "2024-11-08",
          "reviewBody": "Very professional team and effective services. Highly recommend them for pest control in Dubai.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4",
            "bestRating": "5"
          }
        }
      ]
    })
  }}
/>


      </div>
    </div>
  );
};

export default Contact;
