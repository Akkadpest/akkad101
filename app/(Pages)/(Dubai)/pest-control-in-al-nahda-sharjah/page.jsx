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
  "name": "Pest Control Dubai | Expert Pest Services And Solutions In Dubai",
  "description": "We provide professional pest control services for your home and business in Dubai, specializing in safe and effective solutions for common pests such as bed bugs, cockroaches, and termites.",
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
                  Pest Control Al Nahda Sharjah
                </h1>
                <p />
                <p>
                  Al Nahda Sharjah is a favored residential destination. The
                  city provides affordable living options, convenient proximity
                  suburbs in Sharjah. It also has many amenities such the Al
                  Nahda Pond Park, Schools, as well as its many restaurants and
                  shopping malls
                </p>
                <p>
                  The rising residential population has led to an increase in
                  pest infestations in homes, apartments and villas. The area is
                  experiencing an increase in bed bug bugs, cockroaches, and
                  rodents like rats and mice
                </p>
                <p>
                  Effective waste management practices, maintaining hygiene and
                  sanitation are necessary to control the situation. Availing
                  regular pest control services from a
                  <Link href="/"> professional pest control company </Link> to
                  ensure a safe living environment.
                </p>
               
                <p>
                  <img
                    src="/images/pest-control-al-nahda-sharjah.webp"
                    style={{ maxWidth: "740px", width: "100%" }}
                  />
                </p>
                <h2 className="fw-600 mt-4 text-center">Book a Pest Services </h2>
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
                    <h3>We have technicians near you in Al Nahda Sharjah</h3>
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
                      <a href="https://wa.me/97143966211">WhatsApp</a>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28856.090398448752!2d55.35381363111851!3d25.303824419087224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c769ceaebc5%3A0x87ef0a2e9e93dfdc!2sAl%20Nahda%20-%20Sharjah!5e0!3m2!1sen!2sae!4v1731495937780!5m2!1sen!2sae"
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
                  <Link href="/pest-control-sharjah/"> Sharjah </Link> &gt;
                  <Link href="/pest-control-sharjah"> Pest Control in Al Nahda Sharjah
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
          <h2 className="dark-black fw-600 mb-2">Cockroach Control Service in Sharjah</h2>
<p className="mb-0">
  Due to improper waste management and untended garbage bins in residential and commercial areas,
  cockroach infestations are a common issue in Al Nahda, Sharjah.
</p>
<p className="mb-0">
  Cockroaches thrive in warm, moist environments and are often found in kitchens, bathrooms, and basements.
  They enter homes and buildings through small cracks, drains, and openings, posing significant health risks.
</p>
<p className="mb-0">
  Our team conducts a thorough inspection to locate cockroach nests and identify infestation severity before
  determining the most effective treatment plan.
</p>
<p>
  
  <strong>Gel Baits</strong>
</p><p>
  Gel baits are used to attract and poison cockroaches. These are applied in cracks and crevices where
  cockroaches are likely to hide, ensuring targeted treatment.
</p>
<p>
  <strong>Sprays</strong>
</p>
<p>
  Insecticidal sprays are used to treat visible cockroaches and their nesting areas. These sprays provide
  immediate results while disrupting the lifecycle of the pests.
</p>
<p>
  <strong>Traps</strong>
</p>
<p>
  Sticky traps are employed to monitor and reduce cockroach populations effectively, especially in heavily
  infested areas.
</p>

          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images/cok1.fw_.webp"
              alt="image showing cockroaches "
              style={{ maxWidth: "630px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-5 hide-on-mobile">
          <div className="col-md-6 pb-3">
          <h2 className="dark-black fw-600 mb-2">Bed Bugs Control In Sharjah</h2>
<p className="mb-0">
  Bed bugs are a growing concern in Al Nahda, Sharjah, due to the increased movement of people and goods.
  These pests are commonly found in beds, furniture, and upholstery, where they feed on human blood, causing
  itchy bites and discomfort.
</p>
<p className="mb-0">
  Bed bugs spread quickly through luggage, clothing, and second-hand furniture, making early detection crucial
  to prevent widespread infestations.
</p>
<p className="mb-0">
  Our team performs a detailed inspection of your property to locate bed bug hiding spots and determine
  the severity of the infestation before implementing an effective treatment plan.
</p>
<p>
  <strong>Heat Treatment</strong>
</p>
<p>
  Heat treatment is a chemical-free method that raises the temperature of affected areas to eliminate
  bed bugs and their eggs. This method is highly effective and eco-friendly.
</p>
<p>
  <strong>Insecticides</strong>
</p>
<p>
  Safe and approved insecticides are used to treat bed bug-infested areas, targeting cracks, crevices,
  and furniture to ensure complete eradication.
</p>
<p>
  <strong>Monitoring Devices</strong>
</p>
<p>
  Bed bug traps and monitors are installed to detect any remaining pests and prevent re-infestation,
  ensuring long-term protection.
</p>

          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images/bb4.fw_.webp"
              alt="image shows bed bug infested below mattress"
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
              src="/images/rat-new.fw_.webp"
              alt="image showing rat"
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
        faqs="AlNahdaSharjah"
        title="FAQ's on Pest Control in Al Nahda Sharjah"

      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Products - Sharjah Al Nahda",
      "image": "https://pestcontrol.ae/images/pest-control-al-nahda-sharjah.webp",
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
          "streetAddress": "Office 456, Al Nahda",
          "addressLocality": "Sharjah",
          "addressRegion": "Sharjah",
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
        "url": "https://pestcontrol.ae/pest-control-sharjah-al-nahda",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "5328"
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
  title: "Professional Pest Control Services in Al Nahda Sharjah | Fast & Effective",
  description:
    "Searching for reliable pest control in Al Nahda, Sharjah? Our expert team offers safe and efficient pest management solutions tailored to protect your home and business. Ensure a pest-free environment with our trusted services. Contact us today for a consultation!",
};