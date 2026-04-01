import { MapPin } from "lucide-react";
import { BUSINESS } from "../../lib/constants";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-16 px-6 bg-bg-void">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img
            src="/images/logo.jpg"
            alt={BUSINESS.name}
            className="w-28 opacity-40 rounded"
          />

          <p className="text-text-muted text-xs font-body">
            &copy; {new Date().getFullYear()} {BUSINESS.name}
          </p>

          <div className="flex items-center gap-6">
            {[
              { href: BUSINESS.instagram, label: "Instagram", icon: <InstagramIcon /> },
              { href: BUSINESS.facebook, label: "Facebook", icon: <FacebookIcon /> },
              { href: BUSINESS.googleMaps, label: "Google Maps", icon: <MapPin size={18} /> },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-gold transition-colors duration-300 cursor-pointer"
                aria-label={item.label}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
