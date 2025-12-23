import {
  ShieldCheck,
  Zap,
  Wrench,
  Truck,
  BadgeCheck,
  Headphones,
} from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      icon: <ShieldCheck size={36} />,
      title: "Warranty Protection",
      desc: "Comprehensive warranty support on all products.",
    },
    {
      icon: <Zap size={36} />,
      title: "High Efficiency",
      desc: "Energy-efficient pumps that reduce operating costs.",
    },
    {
      icon: <Wrench size={36} />,
      title: "Expert Installation",
      desc: "Professional guidance and installation support.",
    },
    {
      icon: <Truck size={36} />,
      title: "Fast Delivery",
      desc: "Reliable delivery across regions.",
    },
    {
      icon: <BadgeCheck size={36} />,
      title: "Certified Products",
      desc: "Products meet national and international standards.",
    },
    {
      icon: <Headphones size={36} />,
      title: "After Sales Support",
      desc: "Dedicated customer support team.",
    },
  ];

  return (
    <section className="section">
      <h2 className="section-title">Why Choose Ayesha Machinery</h2>
      <p className="section-subtitle">
        Trusted solutions backed by quality, service and experience
      </p>

      <div className="container grid-3">
        {points.map((p, i) => (
          <div key={i} className="why-card">
            <div className="why-icon">{p.icon}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
