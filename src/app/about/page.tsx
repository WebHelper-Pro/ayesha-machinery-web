import { BarChart3, CircleCheckBig } from "lucide-react";
import PageHero from "@/components/PageHero";
import About from "@/components/About";

export default function AboutPage() {
  return (
    <main>
      {/* ================= HERO ================= */}
      <PageHero
        title="About Us"
        subtitle="Trusted pump solutions for every application"
        image="/images/about-hero.jpg"
      />

      {/* ================= WHO WE ARE ================= */}
      <section className="commitment-section">
        <div className="commitment-header">
          <h2>Who We Are</h2>
          <p>
            AYESHA MACHINERY is a leading distribution house of various reputed & trusted
            brands, serving the Jharkhand market for over three decades with
            reliable pump solutions, motors, pipes, and accessories. We offer the following Products & Services all over the Jharkhand Market.</p>
        </div>

        {/* ================= SERVICES, PRODUCTS, MISSION & VISION ================= */}
        <section className="bg-gray-50 py-16">
          <div className="max-w-5xl mx-auto px-4 space-y-8">

            {/* PRODUCTS & SERVICES */}
            <div className="mission-card flex gap-4 items-start">
              <div className="icon-box bg-green-100 rounded-lg">
                <CircleCheckBig className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Products & Services</h3>
                <ul>
                  <li>Agriculture Pumps - Submersible pumps, Centrifugal monoblocks, Coupled type horizontal split casing and Compressor.</li>
                  <br />
                  <li>Industrial & Chemical Pumps, MUD & Slurry Pumps, High Head & Pressure Pumps, Gear Pumps & Others.</li>
                  <br />
                  <li>INDUCTION MOTORS of various Range, RPM & Voltage.</li>
                </ul>
                <p>
                  We are leading suppliers of PUMPS, PIPES & other product range through our large dealer network throughout Jharkhand. We are associated with popular & renewal world class brands like Kirlosker, Texmo, Falcon, Ashirwad, Sharp Point, J.K & others various reputed & trusted brands.
                </p>
              </div>
            </div>
            {/* Tailered Solution */}
            <div className="mission-card flex gap-4 items-start">
              <div className="icon-box bg-purple-100 rounded-lg">
                <CircleCheckBig className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Tailored Solution</h3>
                <p className="text-gray-600">
                  We pride ourselves on delivering tailored solutions that meet the unique needs of each client.
                  Our extensive experience allows us to provide expert application consultancy, ensuring our clients to select the precise pump models required for trouble-fee and long-lasting service. Whether for residential, agricultural or even industrial use, we deliver engineering excellence that ensures maximum efficieny.
                </p>
                <p>At AYESHA MACHINERY, we combine decades of heritage with modern technology to provide Jharkhand with the Complete Solution for water and industrial machinery.
                </p>
              </div>
            </div>

            {/* VISION */}
            <div className="mission-card flex gap-4 items-start">
              <div className="icon-box bg-blue-100 rounded-lg">
                <CircleCheckBig className="text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Vision</h3>
                <p className="text-gray-600">
                  To become a leading and trusted pump solutions brand known
                  for innovation, efficiency, and customer-centric service.
                </p>
              </div>
            </div>

            {/* MISSION */}
            <div className="mission-card flex gap-4 items-start">
              <div className="icon-box bg-purple-100 rounded-lg">
                <BarChart3 className="text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">Our Mission</h3>
                <p className="text-gray-600">
                  To provide high-quality, reliable motor pump solutions that
                  enhance productivity, reduce operational costs, and deliver
                  long-term value to our customers.
                </p>
              </div>
            </div>


          </div>
        </section>
      </section>


      {/* STATS (UNCHANGED – JUST CENTERED BETTER) */}
      <div className="about-stats text-white rounded-xl p-8 flex flex-col md:flex-row justify-between text-center gap-6 mt-16">
        <div>
          <h3 className="text-3xl font-bold">24/7</h3>
          <p className="text-sm opacity-90">Support</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">300+</h3>
          <p className="text-sm opacity-90">Clients</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">30+</h3>
          <p className="text-sm opacity-90">Years Experience</p>
        </div>
      </div>

      <About />
    </main>
  );
}
