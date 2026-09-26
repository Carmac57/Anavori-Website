import * as React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  ArrowDown, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Clock 
} from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.anavori.app";

function GooglePlayIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        d="M3.609 1.814L13.792 12 3.61 22.186c-.362-.375-.61-.913-.61-1.528V3.342c0-.615.248-1.153.609-1.528z"
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

export function FinalCTA() {
  const openGooglePlay = () => {
    window.open(GOOGLE_PLAY_URL, "_blank", "noopener,noreferrer");
  };

  const scrollToOverview = () => {
    const el = document.getElementById("how-it-works");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="download"
      className="py-24 sm:py-28 md:py-36 bg-white relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Background Soft Glow Accents */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[500px] bg-gradient-to-tr from-emerald-100/40 via-teal-50/30 to-amber-50/20 rounded-full blur-3xl pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Container Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-white via-slate-50/50 to-emerald-50/20 border border-slate-200/90 p-8 sm:p-12 md:p-16 lg:p-20 shadow-xl shadow-emerald-950/[0.02] overflow-hidden">
          
          {/* Subtle Ambient Background Ring Texture */}
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-emerald-100/60 pointer-events-none" 
            aria-hidden="true" 
          />
          <div 
            className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full border border-emerald-100/60 pointer-events-none" 
            aria-hidden="true" 
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading, Value Proposition & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Eyebrow Label */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 shadow-xs"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                <span>YOUR NEXT STEP</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                id="final-cta-heading"
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 leading-[1.15] mb-5"
              >
                Ready to Start Your Journey?
              </motion.h2>

              {/* Supporting Text */}
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-sans"
              >
                Build better habits, stay consistent, reflect on your progress, and take meaningful
                steps toward a better version of yourself with Anavori.
              </motion.p>

              {/* CTA Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-6"
              >
                {/* Primary CTA: Download on Google Play */}
                <button
                  onClick={openGooglePlay}
                  className="inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-emerald-600/20 hover:shadow-xl hover:shadow-emerald-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 group"
                  aria-label="Download Anavori on Google Play (opens official store listing in a new tab)"
                >
                  <GooglePlayIcon className="w-5 h-5 shrink-0" />
                  <span>Download on Google Play</span>
                  <ArrowRight className="w-4 h-4 text-emerald-100 group-hover:translate-x-0.5 transition-transform" />
                </button>

                {/* Secondary CTA: Learn More About Anavori */}
                <button
                  onClick={scrollToOverview}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold text-sm px-6 py-4 rounded-full border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 group"
                  aria-label="Learn more about how Anavori works (scrolls to How Anavori Works section)"
                >
                  <span>Learn More About Anavori</span>
                  <ArrowDown className="w-4 h-4 text-emerald-700 group-hover:translate-y-0.5 transition-transform" />
                </button>
              </motion.div>

              {/* Supporting Microcopy / Trial & Pricing */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="space-y-1.5 text-xs sm:text-sm text-slate-500"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                  <span className="font-medium text-slate-700">
                    Start with 14 days of Premium access.
                  </span>
                </div>
                <div className="flex items-center gap-2 pl-6 text-slate-500 text-xs">
                  <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
                  <span>Premium is $4/month after the trial.</span>
                </div>
              </motion.div>

              {/* Brand Closing Message Tagline */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-8 pt-6 border-t border-slate-200/80 w-full"
              >
                <p className="text-sm font-medium text-slate-700 italic flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block" aria-hidden="true" />
                  &ldquo;Your path to a better life starts with the next step.&rdquo;
                </p>
              </motion.div>
            </div>

            {/* Right Column: Abstract Growth & Momentum Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center"
                aria-hidden="true"
              >
                {/* Outer Concentric Progress Ripple 3 */}
                <div className="absolute inset-0 rounded-full border border-emerald-100/70 bg-gradient-to-tr from-emerald-50/30 to-transparent animate-pulse [animation-duration:6s]" />

                {/* Concentric Progress Ripple 2 */}
                <div className="absolute inset-8 rounded-full border border-emerald-200/60 bg-white/40 shadow-xs" />

                {/* Concentric Progress Ripple 1 */}
                <div className="absolute inset-16 rounded-full border border-emerald-300/60 bg-emerald-50/50 shadow-inner" />

                {/* Center Core: Anavori Emblem & Forward Momentum Node */}
                <div className="relative z-10 w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white border border-emerald-200/90 shadow-xl shadow-emerald-900/10 flex flex-col items-center justify-center p-4 text-center group hover:scale-105 transition-transform duration-300">
                  <img
                    src="https://res.cloudinary.com/da4qorqem/image/upload/v1777029415/Anavori_Final_Logo_hgxvk8.png"
                    alt="Anavori Symbol"
                    className="h-10 w-auto object-contain mb-1.5"
                    referrerPolicy="no-referrer"
                  />
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-800 uppercase">
                    ANAVORI
                  </span>
                  <span className="text-[9px] text-slate-400 font-sans mt-0.5">
                    Day 1 Starts Now
                  </span>
                </div>

                {/* Milestone Stepping Node 1: Start Small */}
                <div className="absolute top-4 left-6 bg-white/95 border border-slate-200/90 shadow-md rounded-2xl px-3.5 py-2 flex items-center gap-2 text-left backdrop-blur-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase leading-none">Step 1</span>
                    <span className="text-xs font-semibold text-slate-800">Start Small</span>
                  </div>
                </div>

                {/* Milestone Stepping Node 2: Stay Consistent */}
                <div className="absolute bottom-6 left-8 bg-white/95 border border-slate-200/90 shadow-md rounded-2xl px-3.5 py-2 flex items-center gap-2 text-left backdrop-blur-xs">
                  <div className="w-2 h-2 rounded-full bg-teal-500" />
                  <div>
                    <span className="block text-[10px] font-mono text-slate-400 uppercase leading-none">Step 2</span>
                    <span className="text-xs font-semibold text-slate-800">Stay Consistent</span>
                  </div>
                </div>

                {/* Milestone Stepping Node 3: See Growth */}
                <div className="absolute top-1/2 -right-2 -translate-y-1/2 bg-white/95 border border-emerald-200/90 shadow-md rounded-2xl px-3.5 py-2 flex items-center gap-2 text-left backdrop-blur-xs">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <div>
                    <span className="block text-[10px] font-mono text-emerald-700 uppercase leading-none">Identity</span>
                    <span className="text-xs font-bold text-slate-900">Elevate Your Life</span>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
