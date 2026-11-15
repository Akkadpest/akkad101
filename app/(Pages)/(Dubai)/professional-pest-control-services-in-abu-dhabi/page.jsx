import FAQs from "@/Components/Sections/FAQs";
import TestimonialReviews from "@/Components/Sections/Testimonial";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
import { Stepper,Step } from "@/Components/Sections/Stepper";
import Services from "@/Components/Sections/Services";
import React from "react";
const WhyAbuDhabi = [
  {
    heading: "Experienced Technicians:",
    desc: "Our certified and experienced team is equipped to handle all types of pest infestations.",
  },
  {
    heading: "Eco-Friendly Solutions: ",
    desc: "We prioritize the safety of your family and pets by using environmentally friendly products.",
  },
  {
    heading: "Affordable Pricing: ",
    desc: "Our services start from just 189 AED, offering you great value without compromising on quality.",
  },
  {
    heading: "Guaranteed Satisfaction: ",
    desc: " Our services come with a satisfaction guarantee to ensure peace of mind.",
  },
];
const AbuDhabiServices = [
  {
    link: "Termite Control",
    url: "termite-control-cost/",
    desc: "Protect your property from the destructive power of termites. Our specialized termite control services target termites at their source, preventing future infestations.",
  },
  {
    link: "Bed Bug Treatment",
    url: "bed-bugs/",
    desc: "Bed bugs are notoriously difficult to eliminate, but our advanced treatments ensure complete removal from your premises, offering you a restful, bug-free sleep.",
  },
  {
    link: "Cockroach Control",
    url: "/cockroaches/",
    desc: "Cockroaches are not only unsightly but also dangerous carriers of diseases. Our cockroach control methods effectively eliminate these pests and prevent their return.",
  },
  {
    link: "Rodent Control",
    url: "/",
    desc: "Rodents can cause extensive damage and pose health risks. Our rodent control solutions are designed to eradicate these pests and keep your environment safe.",
  },
  {
    link: "Ant Control",
    url: "pest-control/",
    desc: "Ants can quickly invade your property in large numbers. Our ant control services are designed to target and eliminate ant colonies, ensuring your space remains ant-free.",
  },
];
const Advantages = [
  {
    img: "/images/new_page_images/pest-free.png",
    desc: "pest-free house",
 

  },
  {
    img: "/images/new_page_images/lower.png",
    desc: "lowers the chance of an infestation",
  },
  {
    img: "/images/new_page_images/enhance.png",
    desc: "enhances hygiene",
  },
  {
    img: "/images/new_page_images/peace-mind.png",
    desc: "Peace of mind",
  },
];
const ImportanceImg = [
  {
    img: "/images/new_page_images/Cockroaches-Control.png",

  
  },
  {
    img: "/images/new_page_images/Cockroaches.png",
  },
  {
    img: "/images/new_page_images/Ants-control.png",
  },
  {
    img: "/images/new_page_images/Bedbugs-Control.png",
  },
];
const ProfessionalServicesInAbuDhabi = () => {
 
  return (
    <>
      <div className="fluid-container">
        <div className="container container-max-width">
          <section>
            <div>
              <h1 className="fw-bold fs-1 my-3">
                Pest Control Services in Abu Dhabi
              </h1>
              <p className="fs-normal text-black">
                Pests can pose serious risks to your health and property. Akkad
                Pest Control Service offers comprehensive and reliable pest
                control solutions across
                <a href="/">
                  {" "}
                  Abu Dhabi.{" "}
                </a>
                . With our team of skilled professionals and advanced
                techniques, we ensure that your home or business remains
                pest-free and safe.
              </p>
              
          <div className="container mt-5">
      <h2 className="fw-bold mt-4 text-center">Book a Pest Service in Abu Dhabi</h2>
      <p className="text-center">
      Whenever you book our services in Abu Dhabi, we guarantee a lightning-fast response — we'll get back to you in just 10 seconds!
      </p>
      <p className="text-center">
      Our dedicated call center team is ready and waiting for your call 24/7. With unlimited support, you can reach out anytime, and we’ll ensure your pest concerns are addressed promptly      </p>
      <div className="text-center mt-3">
        <a href="https://www.pestcontrol.ae/my-warranty" className="btn btn-success px-4 py-2">
          Book Now
        </a>
      </div>
    </div>
              <img
                src="/images/new_page_images/Abu-dhabi.png"
                alt="abu dhabi"
                className="my-3"
                style={{ width: "100%", maxWidth: "400px" }}
              />
            </div>
          </section>

         

          <section>
            <h2 className="fs-2 fw-bold text-lightblue">
              Pest Control for Your Home in Abu Dhabi
            </h2>
            <p className="my-3">
              Although your house is your haven, pests can quickly disturb your
              tranquility. Because of Abu Dhabi’s particular environment, a
              number of pests, including termites, cockroaches, ants, and
              rodents, can become an annoyance, causing harm and possibly
              endangering health. At Akkad Pest Control Service, we provide
              thorough pest control solutions that are customized to meet the
              unique requirements of Abu Dhabi residences.
            </p>
          </section>
          
          <section>
            <div className="row">
              <div className="col-lg-6">
                <h2 className="fs-2 fw-bold text-lightblue">
                  Why Choose Akkad Pest Control Service?
                </h2>
              </div>
              <div className="col-lg-6">
                <p>
                  When it comes to pest control in{" "}
                  <a href="/">
                    Abu Dhabi
                  </a>
                  , Akkad Pest Control Service is the trusted choice. Here’s why
                </p>
              </div>
            </div>
            <div className="row mt-0 g-3">
              {WhyAbuDhabi.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                  <div>
                    <p className="lh-md">
                      <strong>{item.heading}</strong>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="row my-4">
              {ImportanceImg.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-12 my-2" key={index}>
                  <img
                    src={item.img}
                    alt="Cockroaches Control"
                    className="img-fluid"
                  />
                </div>
              ))}
            </div>
          </section>
          <section>
            <h2 className="fs-2 fw-bold text-lightblue">
              The Importance of Pest Control in Abu Dhabi
            </h2>
            <p className="my-3">
              Regular pest control treatments are necessary to maintain a safe
              and healthy living environment in Abu Dhabi. Termites, bed bugs,
              cockroaches, and rats are just a few of the pests that can infest
              your house and cause serious health problems as well as property
              damage. Expert pest control in Abu Dhabi is essential for removing
              current infestations and averting more issues. Selecting
              professional services gives you access to specialized knowledge,
              cutting-edge methods, and vast experience—all of which are
              necessary for efficient pest management. Frequent pest control
              procedures preserve not only your house but also your family’s
              health and welfare.
              
            </p>
          
          </section>

         

          <section className="pest_control_in_dp py-5">
            
        <div className="col-md-12">
          <h2 className="fw-700 text-center">Pest Control Services Steps In Abu Dhabi</h2>
        </div>

        <Stepper>
          <Step title="Pest Inspection">
            <div className="col-md-6 step_container_text">
              <div>
                <p>
                  Pest control inspection at your premises to identify the type
                  of infestation.
                </p>
                <ul>
                  <li>Get a free pest control inspection in your location</li>
                  <li>
                    24/7 Call center agents available to book an appointment
                  </li>
                  <li>Send details through WhatsApp for further assistance</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 no_padding step_container_img">
              <div>
                <img
                  src="/images/step1-pest-control.webp"
                  className="img-fluid w-100"
                  alt="Pest Control Near You"
                />
              </div>
            </div>
          </Step>
          <Step title="Pest Treatment">
            <div className="col-md-6 step_container_text">
              <div>
                <p>
                  A pest control treatment will be conducted after identifying
                  the the type of pest infestation. The type of treatment and
                  the time required to complete may vary depending on the
                  severity of the infestation.
                </p>
                <ul>
                  <li>
                    The treatment will be conducted by Certified pest control
                    professionals
                  </li>
                  <li>
                    Technicians will determine the type of treatment required
                  </li>
                  <li>
                    All safety measures that needs to be followed will be
                    provided
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 no_padding step_container_img">
              <div>
                <img
                  src="/images/step2-pest-control.webp"
                  className="img-fluid w-100"
                  alt="Pest Control Near You"
                />
              </div>
            </div>
          </Step>
          <Step title="Pest Protection">
            <div className="col-md-6 step_container_text">
              <div>
                <p>
                  Once the treatment has been completed, our technicians will
                  monitor the infestation on a regular basis to make sure the
                  treatment has been completed successfully.
                </p>
                <ul>
                  <li>
                    6 months warranty with unlimited callouts will be offered
                  </li>
                  <li>
                    Free pest control treatment if the infestation occurs within
                    the warranty period
                  </li>
                  <li>Further treatment sessions can be booked additionally</li>
                </ul>
              </div>
            </div>

            <div className="col-md-6 no_padding step_container_img">
              <div>
                <img
                  src="/images/step3-pest-control.webp"
                  className="img-fluid w-100"
                  alt="Pest Control Near You"
                />
              </div>
            </div>
          </Step>
        </Stepper>
      </section>
      
          <section>
            <h2 className="fs-2 fw-bold text-lightblue my-3">
              Our Pest Control Services in Abu Dhabi
            </h2>
            <div className="row my-4">
              {AbuDhabiServices.map((item, index) => (
                <div className="col-lg-4 col-md-6" key={index}>
                  <a href={item.url}>
                    <strong>{item.link}</strong>
                  </a>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section>
            <h2 className="fs-2 fw-bold text-lightblue my-4 ms-4">
              Advantages of pest treatment and management
            </h2>
            <div className="row">
              {Advantages.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 my-2" key={index}>
                  <img src={item.img} alt={item.desc} className="img-fluid" />

                  <p className="advan-abu-dhabi">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <div className="my-5">
              <h4 className="fw-bold fs-2 my-3">
                Special Offer Starting at 110 AED
              </h4>
              <p className="fs-normal text-black para">
                You can get excellent service for less at Akkad Pest Control. We
                provide superior pest control services at more reasonable costs
                than others. With us, you’ll get the most for your money.
              </p>
            </div>
          </section>
          <section>
          <Services
        title="Pest Control Services In Abu Dhabi"
        description="Common pest infestation is prevalent in various locations in Abu Dhabi. These pests are found in every home, and areas requiring pest control expertise include apartments, villas, industrial areas, and business premises."
      />
<section>

<div className="my-5">
  <h4 className="fw-bold fs-2 my-3">
    What do customers say about Akkad?
  </h4>
  <p className="fs-normal text-black para">
    Akkad Pest Control has been rated 4.7 out of 5 based on 1405 reviews as of November 2024. Read all customer reviews, look at our customer reviews, and you will see the true satisfaction. Our commitment to excellence and customer satisfaction speaks for itself.
  </p>
  </div>
</section>
           <TestimonialReviews/>
         

            <ReviewsSchema />
          </section>
          <section>


          </section>
          <section>
          <FAQs faqs="faqPestControlInAbuDhabi" title="FAQ's Pest Control in Abu Dhabi" />
          </section>
          <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Products",
      "image": "https://pestcontrol.ae//images/new_page_images/Abu-dhabi.png",
      "description": "Professional pest control products available in Abu Dhabi",
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
          "streetAddress": "Office 123, Business Bay",
          "addressLocality": "Abu Dhabi",
          "addressRegion": "Abu Dhabi",
          "postalCode": "00000",
          "addressCountry": "UAE"
        }
      },
      "sku": "AKKAD-PROD-001",
      "offers": {
        "@type": "Offer",
        "price": "110",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "url": "https://pestcontrol.ae/pest-control-abu-dhabi",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.7",
        "reviewCount": "1405"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Ahmed Ali",
          "datePublished": "2024-10-20",
          "reviewBody": "These products are excellent! They helped me get rid of pests effectively. Highly recommend Akkad Pest Control products.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Fatima Noor",
          "datePublished": "2024-10-15",
          "reviewBody": "Great product quality. Easy to use and very effective against pests.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.5",
            "bestRating": "5"
          }
        }
      ]
    })
  }}
/>
        </div>
      </div>
    </>
    
  );
};

export default ProfessionalServicesInAbuDhabi;
export const metadata = {
  title: "Affordable Pest Control Solutions Abu Dhabi",
  description:
    "Akkad Pest Control in Abu Dhabi: Fast, reliable, and eco-friendly pest solutions starting at just 189 AED.",
};