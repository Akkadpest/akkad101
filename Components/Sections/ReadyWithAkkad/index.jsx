import Link from "next/link";
import React from "react";
const READY_AKKAD_LINKS = [
  {
    text: "Pest Control",
    href: "pest-control",
    icons: "insect.webp",
  },
  {
    text: "Termite control",
    href: "termite-control",
    icons: "insect.webp",
  },
  {
    text: "Commercial control",
    href: "commercial-pest-control",
    icons: "insect.webp",
  },
  {
    text: "Commercial control",
    href: "commercial-pest-control",
    icons: "insect.webp",
  },
  
];

const ReadyWithAkkad = () => {
  return (
    <section className="ready_to  hide-on-mobile">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="text-center pb-3 ">
              <h3 className=" fw-700 text-white ">
              Ready to start with Akkad ?
              </h3>
            </div>
            <ul className="ps-0 mb-3 banner_btns footer_btns">
              {READY_AKKAD_LINKS.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <img
                      src={`/images/${item.icons}`}
                      className="img-fluid"
                      alt={item.text}
                    />
                    <span>{item.text} </span>{" "}
                    <i className="fa fa-angle-right" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/our-services" className="view_more_services">
              <span className="pe-1 ">View More Services</span>{" "}
              <i className="fa fa-angle-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyWithAkkad;
