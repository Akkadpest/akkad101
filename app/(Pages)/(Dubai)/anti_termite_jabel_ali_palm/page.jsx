import React from "react";
import Link from "next/link";
import { Stepper, Step } from "@/Components/Sections/Stepper";
import WhyAkkad from "@/Components/Sections/WhyAkkad";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
import ThreeKindsContracts from "@/Components/Sections/ThreeKindsContracts";
import Services from "@/Components/Sections/Services";
import FAQs from "@/Components/Sections/FAQs";
const LOCATION = [
  { text: "Al Nahda", url: "/pest-control-al-nahda-sharjah" },
  { text: "Al Majaz", url: "/pest-control-al-nahda-sharjah" },
  { text: "Muwaileh", url: "/pest-control-al-nahda-sharjah" },
  { text: "Muwailih Commercial", url: "/pest-control-al-nahda-sharjah" },
  { text: "Al Qasimia", url: "/pest-control-al-nahda-sharjah" },
  { text: "Al Taawun", url: "/pest-control-al-nahda-sharjah" },
  { text: "Al Khan", url: "/pest-control-al-nahda-sharjah" },
  { text: "Al Qasba", url: "/pest-control-al-nahda-sharjah" },
  { text: "Abu Shagara", url: "/pest-control-al-nahda-sharjah" },
  { text: "Bu Tina", url: "/pest-control-al-nahda-sharjah" },
  { text: "Sharjah", url: "/pest-control-sharjah" },
];
const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Approved Ant Termite _jebel Ali Palm _ fond A, B, C, D , K ",
  "description": "We provide professional pest control ant termite services for palm jabel ali   specializing in safe and effective solutions for common pests such as bed bugs, cockroaches, and termites.",
  "mainEntity": [
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What pest control services are available in Dubai?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We offer pest control services for apartments, villas, industrial areas, and business premises in Dubai, specializing in safe and organic pest control solutions."
          }
        },
        {
          "@type": "Question",
          "name": "Is the pesticide used safe for homes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we use safe and organic pesticides that are approved for residential use."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer pest control for specific pests?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we specialize in pest control for common pests such as bed bugs, cockroaches, and termites in Dubai."
          }
        }
      ]
    },
    {
      "@type": "Service",
      "serviceType": "Pest Control Service",
      "provider": {
        "@type": "Organization",
        "name": "Akkad Pest Control",
        "url": "https://www.pestcontrol.ae",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61566371760848"
        ],
        "logo": "https://www.pestcontrol.ae/images/img/logo_small_kuskus.png",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+97150400134",
          "contactType": "Customer Service",
          "areaServed": "Dubai, UAE",
          "availableLanguage": ["English", "Arabic"]
        }
      },
      "areaServed": {
        "@type": "Place",
        "name": "Dubai, UAE"
      },
      "description": "Professional pest control services for residential and commercial properties in Dubai, UAE, specializing in cockroach control, bed bug treatment, and termite extermination."
    },
    {
      "@type": "LocalBusiness",
      "name": "Akkad Pest Control",
      "image": "https://www.pestcontrol.ae/favicon.ico",
      "@id": "https://www.pestcontrol.ae",
      "url": "https://www.pestcontrol.ae",
      "telephone": "+97150400134",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dubai",
        "addressLocality": "Dubai",
        "addressCountry": "UAE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.276987",
        "longitude": "55.296249"
      },
      "sameAs": [
        "https://www.facebook.com/profile.php?id=61566371760848"
      ],
      "openingHours": "Mo-Su 08:00-20:00",
      "priceRange": "$$"
    },
   
  ]
};

