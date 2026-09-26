import * as React from "react";
import { useEffect } from "react";
import { 
  ArrowLeft, 
  FileText, 
  Bot, 
  CreditCard, 
  ShieldAlert, 
  Download,
  Mail,
  ExternalLink
} from "lucide-react";
import { PAGES_BASE } from "../config";

interface TermsOfServiceProps {
  onBack: () => void;
  onNavigatePrivacy: () => void;
}

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.anavori.app";

export function TermsOfService({ onBack, onNavigatePrivacy }: TermsOfServiceProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openGooglePlay = () => {
    window.open(GOOGLE_PLAY_URL, "_blank", "noopener,noreferrer");
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
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            <span>LEGAL & USER AGREEMENT</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Anavori Terms of Service
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-mono">
            <span><strong>Effective Date:</strong> 20/09/2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> 20/09/2026</span>
            <span>•</span>
            <span>Platform: Android (Google Play)</span>
          </div>

          {/* Introductory Statement Card */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 text-slate-700 text-sm leading-relaxed space-y-2">
            <p className="font-semibold text-emerald-950">
              Welcome to Anavori.
            </p>
            <p>
              These Terms of Service (“Terms”) govern your access to and use of the Anavori mobile application, website, and related services collectively referred to as the “Service.”
            </p>
            <p className="text-slate-600 text-xs sm:text-sm">
              By creating an account, accessing, or using Anavori, you agree to be bound by these Terms. If you do not agree with these Terms, you must not use the Service.
            </p>
          </div>
        </div>

        {/* Long-Form Document Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section id="acceptance" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              1. Acceptance of These Terms
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              By using Anavori, you confirm that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>You have read and understood these Terms.</li>
              <li>You agree to comply with these Terms and applicable laws.</li>
              <li>You are legally permitted to use the Service.</li>
              <li>The information you provide to Anavori is accurate and kept reasonably up to date.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              If you use Anavori on behalf of another person or organization, you confirm that you have authority to accept these Terms on their behalf.
            </p>
          </section>

          {/* Section 2 */}
          <section id="eligibility-accounts" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              2. Eligibility and User Accounts
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              You may need to create an account to access certain Anavori features.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              When creating or using an account, you agree to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Provide accurate and complete information.</li>
              <li>Keep your account information updated.</li>
              <li>Keep your login credentials confidential.</li>
              <li>Use your own account and not impersonate another person.</li>
              <li>Notify us promptly if you suspect unauthorized access.</li>
              <li>Accept responsibility for activity carried out through your account, except where caused by Anavori&apos;s failure to apply reasonable security measures.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Anavori may suspend or restrict access to an account where there is a reasonable concern regarding security, fraud, misuse, or violation of these Terms.
            </p>
          </section>

          {/* Section 3 */}
          <section id="acceptable-use" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              3. Acceptable Use
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              You agree to use Anavori responsibly and lawfully.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              You must not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Use the Service for unlawful, fraudulent, abusive, or harmful purposes.</li>
              <li>Attempt to gain unauthorized access to the Service or another user&apos;s account.</li>
              <li>Interfere with or disrupt the operation or security of Anavori.</li>
              <li>Introduce malicious code, viruses, or other harmful material.</li>
              <li>Scrape, copy, reproduce, or exploit the Service without permission.</li>
              <li>Reverse engineer, decompile, or attempt to extract source code from the Service except where permitted by applicable law.</li>
              <li>Use Anavori to harass, threaten, exploit, or harm another person.</li>
              <li>Submit content that infringes another person&apos;s rights.</li>
              <li>Use automated systems to access the Service in a way that places unreasonable demand on our infrastructure.</li>
              <li>Circumvent subscription, security, access, or usage controls.</li>
              <li>Misrepresent your identity or your relationship with Anavori.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              We may take reasonable action where misuse or violation of these Terms is identified.
            </p>
          </section>

          {/* Section 4 */}
          <section id="features-and-services" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              4. Features and Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori may provide features including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Habit tracking and habit completion</li>
              <li>Missions and daily quests</li>
              <li>Journaling and personal reflections</li>
              <li>Achievements, badges, points, and levels</li>
              <li>Life Progress Score (LPS)</li>
              <li>Personal-growth insights</li>
              <li>Notifications and reminders</li>
              <li>AI-powered assistance through Ana</li>
              <li>Premium features and subscription services</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Features may change over time. We may add, modify, suspend, or discontinue features where reasonably necessary for development, security, maintenance, legal compliance, or business purposes.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Some features may require an internet connection, a supported device, or an active account.
            </p>
          </section>

          {/* Section 5 */}
          <section id="ana-and-ai-guidance" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-emerald-600 inline" />
              <span>5. Ana and AI-Powered Guidance</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Ana is Anavori&apos;s AI Growth Companion.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Ana may provide conversational assistance, reflections, suggestions, motivational guidance, and personal-growth support based on information you provide and relevant information associated with your account.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Ana is not a human professional and does not provide professional advice. Its responses are not a substitute for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Medical or mental-health care</li>
              <li>Emergency assistance</li>
              <li>Legal advice</li>
              <li>Financial advice</li>
              <li>Professional coaching</li>
              <li>Any other specialized professional service</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              AI-generated responses may be inaccurate, incomplete, outdated, or unsuitable for your circumstances. You are responsible for evaluating information provided by Ana before acting on it.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Do not rely on Ana for emergency situations or decisions requiring immediate professional assistance. If you are in immediate danger or need urgent help, contact appropriate emergency or professional services.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              By using Ana, you understand that relevant information may be processed by third-party AI service providers as described in the Anavori Privacy Policy.
            </p>
          </section>

          {/* Section 6 */}
          <section id="personal-growth-information" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              6. Personal Growth Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori is intended to support personal reflection, organization, habit development, and personal growth.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              You are responsible for the information you choose to enter into the Service, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Goals</li>
              <li>Habits</li>
              <li>Journal entries</li>
              <li>Reflections</li>
              <li>Notes</li>
              <li>Missions</li>
              <li>Personal preferences</li>
              <li>Conversations with Ana</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              You should avoid submitting information that you do not want stored or processed according to the Privacy Policy.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori does not guarantee that using the Service will result in a particular personal, professional, financial, emotional, or lifestyle outcome.
            </p>
          </section>

          {/* Section 7 */}
          <section id="premium-trial-and-subscription" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-600 inline" />
              <span>7. Premium Trial and Subscription</span>
            </h2>
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 mb-4">
              <p className="font-semibold text-emerald-950 text-sm mb-1">
                Trial & Pricing Overview
              </p>
              <p className="text-xs sm:text-sm text-slate-700">
                Anavori currently offers a <strong>14-day free trial of Premium</strong> to eligible users. After the 14-day trial ends, you may be prompted to upgrade to Premium at the current price of <strong>$4 USD per month</strong>.
              </p>
            </div>
            <p className="text-sm sm:text-base leading-relaxed">
              During the trial period, eligible users may access Premium functionality without charge.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              After the 14-day trial ends, you may be prompted to upgrade to Premium at the current price of <strong>$4 USD per month</strong>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The Premium offering, price, trial eligibility, billing period, and available features may change in the future, subject to applicable law and appropriate notice where required.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              There are no separate free and Premium feature-limit tiers under the current subscription model. Access to Premium features depends on your trial or subscription entitlement.
            </p>
          </section>

          {/* Section 8 */}
          <section id="google-play-billing" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              8. Google Play Billing and Payments
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Premium subscriptions purchased through the Android version of Anavori are processed through <strong>Google Play Billing</strong>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Google Play manages payment processing, billing, renewals, refunds, and subscription-management functionality according to its applicable terms and policies.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              By purchasing Premium through Google Play, you agree that:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Your purchase is processed through Google Play.</li>
              <li>Google Play may store and process payment information required to complete the transaction.</li>
              <li>Anavori may receive subscription and entitlement information necessary to provide Premium access.</li>
              <li>Your subscription may automatically renew unless cancelled according to Google Play&apos;s applicable subscription rules.</li>
              <li>Cancellation and refund requests may need to be handled through Google Play.</li>
              <li>Google Play&apos;s terms, policies, and payment rules may apply in addition to these Terms.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Anavori does not directly receive or store your complete payment-card details used by Google Play.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              You are responsible for reviewing the purchase screen and applicable Google Play terms before completing a subscription.
            </p>
          </section>

          {/* Section 9 */}
          <section id="trial-conversion-and-cancellation" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              9. Trial Conversion and Cancellation
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If you do not wish to continue with Premium after your free trial, you should follow the cancellation or subscription-management instructions provided through Google Play where applicable.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              If a trial converts into a paid subscription under the terms presented to you, the applicable subscription charges may apply after the trial ends.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Deleting or signing out of your Anavori account does not necessarily cancel a Premium subscription. You must manage or cancel the subscription through the applicable Google Play subscription settings.
            </p>
          </section>

          {/* Section 10 */}
          <section id="intellectual-property" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              10. Intellectual Property
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Service and its components, including the Anavori name, logo, branding, software, design, text, graphics, interfaces, and other materials, are owned by or licensed to Anavori and are protected by applicable intellectual-property laws.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Except as expressly permitted by these Terms or applicable law, you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Copy or reproduce the Service or its content.</li>
              <li>Modify, distribute, sell, lease, or commercially exploit the Service.</li>
              <li>Use Anavori branding without written permission.</li>
              <li>Remove copyright, trademark, or other proprietary notices.</li>
              <li>Create derivative works based on the Service.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              These Terms do not transfer ownership of Anavori&apos;s intellectual property to you.
            </p>
          </section>

          {/* Section 11 */}
          <section id="user-content" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              11. User Content
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              You retain ownership of content that you submit to Anavori, including your journal entries, notes, goals, reflections, and other personal content, subject to the rights necessary for Anavori to operate the Service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              By submitting content, you grant Anavori a limited, non-exclusive, worldwide, royalty-free license to host, store, process, transmit, and display that content only as reasonably necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Provide and operate the Service.</li>
              <li>Synchronize your account across devices.</li>
              <li>Provide requested features.</li>
              <li>Generate relevant responses through Ana.</li>
              <li>Maintain security, reliability, and technical functionality.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              You are responsible for ensuring that your content does not violate applicable law or another person&apos;s rights.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori does not claim ownership of your personal journal entries, reflections, or other user-created content.
            </p>
          </section>

          {/* Section 12 */}
          <section id="privacy" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              12. Privacy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Your use of Anavori is also governed by the{" "}
              <a
                href={`${PAGES_BASE}/privacy-policy`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavigatePrivacy();
                }}
                className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors cursor-pointer"
              >
                Anavori Privacy Policy
              </a>
              , which explains how we collect, use, store, disclose, and protect information.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The Privacy Policy forms part of these Terms by reference.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              You can review the Privacy Policy through the Anavori website or the relevant location within the Service.
            </p>
          </section>

          {/* Section 13 */}
          <section id="third-party-services" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              13. Third-Party Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori may rely on third-party services, including services used for:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>AI response generation</li>
              <li>Authentication</li>
              <li>Password recovery</li>
              <li>Push notifications</li>
              <li>Cloud infrastructure</li>
              <li>Data storage</li>
              <li>Subscription processing</li>
              <li>Google Play Billing</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Third-party services may have their own terms, policies, and privacy practices.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori is not responsible for the independent acts, policies, availability, or performance of third-party services, except where responsibility cannot lawfully be excluded.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Your use of third-party services may be subject to the terms imposed by those providers.
            </p>
          </section>

          {/* Section 14 */}
          <section id="service-availability" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              14. Service Availability and Changes
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We aim to keep Anavori available and reliable, but we do not guarantee that the Service will:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Always be available</li>
              <li>Be uninterrupted or error-free</li>
              <li>Work on every device or operating system</li>
              <li>Always retain every feature</li>
              <li>Be free from bugs, delays, or technical issues</li>
              <li>Always preserve data without interruption or loss</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              The Service may be temporarily unavailable because of maintenance, updates, technical problems, security incidents, third-party outages, or circumstances beyond our reasonable control.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              We may modify, suspend, or discontinue all or part of the Service where reasonably necessary.
            </p>
          </section>

          {/* Section 15 */}
          <section id="disclaimers" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-slate-600 inline" />
              <span>15. Disclaimers</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              To the maximum extent permitted by applicable law, Anavori is provided on an “as is” and “as available” basis.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              We make no warranties, express or implied, regarding:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>The accuracy or reliability of the Service</li>
              <li>The accuracy of AI-generated responses</li>
              <li>The achievement of a particular personal-growth result</li>
              <li>The uninterrupted availability of the Service</li>
              <li>The suitability of the Service for your individual circumstances</li>
              <li>The preservation of every item of user content</li>
              <li>The availability or performance of third-party services</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Anavori is a personal-growth and productivity tool. It is not a medical, mental-health, legal, financial, or emergency-response service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Nothing in these Terms excludes or limits any warranty, right, or protection that cannot lawfully be excluded or limited.
            </p>
          </section>

          {/* Section 16 */}
          <section id="limitation-of-liability" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              16. Limitation of Liability
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              To the maximum extent permitted by applicable law, Anavori and its operators, contributors, service providers, and affiliates will not be liable for indirect, incidental, special, consequential, exemplary, or punitive damages arising from or related to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Your use of or inability to use the Service</li>
              <li>AI-generated responses</li>
              <li>Loss of data or content</li>
              <li>Account suspension or termination</li>
              <li>Subscription issues handled by third-party payment providers</li>
              <li>Reliance on information provided through the Service</li>
              <li>Third-party services</li>
              <li>Unauthorized access or security incidents, except to the extent caused by legally actionable negligence, misconduct, or another basis for liability</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Where liability cannot be excluded, it will be limited to the maximum extent permitted by applicable law.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Nothing in these Terms limits liability that cannot legally be limited.
            </p>
          </section>

          {/* Section 17 */}
          <section id="indemnity" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              17. Indemnity
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              To the maximum extent permitted by applicable law, you agree to defend, indemnify, and hold harmless Anavori and its operators, contributors, service providers, and affiliates from claims, losses, liabilities, damages, costs, and expenses arising from:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Your use or misuse of the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of applicable law</li>
              <li>Your content</li>
              <li>Your infringement of another person&apos;s rights</li>
              <li>Your unauthorized use of the Service</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              This obligation does not apply to the extent that a claim results from Anavori&apos;s own unlawful conduct or liability that cannot legally be transferred to you.
            </p>
          </section>

          {/* Section 18 */}
          <section id="suspension-and-termination" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              18. Suspension and Termination
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              You may stop using Anavori at any time.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              We may suspend or terminate your access if:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>You violate these Terms.</li>
              <li>Your use creates security, legal, or operational risks.</li>
              <li>We reasonably suspect fraud, abuse, or unauthorized activity.</li>
              <li>Required by law or a legal authority.</li>
              <li>We discontinue the Service.</li>
              <li>Your account remains inactive for an extended period where permitted by law.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Where reasonably practicable, we may provide notice before suspension or termination, unless immediate action is necessary.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              After termination, provisions that by their nature should continue will remain effective, including provisions concerning intellectual property, user content, disclaimers, liability, indemnity, dispute resolution, and applicable law.
            </p>
          </section>

          {/* Section 19 */}
          <section id="account-deletion" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              19. Account Deletion
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori may provide account-deletion assistance through the support contact listed below.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              You may request account deletion by contacting:
            </p>
            <div className="mt-2.5 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 inline-flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Mail className="w-4 h-4 text-emerald-600" />
              <a 
                href="mailto:anavorisupport@gmail.com"
                className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded"
              >
                anavorisupport@gmail.com
              </a>
            </div>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Account deletion may not immediately remove information that must be retained for legal, security, fraud-prevention, dispute-resolution, or other lawful purposes.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Deleting your Anavori account does not automatically cancel a Premium subscription purchased through Google Play. You must cancel that subscription through your Google Play account.
            </p>
          </section>

          {/* Section 20 */}
          <section id="changes-to-terms" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              20. Changes to These Terms
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may update these Terms from time to time to reflect changes in:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>The Service</li>
              <li>Premium features or pricing</li>
              <li>Payment and subscription processes</li>
              <li>Legal or regulatory requirements</li>
              <li>Security practices</li>
              <li>Business operations</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              When appropriate, we may provide notice through the app, website, email, or another reasonable method.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The updated Terms will include a revised “Last Updated” date. Your continued use of Anavori after the updated Terms become effective means that you accept the revised Terms.
            </p>
          </section>

          {/* Section 21 */}
          <section id="governing-law" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              21. Governing Law
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              These Terms shall be governed by and interpreted according to the laws applicable in the jurisdiction where Anavori is legally established, unless applicable law requires otherwise.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              If Anavori is established in Kenya, applicable Kenyan law may govern these Terms, subject to mandatory consumer-protection and other applicable legal requirements.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Nothing in this section prevents you from exercising rights that cannot legally be waived or restricted.
            </p>
          </section>

          {/* Section 22 */}
          <section id="general-provisions" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              22. General Provisions
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions will continue in effect.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Our failure to enforce a provision does not waive our right to enforce it later.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              These Terms, together with the Privacy Policy and any additional terms presented for specific features or purchases, form the agreement between you and Anavori regarding your use of the Service.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              You may not transfer your rights or obligations under these Terms without our prior written consent.
            </p>
          </section>

          {/* Section 23 */}
          <section id="contact-us" className="scroll-mt-20 pt-4 border-t border-slate-200/80">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              23. Contact Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If you have questions, concerns, or requests regarding these Terms, contact:
            </p>
            <div className="mt-3 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 space-y-2">
              <p className="font-semibold text-slate-900">Anavori Support</p>
              <p className="flex items-center gap-2">
                <span>Email:</span>
                <a
                  href="mailto:anavorisupport@gmail.com"
                  className="font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-2"
                >
                  anavorisupport@gmail.com
                </a>
              </p>
              <p className="pt-1 flex items-center gap-2">
                <span>Google Play App Listing:</span>
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 hover:text-emerald-800 underline inline-flex items-center gap-1 font-medium"
                >
                  <span>Anavori on Google Play</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </p>
            </div>
          </section>
        </div>

        {/* Bottom Back Button */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
            aria-label="Return to Anavori FAQ section"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Anavori</span>
          </button>

          <a
            href="#acceptance"
            className="text-xs text-slate-500 hover:text-emerald-700 font-medium"
          >
            Back to top ↑
          </a>
        </div>
      </main>

      {/* Simple Footer */}
      <footer className="border-t border-slate-200/80 py-8 bg-slate-50 text-center text-xs text-slate-500">
        <div className="max-w-4xl mx-auto px-4">
          <p>© {new Date().getFullYear()} Anavori Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
