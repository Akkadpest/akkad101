import ContactForm from "@/Components/Sections/ContactForm";
import FAQs from "@/Components/Sections/FAQs";
import Link from "next/link";
import React from "react";
const termites_solution = [
  {
    img: "images/wings.jpg",
    heading: "Wings and Dead Ants",
    desc: "The shed wings id swarmer indicate termites have entered their next phase of development. Live termites: Reproductive kings and queens are 1/2″ long, winged and black or brown in color",
  },
  {
    img: "/images/tunnel_mud.jpg",
    heading: "Doors , Walls damage",
    desc: "Cracked or distorted paint on wood surfaces: Swarming dry wood termites can  enter through openings smaller than the edge of a dime, so monitor and seal any cracks in the home’s foundation and near roof siding, vents and windows",
  },
  {
    img: "/images/structural_termite_damage.jpg",
    heading: "Tunnel & Mud Leads",
    desc: "Tunnels made of mud positioned on the outside of house structures (brickwork, walls, concrete posts, concrete slabs and other dense structure materials) are a strong sign of your building being at risk of termite infestation.",
  },
  {
    img: "/images/wood_termite.jpg",
    heading: "Wings and Dead Ants",
    desc: "The shed wings of swarmer indicate termites have entered their next phase of development. Live termites: Reproductive kings and queens are 1/2″ long, winged and black or brown in color",
  },
];

