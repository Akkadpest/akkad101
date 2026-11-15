import Head from "next/head";

export const metadata = {
  title: "Franchise Opportunity | Akkad Pest Control",
  description:
    "Become a franchise partner with Akkad Pest Control. Learn requirements, investment details, support system, and how to start your own pest control business in the UAE.",
  alternates: {
    canonical: "https://www.pestcontrol.ae/franchise",
  },
};

export default function FranchisePage() {
  return (
    <main className="container py-5">
      
      {/* HERO */}
      <section className="mb-5 text-center">
        <h1 className="fw-bold mb-3">
          Franchise Opportunity with Akkad Pest Control
        </h1>
        <p className="text-muted fs-5">
          Build a professional pest control business with a trusted brand,
          proven systems, and full operational support.
        </p>
      </section>

      {/* INTRO */}
      <section className="mb-5">
        <p>
          Starting a pest control business is not just about chemicals and
          equipment — it requires compliance, trained technicians, systems,
          customer trust, and long-term contracts. Akkad Pest Control offers a
          structured franchise model designed for serious entrepreneurs who
          want to grow sustainably in the UAE market.
        </p>
      </section>

      {/* WHY FRANCHISE */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Why Franchise with Akkad Pest Control?</h2>
        <ul>
          <li>Established and trusted pest control brand</li>
          <li>Tested operational and treatment systems</li>
          <li>Access to residential, commercial, and AMC clients</li>
          <li>Centralized CRM, booking, and reporting systems</li>
          <li>Marketing, technical, and operational support</li>
        </ul>
      </section>

      {/* WHO CAN APPLY */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Who Can Apply?</h2>
        <ul>
          <li>Business owners or investors with long-term vision</li>
          <li>Ability to manage staff and daily operations</li>
          <li>Willingness to follow company systems and standards</li>
          <li>Financial capability to cover setup and operating costs</li>
          <li>Commitment to quality, safety, and customer satisfaction</li>
        </ul>
      </section>

      {/* LEGAL */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Legal & Compliance Requirements</h2>
        <ul>
          <li>Valid trade license for pest control activity</li>
          <li>Municipality approval (Dubai / Sharjah / Abu Dhabi)</li>
          <li>Use of municipality-approved pesticides only</li>
          <li>Certified and trained technicians</li>
          <li>Compliance with environmental and safety regulations</li>
        </ul>
        <p className="mt-2">
          Akkad Pest Control provides full guidance during the approval and
          compliance process.
        </p>
      </section>

      {/* SETUP */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Franchise Setup Requirements</h2>

        <h5 className="fw-semibold">Office & Operations</h5>
        <ul>
          <li>Registered office or warehouse space</li>
          <li>Secure pesticide storage area</li>
          <li>Branded vehicles, uniforms, and safety equipment</li>
        </ul>

        <h5 className="fw-semibold mt-3">Staff & Training</h5>
        <ul>
          <li>Municipality-certified technicians</li>
          <li>Operations supervisor or manager</li>
          <li>Admin or customer support staff</li>
        </ul>
      </section>

      {/* SERVICES */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Services You Will Offer</h2>
        <ul>
          <li>Cockroach & crawling insect control</li>
          <li>Bed bug treatment</li>
          <li>Ant control</li>
          <li>Rodent control</li>
          <li>Termite treatment</li>
          <li>Mosquito & fly control</li>
          <li>Disinfection services</li>
          <li>Annual Maintenance Contracts (AMC)</li>
        </ul>
      </section>

      {/* TECHNOLOGY */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Technology & Systems</h2>
        <ul>
          <li>CRM & job management system</li>
          <li>Call tracking and booking management</li>
          <li>AMC and customer history tracking</li>
          <li>Digital service reports</li>
          <li>Complaint and ticketing system</li>
          <li>Online invoicing and payments</li>
        </ul>
      </section>

      {/* MARKETING */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Marketing & Lead Support</h2>
        <ul>
          <li>Brand identity and marketing materials</li>
          <li>Website and landing page integration</li>
          <li>Digital advertising guidance (Google & Meta)</li>
          <li>WhatsApp and email automation templates</li>
          <li>Corporate sales support</li>
        </ul>
      </section>

      {/* FINANCIAL */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Financial Structure</h2>
        <ul>
          <li>Franchise fee</li>
          <li>Training and onboarding costs</li>
          <li>Brand usage rights</li>
          <li>System and CRM access</li>
        </ul>
        <p>
          Detailed financial figures are shared after qualification to protect
          both parties.
        </p>
      </section>

      {/* TERRITORY */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Territory & Exclusivity</h2>
        <ul>
          <li>Franchise granted per defined territory</li>
          <li>No overlap without approval</li>
          <li>Territory protection based on performance</li>
        </ul>
      </section>

      {/* PROCESS */}
      <section className="mb-5">
        <h2 className="fw-bold mb-3">Franchise Application Process</h2>
        <ol>
          <li>Submit franchise inquiry</li>
          <li>Initial qualification call</li>
          <li>Business & financial review</li>
          <li>Territory discussion</li>
          <li>Franchise agreement signing</li>
          <li>Training & setup</li>
          <li>Launch operations</li>
        </ol>
      </section>

      {/* CTA */}
      <section className="text-center mt-5">
        <h2 className="fw-bold mb-3">Ready to Start?</h2>
        <p className="mb-4">
          If you are serious about building a professional pest control
          business, Akkad Pest Control offers the structure, systems, and
          support to help you succeed.
        </p>
        <a href="https://wa.me/971504001344?text=Hello I Want to Apply for Franchise Akkad Pest Control
" className="btn btn-success btn-lg">
          Apply for Franchise
        </a>
      </section>

    </main>
  );
}
