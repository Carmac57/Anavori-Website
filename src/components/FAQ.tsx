import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  HelpCircle, 
  Plus, 
  Minus, 
  ArrowRight, 
  ExternalLink,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { PAGES_BASE } from "../config";

interface FAQItem {
  id: string;
  question: string;
  answer: React.ReactNode;
  rawAnswer: string;
}

interface FAQProps {
  onOpenPrivacy?: () => void;
  onOpenDeletion?: () => void;
}

export function FAQ({ onOpenPrivacy, onOpenDeletion }: FAQProps) {
  // Allow toggling items, default the first item open
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const faqList: FAQItem[] = [
    {
      id: "faq-1",
      question: "What is Anavori?",
      answer: (
        <p>
          Anavori is a personal growth app designed to help you build better habits,
          stay consistent, reflect on your journey, track your progress, and take
          intentional steps toward becoming a better version of yourself.
        </p>
      ),
      rawAnswer:
        "Anavori is a personal growth app designed to help you build better habits, stay consistent, reflect on your journey, track your progress, and take intentional steps toward becoming a better version of yourself.",
    },
    {
      id: "faq-2",
      question: "Who is Anavori for?",
      answer: (
        <p>
          Anavori is for anyone who wants to become more intentional about their
          personal growth. Whether you&apos;re working on your habits, discipline,
          productivity, goals, consistency, or self-awareness, Anavori is designed to
          support your journey.
        </p>
      ),
      rawAnswer:
        "Anavori is for anyone who wants to become more intentional about their personal growth. Whether you're working on your habits, discipline, productivity, goals, consistency, or self-awareness, Anavori is designed to support your journey.",
    },
    {
      id: "faq-3",
      question: "What can I do with Anavori?",
      answer: (
        <p>
          Anavori brings several personal growth tools together in one place. You can
          build and track habits, take on missions, journal and reflect, work toward
          achievements, monitor your overall progress, and have meaningful
          conversations with Ana, your AI Growth Companion.
        </p>
      ),
      rawAnswer:
        "Anavori brings several personal growth tools together in one place. You can build and track habits, take on missions, journal and reflect, work toward achievements, monitor your overall progress, and have meaningful conversations with Ana, your AI Growth Companion.",
    },
    {
      id: "faq-4",
      question: "What is Ana?",
      answer: (
        <div className="space-y-3">
          <p>
            Ana is Anavori&apos;s AI Growth Companion. She is designed to provide a
            space where you can reflect, explore ideas, think through challenges,
            discuss goals, and have supportive conversations related to your personal
            growth.
          </p>
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-slate-600 text-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <p className="italic font-medium">
              Ana is not a replacement for qualified professional advice or support.
            </p>
          </div>
        </div>
      ),
      rawAnswer:
        "Ana is Anavori's AI Growth Companion. She is designed to provide a space where you can reflect, explore ideas, think through challenges, discuss goals, and have supportive conversations related to your personal growth. Ana is not a replacement for qualified professional advice or support.",
    },
    {
      id: "faq-5",
      question: "Do I need to be good at habits or productivity to use Anavori?",
      answer: (
        <p>
          Not at all. Anavori is designed for people at different stages of their
          personal growth journey. You don&apos;t need to have everything figured
          out before you begin. You can start small and build from there.
        </p>
      ),
      rawAnswer:
        "Not at all. Anavori is designed for people at different stages of their personal growth journey. You don't need to have everything figured out before you begin. You can start small and build from there.",
    },
    {
      id: "faq-6",
      question: "Is Anavori free?",
      answer: (
        <p>
          Yes. Anavori offers a 14-day free trial so you can explore the premium
          experience before deciding whether to subscribe. After the trial, Anavori
          Premium costs{" "}
          <strong className="font-semibold text-slate-900">$4 per month</strong>.
          Subscription and trial details will be clearly displayed when you sign up.
        </p>
      ),
      rawAnswer:
        "Yes. Anavori offers a 14-day free trial so you can explore the premium experience before deciding whether to subscribe. After the trial, Anavori Premium costs $4 per month. Subscription and trial details will be clearly displayed when you sign up.",
    },
    {
      id: "faq-7",
      question: "Where can I download Anavori?",
      answer: (
        <p>
          Anavori is available through Google Play. Tap the{" "}
          <a
            href="https://play.google.com/store/apps/details?id=com.anavori.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
          >
            <span>Download on Google Play</span>
            <ExternalLink className="w-3.5 h-3.5 inline" />
          </a>{" "}
          button on this website to visit the official listing and get started.
        </p>
      ),
      rawAnswer:
        "Anavori is available through Google Play. Tap the ‘Download on Google Play’ button on this website to visit the official listing and get started.",
    },
    {
      id: "faq-8",
      question: "Does Anavori replace professional help?",
      answer: (
        <p>
          No. Anavori is designed to support personal growth, reflection, and
          everyday self-improvement. It does not replace qualified medical, mental
          health, financial, legal, or other professional advice. When professional
          support is appropriate, users should seek help from a qualified
          professional.
        </p>
      ),
      rawAnswer:
        "No. Anavori is designed to support personal growth, reflection, and everyday self-improvement. It does not replace qualified medical, mental health, financial, legal, or other professional advice. When professional support is appropriate, users should seek help from a qualified professional.",
    },
    {
      id: "faq-9",
      question: "Is my information private?",
      answer: (
        <p>
          Anavori is designed with user privacy in mind. For detailed information
          about how information is collected, stored, and used, please refer to the{" "}
          <a
            href={`${PAGES_BASE}/privacy-policy`}
            onClick={(e) => {
              if (onOpenPrivacy) {
                e.preventDefault();
                onOpenPrivacy();
              }
            }}
            className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors cursor-pointer"
          >
            Anavori Privacy Policy
          </a>
          .
        </p>
      ),
      rawAnswer:
        "Anavori is designed with user privacy in mind. For detailed information about how information is collected, stored, and used, please refer to the Anavori Privacy Policy.",
    },
    {
      id: "faq-9b",
      question: "How do I delete my account and data?",
      answer: (
        <div className="space-y-3">
          <p>
            Most of your Anavori data (habits, journal, missions, and progress) is stored directly
            on your device and can be removed by deleting the app or clearing its data in your
            device settings.
          </p>
          <p>
            To delete your account and any data associated with it, visit the{" "}
            <a
              href={`${PAGES_BASE}/account-deletion`}
              onClick={(e) => {
                if (onOpenDeletion) {
                  e.preventDefault();
                  onOpenDeletion();
                }
              }}
              className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors cursor-pointer"
            >
              Account Deletion Request page
            </a>{" "}
            and submit a request. We process it as quickly as possible, usually within 30 days.
          </p>
        </div>
      ),
      rawAnswer:
        "Most of your Anavori data (habits, journal, missions, and progress) is stored directly on your device and can be removed by deleting the app or clearing its data in your device settings. To delete your account and any data associated with it, visit the Account Deletion Request page and submit a request. We process it as quickly as possible, usually within 30 days.",
    },
    {
      id: "faq-10",
      question: "Is Anavori available on iPhone?",
      answer: (
        <p>
          An iOS version may be considered as Anavori continues to grow. For now,
          Anavori is available through Google Play.
        </p>
      ),
      rawAnswer:
        "An iOS version may be considered as Anavori continues to grow. For now, Anavori is available through Google Play.",
    },
    {
      id: "faq-11",
      question: "How do I get started?",
      answer: (
        <p>
          Download Anavori from Google Play, create your account, and begin
          exploring your personal growth journey. Start with small, meaningful
          actions and build from there.
        </p>
      ),
      rawAnswer:
        "Download Anavori from Google Play, create your account, and begin exploring your personal growth journey. Start with small, meaningful actions and build from there.",
    },
    {
      id: "faq-12",
      question: "Will Anavori continue to improve?",
      answer: (
        <p>
          Yes. Anavori is a growing product and will continue to evolve as new ideas,
          improvements, and features are developed. The goal is to keep making the
          experience more useful and meaningful for people on their personal growth
          journeys.
        </p>
      ),
      rawAnswer:
        "Yes. Anavori is a growing product and will continue to evolve as new ideas, improvements, and features are developed. The goal is to keep making the experience more useful and meaningful for people on their personal growth journeys.",
    },
  ];

  // Schema.org FAQPage structured data for search engine optimization
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.rawAnswer,
      },
    })),
  };

  return (
    <section
      id="faq"
      className="py-24 md:py-32 bg-slate-50/50 border-t border-slate-100 relative overflow-hidden scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      {/* Background Accent glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-b from-emerald-100/30 via-teal-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Structured SEO Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>FAQ</span>
          </div>

          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"
          >
            Questions? We&apos;ve Got Answers.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed">
            Everything you need to know about getting started with Anavori.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5 sm:space-y-4">
          {faqList.map((item, index) => {
            const isOpen = openId === item.id;
            const headerId = `faq-header-${item.id}`;
            const panelId = `faq-panel-${item.id}`;

            return (
              <div
                key={item.id}
                className={`transition-all duration-200 rounded-2xl border ${
                  isOpen
                    ? "bg-white border-emerald-300 shadow-md shadow-emerald-950/[0.03] ring-1 ring-emerald-100"
                    : "bg-white border-slate-200/80 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <h3>
                  <button
                    id={headerId}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="w-full flex items-center justify-between gap-4 px-5 py-5 sm:px-6 sm:py-5.5 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 transition-colors cursor-pointer group"
                  >
                    <span className="flex items-center gap-3 text-base sm:text-lg font-semibold text-slate-900 group-hover:text-emerald-900 transition-colors">
                      <span className="text-xs font-mono font-medium text-slate-400 shrink-0 w-6">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.question}
                    </span>

                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${
                        isOpen
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-slate-100 text-slate-500 group-hover:bg-slate-200/80 group-hover:text-slate-800"
                      }`}
                      aria-hidden="true"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 transition-transform duration-200" />
                      ) : (
                        <Plus className="w-4 h-4 transition-transform duration-200" />
                      )}
                    </div>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-slate-600 text-base leading-relaxed pl-13 sm:pl-15 border-t border-slate-100/80 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Closing Message */}
        <div className="mt-16 pt-10 text-center border-t border-slate-200/60 max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 mb-3 border border-emerald-100">
            <Sparkles className="w-5 h-5" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-1.5">
            Still curious?
          </h3>

          <p className="text-slate-600 text-sm mb-5">
            Your journey can start with a single step.
          </p>

          <div>
            <a
              href="https://play.google.com/store/apps/details?id=com.anavori.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm transition-all shadow-sm hover:shadow active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 focus-visible:ring-offset-2"
            >
              <span>Download Anavori</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