const PestControlInAlNahdaSharjah = () => {
  return (
    <>
     <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      <section className="dip_control py-5 map_article_section img-fluid">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-7 mb-25">
              <div className="mb-5">
                <h1 className="fw-700 main_heading">
                 Anto termite in Palm jabel Ali
                </h1>
                <p />
                <p>
                Approved anti-termite services in Palm Jebel Ali, delivering high-quality treatments with full compliance certifications. We offer competitive pricing and a 20-year warranty, ensuring peace of mind. Trusted by numerous contractors in Jebel Ali for reliable and effective anti-termite solutions.
                </p>
                <p>
                At Akkad pest control  , we specialize in providing top-tier anti-termite treatments tailored to protect your property from the destructive effects of termites. With our expertise, advanced techniques, and high-quality products, we ensure long-lasting protection and peace of mind.
                </p>
                <p>
                Our anti-termite treatments are fully compliant with local regulations and approved by relevant authorities, including Dubai Municipality.
                  <Link href="/"> professional pest control company </Link> to
                  ensure a safe living environment.
                </p>
               
                <p>
                  <img
                    src="/images/jebel_ali_palm.jpg"
                    style={{ maxWidth: "740px", width: "100%" }}
                  />
                </p>
                <h2 className="fw-600 mt-4 text-center">Book a Anti termite services  </h2>
                <p className="text-center">For booking urgent services near your and scheduling an appintment  today  </p>
<div className="text-center mt-3">
<a
  href="https://www.pestcontrol.ae/my-warranty"
  className="btn btn-success px-4 py-2 mt-n2 mb-3"
>
  Book Now
</a>
</div>



                <h3 className="fw-700 mb-3 ">Also available in:</h3>
                <ul className="location_list">
                  {LOCATION.map((item, index,) => {
                    <li key={index}>
                      <Link href={item.url}> {item.text} </Link>
                    </li>;
                  })}
                </ul>
                <div className="row">
                  <div className="col-sm">
                    <h3>We have technicians near you jebel ali palm</h3>
                    <p>
                      <strong>Address:</strong>
                    </p>
                    <p>
                      Akkad Pest Control, Al Tawin Street, Behind Adnoc Pertol
                      Station,
                      <br />
                      Bin Yas tower, Office 1104,
                      <br />
                      Sharjah. P.O Box:47558
                    </p>
                  </div>
                  <div className="col-sm">
                    <h3>Contact Akkad Pest Control</h3>
                    <p>&nbsp;</p>
                    <div
                      className="contact-button-city"
                      style={{ margin: "4px" }}
                    >
                      <a href="tel:+97143966211">+971 4396 6211</a>
                    </div>
                    <div
                      className="contact-button-city"
                      style={{ margin: "4px" }}
                    >
                      <a href="https://wa.me/+97143966211">WhatsApp</a>
                    </div>
                    <div
                      className="contact-button-city"
                      style={{ margin: "4px" }}
                    >
                      <a href="https://www.pestcontrol.ae/my-warranty#/login">Book Now</a>
                    </div>
                    <div className="contact-info-2">
                      <p>
                        <strong>Phone:</strong> 050 400 1344
                        <br />
                        <strong>Email:</strong> info@pestcontrol.ae
                        <br />
                        <strong>Website:</strong> www.pestcontrol.ae
                      </p>
                    </div>
                  </div>
                </div>
                <p />
                
              </div>
            </div>
            
            <div className="col-md-5">
              <div className="map_iframe mb-3">
                <p>
                  <iframe
                    style={{ border: 0 }}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28926.734677889457!2d54.97107246761564!3d25.005489824590274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f10f22909222f%3A0xeee8c736a7748d68!2sPalm%20Jebel%20Ali!5e0!3m2!1sen!2sae!4v1733839024935!5m2!1sen!2sae"
                    width="100%"
                    height={250}
                    allowFullScreen="allowfullscreen"
                  />
                  
                </p>
              </div>
              
              <div>
                <h2 className="akkad_heading_one fw-700 black text-center">
                  We Are Here To Help You
                </h2>
                <nav className="text-center" aria-label="breadcrumb">
                  <Link href="/"> Home </Link> &gt;
                  <Link href="/anti_termite_jabel_ali_palm/"> Jebel Ali  </Link> &gt;
                  <Link href="/anti_termite_jabel_ali_palm"> Anti termite in palm Jebel |ALi 
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      <div className="container">
        <div className="row mx-auto mt-5 hide-on-mobile">
          <div className="col-md-6 pb-3">
          <h2 className="dark-black fw-600 mb-2">Why Choose Our Anti-Termite Services?</h2>
<p className="mb-0">
Approved and Certified Solutions:

Our anti-termite treatments are fully compliant with local regulations and approved by relevant authorities, including Dubai Municipality.
</p>
<p className="mb-0">
We use state-of-the-art equipment and premium chemicals like Prothor SC 200, ensuring effective termite control for both pre-construction and post-construction projects.
</p>
<p className="mb-0">
Our skilled professionals have extensive experience working with residential, commercial, and industrial projects across Palm Jebel Ali.
</p>
<p>
    <strong>chemical Approved </strong></p>

<p>
  kontra sc 200 - anti termite treament used for pre construction </p>
<p>
  <strong>Sprays</strong>
</p>
<p>
  Insecticidal sprays are used to treat visible cockroaches and their nesting areas. These sprays provide
  immediate results while disrupting the lifecycle of the pests.
</p>
<p>
  <strong>Warranty</strong>
</p>
<p>
Our services come with a robust 20-year warranty, offering long-term protection and confidence in our solutions.
</p>

          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images/termite-1.fw_.webp"
              alt="image showing cockroaches "
              style={{ maxWidth: "630px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-5 hide-on-mobile">
          <div className="col-md-6 pb-3">
          <h2 className="dark-black fw-600 mb-2">Pre-Construction Anti-Termite Treatment:</h2>
<p className="mb-0">
Ensures termite prevention before the foundation of your property is laid, creating a protective barrier that lasts for decades.
</p>
<p className="mb-0">
  Bed bugs spread quickly through luggage, clothing, and second-hand furniture, making early detection crucial
  to prevent widespread infestations.
</p>
<p className="mb-0">
Targets existing termite infestations with effective treatments that eliminate termites and prevent further damage.
</p>
<p>
  <strong>Post-Treatment:

</strong>
</p>
<p>
Sealing all drilled areas and providing detailed instructions for maintenance and monitoring.
</p>


          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images//termite-2.fw_.webp"
              alt="image man spraying anti termite"
              style={{ maxWidth: "630px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-5 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">Rat Control </h2>
            <p className="mb-0">
              Due to improper waste management from kitchens and untended
              garbage bins from restaurants rat infestation can be seen in
              several areas.
            </p>
            <p className="mb-0">
              Rats and mice usually feed on leftover foods found on streets and
              outdoors. They enters homes and apartments through open doors,
              walls and wire cables and chose dark spots to build their nest.
            </p>
            <p className="mb-0">
              We first identify the rat infested area after a thorough
              inspection of the property before deciding on the treatment plan.
            </p>
            <p>
              <strong>Rodenticides</strong>
            </p>
            <p>
              These are types of chemical baits intended to attract and kill
              rats. Rodenticides are typically stored in bait containers to
              limit access by pets, kids, and non-target animals.
            </p>
            <p>
              <strong>Traps</strong>
            </p>
            <p>
              Rats can be captured and eliminated using various traps, including
              snap and glue traps. Snap traps are intended to kill rats
              immediately, whereas glue traps ensnare them until they can be
              disposed of.
            </p>
          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images/termite-3.fw_.webp"
              alt="image showing termite treatment "
              style={{ maxWidth: "630px", width: "100%" }}
            />
          </div>
        </div>
      </div>

      <section className="pest_control_in_dp py-5">
        <div className="col-md-12">
          <h2 className="fw-700 text-center">
            Pest control steps 
          </h2>
        </div>

        <Stepper>
          <Step title="Pest Inspection">
            <div className="col-md-6 step_container_text">
              <div>
                <h4>Inspection</h4>
                <ul>
                  <li>
                    Upon initial assessment, the technician identifies the type
                    of infestation and the severity.
                  </li>
                  <li>
                    Thorough inspections of both interior and exterior areas are
                    conducted to locate hiding spots and signs of pest presence.
                  </li>
                  <li>
                    Findings are documented, noting areas of concern that
                    requires treatment.
                  </li>
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
                <h4>Pest control treatment</h4>
                <ul>
                  <li>
                    In selecting the treatment method, technicians consider the
                    pest type and the extent of the infestation
                  </li>
                  <li>
                    Technicians will then decide on the most suitable treatment
                    such pesticide or insecticide sprays, baits, powder, traps
                    or gels as necessary.
                  </li>
                  <li>
                    Before treatment, the area is prepared by removing clutter,
                    covering food, and ensuring the safety of pets and people.
                  </li>
                  <li>
                    Finally, technicians apply the chosen treatment to
                    effectively target pests and their harborage areas.
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
                <h4>Monitoring and Follow ups</h4>
                <ul>
                  <li>
                    After the treatment process, an evaluation is performed to
                    measure the effectiveness.
                  </li>
                  <li>
                    Technicians monitor the results and conduct follow up
                    inspections to ensure complete eradication.
                  </li>
                  <li>
                    Lastly, recommendations for prevention are provided, such as
                    sealing entry points, maintaining cleanliness, and
                    scheduling regular pest control maintenance.
                  </li>
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
      <Services
        title="Select your  Services "
        description="Common pest infestation is prevalent in various locations in Sharjah. These pests are found in every home, and areas requiring pest control expertise include apartments, villas, industrial areas, and business premises."
      />
      <ReviewsSchema />
      <ThreeKindsContracts title="Al Nahda Sharjah" price="110 AED" warranty="6 months"
      />
      <WhyAkkad />
      <FAQs
        faqs="Anti-Termite-Treatment"
        title="FAQ's on Anti termite in Palm jebel Ali"

      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Products - Anti Termite ",
      "image": "https://pestcontrol.ae/images/jebel_ali_palm.jpg",
      "description": "Top-quality pest control products available in Sharjah Al Nahda for effective pest management.",
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
          "streetAddress": "Office 456, jebel ali",
          "addressLocality": "jebel Ali",
          "addressRegion": "Jebel Ali",
          "postalCode": "00000",
          "addressCountry": "UAE"
        }
      },
      "sku": "AKKAD-PROD-002",
      "offers": {
        "@type": "Offer",
        "price": "110",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "url": "https://pestcontrol.ae/anti_termite_jabel_ali_palm",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "83410"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Omar Hassan",
          "datePublished": "2024-10-22",
          "reviewBody": "These products worked perfectly! Akkad Pest Control products in Sharjah Al Nahda are highly effective and easy to use.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Laila Khan",
          "datePublished": "2024-10-18",
          "reviewBody": "Amazing quality and very effective against pests. Highly recommended for pest control needs!",
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

    </>
  );
};

export default PestControlInAlNahdaSharjah;
export const metadata = {
  title: "Approved Ant Termite _jebel Ali Palm _ fond A, B, C, D , K ",
  description:
    "Searching for reliable Anti termite in jebel Ali ,  Our expert team offers safe and efficient pest management solutions tailored to protect your home and business. Ensure a pest-free environment with our trusted services. Contact us today for a consultation!",
};