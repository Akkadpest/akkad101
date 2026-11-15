 import CustomerEmailForm from "@/Components/Sections/CustomerArea/CustomerEmailForm";

const WarrantyPage = () => (
	<div>
      <section className="py-5 light_gray">
					<div id="akkad-customer-widget" style={ { display: 'flex', 'justify-content': 'center' } }>
						  <CustomerEmailForm />
					</div>
			</section>
	</div>
)

export default WarrantyPage;
export const metadata = {
  title: "Home Pest Control Solutions | My Warranty | ",
  description:
    "Discover effective home pest control solutions to eliminate and prevent infestations. Learn how to protect your home from common pests like ants, rodents, and termites.",
};
