// src/components/Footer.jsx
"use client";

import { ShoppingBag } from "lucide-react";
import Link from "next/link";

// import Link from "next/link";
// import { ShoppingBag } from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t mt-10">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">BuyNest</span>
          </Link>

          {/* Navigation */}
          <nav className="flex space-x-6">
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/products"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Products
            </Link>
          </nav>

          {/* Social Links */}
          <div className="flex space-x-4">
            <Link
              href="https://www.linkedin.com/in/md-jamil2"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </Link>
            <Link
              href="https://www.facebook.com/mdjauj"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaFacebook className="h-5 w-5" />
            </Link>
            <Link
              href="https://github.com/jamilWebdesign2024"
              target="_blank"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <FaGithub className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          © 2025 BuyNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
