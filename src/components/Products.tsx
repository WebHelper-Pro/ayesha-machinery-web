import Link from "next/link";

export default function Products() {
  const categories = [
    {
      title: "Agriculture Pumps",
      desc: "High-performance pumps designed for irrigation and farming needs.",
      image: "/images/agriculture-pump.jpeg",
      link: "/products?category=agriculture",
    },
    {
      title: "Residential Pumps",
      desc: "Reliable pumps for homes, apartments and domestic water supply.",
      image: "/images/residential-pump.jpg",
      link: "/products?category=residential",
    },
    {
      title: "Commercial Pumps",
      desc: "Heavy-duty pumps for industries, buildings and commercial setups.",
      image: "/images/commercial-pump.jpg",
      link: "/products?category=commercial",
    },
  ];

  return (
    <section className="section light-bg">
      <h2 className="section-title">Product Catalog</h2>
      <p className="section-subtitle">
        A complete range of pumps for every application
      </p>

      <div className="container grid-3">
        {categories.map((cat, i) => (
          <div key={i} className="catalog-card">
            <img src={cat.image} alt={cat.title} />
            <div className="catalog-content">
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>

              <Link href={cat.link} className="catalog-link">
                View Products →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
