import FAQs from "@/Components/Sections/FAQs";
import BookInDubai from "@/Components/Sections/BookInDubai";
import DoorStep from "@/Components/Sections/DoorStep";
import Hero from "@/Components/Home2/Hero";
import LocationSection from "@/Components/Sections/LocationSection";
import NearYou from "@/Components/Sections/NearYou";
import Services from "@/Components/Sections/Services";
import WhyAkkad from "@/Components/Sections/WhyAkkad";
import HereToHelp from "@/Components/Sections/HereToHelp";
import GoogleReview from "@/Components/Sections/GoogleReview";
import AdditionallyServing from "@/Components/Sections/AdditionallyServing";
import ReviewsSchema from "@/Components/Sections/schema/review-schema";
import Treatments from "@/Components/Sections/Treatements";

import Head from "next/head";
import FastBooking from "@/Components/Sections/FastBooking";
import PestControlSolution from "@/Components/Sections/PestControlSolution";
import GoogleReviewTwo from "@/Components/Sections/GoogleReview/GoogleReviewTwo";
import CommonPestInDubai from "@/Components/Home2/CommonPestInDubai";
export default function Home() {
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pest Control Dubai | Expert Pest Services And Solutions In Dubai",
    description:
      "We provide professional pest control services for your home and business in Dubai, specializing in safe and effective solutions for common pests such as bed bugs, cockroaches, and termites.",
    mainEntity: [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What pest control services are available in Dubai?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We offer pest control services for apartments, villas, industrial areas, and business premises in Dubai, specializing in safe and organic pest control solutions.",
            },
          },
          {
            "@type": "Question",
            name: "Is the pesticide used safe for homes?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we use safe and organic pesticides that are approved for residential use.",
            },
          },
          {
            "@type": "Question",
            name: "Do you offer pest control for specific pests?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we specialize in pest control for common pests such as bed bugs, cockroaches, and termites in Dubai.",
            },
          },
        ],
      },
      {
        "@type": "LocalBusiness",
        name: "Akkad Pest Control",
        image: "https://www.pestcontrol.ae/favicon.ico",
        "@id": "https://www.pestcontrol.ae",
        url: "https://www.pestcontrol.ae",
        telephone: "+97150400134",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Dubai",
          addressLocality: "Dubai",
          addressCountry: "UAE",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: "25.276987",
          longitude: "55.296249",
        },
        sameAs: ["https://www.facebook.com/profile.php?id=61566371760848"],
        openingHours: "Mo-Su 08:00-20:00",
        priceRange: "$$",
      },
      {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2400",
        bestRating: "5",
        worstRating: "1",
      },
      {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "John Doe",
        },
        reviewBody:
          "Excellent pest control service! The team was prompt, professional, and thorough in eliminating the cockroaches from my home. Highly recommended!",
      },
    ],
  };

  return (
    <div className="body-bg-color home-2">
      <Head>
        <title>
          Pest Control Dubai | Expert Pest Services And Solutions In Dubai
        </title>
        <meta
          name="description"
          content="We provide professional pest control services for your home and business in Dubai, specializing in solutions for common pests such as bed bugs, cockroaches, and termites."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </Head>
      <Hero
        title="Pest Control Expert In Dubai"
        list1="6 Months Pest Control Unlimited Call out."
        list2="Reasonable Pest Control Price."
        list3="Safe & Organic Pesticide."
        list4="Awarded Pest Control Company 2023 by Dubai Municipality"
      />
      <Services
        title="Pest Control Services"
        description="Common pest infestation is prevalent in various locations in Dubai. These pests are found in every home, and areas requiring pest control expertise include apartments, villas, industrial areas, and business premises."
      />
      <LocationSection />
      {/* <div className="hide-booking">
        <FastBooking />
      </div> */}
    

      <div className="hide-booking">
        {" "}
        <PestControlSolution />
      </div>
      <DoorStep />
      <NearYou />
      <div className="hide-on-mobi">
        <BookInDubai />
      </div>

      <WhyAkkad />
      <div className='display-on-mobile'>
        <GoogleReviewTwo />
      </div>
      <div className=''>
        <CommonPestInDubai/>
      </div>
      
      {/* <div className="hide-on-mobi">
        <FAQFOUR faqs="Dubai" title="Frequently Asked Questions Pest Control" />
      </div> */}
      <div className="hide-on-mobi">
        <AdditionallyServing />
      </div>
      <div className="hide-on-mobi">
        <Treatments />
      </div>
      <div className="hide-on-mobi">
        <HereToHelp />
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Akkad Pest Control Products Bait Station- Dubai",
            image:
              "https://pestcontrol.ae/images/cockroacehs_bait_station.webp",
            description:
              "High-quality pest control products available in Dubai for effective pest management.",
            brand: {
              "@type": "Brand",
              name: "Akkad Pest Control",
              logo: "https://www.pestcontrol.ae/images/img/logo_small_kuskus.png",
            },
            offers: {
              "@type": "Offer",
              price: "110",
              priceCurrency: "AED",
              availability: "https://schema.org/InStock",
              url: "https://pestcontrol.ae/pest-control-dubai",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "6000",
            },
          }),
        }}
      />
      
    </div>
  );
}

export const metadata = {
  title: "Pest Control Dubai | Expert Pest Services And Solutions In Dubai",
  description:
    "We provide professional pest control services for your home and business in Dubai, specializing in solutions for common pests such as bed bugs, cockroaches, and termites.",
};
