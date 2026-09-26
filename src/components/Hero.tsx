import * as React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";
import { HeroVisual } from "./HeroVisual";

/**
 * Standard Google Play Logo Vector
 */
function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186A2.22 2.22 0 0 1 3 20.615V3.385c0-.608.225-1.173.609-1.571z"
        fill="#4285F4"
      />
      <path
        d="M17.184 8.608L13.792 12l3.392 3.392 3.82-2.193c1.077-.618 1.077-1.625 0-2.244l-3.82-2.347z"
        fill="#FBBC04"
      />
      <path
        d="M13.792 12L3.609 1.814c.362-.375.867-.614 1.455-.614.479 0 .937.16 1.34.391l10.78 6.195L13.792 12z"
        fill="#EA4335"
      />
      <path
        d="M13.792 12l3.392 3.392-10.78 6.195c-.403.231-.861.391-1.34.391-.588 0-1.093-.239-1.455-.614L13.792 12z"
        fill="#34A853"
      />
    </svg>
  );
}

export function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveringHero, setIsHoveringHero] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const openGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anavori.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToHowItWorks = () => {
    const el = document.getElementById("how-it-works");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHoveringHero(true)}
      onMouseLeave={() => setIsHoveringHero(false)}
    >
      {/* Subtle linear grid texture for depth */}
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" aria-hidden="true" />

      {/* Luminous brand ambient background gradients */}
      <div
        className="absolute top-12 left-[8%] w-[34rem] h-[34rem] bg-emerald-100/35 rounded-full blur-[140px] pointer-events-none animate-float-slow"
        aria-hidden="true"
      />
      <div
        className="absolute top-24 right-[6%] w-[30rem] h-[30rem] bg-amber-100/30 rounded-full blur-[130px] pointer-events-none animate-float-reverse"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 left-[20%] w-[38rem] h-[24rem] bg-emerald-50/60 rounded-full blur-[160px] pointer-events-none"
        aria-hidden="true"
      />

      {/* Interactive cursor spotlight */}
      {isHoveringHero && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 z-0 bg-radial from-emerald-500/5 via-transparent to-transparent blur-3xl w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2"
          style={{ left: mousePos.x, top: mousePos.y }}
          aria-hidden="true"
        />
      )}

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* =========================================================================
            LEFT CONTENT COLUMN: High-conversion headline, narrative & CTAs
           ========================================================================= */}
        <div className="lg:col-span-7 text-left flex flex-col items-start">
          {/* 1. Small Eyebrow Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50/90 border border-emerald-200/90 px-3.5 py-1.5 rounded-full mb-6 shadow-2xs group"
          >
            <img
              src="https://res.cloudinary.com/da4qorqem/image/upload/v1777029415/Anavori_Final_Logo_hgxvk8.png"
              alt="Anavori"
              className="h-3.5 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="font-display tracking-widest uppercase text-[11px] font-bold text-emerald-900">
              YOUR PERSONAL GROWTH COMPANION
            </span>
          </motion.div>

          {/* 2. Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-display font-bold tracking-tight text-slate-900 leading-[1.08] mb-6"
          >
            Small daily actions.{" "}
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800">
              A better life.
            </span>
          </motion.h1>

          {/* 3. Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 max-w-xl mb-8 leading-relaxed font-sans"
          >
            Anavori helps you build meaningful habits, stay consistent with your goals, track
            your personal growth, and take intentional steps toward becoming the best version of
            yourself.
          </motion.p>

          {/* 4. Call-To-Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto"
          >
            {/* Primary CTA: Download on Google Play */}
            <button
              onClick={openGooglePlay}
              className="bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/25 font-display focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 group cursor-pointer"
              aria-label="Download on Google Play (opens in a new tab)"
            >
              <GooglePlayIcon className="w-5 h-5 shrink-0" />
              <span className="text-base">Download on Google Play</span>
            </button>

            {/* Secondary CTA: Discover Anavori */}
            <button
              onClick={scrollToHowItWorks}
              className="bg-white hover:bg-slate-50 text-slate-800 px-7 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all duration-200 font-display border border-slate-200/90 shadow-2xs hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 group cursor-pointer"
              aria-label="Discover how Anavori works"
            >
              <span className="text-base">Discover Anavori</span>
              <ArrowDown className="w-4 h-4 text-emerald-700 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </motion.div>

          {/* 5. Supporting Trust Message (Authentic, No Fake Proof) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-500 text-xs font-medium"
          >
            <div className="flex items-center gap-2 text-slate-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Built for people who are serious about personal growth.</span>
            </div>
            <span className="hidden sm:inline text-slate-300">•</span>
            <span className="text-slate-500">Start your journey. One day at a time.</span>
          </motion.div>

          {/* 6. The Transformation Flow (Marketing Priority: Small Actions -> Consistency -> Progress -> A Better Life) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-10 pt-6 border-t border-slate-100 w-full max-w-xl"
          >
            <div className="flex items-center justify-between gap-1 sm:gap-2 text-[11px] sm:text-xs font-mono font-semibold">
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Small Actions</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Consistency</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
              <div className="flex items-center gap-1.5 text-slate-700">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                <span>Progress</span>
              </div>
              <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
              <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                <Sparkles className="w-3 h-3 text-emerald-600" />
                <span>A Better Life</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            RIGHT VISUAL COLUMN: Premium Device Mockup & Abstract Growth Cards
           ========================================================================= */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
