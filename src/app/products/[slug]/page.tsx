import { notFound } from "next/navigation";
import { productCatalog } from "@/data/products";

/* ================= TYPES ================= */
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

/* ================= SEO METADATA ================= */
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return {
      title: "Product Not Found | Ayesha Machinery",
    };
  }

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

  if (!slug) {
    notFound();
  }

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

          {/* FEATURES */}
          {product.features && (
            <>
              <h3 className="mt-6">Features</h3>
              <ul className="mt-3 list-disc ml-6 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </>
          )}

          {/* DATASHEET */}
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

      {/* SPECIFICATIONS */}
      {product.specifications && (
        <div className="section light-bg">
          <h2 className="section-title">Technical Specifications</h2>

          <div className="spec-table">
            {Object.entries(product.specifications).map(
              ([key, value], index) => (
                <div key={index} className="spec-row">
                  <div>
                    <strong>{key}</strong>
                  </div>
                  <div>{value}</div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
}
