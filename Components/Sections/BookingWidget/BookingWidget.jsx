"use client";

import Script from "next/script";

const BookingWidget = ({
  containerId = "root",
  sectionClass = "py-5 light_gray",
  scriptSrc = "https://bookingwidget.pestcontrol.ae/static/js/main.js",
  cssHref = "https://bookingwidget.pestcontrol.ae/static/css/main.css",
}) => {
  return (
    <section className={sectionClass}>
      <div id={containerId}></div>

      {/* Widget CSS */}
      <link rel="stylesheet" type="text/css" href={cssHref} />

      {/* Widget Script */}
      <Script
        src={scriptSrc}
        type="text/javascript"
        strategy="afterInteractive"
      />
    </section>
  );
};

export default BookingWidget;
