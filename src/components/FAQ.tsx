"use client";

import { useEffect, useState } from "react";
import { Plus, X, ChevronRight } from "lucide-react";

/* ================= FAQ DATA (JSON STYLE) ================= */
const faqData = {
  general: [
    {
      q: "Which pump is best for agriculture use?",
      a: "Submersible and irrigation pumps are ideal for agriculture due to their efficiency and durability.",
    },
    {
      q: "Are your pumps energy efficient?",
      a: "Yes, our pumps are designed to deliver high efficiency with low power consumption.",
    },
    {
      q: "Do you provide warranty on products?",
      a: "Yes, all products come with standard manufacturer warranty.",
    },
  ],

  support: [
    {
      q: "Do you provide installation support?",
      a: "Yes, our technical team provides complete installation guidance.",
    },
    {
      q: "Is after-sales service available?",
      a: "Yes, we provide reliable after-sales service across India.",
    },
    {
      q: "How can I contact support?",
      a: "You can contact us via phone, email, or WhatsApp.",
    },
  ],

  installation: [
    {
      q: "Do you help with pump selection?",
      a: "Yes, we help customers choose the right pump based on application needs.",
    },
    {
      q: "Is on-site installation available?",
      a: "On-site installation support is available on request.",
    },
    {
      q: "Are installation charges extra?",
      a: "Installation charges depend on location and project scope.",
    },
  ],

  warranty: [
    {
      q: "What is the warranty period?",
      a: "Warranty typically ranges from 12 to 24 months depending on the product.",
    },
    {
      q: "What does the warranty cover?",
      a: "Warranty covers manufacturing defects and performance-related issues.",
    },
    {
      q: "How can I claim warranty?",
      a: "You can contact our support team with the purchase invoice.",
    },
  ],

  delivery: [
    {
      q: "Do you deliver across India?",
      a: "Yes, we offer nationwide delivery across India.",
    },
    {
      q: "How long does delivery take?",
      a: "Delivery usually takes 3–7 working days depending on location.",
    },
    {
      q: "Do you handle bulk orders?",
      a: "Yes, bulk and project-based orders are supported.",
    },
  ],

  misc: [
    {
      q: "Can I get a customized pump solution?",
      a: "Yes, we offer customized pump solutions based on specific requirements.",
    },
    {
      q: "Do you provide technical consultation?",
      a: "Yes, our experts provide pre-sales technical consultation.",
    },
    {
      q: "Do you supply spare parts?",
      a: "Yes, genuine spare parts are available for all products.",
    },
  ],
};

/* ================= COMPONENT ================= */

export default function FAQ() {
  const [category, setCategory] =
    useState<keyof typeof faqData>("general");
  const [open, setOpen] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="faq-glass">
      <div className="faq-head">
        <h2>Frequently Asked Questions</h2>
        <p>
          Find answers to common questions about our products and services
        </p>
      </div>

      <div className="faq-box">
        {/* ================= LEFT CATEGORIES ================= */}
        <div className="faq-left">
          {Object.keys(faqData).map((key) => {
            const k = key as keyof typeof faqData;
            const active = category === k;

            return (
              <div key={k}>
                <button
                  className={active ? "active" : ""}
                  onClick={() => {
                    setCategory(k);
                    setOpen(null);
                  }}
                >
                  {k.charAt(0).toUpperCase() + k.slice(1)}
                  <ChevronRight />
                </button>

                {/* MOBILE: QUESTIONS UNDER ACTIVE CATEGORY */}
                {isMobile && active && (
                  <div className="faq-right mobile-faq">
                    {faqData[k].map((item, i) => {
                      const isOpen = open === i;
                      return (
                        <div
                          key={i}
                          className={`faq-card ${
                            isOpen ? "open" : ""
                          }`}
                        >
                          <div
                            className="faq-question"
                            onClick={() =>
                              setOpen(isOpen ? null : i)
                            }
                          >
                            <h4>{item.q}</h4>
                            {isOpen ? <X size={18} /> : <Plus size={18} />}
                          </div>

                          {isOpen && (
                            <div className="faq-answer">
                              {item.a}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ================= RIGHT (DESKTOP ONLY) ================= */}
        {!isMobile && (
          <div className="faq-right">
            {faqData[category].map((item, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={`faq-card ${isOpen ? "open" : ""}`}
                >
                  <div
                    className="faq-question"
                    onClick={() =>
                      setOpen(isOpen ? null : i)
                    }
                  >
                    <h4>{item.q}</h4>
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </div>

                  {isOpen && (
                    <div className="faq-answer">{item.a}</div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= SEO FAQ SCHEMA ================= */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqData[category].map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.a,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
