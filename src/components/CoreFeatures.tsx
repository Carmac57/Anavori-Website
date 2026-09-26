import * as React from "react";
import { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Check,
  Flame,
  TrendingUp,
  BookOpen,
  Award,
  Activity,
  Bot,
  ArrowRight,
  Target,
  Compass,
  Search,
  Calendar,
  Clock,
  Send,
  Zap,
  ShieldCheck,
  Sliders,
  ChevronRight,
} from "lucide-react";

export function CoreFeatures() {
  const [activeTab, setActiveTab] = useState<string>("habits");

  const openGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anavori.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToFeature = (id: string) => {
    setActiveTab(id);
    const element = document.getElementById(`feature-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <section
      id="features"
      className="py-24 sm:py-32 relative bg-slate-50/70 border-y border-slate-200/70 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -right-20 w-[36rem] h-[36rem] bg-emerald-100/30 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-3/4 -left-20 w-[36rem] h-[36rem] bg-amber-100/25 blur-[150px] rounded-full pointer-events-none"
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
              INTEGRATED TOOLSET
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 mb-5"
          >
            Everything You Need to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800">
              Keep Growing.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto"
          >
            Anavori brings meaningful tools together to help you build better habits, stay
            consistent, reflect on your journey, and track your personal growth.
          </motion.p>

          {/* Quick Sub-Navigation Pills */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2"
          >
            {[
              { id: "habits", label: "Habits" },
              { id: "missions", label: "Missions" },
              { id: "journal", label: "Journal" },
              { id: "achievements", label: "Achievements" },
              { id: "score", label: "Life Progress" },
              { id: "ana", label: "Meet Ana" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => scrollToFeature(tab.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-emerald-700 text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200/80 hover:border-emerald-300 hover:text-emerald-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>

        {/* =========================================================================
            ALTERNATING FEATURES SHOWCASE
           ========================================================================= */}
        <div className="space-y-24 sm:space-y-32">
          {/* -----------------------------------------------------------------------
              FEATURE 1: HABITS (Text Left, Visual Right)
             ----------------------------------------------------------------------- */}
          <div
            id="feature-habits"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full">
                <Target className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 uppercase">
                  DAILY RITUALS & DISCIPLINES
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Build Better Habits, <br />
                <span className="text-emerald-700">One Day at a Time.</span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Create meaningful habits, stay focused on what matters, and build consistency
                through small actions repeated every day. Turn intentions into automatic routines
                without cognitive overload.
              </p>

              {/* Functional Outcome Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                    <h4 className="text-xs font-bold text-slate-900">Intentional Design</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Anchor habits to specific times and life domains: Health, Mind, and Work.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Flame className="w-4 h-4 text-amber-500 fill-current" />
                    <h4 className="text-xs font-bold text-slate-900">Momentum Tracking</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Live streak meters and visual completion rings that reinforce daily showing up.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-emerald-800 font-semibold flex items-center gap-1.5">
                <span>Why it matters:</span>
                <span className="text-slate-600 font-normal">
                  You do not rise to the level of your goals; you fall to the level of your systems.
                </span>
              </div>
            </motion.div>

            {/* Feature 1 Visual: Conceptual Habit Interface */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
                {/* Concept Preview Badge */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      TODAY'S HABIT STACK
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    Feature preview
                  </span>
                </div>

                {/* Conceptual Habit Cards */}
                <div className="space-y-3">
                  {/* Habit Card 1 */}
                  <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-emerald-50/40 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">
                          Morning Hydration & Sunlight
                        </h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-mono text-emerald-700 font-bold bg-emerald-100/70 px-1.5 py-0.2 rounded">
                            Health
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Completed 07:15 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/60">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      <span>18d</span>
                    </div>
                  </div>

                  {/* Habit Card 2 */}
                  <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/70 flex items-center justify-between shadow-2xs hover:bg-emerald-50/40 transition-colors">
                    <div className="flex items-center gap-3.5">
                      <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                        <Check className="w-4 h-4 stroke-[3]" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">
                          Deep Work Block (45m)
                        </h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-mono text-teal-700 font-bold bg-teal-100/70 px-1.5 py-0.2 rounded">
                            Focus
                          </span>
                          <span className="text-[10px] font-mono text-slate-400">
                            Completed 10:30 AM
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2 py-1 rounded-lg border border-amber-200/60">
                      <Flame className="w-3.5 h-3.5 fill-current" />
                      <span>14d</span>
                    </div>
                  </div>

                  {/* Habit Card 3 */}
                  <div className="bg-white p-4 rounded-2xl border-2 border-emerald-500/40 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-3.5">
                      <div className="w-7 h-7 rounded-xl border-2 border-slate-300 flex items-center justify-center hover:border-emerald-600 transition-colors">
                        <span className="w-2 h-2 rounded-full bg-slate-300" />
                      </div>
                      <div>
                        <h5 className="text-xs font-bold text-slate-900">
                          Evening Reflection & Reading
                        </h5>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[10px] font-mono text-slate-600 font-bold bg-slate-100 px-1.5 py-0.2 rounded">
                            Mind
                          </span>
                          <span className="text-[10px] font-mono text-amber-700 font-semibold">
                            Scheduled 09:30 PM
                          </span>
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
                      Pending
                    </span>
                  </div>
                </div>

                {/* Bottom completion progress */}
                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-slate-500">Daily Completion</span>
                    <span className="text-xs font-mono font-bold text-emerald-700">67%</span>
                  </div>
                  <div className="w-32 bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-emerald-600 h-full w-2/3 rounded-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------------------
              FEATURE 2: MISSIONS (Visual Left, Text Right)
             ----------------------------------------------------------------------- */}
          <div
            id="feature-missions"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
          >
            {/* Feature 2 Visual: Conceptual Mission Cards */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden group hover:border-amber-300 transition-all duration-300">
                {/* Concept Preview Badge */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      ACTIVE MISSIONS & CHALLENGES
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    Concept preview
                  </span>
                </div>

                <div className="space-y-3.5">
                  {/* Mission Card 1 */}
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-white border border-amber-200/80 shadow-2xs">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[9px] font-mono font-bold text-amber-800 uppercase tracking-wider bg-white px-2 py-0.5 rounded border border-amber-200 shadow-2xs">
                          7-DAY DISCIPLINE SPRINT
                        </span>
                        <h5 className="text-sm font-display font-bold text-slate-900 mt-1">
                          The Digital Sunset Protocol
                        </h5>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-amber-800">
                        Day 5 of 7
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mb-3">
                      Power down non-essential screens 60 minutes before sleep to restore circadian
                      focus.
                    </p>
                    <div className="w-full bg-amber-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-amber-500 h-full w-[71%] rounded-full" />
                    </div>
                  </div>

                  {/* Mission Card 2 */}
                  <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200/70 shadow-2xs">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <span className="text-[9px] font-mono font-bold text-emerald-800 uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60">
                          HABIT ANCHOR
                        </span>
                        <h5 className="text-sm font-display font-bold text-slate-900 mt-1">
                          21 Days of Daily Movement
                        </h5>
                      </div>
                      <span className="text-[11px] font-mono font-bold text-emerald-700">
                        18 / 21 Days
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 mb-3">
                      Complete at least 20 minutes of physical conditioning each day.
                    </p>
                    <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                      <div className="bg-emerald-600 h-full w-[85%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500">
                  <span>Structured progression</span>
                  <span className="text-amber-800 font-bold flex items-center gap-1">
                    2 Active • 4 Completed
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
                <Compass className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-amber-800 uppercase">
                  STRUCTURED CHALLENGES
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Turn Growth Into <br />
                <span className="text-amber-700">Decisive Action.</span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Take on meaningful missions designed to encourage action, consistency, and progress
                throughout your personal growth journey. Break down lofty ambitions into targeted,
                time-bound challenges.
              </p>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Zap className="w-4 h-4 text-amber-600" />
                    <h4 className="text-xs font-bold text-slate-900">Clear Objectives</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Eliminate guesswork with structured daily requirements and milestone targets.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Award className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold text-slate-900">Earned Confidence</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Finishing multi-day missions establishes lasting proof of your personal agency.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-amber-800 font-semibold flex items-center gap-1.5">
                <span>Why it matters:</span>
                <span className="text-slate-600 font-normal">
                  Ambition without an active challenge quickly dissolves into procrastination.
                </span>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------------------
              FEATURE 3: JOURNAL & REFLECTION (Text Left, Visual Right)
             ----------------------------------------------------------------------- */}
          <div
            id="feature-journal"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200/70 px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5 text-teal-700" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-teal-800 uppercase">
                  QUIET REFLECTION & SELF-AWARENESS
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Pause. Reflect. <br />
                <span className="text-teal-700">Understand Your Journey.</span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Capture your thoughts, reflect on your experiences, and look back on the moments
                that shape your personal growth. Anavori gives you a peaceful space to unpack
                challenges and clarify your mindset.
              </p>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-teal-600" />
                    <h4 className="text-xs font-bold text-slate-900">Thoughtful Prompts</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Targeted inquiries that prompt honest self-assessment without feeling forced.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold text-slate-900">Total Privacy</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Stored 100% locally on your device. Your deepest thoughts never leave your phone.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-teal-800 font-semibold flex items-center gap-1.5">
                <span>Why it matters:</span>
                <span className="text-slate-600 font-normal">
                  Unexamined action repeats old mistakes; reflection converts experience into wisdom.
                </span>
              </div>
            </motion.div>

            {/* Feature 3 Visual: Conceptual Journal Interface */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden group hover:border-teal-300 transition-all duration-300">
                {/* Concept Preview Badge */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-teal-700" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      EVENING REVIEW • TODAY
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    Concept preview
                  </span>
                </div>

                {/* Prompt & Entry */}
                <div className="space-y-3.5">
                  <div className="bg-teal-50/70 border border-teal-200/70 p-3.5 rounded-2xl">
                    <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold text-teal-800 uppercase mb-1">
                      <Sparkles className="w-3 h-3" />
                      <span>EVENING PROMPT</span>
                    </div>
                    <p className="text-xs font-display font-bold text-slate-900 leading-snug">
                      “What small decision today reinforced the discipline you want to maintain?”
                    </p>
                  </div>

                  <div className="bg-slate-50/90 p-4 rounded-2xl border border-slate-200/70 shadow-2xs space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>Reflective Entry</span>
                      <span>21:40 • 4 min read</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-sans">
                      “Rather than checking notifications when feeling fatigued mid-afternoon, I
                      stepped away for a 10-minute walk. Returning with clear eyes allowed me to
                      finish the focus block calmly.”
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                        #discipline
                      </span>
                      <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-600">
                        #focus
                      </span>
                      <span className="text-[9px] font-mono bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-emerald-800 font-semibold">
                        #mindset
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Encrypted locally</span>
                  <span className="text-teal-700 font-bold">100% Private Offline Storage</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------------------
              FEATURE 4: ACHIEVEMENTS (Visual Left, Text Right)
             ----------------------------------------------------------------------- */}
          <div
            id="feature-achievements"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
          >
            {/* Feature 4 Visual: Conceptual Achievement Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden group hover:border-amber-300 transition-all duration-300">
                {/* Concept Preview Badge */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-amber-600" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      MILESTONE HALL
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    Concept preview
                  </span>
                </div>

                {/* Badges Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs mb-2">
                      🏆
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">21-Day Habit Anchor</h5>
                      <p className="text-[10px] text-amber-800 font-medium mt-0.5">
                        Consistent Daily Showing
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-700 font-bold mt-2">
                      ✓ UNLOCKED
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-xs mb-2">
                      ⚡
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900">Deep Work Centurion</h5>
                      <p className="text-[10px] text-emerald-800 font-medium mt-0.5">
                        1,000 Focus Minutes
                      </p>
                    </div>
                    <span className="text-[9px] font-mono text-emerald-700 font-bold mt-2">
                      ✓ UNLOCKED
                    </span>
                  </div>
                </div>

                {/* In-Progress Milestone */}
                <div className="p-3.5 rounded-2xl bg-slate-50/90 border border-slate-200/70">
                  <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                    <span className="font-bold text-slate-800">Master of Consistency</span>
                    <span className="text-amber-800 font-bold">42 / 50 Days</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden mb-1">
                    <div className="bg-gradient-to-r from-amber-500 to-emerald-600 h-full w-[84%] rounded-full" />
                  </div>
                  <span className="text-[10px] text-slate-500 font-mono">
                    8 days remaining until unlock
                  </span>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Meaningful recognition</span>
                  <span className="text-amber-800 font-bold">Earned Through Effort</span>
                </div>
              </div>
            </motion.div>

            {/* Feature 4 Text */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200/70 px-3 py-1 rounded-full">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-amber-800 uppercase">
                  PROGRESS RECOGNITION
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Celebrate Every <br />
                <span className="text-amber-700">Step Forward.</span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Recognize your consistency, unlock achievements, and celebrate the milestones you
                reach along the way. Genuine positive reinforcement keeps you locked in on the
                long-term journey.
              </p>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-4 h-4 text-amber-600" />
                    <h4 className="text-xs font-bold text-slate-900">Meaningful Milestones</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Badges anchored to real physical execution rather than superficial logins.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold text-slate-900">Intrinsic Momentum</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Visual proof that your daily dedication is steadily building your future self.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-amber-800 font-semibold flex items-center gap-1.5">
                <span>Why it matters:</span>
                <span className="text-slate-600 font-normal">
                  Acknowledging your consistency fuels the discipline needed for the next chapter.
                </span>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------------------
              FEATURE 5: LIFE PROGRESS SCORE (Text Left, Visual Right)
             ----------------------------------------------------------------------- */}
          <div
            id="feature-score"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
          >
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/70 px-3 py-1 rounded-full">
                <Activity className="w-3.5 h-3.5 text-emerald-700" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-800 uppercase">
                  MACRO-LEVEL INSIGHTS
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                See the Bigger Picture <br />
                <span className="text-emerald-700">of Your Growth.</span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Go beyond individual habits and gain a clearer view of your overall progress
                across your personal growth journey. Understand how consistent actions in one area
                elevate your entire lifestyle.
              </p>

              {/* Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Sliders className="w-4 h-4 text-emerald-600" />
                    <h4 className="text-xs font-bold text-slate-900">Multi-Dimensional</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Consolidates habit reliability, deep focus duration, and reflection consistency.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-teal-600" />
                    <h4 className="text-xs font-bold text-slate-900">Honest Trajectory</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Transparent mathematical modeling that rewards true long-term consistency.
                  </p>
                </div>
              </div>

              <div className="pt-2 text-xs font-mono text-emerald-800 font-semibold flex items-center gap-1.5">
                <span>Why it matters:</span>
                <span className="text-slate-600 font-normal">
                  Isolated habits feel small; seeing their combined impact reveals your true evolution.
                </span>
              </div>
            </motion.div>

            {/* Feature 5 Visual: Conceptual Life Progress Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 relative"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl relative overflow-hidden group hover:border-emerald-300 transition-all duration-300">
                {/* Concept Preview Badge */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-600" />
                    <span className="text-xs font-mono font-bold text-slate-900">
                      LIFE PROGRESS SCORE™
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    Concept preview
                  </span>
                </div>

                {/* Radial Score Gauge Card */}
                <div className="bg-slate-50/80 rounded-2xl p-4 border border-slate-100 flex flex-col sm:flex-row items-center gap-6 mb-4">
                  {/* Gauge */}
                  <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      <path
                        className="text-slate-200"
                        strokeWidth="3.5"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      <path
                        className="text-emerald-600"
                        strokeDasharray="84, 100"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-2xl font-display font-bold text-slate-900">84</span>
                      <span className="text-[9px] font-mono text-slate-400">/ 100</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-200">
                      High Growth Phase
                    </span>
                    <h5 className="text-sm font-display font-bold text-slate-900 mt-1.5">
                      Strong 30-Day Momentum
                    </h5>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
                      Your habit adherence and morning focus blocks are currently driving +14%
                      greater overall consistency.
                    </p>
                  </div>
                </div>

                {/* 3 Domain Breakdown Bars */}
                <div className="space-y-2.5">
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-700">Habit Adherence</span>
                      <span className="font-bold text-emerald-700">88%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-emerald-600 h-full w-[88%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-700">Deep Focus Blocks</span>
                      <span className="font-bold text-teal-700">81%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-teal-600 h-full w-[81%] rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-700">Reflection Consistency</span>
                      <span className="font-bold text-amber-700">83%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5">
                      <div className="bg-amber-500 h-full w-[83%] rounded-full" />
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Balanced assessment</span>
                  <span className="text-emerald-700 font-bold">Updated in real-time</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* -----------------------------------------------------------------------
              FEATURE 6: MEET ANA (Visual Left, Text Right - Prominent AI Companion)
             ----------------------------------------------------------------------- */}
          <div
            id="feature-ana"
            className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center scroll-mt-28"
          >
            {/* Feature 6 Visual: Conceptual AI Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 order-2 lg:order-1 relative"
            >
              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-emerald-300/80 shadow-2xl relative overflow-hidden group">
                {/* Subtle emerald ambient aura inside Ana card */}
                <div
                  className="absolute -top-10 -right-10 w-48 h-48 bg-emerald-100/60 blur-3xl rounded-full pointer-events-none"
                  aria-hidden="true"
                />

                {/* Header */}
                <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100 relative z-10">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shadow-xs">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-slate-900">Ana</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      </div>
                      <span className="text-[10px] font-mono text-slate-400">
                        AI Growth Companion
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200/60">
                    Concept preview
                  </span>
                </div>

                {/* Conversation Body */}
                <div className="space-y-3.5 relative z-10">
                  {/* User bubble */}
                  <div className="flex justify-end">
                    <div className="bg-slate-900 text-white text-xs p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs leading-relaxed">
                      I felt distracted during my deep work block today. How should I reset for
                      tomorrow?
                    </div>
                  </div>

                  {/* Ana response bubble */}
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-1">
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="bg-emerald-50/80 border border-emerald-200/70 text-slate-800 text-xs p-3.5 rounded-2xl rounded-tl-xs max-w-[90%] shadow-2xs leading-relaxed space-y-2">
                      <p>
                        Distraction is usually fatigue or ambiguous priorities, not a lack of
                        willpower.
                      </p>
                      <p className="text-slate-600">
                        Tomorrow, avoid forcing a massive 60-minute sprint right away. Instead,
                        define your <strong>single highest-leverage task</strong> and commit to an
                        initial 15-minute block. What is that one action for tomorrow?
                      </p>
                    </div>
                  </div>

                  {/* Quick suggested follow-up chips */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[10px] font-mono bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-700 shadow-2xs">
                      “Drafting the proposal”
                    </span>
                    <span className="text-[10px] font-mono bg-white border border-slate-200 px-2.5 py-1 rounded-full text-slate-700 shadow-2xs">
                      “Reflect on morning friction”
                    </span>
                  </div>
                </div>

                {/* Fake Input Row */}
                <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
                  <div className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-400 font-sans">
                    Ask Ana for perspective...
                  </div>
                  <button
                    disabled
                    className="w-8 h-8 rounded-xl bg-emerald-700 text-white flex items-center justify-center opacity-80 cursor-not-allowed"
                    aria-label="Send conceptual prompt"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Feature 6 Text: Prominent Companion */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6 space-y-6 order-1 lg:order-2"
            >
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300 px-3.5 py-1 rounded-full">
                <Bot className="w-3.5 h-3.5 text-emerald-800" />
                <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-900 uppercase">
                  INTELLIGENT COMPANION
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight leading-tight">
                Meet Ana, Your <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800">
                  AI Growth Companion.
                </span>
              </h3>

              <p className="text-slate-600 text-base leading-relaxed font-sans">
                Ana is designed to be a supportive part of your personal growth journey, helping
                you reflect, think through challenges, explore ideas, and stay focused on your
                goals.
              </p>

              {/* Functional Areas of Support */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Compass className="w-4 h-4 text-emerald-700" />
                    <h4 className="text-xs font-bold text-slate-900">Thoughtful Sounding Board</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Discuss friction points, break down complex goals, and regain clarity.
                  </p>
                </div>
                <div className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-2xs">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-teal-700" />
                    <h4 className="text-xs font-bold text-slate-900">Personal Growth Dialogue</h4>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    Explore deeper questions about motivation, values, and long-term intentions.
                  </p>
                </div>
              </div>

              {/* Ethical Disclaimer Notice */}
              <div className="bg-slate-100/80 border border-slate-200/80 rounded-2xl p-3.5 text-[11px] text-slate-500 leading-relaxed font-mono">
                <span className="font-bold text-slate-700">Ethical Note:</span> Ana is an AI
                thinking partner designed to help you reflect and explore ideas. Ana does not
                provide medical, mental health, legal, or financial advice.
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            SECTION CLOSING TRANSITION & CALL TO ACTION
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 sm:mt-32 text-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-sm max-w-3xl mx-auto"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200/70 flex items-center justify-center mx-auto mb-4 text-emerald-700">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 tracking-tight mb-3">
            Your journey is personal. Your growth should be too.
          </h3>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-8 font-sans">
            Anavori brings the tools together. You take the next step.
          </p>

          <button
            onClick={openGooglePlay}
            className="bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold px-8 py-4 rounded-full text-sm font-display inline-flex items-center gap-2.5 transition-all duration-200 shadow-md shadow-emerald-700/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            aria-label="Start your journey on Google Play"
          >
            <span>Start Your Journey</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <p className="text-[11px] text-slate-400 font-mono mt-4">
            Available on Google Play • Free to start • Offline-friendly
          </p>
        </motion.div>
      </div>
    </section>
  );
}
