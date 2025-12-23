"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { productCatalog } from "@/data/products";
import { Wheat, Home, Factory, Download } from "lucide-react";
import ProductHero from "@/components/ProductHero";

interface Product {
  id: string;
  name: string;
  image?: string;
  datasheet?: string;
}

export default function ProductsPage() {
  const categories = {
    agriculture: { label: "Agriculture Pumps", icon: <Wheat /> },
    residential: { label: "Residential Pumps", icon: <Home /> },
    commercial: { label: "Commercial Pumps", icon: <Factory /> },
  };

  const [active, setActive] =
    useState<keyof typeof productCatalog>("agriculture");

  const activeCategory = productCatalog[active];

  return (
    <>
      {/* HERO */}
      <ProductHero />

      <section className="section">
        {/* CATEGORY SWITCH */}
        <div className="category-switch advanced">
          {(Object.keys(categories) as Array<
            keyof typeof categories
          >).map((key) => (
            <button
              key={key}
              className={active === key ? "active" : ""}
              onClick={() =>
                setActive(key as keyof typeof productCatalog)
              }
            >
              {categories[key].icon}
              {categories[key].label}
            </button>
          ))}
        </div>

        {/* PRODUCTS */}
        {Object.entries(activeCategory.categories).map(
          ([subCat, products]) => (
            <div key={subCat} className="sub-category">
              <h2 className="sub-title">{subCat}</h2>

              <div className="product-grid">
                {(products as Product[]).map((p) => (
                  <div key={p.id} className="product-card">
                    {p.image && (
                      <Image
                        src={p.image}
                        alt={p.name}
                        width={400}
                        height={300}
                        priority
                      />
                    )}

                    <h3>{p.name}</h3>

                    <div className="product-actions">
                      {p.datasheet && (
                        <a href={p.datasheet} target="_blank">
                          Datasheet
                        </a>
                      )}
                      <Link href={`/products/${p.id}`}>
                        Details
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )
        )}
      </section>
    </>
  );
}
