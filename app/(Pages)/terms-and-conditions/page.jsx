export const metadata = {
  title: "Terms & Conditions | Akkad Pest Control",
  description:
    "Terms and conditions governing pest control services provided by Akkad Pest Control in the UAE.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="container py-5">
      <h1 className="fw-bold mb-4">Terms & Conditions</h1>

      <p>
        These Terms & Conditions govern all pest control services provided by
        Akkad Pest Control. By booking our services, you agree to these terms.
      </p>

      <h3 className="mt-4">1. Service Scope</h3>
      <p>
        Services are delivered according to the agreed scope, treatment plan,
        and Dubai Municipality regulations.
      </p>

      <h3 className="mt-4">2. Customer Responsibilities</h3>
      <ul>
        <li>Provide accurate property information</li>
        <li>Follow pre- and post-treatment instructions</li>
        <li>Ensure access to treatment areas</li>
      </ul>

      <h3 className="mt-4">3. Warranty & Follow-Up</h3>
      <p>
        Where applicable, warranty services include re-treatment only and do
        not include refunds.
      </p>

      <h3 className="mt-4">4. Health & Safety</h3>
      <p>
        Customers must inform us of allergies, pets, children, or medical
        conditions prior to treatment.
      </p>

      <h3 className="mt-4">5. Limitation of Liability</h3>
      <p>
        Akkad Pest Control is not responsible for infestation caused by poor
        hygiene, structural defects, or neighboring properties.
      </p>

      <h3 className="mt-4">6. Payments</h3>
      <p>
        All payments must be made in advance unless otherwise agreed. Refunds
        are governed strictly by our Refund Policy.
      </p>

      <h3 className="mt-4">7. Governing Law</h3>
      <p>
        These terms are governed by the laws and regulations of the United Arab
        Emirates.
      </p>
    </main>
  );
}
