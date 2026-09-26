import * as React from "react";
import { Download } from "lucide-react";
import type { NavLink } from "../types";

interface FooterProps {
  navLinks: NavLink[];
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
  onOpenSecurity?: () => void;
}

export function Footer({
  navLinks,
  onOpenPrivacy,
  onOpenTerms,
  onOpenSecurity,
}: FooterProps) {
  const openGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anavori.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200/80 py-16 text-slate-600 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/80">
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <a
              href="#hero"
              className="flex items-center gap-3 mb-4 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
              aria-label="Back to top"
            >
              <img
                src="https://res.cloudinary.com/da4qorqem/image/upload/v1777029415/Anavori_Final_Logo_hgxvk8.png"
                alt="Anavori Logo"
                className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <span className="text-xl font-display font-bold text-slate-900 tracking-wider">
                ANAVORI
              </span>
            </a>

            <p className="text-xs text-slate-500 max-w-sm leading-relaxed mb-6 font-sans">
              The premier personal development ecosystem. Build unstoppable discipline, master your
              daily focus blocks, and elevate your identity through consistent execution.
            </p>

            <button
              onClick={openGooglePlay}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-xs hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Download Anavori on Google Play (opens in a new tab)"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              <span>Get it on Google Play</span>
            </button>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-emerald-700 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    if (onOpenPrivacy) {
                      e.preventDefault();
                      onOpenPrivacy();
                    }
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium cursor-pointer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms-of-service"
                  onClick={(e) => {
                    if (onOpenTerms) {
                      e.preventDefault();
                      onOpenTerms();
                    }
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium cursor-pointer"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/security"
                  onClick={(e) => {
                    if (onOpenSecurity) {
                      e.preventDefault();
                      onOpenSecurity();
                    }
                  }}
                  className="text-slate-600 hover:text-emerald-700 transition-colors font-medium cursor-pointer"
                >
                  Security Model
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Protocol Pillars */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 font-display mb-4">
              The Anavori Standard
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed mb-4">
              Anavori is engineered as an offline-first utility. We don't store your personal logs,
              habits, or schedules on remote tracking servers. Your self-mastery belongs strictly to you.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-xs font-medium text-slate-500">
              <a
                href="/privacy-policy"
                onClick={(e) => {
                  if (onOpenPrivacy) {
                    e.preventDefault();
                    onOpenPrivacy();
                  }
                }}
                className="hover:text-emerald-700 font-semibold text-slate-700 cursor-pointer transition-colors"
              >
                Privacy Policy
              </a>
              <span>•</span>
              <a
                href="/terms-of-service"
                onClick={(e) => {
                  if (onOpenTerms) {
                    e.preventDefault();
                    onOpenTerms();
                  }
                }}
                className="hover:text-emerald-700 font-semibold text-slate-700 cursor-pointer transition-colors"
              >
                Terms of Service
              </a>
              <span>•</span>
              <a
                href="/security"
                onClick={(e) => {
                  if (onOpenSecurity) {
                    e.preventDefault();
                    onOpenSecurity();
                  }
                }}
                className="hover:text-emerald-700 font-semibold text-slate-700 cursor-pointer transition-colors"
              >
                Security Model
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <p>© {new Date().getFullYear()} Anavori Technologies. All rights reserved.</p>
          <p className="text-slate-400">Designed with deliberate craftsmanship & minimal distraction.</p>
        </div>
      </div>
    </footer>
  );
}
