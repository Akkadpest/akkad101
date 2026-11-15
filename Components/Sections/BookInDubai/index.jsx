import React from "react";

const BOOKING_FLOW = [
  {
    title: "Call or WhatsApp Us",
    icon: "",
    desc: "Contact Akkad Pest Control by calling 043966211 or sending us a WhatsApp message. You may also submit a booking request through our online customer portal for quick assistance.",
    contact: "043966211",
    isWP: true,
  },
  {
    title: "Problem Discussion & Assessment",
    icon: "",
    desc: "Share details about your pest issue with our team. Let us know the type of pest, affected areas such as bedrooms (beds, wardrobes), living rooms (sofas), kitchens, bathrooms, dining areas, or outdoor spaces so we can plan the right solution.",
    contact: "+97143966211",
    isWP: true,
  },
  {
    title: "Appointment Scheduling",
    icon: "",
    desc: "Choose a convenient date and time for inspection or treatment. Our team will schedule your pest control service at your Dubai location based on availability and urgency.",
    contact: "043966211",
    isWP: false,
  },
  {
    title: "Preparation & Professional Treatment",
    icon: "",
    desc: "Before treatment, you may be asked to clear affected areas, move furniture if needed, and secure food items or personal belongings. Once ready, our Dubai Municipality-approved technicians will carry out safe and effective pest control treatment.",
    contact: "+97143966211",
    isWP: true,
  },
  {
    title: "Aftercare & Maintenance",
    icon: "",
    desc: "Follow the post-treatment instructions provided by our pest control experts. Maintaining hygiene, sealing entry points, and following preventive advice will help ensure long-term pest protection for your property.",
    contact: "043966211",
    isWP: false,
  },
];

const BookInDubai = () => {
  return (
    <div className="container py-4 py-xl-5">
      <div className="row">
        <h2 className="text-center">Book Pest Control Service in Dubai</h2>

        <div className="col-md-8 col-xl-6 mx-auto p-4">
          {BOOKING_FLOW.map((item, index) => (
            <React.Fragment key={index}>
              <div
                className="d-flex align-items-center align-items-md-start align-items-xl-center"
                style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
              >
                <div
                  className="bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center mx-4 d-inline-block bs-icon xl"
                  style={{ backgroundColor: "#73c831" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    className="bi bi-telephone-outbound"
                  >
                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"></path>
                  </svg>
                </div>

                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>

                  <a className="mx-2" href={`tel:${item.contact}`}>
                    {item.contact}
                  </a>

                  {item.isWP && (
                    <a
                      href={`https://wa.me/${item.contact.replace("+", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mx-2"
                      aria-label="WhatsApp"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                        className="bi bi-whatsapp"
                      >
                        <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93z"></path>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <hr className="my-5" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookInDubai;
