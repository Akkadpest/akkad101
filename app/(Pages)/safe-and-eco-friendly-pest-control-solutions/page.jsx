import GoogleReview from "@/Components/Sections/GoogleReview";
import AkkadPestControlServices from "@/Components/Sections/AkkadPestService";
import FAQone from "@/Components/Sections/FAQs/faqaOne";
import Offices from "@/Components/Sections/Offices";
import contactData from '../location/pest-control-dubai/contact-us/offices.json'
import Link from "next/link";
import React from "react";
const firstOffice = contactData.contact_page[0];

const SafeAndEcoFriendlyPestControlSolutions = () => {
  return (
    <div className="body-bg-color">
      <div className="container container-max-width py-4">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <h1 className="fw-bold mt-2 " style={{ fontSize: "50px" }}>
              Safe, Eco-Friendly Pest Control Solutions
            </h1>
            <p className="lh-normal my-3 text-secondary ">
              At Akkad Pest Control, we prioritize safety above all else. Our
              pest control methods are designed with your family’s health in
              mind. We use eco-friendly, non-toxic, and child-safe products that
              effectively eliminate pests without leaving harmful residues. Our
              approach focuses on targeting pests at their source, reducing the
              need for harsh chemicals while ensuring a thorough and lasting
              solution.
            </p>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            <GoogleReview />
          </div>
        </div>
        <section>
          <div className="row my-5">
            <div className="col-sm-12 col-lg-6 col-md-6 mb-5">
              <img
                src="/images/new_page_images/kids.webp"
                className="img-fluid"
                alt="kids"
              />
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <h2 className="fw-bold  ">
                Is Pest Control Services in Dubai Safe for Kids?
              </h2>
              <p className="lh-normal my-3 text-secondary ">
                As a parent, your primary concern is the safety and well-being
                of your children. When it comes to pest control, you might
                wonder if the chemicals used to eliminate pests could pose a
                risk to your family, especially your little ones. At Akkad <Link href="/">Pest
                Control,</Link> we fully understand these concerns and are committed to
                providing pest control services that are not only highly
                effective but also completely safe for kids, pets, and the
                environment.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-5">
        <Offices off={firstOffice} />

        </section>
        <section>
          <div className="row mt-5  pt-4">
            <div className="col-sm-12 col-lg-6 col-md-6">
              <h2 className="fw-bold  ">Child-Safe Procedures</h2>
              <p className="lh-normal my-3 text-secondary ">
                We take extra precautions to protect your children during and
                after the pest control process. Our team of experts follows
                strict guidelines to ensure that treatments are applied safely
                and effectively, focusing on areas that are most problematic
                while avoiding spaces where children frequently play. We also
                offer advice on how to maintain a pest-free environment after
                our services, such as keeping food sealed and maintaining
                cleanliness to prevent pests from returning.
              </p>
            </div>
            <div className="col-sm-12 col-lg-6 col-md-6">
              <img
                src="/images/new_page_images/child-safe.webp"
                className="img-fluid"
                alt="kids"
              />
              <div className="col-lg-6 col-md-6 pb-3 mt-4 mb-0">
                <h2 className="akkad_heading_one fw-700 black text-center">
                  We Are Here to Help you
                </h2>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center mt-1">
                    <li className="breadcrumb-item">
                      <Link href="/">Home</Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link href="/location/pest-control-dubai/contact-us">Dubai</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Safe pest control
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="row d-flex align-items-baseline mb-4">
            <div className="col-lg-4">
              <FAQone
                faqs="SafeAndEcoFriendly"
                title="FAQ: Pest Control Safety for Kids
"
              />
            </div>
            <div className="col-lg-8">
              <AkkadPestControlServices />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SafeAndEcoFriendlyPestControlSolutions;
export const metadata = {
  title: "Safe and Eco-Friendly Pest Control Solutions | Protect Your Home Naturally",
  description:
    "Discover safe and eco-friendly pest control solutions designed to protect your home and the environment. Our expert team utilizes natural methods to effectively manage pests while ensuring the safety of your family and pets. Explore our sustainable pest management options today!",
};