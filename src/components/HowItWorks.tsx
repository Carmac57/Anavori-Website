import * as React from "react";
import { motion } from "motion/react";
import {
  Compass,
  Flame,
  TrendingUp,
  Check,
  Calendar,
  Sparkles,
  ArrowRight,
  Target,
  Clock,
  Award,
} from "lucide-react";

interface StepData {
  number: string;
  stage: string;
  title: string;
  description: string;
  badgeText: string;
  accentColor: "emerald" | "amber" | "teal";
}

const steps: StepData[] = [
  {
    number: "01",
    stage: "BUILD",
    title: "Build Better Habits",
    description:
      "Start by identifying the habits, goals, and areas of your life you want to improve. Anavori helps you turn your intentions into meaningful daily actions.",
    badgeText: "Intention & Design",
    accentColor: "emerald",
  },
  {
    number: "02",
    stage: "STAY CONSISTENT",
    title: "Stay Consistent",
    description:
      "Show up every day, complete meaningful actions, build streaks, and stay focused on the progress you're making.",
    badgeText: "Daily Execution",
    accentColor: "amber",
  },
  {
    number: "03",
    stage: "GROW",
    title: "See Your Progress",
    description:
      "Track your journey, celebrate your achievements, reflect on your growth, and see how small daily actions contribute to meaningful long-term change.",
    badgeText: "Compounding Growth",
    accentColor: "teal",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 relative bg-slate-50/60 border-y border-slate-100/80 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[42rem] h-[22rem] bg-emerald-100/25 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-10 right-10 w-96 h-96 bg-amber-100/20 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/80 px-3.5 py-1.5 rounded-full mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-display tracking-widest uppercase text-[11px] font-bold text-emerald-800">
              THE THREE-STAGE FRAMEWORK
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4"
          >
            How Anavori Works
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto"
          >
            Personal growth doesn't happen overnight. It is built through small actions,
            consistency, and intentional progress.
          </motion.p>

          {/* Quick Transformation Journey Pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white border border-slate-200/80 px-4 py-2 rounded-full shadow-2xs text-xs font-mono font-bold text-slate-700"
          >
            <span className="text-emerald-700">01 BUILD</span>
            <span className="text-slate-300">→</span>
            <span className="text-amber-700">02 STAY CONSISTENT</span>
            <span className="text-slate-300">→</span>
            <span className="text-teal-700">03 GROW</span>
          </motion.div>
        </div>

        {/* 3-Step Journey Grid */}
        <div className="relative">
          {/* Desktop Connecting Line between cards */}
          <div
            className="hidden lg:block absolute top-[138px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-emerald-200 via-amber-200 to-teal-200 z-0"
            aria-hidden="true"
          />

          <div className="grid lg:grid-cols-3 gap-8 relative z-10">
            {/* =========================================================================
                STEP 1: BUILD BETTER HABITS
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stage Pill & Milestone Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-xs font-mono font-bold text-emerald-800 shadow-2xs">
                      01
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                      BUILD
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                  Build Better Habits
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Start by identifying the habits, goals, and areas of your life you want to
                  improve. Anavori helps you turn your intentions into meaningful daily actions.
                </p>

                {/* Step 1 Visual Element: Habit Checklist & Intentions */}
                <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-100 space-y-2.5">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono font-medium pb-1.5 border-b border-slate-200/60">
                    <span>DAILY INTENTIONS</span>
                    <span className="text-emerald-700 font-bold">3 of 3 ready</span>
                  </div>

                  <div className="bg-white px-3 py-2 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-md bg-emerald-600 flex items-center justify-center text-white">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-slate-800 font-medium">Morning Mobility & Hydration</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      Health
                    </span>
                  </div>

                  <div className="bg-white px-3 py-2 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-md bg-emerald-600 flex items-center justify-center text-white">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span className="text-slate-800 font-medium">Deep Focus Block (25m)</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">
                      Work
                    </span>
                  </div>

                  <div className="bg-white px-3 py-2 rounded-xl border border-slate-200/70 flex items-center justify-between text-xs shadow-2xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-4 h-4 rounded-md border border-slate-300 flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                      </div>
                      <span className="text-slate-700 font-medium">Read 15 Pages of Philosophy</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                      Mind
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Phase 1 of Journey</span>
                <span className="text-emerald-700 font-semibold flex items-center gap-1">
                  Define Rituals <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>

            {/* =========================================================================
                STEP 2: STAY CONSISTENT
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stage Pill & Milestone Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-xs font-mono font-bold text-amber-800 shadow-2xs">
                      02
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-amber-800 uppercase bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      STAY CONSISTENT
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform duration-300">
                    <Flame className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                  Stay Consistent
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Show up every day, complete meaningful actions, build streaks, and stay focused
                  on the progress you're making.
                </p>

                {/* Step 2 Visual Element: Streak & Calendar Tracker */}
                <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-100 space-y-3">
                  {/* Streak banner */}
                  <div className="bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent px-3 py-2 rounded-xl border border-amber-200/70 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
                        <Flame className="w-3.5 h-3.5 fill-current" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900 leading-tight">14 Days Active</p>
                        <p className="text-[10px] text-amber-800 font-medium">Unbroken Routine</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded-full border border-amber-200 shadow-2xs">
                      🔥 IN MOMENTUM
                    </span>
                  </div>

                  {/* 7-day grid */}
                  <div className="bg-white p-2.5 rounded-xl border border-slate-200/70">
                    <div className="grid grid-cols-7 gap-1 text-center">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, idx) => (
                        <div key={day} className="flex flex-col items-center gap-1">
                          <span className="text-[9px] font-mono text-slate-400">{day}</span>
                          <div
                            className={`w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold ${
                              idx < 6
                                ? "bg-emerald-600 text-white shadow-2xs"
                                : "bg-emerald-100 text-emerald-800 border border-emerald-300"
                            }`}
                          >
                            {idx < 6 ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : "Today"}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] text-slate-600 px-1 font-mono">
                    <span>Active Focus: 25m Timer</span>
                    <span className="text-emerald-700 font-bold">100% On Schedule</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Phase 2 of Journey</span>
                <span className="text-amber-700 font-semibold flex items-center gap-1">
                  Lock Daily Rhythm <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>

            {/* =========================================================================
                STEP 3: SEE YOUR PROGRESS
               ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Stage Pill & Milestone Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-xs font-mono font-bold text-teal-800 shadow-2xs">
                      03
                    </span>
                    <span className="text-[11px] font-mono font-bold tracking-wider text-teal-800 uppercase bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                      GROW
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                  See Your Progress
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                  Track your journey, celebrate your achievements, reflect on your growth, and see
                  how small daily actions contribute to meaningful long-term change.
                </p>

                {/* Step 3 Visual Element: Compounding Curve & Milestone */}
                <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-100 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-slate-700 uppercase">
                      COMPOUNDING MASTERY
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                      +28% Discipline
                    </span>
                  </div>

                  {/* Visual Progress Curve */}
                  <div className="bg-white p-3 rounded-xl border border-slate-200/70 relative">
                    <div className="h-16 w-full flex items-end">
                      <svg
                        className="w-full h-full overflow-visible"
                        viewBox="0 0 200 60"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                      >
                        <defs>
                          <linearGradient id="stepGrowthGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M 0 54 Q 50 50, 100 36 T 200 8 L 200 60 L 0 60 Z"
                          fill="url(#stepGrowthGrad)"
                        />
                        <path
                          d="M 0 54 Q 50 50, 100 36 T 200 8"
                          fill="none"
                          stroke="#0d9488"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                        />
                        <circle cx="0" cy="54" r="3" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                        <circle cx="100" cy="36" r="3" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                        <circle cx="200" cy="8" r="4" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
                      </svg>
                    </div>

                    <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono mt-1 pt-1 border-t border-slate-100">
                      <span>Day 1 (Intention)</span>
                      <span>Day 30 (Habit)</span>
                      <span className="text-teal-700 font-bold">Day 90+ (Identity)</span>
                    </div>
                  </div>

                  {/* Achievement Badge */}
                  <div className="flex items-center gap-2.5 bg-teal-50/70 border border-teal-200/60 px-3 py-1.5 rounded-xl">
                    <Award className="w-4 h-4 text-teal-700 shrink-0" />
                    <span className="text-[11px] text-teal-900 font-medium leading-tight">
                      Consistent action transforms into permanent identity.
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                <span>Phase 3 of Journey</span>
                <span className="text-teal-700 font-semibold flex items-center gap-1">
                  Permanent Change <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Marketing Transformation Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs max-w-4xl mx-auto"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-left divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            {/* Before Anavori */}
            <div className="pt-4 sm:pt-0 sm:pr-6">
              <span className="text-[10px] font-mono font-bold tracking-wider text-slate-400 uppercase block mb-1">
                BEFORE ANAVORI
              </span>
              <p className="text-xs text-slate-600 font-medium italic">
                “I want to improve, but I struggle to stay consistent.”
              </p>
            </div>

            {/* With Anavori */}
            <div className="pt-4 sm:pt-0 sm:px-6">
              <span className="text-[10px] font-mono font-bold tracking-wider text-emerald-700 uppercase block mb-1">
                WITH ANAVORI
              </span>
              <p className="text-xs text-slate-700 font-medium">
                “I have a clearer system to take small actions and track my personal growth.”
              </p>
            </div>

            {/* Over Time */}
            <div className="pt-4 sm:pt-0 sm:pl-6">
              <span className="text-[10px] font-mono font-bold tracking-wider text-teal-700 uppercase block mb-1">
                OVER TIME
              </span>
              <p className="text-xs text-slate-900 font-bold">
                “Small daily actions become meaningful, long-term progress.”
              </p>
            </div>
          </div>
        </motion.div>

        {/* Optional Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center text-xs text-slate-500 font-sans mt-8 italic"
        >
          Because meaningful change begins with what you do consistently.
        </motion.p>
      </div>
    </section>
  );
}
