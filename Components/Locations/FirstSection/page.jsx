


import React from "react";
import Link from "next/link";
import ContactForm from "@/Components/Sections/ContactForm";





const FirstSection= ({title , p1 , p2  , p3}) => {
    return (
<section className="dip_control py-5 map_article_section img-fluid">
<div className="container">
  <div className="row mt-2">
    <div className="col-md-7 mb-25">
      <div className="mb-5">
      <h1 className="fw-700 main_heading">
{title}
</h1>
<p />
{p1}
<p>{p2}
</p>
<p>
    {p3}
</p>
<p>
<Link href="/"> proactive pest control </Link> and 
<Link href="/termites/"> termite control </Link> strategies. Regular sanitation, proper waste management, and the use of 
<Link href="/"> professional pest control services </Link> are essential for long-term protection against pests.
</p>



        <p>
          <img
            src="/images_seo/image_5/al-baraha.webp"
            alt="picture showing Al Baraha road area"
            style={{ maxWidth: "540px", width: "100%" }}
          />
        </p>
        
        
        <div className="row">
          <div className="col-sm">
            <h3>We have technicians near you in Dubai</h3>
            <p>
              <strong>Address:</strong>
            </p>
            <p>
              Barsha Heights(Tecom),
              <br />
              Sheikha Noora Building,
              <br />
              Office 403, PO Box 234341
              <br />
              Dubai, UAE.
            </p>
          </div>
          <div className="col-sm">
            <h3>Contact Akkad Pest Control</h3>
            <p>&nbsp;</p>
            <div
              className="contact-button-city"
              style={{ margin: "4px" }}
            >
              <a href="tel:042521009">+971 4396 6211</a>
            </div>
            <div
              className="contact-button-city"
              style={{ margin: "4px" }}
            >
              <a href="https://wa.me/+97143966211">WhatsApp</a>
            </div>
            <div className="contact-info-2">
              <p>
                <strong>Phone:</strong> 04 252 1009
                <br />
                <strong>Email:</strong> info@pestcontrol.ae
                <br />
                <strong>Website:</strong> www.pestcontrol.ae
              </p>
            </div>
          </div>
        </div>
        <p />
      </div>
    </div>
    <div className="col-md-5">
      <div className="map_iframe mb-3">
        <p>
        <iframe
style={{ border: 0 }}
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7215.330560371381!2d55.31339934158498!3d25.281842911864196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5cadbff50da9%3A0x25de6080d7bc3082!2sAl%20Baraha%20-%20Dubai!5e0!3m2!1sen!2sae!4v1729670810197!5m2!1sen!2sae"
width="100%"
height={250}
allowFullScreen="allowfullscreen"

/>
        </p>
      </div>
      <div>
        <div className="class=">
          <h2 className="akkad_heading_one fw-700 black text-center">
            You are here
          </h2>
          <nav className="text-center" aria-label="breadcrumb">
            <Link href="/"> Home </Link>
            &gt; <Link href="/location/pest-control-dubai/contact-us"> Dubai </Link>
            &gt;
            <Link href="/pest-control-in-al-baraha"> {title}
            </Link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

<ContactForm />

</section> )};

export default FirstSection;