import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-wrap">
        <img
          src="/images/logo.png"
          alt="Ayesha Machinery"
          className="header-logo"
        />

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

// // Mobile Responsive Header with Toggle Menu 
// "use client";

// import Link from "next/link";
// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Header() {
//   const [open, setOpen] = useState(false);

//   return (
//     <header className="site-header">
//       <div className="header-wrap">
//         <img
//           src="/images/ayesha-logo.png"
//           alt="Ayesha Machinery"
//           className="header-logo"
//         />

//         {/* Desktop Menu */}
//         <nav className="header-nav desktop-nav">
//           <Link href="/">Home</Link>
//           <Link href="/about">About</Link>
//           <Link href="/products">Products</Link>
//           <Link href="/contact" className="header-cta">
//             Contact
//           </Link>
//         </nav>

//         {/* Mobile Menu Icon */}
//         <button
//           className="mobile-menu-btn"
//           onClick={() => setOpen(!open)}
//         >
//           {open ? <X /> : <Menu />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {open && (
//         <div className="mobile-nav">
//           <Link href="/" onClick={() => setOpen(false)}>Home</Link>
//           <Link href="/about" onClick={() => setOpen(false)}>About</Link>
//           <Link href="/products" onClick={() => setOpen(false)}>Products</Link>
//           <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
//         </div>
//       )}
//     </header>
//   );
// }
