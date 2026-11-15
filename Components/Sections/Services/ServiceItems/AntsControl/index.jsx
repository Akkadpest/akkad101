"use client";
import React, {useState, useEffect} from "react";
import { Drawer } from "vaul";
import Apartment from "./Apartment";
import Villa from "./Villa";

const AntsControl = () => {
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
              src={`/images/services/ants.webp`}
              className={"img-fluid borderd_radius"}
              alt="Ants Control"
            />
            <div className="bugs_grid text-center black">
              <h4 className="mb-0 fw-700 fs-16 pest_control_service_post_title hght-7">
              Ants Control
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
          <div className=" p-4 bg-light rounded-top-10px overflow-auto flex-grow-1  ">
            <Drawer.Title className="text-center">
              Ants Control Services
            </Drawer.Title>
            <p className="text-center">Select Your Premises</p>

            <div className="m-auto d-flex justify-content-center w-100">
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <li className="mx-2">
                    <div className="popup_option_img">
                      <img src={`/images/villa_icon.png`} alt="villa" />
                      <span>Villa</span>
                    </div>
                  </li>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black opacity-100" />
                  <Drawer.Content className="bg-light d-flex flex-column rounded-top-4  overflow-hidden border h-75 drawer_width m-auto mt-24 fixed-bottom fixed-left fixed-right">
                    <Drawer.Close className="outline-0 border-0 mx-4 my-2 bg-light d-flex position-relative">
                      <div id="fixed_clsed">
                        <a className="fixed_clsed ">
                          <img
                            src="/images/close_btn.png"
                            style={{
                              width: "30px",
                              backgroundColor: "#ffffff00",
                            }}
                          />
                        </a>
                      </div>
                    </Drawer.Close>
                    <Villa />
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
              <Drawer.Root shouldScaleBackground>
                <Drawer.Trigger asChild>
                  <li className="">
                    <div className="popup_option_img">
                      <img src={`/images/apartment.png`} alt="Ants" />
                      <span>Apartment</span>
                    </div>
                  </li>
                </Drawer.Trigger>
                <Drawer.Portal>
                  <Drawer.Overlay className="fixed inset-0 bg-black opacity-100" />
                  <Drawer.Content className="bg-light d-flex flex-column rounded-top-4  overflow-hidden border h-75 drawer_width m-auto mt-24 fixed-bottom fixed-left fixed-right">
                    <Drawer.Close className="outline-0 border-0 mx-4 my-2 bg-light d-flex position-relative">
                      <div id="fixed_clsed">
                        <a className="fixed_clsed ">
                          <img
                            src="/images/close_btn.png"
                            style={{
                              width: "30px",
                              backgroundColor: "#ffffff00",
                            }}
                          />
                        </a>
                      </div>
                    </Drawer.Close>
                    <Apartment />
                  </Drawer.Content>
                </Drawer.Portal>
              </Drawer.Root>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};
export default AntsControl;
