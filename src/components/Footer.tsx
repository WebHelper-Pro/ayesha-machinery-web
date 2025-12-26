import Link from "next/link";
import { Facebook, Instagram, Download } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* BRAND + CONTACT */}
        <div>
          <Link href="/">
            <img
              src="/images/logo.png"
              alt="Ayesha Machinery"
              className="footer-logo"
            />
          </Link>

          <div className="footer-contact">
            <p>Ayesha Machinary, 2, Dr.Fatehullah Rd, Lower Bazaar, Ranchi, Jharkhand 834001</p>
            <p>📞 +91 9835500218</p>
            <p>✉️ Ayeshamachinery007@gmail.com</p>
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h4>Useful Links</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* DOWNLOAD RESOURCES */}
        <div>
          <h4>Downloads</h4>
          <a href="/pdf/full-catalog.pdf" target="_blank">
            <Download size={16} /> Product Catalog
          </a>
          {/* <a href="/pdf/company-profile.pdf" target="_blank">
            <Download size={16} /> Company Profile
          </a> */}
        </div>

        {/* SOCIAL */}
        <div>
          <h4>Follow Us</h4>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=61557806794917" target="_blank" rel="noopener noreferrer"><Facebook /></a>
            <a href="https://www.instagram.com/aariz_imran007" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Ayesha Machinery. All rights reserved.
      </div>
    </footer>
  );
}
