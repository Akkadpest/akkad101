import React from "react";
import Link from "next/link";
import WhyAkkad from "@/Components/Sections/WhyAkkad";
import { Stepper, Step } from "@/Components/Sections/Stepper";
import FAQs from "@/Components/Sections/FAQs";
import Commercial from "@/Components/Sections/Commercial";
const SchoolPestControlDubai = () => {
  return (
    <>
      <section className="dip_control py-5 map_article_section img-fluid">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-7 mb-4">
              <div className="mb-5">
                <h1 className="fw-700 main_heading">Pest Control Solutions for Schools in Dubai</h1>
                <p>
                  Pest infestations in schools can disrupt the learning environment and pose health risks to students and staff. Addressing pest issues quickly and safely is essential for creating a clean, safe space for children. Here’s an overview of our specialized pest control solutions designed for school settings.
                </p>

           
                <img
                  src="/images_seo/image_5/schools-pest.png"
                  alt="Pest control technician doing Pest Control In Dubai Schools"
                  style={{ maxWidth: "450px", width: "100%" }}
                />

                <h2 className="fw-bold dark-black mt-4">Common Pest Problems in Schools</h2>
                <ul>
                  <li><strong>Cockroaches:</strong> Attracted to food and water sources in cafeterias and kitchens. Can spread diseases and contaminate food storage areas.</li>
                  <li><strong>Ants:</strong> Commonly found in classrooms and eating areas. Drawn to crumbs and food remnants, causing frequent infestations.</li>
                  <li><strong>Rodents:</strong> Seek shelter and food in school buildings. Can damage school property, contaminate food, and carry diseases.</li>
                  <li><strong>Flies:</strong> Often seen around food and waste disposal areas. Known to carry germs, posing health risks to students and staff.</li>
                </ul>
                <p>These pests are attracted to areas where food, water, and shelter are readily available, making schools particularly vulnerable. Regular pest control and preventive measures are essential to keep these areas safe and clean.</p>

                <h2 className="fw-bold dark-black mt-4">Our Safe Pest Control Solutions for Schools</h2>
                <ul>
                  <li><strong>Child-Safe Products:</strong> We use eco-friendly, non-toxic products that control pests effectively while ensuring no harmful exposure to children.</li>
                  <li><strong>Targeted Treatments:</strong> Our treatments focus on high-risk areas such as cafeterias, classrooms, playgrounds, and storage spaces to address pest-prone spots directly.</li>
                  <li><strong>Preventive Measures:</strong> Regular inspections are conducted to detect any signs of pests early. We implement preventive steps to keep infestations from reoccurring, providing a long-term, reliable solution.</li>
                </ul>
                <div className="col-md-6 pb-3 d-flex flex-column align-items-center">
  <p className="fs-4 text-muted text-capitalize fw-bold text-center">
  Pest-Free Schools for Healthier Learning!  </p>
  <video
    width="100%"
    autoPlay
    muted
    playsInline
    loop
    className="border border-success rounded rounded-3"
    style={{ maxWidth: "650px" }}
  >
    <source src="/videos/school-vid.mp4" type="video/mp4" /> 
    <source src="movie.ogg" type="video/ogg" />
   
  </video>
</div>

                <h2 className="fw-bold dark-black mt-4">Our Pricing for School Pest Control Services</h2>
                <p>Here’s a general guide to our school pest control service costs:</p>
                <ul>
                  <li><strong>Single Treatment:</strong> Starting from AED 110</li>
                  <li><strong>Annual Plan:</strong> Our one-year plan includes regular inspections, preventive treatments, and priority service to ensure a consistently pest-free hospital environment.</li>
                </ul>
                <p>*Prices may vary depending on school size and specific needs.*</p>
              </div>
            </div>
            
            <div className="col-md-5">
              <div className="mb-3">
                <h2 className="akkad_heading_one fw-700 black text-center">You are here</h2>
                <nav className="text-center" aria-label="breadcrumb">
                  <Link href="/"> Home </Link> &gt;
                  <Link href="/commercial-pest-control">Commercial Pest Control</Link> &gt;
                  <Link href="/commercial-pest-control/pest-control-for-schools"> Pest Control For Schools</Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
        



      </section>
      <section className="pest_control_in_dp py-5">
        <div className="col-12 text-center">
          <h2 className="fw-700">Pest Control Steps For Schools in Dubai</h2>
        </div>

        <Stepper>
          <Step title="Pest Inspection">
            <div className="row">
              <div className="col-md-6 step_container_text">
                <p>Pest control inspection to identify the type of infestation.</p>
                <ul>
                  <li>Get a free pest control inspection in your location</li>
                  <li>24/7 Call center agents available to book an appointment</li>
                </ul>
              </div>
              <div className="col-md-6 no_padding step_container_img">
                <img src="/images/step1-pest-control.webp" className="img-fluid w-100" alt="Pest Control Near You"/>
              </div>
            </div>
          </Step>
          <Step title="Pest Treatment">
            <div className="row">
              <div className="col-md-6 step_container_text">
                <p>Conduct treatment based on pest type and infestation severity.</p>
                <ul>
                  <li>Certified pest control professionals</li>
                </ul>
              </div>
              <div className="col-md-6 no_padding step_container_img">
                <img src="/images/step2-pest-control.webp" className="img-fluid w-100" alt="Pest Control Near You"/>
              </div>
            </div>
          </Step>
          <Step title="Pest Protection">
            <div className="row">
              <div className="col-md-6 step_container_text">
                <p>Ongoing monitoring to ensure treatment success.</p>
              </div>
              <div className="col-md-6 no_padding step_container_img">
                <img src="/images/step3-pest-control.webp" className="img-fluid w-100" alt="Pest Control Near You"/>
              </div>
            </div>
          </Step>
        </Stepper>
      </section>
      <WhyAkkad />
      <FAQs faqs="PestControlForSchoolsDubai" title="FAQ's Pest Control For Schools In Dubai" />
      <Commercial />
    </>
  );
};

export default SchoolPestControlDubai;

export const metadata = {
    title: "Pest Control for Schools in Dubai | Safe & Effective Solutions",
    description: "Keep your school safe with our child-friendly pest control services in Dubai. Learn about our pricing, solutions, and commitment to safety.",
};
