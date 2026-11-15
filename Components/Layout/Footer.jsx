
"use client"
import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedinIn, faYoutube } from "@fortawesome/free-brands-svg-icons";
import ReadyWithAkkad from "@/Components/Sections/ReadyWithAkkad";
import Infestation  from "../Sections/Infestation";       
import CookieBanner from "../CookieBanner"
import AnalyticsLoader from "../AnalyticsLoader";
const FOOTER_LINKS = [
  {
    text: "Partners",
    links: [
      { url_text: "Franchise", url: "/franchise" },
      { url_text: "Our Partners", url: "/" },
      { url_text: "Facts & stats", url: "/facts" },
      { url_text: "Problems", url: "/problems-and-solutions" },
      { url_text: "Main Services", url: "/" },
    ],
  },
  {
    text: "Blog",
    links: [
      { url_text: "General", url: "/pest-control-sharjah" },
      { url_text: "How to", url: "/how-to-get-rid-of-termite" },
      { url_text: "Facts", url: "/facts-and-stats-to-know" },
      { url_text: "Problems & Solution", url: "/problems-and-solutions" },
    ],
  },
  {
    text: "Why With Us",
    links: [
      { url_text: "About", url: "/about-akkad" },
      { url_text: "Services", url: "our-services" },
      { url_text: "Contact Us", url: "/location/pest-control-dubai/contact-us" },
      { url_text: "Review", url: "https://www.google.com/maps/place//data=!4m3!3m2!1s0x3e5f69bd2306845f:0x3aabf7fb0ac5932d!12e1?source=g.page.m.ia._&laa=nmx-review-solicitation-ia2" },
      { url_text: "Careers", url: "careers" },
    ],
  },
];

const BootomFooter = () => {
  return (
  <section className="footer-below-banner">
    <div className="footer-below-container">
      <div className="fw-600 fs-14 text-box">
        <span>
          Copyright © 2026 Akkad Pest Control. All Rights Reserved
        </span>{" "}
        <span>|</span>{" "}
        <Link href="/terms-and-conditions">T&amp;Cs</Link>{" "}
        <span>|</span>{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>{" "}
        <span>|</span>{" "}
        <Link href="/refund-policy">Refund Policy</Link>
      </div>
    </div>
            <CookieBanner />
            <AnalyticsLoader />


    </section>
  );
};

const Footer = () => {
  return (
    <>

<ReadyWithAkkad  />
      <section className="main-footer">
        <div className="footer-container">
          <div className="row">
            <div className="col-md-3">
              <div className="text-center">
                <img
                  className="img-fluid rounded"
                  src="/wp-content/themes/akkad_english/images/2023/12/akkad-header-too1-2.jpg"
                />
              </div>
              <div className="text mt-5 text-center fw-700 fs-18 mobile-margin-top-10-imp">
                Contact with us
              </div>
              <div className="footer-block-socials text-center mt-2">
                <span className="footer-social-icon">
                  <a
                    rel="nofollow"
                    href="https://facebook.com/akkadpestcontrol"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </span>
                <span className="footer-social-icon">
                  <a
                    rel="nofollow"
                    href="https://www.instagram.com/akkadpestcontrol/"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </span>
                <span className="footer-social-icon">
                  <a rel="nofollow" href="#">
                  <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </span>
                <span className="footer-social-icon">
                  <a rel="nofollow" href="#">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </span>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row">
                {FOOTER_LINKS.map((item, index) => (
                  <div key={index} className="col-md-4 col-sm-6 col-xs-6 mobile-margin-top-40">
                    <div className="footer_item fw-700 fs-18">{item.text}</div>
                    <div className="footer_list_item mt-3">
                      {item.links.map((link, i) => (
                        <div className="footer-link" key={i}>
                          <Link href={link.url}>{link.url_text}</Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-md-4 mobile-margin-top-30">
              <iframe
                id="footer-iframe-map-1"
                data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115619.31346521864!2d55.03138374335938!3d25.098356000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69bd2306845f%3A0x3aabf7fb0ac5932d!2sAkkad%20Pest%20Control%20Services!5e0!3m2!1sen!2sin!4v1705917466103!5m2!1sen!2sin"
                height={250}
                style={{ width: "100%", border: 0, borderRadius: 10 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115619.31346521864!2d55.03138374335938!3d25.098356000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69bd2306845f%3A0x3aabf7fb0ac5932d!2sAkkad%20Pest%20Control%20Services!5e0!3m2!1sen!2sin!4v1705917466103!5m2!1sen!2sin"
              />
            </div>
          </div>
        </div>
      </section>
      <BootomFooter />
    </>
  );
};

export default Footer;
