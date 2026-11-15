import React from "react";
import Link from "next/link";
import { Stepper, Step } from "@/Components/Sections/Stepper";
import WhyAkkad from "@/Components/Sections/WhyAkkad";
import FAQs from "@/Components/Sections/FAQs";
const LOCATION = [
  { text: "Dubai Marina", url: "/pest-control-dubai-marina" },
  { text: "Downtown Dubai", url: "/pest-control-dubai-marina" },
  { text: "Palm Jumeirah", url: "/pest-control-dubai-marina" },
  { text: "Jumeirah Beach Residence (JBR)", url: "/pest-control-dubai-marina" },
  { text: "Business Bay", url: "/pest-control-dubai-marina" },
  { text: "Media City", url: "/pest-control-media-city" },
  { text: "Internet City", url: "/pest-control-dubai-marina" },
  { text: "Jumeirah Lake Towers (JLT)", url: "/pest-control-jlt" },
];

const PestControlDubaiMarina = () => {
  return (
    <>
      <section className="dip_control py-5 map_article_section img-fluid">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-7 mb-25">
              <div className="mb-5">
                <h1 className="fw-700 main_heading">
                  Pest Control in Dubai Marina
                </h1>
                <p />
                <p>
                  Dubai Marina is known for its luxurious
                  <Link href="/"> JBR residences </Link> and attractive beaches.
                  The city is filled with international restaurants, sky
                  scrapers, entertainment hubs and various tourist attractions.
                </p>
                <p>
                  With the increasing population in Dubai Marina, prioritizing
                  pest control and management is important. Various pests
                  infestations that requires pest control are Bed bugs from
                  hotel apartments, Cockroaches living in kitchen and washrooms
                  as well as Rat infestation forming from sewages and restaurant
                  garbage bins.
                </p>
                <p>
                  To avoid such pest infestations and to ensure safety of your
                  residence, home apartment, villa or even your business
                  premises and office, it is important to consult a
                  <Link href="/"> professional pest control company in Dubai Marina
                  </Link>
                  .
                </p>
                <p>
                  <img
                    src="/images/dm.webp"
                    alt="Pest Control in Dubai Marina JBR"
                    style={{ maxWidth: "740px", width: "100%" }}
                  />
                </p>
                <h3 className="fw-700 mb-3 ">Also available in:</h3>
                <ul className="location_list">
                  {LOCATION.map((item, index) => (
                    <li key={index}>
                      <Link href={item.url}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="col-sm">
                    <h3>We have technicians near you in Dubai</h3>
                    <p>
                      <strong>Address:</strong>
                    </p>
                    <p>
                      Barsha Heights(Tecom),
                      <br />
                      Sheikha Noora Building,
                      <br />
                      Office 403, PO Box 234341
                      <br />
                      Dubai, UAE.
                    </p>
                  </div>
                  <div className="col-sm">
                    <h3>Contact Akkad Pest Control</h3>
                    <p>&nbsp;</p>
                    <div
                      className="contact-button-city"
                      style={{ margin: "4px" }}
                    >
                      <a href="tel:042521009">+971 4396 6211</a>
                    </div>
                    <div
                      className="contact-button-city"
                      style={{ margin: "4px" }}
                    >
                      <a href="https://wa.me/97143966211">WhatsApp</a>
                    </div>
                    <div className="contact-info-2">
                      <p>
                        <strong>Phone:</strong> 04 252 1009
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17189.763406628645!2d55.134153820662746!3d25.078066965015662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b5402c126e3%3A0xb9511e6655c46d7c!2sDubai%20Marina%20-%20Dubai!5e0!3m2!1sen!2sae!4v1707718095671!5m2!1sen!2sae"
                    width="100%"
                    height={250}
                    allowFullScreen="allowfullscreen"
                  />
                </p>
              </div>
              <div>
                <div className="class=">
                  <h2 className="akkad_heading_one fw-700 black text-center">
                    You are here
                  </h2>
                  <nav className="text-center" aria-label="breadcrumb">
                    <Link href="/"> Home </Link> &gt;
                    <Link href="/pest-control-dubai-marina">
                      Pest Control Dubai Marina
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row mx-auto mt-3 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="row mx-auto mt-3 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <img className="home-box-in-image" src="/images/bb2.fw_.webp" />
          </div>
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">
              Bed Bug Control for apartments
            </h2>
            <ol>
              <li>
                Apply a thorough spray to all mattresses, carpets, sofas, beds,
                couches, and other furniture where people typically sleep or
                spend prolonged periods, as these are common areas for bed bugs
                to reside.
              </li>
              <li>
                Remove any clothes and books that have been stored in cabinets
                for an extended period, as these can serve as potential hiding
                spots for bed bug nests.
              </li>
              <li>
                Wash all clothing suspected of harboring bed bugs to eliminate
                any potential infestations.
              </li>
              <li>
                If your attempts to treat bed bugs prove unsuccessful, seek
                assistance from a professional pest control company for proper
                treatment and eradication.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-5 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">Rat Control services</h2>
            <p className="mb-0">
              Another common infestation in populated areas in Dubai is the
              infestation of Rats. The primary cause of Rats and mice is
              improper waste management from kitchens and untended garbage bins
              from restaurants. Rats are attracted to left over foods in
              buildings, apartments&nbsp; and homes.
            </p>
            <p className="mb-0">
              To control rat infestations, we will first inspect the property.
              After the inspection is completed, our technicians decide on the
              most appropriate treatment method to eradicate rats. The treatment
              methods may include bait stations, rodenticides and glue traps.
            </p>
            <p>
              <strong>Rodenticides</strong>
            </p>
            <p>
              These are poisonous feeders made to attract and eliminate rats.
              Rodenticides are typically stored in bait stations to limit access
              by children, pets, and harmless animals.
            </p>
            <p>
              <strong>Traps</strong>
            </p>
            <p>
              Rats can be trapped and killed using various devices, including
              snap and glue traps. Snap traps are designed to eliminate rats
              instantly, whereas glue traps ensnare them until they can be
              disposed of.
            </p>
          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images/rat-new.fw_.webp"
              alt="Pest Control Dubai Marina"
              style={{ maxWidth: "630px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-3 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <img
              className="home-box-in-image"
              src="/images/cockroach-new.fw_.webp"
            />
          </div>
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">
              Cockroach Control in Dubai Marina
            </h2>
            <p className="mb-0">
              Cockroach infestation in Dubai Marina is mostly seen in
              accommodations and residences. Commonly in kitchen and washrooms
              cockroaches can be noticed due to the warm and moist conditions.
            </p>
            <p className="mb-0">
              Leftover food containers from kitchen, garbage bins and food
              particles provide an excellent source of food supply for
              cockroaches and ants. At Akkad, we use various strategies to stop
              and prevent Cockroach infestations in your residence, workplace,
              home, apartment and villa.
            </p>
            <p>
              <strong>Inspection:</strong> We inspect the property to locate the
              areas where cockroaches are forming, laying eggs and the entry
              points
            </p>
            <p>
              <strong>Treatment:</strong> Chemical treatments include baits,
              powder, gel and spray depending on the severity of the infestation
              and the location of the property
            </p>
            <p>
              <strong>Prevention:&nbsp;</strong>Sealing entry points, gaps in
              windows, pipes and cracks in walls were cockroaches can enter
            </p>
            <p>
              <strong>Monitoring &amp; Follow-ups:</strong> Regular follow-ups
              would be free during the warranty period to make sure the
              treatment has been completed successfully
            </p>
          </div>
        </div>
      </div>

      <section className="pest_control_in_dp py-5">
        <div className="col-md-12">
          <h2 className="fw-700 text-center">
            Pest Control Steps in Dubai Marina
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
                    inspections to ensure complete eradication
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
      <WhyAkkad />
      <FAQs
        faqs="DubaiMarina"
        title="FAQ's on Pest Control Dubai Marina        "
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Services - Dubai Marina",
      "image": "https:/pestcontrol.ae//images/bb2.fw_.webp",
      "description": "Professional pest control services in Dubai Marina for residential and commercial properties.",
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
          "streetAddress": "Office 134, Dubai Marina",
          "addressLocality": "Dubai Marina",
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
        "url": "https://pestcontrol.ae/pest-control-dubai-marina",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5698"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Mohammed Ali",
          "datePublished": "2024-11-10",
          "reviewBody": "The pest control service in Dubai Marina was excellent. Great results!",
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

    </>
  );
};

export default PestControlDubaiMarina;
export const metadata = {
  title: "Reliable Pest Control Services in Dubai Marina | Safe & Effective Solutions",
  description:
    "Searching for pest control in Dubai Marina? Our professional team offers safe and efficient pest management solutions tailored to protect your home and business. Enjoy a pest-free environment with our expert services. Contact us today for a consultation!",
};