import FAQTWo from "@/Components/Sections/FAQs/faqsTwo";
import TestimonialReviews from "@/Components/Sections/Testimonial";
import Link from "next/link";
import React from "react";
const ServicesWideRange = [
  {
    text: "Rodents Control:",
    url: "/rodent-control-dubai/",
    desc: " Mice and rats pose health risks and can damage property. We use advanced techniques to control and prevent rodent infestations.",
  },
  {
    text: "Bed Bugs Control:",
    url: "/bed-bugs-control-dubai/",
    desc: "These elusive pests can disrupt your sleep. We provide thorough inspections and effective treatments to ensure complete eradication.",
  },
  {
    text: "Cockroach Control: ",
    url: "/cockroaches-in-dubai/",
    desc: "We provide efficient and reliable cockroach control solutions for your home and office, ensuring a pest-free environment.",
  },
  {
    text: "Termites Control:",
    url: "/termite-control-cost/",
    desc: "Ensure your property is protected with our comprehensive termite control services, designed to effectively eliminate infestations and prevent future damage.",
  },
];
const ListText = [
  {
    heading: "2. Customized Solutions",
    desc: "We understand that each pest problem is unique. Our team conducts a detailed inspection of your property to design a pest control plan that addresses your specific needs and concerns.",
  },
  {
    heading: "3. Safe and Effective Treatments",
    desc: "Your safety is our top priority. We use eco-friendly and non-toxic pest control products that are safe for children, pets, and the environment. Our methods are both effective and responsible, ensuring a pest-free environment without compromising health or safety.",
  },
  {
    heading: "4. Experienced Professionals",
    desc: "Our skilled technicians are trained to handle various pest issues with precision and care. They stay updated with the latest pest control techniques and technologies to provide you with the most effective solutions.",
  },
  {
    heading: "5. Preventative Measures",
    desc: "In addition to treating existing infestations, we offer preventative services to minimize the risk of future pest problems. Our recommendations include structural repairs, sanitation tips, and ongoing monitoring.",
  },
  {
    heading: "6. Customer-Centric Approach",
    desc: "At Akkad Pest Control, customer satisfaction is our priority. We offer flexible scheduling to accommodate your needs and provide transparent communication throughout the process. Our goal is to deliver prompt and professional service to ensure your complete satisfaction.",
  },
];

const ServicesForHome = [
  {
    heading: "Customized Solutions: ",
    desc: "We assess your home’s unique needs to create a targeted pest control plan.",
  },
  {
    heading: "Safe Products:  ",
    desc: "Our treatments are eco-friendly and safe for children and pets.",
  },
  {
    heading: "Expert Technicians:  ",
    desc: " Our team is trained to handle all types of pest issues with professionalism and efficiency.",
  },
  {
    heading: "Ongoing Support:   ",
    desc: " We provide follow-up visits to ensure your home remains pest-free.",
  },
];
const CommercialControl = [
  {
    heading: "Tailored Services: ",
    desc: "We develop pest control strategies that align with your business’s operational requirements.",
  },
  {
    heading: "Minimal Disruption : ",
    desc: "Our team works around your schedule to ensure minimal impact on your business activities.",
  },
  {
    heading: "Compliance:  ",
    desc: " We adhere to all industry regulations and standards to ensure safe and effective treatments.",
  },
  {
    heading: "Regular Inspections:  ",
    desc: "Ongoing monitoring and maintenance to prevent future pest issues.",
  },
];
const BedBugsControls = [
  {
    heading: "Inspection: ",
    desc: "Thorough examination of your property to identify the extent of the infestation.",
  },
  {
    heading: "Treatment : ",
    desc: " Application of advanced, safe treatments to eliminate bed bugs at all life stages.",
  },
  {
    heading: "Prevention:  ",
    desc: "Strategies to prevent future infestations, including advice on reducing risk factors.",
  },
  {
    heading: "Follow-Up:  ",
    desc: " Post-treatment inspections to ensure complete eradication.",
  },
];

