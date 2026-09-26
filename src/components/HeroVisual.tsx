import * as React from "react";
import { motion } from "motion/react";
import { Check, Sparkles, TrendingUp, Compass, Calendar, Target } from "lucide-react";

/**
 * HeroVisual Component
 * 
 * NOTE FOR DEVELOPERS:
 * This component provides an abstract, premium smartphone mockup and floating
 * growth cards while the official Anavori app screenshots are under development.
 * 
 * To replace with real app screenshots when available:
 * Simply uncomment the screenshot <img> tag in the designated container below
 * and adjust as needed.
 */
export function HeroVisual() {
  return (
    <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] mx-auto flex items-center justify-center py-6 select-none">
      {/* Ambient background glow layers inspired by Anavori logo colors */}
      <div
        className="absolute -top-6 -left-6 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-6 -right-6 w-64 h-64 bg-amber-200/35 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Floating Card 1: Daily Habits (Top Right) */}
      <motion.div
        initial={{ opacity: 0, y: -20, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="absolute -top-3 -right-2 sm:-right-8 z-30 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 w-44 sm:w-48 hidden xs:block"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center">
            <Check className="w-3.5 h-3.5 text-emerald-700 stroke-[3]" />
          </div>
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-800 font-display block">
              HABITS
            </span>
            <span className="text-xs font-bold text-slate-800 block">Small Daily Actions</span>
          </div>
        </div>
        <div className="space-y-1.5 pt-1 border-t border-slate-100">
          <div className="flex items-center justify-between text-[10px] text-slate-600 bg-slate-50/80 px-2 py-1 rounded-md">
            <span>Morning Stillness</span>
            <span className="text-emerald-700 font-bold">✓</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-600 bg-slate-50/80 px-2 py-1 rounded-md">
            <span>Deep Work (25m)</span>
            <span className="text-emerald-700 font-bold">✓</span>
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-600 bg-slate-50/80 px-2 py-1 rounded-md">
            <span>Evening Reflection</span>
            <span className="text-emerald-700 font-bold">✓</span>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 2: Consistency Flow (Bottom Left) */}
      <motion.div
        initial={{ opacity: 0, y: 20, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute -bottom-4 -left-2 sm:-left-8 z-30 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-900/5 w-48 sm:w-52 hidden xs:block"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-50 border border-amber-200/80 flex items-center justify-center">
              <Calendar className="w-3.5 h-3.5 text-amber-700" />
            </div>
            <div>
              <span className="text-[10px] uppercase font-bold tracking-wider text-amber-800 font-display block">
                CONSISTENCY
              </span>
              <span className="text-xs font-bold text-slate-800 block">Daily Momentum</span>
            </div>
          </div>
        </div>
        {/* 7-day habit streak dots */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-mono text-slate-400 font-medium">{day}</span>
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                  idx <= 5
                    ? "bg-emerald-600 text-white shadow-xs"
                    : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                }`}
              >
                {idx <= 5 ? "•" : "✓"}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 text-[10px] text-emerald-800 font-semibold bg-emerald-50/80 px-2 py-0.5 rounded-md text-center">
          Continuous Progress Active
        </div>
      </motion.div>

      {/* Floating Card 3: Compounding Growth Badge (Floating near top left) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute top-24 -left-4 sm:-left-12 z-30 bg-white/95 backdrop-blur-md px-3 py-2 rounded-full border border-slate-200/90 shadow-lg shadow-slate-900/5 hidden md:flex items-center gap-2"
      >
        <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-emerald-700" />
        </div>
        <span className="text-xs font-bold text-slate-800 font-display">1% Better Every Day</span>
      </motion.div>

      {/* Smartphone Device Frame */}
      <div className="relative w-[280px] sm:w-[320px] aspect-[9/18.8] bg-slate-900/5 rounded-[3.2rem] p-3 shadow-2xl shadow-slate-900/10 border border-slate-200/90 flex flex-col backdrop-blur-xs">
        {/* Dynamic Island / Speaker Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 bg-slate-900 rounded-2xl flex items-center justify-between px-3 z-30 shadow-xs">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-[9px] text-emerald-400 font-bold font-mono">ACTIVE</span>
          </div>
        </div>

        {/* Inner Screen Container */}
        <div className="flex-1 rounded-[2.6rem] bg-white overflow-hidden p-4 sm:p-5 flex flex-col justify-between relative border border-slate-100 shadow-inner">
          {/* Top Status Bar */}
          <div className="flex justify-between items-center text-[10px] text-slate-400 pt-3 mb-2 font-mono select-none">
            <span className="font-semibold text-slate-600">09:41 AM</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[9px] text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                5G
              </span>
              <div className="w-5 h-2.5 border border-slate-300 rounded-sm p-[1px] flex items-center">
                <div className="w-3.5 h-full bg-emerald-600 rounded-[1px]" />
              </div>
            </div>
          </div>

          {/* =========================================================================
              FUTURE APP SCREENSHOT CONTAINER:
              When official Anavori app screenshots are ready, you can replace the
              following abstract placeholder layout with your high-resolution screenshot:
              
              <div className="flex-1 rounded-2xl overflow-hidden relative">
                <img
                  src="/images/anavori-app-screen.png"
                  alt="Anavori App Interface"
                  className="w-full h-full object-cover object-top"
                />
              </div>
             ========================================================================= */}

          {/* Temporary Abstract Branded Mockup (Clean & Honest) */}
          <div className="flex-1 flex flex-col justify-between py-2">
            {/* App Brand Header */}
            <div className="text-center pt-2">
              <div className="w-12 h-12 mx-auto rounded-2xl bg-emerald-50 border border-emerald-200/80 p-2 flex items-center justify-center shadow-xs mb-2">
                <img
                  src="https://res.cloudinary.com/da4qorqem/image/upload/v1777029415/Anavori_Final_Logo_hgxvk8.png"
                  alt="Anavori Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-base font-display font-bold tracking-tight text-slate-900">
                Anavori
              </h3>
              <p className="text-[11px] text-slate-500 font-medium">
                “Your path to a better life.”
              </p>

              {/* Available Now Pill */}
              <div className="mt-2.5 inline-flex items-center gap-1.5 bg-emerald-50/90 border border-emerald-200/80 px-2.5 py-1 rounded-full">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  Now Available on Google Play
                </span>
              </div>
            </div>

            {/* Abstract Personal Growth Graphic */}
            <div className="bg-slate-50/80 rounded-2xl p-3 border border-slate-200/70 my-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-slate-700 font-display uppercase tracking-wide">
                  Growth Trajectory
                </span>
                <span className="text-[9px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/50">
                  Compounding
                </span>
              </div>

              {/* SVG Growth Curve */}
              <div className="h-20 w-full relative flex items-end">
                <svg
                  className="w-full h-full overflow-visible"
                  viewBox="0 0 160 70"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="growthGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#059669" stopOpacity="0.25" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>
                  {/* Area fill */}
                  <path
                    d="M 0 65 Q 40 60, 80 45 T 160 10 L 160 70 L 0 70 Z"
                    fill="url(#growthGradient)"
                  />
                  {/* Line */}
                  <path
                    d="M 0 65 Q 40 60, 80 45 T 160 10"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  {/* Milestone dots */}
                  <circle cx="0" cy="65" r="3" fill="#ffffff" stroke="#059669" strokeWidth="2" />
                  <circle cx="80" cy="45" r="3" fill="#ffffff" stroke="#059669" strokeWidth="2" />
                  <circle cx="160" cy="10" r="3.5" fill="#d97706" stroke="#ffffff" strokeWidth="1.5" />
                </svg>
              </div>

              <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono mt-1 pt-1 border-t border-slate-200/50">
                <span>Intention</span>
                <span>Consistency</span>
                <span className="text-emerald-700 font-semibold">Mastery</span>
              </div>
            </div>

            {/* Daily Ritual Focus Box */}
            <div className="bg-emerald-50/60 rounded-xl p-2.5 border border-emerald-100 flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <p className="text-[11px] font-bold text-slate-900 leading-tight">
                  Intentional Living
                </p>
                <p className="text-[9px] text-slate-600 leading-tight mt-0.5">
                  Small daily rituals lead to long-term transformation.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Dock Navigation Indicator */}
          <div className="pt-2 border-t border-slate-100 flex justify-center items-center">
            <div className="w-24 h-1 bg-slate-300 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
