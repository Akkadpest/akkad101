import Link from "next/link";

export default function WhatsAppBooking() {
  return (
    <section className="w-full flex justify-center py-12">
      <Link
        href="https://wa.me/97143523678?text=Hello%20Akkad%20Pest%20Control,%20I%20would%20like%20to%20book%20a%20service."
        target="_blank"
        className="
          inline-flex
          items-center
          justify-center
          bg-green-600
          hover:bg-green-700
          text-white
          text-lg
          font-semibold
          px-14
          py-4
          rounded-full
          shadow-md
          transition-all
          duration-300
        "
      >
        Talk To Our Consultant
      </Link>
    </section>
  );
}
