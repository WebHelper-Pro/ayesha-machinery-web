import { Download } from "lucide-react";

export default function ProductHero() {
  return (
    <section
      className="product-hero"
      style={{ backgroundImage: "url('/images/product-hero.jpg')" }}
    >
      <div className="product-hero-overlay">
        <h1>Product Catalog</h1>
        <p>
          Explore our complete range of high-performance motor pumps for
          Agriculture, Residential & Commercial applications.
        </p>

        {/* DOWNLOAD CATALOG BUTTON */}
        <div className="catalog-download-box">
          <a
            href="/pdf/full-catalog.pdf"
            target="_blank"
            className="catalog-btn"
          >
            <Download size={18} />
            Download Full Product Catalog
          </a>
        </div>
      </div>
    </section>
  );
}
