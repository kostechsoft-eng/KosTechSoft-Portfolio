import { Link } from "react-router-dom";

function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-4xl">

        <p className="text-xs uppercase tracking-[0.22em] text-white/40">
          Legal
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Privacy Policy
        </h1>

        <p className="mt-5 text-sm leading-7 text-white/40">
          Last updated: August 30, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm leading-7 text-white/55">

          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Introduction
            </h2>

            <p className="mt-3">
              KosTechSoft respects your privacy and is committed to
              protecting the information you share with us through our
              website, contact forms and other communication channels.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Information We Collect
            </h2>

            <p className="mt-3">
              We may collect information that you voluntarily provide,
              such as your name, email address, phone number, company
              information and project requirements when you contact us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. How We Use Information
            </h2>

            <p className="mt-3">
              Information may be used to respond to enquiries, discuss
              projects, provide requested services, communicate with you
              about your enquiry and improve our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Information Sharing
            </h2>

            <p className="mt-3">
              We do not sell your personal information. Information may
              be shared with service providers only where reasonably
              necessary to operate our website, communication systems
              or requested services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Cookies
            </h2>

            <p className="mt-3">
              Our website may use cookies or similar technologies for
              functionality, performance and analytics. The use of
              cookies may depend on the services integrated into the
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Third-Party Services
            </h2>

            <p className="mt-3">
              Our website may link to or use third-party services such
              as WhatsApp, social media platforms, hosting providers,
              analytics services or communication tools. Their own
              privacy policies may apply.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Data Security
            </h2>

            <p className="mt-3">
              We take reasonable measures to protect information
              submitted through our website. However, no internet
              transmission or electronic storage method can be
              guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Contact
            </h2>

            <p className="mt-3">
              For privacy-related questions or requests, contact us
              through the details available on our Contact page.
            </p>
          </section>

        </div>

        <Link
          to="/"
          className="mt-12 inline-flex border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:bg-white hover:text-black"
        >
          Back to Home
        </Link>

      </div>
    </main>
  );
}

export default PrivacyPolicy;