"use client";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faPhone } from "@fortawesome/free-brands-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Offices = ({ off }) => {
  console.log(off)
  return (
    <div className="container address_section">
      <div>
        <h3 className="mt-7 text-center">
          {off.title} - <Link href={off.name_url} className="fw-bold">{off.name}</Link>
        </h3>
        <p className="text-center">{off.sub_title}</p>
      </div>
      <div className="row mt-5 shadow p-5 mb-5 bg-body rounded">
        <div className="col-md-6">
          {off.tel.map((item, index) => (
            <p key={index}>
              Tel: <b>{item}</b>
            </p>
          ))}
          <p>Mob: {off.mobile}</p>
          <p>P.O Box:{off.po_box}</p>
          <p>Email : {off.email}</p>
          
            <div className="d-flex mb-4 flex-column">
              <a href={off.buttons.wa_btn.link}>
                <button className="btn btn-success my-2 fs-6 w-100 p-2 d-block">
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    title="WhatsApp"
                    className=" fs-6 me-2 text-white"
                  />
                  {off.buttons.wa_btn.title}
                </button>
              </a>

              <a href={off.buttons.call_btn.link}>
                <button className="btn btn-primary fs-6  w-100 p-2 d-block">
                  <FontAwesomeIcon
                    icon={faPhoneAlt}
                    className="fs-6 me-2 text-white "
                    title="Phone"
                  />
                  {off.buttons.call_btn.title}
                </button>
              </a>
            </div>
        </div>

        {off.map_url !== undefined && off.map_url !== "" ? (
          <div className="col-md-6">
            <iframe
              src={off.map_url}
              height={300}
              style={{ width: "100%", border: 0, borderRadius: 10 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Offices;
