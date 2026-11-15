import Image from "next/image";

export default function PromoBanner({ imageSrc }) {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <a
            href="https://wa.me/97144251557?text=Hello%20I%20want%20to%20get%20the%20Ramadan%20pest%20control%20offer"
            target="_blank"
            rel="noopener noreferrer"
            className="d-block d-lg-none"
          >
            <Image
              src={imageSrc}
              alt="Ramadan Pest Control Offer"
              width={1920}
              height={600}
              className="img-fluid rounded w-100"
              priority
            />
          </a>
        </div>
      </div>
    </div>
  );
}
