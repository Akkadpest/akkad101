import FAQThree from '@/Components/Sections/FAQs/faqThree'
import React from 'react'

const RodentControlDubai = () => {
  return (
   <>
    <div className="container container-max-width">
    <section>
        <div className=" d-flex mt-4 ">
        <a href="https://wa.me/+971504001344" className="fw-normal d-flex flex-row-reverse whatsapp-links my-2" >

        Chat with us on WhatsApp
        <img src="/images/whatsapp.png" style={{width:"20px"}} className="me-2"  alt="whatsapp icon" />
    </a>
        </div>
        </section>
        <section className='my-2'>
            <FAQThree
            faqs="RodentControlDubai"
            title="Rodent Control FAQ"
            
          />
        </section>
    </div>
   </>
  )
}

export default RodentControlDubai
export const metadata = {
  title: "Expert Rodent Control Services in Dubai | Safe & Effective Solutions",
  description:
    "Need reliable rodent control in Dubai? Our professional team offers effective and eco-friendly solutions to eliminate mice and rats from your home or business. Ensure a pest-free environment with our expert services. Contact us today for a consultation!",
};