import React from "react";
const PestControlSolution = () => {
  return (
    <div>
      <section>
        <div className="pestSolContainer hide-on-mobi">
          <section className="pestSolHeaderSection">
            <h1 className="pestSolTitle">
              Pest Control
              <span className="pestSolSolutionText">Solution</span>
            </h1>
            <p className="pestSolDescription">
              Eliminate bed bugs in your bedrooms and living areas, ensuring a
              peaceful and Pest free environment, We are a municipality
              certified company for professional pest control and management
              services
            </p>
          </section>

          <div className="pestSolImageContainer">
            <img
              src="/images/new-home/pest-sol.png"
              alt="Professional pest control service in action"
              className="pestSolImage"
            />
          </div>
        </div>
      </section>
      <section className="px-0 pb-0 insecTreaContainer hide-on-mobi d-block d-sm-none">
        <div className="insecTreaContentWrapper">
          <h2 className="insecTreaHeading">Inspection and Treatment</h2>
          <p className="insecTreaDescription">
            Eliminate bed bugs with our Municipality-certified pest control
            services, ensuring a peaceful, pest-free home.
          </p>
        </div>
        <div className="pestSolImageContainer-2">
          <img
            src="/images/new-home/inspec-treatement.jpg"
            alt="Professional pest control service in action"
            className="pestSolImage"
          />
        </div>
      </section>
      <section>
        <div className="pestSolContainer">
          <section className="mt-5  pestSolHeaderSection ">
            <h1 className="mb-2 pestResidentialText"> Home and Residential</h1>
            <p className="pestSolDescription">
              Our warranty period includes free treatment with unlimited
              callouts. Akkad pest control specializes in treating bugs and
              insect infestations in your home apartment or villa
            </p>
          </section>

          <div className="pestSolImageContainer-3">
            <img
              src="/images/new-home/team-working.jpg"
              alt="Professional pest control service in action"
              className="pestSolImage "
            />
          </div>
        </div>
      </section>
      <section className="comm-pest-container my-5">
        <h1 className="comm-pest-title">Commercial Pest Control In Dubai</h1>
        <p className="show-locat-desc-mobile">
          Pest-free workplace for your business or office
        </p>

       
      </section>
      <img
        src="/images/cockroacehs_bait_station.webp"
        className="w-100 hide-on-mobi"
        alt="cockroacehs bait station"
      />
      {/* <section>
        <div className="contact-agree-wrapper">
          <div className="contact-agree-container">
            <div>
            <span className="contact-agree-subtitle">  Free Pest Control</span>
            <h1 className="contact-agree-title">
            
              Contract Agreement
            </h1>
              <span className="contact-agree-subtitle">(AMC)</span>
            </div>

            <button className="contact-agree-button">Generate</button>
          </div>
        </div>
      </section> */}
    
      <section>
        <div className="contact-agree-wrapper ">
          <div className="contact-agree-container">
            <div>
            <h1 className="contact-agree-title">
            
              cockroach Bait Station
            </h1>
              <span className="contact-bait-subtitle">Our bait Stations excel at breaking the cockroach life style</span>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
};

export default PestControlSolution;
