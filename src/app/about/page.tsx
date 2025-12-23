import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Trusted pump solutions for every application"
        image="/images/about-hero.jpg"
      />

      {/* Section 1 */}
      <section className="section">
        <div className="container two-col">
          <div>
            <h1 className="page-title">About Ayesha Machinery</h1>
            <p>
              Ayesha Machinery is a trusted name in motor pump solutions,
              serving agriculture, residential and commercial sectors.
            </p>
            <p>
              Our focus is on delivering durable, efficient and
              cost-effective pumping solutions backed by expert support.
            </p>
            <img
              src="/images/about-1.webp"
              alt="Our Facility"
              className="about-img"
            />
          </div>

        </div>
      </section>

      {/* Section 2 */}
      <section className="section light-bg">
        <div className="container two-col">

          <div>
            <h2 className="section-title left">Our Commitment</h2>
            <p>
              We believe in long-term relationships with our customers.
              Every product we deliver is tested for performance and
              reliability.
            </p>

            <img
              src="/images/about-2.jpg"
              alt="Our Team"
              className="about-img"
            />
            <p>
              From product selection to after-sales support, we stand
              with our customers at every step.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
