import {
  ShieldCheck,
  Zap,
  Wrench,
  Headphones,
} from "lucide-react";

export default function About() {
  const commitments = [
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Assurance",
      desc: "Strict quality checks to ensure long-lasting performance.",
    },
    {
      icon: <Zap size={28} />,
      title: "High Efficiency",
      desc: "Energy-efficient pumps that reduce operating costs.",
    },
    {
      icon: <Wrench size={28} />,
      title: "Expert Support",
      desc: "Technical guidance from experienced professionals.",
    },
    {
      icon: <Headphones size={28} />,
      title: "After Sales Service",
      desc: "Reliable service and customer support you can trust.",
    },
  ];

  return (
    <section className="commitment-section">
      <div className="commitment-header">
        <h2>Our Commitment</h2>
        <p>
          Everything you need for reliable and efficient pumping solutions
        </p>
      </div>

      <div className="commitment-curve">
        <div className="commitment-items">
          {commitments.map((item, i) => (
            <div key={i} className="commitment-card">
              <div className="commitment-icon">
                {item.icon}
              </div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
