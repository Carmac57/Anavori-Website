import * as React from "react";
import { useState } from "react";
import {
  ArrowLeft,
  ShieldCheck,
  Trash2,
  Mail,
  Copy,
  Check,
  Download,
  Info,
  ExternalLink,
  Clock,
  Lock,
  Inbox,
} from "lucide-react";
import { PAGES_BASE } from "../config";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.anavori.app";
const SUPPORT_EMAIL = "anavorisupport@gmail.com";

interface AccountDeletionProps {
  onBack: () => void;
}

export function AccountDeletion({ onBack }: AccountDeletionProps) {
  // Scroll to top on mount
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [fullName, setFullName] = useState("");
  const [accountEmail, setAccountEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmDeletion, setConfirmDeletion] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const openGooglePlay = () => {
    window.open(GOOGLE_PLAY_URL, "_blank", "noopener,noreferrer");
  };

  const copySupportEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — the email is already visible on screen as a fallback.
    }
  };

  const buildMailtoHref = () => {
    const lines = [
      "Hello Anavori Support,",
      "",
      "I am submitting a request to permanently delete my Anavori account and all associated data.",
      "",
    ];
    if (fullName.trim()) {
      lines.push(`Full name: ${fullName.trim()}`, "");
    }
    if (accountEmail.trim()) {
      lines.push(`Account email: ${accountEmail.trim()}`, "");
    }
    if (reason.trim()) {
      lines.push("Reason (optional):", reason.trim(), "");
    }
    lines.push(
      "I confirm that I want my account and all associated data permanently deleted.",
      "",
      "Thank you."
    );
    const body = lines.join("\n");
    const subject = "Account Deletion Request — Anavori";
    return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirmDeletion) {
      setError("Please confirm that you want your account and associated data permanently deleted.");
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(() => {
        const el = document.getElementById("confirm-deletion");
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
      return;
    }
    setError(null);
    // Open the user's email app with a pre-filled request without leaving this page.
    const a = document.createElement("a");
    a.href = buildMailtoHref();
    a.rel = "noopener noreferrer";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-700 hover:text-emerald-800 hover:bg-emerald-50/80 border border-slate-200/80 transition-all cursor-pointer group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
              aria-label="Return to FAQ section"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-0.5" />
              <span>Back to FAQ</span>
            </button>

            <a
              href={`${PAGES_BASE}/#faq`}
              onClick={(e) => {
                e.preventDefault();
                onBack();
              }}
              className="flex items-center gap-2 group"
              aria-label="Anavori Home — Return to FAQ"
            >
              <img
                src="https://res.cloudinary.com/da4qorqem/image/upload/v1777029415/Anavori_Final_Logo_hgxvk8.png"
                alt="Anavori Logo"
                className="h-6 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <span className="text-sm font-display font-bold text-slate-900 tracking-wider">
                ANAVORI
              </span>
            </a>
          </div>

          <button
            onClick={openGooglePlay}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Get on Google Play</span>
            <span className="sm:hidden">Get App</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Page Header */}
        <div className="mb-10 pb-8 border-b border-slate-200/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Trash2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>ACCOUNT & DATA DELETION</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Request Account Deletion
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            You can request to permanently delete your Anavori account and any associated data.
            We process every request personally and will confirm once it has been completed.
          </p>

          {/* Introductory Note */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 text-slate-700 text-sm leading-relaxed space-y-2">
            <p className="font-semibold text-emerald-950">
              A quick note about how Anavori stores your data:
            </p>
            <p>
              Anavori is designed as an <strong>offline-first app</strong>. Most of your personal
              growth content — habits, journal entries, missions, and progress — is stored{" "}
              <strong>directly on your device</strong>. You can delete that data at any time by
              deleting the app or clearing its data from your device settings.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm">
              This page is for deleting anything associated with your <strong>Anavori account</strong>{" "}
              — such as your email address, profile, and account-level information held by Anavori
              Technologies. If you are unsure whether you have an account, you can still submit a
              request and we will help.
            </p>
          </div>
        </div>

        {/* Confirmation Panel shown after the request is composed */}
        {submitted && (
          <div
            className="mb-10 p-5 sm:p-6 rounded-3xl bg-white border-2 border-emerald-300/80 shadow-md"
            role="status"
            aria-live="polite"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 shrink-0 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-sm">
                <Inbox className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h2 className="text-lg font-display font-bold text-slate-900">
                  Almost done — your request is ready
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your email app should have opened with a pre-filled deletion request addressed to{" "}
                  <strong>{SUPPORT_EMAIL}</strong>. Please <strong>send the email</strong> to submit
                  your request.
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <Clock className="w-4 h-4 text-emerald-700 shrink-0" />
                  <p className="text-xs text-slate-500">
                    We typically confirm receipt within 7 days and complete deletion as soon as
                    possible, no later than 30 days after your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Request Form */}
        <div className="rounded-3xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
          {/* Form Header */}
          <div className="px-6 sm:px-8 py-5 border-b border-slate-200/80 bg-slate-50/60">
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-emerald-700" />
              <h2 className="text-sm sm:text-base font-display font-bold text-slate-900">
                Submit your deletion request
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Fill in the details below. Submitting opens your email app with a pre-filled request —
              just press send.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-6 sm:px-8 py-6 space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="deletion-name"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1.5"
              >
                Full Name <span className="text-slate-400 font-normal normal-case">(optional)</span>
              </label>
              <input
                id="deletion-name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Jane Doe"
                autoComplete="name"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
              />
            </div>

            {/* Account Email */}
            <div>
              <label
                htmlFor="deletion-email"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1.5"
              >
                Account Email{" "}
                <span className="text-slate-400 font-normal normal-case">
                  (recommended to identify your account)
                </span>
              </label>
              <input
                id="deletion-email"
                type="email"
                value={accountEmail}
                onChange={(e) => setAccountEmail(e.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400"
              />
            </div>

            {/* Reason */}
            <div>
              <label
                htmlFor="deletion-reason"
                className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-600 mb-1.5"
              >
                Reason <span className="text-slate-400 font-normal normal-case">(optional)</span>
              </label>
              <textarea
                id="deletion-reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Tell us anything you'd like us to know (optional)."
                rows={4}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-200/90 bg-slate-50/60 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-400 resize-y"
              />
            </div>

            {/* Confirmation */}
            <div id="confirm-deletion" className="pt-1 scroll-mt-24">
              <label className="flex items-start gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={confirmDeletion}
                  onChange={(e) => setConfirmDeletion(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                />
                <span className="text-sm text-slate-700 leading-relaxed">
                  I confirm that I want to{" "}
                  <strong className="text-slate-900">
                    permanently delete my account and all associated data
                  </strong>
                  . This action is not reversible.
                </span>
              </label>
            </div>

            {error && (
              <div
                className="rounded-xl bg-red-50 border border-red-200/80 px-4 py-3 text-sm text-red-700"
                role="alert"
              >
                {error}
              </div>
            )}

            {/* Submit */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-bold px-7 py-3.5 rounded-full shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                <Trash2 className="w-4 h-4" />
                <span>Submit Deletion Request</span>
              </button>
              <p className="text-[11px] text-slate-400 mt-3 font-mono">
                Opens your email app addressed to {SUPPORT_EMAIL}. Your request is only sent when you
                press send.
              </p>
            </div>
          </form>
        </div>

        {/* What happens next */}
        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="rounded-2xl border border-slate-200/80 p-4 bg-slate-50/60">
            <Clock className="w-5 h-5 text-emerald-700 mb-2" />
            <h3 className="text-sm font-display font-bold text-slate-900 mb-1">We confirm receipt</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              We acknowledge your request by email, usually within 7 days.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 p-4 bg-slate-50/60">
            <ShieldCheck className="w-5 h-5 text-emerald-700 mb-2" />
            <h3 className="text-sm font-display font-bold text-slate-900 mb-1">We delete your data</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Your account and associated data are permanently deleted. Most requests are completed
              within a few days.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200/80 p-4 bg-slate-50/60">
            <Lock className="w-5 h-5 text-emerald-700 mb-2" />
            <h3 className="text-sm font-display font-bold text-slate-900 mb-1">No going back</h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Deletion is permanent. We only retain information where the law requires us to do so.
            </p>
          </div>
        </div>

        {/* Fallback / Direct contact */}
        <div className="mt-10 rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="shrink-0 p-3 rounded-2xl bg-emerald-100/70 text-emerald-800 border border-emerald-200/80">
              <Info className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <h3 className="text-sm font-display font-bold text-slate-900">
                Prefer to email us directly?
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If your email app did not open, or you would prefer to write to us manually, send an
                email to our support address with the subject{" "}
                <strong className="text-slate-800">&ldquo;Account Deletion Request — Anavori&rdquo;</strong>.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2">
              <span className="text-sm font-mono font-semibold text-emerald-900">{SUPPORT_EMAIL}</span>
              <button
                type="button"
                onClick={copySupportEmail}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-emerald-300/80 bg-white text-xs font-semibold text-emerald-800 hover:bg-emerald-50 transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                aria-label="Copy support email address to clipboard"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-700" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 mt-4 pt-3 border-t border-emerald-100">
            Requests are handled by Anavori Technologies. Where required by law, we may need to
            retain limited records (for example, for billing or legal compliance) even after your
            account is deleted.
          </p>
        </div>

        {/* Responsible use */}
        <div className="mt-8 flex items-start gap-2 text-xs text-slate-400">
          <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5 text-emerald-600" />
          <p>
            Anavori never sells your personal data. For full details, read our{" "}
            <a
              href={`${PAGES_BASE}/privacy-policy`}
              className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
            >
              <span>Privacy Policy</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            .
          </p>
        </div>
      </main>
    </div>
  );
}