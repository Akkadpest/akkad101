import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <div className="container container-max-width">
      <div className="my-4 ">
        <h1 className="elementor-heading-title mb-4 birds-heading elementor-size-default fw-bold">
          Our Services at Akkad Pest Control
        </h1>
        <p className="para ">
          At Akkad Pest Control, we offer a wide range of pest control services
          designed to meet the specific needs of both residential and commercial
          properties. Our eco-friendly, effective solutions ensure that your
          home or business remains pest-free, safe, and healthy. Whether you’re
          dealing with insects, rodents, or other pests, our expert team is here
          to help.
        </p>
      </div>
      <div className="my-5 ms-0 ms-md-5 ms-lg-5">
        <Link
          className="btn free-pest-control"
          href="https://www.pestcontrol.ae/customer-section/#/login"
          tabIndex="0"
        >
          Book Your Free Pest Control Consultation Today!
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <h2 className="fw-600">Residential Pest Control</h2>
          <p>
            We provide comprehensive pest control solutions for homes, ensuring
            that your family is safe from the risks posed by pests. From
            cockroaches and bedbugs to ants and termites, our residential pest
            control services are tailored to meet your home’s specific needs.
          </p>

          <h2 className="fw-600">Commercial Pest Control</h2>
          <p>
            Our commercial pest control services help businesses maintain clean,
            safe, and pest-free environments. We serve offices, warehouses,
            restaurants, hotels, and other commercial spaces, offering
            customized plans to ensure pests don’t interfere with your business
            operations.
          </p>

          <h2 className="fw-600">Termite Control</h2>
          <p>
            Termites can cause significant structural damage if not addressed
            promptly. Akkad Pest Control offers effective termite detection and
            treatment solutions that protect your property from long-term damage
            and prevent future infestations.
          </p>

          <h2 className="fw-600">Bedbug Control</h2>
          <p>
            Bedbugs can cause discomfort and health issues in your home or
            business. Our bedbug control services include thorough inspections,
            targeted treatments, and follow-up inspections to ensure these pests
            are completely eradicated.
          </p>

          <h2 className="fw-600">Rodent Control</h2>
          <p>
            Rodents not only damage property but also pose health risks by
            spreading diseases. Our rodent control services include the safe
            removal of mice and rats, sealing of entry points, and ongoing
            prevention to keep your property rodent-free.
          </p>

          <h2 className="fw-600">Cockroach Control</h2>
          <p>
            Cockroaches are a common problem in Dubai and can spread harmful
            bacteria. Our cockroach control services are fast, safe, and
            effective, ensuring that these pests are removed from your property
            and prevented from returning.
          </p>

          <h2 className="fw-600">Ant Control</h2>
          <p>
            Ant infestations can quickly become a nuisance, especially in homes
            and kitchens. Akkad Pest Control offers professional ant removal
            solutions to get rid of ants and prevent further invasions.
          </p>

          <h2 className="fw-600">Bedbug Control</h2>
          <p>
            Our bedbug control services ensure that your living spaces remain
            bedbug-free through safe, effective treatments that target both
            adult bedbugs and their eggs.
          </p>

          <h2 className="fw-600">Bird Control</h2>
          <p>
            Birds can cause damage to buildings and bring additional pests.
            Akkad Pest Control offers bird control solutions such as netting,
            spikes, and humane trapping systems to keep birds away from your
            property.
          </p>

          <h2 className="fw-600">Customized Pest Control Plans</h2>
          <p>
            Every property is different, and so are its pest control needs. We
            offer tailored pest management plans to suit your specific
            requirements, ensuring long-lasting protection and peace of mind.
          </p>

          <h2 className="fw-600">Emergency Pest Control Services</h2>
          <p>
            Pests don’t always strike during business hours. That’s why Akkad
            Pest Control offers 24/7 emergency pest control services to handle
            infestations quickly and efficiently, minimizing disruption to your
            home or business.
          </p>

          <h2 className="fw-600">Pest Control Costs</h2>
          <p>
            The cost of our pest control services depends on factors like the
            type of pest, the size of your property, and the severity of the
            infestation. Akkad Pest Control provides free inspections and
            customized quotes to ensure you receive the best solution at the
            best price.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;

export const metadata = {
  title: "Our Pest Control Services | Residential & Commercial | Akkad",
  description:
    "Explore Akkad Pest Control’s wide range of pest control services, including residential, commercial, termite control, bedbug removal, and more. Contact us today for a free inspection!",
};
