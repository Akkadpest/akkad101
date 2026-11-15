import Link from "next/link";
import React from "react";

const Careers = () => {
  return (
    <div>
      <h1 className="container my-4 mini_banner_title">
        Careers at Akkad Pest Control
      </h1>
      <section className="py-5 light_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className=" pb-3 ">
                <div className="pb-3">
                  <h2 className="akkad_heading_one fw-700 black"> </h2>
                  <h3>Work With Akkad Pest Control</h3>
                  <div className="col-md-6 pb-3">
                    <h2 className="akkad_heading_one fw-700 black">
                      You are here
                    </h2>
                    <nav aria-label="breadcrumb">
                      <ol className="breadcrumb mt-1">
                        <li className="breadcrumb-item">
                          <Link href="/">Home </Link>
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          <Link href="/careers"> Careers</Link>
                        </li>
                      </ol>
                    </nav>
                  </div>
                  <p>
                    Join the team at Akkad Pest Control and start a rewarding
                    career protecting homes and businesses from pests. As a top
                    pest management company in Dubai and around the UAE, we are
                    dedicated to providing excellent service and expertise. At
                    Akkad, you will have the opportunity to collaborate with
                    competent experts who value innovation, sustainability, and
                    customer happiness.
                  </p>
                  <p>
                    Whether you want to work in field operations, customer
                    service, administration, or technology, we have a variety of
                    career pathways and plenty of prospects for advancement.
                  </p>
                  <p>
                    Join us in our aim to create pest-free workplaces and have a
                    good impact on the community. Explore amazing career
                    opportunities with Akkad Pest Control today.
                  </p>
                  <p>
                    Send us your CV to {" "}
                    <a href="mailto:careers@pestcontrol.ae">
                       careers@pestcontrol.ae
                    </a>
                    and mention the position you are applying for on the
                    subject.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
export const metadata = {
  title: "Careers at Akkad | Join Our Team and Build Your Future",
  description:
    "DExplore exciting career opportunities at Akkad. Join our team and contribute to innovative projects while growing professionally in a dynamic and supportive environment.",
};