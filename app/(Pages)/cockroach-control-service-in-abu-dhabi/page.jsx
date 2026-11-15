import FAQTWo from "@/Components/Sections/FAQs/faqsTwo";
import TestimonialReviews from "@/Components/Sections/Testimonial";
import Link from "next/link";
import React from "react";
const HowWork = [
  {
    img: "/images/new_page_images/contact-call.png",
    headind: "Contact",
    desc: " our call center for prompt assistance 043966211",
  },
  {
    img: "/images/new_page_images/care.png",
    headind: "Wait",
    desc: " for a professional to address your needs with care",
  },
  {
    img: "/images/new_page_images/relax.png",
    heading: "Sit back and relax",
    desc: " while we take care of everything for you",
  },
];
const CockroachesControl = () => {
  return (
    <>
      <div className="fluid-container">
        <div className="container container-max-width">
          <h1 className="fw-bold text-center">
            Cockroach Control Service in Abu Dhabi
          </h1>
          <p className="py-2 text-muted text-center fw-normal">
            {" "}
            Get Rid of Cockroaches with Akkad Pest Control
          </p>
          <section>
            <div className="row my-4 d-sm-flex align-items-center justify-content-sm-center">
              <h2 className="fs-2  fw-bold  my-5 text-center  text-lightblue">
                How it works
              </h2>
              {HowWork.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                  <p>
                    <strong>{item.headind}</strong>
                    {item.desc}
                  </p>
                  <img src={item.img} alt={item.desc} />
                </div>
              ))}
            </div>
          </section>
          <section>
            <h1 className="fs-2  fw-bold  mt-4 mb-2  ">
              <Link className="text-lightblue" href="/cockroaches">
                Cockroach Control
              </Link>
            </h1>
            <p>
              Dealing with a cockroach infestation and unsure how to eliminate
              them? It’s crucial to hire professional pest control services in{" "}
              <a href="https://en.wikipedia.org/wiki/Abu_Dhabi">Abu Dhabi</a> to
              effectively tackle these resilient pests. Cockroaches are
              notorious for their ability to survive in harsh conditions and are
              known carriers of diseases, making them a serious threat to your
              health. To ensure your home is thoroughly protected, trust only
              the best pest control services in Abu Dhabi, like{" "}
              <Link href="/">Akkad Pest Control,</Link> where you can quickly
              and easily book our expert services.
            </p>
            <img
              className="my-3 img-fluid"
              src="/images/new_page_images/Cockroaches-Control-abu.png"
              alt="Cockroaches"
            />
            <h1 className="fs-2  fw-bold  mt-4 mb-2  ">
              <Link className="text-lightblue" href="/cockroaches">
                Types of Cockroach control{" "}
              </Link>
            </h1>
            <p>
              <Link href="/">Akkad Pest Control</Link> specializes in various
              proactive cockroach control treatments, ensuring they keep homes
              and businesses free from these resilient pests.
            </p>
            <p>Various treatment methods include:</p>

            <ul>
              <li>Pesticides</li>
              <li>Baiting</li>
              <li>Spraying</li>
              <li>Sealing methods (Prevention)</li>
            </ul>
            <p>
              Each pest control method tailored to the unique needs of the
              infested area.
            </p>

            <p className="mt-3">
              Treatment strategically placing toxic baits that cockroaches
              consume and carry back to their nests, effectively exterminating
              entire colonies.
            </p>

            <p>
              Meanwhile, Akkad utilize potent insecticides to target cockroach
              hiding spots, eliminating them on contact. Additionally, Akkad
              Pest Control employs sealing techniques to close off entry points,
              preventing future infestations. Cockroach control is important for
              various health and safety reasons to protect humans and pets.
            </p>

            <p className="my-3">
              Akkad expert technicians assess the severity of the infestation,
              customize a treatment plan, and diligently execute it to guarantee
              optimal results. In the battle against cockroach infestations,
              proactive pest control measures are essential. Employing a
              multi-faceted approach, professional pest control services ensure
              homes remain free from these persistent pests.
            </p>
          </section>
          <section>
          <h2 className="fs-2 fw-bold   ">
            Special Offer Starting at 189 AED
          </h2>
          <p className="mb-4">
          You can get excellent service for less at Akkad Pest Control. We provide superior pest control services at more reasonable costs than others. With us, you’ll get the most for your money.


          </p>
        </section>
        <section>
          <TestimonialReviews/>
        </section>
        <section>
        <iframe
                    style={{ border: 0 }}
                    src="https://maps.google.com/maps?q=Abu%20Dhabi&t=m&z=10&output=embed&iwloc=near"
                    width="100%"
                    height={250}
                    allowFullScreen="allowfullscreen"
                  />
        </section>
        <section>
          <FAQTWo title="Frequently Asked Questions (FAQs)
" faqs="cockroachControlAbuDhabi"/>
        </section>
        <section>
          <img
            src="/images/new_page_images/Get-Our-Apps-Now.webp"
            style={{ width: "100%", maxWidth: "552px" }}
            alt="Get-Our-Apps-Now"
          />
          <p className="para mt-4">Download Our App for Booking</p>
          <a
            href="https://play.google.com/store/apps/details?id=ae.pestcontrol.app"
            role="button"
            className="btn google-play-btn  m-2"
          >
            Google Play
          </a>

          <a
            href="https://apps.apple.com/ph/app/akkad-pest-control/id6478436892"
            role="button"
            className="btn  btn-primary-hover m-2"
          >
            App store
          </a>
        </section>
        </div>
      </div>
    </>
  );
};

export default CockroachesControl;
export const metadata = {
  title: "Cockroach Control in Abu Dhabi | Reliable Pest Removal Services",
  description:
    "Get expert cockroach control in Abu Dhabi with safe and effective solutions. Eliminate infestations in your home or business with professional pest removal services.",
};