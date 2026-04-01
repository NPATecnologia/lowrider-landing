import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "../../lib/constants";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(".navbar", {
      opacity: 0,
      y: -20,
      duration: 0.8,
      delay: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`
        navbar fixed top-4 left-1/2 -translate-x-1/2 z-50
        px-6 py-3 rounded-full
        backdrop-blur-2xl border border-border
        transition-all duration-500
        ${scrolled ? "bg-bg-void/90 shadow-premium" : "bg-bg-primary/80"}
      `}
    >
      <div className="flex items-center gap-8">
        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-text-secondary font-body hover:text-gold hover:bg-gold-50 px-3 py-1.5 rounded-full transition-all duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* WhatsApp link */}
        <a
          href={BUSINESS.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex text-sm font-semibold text-whatsapp hover:brightness-110 transition-all font-body"
        >
          WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary p-1"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-3 bg-bg-overlay/95 backdrop-blur-2xl border border-border rounded-2xl p-6">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-base text-text-secondary hover:text-gold transition-colors font-body w-full text-left"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href={BUSINESS.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-semibold text-whatsapp font-body"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
