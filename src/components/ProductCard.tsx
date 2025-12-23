import Link from "next/link";
import { FileText, BarChart2 } from "lucide-react";

export default function ProductCard({ product }: any) {
  return (
    <div className="product-card advanced">
      <img src={product.image} alt={product.name} />

      <h3>{product.name}</h3>

      <div className="product-icons">
        <span><BarChart2 /> High Performance</span>
        <span><FileText /> Datasheet</span>
      </div>

      <div className="product-actions">
        <a href={product.datasheet} target="_blank">Datasheet</a>
        <Link href={`/products/${product.id}`}>Details</Link>
      </div>
    </div>
  );
}
