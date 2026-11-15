import React from "react";
import Link from "next/link";
import { Stepper, Step } from "@/Components/Sections/Stepper";
import WhyAkkad from "@/Components/Sections/WhyAkkad";
import FAQs from "@/Components/Sections/FAQs";
const LOCATION = [
  { text: "Sharqan", url: "/pest-control-sharjah/" },
  { text: "Al Azra", url: "/pest-control-sharjah/" },
  { text: "Al Suyoh", url: "/pest-control-sharjah/" },
  { text: "Al Sabkha", url: "/pest-control-sharjah/" },
  { text: "Al Nahda", url: "/pest-control-al-nahda-sharjah" },
  { text: "Hoshi", url: "/pest-control-sharjah/" },
  { text: "Al Rahmaniya", url: "/pest-control-sharjah/" },
  { text: "Al Tai", url: "/pest-control-sharjah/" },
  { text: "Barashi", url: "/pest-control-sharjah/" },
  { text: "Al Ghafia", url: "/pest-control-sharjah/" },
  { text: "Al Jazzat", url: "/pest-control-sharjah/" },
];
const PestControlSharjah = () => {
  return (
    <>
      <section className="dip_control py-5 map_article_section img-fluid">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-7 mb-25">
              <div className="mb-5">
                <h1 className="fw-700 main_heading">
                  Pest Control in Sharjah
                </h1>
                <p />
                <p>
                  Sharjah is a preferred location for many communities due its
                  close proximity to other surrounding locations. Sharjah
                  provides affordable accommodations such as partitions,
                  apartments and villas as well as access to other amenities
                  including schools, shopping malls and&nbsp; restaurants.
                  Sharjah Free Zone is another favoured place for businesses and
                  industries.
                </p>
                <p>
                  With the growing population in both domestic and commercial
                  entities, the city faces regular pest infestations, especially
                  from rodents such as rats and mice, cockroaches, flies and bed
                  bugs due to shared accommodations. Termite infestation is also
                  another matter of concern.
                </p>
                <p>
                  With this concern, the need for hiring a
                  <Link href="/"> pest control specialist </Link> certified from
                  the Sharjah City Municipality is important.
                </p>
                <p>
                  <img
                    className="img-fluid"
                    title="pest control services in Sharjah"
                    src="/images/pest-control-sharjah.webp"
                  />
                </p>
                <h3 className="fw-700 mb-3 ">Also available in:</h3>
                <ul
                  className="location_list"
                  title="Akkad pest control services in Sharjah"
                >
                  {LOCATION.map((item, index) => (
                    <li title="pest control" key={index}>
                      <Link href={item.url}>{item.text}</Link>
                    </li>
                  ))}
                </ul>
                <div className="row">
                  <div className="col-sm">
                    <h3>We have technicians near you in Sharjah</h3>
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
                    <div className="contact-button-city">
                      <a href="tel:+97143966211">+971 4396 6211</a>
                    </div>
                    <div className="contact-button-city">
                      <a href="https://wa.me/+971504001344">WhatsApp</a>
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
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d40792.168258212056!2d55.44315797726907!3d25.352798318202023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sae!4v1706594442475!5m2!1sen!2sae"
                    width="100%"
                    height={250}
                    allowFullScreen="allowfullscreen"
                  />
                </p>
              </div>
              <div>
                <h2 className="akkad_heading_one fw-700 black text-center">
                  You are here
                </h2>
                <nav className="text-center" aria-label="breadcrumb">
                  <Link href="/"> Home </Link> &gt;
                  <Link href="/location/pest-control-dubai/contact-us"> Sharjah </Link> &gt;
                  <Link href="/pest-control-sharjah">  Pest Control in Sharjah
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row mx-auto mt-3 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <img className="home-box-in-image" src="/images/cok1.fw_.webp" />
          </div>
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">Cockroach Control</h2>
            <p className="mb-0">
              Cockroaches mostly infest accommodations and residences in
              Sharjah, particularly in kitchens and washrooms, where warm and
              moist conditions prevail.
            </p>
            <p className="mb-0">
              Leftover food containers, garbage bins, and food particles serve
              as excellent food sources for all types of cockroaches.
            </p>
            <p className="mb-0">
              We use various strategies to stop and prevent cockroach
              infestations in residences, workplaces, homes, apartments, and
              villas eradicating pest infestations for long term relief.
            </p>
            <p>
              <strong>Inspecting the Property:</strong>
            </p>
            <p>
              We conduct a property inspection to identify areas where
              cockroaches are nesting, laying eggs, and finding entry points.
            </p>
            <p>
              <b>Treatment for the infestation:</b>
            </p>
            <p>
              Depending on the severity of the infestation and the property’s
              location, chemical treatments may involve baits, powder, gel, or
              spray.
            </p>
            <p>
              <strong>Prevention for the future:&nbsp;</strong>
            </p>
            <p>
              Cockroaches can enter through entry sites such as holes in
              windows, pipes, and fractures in walls, therefore prevention
              involves sealing these.
            </p>
            <p>
              <strong>Monitoring &amp; Follow-ups:</strong> Throughout the
              warranty period, routine follow-ups to ensure the treatment has
              been effectively finished will be free of charge.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-5 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">Rat Control services</h2>
            <p>
              Rat infestation is another common problem in Sharjah’s highly
              populated areas. Rat and mouse infestations are primarily caused
              by improper waste management in kitchens and neglected trash cans
              outside of eateries. Food scraps left over from homes, flats, and
              buildings attract rats. Our first course of action when dealing
              with rat infestations is a careful inspection of the premises.
            </p>
            <p>
              After the inspection, our professionals choose the best course of
              action for getting rid of rats. The use of glue traps,
              rodenticides, and bait stations are examples of treatment
              techniques.
            </p>
            <p>
              <strong>Rodenticides</strong>
            </p>
            <p>
              These poisonous baits are made especially to draw in and eliminate
              rats. Typically, rodenticides are positioned in bait stations to
              keep kids, pets, and non-target animals away.
            </p>
            <p>
              <strong>Traps</strong>
            </p>
            <p>
              Various kinds of traps, like glue and snap traps, are used to
              catch and get rid of rats. Rats are trapped in glue traps until
              they can be removed, whereas snap traps are meant to kill them
              instantaneously.
            </p>
          </div>
          <div className="col-md-6 pb-3">
            <img
              src="/images/rat2.fw_.webp"
              alt="Pest Control in Sharjah"
              style={{ maxWidth: "630px", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mx-auto mt-3 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <p>&nbsp;</p>
          </div>
        </div>
        <div className="row mx-auto mt-3 hide-on-mobile">
          <div className="col-md-6 pb-3">
            <img className="home-box-in-image" src="/images/bb2.fw-1.webp" />
          </div>
          <div className="col-md-6 pb-3">
            <h2 className="dark-black fw-600 mb-2">
              Bed Bug Control for apartments
            </h2>
            <ol>
              <li>
                All mattresses, rugs, couches, beds, and other furniture where
                people usually sleep or spend a lot of time should be thoroughly
                sprayed because these are common places for bed bugs to hide.
              </li>
              <li>
                Take out any books and clothing that have been kept in cabinets
                for a long time because they could be bed insect nesting sites.
                <br />
                To get rid of any possible infestations, wash any article of
                clothing you might think could be home to bed bugs.
              </li>
              <li>
                Should your attempts at treating bed bugs prove ineffective, get
                help from a reliable pest control company to ensure that the
                bugs are properly treated and eradicated.
              </li>
            </ol>
          </div>
        </div>
      </div>
      <section className="pest_control_in_dp py-5">
        <div className="col-md-12">
          <h2 className="fw-700 text-center">Pest control steps in Sharjah</h2>
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
                  the the type of pest infestation.
                </p>
                <ul>
                  <li>
                    The treatment will be conducted by Certified pest control
                    professionals
                  </li>
                  <li>
                    Technicians will determine the type of treatment required
                  </li>
                  <li>Safety instructions will be provided</li>
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
                  monitor the infestation on a regular basis
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
      <WhyAkkad />
      <FAQs
        faqs="Sharjah"
        title="FAQ's on Pest control in Sharjah        "
      />
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Services - Sharjah ",
      "image": "https://pestcontrol.ae/images/pest-control-sharjah.webp",
      "description": "Professional pest control services in Sharjah for residential and commercial properties.",
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
          "streetAddress": "Office 123, Sharjah Al Qusais",
          "addressLocality": "Sharjah Al Qusais",
          "addressRegion": "Sharjah",
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
        "url": "https://pestcontrol.ae/pest-control-jlt",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "5438"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Mohammed Ali",
          "datePublished": "2024-11-10",
          "reviewBody": "The pest control service in Sharjah. Great results!",
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

export default PestControlSharjah;
export const metadata = {
  title: "Reliable Pest Control Services in Sharjah | Safe & Effective Solutions",
  description:
    "Looking for expert pest control in Sharjah? Our professional team provides safe and efficient pest management solutions tailored to protect your home and business. Ensure a pest-free environment with our trusted services. Contact us today for a consultation!",
};