const HowWork = [
  {
    img: "/images/new_page_images/contact-call.png",
    desc: "Contact our call center for prompt assistance 043966211",
  },
  {
    img: "/images/new_page_images/care.png",
    desc: "Wait for a professional to address your needs with care",
  },
  {
    img: "/images/new_page_images/relax.png",
    desc: "Sit back and relax while we take care of everything for you",
  },
];
const Neighborhoods = [
  {
    text: "Deira",
    url: "/pest-control-deira/",
  },
  {
    text: "Downtown Dubai",
    url: "pest-control-downtown-dubai/",
  },
  {
    text: "Dubai Investment Park (DIP)",
    url: "/pest-control-in-dubai-investment-park/",
  },
  {
    text: "Al Rigga",
    url: "/pest-control-in-al-rigga/",
  },
  {
    text: "Nad Al Sheba",
    url: "/pest-control-in-nad-al-sheba/",
  },
  {
    text: "Town Square",
    url: "/pest-control-in-town-square/",
  },
  {
    text: "Al Barsha",
    url: "/pest-control-in-al-barsha/",
  },
  {
    text: "Jumeirah Village Circle (JVC)",
    url: "/pest-control-jvc/",
  },
  {
    text: "Dubai Marina",
    url: "/pest-control-dubai-marina/",
  },
  {
    text: "Al Qusais",
    url: "/pest-control-al-qusais/",
  },
  {
    text: "Bur Dubai",
    url: "/pest-control-bur-dubai/",
  },
];
const PestControlInDubai = () => {
 
  return (
    <div className="fluid-container">
      <div className="container container-max-width">
        <section>
          <div>
            <h1 className="fw-bold fs-1 my-3">Pest control service in Dubai</h1>
            <p className="fs-normal text-black">
              Welcome to Akkad Pest Control, your trusted partner for
              comprehensive pest control services in
              <a href="https://en.wikipedia.org/wiki/Dubai"> Dubai. </a>. We are
              committed to safeguarding your home or business from unwanted
              pests with our expert solutions tailored to meet the unique needs
              of the Dubai environment.
            </p>
          </div>
        </section>
        <section>
          <Link href="/" className="fs-2 fw-bold text-dark ">
            Why Choose Akkad Pest Control?
          </Link>
          <p className="mt-3">
            <strong>1. Comprehensive Pest Management</strong>
          </p>
          <p>Our services cover a wide range of pests, including:</p>{" "}
          {ServicesWideRange.map((item, index) => (
            <li key={index}>
              <Link href={item.url} className="fw-bold">
                {item.text}
              </Link>
              {item.desc}
            </li>
          ))}
        </section>
        <section>
          {ListText.map((item, index) => (
            <div className="my-3" key={index}>
              <p className="my-3">
                <strong>{item.heading}</strong>
              </p>
              <p>{item.desc}</p>{" "}
            </div>
          ))}
        </section>
        <section>
          <Link href="/" className="fs-2 fw-bold text-dark ">
            Pest Control Services For Your Home in Dubai
          </Link>
          <p className="my-2">
            At <Link href="/"> Akkad Pest Control,</Link> we understand that a
            safe and comfortable home environment is essential for your
            well-being. Our expert team is dedicated to providing top-notch pest
            control services tailored specifically for residential properties in
            Dubai. Whether you’re dealing with ants, cockroaches, rodents, or
            any other pests, we offer comprehensive solutions designed to
            eliminate unwanted visitors and prevent future infestations.
          </p>{" "}
          <p className="mt-3">
            <strong>Why Choose Our Residential Pest Control Services?</strong>
          </p>
          {ServicesForHome.map((item, index) => (
            <li key={index}>
              <strong>{item.heading}</strong>
              {item.desc}
            </li>
          ))}
        </section>
        <section>
          <h2 className="fs-2 fw-bold text-dark mt-5">
            Commercial Pest Control in Dubai
          </h2>
          <div className="row ">
            <div className="col-lg-8 col-sm-12">
              <p className="my-2">
                Akkad Pest Control offers specialized pest control services for
                businesses across Dubai. We understand that pests in a
                commercial setting can disrupt operations, damage property, and
                impact your reputation. That’s why we provide effective pest
                management solutions designed to meet the specific needs of your
                business.
              </p>{" "}
              <p className="mt-3">
                <strong>
                  Why Partner With Us for Commercial Pest Control?
                </strong>
              </p>
              {CommercialControl.map((item, index) => (
                <li key={index}>
                  <strong>{item.heading}</strong>
                  {item.desc}
                </li>
              ))}
              <p className="my-3">
                From restaurants and offices to warehouses and retail spaces,
                trust Akkad Pest Control to keep your commercial premises
                pest-free and running smoothly.
              </p>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img
                src="/images/new_page_images/commercial.webp"
                className="img-fluid"
                alt="commercial"
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="fs-2 fw-bold  mt-5 text-lightblue">
            Bed Bug Control in Dubai
          </h2>
          <div className="row my-3">
            <div className="col-lg-8 col-sm-12 mb-4">
              <p className="my-2">
                <Link href="/bed-bugs"> Bed bugs</Link> can be a significant
                problem in any home or business, causing discomfort and stress.
                Akkad Pest Control specializes in bed bug control, providing
                effective and comprehensive solutions to rid your space of these
                persistent pests.
              </p>{" "}
              <p className="mt-3">
                <strong>
                  Our <Link href="/bed-bugs"> Bed bugs</Link> Control Services
                  Include:
                </strong>
              </p>
              {BedBugsControls.map((item, index) => (
                <li key={index}>
                  <strong>{item.heading}</strong>
                  {item.desc}
                </li>
              ))}
            </div>
            <div className="col-lg-4 col-sm-12 ">
              <img
                src="/images/new_page_images/bed-bug-heat-treatment.webp"
                className="img-fluid "
                alt="bed bug heart treatement"
              />
            </div>
          </div>
        </section>
        <section>
          <h2 className="fs-2  fw-bold  mt-5 text-lightblue">How it works</h2>
          <div className="row my-4 d-sm-flex align-items-center justify-content-sm-center">
            {HowWork.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6" key={index}>
                <img src={item.img} alt={item.desc} />
                <p>
                  <strong>{item.desc}</strong>
                </p>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div className="row mt-5 mb-3">
            <div className="col-lg-8">
              <div className="container">
                <div className="card border-0   mb-3 py-5 px-5 card-container">
                  <h2 className="card-heading">
                    Our Pest Control Services in Dubai Neighborhoods
                  </h2>
                  <div className="d-flex justify-content-between flex-wrap">
                    {Neighborhoods.map((item, index) => (
                      <Link
                        key={index}
                        class="btn card-btns my-2 mx-2 btn-lg"
                        href={item.url}
                        role="button"
                      >
                        {item.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 text-center">
              <h2 className="fw-bold ">We Are Here to Help you</h2>
              <div className="ms-4 fw-normal ">
                <Link href="/">Home</Link> /{" "}
                <Link href="location/pest-control-dubai/contact-us">Dubai</Link>
              </div>
              <p className="para">/ pest control service Dubai</p>
            </div>
          </div>
        </section>
        <section>
          <h2 className="fs-2 fw-bold   text-lightblue">
            Special Offer Starting at 189 AED
          </h2>
          <p className="mb-4">
            You can get excellent service for less at Akkad Pest Control. We
            provide superior pest control services at more reasonable costs than
            others. With us, you’ll get the most for your money.
          </p>
        </section>

        <FAQTWo faqs="pestControlServiceInDubai" title="FAQS" />
        <section>
          <div className="container container-max-width">
            <iframe
              className="my-5"
              src="https://maps.google.com/maps?q=Dubai&t=m&z=10&output=embed&iwloc=near"
              title="Abu dhabi"
              aria-label="Abu dhabi"
              width="100%"
              height={300}
              allowFullScreen="allowfullscreen"
            />
          </div>
        </section>
        <TestimonialReviews/>

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
  );
};

export default PestControlInDubai;
export const metadata = {
  title: "Top Pest Control Services in Dubai | Safe & Effective Solutions",
  description:
    "Need reliable pest control in Dubai? Our expert team provides comprehensive and eco-friendly pest management solutions for homes and businesses. Experience prompt and effective service to ensure a pest-free environment. Contact us today for a consultation!",
};