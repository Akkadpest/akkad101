import React from "react";
const google_rivew = 5
const GoogleReview = () => {
  return (
    <div className="container container-max-width ">
      <div className="row text-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <h2 className="my-3 mb-5"></h2>
          <div>
           <a href="https://search.google.com/local/reviews?placeid=ChIJX4QGI71pXz4RLZPFCvv3qzo">
           <strong className="fw-bold pe-1  text-secondary ">4.9 Stars</strong>
            {[...Array(google_rivew)].map((_, index) => (
        <img
          key={index}
          src="/images/new_page_images/review-start.svg"
          alt="Star"
          style={{ maxWidth: "20px", margin: "2px" }}
        />
      ))}
          <img style={{width:"32px"}} src="/images/new_page_images/google-review.svg" alt="google-review" />
           </a>
          </div>
          <div style={{fontSize:"11px"}}
          className="my-2 me-4 text-secondary" >
            <span >Provided by </span>
            <a href="" className="text-secondary">review-widget.net</a>
          </div>
          <div className="my-5">
            <a className="text-white  google-review-btn" href="https://g.page/r/CS2TxQr796s6EBM/review">Leave a Google Review</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReview;
