import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Download, Menu, X, Sparkles } from "lucide-react";
import type { NavLink } from "../types";

interface NavbarProps {
  navLinks: NavLink[];
  activeSection: string;
  isScrolled: boolean;
}

export function Navbar({ navLinks, activeSection, isScrolled }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anavori.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-xs"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Official Anavori Logo & Brand Title */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-lg"
            aria-label="Anavori Home"
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

          {/* Floating Pill Nav for Desktop */}
          <div className="hidden md:flex items-center gap-1 bg-slate-100/80 px-2 py-1.5 rounded-full border border-slate-200/70 shadow-2xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative text-xs font-semibold tracking-wide px-4 py-2 transition-all duration-200 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                    isActive
                      ? "text-emerald-700 bg-white shadow-2xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-1 left-4 right-4 h-[2px] bg-emerald-600 rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Navigation Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={openGooglePlay}
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow-sm hover:shadow-md hover:shadow-emerald-600/20 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              aria-label="Download Anavori on Google Play (opens in a new tab)"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" aria-hidden="true" />
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            className="md:hidden text-slate-700 hover:text-slate-900 p-2 bg-white/80 hover:bg-slate-100 border border-slate-200 rounded-full shadow-2xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center px-6 md:hidden"
          >
            <div className="flex items-center gap-2.5 mb-10">
              <img
                src="https://res.cloudinary.com/da4qorqem/image/upload/v1777029415/Anavori_Final_Logo_hgxvk8.png"
                alt="Anavori Logo"
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-2xl font-display font-bold text-slate-900 tracking-wider">
                ANAVORI
              </span>
            </div>

            <div className="flex flex-col items-center gap-5 w-full max-w-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center text-lg font-display font-semibold text-slate-700 hover:text-emerald-700 py-2.5 rounded-xl hover:bg-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 mt-10 w-full max-w-xs">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openGooglePlay();
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-full font-bold flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-95 transition-all text-sm"
                aria-label="Download Anavori on Google Play"
              >
                <Download className="w-4 h-4 stroke-[2.5]" aria-hidden="true" />
                Download on Google Play
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-full font-semibold transition-colors text-sm"
              >
                Close Menu
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
