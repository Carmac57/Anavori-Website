import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Sparkles,
  Bot,
  MessageSquare,
  Compass,
  Zap,
  Target,
  Scale,
  TrendingUp,
  ShieldCheck,
  ArrowRight,
  Send,
  Check,
  Heart,
  Quote,
  Clock,
  BookOpen,
  Layers,
  HelpCircle,
} from "lucide-react";

interface ChatSnippet {
  id: string;
  prompt: string;
  userMessage: string;
  anaResponse: string;
  followUpUser?: string;
  followUpAna?: string;
}

const chatSnippets: ChatSnippet[] = [
  {
    id: "consistency",
    prompt: "Struggling with consistency",
    userMessage: "I've been struggling to stay consistent with my goals lately.",
    anaResponse:
      "That's okay. Consistency doesn't mean being perfect. Let's take a step back—what do you think has been making it difficult lately?",
    followUpUser:
      "I set high expectations for my mornings, and when I miss one session, I feel like abandoning the whole week.",
    followUpAna:
      "That all-or-nothing feeling is very natural. What if we redefine success not as a flawless streak, but simply showing up for five minutes tomorrow? What does a gentle restart look like for you?",
  },
  {
    id: "reflection",
    prompt: "Reflecting on a heavy day",
    userMessage: "Today felt overwhelming and I'm not sure if I made any real progress.",
    anaResponse:
      "When days feel heavy, it's easy to overlook what went right. Take a breath. Did you show up for yourself in even one small moment today?",
    followUpUser: "I did step away from my laptop to take a walk when I felt tension rising.",
    followUpAna:
      "That is real progress—choosing awareness over exhaustion. Self-regulation is just as foundational to growth as any checked box.",
  },
  {
    id: "decision",
    prompt: "Clarifying a priority",
    userMessage: "I have three different projects I want to start this month and I feel paralyzed.",
    anaResponse:
      "Having many ambitions is exciting, but dividing focus often dilutes momentum. If you could only complete one by month's end that would make everything else easier, which would it be?",
    followUpUser: "Building the morning deep work routine. Everything else cascades from that.",
    followUpAna:
      "Then that is your anchor. Let the other two wait quietly on your ideas list. Focus on protecting that single habit first.",
  },
];

