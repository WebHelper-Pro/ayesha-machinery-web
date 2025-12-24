import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-wrap">
        {/* LOGO → HOME */}
        <Link href="/" className="header-logo-link">
          <img
            src="/images/logo.png"
            alt="Ayesha Machinery"
            className="header-logo"
          />
        </Link>

        <nav className="header-nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/products">Products</Link>
          <Link href="/contact" className="header-cta">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
