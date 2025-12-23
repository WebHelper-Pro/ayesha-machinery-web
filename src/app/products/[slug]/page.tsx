type ProductDetailProps = {
  params: {
    slug: string;
  };
};

export default function ProductDetail({ params }: ProductDetailProps) {
  if (!params?.slug) {
    return <p>Product not found</p>;
  }

  const productName = params.slug.replace(/-/g, " ");

  return (
    <section className="section">
      <h1 className="page-title">{productName}</h1>

      <div className="two-col">
        <img
          src="/images/placeholder-pump.png"
          alt={productName}
          className="product-detail-img"
        />

        <div>
          <h3>Features & Specifications</h3>
          <ul>
            <li>100% Copper Winding</li>
            <li>Thermal Overload Protection</li>
            <li>Energy Efficient</li>
          </ul>
        </div>
      </div>

      <h3>Applications</h3>
      <p>
        Suitable for agriculture irrigation, residential water supply,
        commercial buildings, and industrial usage.
      </p>
    </section>
  );
}
