import React from "react";
import FAQFOUR from "./faqsFour";
const phoneNumbers = ["+971 4 3966211", "+971 4 252 1009", "+971 4 4251557"];
const socialMedia = [
  {
    img: "/images/new-home/facebook.png",

    url: "https://facebook.com/akkadpestcontrol",
  },
  {
    img: "/images/new-home/instagram.png",

    url: "https://www.instagram.com/akkadpestcontrol/",
  },
  {
    img: "/images/new-home/xIn.png",

    url: "#",
  },
  {
    img: "/images/new-home/linkedIn.png",

    url: "#",
  },
];
const paymentMethod = [
  {
    img: "/images/new-home/tabby.png",

    url: "#",
  },
  {
    img: "/images/new-home/visa.png",

    url: "#",
  },
  {
    img: "/images/new-home/master-card.png",

    url: "#",
  },
  {
    img: "/images/new-home/pay.png",

    url: "#",
  },
];
const FooterTwo = () => {
  return (
    <footer className="footerTwo-wrapper">
        <FAQFOUR faqs="HomeFooter" title="" />
        <div className="footerTwo-container">
        <div className="footerTwo-contact">
          <img
            src="/images/new-home/logo-white.png"
            alt="AKKAD"
            className="footerTwo-logo border"
          />

          {phoneNumbers.map((number) => (
            <a key={number} href={`tel:${number}`} className="footerTwo-phone">
              Tel : {number}
            </a>
          ))}

          <p className="footerTwo-location">United Arab Emirates</p>
        </div>

        <div className="footerTwo-social">
          {socialMedia.map((platform,index) => (
            <a
              key={index}
              href={platform.url}
              className="footerTwo-social-link"
            >
              <img src={platform.img} alt="pest control" />
            </a>
          ))}
        </div>

        <div className="footerTwo-payment">
          {paymentMethod.map((method,index) => (
            <img
              key={index}
              src={method.img}
              alt="pest control payment"
              className="footerTwo-payment-logo"
            />
          ))}
        </div>

        <div className="footerTwo-apps">
          <a href="#google-play" className="footerTwo-app-link">
            <img src="/images/new-home/google-play.png" alt="Get it on Google Play" />
          </a>
          <a href="#app-store" className="footerTwo-app-link">
            <img src="/images/new-home/app-store.png" alt="Download on the App Store" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterTwo;
