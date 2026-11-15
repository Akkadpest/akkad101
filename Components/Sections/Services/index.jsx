import React from "react";
import BedBugsControl from "./ServiceItems/BedBugsControl";
import AntsControl from "./ServiceItems/AntsControl";
import CockroachesControl from "./ServiceItems/CockroachesControl";
import TermiteControl from "./ServiceItems/TermiteControl";
import RatControl from "./ServiceItems/RatControl"
import MosquitosControl from "./ServiceItems/MosquitosControl";
import FliesControl from "./ServiceItems/FliesControl";

const Services = (subject) => {
  return (
    <section className="dubai_pest mobile-margin-top-20">
      <div className="container px-home2-mobile">
        <div className="row justify-content-center">
          <div className="col-md-12 pb-3">
            <div className="text-center pb-3 pes_cont-ser_title">
              <h2 className="akkad_heading_one fw-700 black ">
                {subject.title}
              </h2>
              <p className="mb-0 mx-auto akkad_desc_one">{subject.description} </p>
            </div>
            <div className="col-md-12 insects_bg">
              <ul id="insects_boxes" className="insects ps-0 mb-0 mt-3">
                <div className="container mt-2 mb-3">
  <div className="row justify-content-center">
    <div className="col-md-6 col-12 text-center">
      <a
        href="https://wa.me/97143966211?text=Hello%20I%20want%20to%20take%20pest%20control%20consultation%20in%20Dubai"
        target="_blank"
        rel="noopener noreferrer"
        className="btn px-4 py-2 fw-semibold rounded-pill"
        style={{
          backgroundColor: "#6BBE45",
          borderColor: "#6BBE45",
          color: "#ffffff",
          fontSize: "15px"
        }}
      >
        Talk To Our Consultant
      </a>
    </div>
  </div>
</div>

                <BedBugsControl />
                <AntsControl />
                <CockroachesControl/>
                <TermiteControl/>
                <RatControl />
                <MosquitosControl />
                <FliesControl />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
