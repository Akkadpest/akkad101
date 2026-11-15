"use client";
import React, {useState, useEffect} from "react";
import { Drawer } from "vaul";
import ServicesFAQs from "../ServicesFAQs";
const SERVICES = [
  {
    title: "Inspection",
    desc: "inspection will be by specialists visit your home to determine the extent of the infestation and identify the termites' source. Using advanced technology, we pinpoint the affected areas, laying the groundwork for effective treatment.",
    img: "termite-detector.webp",
  },
  {
    title: "Doors frame and windows",
    desc: "We begin by addressing visible signs of termites, especially around doors and window frames. We drill small holes in these areas to halt the spread of termites, ensuring minimal disruption to your home.",
    img: "Rectangle-4104.webp",
  },
  {
    title: "Drilling",
    desc: "Drilling into the floor is a critical part of our process, done with the utmost care to avoid electrical wiring. We use special scanners to locate electrical pipes, ensuring a safe and effective treatment.",
    img: "Rectangle-4105.webp",
  },
  {
    title: "Injection Chemical",
    desc: "Once drilling is complete, we inject a potent anti-termite treatment into the holes. Our low-pressure injection method allows the chemical to permeate deeply, reaching the sand layer for thorough dispersion.",
    img: "Rectangle-4106.webp",
  },
  {
    title: "Fire Wall System and Restoration",
    desc: "After treatment, we seal all holes with color-matched cement, forming a protective 'Fire Wall' system. This innovative approach offers protection for more than 10 years.",
    img: "Rectangle-4107.webp",
  },
];

const TermiteControl = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);



  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  return (
    <Drawer.Root shouldScaleBackground open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
      <Drawer.Trigger asChild>
        <li onClick={openDrawer}>
          <div className="closebtn">
            <img
              src={`/images/services/termites.webp`}
              className={"img-fluid borderd_radius"}
              alt="Termite Control"
            />
            <div className="bugs_grid text-center black">
              <h4 className="mb-0 fw-700 fs-16 pest_control_service_post_title hght-7">
                Termites Control
              </h4>
            </div>
          </div>
        </li>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="Overlay_popup" />
        <Drawer.Content className="bg-light d-flex flex-column rounded-top-4  overflow-hidden border h-75 drawer_width m-auto mt-24 fixed-bottom fixed-left fixed-right">
          <Drawer.Close className="outline-0 border-0 mx-4 my-2 bg-light d-flex position-relative" onClick={closeDrawer}>
            <div id="fixed_clsed">
              <a className="fixed_clsed ">
                <img
                  src="/images/close_btn.png"
                  style={{ width: "30px", backgroundColor: "#ffffff00" }}
                />
              </a>
            </div>
            <div className="drawer-line " />
          </Drawer.Close>
          <div className="p-4 bg-light rounded-top-10px overflow-auto flex-grow-1 row m-0">
            <div className="col-12 m-auto w-100">
              <h2 className="global_title big_title mb-1 text-center">
                Termite Control Solution
              </h2>
              <hr className="custom_hr" />

              {SERVICES.map((item, index) => (
                <div key={index} className="row align-items-center">
                  <div className="col-md-12">
                    <h5 className="fw-700 mt-4 mb-1 black fs-20 work_title">
                      {item.title}
                    </h5>
                    <p className="mb-4">{item.desc}</p>
                  </div>
                  <div className="col-md-12">
                    <img
                      src={`/images/web_popup/${item.img}`}
                      className="img-fluid image-type-1 rounded"
                      alt=""
                    />
                    <div className="mt-2" />
                  </div>
                </div>
              ))}

              <p className="mt-4">
                Warranty usually 5 years for termite . also depending on area
                your premises in . Life warranty : to get life warranty from
                termite its easy just you need to make injection chemical every
                2 years after finishing first 5 years from treatment , this
                service available with Akkad we can provide you this service
                free of charge , if services done by us ,
              </p>
              <hr className="custom_hr" />

              <section className="warranty_section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <h2 className="global_title mb-4 text-center">
                        This Services come with
                      </h2>
                      <div className="mb-4 text-center">
                        <img
                          src="/images/web_popup/6month.webp"
                          className="mw-40 m-auto"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <ul className="checkmark_list ps-0 mb-4">
                        <li>
                          Approval Pest Control Technician from Dubai &amp; Abu
                          Dhabi municipality
                        </li>
                        <li>Approval Certificate Services</li>
                        <li>Approval pesticide Materials</li>
                      </ul>
                      <div className="mb-4">
                        <p className="call_back">
                          Unlimited Call out if insects Come back
                        </p>
                      </div>
                      <img
                        src="/images/web_popup/doc.webp"
                        className="img-fluid image-type-1"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
export default TermiteControl;
