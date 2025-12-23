import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div>
          <img
            src="/images/ayesha-logo.png"
            alt="Ayesha Machinery"
            className="footer-logo"
          />
          <p>
            Reliable motor pump solutions for agriculture, residential and
            commercial applications.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4>Useful Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Contact */}
        <div>
          <h4>Contact</h4>
          <p>📍 India</p>
          <p>📞 +91 XXXXX XXXXX</p>
          <p>✉️ info@ayeshamachinery.com</p>
        </div>

        {/* Social */}
        <div>
          <h4>Follow Us</h4>
          <div className="footer-social">
            <Facebook />
            <Linkedin />
            <Instagram />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Ayesha Machinery. All rights reserved.
      </div>
    </footer>
  );
}
