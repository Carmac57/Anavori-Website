import * as React from "react";
import { useEffect } from "react";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Lock, 
  Bot, 
  Database,
  CreditCard, 
  Download,
  Mail,
  ExternalLink
} from "lucide-react";

interface PrivacyPolicyProps {
  onBack: () => void;
  onNavigateTerms?: () => void;
}

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.anavori.app";

export function PrivacyPolicy({ onBack, onNavigateTerms }: PrivacyPolicyProps) {
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
              href="/#faq"
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>LEGAL & PRIVACY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Anavori Privacy Policy
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-mono">
            <span><strong>Effective Date:</strong> 20/09/2026</span>
            <span>•</span>
            <span><strong>Last Updated:</strong> 20/9/2026</span>
            <span>•</span>
            <span>Platform: Android (Google Play)</span>
          </div>

          {/* Introductory Statement Card */}
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 text-slate-700 text-sm leading-relaxed space-y-2">
            <p className="font-semibold text-emerald-950">
              At Anavori, we believe that personal growth requires a space that feels safe, authentic, and private.
            </p>
            <p>
              This Privacy Policy explains how Anavori handles information when you use the <strong>Anavori mobile application</strong> and the <strong>Anavori website</strong> (collectively, the “Service”).
            </p>
            <p className="text-slate-600 text-xs sm:text-sm">
              Anavori is designed with data minimization and user privacy in mind. Your personal growth information is used to provide and improve the Service and is not sold for advertising purposes.
            </p>
            <p className="text-slate-600 text-xs sm:text-sm pt-1">
              Please read this Privacy Policy carefully. By using Anavori, you acknowledge the practices described below.
            </p>
          </div>
        </div>

        {/* Long-Form Document Body */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section id="information-we-collect" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              1. Information We Collect and Handle
            </h2>

            {/* Subsection 1.1 */}
            <div className="mt-4">
              <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                1.1 Account Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                When you create and use an Anavori account, we may collect and store:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
                <li>Email address</li>
                <li>Password information in securely hashed form</li>
                <li>Display or preferred name</li>
                <li>Profile photo URL</li>
                <li>Personal goals</li>
                <li>Current personal-growth state or preferences</li>
                <li>Time zone</li>
                <li>Preferred language</li>
                <li>Points, level, and streak information</li>
                <li>Premium subscription and entitlement status</li>
                <li>Premium trial status and relevant trial dates</li>
                <li>Authentication and security information required to maintain your account</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                Passwords are not stored as plain text. Authentication tokens stored on your device are protected using platform security mechanisms such as Android Keystore and iOS Keychain. Certain refresh-token information may also be stored securely on our backend.
              </p>
            </div>

            {/* Subsection 1.2 */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                1.2 Personal Growth Data
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Anavori is designed around personal growth and therefore may process information you voluntarily provide through the app, including:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
                <li>Habits and habit-completion information</li>
                <li>Goals</li>
                <li>Missions and daily quests</li>
                <li>Journal entries, reflections, and notes</li>
                <li>Achievements and badges</li>
                <li>Life Progress Score (LPS)</li>
                <li>Growth events and progress information</li>
                <li>Other information you voluntarily provide while using Anavori</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                This information is primarily stored on our backend so that your account and progress can remain synchronized across supported devices.
              </p>
            </div>

            {/* Subsection 1.3 */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                1.3 Ana Conversations and Memories
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Anavori&apos;s AI Growth Companion, Ana, may process and store:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
                <li>Messages you send to Ana</li>
                <li>Ana&apos;s responses</li>
                <li>Conversation history</li>
                <li>AI-related memories associated with your account</li>
                <li>Relevant contextual information used to make Ana&apos;s responses more useful</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                Certain memories can be managed and deleted individually through the app where that functionality is available.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                At present, Anavori does not operate an automated retention, cleanup, or anonymization process for historical Ana conversations. Consequently, some conversation data may remain stored indefinitely unless it is deleted through available functionality, removed following a valid deletion request, or retention is otherwise required or permitted by applicable law.
              </p>
            </div>

            {/* Subsection 1.4 */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                1.4 Context Used to Generate Ana Responses
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                To provide personalized responses, Ana may receive selected information associated with your account, such as:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
                <li>Your name</li>
                <li>Level and points</li>
                <li>Streak information</li>
                <li>Goals</li>
                <li>Habits</li>
                <li>Missions</li>
                <li>Relevant recent journal excerpts</li>
                <li>Your current conversation</li>
                <li>Other relevant information necessary to provide contextual responses</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                Only context considered relevant to the response-generation process is intended to be provided.
              </p>
            </div>

            {/* Subsection 1.5 */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                1.5 Device and Notification Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                If you enable notifications, Anavori may collect and store a device push-notification token.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                These tokens are used with Firebase Cloud Messaging (FCM) to deliver notifications such as reminders and other app notifications.
              </p>
            </div>

            {/* Subsection 1.6 */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <h3 className="text-lg font-display font-semibold text-slate-900 mb-2">
                1.6 Technical and Security Information
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                For purposes such as operating, securing, and troubleshooting the service, our backend may generate or retain technical information such as:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
                <li>IP address</li>
                <li>Request timestamps</li>
                <li>Device or application information</li>
                <li>Request and server logs</li>
                <li>Error information</li>
                <li>Security-related events</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                This information may be used to maintain service reliability, investigate technical problems, prevent abuse, and protect the security of Anavori.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="how-we-use-information" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              2. How We Use Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may use information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Create and manage your Anavori account</li>
              <li>Authenticate users and maintain account security</li>
              <li>Synchronize your information across devices</li>
              <li>Provide habits, missions, journaling, achievements, and progress features</li>
              <li>Calculate and display your Life Progress Score</li>
              <li>Personalize your experience</li>
              <li>Provide Ana&apos;s AI-powered coaching functionality</li>
              <li>Generate relevant AI responses using Google Gemini</li>
              <li>Send reminders and notifications</li>
              <li>Manage the Premium trial and Premium subscription</li>
              <li>Verify Premium entitlement</li>
              <li>Provide customer support</li>
              <li>Maintain, troubleshoot, and improve the service</li>
              <li>Detect, prevent, and investigate misuse or security incidents</li>
              <li>Comply with applicable legal obligations</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3 font-medium text-slate-800">
              We do not sell your personal information, journal entries, habits, or Ana conversations for targeted advertising.
            </p>
          </section>

          {/* Section 3 */}
          <section id="ana-and-ai" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Bot className="w-5 h-5 text-emerald-600 inline" />
              <span>3. Ana and Artificial Intelligence</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Ana uses Google&apos;s Gemini technology to generate AI-powered responses.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              When you interact with Ana, relevant information may be sent to the AI service provider so that a response can be generated. Depending on the conversation, this may include your message and selected contextual information described in this Privacy Policy.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Ana is intended to provide general personal-growth guidance and conversational assistance. It is not a substitute for professional medical, psychological, legal, financial, or other professional advice.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Because Ana uses artificial intelligence, its responses may occasionally be inaccurate, incomplete, or inappropriate for your particular circumstances. You should use your own judgment when acting on information provided by Ana.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Google may process information associated with AI requests according to the applicable Google service terms and privacy policies.
            </p>
          </section>

          {/* Section 4 */}
          <section id="data-storage" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Database className="w-5 h-5 text-emerald-600 inline" />
              <span>4. Data Storage</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses a PostgreSQL-based backend as the authoritative data store for account and application information.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Depending on the feature, this may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>User accounts</li>
              <li>Habits and habit completions</li>
              <li>Journal entries</li>
              <li>Missions and daily quests</li>
              <li>Achievements and badges</li>
              <li>Coach conversations and memories</li>
              <li>Notifications</li>
              <li>Life Progress Score and growth events</li>
              <li>Device notification tokens</li>
              <li>Authentication and refresh-token information</li>
              <li>Premium trial and subscription entitlement information</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Some information may also be temporarily stored locally on your device, including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Cached application data</li>
              <li>Pending operations awaiting synchronization</li>
              <li>Journal drafts</li>
              <li>Theme and onboarding preferences</li>
              <li>Secure authentication tokens</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Local storage does not replace the backend as the authoritative source for your account data.
            </p>
          </section>

          {/* Section 5 */}
          <section id="data-retention" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              5. Data Retention
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We retain personal information for as long as reasonably necessary to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Provide and maintain Anavori</li>
              <li>Maintain your account and progress</li>
              <li>Provide requested services</li>
              <li>Maintain security and prevent abuse</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
              <li>Enforce our agreements</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Because Anavori currently does not have an automated retention or anonymization process for historical Ana conversations, those conversations may remain stored for an extended or indefinite period unless deleted through available functionality, following an account deletion request, or as otherwise required or permitted by applicable law.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Retention periods may change as the service develops.
            </p>
          </section>

          {/* Section 6 */}
          <section id="account-and-data-deletion" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              6. Account and Data Deletion
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori currently does not provide a dedicated “Delete Account” button within the app&apos;s Settings area.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              If you wish to request deletion of your account and associated personal information, you may contact us at:
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
              We may need to verify your identity before processing a deletion request.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Some information may need to be retained where required by law, necessary for legitimate security purposes, needed to resolve disputes, or otherwise permitted by applicable law.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Deleting your Anavori account does not necessarily cancel an active Premium subscription. If your Premium subscription was purchased through Google Play, you must manage or cancel that subscription through your Google Play account and subscription settings.
            </p>
          </section>

          {/* Section 7 */}
          <section id="account-security" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600 inline" />
              <span>7. Account Security</span>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We take reasonable technical and organizational measures to protect information handled by Anavori.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              These measures may include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Secure password hashing</li>
              <li>Secure authentication mechanisms</li>
              <li>Android Keystore and iOS Keychain for device-side token storage</li>
              <li>Backend access controls</li>
              <li>Secure communication between supported application components</li>
              <li>Monitoring and logging for security and reliability</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              However, no electronic storage or transmission system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 8 */}
          <section id="firebase-services" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              8. Firebase Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses certain Firebase services for specific functions.
            </p>

            <div className="mt-4">
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                Firebase Cloud Messaging
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Firebase Cloud Messaging (FCM) is used to deliver push notifications.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-1">
                Anavori stores the relevant device notification token on its backend so notifications can be associated with your account and device.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                Firebase Authentication Infrastructure for Password Resets
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Anavori uses Firebase Identity Toolkit infrastructure to facilitate certain password-reset functionality.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-1">
                This may involve creating a corresponding technical account record required to initiate the password-reset process.
              </p>
            </div>

            <p className="text-sm sm:text-base leading-relaxed mt-4">
              Firebase is not used by Anavori to store your journal entries, Ana conversations, habits, or other personal-growth content.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2 font-medium text-slate-800">
              Anavori&apos;s mobile application does not currently use Firebase Analytics, Firebase Crashlytics, or Firebase advertising SDKs.
            </p>
          </section>

          {/* Section 9 */}
          <section id="google-sign-in" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              9. Google Sign-In
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Where Google Sign-In is available, Anavori may use Google&apos;s authentication services to verify your identity and facilitate account access.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Google Sign-In authentication is handled separately from Firebase authentication infrastructure.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Information received through Google authentication is used for account authentication and management in accordance with this Privacy Policy and applicable Google policies.
            </p>
          </section>

          {/* Section 10 */}
          <section id="premium-trial-and-subscription" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3 flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-emerald-600 inline" />
              <span>10. Premium Trial and Subscription</span>
            </h2>
            <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/80 mb-4">
              <p className="font-semibold text-emerald-950 text-sm mb-1">
                Trial & Pricing
              </p>
              <p className="text-xs sm:text-sm text-slate-700">
                Anavori currently provides a <strong>14-day free trial of Premium</strong>. During the trial period, eligible users may access Premium functionality without being charged. After the 14-day trial ends, users may be prompted to subscribe to Premium at the current price of <strong>$4 USD per month</strong>.
              </p>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                Google Play Billing
              </h3>
              <p className="text-sm sm:text-base leading-relaxed">
                Premium subscriptions purchased through the Android version of Anavori are processed using <strong>Google Play Billing</strong>.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Google Play, rather than Anavori, handles the payment transaction and payment information associated with purchases made through Google Play.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Anavori does not receive or store your full payment card number or other complete payment credentials used by Google Play.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Anavori may receive and store information necessary to determine and maintain your Premium entitlement, such as:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
                <li>Whether a Premium subscription is active</li>
                <li>Subscription status</li>
                <li>Trial status</li>
                <li>Trial end date</li>
                <li>Relevant purchase or entitlement identifiers</li>
                <li>Subscription-related timestamps or status information</li>
              </ul>
              <p className="text-sm sm:text-base leading-relaxed mt-3">
                This information allows Anavori to provide or restrict Premium access according to the status reported through the applicable subscription system.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Your use of Google Play and purchases made through Google Play are also subject to Google&apos;s applicable terms, policies, and privacy practices.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Subscription availability, pricing, billing periods, renewal behavior, cancellation procedures, refunds, and other purchase-related matters may also be governed by Google Play&apos;s applicable policies and terms.
              </p>
              <p className="text-sm sm:text-base leading-relaxed mt-2">
                Anavori may update this section if additional payment platforms or subscription methods are introduced.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="third-party-services" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              11. Third-Party Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori relies on certain third-party services to operate its features. These may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>
                <strong className="text-slate-900">Google Gemini</strong> — AI-powered responses for Ana
              </li>
              <li>
                <strong className="text-slate-900">Firebase Cloud Messaging</strong> — push notifications
              </li>
              <li>
                <strong className="text-slate-900">Firebase Identity Toolkit</strong> — password-reset infrastructure
              </li>
              <li>
                <strong className="text-slate-900">Google Sign-In / Google authentication services</strong> — authentication where enabled
              </li>
              <li>
                <strong className="text-slate-900">Google Play Billing</strong> — Premium subscription purchases and payment processing on Android
              </li>
              <li>
                <strong className="text-slate-900">PostgreSQL and related infrastructure</strong> — application data storage
              </li>
              <li>
                Other infrastructure and service providers necessary to operate, secure, and maintain Anavori
              </li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              These third parties may process information according to their own terms and privacy policies.
            </p>
          </section>

          {/* Section 12 */}
          <section id="website-privacy" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              12. Website Privacy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Anavori website may operate separately from the mobile application.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The specific analytics, cookies, hosting, security, and other technologies used by the website may differ from those used by the mobile application.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              If non-essential analytics, advertising, tracking technologies, or other data-collection mechanisms are introduced on the website, this Privacy Policy and/or related notices will be updated as appropriate.
            </p>
          </section>

          {/* Section 13 */}
          <section id="cookies" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              13. Cookies and Similar Technologies
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              The Anavori website may use cookies or similar technologies where necessary for functions such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Website operation</li>
              <li>Security</li>
              <li>Preferences</li>
              <li>Session management</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              If Anavori introduces non-essential analytics, advertising, or tracking technologies, appropriate disclosures will be added or updated.
            </p>
          </section>

          {/* Section 14 */}
          <section id="childrens-privacy" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              14. Children&apos;s Privacy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori is not specifically directed toward children under the age of 13.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              We do not knowingly collect personal information from children under 13.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              If you believe that a child under 13 has provided personal information to Anavori, please contact us so that we can investigate and take appropriate action.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Where applicable law establishes a different minimum age or additional requirements, those requirements may apply.
            </p>
          </section>

          {/* Section 15 */}
          <section id="privacy-rights" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              15. Your Privacy Rights
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Depending on your location and applicable law, you may have rights concerning your personal information, including the right to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Request access to information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of personal information</li>
              <li>Request information about how your data is processed</li>
              <li>Object to or request restriction of certain processing</li>
              <li>Withdraw consent where processing is based on consent</li>
              <li>Lodge a complaint with an applicable data-protection authority</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              To exercise applicable rights or ask privacy-related questions, contact:
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
              We may request information necessary to verify your identity before fulfilling certain requests.
            </p>
          </section>

          {/* Section 16 */}
          <section id="changes-to-policy" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              16. Changes to This Privacy Policy
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              We may update this Privacy Policy from time to time as Anavori&apos;s features, technology, business practices, or legal requirements change.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              When significant changes are made, we may provide an appropriate notice within the application, on the website, or through another reasonable communication method.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The updated version will include a revised “Last Updated” date.
            </p>
          </section>

          {/* Section 17 */}
          <section id="contact-us" className="scroll-mt-20 pt-4 border-t border-slate-200/80">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              17. Contact Us
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If you have questions, concerns, or requests regarding this Privacy Policy or your personal information, contact:
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
                <span>Google Play:</span>
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

        {/* Legal Cross-Reference & Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 w-full sm:w-auto justify-center"
            aria-label="Return to Anavori FAQ section"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Anavori</span>
          </button>

          <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
            {onNavigateTerms && (
              <a
                href="/terms-of-service"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigateTerms();
                }}
                className="hover:text-emerald-700 underline underline-offset-2 transition-colors cursor-pointer"
              >
                Terms of Service
              </a>
            )}
            <a
              href="#information-we-collect"
              className="hover:text-emerald-700 transition-colors"
            >
              Back to top ↑
            </a>
          </div>
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
