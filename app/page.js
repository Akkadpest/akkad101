import FAQs from "@/Components/Sections/FAQs";
import BookInDubai from "@/Components/Sections/BookInDubai";
import DoorStep from "@/Components/Sections/DoorStep";
import Hero from "@/Components/Sections/Hero";
import LocationSection from "@/Components/Sections/LocationSection";
import NearYou from "@/Components/Sections/NearYou";
import Services from "@/Components/Sections/Services";
import WhyAkkad from "@/Components/Sections/WhyAkkad";
import HereToHelp from "@/Components/Sections/HereToHelp";
import AdditionallyServing from "@/Components/Sections/AdditionallyServing";
import Treatments from "@/Components/Sections/Treatements";
import CustomerBenefits from "@/Components/Sections/CustomerBenefits";
import PricingFirstOffe from "@/Components/Sections/PricingFirstOffe";
import BedBugControl from "@/Components/Sections/BedBugControl";
import AntsControl from "@/Components/Sections/AntsControl";
import TermiteControl from "@/Components/Sections/TermiteControl";
import RodentControl from "@/Components/Sections/RodentControl";
import CockroachControl from "@/Components/Sections/CockroachControl";
import MosquitoControl from "@/Components/Sections/MosquitoControl";
import FliesControl from "@/Components/Sections/FliesControl";
import BookingForm from "@/Components/BookingForm/BookingForm";
import WhatsAppFloat from "@/Components/WhatsappFloat";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.pestcontrol.ae"),
  title: "Pest Control Dubai | Dubai Municipality Licensed Pest Control Services",
  description:
    "Akkad Pest Control Dubai — Dubai Municipality licensed. Expert cockroach, termite, bed bug & rodent control for homes and businesses. Call now for same-day service.",
  alternates: {
    canonical: "https://www.pestcontrol.ae",
  },
};

export default function Home() {
  return (
    <div className="body-bg-color">

      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Akkad Pest Control Services LLC",
            "url": "https://www.pestcontrol.ae",
            "logo": "https://www.pestcontrol.ae/images/logo.png",
            "image": "https://www.pestcontrol.ae/images/logo.png",
            "description": "Dubai Municipality licensed pest control company offering cockroach, termite, bed bug, rodent, and mosquito control services across Dubai, Sharjah, and Ajman.",
            "telephone": "+971-4-000-0000",
            "email": "info@pestcontrol.ae",
            "priceRange": "AED 99+",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Dubai",
              "addressRegion": "Dubai",
              "addressCountry": "AE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "25.2048",
              "longitude": "55.2708"
            },
            "areaServed": [
              { "@type": "City", "name": "Dubai" },
              { "@type": "City", "name": "Sharjah" },
              { "@type": "City", "name": "Ajman" }
            ],
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
              ],
              "opens": "08:00",
              "closes": "22:00"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Pest Control Services Dubai",
              "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cockroach Control Dubai" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bed Bug Control Dubai" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Termite Control Dubai" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rodent Control Dubai" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mosquito Control Dubai" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Ant Control Dubai" } }
              ]
            }
          }),
        }}
      />

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What pest control services are available in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Akkad Pest Control Dubai provides cockroach, bed bug, termite, rodent, mosquito, ant, and flies control services for apartments, villas, offices, restaurants, and warehouses across Dubai, Sharjah, and Ajman."
                }
              },
              {
                "@type": "Question",
                "name": "Is pest control safe for children and pets?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We use Dubai Municipality approved, eco-friendly pesticides that are safe for children and pets when applied by our certified technicians."
                }
              },
              {
                "@type": "Question",
                "name": "How much does pest control cost in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our pest control services in Dubai start from AED 99 depending on the property type and pest infestation. We offer 6-month contracts with unlimited call-outs."
                }
              },
              {
                "@type": "Question",
                "name": "Is Akkad Pest Control licensed by Dubai Municipality?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Akkad Pest Control Services LLC is fully licensed and certified by Dubai Municipality to provide pest control services across Dubai and the UAE."
                }
              },
              {
                "@type": "Question",
                "name": "Do you provide same-day pest control in Dubai?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer same-day pest control service across Dubai. Book online or WhatsApp us for fast response."
                }
              }
            ]
          }),
        }}
      />

      <Hero
        title="Pest Control Dubai"
        list1="6 Months Pest Control — Unlimited Call Outs."
        list2="Affordable Pest Control Prices in Dubai."
        list3="Safe, Organic & Dubai Municipality Approved Pesticides."
        list4="Awarded Best Pest Control Company 2025 by Dubai Municipality."
      />

      <BookingForm />

      <Services
        title="Pest Control Services in Dubai"
        description="Akkad Pest Control Dubai provides certified pest control services for homes, apartments, villas, offices, restaurants, and warehouses across Dubai, Sharjah, and Ajman. Our Dubai Municipality licensed technicians eliminate cockroaches, bed bugs, termites, rodents, mosquitoes, ants, and flies using safe, eco-friendly treatments. Whether you need a one-time pest treatment or an annual pest control contract in Dubai, we deliver fast, reliable, and permanent solutions."
      />

      <LocationSection />
      <DoorStep />
      <NearYou />
      <BookInDubai />
      <WhyAkkad />
      <FAQs faqs="Dubai" title="Frequently Asked Questions — Pest Control Dubai" />
      <CustomerBenefits />
      <BedBugControl />
      <AntsControl />
      <TermiteControl />
      <RodentControl />
      <CockroachControl />
      <MosquitoControl />
      <FliesControl />
      <PricingFirstOffe />
      <AdditionallyServing />
      <Treatments />
      <HereToHelp />
    <WhatsAppFloat />


    </div>
  );
}