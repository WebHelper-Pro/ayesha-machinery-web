import { notFound } from "next/navigation";
import { productCatalog } from "@/data/products";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  const title = slug.replace(/-/g, " ");

  return {
    title: `${title} | Ayesha Machinery`,
    description:
      "High-performance motor pumps for agriculture, residential and commercial applications by Ayesha Machinery.",
    openGraph: {
      title: `${title} | Ayesha Machinery`,
      description:
        "Reliable and energy-efficient motor pumps designed for long service life.",
      type: "website",
    },
  };
}

/* ================= PAGE ================= */
export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;

  const product =
    Object.values(productCatalog)
      .flatMap((cat) => Object.values(cat.categories))
      .flat()
      .find((p) => p.id === slug);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container two-col">
        {/* IMAGE */}
        <div
          className="image-box"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        />

        {/* CONTENT */}
        <div>
          <h1 className="page-title">{product.name}</h1>

          <p className="mt-4 text-gray-600">
            High-performance motor pump designed for durability, efficiency,
            and long service life.
          </p>

          <ul className="mt-4 list-disc ml-6 text-gray-600">
            <li>Energy efficient motor</li>
            <li>Heavy-duty construction</li>
            <li>Low maintenance</li>
            <li>Suitable for continuous operation</li>
          </ul>

          {product.datasheet && (
            <a
              href={product.datasheet}
              target="_blank"
              className="btn-primary mt-6 inline-block"
            >
              Download Datasheet
            </a>
          )}
        </div>
      </div>

      {/* SPECIFICATION SECTION */}
      <div className="section light-bg">
        <h2 className="section-title">Technical Specifications</h2>

        <div className="spec-table">
          <div><strong>Motor Body</strong></div><div>Cast Iron / Aluminium</div>
          <div><strong>Voltage</strong></div><div>180–240V / 350–440V</div>
          <div><strong>Applications</strong></div><div>Irrigation, Domestic, Industrial</div>
          <div><strong>Protection</strong></div><div>Thermal Overload</div>
        </div>
      </div>
    </section>
  );
}
