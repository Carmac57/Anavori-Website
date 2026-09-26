import * as React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bell } from "lucide-react";
import type { NavLink } from "./types";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { KeyBenefits } from "./components/KeyBenefits";
import { CoreFeatures } from "./components/CoreFeatures";
import { WhoIsAnavoriFor } from "./components/WhoIsAnavoriFor";
import { MeetAna } from "./components/MeetAna";
import { WhyWeBuiltAnavori } from "./components/WhyWeBuiltAnavori";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { SecurityModel } from "./components/SecurityModel";
import { Footer } from "./components/Footer";

const navLinks: NavLink[] = [
  { name: "Overview", href: "#hero" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Benefits", href: "#benefits" },
  { name: "Features", href: "#features" },
  { name: "Who It's For", href: "#who-its-for" },
  { name: "Meet Ana", href: "#meet-ana" },
  { name: "Our Story", href: "#our-story" },
  { name: "FAQ", href: "#faq" },
];

type AppRoute = "home" | "privacy" | "terms" | "security";

function parseCurrentRoute(): AppRoute {
  if (typeof window === "undefined") return "home";
  const rawPath = window.location.pathname.toLowerCase();
  const path = rawPath.replace(/\/+$/, "") || "/";
  const hash = window.location.hash.toLowerCase();

  if (
    path === "/privacy" ||
    path === "/privacy-policy" ||
    path.endsWith("/privacy") ||
    path.endsWith("/privacy-policy") ||
    hash === "#privacy" ||
    hash === "#privacy-policy" ||
    hash === "#/privacy" ||
    hash === "#/privacy-policy"
  ) {
    return "privacy";
  }

  if (
    path === "/terms" ||
    path === "/terms-of-service" ||
    path.endsWith("/terms") ||
    path.endsWith("/terms-of-service") ||
    hash === "#terms" ||
    hash === "#terms-of-service" ||
    hash === "#/terms" ||
    hash === "#/terms-of-service"
  ) {
    return "terms";
  }

  if (
    path === "/security" ||
    path === "/security-model" ||
    path.endsWith("/security") ||
    path.endsWith("/security-model") ||
    hash === "#security" ||
    hash === "#security-model" ||
    hash === "#/security" ||
    hash === "#/security-model"
  ) {
    return "security";
  }

  return "home";
}

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotificationToast, setShowNotificationToast] = useState(false);
  
  // Routing state for dedicated pages
  const [currentRoute, setCurrentRoute] = useState<AppRoute>(() => parseCurrentRoute());

  // Navigation helpers
  const navigateToPrivacy = () => {
    window.history.pushState({ from: "app" }, "", "/privacy-policy");
    setCurrentRoute("privacy");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToTerms = () => {
    window.history.pushState({ from: "app" }, "", "/terms-of-service");
    setCurrentRoute("terms");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToSecurity = () => {
    window.history.pushState({ from: "app" }, "", "/security");
    setCurrentRoute("security");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Helper to cleanly scroll to FAQ section with sticky navbar offset
  const scrollToFAQSection = (smooth: boolean = true) => {
    const el = document.getElementById("faq");
    if (el) {
      const navOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: smooth ? "smooth" : "auto",
      });
    }
  };

  // Return to homepage directly at the FAQ section (#faq)
  const navigateToFAQ = () => {
    window.history.pushState({ from: "legal-return" }, "", "/#faq");
    setCurrentRoute("home");
    setTimeout(() => {
      scrollToFAQSection(true);
    }, 60);
  };

  // Listen for browser back / forward navigation
  useEffect(() => {
    const handlePopState = () => {
      const route = parseCurrentRoute();
      setCurrentRoute(route);
      if (route !== "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const hash = window.location.hash;
        const targetId = hash ? hash.replace("#", "") : "faq";
        setTimeout(() => {
          if (targetId === "faq") {
            scrollToFAQSection(true);
          } else {
            const el = document.getElementById(targetId);
            if (el) {
              const navOffset = 84;
              const elementPosition = el.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - navOffset;
              window.scrollTo({
                top: Math.max(0, offsetPosition),
                behavior: "smooth",
              });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        }, 60);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Handle initial direct visit to /#faq on home page
  useEffect(() => {
    if (currentRoute === "home" && window.location.hash === "#faq") {
      setTimeout(() => {
        scrollToFAQSection(false);
      }, 100);
    }
  }, []);

  // Update document title based on route
  useEffect(() => {
    if (currentRoute === "privacy") {
      document.title = "Anavori — Privacy Policy";
    } else if (currentRoute === "terms") {
      document.title = "Anavori — Terms of Service";
    } else if (currentRoute === "security") {
      document.title = "Anavori — Security Model";
    } else {
      document.title = "Anavori — Small daily actions. A better life.";
    }
  }, [currentRoute]);

  // Scroll listener for sticky navbar & active section indicator
  useEffect(() => {
    if (currentRoute !== "home") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy for approved sections only
      const sections = [
        "hero",
        "how-it-works",
        "benefits",
        "features",
        "who-its-for",
        "meet-ana",
        "our-story",
        "faq",
      ];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentRoute]);

  // Show a single gentle nudge preview after 14 seconds
  useEffect(() => {
    if (currentRoute !== "home") return;

    const timer = setTimeout(() => {
      setShowNotificationToast(true);
      setTimeout(() => {
        setShowNotificationToast(false);
      }, 5000);
    }, 14000);
    return () => clearTimeout(timer);
  }, [currentRoute]);

  // If on Privacy Policy route, render dedicated Privacy Policy page
  if (currentRoute === "privacy") {
    return (
      <PrivacyPolicy
        onBack={navigateToFAQ}
        onNavigateTerms={navigateToTerms}
      />
    );
  }

  // If on Terms of Service route, render dedicated Terms of Service page
  if (currentRoute === "terms") {
    return (
      <TermsOfService
        onBack={navigateToFAQ}
        onNavigatePrivacy={navigateToPrivacy}
      />
    );
  }

  // If on Security Model route, render dedicated Security Model page
  if (currentRoute === "security") {
    return <SecurityModel onBack={navigateToFAQ} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900 relative">
      {/* Premium Sticky Navigation Bar */}
      <Navbar
        navLinks={navLinks}
        activeSection={activeSection}
        isScrolled={isScrolled}
      />

      {/* Main Content Sections - Approved Structure */}
      <main id="main-content">
        <Hero />
        <HowItWorks />
        <KeyBenefits />
        <CoreFeatures />
        <WhoIsAnavoriFor />
        <MeetAna />
        <WhyWeBuiltAnavori />
        <FAQ onOpenPrivacy={navigateToPrivacy} />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer
        navLinks={navLinks}
        onOpenPrivacy={navigateToPrivacy}
        onOpenTerms={navigateToTerms}
        onOpenSecurity={navigateToSecurity}
      />

      {/* Simulated Push Notification Toast */}
      <AnimatePresence>
        {showNotificationToast && (
          <motion.div
            initial={{ opacity: 0, y: -40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed top-6 right-6 z-50 bg-white border border-emerald-200/90 shadow-2xl rounded-2xl p-4 max-w-sm flex items-start gap-3.5 backdrop-blur-md"
            role="status"
            aria-live="polite"
          >
            <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 mt-0.5">
              <Bell className="w-4 h-4 text-emerald-700" />
            </div>
            <div className="flex-1 text-left">
              <div className="flex justify-between items-center mb-0.5">
                <span className="text-[10px] font-bold tracking-wider text-emerald-800 uppercase font-mono">
                  ANAVORI NUDGE
                </span>
                <span className="text-[10px] text-slate-400">Just now</span>
              </div>
              <p className="text-xs font-bold text-slate-900">Habit Window Ending Soon</p>
              <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                Your 25-minute deep focus block is scheduled. Protect your 21-day streak.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
