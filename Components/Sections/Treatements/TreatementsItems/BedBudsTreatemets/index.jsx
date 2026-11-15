"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Drawer } from "vaul";

const BudBudsTreatements = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash === "#bedbugs_instructions") {
      setIsDrawerOpen(true);
    }
console.log(window.location.hash)
    const handlePopState = () => {
      if (window.location.hash === "#bedbugs_instructions") {
        setIsDrawerOpen(true);
      } else {
        setIsDrawerOpen(false);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const openDrawer = (e) => {
    e.preventDefault(); 
    setIsDrawerOpen(true);
    window.history.pushState(null, "", "#bedbugs_instructions"); 
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    window.history.pushState(null, "", window.location.pathname); 
  };

  return (
    <Drawer.Root
      shouldScaleBackground
      open={isDrawerOpen}
      onOpenChange={setIsDrawerOpen}
    >
      <Link
        href="#bedbugs_instructions"
        onClick={openDrawer}
        className="closebtn mb-0 w-auto mx-1 fs-14 link-hover"
      >
        Bed Bugs Treatment Instruction
      </Link>
      <Drawer.Portal>
        <Drawer.Overlay className="Overlay_popup" />
        <Drawer.Content className="bg-light d-flex flex-column rounded-top-4 overflow-hidden border h-75 drawer_width m-auto mt-24 fixed-bottom fixed-left fixed-right">
          <Drawer.Close
            className="outline-0 border-0 mx-4 my-2 bg-light d-flex position-relative"
            onClick={closeDrawer}
          >
            <img
              src="/images/close_btn.png"
              style={{ width: "30px", backgroundColor: "#ffffff00" }}
            />
            <div className="drawer-line" />
          </Drawer.Close>
          <div className="p-4 bg-light treatement-text-color rounded-top-10px overflow-auto flex-grow-1">
            <Drawer.Title className="text-center">
              <h3 className="text-center">Bed Bugs Treatment Instruction</h3>
            </Drawer.Title>
            <h4 className="text-center fw-bold">Before Pest Control Arrival</h4>
            <div className="container">
              <ol className="fw-600">
                <li>Clean the house thoroughly before the exterminator's visit to remove competing food sources for the insects.</li>
                <li>Store open food and remove items from countertops.</li>
                <li>Cover or store baby toys and supplies.</li>
                <li>Provide the exterminator with full access to areas with cockroach activity.</li>
                <li>Inform the exterminator of any allergies, pregnancies, or infants in the home.</li>
                <li>Cover fish bowls and tanks securely.</li>
                <li>Turn off air conditioning during and after treatment.</li>
                <li>Ventilate the house by opening windows upon returning home.</li>
                <li>Protect items like food, utensils, toothbrushes, and toys.</li>
                <li>Cover aquariums with impermeable sheets.</li>
                <li>Ensure all doors and windows are closed during treatment.</li>
                <li>Remove children and pets from the home during pest control procedures.</li>
              </ol>
              <h3 className="text-center fw-bold">After Pest Control</h3>
              <p className="fw-bold fs-5 text-center">Evacuate the area for 3-4 hours after pest control treatment.</p>
              <h4>Cleaning</h4>
              <ol className="fw-600">
                <li>Clean your home thoroughly.</li>
                <li>Use a broom, vacuum cleaner, and mop to get rid of dead pests, droppings, and leftover chemicals.</li>
                <li>Open all windows to improve ventilation.</li>
                <li>Wash items like children's toys and any items remained with water.</li>
                <li><span className="fw-bold">Change bed sheet &amp; pillow cover.</span></li>
                <li><span className="fw-bold">You may notice insects are crawling after treatment; this effect is from the pesticide. Don't panic; this is a normal reaction after treatment.</span></li>
              </ol>
              <h3>Disposal</h3>
              <ol className="fw-600">
                <li>Properly dispose of any dead pests or debris.</li>
                <li>Place them in a sealed bag or container.</li>
                <li>Place the sealed bag or container in an outdoor trash bin.</li>
                <li>Do not remove or open bait stations.</li>
                <li>Do not touch or remove any gel that has been installed in the treated area.</li>
              </ol>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BudBudsTreatements;
