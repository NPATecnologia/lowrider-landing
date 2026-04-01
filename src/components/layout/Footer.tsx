import { MapPin } from "lucide-react";
import { BUSINESS } from "../../lib/constants";

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <img
            src="/images/logo.jpg"
            alt={BUSINESS.name}
            className="w-32 opacity-50 rounded"
          />
        </div>

        <p className="text-text-muted text-xs font-body">
          &copy; {new Date().getFullYear()} {BUSINESS.name}. Todos os direitos
          reservados.
        </p>

        <div className="flex items-center gap-5">
          <a
            href={BUSINESS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-gold transition-colors"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-gold transition-colors"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href={BUSINESS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-gold transition-colors"
            aria-label="Google Maps"
          >
            <MapPin size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
