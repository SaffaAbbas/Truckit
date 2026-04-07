import { Hero } from "../../components/Hero";
import { RequestQuoteSection } from "../../components/RequestQuoteSection";
import { Container } from "../../components/Container";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Hero
        title="PRIVACY POLICY"
        backgroundImageSrc="/images/bg.png"
        showCta={false}
        contentClassName="min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center"
      />
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-left font-sans text-black">
            <p className="text-sm font-medium text-zinc-700">
              Last updated: April, 2026
            </p>
            <p className="mt-4 text-sm leading-7">
              Truck It Bahamas (&quot;Company,&quot; &quot;we,&quot;
              &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
              committed to protecting your personal data. This Privacy Policy
              explains how we collect, use, disclose, store, and protect your
              personal information when you visit our website at{" "}
              <a
                className="font-medium text-[#4474E7] hover:underline"
                href="https://www.truckitbahamas.com"
                target="_blank"
                rel="noreferrer"
              >
                www.truckitbahamas.com
              </a>{" "}
              (the &quot;Site&quot;) or use our services.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  1. Data Controller
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Truck It Bahamas is the data controller responsible for your
                  personal data.
                </p>
                <div className="mt-4 space-y-1 text-sm leading-7">
                  <p>Contact details:</p>
                  <p>
                    Email:{" "}
                    <a
                      className="font-medium text-[#4474E7] hover:underline"
                      href="mailto:info@truckitbahamas.com"
                    >
                      info@truckitbahamas.com
                    </a>
                  </p>
                  <p>Address: Fire Trail Rd, Nassau, the Bahamas.</p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  2. Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We may collect and process the following categories of personal
                  data:
                </p>
                <div className="mt-4 space-y-6 text-sm leading-7">
                  <div>
                    <p className="font-medium">a. Information you provide</p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>Full name</li>
                      <li>Email address</li>
                      <li>Phone number</li>
                      <li>Postal address</li>
                      <li>Billing and account information</li>
                      <li>Company name and job title</li>
                      <li>Rental or operator requirements</li>
                      <li>
                        Any other information you provide through forms or
                        communications
                      </li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">
                      b. Information collected automatically
                    </p>
                    <ul className="mt-2 list-disc space-y-1 pl-5">
                      <li>IP address</li>
                      <li>Browser type and version</li>
                      <li>Device information</li>
                      <li>Geographic location (approximate)</li>
                      <li>Pages visited and time spent on the Site</li>
                      <li>Referring website URLs</li>
                      <li>Usage and interaction data</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">c. Payment information</p>
                    <p className="mt-2">
                      We do not store full credit or debit card details.
                      Payments are processed securely by third-party,
                      PCI-compliant payment providers. We may receive limited
                      transaction information such as payment status, billing
                      name, and partial card identifiers.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  3. How We Use Your Information
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We use your personal data for the following purposes:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>To process bookings, rentals, and payments</li>
                  <li>To manage your account and provide customer support</li>
                  <li>
                    To communicate with you (including confirmations, updates,
                    and responses to inquiries)
                  </li>
                  <li>
                    To send marketing communications where you have consented
                  </li>
                  <li>
                    To improve our website, services, and customer experience
                  </li>
                  <li>
                    To detect fraud, prevent misuse, and enhance security
                  </li>
                  <li>To comply with legal obligations and enforce our terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  4. Legal Basis for Processing
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We process your personal data on the following legal bases:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>
                    Contractual necessity: to provide services you request
                  </li>
                  <li>
                    Consent: for marketing communications and certain cookies
                  </li>
                  <li>
                    Legitimate interests: to improve services, prevent fraud,
                    and operate our business
                  </li>
                  <li>
                    Legal obligations: to comply with applicable laws and
                    regulations
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  We comply with the Data Protection (Privacy of Personal
                  Information) Act, 2003 of The Bahamas.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  5. Sharing Your Information
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We may share your personal data with:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>
                    Service providers (e.g., payment processors, hosting
                    providers, IT services, analytics providers)
                  </li>
                  <li>
                    Contractors or partners necessary to fulfill your booking or
                    rental services
                  </li>
                  <li>
                    Legal authorities where required by law or to protect rights
                    and safety
                  </li>
                  <li>
                    Third parties in connection with a business transfer (e.g.,
                    merger or sale), subject to confidentiality obligations
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  We do not sell your personal data to third parties for their
                  direct marketing purposes.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  6. International Data Transfers
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Your personal data may be transferred to and processed in
                  countries outside The Bahamas, including jurisdictions that may
                  not provide the same level of data protection.
                </p>
                <p className="mt-3 text-sm leading-7">
                  Where this occurs, we take reasonable steps to ensure
                  appropriate safeguards are in place, such as using reputable
                  service providers and contractual protections.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  7. Data Retention
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We retain personal data only for as long as necessary to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Fulfill the purposes outlined in this policy</li>
                  <li>Comply with legal, tax, or regulatory requirements</li>
                  <li>Resolve disputes and enforce agreements</li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  When data is no longer required, it will be securely deleted or
                  anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  8. Cookies and Tracking Technologies
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We use cookies and similar technologies to operate and improve
                  our Site.
                </p>
                <p className="mt-3 text-sm font-medium leading-7">
                  Types of cookies we use:
                </p>
                <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>
                    Essential cookies: necessary for site functionality
                  </li>
                  <li>
                    Analytics cookies: to understand how users interact with the
                    Site
                  </li>
                  <li>
                    Marketing cookies: to deliver relevant advertising (where
                    consent is given)
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  You can manage or disable cookies through your browser settings.
                  Some features of the Site may not function properly if cookies
                  are disabled.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  9. Your Rights
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Subject to applicable law, you have the right to:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your personal data</li>
                  <li>Object to or restrict certain processing activities</li>
                  <li>
                    Withdraw consent at any time (where consent is the basis for
                    processing)
                  </li>
                  <li>Opt out of marketing communications</li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  To exercise your rights, contact us at{" "}
                  <a
                    className="font-medium text-[#4474E7] hover:underline"
                    href="mailto:info@truckitbahamas.com"
                  >
                    info@truckitbahamas.com
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  10. Data Security
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We implement appropriate technical and organizational measures to
                  protect personal data, including:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Secure servers and encryption where appropriate</li>
                  <li>Access controls and staff confidentiality obligations</li>
                  <li>Regular review of security practices</li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  However, no method of transmission over the internet is
                  completely secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  11. Children&apos;s Privacy
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Our services are not intended for individuals under the age of
                  18. We do not knowingly collect personal data from children. If
                  we become aware that such data has been collected, we will take
                  steps to delete it.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  12. Third-Party Links
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Our Site may contain links to third-party websites. We are not
                  responsible for the privacy practices or content of those
                  sites.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  13. Changes to This Policy
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We may update this Privacy Policy from time to time. Any
                  changes will be posted on this page with an updated &quot;Last
                  updated&quot; date. Where appropriate, we will notify you of
                  significant changes.
                </p>
                <p className="mt-3 text-sm leading-7">
                  Your continued use of the Site after changes are posted
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  14. Contact Us
                </h2>
                <p className="mt-3 text-sm leading-7">
                  If you have any questions about this Privacy Policy or how your
                  data is handled, please contact:
                </p>
                <div className="mt-3 text-sm leading-7">
                  <div>Truck It Bahamas</div>
                  <div>
                    Email:{" "}
                    <a
                      className="font-medium text-[#4474E7] hover:underline"
                      href="mailto:info@truckitbahamas.com"
                    >
                      info@truckitbahamas.com
                    </a>
                  </div>
                  <div>Fire Trail Road, Nassau, the Bahamas</div>
                </div>
              </section>
            </div>
          </div>
        </Container>
      </section>
      <RequestQuoteSection imageSrc="/images/truck3.png" />
    </>
  );
}
