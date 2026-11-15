import React from 'react'
import Link from "next/link";

const SanitizingService = () => {
  return (
    <div> <h1 className="container my-4 mini_banner_title">
Sanitizing and Disinfection Service
  </h1>
  <section className="py-5 light_gray">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-12">
        <div className=" pb-3 ">
          <div className="pb-3">
            <h2 className="akkad_heading_one fw-700 black"> </h2>
            <p>
              Sanitizing is used in home apartments or villas to get rid of food
              spills, crumbs and food particles. By sanitizing your property,
              you are eliminating the growth of pest infestation before it
              occurs.
            </p>
            <div className="col-md-6 pb-3">
              <h2 className="akkad_heading_one fw-700 black">You are here</h2>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb mt-1">
                  <li className="breadcrumb-item">
                    <Link href="/"> Home </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <Link href="/sanitizing-service/"> Sanitizing service </Link>
                  </li>
                </ol>
              </nav>
            </div>
            <p>
              Disinfection is adding another layer of protection to stop the
              spread of virus and bacteria that pests carry around.
            </p>
            <p>
              Certain pests, such as cockroaches and ants, are attracted to
              moisture-rich environments. Food particles often retain moisture,
              creating an ideal habitat for these pests to thrive. Moisture also
              enhances the odor of food, making it more enticing to pests.
            </p>
            <p>
              Rats and rodents are attracted to areas such as food left0vers and
              bin bags.
            </p>
            <p>
              You can stop these infestations by consulting Akkad pest control
              company
            </p>
            <div className="mceTemp" />
            <div
              id="attachment_1405"
              className="wp-caption alignnone"
            >
              <Link href="images/disin.webp">
                <img
                  className="size-medium wp-image-1405"
                  src="/images/disin.webp"
                  style={{maxWidth:'300px',width:'100%'}}
                />
              </Link>
              <p id="caption-attachment-1405" className="wp-caption-text">
                Disinfection service
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default SanitizingService
export const metadata = {
  title: "Professional Sanitizing Services | Ensure a Safe & Clean Environment",
  description:
    "Keep your home and business safe with our professional sanitizing services. Our team uses effective techniques and eco-friendly products to eliminate germs and bacteria, ensuring a clean and healthy environment. Contact us today for a comprehensive sanitization solution!",
};