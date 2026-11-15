import Link from "next/link"; 
import React from "react";

const boraCare = () => {
  return (
    <div>
      <h1 className="container my-4 mini_banner_title">Bora-Care Wood Treatment</h1>
      <section className="py-5 light_gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className=" pb-3 ">
                <div className="pb-3">
                  <h2 className="akkad_heading_one fw-700 black"></h2>
                  <p>
                    <Link href="/images/new/bora_care">
                      <img
                        className="aligncenter wp-image-684 size-full"
                        src="/images/new/bora-care.webp"
                        alt="Bora-Care Wood Treatment"
                        style={{maxWidth:'500px',width:'100%'}}
                      />
                    </Link>
                  </p>
                  <p>
                    <strong>Bora-Care</strong> is a wood treatment that protects structures from termites, carpenter ants, and other wood-destroying insects. It penetrates deep into wood surfaces to kill and repel termites.
                  </p>

                  <h2>How Does Bora-Care Work?</h2>

                  <p>
                    Bora-Care is applied directly to wood, where it penetrates and kills any termites that consume or come into contact with it. It also prevents future infestations by making the wood unappetizing to termites.
                  </p>

                  <h3>Where Can Bora-Care Be Applied?</h3>

                  <p>
                    This product is ideal for treating wood in new construction or during repairs, as well as for protecting vulnerable areas such as crawlspaces and attics.
                  </p>

                  <h4>Advantages of Using Bora-Care</h4>

                  <p>
                    1. **Deep Penetration**: Provides long-lasting protection.<br/>
                    2. **Prevents Infestations**: Repels termites before they can infest.<br/>
                    3. **Environmentally Friendly**: No harsh chemicals or toxic fumes.<br/>
                    4. **Versatile**: Can be used on both new and existing wood structures.
                  </p>

                  <h4>Why Choose Bora-Care?</h4>

                  <p>
                    Bora-Care is perfect for anyone looking to protect wood from termites and other pests. It’s especially useful in construction or for treating wood in hard-to-reach areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default boraCare;
export const metadata = {
  title: "Bora-Care Wood Treatment",
  description:
    "Bora-Care is a wood treatment for termites and other wood-destroying insects. Learn how to apply Bora-Care to protect your home from termites.",
};
