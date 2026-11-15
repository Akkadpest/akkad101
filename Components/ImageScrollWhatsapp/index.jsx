"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ImageSlider({ images = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    checkScreen(); // run on load
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (!isMobile) return null; // 🚀 completely removes from desktop

  const whatsappLink =
    "https://wa.me/97143966211?text=Eid%20discount";

  return (
    <div className="container my-5">
      <div className="image-slider">
        {images.map((img, i) => (
          <a
            key={i}
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="image-card"
          >
            <Image
              src={img}
              alt="Ramadan Offer"
              fill
              className="image"
              priority
            />
          </a>
        ))}
      </div>

      <style jsx>{`
        .image-slider {
          display: flex;
          gap: 28px;
          overflow-x: auto;
          scroll-behavior: smooth;
        }

        .image-slider::-webkit-scrollbar {
          display: none;
        }

        .image-card {
          position: relative;
          width: 300px;
          height: 190px;
          border-radius: 18px;
          overflow: hidden;
          flex-shrink: 0;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .image-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.25);
        }

        .image {
          object-fit: cover;
        }
      `}</style>
    </div>
  );
}