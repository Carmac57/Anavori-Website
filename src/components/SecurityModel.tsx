import * as React from "react";
import { useEffect } from "react";
import { 
  ArrowLeft, 
  ShieldCheck, 
  Download,
  Mail
} from "lucide-react";
import { PAGES_BASE } from "../config";

interface SecurityModelProps {
  onBack: () => void;
  onNavigatePrivacy?: () => void;
  onNavigateTerms?: () => void;
}

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.anavori.app";

export function SecurityModel({ onBack, onNavigatePrivacy, onNavigateTerms }: SecurityModelProps) {
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
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>SECURITY ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-slate-900 mb-4">
            Anavori Security Model
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-500 font-mono mb-6">
            <span><strong>Last Updated:</strong> 20/09/2026</span>
            <span>•</span>
            <span>Platform: Android (Google Play)</span>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p>
              At Anavori, security is designed to quietly protect the information that forms part of a person's personal growth journey.
            </p>
            <p>
              Because Anavori can contain personal goals, habits, journal entries, reflections, progress information, and conversations with Ana, protecting this information is an important part of the platform.
            </p>
            <p>
              This Security Model explains the principal technical and organisational measures used by Anavori to protect accounts, personal information, application data, and communications.
            </p>
            <p>
              Our approach is guided by four principles:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-slate-700 pl-2">
              <li><strong>Privacy by default</strong></li>
              <li><strong>Security by design</strong></li>
              <li><strong>Least-privilege access</strong></li>
              <li><strong>Transparency and responsible handling of information</strong></li>
            </ul>
            <p className="text-xs sm:text-sm text-slate-500 pt-2">
              Security practices may evolve as Anavori develops. This page describes the principal measures currently used by the platform and does not constitute a guarantee that any system can prevent every possible security incident.
            </p>
          </div>
        </div>

        {/* Security Content Sections */}
        <div className="prose prose-slate max-w-none space-y-8 text-slate-700 leading-relaxed">
          
          {/* Section 1 */}
          <section id="security-by-design" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              1. Security by Design
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Security is considered throughout the design, development, deployment, and maintenance of Anavori.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Security is not treated as a feature added after development. Authentication, data protection, access control, secure communications, account management, and third-party integrations are considered as part of the platform architecture.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Our objective is to provide meaningful protection without unnecessarily complicating the member experience.
            </p>
          </section>

          {/* Section 2 */}
          <section id="account-security" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              2. Account Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori accounts are protected through authenticated access and controlled session management.
            </p>

            <h3 className="text-lg font-display font-semibold text-slate-900 mt-4 mb-2">
              Password Protection
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              For accounts using email and password authentication, passwords are not stored as readable passwords in the database.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Passwords are processed using <strong>bcrypt password hashing</strong> before storage.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This means Anavori's database does not contain users' original plaintext passwords.
            </p>

            <h3 className="text-lg font-display font-semibold text-slate-900 mt-4 mb-2">
              Secure Session Credentials
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Authentication credentials used by the application are handled using platform-protected secure storage.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              On supported mobile devices, access and refresh credentials are stored using:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li><strong>Android Keystore</strong> on Android</li>
              <li><strong>iOS Keychain</strong> on iOS</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This reduces the risk of sensitive authentication credentials being exposed through ordinary application storage.
            </p>

            <h3 className="text-lg font-display font-semibold text-slate-900 mt-4 mb-2">
              Refresh Tokens
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses refresh-token based session management.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Refresh tokens are maintained server-side and associated with the relevant authenticated account and session.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This allows the platform to manage authenticated sessions without requiring the user's password to be repeatedly transmitted.
            </p>
          </section>

          {/* Section 3 */}
          <section id="data-storage-protection" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              3. Data Storage and Protection
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses <strong>PostgreSQL</strong> as its authoritative backend data store.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Depending on the feature and the information involved, the backend may store information such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>account information,</li>
              <li>goals and preferences,</li>
              <li>habits and habit completion data,</li>
              <li>missions and achievements,</li>
              <li>journal entries,</li>
              <li>Life Progress Score and related growth information,</li>
              <li>Ana conversations,</li>
              <li>Ana memories,</li>
              <li>notifications,</li>
              <li>device notification tokens,</li>
              <li>authentication and session information.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Access to backend data is controlled through authenticated application requests and server-side authorization.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The application is designed so that users access information associated with their own authenticated account rather than directly accessing the underlying database.
            </p>
          </section>

          {/* Section 4 */}
          <section id="secure-communication" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              4. Secure Communication
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Communication between the Anavori application and its backend services is designed to use secure network communication.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This protects information while it is being transmitted between supported clients and Anavori's backend systems.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Secure communication is particularly important for information such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>authentication requests,</li>
              <li>account information,</li>
              <li>journal content,</li>
              <li>habit and mission information,</li>
              <li>Ana conversations,</li>
              <li>synchronization activity.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Anavori does not intentionally design ordinary application communication to transmit sensitive account information through unprotected network channels.
            </p>
          </section>

          {/* Section 5 */}
          <section id="access-control-least-privilege" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              5. Access Control and Least Privilege
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori follows a least-privilege approach.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Systems and services should receive only the access necessary to perform their intended functions.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This principle applies to areas including:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>account authentication,</li>
              <li>database access,</li>
              <li>application services,</li>
              <li>notifications,</li>
              <li>AI processing,</li>
              <li>subscription status,</li>
              <li>session management.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              The underlying database and backend infrastructure are not intended to be directly accessible to ordinary application users.
            </p>
          </section>

          {/* Section 6 */}
          <section id="protection-personal-growth" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              6. Protection of Personal Growth Information
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori recognises that personal growth information can be highly personal.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Information such as journals, goals, habits, reflections, progress information, and conversations with Ana is therefore treated as account data requiring appropriate protection.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori does not publicly expose a member's private application information simply because it exists within the platform.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Features that use personal information are designed around the authenticated user's account and the intended purpose of the feature.
            </p>
          </section>

          {/* Section 7 */}
          <section id="ana-ai-data-protection" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              7. Ana and AI Data Protection
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Ana is Anavori's AI Growth Companion.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Ana responses are generated using <strong>Google Gemini</strong> through Anavori's backend AI integration.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              To provide relevant responses, an Ana request may include the user's message together with selected contextual information such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>display name,</li>
              <li>level,</li>
              <li>points,</li>
              <li>streak,</li>
              <li>goals,</li>
              <li>habits,</li>
              <li>missions,</li>
              <li>relevant recent journal excerpts,</li>
              <li>selected Ana memories.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Ana conversations and memories are stored in Anavori's PostgreSQL backend.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This information is used to provide continuity and personalised responses within the Ana experience.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Users can manage and delete individual Ana memories through the application where that functionality is provided.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Because AI processing involves an external AI service, information included in an Ana request may be processed by Google Gemini. Users should therefore avoid entering information they do not want processed as part of an AI conversation.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Additional information about AI processing and personal information is provided in the{" "}
              <a
                href={`${PAGES_BASE}/privacy-policy`}
                onClick={(e) => {
                  if (onNavigatePrivacy) {
                    e.preventDefault();
                    onNavigatePrivacy();
                  }
                }}
                className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
              >
                Anavori Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Section 8 */}
          <section id="firebase-services" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              8. Firebase Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses selected Firebase services for specific application functions.
            </p>

            <h3 className="text-lg font-display font-semibold text-slate-900 mt-4 mb-2">
              Firebase Cloud Messaging
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Firebase Cloud Messaging (FCM) is used to support push notifications.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Device notification tokens may be stored by Anavori's backend so that notifications can be delivered to the appropriate registered device.
            </p>

            <h3 className="text-lg font-display font-semibold text-slate-900 mt-4 mb-2">
              Password Reset
            </h3>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses Firebase Identity Toolkit as part of its password-reset email process.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              This service is used to facilitate password-reset functionality.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Firebase is not used as Anavori's authoritative database for journals, habits, missions, or Ana conversations.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              The Anavori application does not use Firebase Analytics, Firebase Crashlytics, or advertising SDKs as part of its current Android application implementation.
            </p>
          </section>

          {/* Section 9 */}
          <section id="google-sign-in" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              9. Google Sign-In
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori supports Google Sign-In as an authentication option.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Google authentication credentials are verified by the Anavori backend before an authenticated Anavori session is established.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Google Sign-In is handled separately from Firebase Authentication.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori does not require users to provide their Google account password to Anavori.
            </p>
          </section>

          {/* Section 10 */}
          <section id="subscription-payment-security" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              10. Subscription and Payment Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori Premium subscriptions on Android are processed through <strong>Google Play Billing</strong>.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Google Play is responsible for processing the applicable payment transaction and handling payment credentials associated with the purchase.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori does not directly receive or store the user's complete payment-card details used by Google Play.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori may receive and store information necessary to determine subscription status and Premium entitlement, such as applicable subscription or entitlement identifiers, trial status, and relevant dates.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              For payment-security purposes, users should rely on Google Play's payment and account-security mechanisms when managing their subscription.
            </p>
          </section>

          {/* Section 11 */}
          <section id="notifications-device-tokens" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              11. Notifications and Device Tokens
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori uses push notifications for features such as reminders and other relevant application notifications.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Where push notifications are enabled, the application may provide a device token to Anavori's backend.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              These tokens are used for their intended notification-delivery purpose.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Users can control notification permissions through the relevant device and application settings.
            </p>
          </section>

          {/* Section 12 */}
          <section id="local-device-storage" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              12. Local Device Storage
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Although Anavori uses a central backend for account and application data, some information may also be temporarily or locally stored on the user's device.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Examples include:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>cached application data,</li>
              <li>pending synchronization operations,</li>
              <li>journal drafts,</li>
              <li>onboarding and application preferences,</li>
              <li>theme preferences,</li>
              <li>securely stored authentication credentials.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Local storage is used to support application functionality, continuity, and performance.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Sensitive authentication credentials are handled through secure platform storage rather than ordinary application preferences.
            </p>
          </section>

          {/* Section 13 */}
          <section id="data-synchronisation" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              13. Data Synchronisation
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori is designed around an account-based experience rather than a device-only experience.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Relevant account information can therefore be synchronized with the Anavori backend so that an authenticated user can access their information across supported sessions and devices.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Synchronization is designed to preserve:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>confidentiality,</li>
              <li>data integrity,</li>
              <li>account ownership,</li>
              <li>reliable application state.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Where temporary connectivity issues occur, certain application data may be cached or queued locally and synchronized when connectivity becomes available.
            </p>
          </section>

          {/* Section 14 */}
          <section id="monitoring-operational-protection" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              14. Security Monitoring and Operational Protection
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori maintains server-side request and operational logging to support application operation, troubleshooting, and security-related investigation.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Monitoring and logging are intended to help identify abnormal behaviour, technical failures, and security issues while avoiding unnecessary collection of personal information.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Where a significant security incident affects users, Anavori may take appropriate measures to:
            </p>
            <ol className="list-decimal list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>investigate the incident;</li>
              <li>contain or mitigate the issue;</li>
              <li>restore affected services;</li>
              <li>assess potentially affected information; and</li>
              <li>communicate with affected users where appropriate.</li>
            </ol>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Security incidents and lessons learned may inform future security improvements.
            </p>
          </section>

          {/* Section 15 */}
          <section id="third-party-services" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              15. Third-Party Services
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Anavori relies on selected third-party services to provide parts of its infrastructure and functionality.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              These currently include services such as:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>Google Gemini for AI-generated Ana responses;</li>
              <li>Firebase services for selected notification and password-reset functionality;</li>
              <li>Google Sign-In for supported authentication;</li>
              <li>Google Play Billing for Android Premium subscriptions.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              Third-party services may have their own security and privacy practices.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori selects and uses these services for defined purposes and does not represent that third-party systems are entirely free from security risks.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              More information about third-party data processing is available in the{" "}
              <a
                href={`${PAGES_BASE}/privacy-policy`}
                onClick={(e) => {
                  if (onNavigatePrivacy) {
                    e.preventDefault();
                    onNavigatePrivacy();
                  }
                }}
                className="font-semibold text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
              >
                Privacy Policy
              </a>
              .
            </p>
          </section>

          {/* Section 16 */}
          <section id="security-limitations" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              16. Security Limitations
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              No software, network, database, authentication system, or cloud infrastructure can be guaranteed to be completely secure.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Anavori therefore does not claim that its security measures eliminate every possible risk.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Security threats can evolve, vulnerabilities can emerge, and third-party services can experience incidents outside Anavori's direct control.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Our objective is to maintain reasonable and appropriate safeguards and continuously improve them as the platform evolves.
            </p>
          </section>

          {/* Section 17 */}
          <section id="member-security-responsibilities" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              17. Member Security Responsibilities
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Security is a shared responsibility.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Members can help protect their accounts by:
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-sm sm:text-base text-slate-600 mt-2 pl-2">
              <li>using a strong and unique password;</li>
              <li>keeping their device operating system and Anavori application updated;</li>
              <li>protecting their device from unauthorized access;</li>
              <li>not sharing their Anavori login credentials;</li>
              <li>signing out of accounts on devices they no longer control;</li>
              <li>being cautious about links, messages, or requests for account information;</li>
              <li>avoiding unnecessary sensitive information in AI conversations.</li>
            </ul>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              If a member believes their account may have been compromised, they should contact Anavori Support as soon as possible.
            </p>
          </section>

          {/* Section 18 */}
          <section id="security-updates" className="scroll-mt-20">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              18. Security Updates
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Security practices will evolve as Anavori grows.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              Future improvements may include additional security controls, monitoring capabilities, authentication protections, infrastructure safeguards, and privacy controls.
            </p>
            <p className="text-sm sm:text-base leading-relaxed mt-2">
              When security-related changes materially affect how personal information is handled, the relevant documentation, including the Privacy Policy where appropriate, will be updated.
            </p>
          </section>

          {/* Section 19 */}
          <section id="contacting-about-security" className="scroll-mt-20 pt-4 border-t border-slate-200/80">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              19. Contacting Anavori About Security
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              If you discover a potential security vulnerability, suspicious activity, unauthorized access, or another security concern involving Anavori, please contact:
            </p>
            <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 text-sm text-slate-700 space-y-1.5">
              <p className="font-semibold text-slate-900">Anavori Support</p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:anavorisupport@gmail.com"
                    className="font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
                  >
                    anavorisupport@gmail.com
                  </a>
                </span>
              </p>
            </div>
            <p className="text-sm sm:text-base leading-relaxed mt-3">
              When reporting a security concern, please provide enough information for the issue to be investigated while avoiding unnecessary disclosure of sensitive personal information.
            </p>
          </section>

          {/* Our Security Commitment */}
          <section id="security-commitment" className="scroll-mt-20 pt-6 border-t border-slate-200/80">
            <h2 className="text-xl sm:text-2xl font-display font-bold text-slate-900 mb-3">
              Our Security Commitment
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-4">
              Anavori's approach to security is guided by a simple principle:
            </p>
            
            <blockquote className="p-4 sm:p-5 my-4 border-l-4 border-emerald-500 bg-emerald-50/50 rounded-r-2xl text-slate-800 italic font-medium text-sm sm:text-base leading-relaxed">
              “Security should quietly protect what matters while allowing members to focus on becoming the person they aspire to be.”
            </blockquote>

            <p className="text-sm sm:text-base leading-relaxed mt-4">
              We aim to build security into the platform without making the experience unnecessarily complicated, while continuously improving our practices as Anavori evolves.
            </p>

            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                Related documents:
              </p>
              <ul className="flex flex-wrap items-center gap-4 text-sm">
                <li>
                  <a
                    href={`${PAGES_BASE}/privacy-policy`}
                    onClick={(e) => {
                      if (onNavigatePrivacy) {
                        e.preventDefault();
                        onNavigatePrivacy();
                      }
                    }}
                    className="font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li className="text-slate-300">•</li>
                <li>
                  <a
                    href={`${PAGES_BASE}/terms-of-service`}
                    onClick={(e) => {
                      if (onNavigateTerms) {
                        e.preventDefault();
                        onNavigateTerms();
                      }
                    }}
                    className="font-medium text-emerald-700 hover:text-emerald-800 underline underline-offset-2 decoration-emerald-300 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
              <p className="text-xs text-slate-400 font-mono mt-4">
                <strong>Last Updated:</strong> 20/09/2026
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
            href="#security-by-design"
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
