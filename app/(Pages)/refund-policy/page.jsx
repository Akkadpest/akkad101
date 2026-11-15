export const metadata = {
  title: "Refund Policy | Akkad Pest Control",
  description:
    "Refund policy of Akkad Pest Control. Learn when refunds are applicable and how service-related issues are handled in compliance with Dubai Municipality regulations.",
};

export default function RefundPolicyPage() {
  return (
    <main className="container py-5">
      <h1 className="fw-bold mb-4">Refund Policy</h1>

      <p>
        At Akkad Pest Control, we are committed to providing professional,
        municipality-compliant pest control services. This Refund Policy
        explains the conditions under which refunds may or may not be issued.
      </p>

      <h3 className="mt-4">1. Payments Made by Mistake</h3>
      <p>
        Refunds are allowed <strong>only</strong> if a payment was made by
        genuine mistake, such as:
      </p>
      <ul>
        <li>Duplicate payment</li>
        <li>Incorrect amount charged</li>
        <li>Payment made without requesting a service</li>
      </ul>
      <p>
        Such refund requests must be reported within <strong>48 hours</strong>
        of payment and before any service is delivered.
      </p>

      <h3 className="mt-4">2. No Refund After Service Delivery</h3>
      <p>
        Once a pest control service has been carried out,{" "}
        <strong>no refunds will be issued</strong>. Pest control is a
        professional service involving labor, chemicals, equipment, and
        municipality-regulated procedures.
      </p>

      <h3 className="mt-4">3. Service Effectiveness & Warranty</h3>
      <p>
        If the service outcome is not satisfactory or pests reappear, Akkad
        Pest Control does <strong>not</strong> offer refunds. Instead:
      </p>
      <ul>
        <li>
          We will re-attend the site and repeat treatment as per the agreed
          service scope
        </li>
        <li>
          All re-treatments are conducted according to Dubai Municipality
          guidelines
        </li>
        <li>
          Services continue until the issue is resolved within the warranty
          or contract terms
        </li>
      </ul>

      <h3 className="mt-4">4. Municipality Compliance</h3>
      <p>
        Pest control results depend on environmental conditions, hygiene,
        structural issues, and customer cooperation. Our obligation is to
        deliver treatments according to Dubai Municipality regulations, not
        to guarantee instant eradication.
      </p>

      <h3 className="mt-4">5. Non-Refundable Situations</h3>
      <ul>
        <li>Change of mind after service</li>
        <li>Customer unavailability after booking</li>
        <li>Failure to follow post-treatment instructions</li>
        <li>External factors beyond our control</li>
      </ul>

      <p className="mt-4">
        By booking our services, customers acknowledge and accept this Refund
        Policy.
      </p>
    </main>
  );
}
