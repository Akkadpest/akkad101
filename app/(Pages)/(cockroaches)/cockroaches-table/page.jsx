import React from "react";
import Link from "next/link";
export const metadata = {
  title: "Pest Control for Cockroaches in Tables | Akkad Pest Control",
  description:
    "Discover effective pest control solutions for cockroaches in your dining area. Akkad Pest Control offers expert services to ensure your tables are clean and safe for your family, eliminating health risks associated with cockroach infestations.",
};
const tableContent = [
  " Clean the Table Thoroughly: Wipe down the table surfaces with a disinfectant, paying attention to joints and crevices.",
  " Inspect the Area Around the Table: Cockroaches tend to hide under tables and in nearby areas, so check the surrounding space.",
  " Use Bait Traps: Place cockroach bait traps under and around the table to lure any hidden pests.",
  " Apply Targeted Insecticide: Akkad Pest Control applies safe insecticides near the base of tables to eliminate cockroaches without harming your home.",
  " Maintain a Clean Dining Space: Regularly clean your dining area to avoid attracting cockroaches with food crumbs."
];

const CockroachesTable = () => {
  return (
    <>
      <div className="container">
        <div className="row my-5">
          <div className="col-lg-8">
            <h2 className="my-4 mb-5">Pest Control for Cockroaches in Table</h2>
            <p className="para my-2 fw-500">
              Cockroaches hiding in and around tables can contaminate your dining area, posing health risks to your family. Akkad Pest Control offers professional pest control solutions to remove cockroaches from tables, ensuring your home remains safe and clean. Our trained technicians will thoroughly inspect and treat your tables, eliminating pests quickly and effectively.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="/images/Table.png" alt="CockroachesTable" className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <h2 className="mt-5 mb-3">
              Steps to Control Cockroaches in Table
            </h2>
            {tableContent.map((item, index) => (
              <div key={index}>
                <p className="mb-0 ps-5">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6">
            <Link href="https://www.pestcontrol.ae/customer-section/#/login" className="book_now_btn">
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CockroachesTable;
