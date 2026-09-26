import * as React from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Compass,
  Zap,
  Clock,
  TrendingUp,
  Sprout,
  ArrowRight,
  Shield,
  Heart,
  Quote,
  Layers,
  CheckCircle2,
  Target,
  ArrowDown,
} from "lucide-react";

export function WhyWeBuiltAnavori() {
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

  const philosophySteps = [
    {
      step: "01",
      name: "INTENTION",
      tagline: "Know what matters to you.",
      desc: "Clarity precedes commitment. Identify the values and direction that genuinely matter before trying to change everything.",
      icon: Compass,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200/80",
    },
    {
      step: "02",
      name: "ACTION",
      tagline: "Take meaningful steps.",
      desc: "Turn passive intentions into small, non-intimidating daily acts. Action is the spark that dissolves paralysis.",
      icon: Zap,
      color: "text-teal-700",
      bg: "bg-teal-50",
      border: "border-teal-200/80",
    },
    {
      step: "03",
      name: "CONSISTENCY",
      tagline: "Keep showing up.",
      desc: "Quiet routines beat sporadic intensity. Show up for five minutes on low-energy days rather than waiting for ideal conditions.",
      icon: Clock,
      color: "text-amber-700",
      bg: "bg-amber-50",
      border: "border-amber-200/80",
    },
    {
      step: "04",
      name: "PROGRESS",
      tagline: "Recognize how far you've come.",
      desc: "Growth is easy to miss in the day-to-day. Notice compounding gains through reflection, streaks, and milestone achievements.",
      icon: TrendingUp,
      color: "text-emerald-700",
      bg: "bg-emerald-50",
      border: "border-emerald-200/80",
    },
    {
      step: "05",
      name: "GROWTH",
      tagline: "Continue becoming.",
      desc: "Personal evolution is an ongoing relationship with yourself. Not a finish line, but a continuous path forward.",
      icon: Sprout,
      color: "text-teal-800",
      bg: "bg-teal-50",
      border: "border-teal-200/80",
    },
  ];

  return (
    <section
      id="our-story"
      className="py-24 sm:py-32 relative bg-white overflow-hidden border-b border-slate-200/70"
    >
      {/* Subtle organic ambient aura */}
      <div
        className="absolute top-1/4 -left-28 w-[36rem] h-[36rem] bg-emerald-50/70 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-28 w-[34rem] h-[34rem] bg-teal-50/60 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* =========================================================================
            SECTION HEADER & EYEBROW
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/90 px-3.5 py-1.5 rounded-full mb-4 shadow-2xs"
          >
            <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
            <span className="font-display tracking-widest uppercase text-[11px] font-bold text-emerald-800">
              OUR STORY
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-display font-bold tracking-tight text-slate-900 mb-6 leading-[1.15]"
          >
            Why We Built Anavori.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl font-display font-medium text-emerald-800 leading-snug max-w-2xl mx-auto"
          >
            Because becoming better shouldn't feel like trying to change everything at once.
          </motion.p>
        </div>

        {/* =========================================================================
            THE STORY NARRATIVE
           ========================================================================= */}
        <div className="max-w-4xl mx-auto mb-20 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-8 sm:gap-12 items-start"
          >
            {/* The Tension / The Experience */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              <p className="font-medium text-slate-900">
                Most people genuinely want to improve their lives.
              </p>
              <p>
                We want to build better habits, become more disciplined with our time, stay
                consistent with our ambitions, make thoughtful decisions, and understand ourselves
                a little more deeply.
              </p>
              <p>
                Yet personal growth can quickly become overwhelming. We know what we want to
                change, but get caught in the questions:
              </p>
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-2 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>Where do I even begin?</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>How do I stay consistent when life gets busy?</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>What should I focus on right now?</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  <span>How do I keep moving forward after a setback?</span>
                </div>
              </div>
            </div>

            {/* The Realization */}
            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
              <p>
                Anavori was born from the realization that real, lasting change does not happen
                overnight through aggressive life overhauls or shame-driven discipline.
              </p>
              <p>
                The truth is far gentler, and far more powerful:
              </p>

              <div className="space-y-3 pt-2">
                <div className="bg-emerald-50/80 border border-emerald-200/80 p-3.5 rounded-2xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-slate-900">
                      Small intentional actions create momentum.
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Starting small lowers friction and makes showing up effortless.
                    </p>
                  </div>
                </div>

                <div className="bg-teal-50/70 border border-teal-200/80 p-3.5 rounded-2xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-teal-700 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-slate-900">
                      Consistency creates progress.
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Showing up imperfectly every day beats sporadic bursts of intense effort.
                    </p>
                  </div>
                </div>

                <div className="bg-amber-50/70 border border-amber-200/80 p-3.5 rounded-2xl flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-display font-bold text-slate-900">
                      Progress creates meaningful change over time.
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Small wins compound into lasting identity shifts and authentic self-respect.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            CORE BELIEF CENTERPIECE
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 sm:mb-32 relative max-w-4xl mx-auto"
        >
          {/* Subtle glowing halo behind centerpiece */}
          <div
            className="absolute -inset-1.5 bg-gradient-to-r from-emerald-300/40 via-teal-200/30 to-emerald-200/40 rounded-3xl blur-xl opacity-70 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative bg-gradient-to-b from-white via-slate-50/70 to-emerald-50/30 rounded-3xl p-8 sm:p-14 border border-emerald-200/90 shadow-md text-center">
            <Quote className="w-8 h-8 text-emerald-600/30 mx-auto mb-4" />

            <h3 className="text-2xl sm:text-4xl font-display font-semibold text-slate-800 tracking-tight leading-snug">
              “You don't have to change your entire life today.”
            </h3>

            <div className="my-5 w-12 h-0.5 bg-emerald-300 mx-auto" />

            <p className="text-2xl sm:text-4xl font-display font-bold text-emerald-800 tracking-tight leading-snug">
              “You just have to take the next meaningful step.”
            </p>

            <p className="text-slate-500 text-xs sm:text-sm font-sans max-w-lg mx-auto mt-5 leading-relaxed">
              No guilt. No unrealistic pressure. Just honest, quiet momentum built one decision at
              a time.
            </p>
          </div>
        </motion.div>

        {/* =========================================================================
            THE ANAVORI PHILOSOPHY JOURNEY
           ========================================================================= */}
        <div className="mb-24 sm:mb-32">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider mb-2">
              <span>HOW CHANGE HAPPENS</span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-3">
              The Anavori Philosophy
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-sans">
              Five continuous stages that transform everyday choices into lasting personal growth.
            </p>
          </div>

          {/* Connected Philosophy Progression (Desktop Row, Mobile Stack) */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 sm:gap-5 relative">
            {philosophySteps.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all flex flex-col justify-between group relative"
                >
                  <div>
                    {/* Step Number + Icon Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono font-bold text-slate-400">
                        {item.step}
                      </span>
                      <div
                        className={`w-10 h-10 rounded-2xl ${item.bg} ${item.border} border flex items-center justify-center ${item.color} group-hover:scale-105 transition-transform`}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    <h4 className="text-sm font-mono font-bold tracking-wider uppercase text-slate-900 mb-1">
                      {item.name}
                    </h4>

                    <p className="text-xs font-display font-bold text-emerald-800 mb-2.5 leading-snug">
                      {item.tagline}
                    </p>

                    <p className="text-[11px] text-slate-500 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  {/* Indicator arrow on mobile */}
                  {idx < philosophySteps.length - 1 && (
                    <div className="md:hidden flex justify-center pt-3 text-slate-300">
                      <ArrowDown className="w-4 h-4" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            "MORE THAN AN APP" & BRAND MISSION CARDS
           ========================================================================= */}
        <div className="grid md:grid-cols-12 gap-8 items-stretch mb-20 sm:mb-28">
          {/* Card 1: More Than an App */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 bg-slate-50/80 rounded-3xl p-7 sm:p-9 border border-slate-200/80 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-emerald-700 shadow-2xs">
                <Layers className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-display font-bold text-slate-900">
                More Than an App.
              </h3>

              <p className="text-slate-600 text-sm sm:text-base font-sans leading-relaxed">
                “We want Anavori to become a meaningful space for people who want to be more
                intentional about their lives—a place where habits, reflection, consistency,
                progress, and thoughtful conversations can come together.”
              </p>

              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Anavori does not promise magic overnight transformations. It is designed as a calm,
                honest ecosystem that stands by your side across every stage of your personal journey.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-200/70 text-xs font-mono text-emerald-800 font-semibold">
              Ecosystem for Living Intentionally
            </div>
          </motion.div>

          {/* Card 2: Our Mission */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6 bg-gradient-to-br from-emerald-50/60 via-white to-teal-50/50 rounded-3xl p-7 sm:p-9 border-2 border-emerald-300/80 shadow-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-xs">
                <Target className="w-6 h-6" />
              </div>

              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                <span>OUR CORE PURPOSE</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="text-lg sm:text-xl font-display font-medium text-slate-800 leading-snug italic">
                “To help people take intentional steps toward becoming better versions of
                themselves, one meaningful action at a time.”
              </p>

              <p className="text-xs text-slate-500 font-sans leading-relaxed">
                Every tool, prompt, and system within Anavori is evaluated against this single
                purpose: Does it support authentic personal growth, or does it merely add noise?
              </p>
            </div>

            <div className="pt-6 border-t border-emerald-200/70 text-xs font-mono text-emerald-800 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Grounded in Sustainable Action</span>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            AUTHENTICITY: "This is only the beginning."
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 sm:mb-28 max-w-3xl mx-auto text-center bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-2xs"
        >
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 border border-emerald-200/80 px-3 py-1 rounded-full inline-block mb-3">
            OUR ONGOING JOURNEY
          </span>
          <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
            This is only the beginning.
          </h4>
          <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed max-w-xl mx-auto">
            Anavori is still growing, evolving, and being shaped into something meaningful. Every
            journey starts somewhere—and this is ours. We are building this for everyone who believes
            that showing up today matters.
          </p>
        </motion.div>

        {/* =========================================================================
            CLOSING CALLOUT & CALL TO ACTION
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          {/* Subtle background aura */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 rounded-full text-emerald-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THE INVITATION</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              “Your path to a better life begins with the next step.”
            </h3>

            <p className="text-emerald-400 font-display font-medium text-sm sm:text-base">
              Anavori: Your path to a better life.
            </p>

            <p className="text-slate-300 text-xs sm:text-sm font-sans max-w-lg mx-auto leading-relaxed">
              Start where you are. Use what you have. Take one meaningful action today and let
              consistency do the rest.
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
                  100% Private Offline Storage
                </span>
                <span>•</span>
                <span>Free on Google Play</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
