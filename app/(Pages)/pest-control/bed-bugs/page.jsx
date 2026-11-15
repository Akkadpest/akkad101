import Link from "next/link";
import React from "react";

const BedbugControl = () => {
  return (
    <div className="container container-max-width">
      <div className="my-4 ">
        <h1 className="elementor-heading-title mb-4 birds-heading elementor-size-default fw-bold">
          Bedbug Control Solutions
        </h1>
        <p className="para ">
          Bedbugs can cause significant discomfort, biting and leaving itchy
          marks. They often hide in furniture, mattresses, and crevices, making
          them hard to eliminate without professional help. At Akkad Pest
          Control, we provide comprehensive bedbug control services, ensuring
          the complete removal of bedbugs from your home while preventing
          further infestations.
        </p>
      </div>
      <div className="my-5 ms-0 ms-md-5 ms-lg-5">
        <Link
          className="btn free-bedbug-control"
          href="https://www.pestcontrol.ae/customer-section/#/login"
          tabIndex="0"
        >
          Book Your Bedbug Inspection Today!
        </Link>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <h2 className="fw-600">Bedbug Inspection</h2>
          <p>
            Our professional team begins with a thorough inspection of your
            property, looking for signs of bedbug infestations, including
            bloodstains, droppings, and eggs hidden in furniture, mattresses,
            and cracks.
          </p>

          <h2 className="fw-600">Targeted Bedbug Treatments</h2>
          <p>
            Akkad Pest Control offers tailored bedbug treatments that safely and
            effectively remove bedbugs. Using eco-friendly solutions, we target
            both adult bedbugs and their eggs, ensuring complete eradication.
          </p>

          <h2 className="fw-600">Heat Treatments</h2>
          <p>
            In some cases, we use heat treatments to eliminate bedbugs from
            mattresses, furniture, and other hard-to-reach areas. This
            non-chemical approach is highly effective in killing bedbugs at all
            stages of their lifecycle.
          </p>

          <h2 className="fw-600">Follow-up Services</h2>
          <p>
            Bedbug infestations can be persistent, so we offer follow-up
            inspections to ensure all bedbugs are eradicated and provide
            additional treatments if necessary. Our goal is to offer complete
            peace of mind with long-term solutions.
          </p>

          <h2 className="fw-600">Bedbug Prevention</h2>
          <p>
            To help prevent future infestations, Akkad Pest Control offers
            advice on how to avoid bringing bedbugs into your home, such as
            checking secondhand furniture and regular home maintenance to seal
            any potential entry points.
          </p>

          <h2 className="fw-600">Bedbug Control Costs</h2>
          <p>
            The cost of bedbug treatment depends on the severity of the
            infestation and the type of treatment required. Akkad Pest Control
            offers detailed property assessments to provide an accurate cost
            estimate for your bedbug control solution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BedbugControl;

export const metadata = {
  title: "Professional Bedbug Control Services | Safe & Effective Removal",
  description:
    "Get rid of bedbugs with Akkad Pest Control’s professional services. We offer safe, fast, and effective bedbug removal solutions to protect your home. Contact us today for reliable bedbug control!",
};
