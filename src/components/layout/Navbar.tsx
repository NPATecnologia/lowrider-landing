import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BUSINESS } from "../../lib/constants";
import gsap from "gsap";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    gsap.from(".navbar", { opacity: 0, y: -20, duration: 0.8, delay: 1.2, ease: "power3.out" });
  }, []);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        className={[
          "navbar fixed top-5 left-1/2 -translate-x-1/2 z-50",
          "px-2 py-2 rounded-full",
          "backdrop-blur-2xl border transition-all duration-500",
          scrolled
            ? "bg-bg-void/90 border-border shadow-premium"
            : "bg-bg-primary/60 border-white/[0.03]",
        ].join(" ")}
      >
        <div className="flex items-center">
          {/* Desktop links */}
          <ul className="hidden md:flex items-center">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-sm text-text-secondary font-body hover:text-gold hover:bg-gold-50 px-4 py-2.5 min-h-11 rounded-full transition-all duration-300 cursor-pointer"
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
                className="text-sm font-semibold text-whatsapp hover:brightness-110 transition-all font-body px-4 py-2.5 min-h-11 inline-flex items-center"
              >
                WhatsApp
              </a>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-text-primary p-2 cursor-pointer"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-bg-void/95 backdrop-blur-2xl" role="button" aria-label="Fechar menu" tabIndex={0} onClick={() => setIsOpen(false)} onKeyDown={(e) => e.key === "Escape" && setIsOpen(false)} />
          <div className="relative z-10 flex flex-col items-center justify-center min-h-dvh gap-8 p-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-2xl font-display uppercase tracking-widest text-text-primary hover:text-gold transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <a
              href={BUSINESS.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-whatsapp font-body mt-4"
            >
              WhatsApp →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
