import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            ./Portfolio/<span className="text-blue-400">Iksan</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#home" className="text-white hover:text-blue-400 transition">
              Home
            </a>
            <a href="#about" className="text-white hover:text-blue-400 transition">
              About
            </a>
            <a href="#contact" className="text-white hover:text-blue-400 transition">
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-blue-400 transition" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 text-lg border-t border-gray-700 pt-4 items-end">
            <a href="#home" className="text-white hover:text-blue-400 transition" onClick={handleLinkClick}>
              Home
            </a>
            <a href="#about" className="text-white hover:text-blue-400 transition" onClick={handleLinkClick}>
              About
            </a>
            <a href="#contact" className="text-white hover:text-blue-400 transition" onClick={handleLinkClick}>
              Contact
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
