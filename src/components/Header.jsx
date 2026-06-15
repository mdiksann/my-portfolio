import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "home", file: "home.jsx" },
  { href: "#about", label: "about", file: "about.json" },
  { href: "#contact", label: "contact", file: "contact.tsx" },
];

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? "bg-tn-elevated/95 backdrop-blur-md border-tn-border shadow-lg shadow-black/30" : "bg-tn-elevated/40 backdrop-blur-sm border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Window controls + path breadcrumb */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-tn-boolean/80"></span>
              <span className="w-3 h-3 rounded-full bg-tn-number/80"></span>
              <span className="w-3 h-3 rounded-full bg-tn-string/80"></span>
            </div>
            <div className="font-mono text-sm sm:text-base">
              <span className="text-tn-muted">~/portfolio/</span>
              <span className="text-tn-accent font-bold">iksan</span>
            </div>
          </div>

          {/* Desktop Navigation — editor tabs */}
          <nav className="hidden md:flex items-center gap-1 text-sm font-mono">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="group px-3 py-1.5 rounded-md text-tn-muted hover:text-tn-text hover:bg-tn-surface transition-colors">
                <span className="text-tn-violet">{"<"}</span>
                <span className="group-hover:text-tn-accent transition-colors">{item.label}</span>
                <span className="text-tn-violet">{" />"}</span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-tn-text hover:text-tn-accent transition" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-3 pb-2 flex flex-col gap-1 text-base font-mono border-t border-tn-border pt-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="px-3 py-2 rounded-md text-tn-muted hover:text-tn-accent hover:bg-tn-surface transition-colors flex items-center gap-2" onClick={handleLinkClick}>
                <span className="text-tn-violet">{"</>"}</span>
                {item.label}
                <span className="ml-auto text-xs text-tn-muted">{item.file}</span>
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
