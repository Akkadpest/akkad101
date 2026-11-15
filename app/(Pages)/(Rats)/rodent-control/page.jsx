import React from "react";
import Link from "next/link";
import FourKinds from "@/Components/Sections/Card/FourKinds";
import FAQs from "@/Components/Sections/FAQs";

const RodentControl = () => {
  return (
    <div>
      {" "}
      <h1 className="container my-4 mini_banner_title">Rodent Control</h1>
      <section className="py-5 light_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className=" pb-3 ">
                <div className="pb-3">
                  <h2 className="akkad_heading_one fw-700 black"> </h2>
                  <h2 className="akkad_heading_one fw-700 black"> </h2>
                  <h2>What is Rodent Meaning?</h2>
                  <p>
                  Rodents are small mammals with sharp, continuously growing teeth, designed for gnawing. Common examples include rats, mice, and squirrels. They often invade homes, damage property, and spread diseases, making effective rodent control essential to maintain hygiene and safety.
                 </p>
                  <h2>Effective Rodent Control Services in Dubai Starting from 110 AED</h2>
                  <p>
                    Rodents can cause serious damage to homes, offices, malls, industries, and villas. At <Link href="/">Akkad</Link>, we specialize in providing fast and reliable solutions to eliminate rats and mice. Our services cover apartments, villas, offices, malls, and industrial buildings.
                  </p>
                  <p>
                    Starting from just <strong>110 AED</strong>, we ensure a thorough rodent extermination process that guarantees your premises remain rodent-free.
                  </p>
                  <div className="col-md-6 pb-3">
                    <h3 className="akkad_heading_one fw-700 black">
                      You are here
                    </h3>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mt-1">
                        <li className="breadcrumb-item">
                          <Link href="/"> Home </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          <Link href="/rodent-control"> Rodent Control </Link>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <h3>Types of Rat (Rodents) We Treat</h3>
  <table className="table table-bordered">
    <thead>
      <tr>
        <th>Type of Rodent</th>
        <th>Description</th>
        <th>Price (AED)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Brown Rat</td>
        <td>Also known as the Norway rat, it is a common pest found in urban and rural areas.</td>
        <td>Starting From 110</td>
      </tr>
      <tr>
        <td>Black Rat</td>
        <td>A climber and often found in high places like roofs and attics.</td>
        <td>Starting From 110</td>
      </tr>
      <tr>
        <td>House Mouse</td>
        <td>A small rodent commonly found indoors, capable of rapid reproduction.</td>
        <td>Starting From 110</td>
      </tr>
      <tr>
        <td>Field Mouse</td>
        <td>Primarily found in gardens or fields, occasionally venturing indoors.</td>
        <td>Starting From 110</td>
      </tr>
    </tbody>
  </table>
                 
                  <div className="container mt-5">
                  
                    <h2 className="fw-bold mt-4 text-center">Book Rodent Control In Dubai</h2>
                    <p className="text-center">
                      Whenever you book our services in Dubai, we guarantee a lightning-fast response — we'll get back to you in just 10 seconds!
                    </p>
                    
                    <div className="text-center mt-3">
                      <a
                        href="https://www.pestcontrol.ae/my-warranty"
                        className="btn btn-success px-4 py-2 mt-n2 mb-3"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                  

                  <h2> Steps how to control rodent(rat)    </h2>
                  <p>Before rodent infestation takes hold, follow these simple steps:</p>
                  <ul>
                    <li>Seal all cracks and entry points in walls, doors, and windows.</li>
                    <li>Store food in airtight containers to eliminate food sources.</li>
                    <li>Regularly dispose of garbage in sealed bins.</li>
                    <li>Maintain a clean and clutter-free environment, especially in storage areas.</li>
                    <li>Inspect and clean gutters to avoid nesting areas for rodents.</li>
                  </ul>

                  <h2>Rodent Extermination Techniques</h2>
                  <p>Our team uses the most effective techniques to eliminate rodents from your property:</p>
                  <ul>
                    <li>
                      <strong>Trapping and Removal:</strong> We use humane traps to catch rodents and safely remove them from your property.
                    </li>
                    <li>
                      <strong>Poison Baiting:</strong> Carefully placed bait stations ensure effective elimination without endangering children or pets.
                    </li>
                    <li>
                      <strong>Exclusion Methods:</strong> Sealing entry points and reinforcing vulnerable areas to prevent re-entry.
                    </li>
                    <li>
                      <strong>Sanitization:</strong> Comprehensive cleaning and disinfection to remove droppings and nests.
                    </li>
                  </ul>
                  <FourKinds
       headertitle="Products Used To Control Rats(Rodents) "

       insects="rats" />
     
                  <h2>Why Choose Akkad Pest Control?</h2>
                  <p>
                    At Akkad, we provide top-tier rodent control services backed by experienced professionals and advanced techniques. Our services are safe, reliable, and efficient, ensuring your property remains free from rodents.
                  </p>
                  <p>
                    We offer services across Dubai (UAE), tailored to meet the unique needs of apartments, villas, malls, industries, and offices.
                  </p>

                  <p>
                    <img
                      src="/images/rats-home.fw_.webp"
                      style={{ maxWidth: "400px", width: "100%" }}
                    />
                  </p>

                  <p>
                    Don’t let rodents take over your home or business! Trust Akkad Pest Control to eliminate the problem swiftly and effectively, so you can enjoy a pest-free environment once again.
                  </p>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <FAQs  faqs="Rodent-Control" title="FAQs Rodent(Rat) Control"/>
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Akkad Pest Control Products For Rodent Control - Rodent Control",
      "image": "https://pestcontrol.ae/images/rats-home.fw_.webp",
      "description": "Top-quality pest control products in Al Souq Al Kabeer for effective pest management.",
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
          "streetAddress": "Barsha Heights , Tecom, Sheika Noora 403",
          "addressLocality": "Rodent Control Barsha Heights, Dubai",
          "addressRegion": "Dubai",
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
        "url": "https://pestcontrol.ae/rodent-control",
        "validFrom": "2024-11-25"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "15352"
      },
      "review": [
        {
          "@type": "Review",
          "author": "Omar Hassan",
          "datePublished": "2024-10-22",
          "reviewBody": "These products worked perfectly There is No Rats and Lizards in my room,! I recommend akkad Rodent Control For The People Of Dubai",
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
      </section>
    </div>
  );
};

export default RodentControl;
export const metadata = {
  title: "Professional Rodent Control in Dubai | Starting at 110 AED",
  description:
    "Eliminate rodents with expert pest control services in Dubai. Starting at just 110 AED, our safe and effective solutions tackle mice, rats, and other pests in homes, offices, malls, and industries. Contact us now for fast, reliable rodent control and prevention tips.",
};
