import Link from "next/link";
import React from "react";

const AboutAkkad = () => {
  return (
    <div className="container container-max-width">
      <div className="my-4 ">
        <h1 className="elementor-heading-title mb-4 birds-heading elementor-size-default fw-bold">
          About Akkad Pest Control
        </h1>
        <p className="para ">
          Akkad Pest Control has been a trusted name in pest management for over
          20 years, providing top-tier services to homes and businesses across
          Dubai. We pride ourselves on our commitment to delivering safe,
          eco-friendly, and effective pest control solutions that protect your
          property and ensure a healthy living or working environment.
        </p>
      </div>
      <div className="my-5 ms-0 ms-md-5 ms-lg-5">
        <Link
          className="btn free-pest-control"
          href="https://www.pestcontrol.ae/customer-section/#/login"
          tabIndex="0"
        >
          Book Your Free Pest Control Inspection Today!
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <h2 className="fw-600">Our Mission</h2>
          <p>
            At Akkad Pest Control, our mission is to provide the most effective
            pest control solutions while ensuring the safety of our clients and
            the environment. We strive to exceed customer expectations by
            offering customized pest management plans that address the unique
            needs of each property.
          </p>

          <h2 className="fw-600">Why Akkad Pest Control?</h2>
          <p>
            With over two decades of experience, Akkad Pest Control has become
            synonymous with reliability and professionalism in Dubai. Our team
            of highly-trained and certified technicians uses the latest
            technology and eco-friendly methods to ensure your property remains
            pest-free.
          </p>

          <h2 className="fw-600">Eco-Friendly and Safe Solutions</h2>
          <p>
            We understand the importance of environmental responsibility. That’s
            why all our treatments are eco-friendly and safe for children, pets,
            and the ecosystem. Akkad Pest Control is committed to reducing the
            environmental impact of pest control without compromising on
            effectiveness.
          </p>

          <h2 className="fw-600">Expert Team</h2>
          <p>
            Our team consists of certified professionals who are experts in
            handling a wide range of pests, from rodents and cockroaches to
            termites and bedbugs. We constantly train and upgrade our skills to
            provide you with the best pest management solutions in the industry.
          </p>

          <h2 className="fw-600">Serving Dubai for Over 20 Years</h2>
          <p>
            Since our founding, we have proudly served the Dubai community with
            dedication and excellence. We have built strong relationships with
            homeowners, businesses, and organizations, making Akkad Pest Control
            the go-to choice for pest management in the city.
          </p>

          <h2 className="fw-600">Customer Satisfaction Guaranteed</h2>
          <p>
            We prioritize customer satisfaction above all. Our team works
            closely with clients to understand their needs and provide tailored
            solutions. With our 98% customer satisfaction rate, you can trust
            Akkad Pest Control to get the job done right.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAkkad;

export const metadata = {
  title: "About Akkad Pest Control | Trusted Pest Management in Dubai",
  description:
    "Learn more about Akkad Pest Control, the leading pest control company in Dubai. With over 20 years of experience, we offer eco-friendly, effective pest control solutions. Contact us today!",
};
