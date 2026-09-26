import * as React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Check,
  Flame,
  TrendingUp,
  Compass,
  Award,
  Clock,
  ArrowRight,
  ShieldCheck,
  Target,
  Layers,
  Heart,
} from "lucide-react";

export function KeyBenefits() {
  const openGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anavori.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section
      id="benefits"
      className="py-24 sm:py-32 relative bg-white overflow-hidden"
    >
      {/* Subtle brand ambient glow for depth */}
      <div
        className="absolute top-1/3 -left-20 w-[32rem] h-[32rem] bg-emerald-50/70 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 -right-20 w-[30rem] h-[30rem] bg-amber-50/60 blur-[130px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* =========================================================================
            SECTION HEADER
           ========================================================================= */}
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
              OUTCOMES THAT MATTER
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 mb-5"
          >
            More Than Just{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800">
              Habit Tracking.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto"
          >
            Anavori is designed to help you take intentional steps toward personal growth,
            one day at a time.
          </motion.p>

          {/* Visual Storytelling Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center gap-3"
          >
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[11px] sm:text-xs font-mono font-semibold text-slate-700">
              <span className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                Start With Intention
              </span>
              <span className="text-slate-300">→</span>
              <span className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                Take Small Actions
              </span>
              <span className="text-slate-300">→</span>
              <span className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                Build Consistency
              </span>
              <span className="text-slate-300">→</span>
              <span className="bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                Track Your Progress
              </span>
              <span className="text-slate-300">→</span>
              <span className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md border border-emerald-200/80 font-bold">
                Celebrate Growth
              </span>
            </div>
            <p className="text-xs text-slate-500 font-sans italic">
              “Small actions, repeated consistently, can lead to meaningful progress.”
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            6 KEY BENEFIT CARDS (3x2 Grid)
           ========================================================================= */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* -----------------------------------------------------------------------
              BENEFIT 1: BUILD HABITS THAT LAST
             ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70">
                  IDENTITY & HABITS
                </span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform duration-300">
                  <Check className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                Build Habits That Last
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                Turn meaningful intentions into consistent daily actions and gradually build
                habits that support the person you want to become.
              </p>

              {/* Micro-Visual: Habit Intentions List */}
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pb-1 border-b border-slate-200/60">
                  <span>DAILY HABIT STACK</span>
                  <span className="text-emerald-700 font-bold">100% Intentional</span>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-slate-200/60 text-xs shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[8px] font-bold">
                      ✓
                    </div>
                    <span className="text-slate-800 font-medium">Daily Deep Work Protocol</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                    Core
                  </span>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-slate-200/60 text-xs shadow-2xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-600 flex items-center justify-center text-white text-[8px] font-bold">
                      ✓
                    </div>
                    <span className="text-slate-800 font-medium">Evening Unplug & Review</span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                    Ritual
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-800 font-medium font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Rooted in who you want to become</span>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BENEFIT 2: STAY CONSISTENT
             ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/70">
                  DAILY MOMENTUM
                </span>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-5 h-5 fill-current" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                Stay Consistent
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                Stay motivated by tracking your daily progress, building streaks, and creating
                momentum through small actions.
              </p>

              {/* Micro-Visual: Streak & Momentum */}
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    <span className="text-xs font-bold text-slate-900 font-mono">
                      14-Day Momentum
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                    Active Streak
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1 text-center bg-white p-2 rounded-xl border border-slate-200/60 shadow-2xs">
                  {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <span className="text-[9px] font-mono text-slate-400">{d}</span>
                      <div
                        className={`w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-bold ${
                          i <= 5
                            ? "bg-amber-500 text-white shadow-2xs"
                            : "bg-emerald-600 text-white"
                        }`}
                      >
                        ✓
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-800 font-medium font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Small daily actions compound into unstoppable momentum</span>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BENEFIT 3: SEE YOUR GROWTH
             ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/70">
                  VISUAL PROGRESS
                </span>
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                See Your Growth
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                Track your progress and recognize how your small daily actions contribute to
                meaningful long-term personal growth.
              </p>

              {/* Micro-Visual: Upward Compounding Curve */}
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-mono font-bold text-slate-700">
                    LONG-TERM DISCIPLINE
                  </span>
                  <span className="text-[10px] font-mono text-teal-700 font-bold bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200/60">
                    Compounding Up
                  </span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 h-16 flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 160 50" preserveAspectRatio="none">
                    <path
                      d="M 0 45 Q 45 42, 90 28 T 160 6"
                      fill="none"
                      stroke="#0d9488"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <circle cx="0" cy="45" r="2.5" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                    <circle cx="90" cy="28" r="2.5" fill="#ffffff" stroke="#0d9488" strokeWidth="2" />
                    <circle cx="160" cy="6" r="3.5" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="flex justify-between text-[9px] font-mono text-slate-400 mt-1.5">
                  <span>Day 1</span>
                  <span>Day 30</span>
                  <span className="text-teal-700 font-bold">Visible Evolution</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-teal-800 font-medium font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Turns invisible effort into visible transformation</span>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BENEFIT 4: STAY INTENTIONAL
             ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/70">
                  CLARITY & FOCUS
                </span>
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-110 transition-transform duration-300">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                Stay Intentional
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                Move through life with greater awareness by setting meaningful goals, reflecting on
                your journey, and focusing on what truly matters to you.
              </p>

              {/* Micro-Visual: Reflection & Purpose Box */}
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>MINDFUL DIRECTION</span>
                  <span className="text-emerald-700 font-bold">Clear Priorities</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs">
                  <p className="text-[11px] text-slate-700 italic leading-snug">
                    “Did my daily actions align with who I aspire to be today?”
                  </p>
                  <div className="flex items-center gap-2 mt-2 pt-2 border-t border-slate-100">
                    <span className="text-[9px] font-mono text-emerald-800 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">
                      Reflect Daily
                    </span>
                    <span className="text-[9px] font-mono text-slate-400">0 Distractions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-800 font-medium font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Prioritize what matters over noisy busywork</span>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BENEFIT 5: CELEBRATE YOUR PROGRESS
             ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/70">
                  GENUINE MILESTONES
                </span>
                <div className="w-10 h-10 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-700 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                Celebrate Your Progress
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                Recognize your achievements, celebrate important milestones, and stay motivated
                as you continue moving forward.
              </p>

              {/* Micro-Visual: Realistic Milestones */}
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 pb-1 border-b border-slate-200/60">
                  <span>UNLOCKED MILESTONES</span>
                  <span className="text-amber-700 font-bold">Earned Effort</span>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-2xs text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-[10px]">
                      🏆
                    </span>
                    <span className="text-slate-800 font-medium">21-Day Habit Anchor</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 font-bold">Achieved</span>
                </div>
                <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-xl border border-slate-200/60 shadow-2xs text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center text-[10px]">
                      ⚡
                    </span>
                    <span className="text-slate-800 font-medium">500 Deep Focus Minutes</span>
                  </div>
                  <span className="text-[9px] font-mono text-emerald-700 font-bold">Achieved</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-amber-800 font-medium font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
              <span>Celebrate real work without fake vanity metrics</span>
            </div>
          </motion.div>

          {/* -----------------------------------------------------------------------
              BENEFIT 6: GROW AT YOUR OWN PACE
             ----------------------------------------------------------------------- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -4 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/70">
                  SUSTAINABLE PROGRESS
                </span>
                <div className="w-10 h-10 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5">
                Grow At Your Own Pace
              </h3>

              <p className="text-slate-600 text-sm leading-relaxed mb-6 font-sans">
                Personal growth is not a race. Build your journey around your own goals,
                priorities, and progress.
              </p>

              {/* Micro-Visual: Gentle Balance Indicator */}
              <div className="bg-slate-50/80 rounded-2xl p-3.5 border border-slate-100 space-y-2.5">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>SUSTAINABLE RHYTHM</span>
                  <span className="text-teal-700 font-bold">Zero Burnout</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-2xs space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-700 font-medium">
                    <span>Individual Pace</span>
                    <span className="text-emerald-700 font-bold">Balanced</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-full w-3/4 rounded-full" />
                  </div>
                  <div className="flex justify-between text-[9px] font-mono text-slate-400 pt-0.5">
                    <span>No Comparison</span>
                    <span>100% Offline Privacy</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs text-teal-800 font-medium font-sans">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
              <span>Sustainable discipline over unrealistic perfection</span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            FEATURED BENEFIT BANNER: "Your growth is bigger than a checklist."
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white p-8 sm:p-12 overflow-hidden shadow-xl border border-slate-800 text-left"
        >
          {/* Subtle brand ambient accents inside the banner */}
          <div
            className="absolute -top-16 -right-16 w-80 h-80 bg-emerald-500/20 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-16 -left-16 w-80 h-80 bg-amber-500/15 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3 py-1 rounded-full mb-4">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase">
                  THE HOLISTIC APPROACH
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight mb-3">
                Your growth is bigger than a checklist.
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                Anavori brings habits, consistency, reflection, progress, and personal growth
                together in one intentional journey.
              </p>

              {/* 5 Holistic Pillars */}
              <div className="mt-6 flex flex-wrap gap-2 sm:gap-3 text-xs font-mono font-medium">
                <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white">
                  • Meaningful Habits
                </span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white">
                  • Daily Consistency
                </span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white">
                  • Quiet Reflection
                </span>
                <span className="bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-white">
                  • Visual Progress
                </span>
                <span className="bg-emerald-500/20 backdrop-blur-md px-3 py-1.5 rounded-full border border-emerald-400/40 text-emerald-300 font-semibold">
                  • Lifelong Growth
                </span>
              </div>
            </div>

            {/* Action CTA inside banner */}
            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col items-start gap-3">
              <button
                onClick={openGooglePlay}
                className="bg-emerald-500 hover:bg-emerald-400 active:bg-emerald-600 text-slate-950 font-bold px-7 py-3.5 rounded-full text-sm font-display flex items-center gap-2.5 transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                aria-label="Start your journey with Anavori on Google Play"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <span className="text-[11px] text-slate-400 font-mono">
                100% Offline • Complete Privacy
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
