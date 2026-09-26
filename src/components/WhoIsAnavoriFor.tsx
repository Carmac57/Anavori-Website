import * as React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Target,
  Compass,
  Flame,
  TrendingUp,
  Check,
  ArrowRight,
  Shield,
  Heart,
  Quote,
  Clock,
  Calendar,
  BookOpen,
  RefreshCw,
  Zap,
} from "lucide-react";

export function WhoIsAnavoriFor() {
  const openGooglePlay = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=com.anavori.app",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToDownload = () => {
    const el = document.getElementById("download");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      openGooglePlay();
    }
  };

  return (
    <section
      id="who-its-for"
      className="py-24 sm:py-32 relative bg-white overflow-hidden border-b border-slate-200/70"
    >
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 -left-24 w-[34rem] h-[34rem] bg-emerald-50/80 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -right-24 w-[32rem] h-[32rem] bg-teal-50/70 blur-[130px] rounded-full pointer-events-none"
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
              WHO IS ANAVORI FOR?
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-display font-bold tracking-tight text-slate-900 mb-5"
          >
            Built for Anyone Striving to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-800">
              Live Intentionally.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans max-w-2xl mx-auto"
          >
            Anavori is built for people who want to become more intentional about their lives and
            take meaningful steps toward personal growth.
          </motion.p>

          {/* Introductory Message Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 14 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-2xl mx-auto bg-gradient-to-r from-emerald-50/60 via-slate-50/80 to-teal-50/60 border border-emerald-200/70 rounded-2xl p-4 sm:p-5 shadow-2xs"
          >
            <p className="text-slate-700 text-sm sm:text-base italic leading-relaxed font-sans">
              “You don't have to have everything figured out to start growing. Sometimes, all you
              need is a clearer direction, a little consistency, and the willingness to take the
              next step.”
            </p>
          </motion.div>
        </div>

        {/* =========================================================================
            RELATABLE SITUATION: "Maybe you've said this before..."
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 sm:mb-24 bg-slate-50/90 rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-3">
              <Quote className="w-4 h-4 text-emerald-700" />
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-800 uppercase">
                SOUND FAMILIAR?
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-6">
              Maybe you've said this before...
            </h3>

            {/* Quotes Grid */}
            <div className="grid sm:grid-cols-2 gap-3.5 mb-8">
              {[
                { quote: "“I'll start tomorrow.”", context: "Delaying action until conditions feel ideal" },
                { quote: "“I just need to be more consistent.”", context: "Wanting steady discipline without the burnout cycle" },
                { quote: "“I know what I should do, but I struggle to stick with it.”", context: "The gap between good intentions and daily execution" },
                { quote: "“I want to become better, but I don't know where to begin.”", context: "Feeling overwhelmed by vague, massive life changes" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-2xl border border-slate-200/70 shadow-2xs flex flex-col justify-between hover:border-emerald-300 transition-colors"
                >
                  <p className="text-sm sm:text-base font-display font-bold text-slate-800 leading-snug">
                    {item.quote}
                  </p>
                  <span className="text-[11px] text-slate-400 font-sans mt-2">
                    {item.context}
                  </span>
                </div>
              ))}
            </div>

            {/* Compassionate Transition */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-emerald-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500" />
                  <h4 className="text-base sm:text-lg font-display font-bold text-slate-900">
                    You don't have to change everything at once.
                  </h4>
                </div>
                <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                  Start with one meaningful action. Then another. Growth begins with the decision to
                  take the next step.
                </p>
              </div>

              <div className="shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/80">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                  Sustainable Growth
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            MAIN USER NEEDS: 5 TARGET AUDIENCE CARDS
           ========================================================================= */}
        <div className="mb-20 sm:mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
              You might relate to Anavori if...
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-sans">
              Discover how Anavori aligns with your personal goals and daily rhythms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* -------------------------------------------------------------------
                CARD 1: HABITS
               ------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    HABIT BUILDING
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                  For people who want to build better habits
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  “You know there are habits you want to build, but turning good intentions into
                  consistent action can be difficult.”
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    How Anavori helps you:
                  </span>
                  {[
                    "Create meaningful daily habits tailored to your values",
                    "Track consistency without cognitive clutter",
                    "Build momentum through small, manageable daily actions",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-800 font-semibold">
                <span>Outcome</span>
                <span>Automatic Daily Rhythms</span>
              </div>
            </motion.div>

            {/* -------------------------------------------------------------------
                CARD 2: DISCIPLINE
               ------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 group-hover:scale-105 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                    DISCIPLINE & WILL
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                  For people who want more discipline
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  “You want to become more disciplined and intentional with your time, actions, and
                  personal goals.”
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    How Anavori supports you:
                  </span>
                  {[
                    "Maintain daily consistency during low-motivation days",
                    "Prioritize meaningful actions over busywork",
                    "Build personal accountability and long-term growth",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-amber-800 font-semibold">
                <span>Outcome</span>
                <span>Personal Agency & Focus</span>
              </div>
            </motion.div>

            {/* -------------------------------------------------------------------
                CARD 3: CONSISTENCY STRUGGLES (Featured / Central)
               ------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-emerald-50/40 via-white to-teal-50/30 rounded-3xl p-6 sm:p-7 border-2 border-emerald-300/80 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                    <RefreshCw className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-white px-2.5 py-1 rounded-full border border-emerald-200 shadow-2xs">
                    SUSTAINABLE MOMENTUM
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                  For people who struggle with consistency
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 italic bg-white/90 p-3 rounded-xl border border-emerald-100">
                  “You may start strong but sometimes find it difficult to maintain momentum over
                  time.”
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    How Anavori helps you:
                  </span>
                  {[
                    "Focus on simply showing up consistently",
                    "Build sustainable routines that survive busy weeks",
                    "Track real progress without the shame of broken streaks",
                    "Recognize and celebrate small, compounding daily wins",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-emerald-100 flex items-center justify-between text-[11px] font-mono text-emerald-800 font-semibold">
                <span>Key Philosophy</span>
                <span>Consistency Over Intensity</span>
              </div>
            </motion.div>

            {/* -------------------------------------------------------------------
                CARD 4: INTENTIONAL GROWTH
               ------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                    AWARENESS & MINDSET
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                  For people who want to grow intentionally
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  “You don't want to simply go through life on autopilot. You want to become more
                  aware of your goals, decisions, habits, and personal direction.”
                </p>

                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono font-bold uppercase text-slate-400 tracking-wider">
                    How Anavori supports you:
                  </span>
                  {[
                    "Daily reflection prompts to pause and clarify your thoughts",
                    "Intentional daily actions aligned with long-term goals",
                    "Goal exploration and mindset clarity with Ana",
                    "Deep personal self-awareness grounded in privacy",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-teal-100 text-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 stroke-[3]" />
                      </div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-teal-800 font-semibold">
                <span>Outcome</span>
                <span>Clarity Over Autopilot</span>
              </div>
            </motion.div>

            {/* -------------------------------------------------------------------
                CARD 5: SEEING PROGRESS
               ------------------------------------------------------------------- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group md:col-span-2 lg:col-span-2"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    VISIBLE PROGRESS
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2.5">
                  For people who want to see their progress
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-6 italic bg-slate-50 p-3 rounded-xl border border-slate-100">
                  “Sometimes growth can be difficult to notice while you're living through it. Seeing
                  your progress can help you recognize how far you've come.”
                </p>

                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { title: "Track Consistency", desc: "View multi-week adherence patterns and streak momentum." },
                    { title: "Recognize Milestones", desc: "Unlock meaningful achievements earned through daily showing up." },
                    { title: "Reflect on Your Journey", desc: "Look back at past journal entries to see mindset growth." },
                    { title: "Celebrate Progress", desc: "Acknowledge the compounding value of your daily discipline." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                      <div className="flex items-center gap-2 mb-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                        <span className="text-xs font-bold text-slate-900">{item.title}</span>
                      </div>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-emerald-800 font-semibold">
                <span>Perspective</span>
                <span>Compounding Life Progress Score™</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            SECTION CLOSING MESSAGE & CALL TO ACTION
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          {/* Subtle background pattern */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 rounded-full text-emerald-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE ANAVORI MINDSET</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              “You don't need to become perfect. <br />
              <span className="text-emerald-400">You just need to keep moving forward.”</span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
              Anavori is designed to support your journey, one intentional step at a time. No
              unrealistic expectations. No toxic pressure. Just honest daily progress.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToDownload}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  100% Private & Offline
                </span>
                <span>•</span>
                <span>Free to begin</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
