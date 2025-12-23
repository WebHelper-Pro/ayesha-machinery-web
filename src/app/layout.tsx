import "@/app/globals.css";
import type { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Ayesha Machinery",
  description: "Premium motor pump solutions",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        {children}
        <Footer />
        <a
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          className="whatsapp-btn"
        >
          💬
        </a>

      </body>
    </html>
  );
}
