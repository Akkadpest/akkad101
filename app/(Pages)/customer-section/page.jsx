import React from "react";

import Script from 'next/script'




const WarrantyPage = () => (
	<div>
      <section className="py-5 light_gray">
					<div id="akkad-customer-widget" style={ { display: 'flex', 'justify-content': 'center' } }></div>
					<Script src="https://customerwidget.pestcontrol.ae/static/js/main.js" type="text/javascript" />
					<link rel="stylesheet" type="text/css" href="https://customerwidget.pestcontrol.ae/static/css/main.css"/>
			</section>
	</div>
)

export default WarrantyPage;
export const metadata = {
  title: "Home Pest Control Solutions | My Warranty | ",
  description:
    "Discover effective home pest control solutions to eliminate and prevent infestations. Learn how to protect your home from common pests like ants, rodents, and termites.",
};