export function MeetAna() {
  const [selectedSnippet, setSelectedSnippet] = useState<ChatSnippet>(chatSnippets[0]);

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
      id="meet-ana"
      className="py-24 sm:py-32 relative bg-gradient-to-b from-white via-emerald-50/25 to-slate-50/70 overflow-hidden border-b border-slate-200/70"
    >
      {/* Soft atmospheric ambient glow */}
      <div
        className="absolute top-1/4 -right-28 w-[36rem] h-[36rem] bg-emerald-100/50 blur-[150px] rounded-full pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 -left-28 w-[34rem] h-[34rem] bg-teal-100/40 blur-[140px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* =========================================================================
            TOP HERO: SECTION INTRODUCTION & CHAT PREVIEW SPLIT
           ========================================================================= */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 sm:mb-28">
          {/* Left Column: Narrative & Identity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200/90 px-3.5 py-1.5 rounded-full shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
              <span className="font-display tracking-widest uppercase text-[11px] font-bold text-emerald-800">
                YOUR AI GROWTH COMPANION
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-6xl font-display font-bold tracking-tight text-slate-900 leading-[1.1]">
              Meet Ana.
            </h2>

            {/* Supporting Headline */}
            <p className="text-xl sm:text-2xl font-display font-medium text-emerald-800 leading-snug">
              A space to reflect, think, and keep moving forward.
            </p>

            {/* Supporting Description */}
            <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed">
              Ana is your AI Growth Companion within Anavori. Whether you're thinking through a
              challenge, reflecting on your day, exploring your goals, or simply looking for a
              different perspective, Ana is designed to support meaningful conversations along your
              personal growth journey.
            </p>

            {/* Personality Attributes */}
            <div className="pt-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block mb-3">
                ANA'S CONVERSATIONAL POSTURE
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Calm & Grounded",
                  "Thoughtful Inquiry",
                  "Encouraging",
                  "Non-Judgmental",
                  "Intelligent",
                  "Quiet Clarity",
                ].map((trait, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={scrollToDownload}
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-all active:scale-98 cursor-pointer"
              >
                <span>Start Your Journey With Ana</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Private & respectful companion</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Conceptual Chat Interface */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Ambient halo behind chat container */}
            <div
              className="absolute -inset-2 bg-gradient-to-r from-emerald-200/40 via-teal-200/30 to-emerald-100/40 rounded-3xl blur-xl opacity-70 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative bg-white rounded-3xl border-2 border-emerald-200/90 shadow-2xl overflow-hidden">
              {/* Chat Header */}
              <div className="px-5 py-4 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white flex items-center justify-center shadow-xs">
                      <Bot className="w-5 h-5" />
                    </div>
                    <span
                      className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white"
                      title="Online"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-sm font-display font-bold text-slate-900">Ana</h3>
                      <span className="text-[10px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded-full font-semibold">
                        Growth Companion
                      </span>
                    </div>
                    <p className="text-[11px] font-mono text-slate-500">
                      Quiet space for reflection & direction
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-mono text-slate-400 bg-white px-2.5 py-1 rounded-full border border-slate-200/70">
                  Concept preview
                </span>
              </div>

              {/* Chat Scenario Tabs / Interactive Prompts */}
              <div className="px-5 py-2.5 bg-slate-100/60 border-b border-slate-200/70 flex items-center gap-2 overflow-x-auto no-scrollbar">
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider shrink-0">
                  Try Topic:
                </span>
                {chatSnippets.map((snippet) => {
                  const isActive = selectedSnippet.id === snippet.id;
                  return (
                    <button
                      key={snippet.id}
                      onClick={() => setSelectedSnippet(snippet)}
                      className={`text-[11px] font-mono px-3 py-1 rounded-full transition-all cursor-pointer shrink-0 ${
                        isActive
                          ? "bg-emerald-700 text-white font-semibold shadow-xs"
                          : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200/80"
                      }`}
                    >
                      {snippet.prompt}
                    </button>
                  );
                })}
              </div>

              {/* Chat Body */}
              <div className="p-5 sm:p-6 space-y-4 min-h-[340px] bg-slate-50/40 flex flex-col justify-end">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedSnippet.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-3.5 text-xs sm:text-sm"
                  >
                    {/* User Message 1 */}
                    <div className="flex justify-end">
                      <div className="bg-slate-900 text-white p-3.5 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs leading-relaxed font-sans">
                        {selectedSnippet.userMessage}
                      </div>
                    </div>

                    {/* Ana Response 1 */}
                    <div className="flex items-start gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                        <Bot className="w-4 h-4" />
                      </div>
                      <div className="bg-white border border-emerald-200/90 text-slate-800 p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] shadow-2xs leading-relaxed font-sans space-y-1.5">
                        <p>{selectedSnippet.anaResponse}</p>
                      </div>
                    </div>

                    {/* Optional Follow-up Exchange */}
                    {selectedSnippet.followUpUser && (
                      <div className="flex justify-end pt-1">
                        <div className="bg-slate-800 text-slate-100 p-3 rounded-2xl rounded-tr-xs max-w-[85%] shadow-xs leading-relaxed font-sans text-xs">
                          {selectedSnippet.followUpUser}
                        </div>
                      </div>
                    )}

                    {selectedSnippet.followUpAna && (
                      <div className="flex items-start gap-2.5">
                        <div className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                          <Sparkles className="w-3.5 h-3.5" />
                        </div>
                        <div className="bg-gradient-to-br from-emerald-50/90 to-teal-50/70 border border-emerald-200/80 text-slate-800 p-3.5 rounded-2xl rounded-tl-xs max-w-[88%] shadow-2xs leading-relaxed font-sans">
                          <p>{selectedSnippet.followUpAna}</p>
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Chat Input Bar (Concept mockup) */}
              <div className="p-3.5 bg-white border-t border-slate-200/80 flex items-center gap-2">
                <div className="flex-1 bg-slate-100/80 rounded-xl px-3.5 py-2.5 text-xs text-slate-400 font-sans flex items-center justify-between">
                  <span>Share what's on your mind...</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <span className="text-[10px] font-mono">Press Return</span>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Send message"
                  className="w-9 h-9 rounded-xl bg-emerald-700 text-white flex items-center justify-center shrink-0 hover:bg-emerald-600 transition-colors shadow-2xs cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Footer Responsible AI Note */}
              <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 text-center">
                <p className="text-[10px] text-slate-400 font-sans leading-tight">
                  Ana is designed for reflection and personal growth, not professional medical, legal, or financial advice.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =========================================================================
            ANA'S ROLE: "Sometimes, You Just Need a Space to Think."
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 sm:mb-24 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 text-emerald-800 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Quote className="w-4 h-4 text-emerald-700" />
            <span>THE PURPOSE OF ANA</span>
          </div>

          <h3 className="text-2xl sm:text-4xl font-display font-bold text-slate-900 tracking-tight mb-4">
            Sometimes, You Just Need a Space to Think.
          </h3>

          <p className="text-slate-600 text-base sm:text-lg font-sans leading-relaxed">
            Personal growth isn't always about having all the answers. Sometimes, growth begins by
            asking better questions, reflecting on your experiences, and taking a moment to
            understand where you are. Ana gives you that dedicated, quiet space.
          </p>
        </motion.div>

        {/* =========================================================================
            WHAT ANA CAN HELP WITH: 5 CORE DOMAINS
           ========================================================================= */}
        <div className="mb-24 sm:mb-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
              What Ana Can Help You Explore
            </h3>
            <p className="text-slate-500 text-sm sm:text-base font-sans">
              Five thoughtful ways Ana supports your daily routines, mindset, and long-term direction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 1. REFLECTION */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-700 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                    SELF-INQUIRY
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                  Reflection
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  “Talk through your experiences and reflect on the moments shaping your journey.”
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {["Reflecting on your day", "Exploring tangled thoughts", "Understanding hidden challenges"].map(
                    (item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-emerald-800 font-semibold border-t border-slate-100">
                Mental Clarity
              </div>
            </motion.div>

            {/* 2. MOTIVATION */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
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
                    MOMENTUM
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                  Motivation
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  “Find encouragement when you're struggling to stay focused or consistent.”
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {["Staying motivated during slumps", "Regaining lost momentum", "Taking the next small step"].map(
                    (item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-amber-800 font-semibold border-t border-slate-100">
                Gentle Accountability
              </div>
            </motion.div>

            {/* 3. GOALS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-teal-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-700 group-hover:scale-105 transition-transform">
                    <Target className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200/60">
                    FOCUS & PRIORITIES
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                  Goals & Priorities
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  “Explore your goals and think more clearly about the direction you want to take.”
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {["Clarifying personal goals", "Filtering high-leverage priorities", "Building achievable growth plans"].map(
                    (item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-teal-800 font-semibold border-t border-slate-100">
                Strategic Alignment
              </div>
            </motion.div>

            {/* 4. LIFE DECISIONS */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:scale-105 transition-transform">
                    <Scale className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/60">
                    PERSPECTIVES
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                  Thoughtful Perspectives
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  “Talk through situations and explore different perspectives when you're trying to make thoughtful decisions.”
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {["Weighing difficult trade-offs", "Uncovering unexamined assumptions", "Considering long-term impact"].map(
                    (item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <Check className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                        <span>{item}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-slate-500 font-semibold border-t border-slate-100">
                Non-Prescriptive Sounding Board
              </div>
            </motion.div>

            {/* 5. PERSONAL GROWTH */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
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
                    HOLISTIC GROWTH
                  </span>
                </div>

                <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                  Personal Growth & Identity
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-5">
                  “Explore ideas, challenges, and opportunities connected to becoming a better version of yourself.”
                </p>

                <div className="grid sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100">
                  {[
                    { label: "Discipline", detail: "Strengthen daily resolve without relying solely on volatile mood." },
                    { label: "Consistency", detail: "Protect your routines through low-friction micro-commitments." },
                    { label: "Habit Stacking", detail: "Anchor new rituals seamlessly into your existing daily flow." },
                    { label: "Self-Awareness", detail: "Notice behavioral patterns and cultivate emotional composure." },
                  ].map((item, idx) => (
                    <div key={idx} className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-xs">
                      <span className="font-bold text-slate-900 block mb-0.5">{item.label}</span>
                      <span className="text-slate-500 text-[11px] leading-snug">{item.detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-3 text-[11px] font-mono text-emerald-800 font-semibold border-t border-slate-100">
                Compounding Identity Shift
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================================================
            FEATURE HIGHLIGHT: "Built to support meaningful conversations"
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 sm:mb-24 bg-gradient-to-r from-emerald-50/70 via-slate-50 to-teal-50/60 rounded-3xl p-6 sm:p-10 border border-emerald-200/80 shadow-sm"
        >
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
              <Layers className="w-8 h-8" />
            </div>

            <div className="space-y-2 text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">
                  ECOSYSTEM INTEGRATION
                </span>
              </div>
              <h4 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Designed to Grow Alongside Your Journey
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm font-sans leading-relaxed">
                Ana doesn't live in a silo. Inside Anavori, Ana complements your daily Habits, active
                Missions, personal Journal reflections, and Life Progress Score™—providing contextual
                conversations tailored to what you are actively building.
              </p>
            </div>

            <div className="shrink-0">
              <div className="bg-white px-4 py-3 rounded-2xl border border-emerald-200/80 shadow-2xs text-center">
                <span className="text-[10px] font-mono text-slate-400 block uppercase">
                  Connected tools
                </span>
                <span className="text-xs font-mono font-bold text-emerald-800">
                  Habits • Missions • Journal
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* =========================================================================
            FINAL SUPPORTING MESSAGE & CTA BANNER
           ========================================================================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-xl"
        >
          {/* Subtle decorative glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 blur-3xl rounded-full pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/30 px-3.5 py-1 rounded-full text-emerald-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              <span>A COMPANION FOR GROWTH</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-bold tracking-tight text-white leading-tight">
              “Your journey is yours. <br />
              <span className="text-emerald-400">
                You don't have to think through every step alone.”
              </span>
            </h3>

            <p className="text-slate-300 text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
              Ana is designed to be a supportive space for reflection, exploration, and personal
              growth—one conversation at a time.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={scrollToDownload}
                className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Start Your Journey With Ana</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                <span>Free to begin</span>
                <span>•</span>
                <span>Google Play</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 font-sans max-w-lg mx-auto pt-2">
              Responsible AI Note: Ana is designed to support reflection and personal growth. It is
              not a replacement for qualified professional advice or support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
