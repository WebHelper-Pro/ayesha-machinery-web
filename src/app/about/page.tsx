import { Target, BarChart3 } from "lucide-react";
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
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          
          {/* TEXT */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Ayesha Machinery is a trusted name in motor pump solutions,
              delivering reliable, energy-efficient products for agriculture,
              residential, and commercial applications. Our focus is on quality,
              performance, and long-term customer satisfaction.
            </p>
          </div>

          {/* STATS */}
          <div className="about-stats text-white rounded-xl p-8 flex flex-row md:flex-row justify-between text-center gap-6">
            <div>
              <h3 className="text-3xl font-bold">24/7</h3>
              <p className="text-sm opacity-90">Support</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">300+</h3>
              <p className="text-sm opacity-90">Clients</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">8+</h3>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4 space-y-8">

          {/* MISSION */}
          <div className="mission-card flex gap-4 items-start">
            <div className="icon-box bg-purple-100 rounded-lg">
              <Target className="text-purple-600" />
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

          {/* VISION */}
          <div className="mission-card flex gap-4 items-start">
            <div className="icon-box bg-blue-100 rounded-lg">
              <BarChart3 className="text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Our Vision</h3>
              <p className="text-gray-600">
                To become a leading and trusted pump solutions brand known
                for innovation, efficiency, and customer-centric service.
              </p>
            </div>
          </div>

        </div>
      </section>

      <About />
    </main>
  );
}
