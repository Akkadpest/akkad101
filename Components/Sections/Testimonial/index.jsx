"use client";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialReviews = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    arrows:false,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1060,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  const ReviewData = [
    {
      cutomerName: "Steve Rithick",
      date: "2024-08-24",
      desc: "The guy was so polite done his job in a good manner",
      img: "/images/new_page_images/steve.png",
      star: "/images/new_page_images/review-start.svg",
    },
    {
      cutomerName: "madhuvasant prabhu",
      date: "2024-08-24",
      desc: "The company gave good and prompt service with good quality of pesticide, the effects could be seen immediately, Mr.Ser was well knowledgeable about the issue places that would lead to the roaches coming back and sprayed the pesticides accordingly",
      img: "/images/new_page_images/madhuv.png",
      star: "/images/new_page_images/review-start.svg",
    },
    {
      cutomerName: "Faiyaz Kashimji",
      date: "2024-08-24",
      desc: "Service was excellent",
      img: "/images/new_page_images/fiyaz.png",
      star: "/images/new_page_images/review-start.svg",
    },
    {
      cutomerName: "Ramchandra Saw",
      date: "2024-08-18",
      desc: "Great service from akkad pest control",
      img: "/images/new_page_images/ramch.png",
      star: "/images/new_page_images/review-start.svg",
    },
    {
      cutomerName: "Clayton Siqueira",
      date: "2024-08-16",
      desc: "The guy came today was good at his work and very polite. He explained why is this happing as gave further suggestions.",
      img: "/images/new_page_images/clayton.png",
      star: "/images/new_page_images/review-start.svg",
    },
  ];

  const handleToggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <>
      <section>
        <div className="d-flex mt-4">
          <a
            href="https://wa.me/+971504001344"
            className="fw-normal d-flex flex-row-reverse whatsapp-links my-2 mb-5"
          >
            Chat with us on WhatsApp
            <img
              src="/images/whatsapp.png"
              style={{ width: "20px" }}
              className="me-2"
              alt="whatsapp icon"
            />
          </a>
        </div>
      </section>
      <h2 className="fs-2 fw-bold mb-4 text-lightblue">Customer reviews</h2>
      <div style={{ height: "40vh" }} className="container mb-5 container-max-width">
        <Slider {...settings} style={{ height: "40vh", overflowX: "clip" }}>
          {ReviewData.map((item, index) => (
            <div
              className={`card m-2 testimonial-slider ${expandedIndex === index ? 'expanded-testimonial' : 'collapsed-testimonial'}`}
              key={index}
            >
              <div className="card-body">
                <div className="d-flex">
                  <img
                    src={item.img}
                    alt={item.cutomerName}
                    className="testimonoal-img"
                  />
                  <div
                    style={{ width: "1000px" }}
                    className="ms-3 d-flex align-center justify-content-between"
                  >
                    <div>
                      <strong className="card-title">{item.cutomerName}</strong>
                      <p
                        style={{ fontSize: "11px" }}
                        className="card-subtitle my-1 text-muted"
                      >
                        {item.date}
                      </p>
                    </div>
                    <img
                      style={{ width: "20px" }}
                      src="/images/new_page_images/google-icon.svg"
                      alt="google icon"
                    />
                  </div>
                </div>
                <div className="d-flex">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={item.star}
                      style={{ maxWidth: "17px", margin: "2px" }}
                      alt={`${item.cutomerName} star`}
                    />
                  ))}
                </div>
                <p className="card-text my-2">
                  {expandedIndex === index
                    ? item.desc
                    : item.desc.length > 127
                    ? item.desc.slice(0, 127) + "..."
                    : item.desc}
                </p>
                {item.desc.length > 127 && (
                  <button
                    onClick={() => handleToggleExpand(index)}
                    className="border-0 para bg-transparent"
                  >
                    {expandedIndex === index ? "Hide" : "Read More"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default TestimonialReviews;
