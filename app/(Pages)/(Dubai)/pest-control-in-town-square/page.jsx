import FAQTWo from "@/Components/Sections/FAQs/faqsTwo";
import TestimonialReviews from "@/Components/Sections/Testimonial";
import React from "react";
const ServiceInTownSquare = [
  {
    heading: "Bedbugs-Control:",
    desc: "-Our expert team provides targeted treatments to effectively eliminate  bedbugs and prevent their return, ensuring a peaceful and comfortable environment.",
    img: "/images/new_page_images/Bedbugs-Control.png",
  },
  {
    heading: "Cockroaches-Control:",
    desc: "-We  offer comprehensive solutions for cockroach infestations, using  proven methods to eradicate these pests and minimize health risks associated with them.",
    img: "/images/new_page_images/Cockroaches-Control.png",
  },
  {
    heading: "Ants-control:",
    desc: "-Our ant control services address various ant species, providing tailored  treatments to eliminate colonies and prevent future infestations.",
    img: "/images/new_page_images/Ants-control.png",
  },
  {
    heading: "Bats-control:",
    desc: "-We specialize in safe and humane bat removal, using effective techniques to remove bats from your property and prevent their return.",
    img: "/images/new_page_images/Bats-control.png",
  },
];

const whyChoice = [
  {
    heading: "Local Expertise",
    desc: "With extensive experience in the Townsquare area, we understand the local environment and the pests that thrive here. Our solutions are customized to effectively target and eliminate pests common to Townsquare.",
  },
  {
    heading: "Safe and Effective Treatments",
    desc: "We use eco-friendly and safe pest control methods that are tough on pests but gentle on your family, pets, and the environment. Our treatments are designed to provide long-lasting results without compromising safety.",
  },
  {
    heading: "Comprehensive Services",
    desc: "From initial inspection to ongoing prevention, Akkad Pest Control offers a full range of services to keep your property pest-free. We handle all types of pests, including insects, rodents, and termites.",
  },
];
const mainServices = [
  {
    heading: "Residential Pest Control:",
    desc: "Protect your home and family with our residential pest control services. We offer regular inspections, preventative treatments, and emergency pest removal to ensure your home remains a safe haven.",
  },
  {
    heading: "Commercial Pest Control: ",
    desc: "Keep your business running smoothly with our commercial pest control solutions. We provide discreet, efficient services to eliminate pests and prevent future infestations, ensuring your business stays compliant and your customers remain happy.",
  },
  {
    heading: "Termite Control: ",
    desc: "Termites can cause significant damage if left untreated. Our termite control services include thorough inspections, effective treatments, and ongoing monitoring to protect your property from costly damage. Rodent Control: Rodents can be more than just a nuisance—they can also pose health risks. Our rodent control services are designed to quickly and effectively remove these pests and prevent them from returning.",
  },
];
const PestControlInTownSquare = () => {
  
  return (
    <>
      <div className="container-fluid">
        <div className=" container-max-width">
          <h1 className="new-pages-heading my-3">
            Pest Control in Town square
          </h1>
        </div>
        <section>
          <div className="container container-max-width">
            <h1 className="fs-2 fw-bold text-lightblue">
              Our Pest Control Service In Town Square Dubai
            </h1>
            <div className="row mt-2 g-4">
              {ServiceInTownSquare.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12" key={index}>
                  <img
                    src={item.img}
                    className="img-fluid"
                    alt={item.heading}
                  />
                  <div>
                    <p className="para text-color-town-square my-3">
                      <strong>{item.heading}</strong>
                      {item.desc}
                      <br />
                      {item.hf}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className=" container container-max-width my-5 ">
            <img
              src="/images/new_page_images/town-square.png"
              alt="town square"
              className="img-town-square"
            />
          </div>
        </section>
        <section>
          <div className="container container-max-width">
            <h2 className="fs-2 fw-bold text-lightblue">
              Why Choose Akkad Pest Control in Town square?
            </h2>
            <div className="row mt-0 g-3">
              {whyChoice.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div>
                    <p className="para fw-bolder m-0">{item.heading}</p>
                    <p className="para  mb-3 text-start">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className=" container container-max-width mt-4">
            <h2 className="fs-2 fw-bold text-lightblue">
              Competitive and Affordable Pricing
            </h2>
            <span className="text-black ">
              At Akkad Pest Control Services, we pride ourselves on offering
              highly competitive pricing that is more affordable compared to
              other companies. We believe in providing exceptional value without
              compromising on the quality of our services, ensuring you get the
              best results at a cost that fits your budget.{" "}
            </span>
            <h2 className="text-black fw-bold py-2">
              Best price offer from 189 AED
            </h2>
            <h2 className="fs-2 fw-bold text-lightblue ">
              Main Services in Town square Dubai
            </h2>
            <div className="row mt-0 g-3">
              {mainServices.map((item, index) => (
                <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                  <div>
                    <p className="para text-start">
                      <strong>{item.heading}</strong>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section>
          <div className="container container-max-width mb-5">
            <h2 className="fs-2 fw-bold text-lightblue">Additional Services</h2>
            <div className="row mt-0 g-3">
              <div className="col-lg-3 col-md-6 col-sm-12">
                <p className="para  m-0">
                  <strong>Preventative Pest Control: </strong>
                  Prevention is key to maintaining a pest-free
                  <br />
                  environment. We offer customized preventative plans that
                  include regular inspections and treatments to keep pests at
                  bay.
                </p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <iframe
                  src="https://www.youtube.com/embed/FApd9FCZ3RQ?controls=1&rel=0&playsinline=1&modestbranding=0&autoplay=1&start=22&end=39&enablejsapi=1&origin=https%3A%2F%2Fwww.pestcontrol.ae&widgetid=1"
                  width="100%"
                  height={150}
                  allowFullScreen="allowfullscreen"
                />
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
                <p className="para  m-0">
                  <strong className="pe-3">Eco-Friendly Solutions:</strong> For
                  environmentally-conscious customers, we offer green pest
                  control options that minimize the impact on the environment
                  while effectively eliminating pests
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container container-max-width">
            <section>
              <TestimonialReviews />
            </section>
          </div>

          <div className="container container-max-width">
            <iframe
              className="my-5"
              src="https://maps.google.com/maps?q=Tower%20Square%20%2CDubai&t=m&z=10&output=embed&iwloc=near"
              width="100%"
              height={300}
              allowFullScreen="allowfullscreen"
            />
          </div>
        </section>
        <FAQTWo faqs="townSquare" title="Frequently Asked Questions" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Services - Nad Al Sheba",
      "image": "https://pestcontrol.ae/images/new_page_images/town-square.png",
      "description": "Professional pest control services in Town Square Dubai  for residential and commercial properties.",
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
          "streetAddress": "Office 123, Town Square",
          "addressLocality": "Town Square",
          "addressRegion": "Dubai",
          "postalCode": "00000",
          "addressCountry": "UAE"
        }
      },
      "sku": "AKKAD-PROD-001",
      "offers": {
        "@type": "Offer",
        "price": "120",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "url": "https://pestcontrol.ae/pest-control-in-silicon-oasis",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5030"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Mohammed Ali",
          "datePublished": "2024-11-10",
          "reviewBody": "The pest control service in Town Square Dubai  was excellent. Great results!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        }
      ]
    })
  }}
/>
      </div>
    </>
  );
};

export default PestControlInTownSquare;
export const metadata = {
  title: "Reliable Pest Control Services in Town Square | Safe & Effective Solutions",
  description:
    "Searching for pest control in Town Square? Our expert team offers efficient and eco-friendly pest management solutions tailored to protect your home and business. Ensure a pest-free environment with our trusted services. Contact us today for a consultation!",
};