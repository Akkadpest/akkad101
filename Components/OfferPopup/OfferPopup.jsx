"use client";
import { useEffect, useState } from "react";

export default function OfferPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("offerPopupClosed")) {
      setTimeout(() => setShow(true), 1500);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      className="overlay"
      onClick={() => {
        localStorage.setItem("offerPopupClosed", "true");
        setShow(false);
      }}
    >
      <div
        className="popup"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="close"
          onClick={() => {
            localStorage.setItem("offerPopupClosed", "true");
            setShow(false);
          }}
        >
          ×
        </button>

        <div className="left">
          <img
            src="/images/pest-expert.jpg"
            alt="Certified Pest Control Expert"
          />
        </div>

        <div className="right">
          <h2>You’ve Got 35% Discount</h2>
          <p>
            As a visitor to our website, you are eligible for a
            <strong> 35% discounted pest control service</strong>.
          </p>

          <div
            dangerouslySetInnerHTML={{
              __html: `
<style>
  #mc_embed_signup {
    width: 100% !important;
    background: transparent !important;
    font-family: inherit !important;
  }
  #mc_embed_signup h2,
  .indicates-required {
    display: none !important;
  }
  #mc_embed_signup input.email,
  #mc_embed_signup input[type="email"] {
    width: 100% !important;
    padding: 12px !important;
    border-radius: 6px !important;
    border: 1px solid #ccc !important;
    margin-bottom: 12px !important;
  }
  #mc-embedded-subscribe {
    width: 100% !important;
    background: #1f7a3f !important;
    color: #fff !important;
    padding: 12px !important;
    border-radius: 6px !important;
    font-weight: 600 !important;
    border: none !important;
    cursor: pointer;
  }
</style>

<div id="mc_embed_signup">
  <form
    action="https://pestcontrol.us15.list-manage.com/subscribe/post?u=e0bbafa9ea84e1ff865e9a9b7&id=e5c5137957&f_id=0096c2e1f0"
    method="post"
    target="_blank"
  >
    <label>Email address</label>
    <input type="email" name="EMAIL" required />
    <input
      type="submit"
      value="Confirm My Discount"
      id="mc-embedded-subscribe"
    />
  </form>
</div>
              `,
            }}
          />

          <small>
            Municipality approved · Certified technicians · Call center will contact you
          </small>
        </div>
      </div>

      <style jsx>{`
        .overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.65);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }

        .popup {
          background: #fff;
          max-width: 760px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.35);
          position: relative;
        }

        .left img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .right {
          padding: 40px;
        }

        h2 {
          margin-bottom: 12px;
          font-size: 24px;
          font-weight: 600;
        }

        p {
          color: #555;
          margin-bottom: 20px;
          font-size: 15px;
          line-height: 1.5;
        }

        small {
          display: block;
          margin-top: 14px;
          color: #777;
          font-size: 12px;
        }

        .close {
          position: absolute;
          top: 14px;
          right: 18px;
          background: none;
          border: none;
          font-size: 22px;
          cursor: pointer;
          color: #555;
        }

        .close:hover {
          color: #000;
        }

        @media (max-width: 768px) {
          .popup {
            grid-template-columns: 1fr;
          }
          .left {
            display: none;
          }
          .right {
            padding: 28px;
          }
        }
      `}</style>
    </div>
  );
}
