"use client";
import { useState, useEffect } from "react";

const slides = [
  "/images/hero-1.jpg",
  "/images/hero-2.jpg",
  "/images/hero-3.jpg",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      4000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="hero-slider"
      style={{ backgroundImage: `url(${slides[index]})` }}
    >
      <div className="hero-overlay">
        <h1>
          Powering Agriculture, Homes & Industries
        </h1>
        <p>
          Trusted motor pump solutions engineered for performance
        </p>

        <div className="hero-actions">
          <a href="/products" className="btn-primary">View Products</a>
          <a href="/contact" className="btn-outline">Get Quote</a>
        </div>
      </div>
    </section>
  );
}
