import React from "react";
import Agreement from "@/Components/Sections/Agreement";
import FAQs from "@/Components/Sections/FAQs";
const Amc = () => {
  return (
    <div>
      <h1 className="container my-4 mini_banner_title">Online Pest Control Annual Monthly Contract</h1>
      <section className="py-5 light_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="pb-3">
                <div className="pb-3">
                  <p>
                    Flexible online options are available for setting up your pest control contract, with choices for either an annual or monthly basis. The goal is to provide efficient, reliable pest management services that meet unique needs, whether short-term or long-term pest control solutions are required. With an easy online contract setup, you can customize your pest control plan to suit specific home or business requirements. Choose expert pest control services to maintain a pest-free environment year-round. Contracts are designed to ensure peace of mind and a safe, healthy space, backed by professional, eco-friendly pest solutions tailored to your schedule and budget.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </section>
      <Agreement />
    <FAQs faqs="faqPestControlAnnualMonthlyContract" title=" FAQs for Pest Control Annual Monthly Contract" />
    </div>
  );
};

export default Amc;
export const metadata = {
  title: "Pest Control Agreement | Flexible Monthly & Annual Contracts",
  description:
    "Set up a flexible online pest control contract, choosing annual or monthly options. Enjoy efficient, customizable pest management solutions designed for peace of mind and a pest-free environment.",
};
