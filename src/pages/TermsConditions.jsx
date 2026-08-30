import { Link } from "react-router-dom";

function TermsConditions() {
  return (
    <main className="min-h-screen bg-black px-5 pb-24 pt-36 text-white">
      <div className="mx-auto max-w-4xl">

        <p className="text-xs uppercase tracking-[0.22em] text-white/40">
          Legal
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms & Conditions
        </h1>

        <p className="mt-5 text-sm leading-7 text-white/40">
          Last updated: August 30, 2026
        </p>

        <div className="mt-12 space-y-10 text-sm leading-7 text-white/55">

          <section>
            <h2 className="text-xl font-semibold text-white">
              1. Acceptance of Terms
            </h2>

            <p className="mt-3">
              By accessing or using the KosTechSoft website, you agree
              to these Terms & Conditions. If you do not agree with
              these terms, please do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              2. Services
            </h2>

            <p className="mt-3">
              KosTechSoft may provide services including website
              development, software development, AI automation,
              technology consulting and other digital services described
              on this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              3. Project Agreements
            </h2>

            <p className="mt-3">
              Project scope, pricing, timelines, deliverables,
              revisions and payment terms may be defined separately
              through proposals, quotations, agreements or other
              written communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              4. Intellectual Property
            </h2>

            <p className="mt-3">
              Website content, branding, source code, designs and other
              materials may be protected by intellectual-property laws.
              Ownership and usage rights for client projects will
              depend on the terms agreed for that specific project.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              5. Website Content
            </h2>

            <p className="mt-3">
              We make reasonable efforts to keep website information
              accurate and current, but information may change without
              notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              6. Third-Party Services
            </h2>

            <p className="mt-3">
              Services, platforms or links provided by third parties
              may be subject to their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              7. Limitation of Liability
            </h2>

            <p className="mt-3">
              To the extent permitted by applicable law, KosTechSoft
              shall not be responsible for losses arising from use of
              the website, temporary unavailability, third-party
              services or information provided through the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              8. Changes to These Terms
            </h2>

            <p className="mt-3">
              We may update these Terms & Conditions from time to time.
              Updated terms will be published on this page with a
              revised effective date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">
              9. Contact
            </h2>

            <p className="mt-3">
              Questions regarding these Terms & Conditions can be
              submitted through our Contact page.
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

export default TermsConditions;