const chemical_products = [
  {
    img: "/images/pro3.jpg",
    sc: "Premise Sc 200",
    feat1: "made in",
    feart2: "active",
    feart3: "certified",
    feart4: "in house",
  },
  {
    img: "/images/pro2.jpg",
    sc: "Premise Sc 200",
    feat1: "made in",
    feart2: "active",
    feart3: "certified",
    feart4: "in house",
  },
  {
    img: "/images/pr4.jpg",
    sc: "Premise Sc 200",
    feat1: "made in",
    feart2: "active",
    feart3: "certified",
    feart4: "in house",
  },
  {
    img: "/images/pro5.jpg",
    sc: "Premise Sc 200",
    feat1: "made in",
    feart2: "active",
    feart3: "certified",
    feart4: "in house",
  },
];
const TermiteControlCost = () => {
  return (
    <div>
      <h1 className="container my-4 mini_banner_title">Termite Control Cost</h1>
      <section className="py-5 light_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className=" pb-3 ">
                <div className="pb-3">
                                    <div className="row justify-content-center">
    <div className="col-12 col-md-6 d-flex justify-content-center">
      <video
        src="/videos/termite_video_low.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="w-100"
        style={{ borderRadius: "0px" }}
      >
       
        Your browser does not support the video tag.
      </video>
      
    
                  <h2 className="akkad_heading_one fw-700 black"> </h2>
                 
   
  </div>
                    <h2 className="text-center fw-bolder fs-2">
                      Termites solution control
                    </h2>
                    <p className="text-center">
                      sign and solution for termite infestation in villa
                    </p>
                    <div className="container">
 
</div>
                    <div className="row">
                      {termites_solution.map((item, index) => (
                        <div className="col-md-3 border border-secondary-subtle pt-2">
                          <img
                            fetchpriority="high"
                            decoding="async"
                            className="rounded img-fluid d-block m-auto"
                            src={item.img}
                          />

                          <h4 className="text-center mt-5">{item.heading}</h4>
                          <p className="text-start mt-4">
                            <span style={{ color: "#000000" }}>
                              {item.desc}
                            </span>
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-center mt-5 text-capitalize fw-bolder">
                    termite firewall anti termite treatment system
                  </h2>
                  <p className="text-center">
                    professional treatment life time warranty termite not return
                  </p>
                  <div className="container mt-5 borderborder-secondary-subtle">
                    <div className="row">
                      <div className="col-md-8 p-5">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Firewall system consider Latest Solution For Termite
                            Treatment in recent Time
                          </li>
                          <li className="list-group-item">
                            Fire wall is a new method will protect any premises
                            which is effected by termite infestation
                          </li>
                          <li className="list-group-item">
                            As we know termite are living in colony underground
                            creating big colony connecting by tunnels;,, to
                            control any premises ( villa , high building etc.. )
                            will be 100% efficient by this system
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <img
                          decoding="async"
                          src="/images/villa_termite_plan.jpg"
                          className="border rounded img-fluid entered lazyloaded"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 id="title_how" className="text-center text-capitalize">
                    how its work
                  </h3>
                  <div id="how-its-work-list" className="row">
                    <div className="col">
                      <ul className="list-group">
                        <li className="list-group-item">
                          List GTo achieve best solution for firewall
                          system&nbsp;, starting from holes deep in ground
                          between 150 cm – 200 cm , these holes will be assigned
                          by engineer&nbsp;around villa , between each hole to
                          other 90 cm – 120 cm roup Item 1
                        </li>
                        <li className="list-group-item">
                          After making these holes we start to inject these
                          holes with anti-termite pesticide by special termite
                          injection machine which press 60 Bar pressure flowing
                          all pesticide into termite colony
                        </li>
                        <li className="list-group-item">
                          Benefit from this firewall will product all premises
                          from coming termite infestation and block any other
                          insect either, firewall will last up 20 years
                          protection system
                        </li>
                      </ul>
                    </div>
                  </div>
                  <h2 className="text-center mt-5 text-capitalize fs-1 fw-bold">
                    Book here termite services
                  </h2>
                  <p className="text-center">
                    here you can reash us to book and services&nbsp; of termite
                    control . just reach us on these contact below and we will
                    response to you immediately
                  </p>
                  <div className="container">
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <span className="text-uppercase fw-bold">
                              phone number
                            </span>
                            Dubai +971 4 3966211
                          </li>
                          <li className="list-group-item">
                            <span className="text-uppercase fw-bolder">
                              whatsapp
                            </span>
                            0504001344
                          </li>
                          <li className="list-group-item">
                            <span className="text-uppercase fw-bolder">
                              online booking
                            </span>
                            <Link href="/location/pest-control-dubai/contact-us/">Link</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <img
                          className="img-fluid mt-2  entered lazyloaded"
                          src="/images/impelment_termite.jpg"
                        />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-center mt-5 fs-2 fw-bolder">
                    Termite chemical products
                  </h3>
                  <p className="text-center text-capitalize">
                    best Chemical common used in Dubai For termites Treatment
                  </p>
                  <div className="container mt-5">
                    <div className="row">
                      {chemical_products.map((item, index) => (
                        <div className="col-md-3 borderborder-secondary-subtle">
                          <p>
                            <img
                              id="image-products-1"
                              className="mx-auto d-block image-products entered lazyloaded"
                              src={item.img}
                            />
                          </p>
                          <p className="text-center fs-3 fw-bold">{item.sc}</p>
                          <ul className="ms-5">
                            <li className="decimal-list">{item.feat1}</li>
                            <li className="decimal-list">{item.feart2}</li>
                            <li className="decimal-list">{item.feart3}</li>
                            <li className="decimal-list">{item.feart4}</li>
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  <section className="position-relative py-4 py-xl-5">
                    <div className="container position-relative">
                      <div className="row">
                        <div className="col-xl-4">
                          <ContactForm/>
                        </div>
                        <div className="col-lg-8">
                          <FAQs
                            imageToShow={false}
                            title="FAQ’s for Termite Control in Dubai
"
                            faqs="TermiteControlDubai"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <FAQs imageToShow={false} faqs="TermiteControlDubai2" />
                      </div>
                    </div>
                  </div>
                  <p>&nbsp;</p>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-6">
                        <h3>You are here</h3>
                        <p>Akkad Pest Control</p>
                        <p>
                          Barsha Heights(Tecom) Dubai,
                          <br />
                          Sheikha Noora Building
                          <br />
                          Office 403
                          <br />
                          PO Box 234341
                        </p>
                      </div>
                      <div className="col-md-6">
                        <iframe
                          style={{ border: 0 }}
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.1034029536295!2d55.17300437595769!3d25.09836083569588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69bd2306845f%3A0x3aabf7fb0ac5932d!2sAkkad%20Pest%20Control%20Services!5e0!3m2!1sen!2sae!4v1707475562690!5m2!1sen!2sae"
                          width="100%"
                          height={250}
                          allowFullScreen="allowfullscreen"
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    Termites are insects that feed on wood and make their nests
                    inside concrete walls, footing, window frames and door
                    frames. They live in many premises, burrowing through wooden
                    walls, floors and beams. Their activity weakens your home
                    and leaves it susceptible to damage and destruction. It is
                    amazing how much damage can be done by such small creatures.
                    That’s why it is important to hire a pest control services
                    company that specializes in eradicating termites.
                  </p>
                  <p>
                    If you have a termite infestation, you are probably
                    wondering how much termite control costs. It is far more
                    affordable than the irreversible damage your house or
                    apartment will incur if you do not have your termite problem
                    solved as soon as possible.
                  </p>
                  <p>
                    Termite infestation isn’t limited just to residential
                    properties. Mosques, churches, shopping malls and warehouses
                    in Dubai can all become infested with termites. That’s why a
                    good pest control services company is well-equipped to deal
                    with termites no matter whether they are located in
                    residential homes, flats and apartments; or commercial
                    properties like office space, places of worship, and stores.
                    A professional company can also work with new construction
                    to implement methods to prevent future termite infestation.
                  </p>
                  <p>
                    Termite control from a professional company can cost from
                    2000 UAE Dirham up to 15000 UAE Dirham depending on the size
                    of the premises and the method used to kill the termites.
                    Various methods include fumigation, chemical extermination,
                    bait extermination and heat extermination. For smaller
                    areas, electro-gun and the microwave system may be used.
                  </p>
                  <p>
                    There are three categories when it comes to the cost of
                    termite treatment.
                  </p>
                  <p>
                    The second category is commercial treatment for structures
                    like offices, shops, malls, and other buildings. Once again,
                    the cost of termite control will depend on the size of the
                    premises and the damage of termites per unit.
                  </p>
                  <p>
                    The last category when it comes to termite control cost is
                    for construction building . The cost for this is based upon
                    the number of square feet.
                  </p>
                  <p />
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-md-8">
                        <h2>
                          Anti Termite Solutions for pre construction in Dubai
                        </h2>
                        <p>
                          Protecting your home from termites before construction
                          begins is crucial to avoid costly damage later on.
                          Anti-termite solutions for pre-construction offer a
                          proactive approach to keep termite infestation away
                          from the property with pre-construction{" "}
                          <Link href="/">anti termite solution</Link>.
                        </p>
                        <h3>Key steps followed prior to construction</h3>
                        <ul>
                          <li>
                            Conduct a thorough site inspection to identify
                            potential termite entry points and assess the level
                            of risk.
                          </li>
                          <li>
                            Choose appropriate anti-termite treatments based on
                            the site’s conditions and construction plans.
                          </li>
                          <li>
                            Apply soil treatment by spraying termiticides around
                            the perimeter of the building site to create a
                            protective barrier.
                          </li>
                          <li>
                            Utilize termite-resistant materials such as treated
                            wood or concrete for construction to deter termite
                            infestations.
                          </li>
                          <li>
                            Install physical barriers such as metal mesh or
                            plastic shields around pipes and utility openings to
                            prevent termites from accessing the structure.
                          </li>
                          <li>
                            Regularly monitor the construction site for signs of
                            termite activity and make necessary adjustments to
                            the anti-termite measures.
                          </li>
                          <li>
                            Ensure that all anti-termite treatments comply with
                            safety regulations and environmental standards.
                          </li>
                          <li>
                            Document the anti-termite measures taken during
                            pre-construction for future reference and
                            maintenance purposes.
                          </li>
                          <li>
                            Collaborate with construction teams and pest control
                            experts to implement comprehensive anti-termite
                            strategies throughout the building process.
                          </li>
                          <li>
                            Educate homeowners and construction personnel about
                            the importance of anti-termite solutions and the
                            role they play in preventing termite damage.
                          </li>
                        </ul>
                        <p>
                          If you’re planning to construct a new villa or
                          high-rise multi-story building, prioritizing
                          pre-construction termite treatment is essential.{" "}
                          <Link href="/">Akkad Pest Control</Link> employs
                          highly skilled and advanced techniques for combating{" "}
                          <Link href="/">termite infestations in Dubai</Link>.
                          We directly apply pesticide (termiticide) to the
                          exterior, interior, and foundation to ward off termite
                          attacks. Our treatment plan includes injecting liquid
                          pesticide directly into areas such as the foundation,
                          within foundation walls, and beneath concrete slabs.
                        </p>
                        <h2>
                          <strong>
                            Methods used for anti-termite treatment:
                          </strong>
                        </h2>
                        <h4>
                          <strong>Soil trenching and treatment</strong>
                        </h4>
                        <p>
                          The soil trenching method in anti-termite treatment
                          involves digging trenches around the perimeter of a
                          building site and treating the soil within these
                          trenches with termiticides to create a protective
                          barrier against termites.
                        </p>
                        <p>
                          <strong>Trench Digging:</strong> First, trenches are
                          dug along the foundation of the building site. These
                          trenches are typically around 6 inches wide and deep
                          enough to reach the bottom of the foundation.
                        </p>
                        <p>
                          <img
                            decoding="async"
                            src="/images/termite-1.fw_.webp"
                            className="entered lazyloaded img-fluid"
                          />
                        </p>
                        <p>
                          <strong>Soil Treatment:</strong> Once the trenches are
                          dug, termiticides are applied directly to the soil
                          within the trenches. This can be done using
                          specialized equipment such as sprayers or injectors.
                        </p>
                        <p>
                          <img
                            decoding="async"
                            src="/images/termite-2.fw_.webp"
                            className="entered lazyloaded img-fluid"
                          />
                        </p>
                        <p>
                          <strong>Soil Replacement:</strong> After the
                          termiticide is applied, the soil is replaced back into
                          the trenches. The termiticide-treated soil forms a
                          continuous barrier that termites cannot penetrate,
                          effectively protecting the structure from termite
                          infestation.
                        </p>
                        <p>
                          <img
                            decoding="async"
                            src="/images/termite-3.fw_.webp"
                            className="entered lazyloaded img-fluid"
                          />
                        </p>
                        <h4>
                          <strong>Drilling and injecting termiticides</strong>
                        </h4>
                        <p>
                          Initially termite activity within the building will be
                          identified. This may include areas where termites have
                          been spotted or evidence of termite damage. Holes are
                          drilled into the infested wood or into the soil
                          surrounding the structure. These holes provide access
                          points for injecting the termiticide.
                        </p>
                        <p>
                          <img
                            decoding="async"
                            src="/images/termite-6.fw_.webp"
                            className="entered lazyloaded img-fluid"
                          />
                        </p>
                        <p>
                          A specialized injection tool is used to deliver the
                          termiticide directly into the drilled holes. The
                          termiticide is injected at high pressure to ensure
                          thorough penetration into the wood or soil.
                        </p>
                        <p>
                          <img
                            decoding="async"
                            src="/images/termite-5.fw_.webp"
                            className="entered lazyloaded img-fluid"
                          />
                        </p>
                        <p>
                          The termiticide spreads throughout the treated area,
                          reaching termites within the wood or soil. Termites
                          that come into contact with the termiticide are
                          affected, either by direct contact or through
                          ingestion.
                        </p>
                        <h4>
                          <strong>Bait station methods</strong>
                        </h4>
                        <p>
                          This method is used in areas such as drilling is not
                          suitable such as upper floors or areas with electrical
                          wiring.
                        </p>
                        <p>
                          Bait stations are strategically placed around the
                          perimeter of a building or in areas where termite
                          activity is suspected. They are typically installed in
                          the ground or directly on top of soil near the
                          structure. When termites discover the bait stations,
                          they begin feeding on the bait.
                        </p>
                        <p>
                          As they feed, they ingest the toxic substances within
                          the bait, which can be lethal to the termites.
                          Additionally, termites may carry the bait back to
                          their colony, spreading the toxic substance to other
                          termites and ultimately leading to the elimination of
                          the colony.
                        </p>
                        <p>
                          <img
                            decoding="async"
                            src="/images/termite-4.fw_.webp"
                            className="entered lazyloaded img-fluid"
                          />
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="col-md-4">
                        <img width={100} height={80} />
                        <img
                          decoding="async"
                          src="/images/term1.fw_.webp"
                          className="entered lazyloaded"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container mt-5">
                    <div className="row">
                      <div className="col-md-8">
                        <h2>
                          Anti Termite Solution for Vila and Apartment in Dubai
                        </h2>
                        <p>
                          <strong>Applying Liquid Termiticides:</strong> We
                          commonly apply liquid termiticides around the
                          perimeter of homes, creating a barrier that termites
                          cannot cross. We may also inject liquid termiticides
                          directly into termite galleries within the structure.
                        </p>
                        <p>
                          <strong>Using Termite Baits:</strong> We place bait
                          stations in the ground around the home. These stations
                          contain cellulose material laced with slow-acting
                          toxicants. Termites feed on the bait and carry it back
                          to the colony, eventually eliminating the entire
                          colony.
                        </p>
                        <p>
                          <strong>Injecting Foam Termiticides:</strong> We
                          inject foam termiticides into termite galleries within
                          the structure. The foam expands to fill voids,
                          effectively distributing the chemical throughout the
                          colony.
                        </p>
                        <p>
                          <strong>Applying Wood Treatments:</strong> We apply
                          termiticides directly to wooden structures or use
                          pressure-treated lumber during construction to protect
                          against termite damage.
                        </p>
                        <p>
                          <strong>Performing Fumigation:</strong> We seal off
                          the home and release a fumigant gas inside,
                          penetrating all areas of the structure to eliminate
                          termites. Homeowners must vacate the premises for a
                          period of time during fumigation.
                        </p>
                        <p>
                          <strong>Conducting Heat Treatment:</strong> We use
                          specialized equipment to raise the temperature within
                          the home to levels lethal to termites. This process
                          kills termites and their eggs, particularly useful for
                          localized infestations or sensitive environments.
                        </p>
                        <p>&nbsp;</p>
                      </div>
                      <div className="col-md-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      </section>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Termite Control Cost - Premise SC 200",
      "image": [
        "https://pestcontrol.ae/images/pro3.jpg",
        "https://pestcontrol.ae/images/pro2.jpg",
        "https://pestcontrol.ae/images/pr4.jpg",
        "https://pestcontrol.ae/images/pro5.jpg"
      ],
      "description": "Effective termite control solutions using Premise SC 200. Get top-quality products and services at Akkad Pest Control.",
      "brand": {
        "@type": "Brand",
        "name": "Premise SC 200"
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
      "sku": "PREMISE-SC-200",
      "offers": {
        "@type": "Offer",
        "price": "150",
        "priceCurrency": "AED",
        "availability": "https://schema.org/InStock",
        "url": "https://pestcontrol.ae/termite-control-cost",
        "validFrom": "2024-11-14"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "5000"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Noura Ali",
          "datePublished": "2024-11-01",
          "reviewBody": "A reliable and cost-effective solution for termite control. Premise SC 200 worked wonders for our home.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          }
        },
        {
          "@type": "Review",
          "author": "Hassan Khalid",
          "datePublished": "2024-10-28",
          "reviewBody": "Great product and excellent service from Akkad Pest Control. Highly recommend Premise SC 200 for termite issues.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "4.6",
            "bestRating": "5"
          }
        }
      ]
    })
  }}
/>
    </div>
  );
};

export default TermiteControlCost;
export const metadata = {
  title: "Termite Control Cost: Affordable Solutions for Your Home",
  description:
    "Searching for expert pest control in JLT? Our professional team offers efficient and eco-friendly pest management solutions tailored to protect your home and business. Ensure a pest-free environment with our trusted services. Contact us today for a consultation!",
};