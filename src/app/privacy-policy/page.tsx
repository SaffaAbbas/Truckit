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
          <div className="mx-auto max-w-4xl text-left">
            <p className="text-sm leading-7 text-zinc-700">
              Truck It (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              values your privacy. This Privacy Policy describes how we collect,
              use, store and share your personal information when you use our
              website at{" "}
              <a
                className="font-medium text-[#4474E7] hover:underline"
                href="https://www.truckitbahamas.com"
                target="_blank"
                rel="noreferrer"
              >
                www.truckitbahamas.com
              </a>{" "}
              (the &quot;Site&quot;), and your rights under Bahamian law.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  1. Information We Collect
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We may collect the following personal data:
                </p>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-700">
                  <p>
                    Information you provide: name, email address, phone number,
                    postal address, billing information, company name, job
                    title, operator requirements, etc.
                  </p>
                  <p>
                    Information automatically collected: IP address, browser
                    type, device used, geographic location, browsing behaviour
                    on the Site, pages visited, referring websites, etc.
                  </p>
                  <p>
                    Payment information: credit/debit card details or other
                    payment method details (as needed to process rental
                    transactions), subject to secure processing.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  2. How We Use Your Information
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We use your information for the following purposes:
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
                  <li>
                    Processing your booking/rental requests, contracts, and
                    payments.
                  </li>
                  <li>Managing your account with us.</li>
                  <li>
                    Communication: responding to inquiries, providing quotes,
                    sending confirmations, and sending reminders.
                  </li>
                  <li>
                    Marketing: sending you updates and promotional offers (where
                    you have consented).
                  </li>
                  <li>
                    Improving our services: site optimization, service
                    offerings, customer experience.
                  </li>
                  <li>
                    Complying with legal obligations, resolving disputes, and
                    enforcing our terms.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  3. Lawful Basis &amp; Data Protection under Bahamian Law
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We comply with the Data Protection (Privacy of Personal
                  Information) Act, 2003 of The Bahamas. (laws.bahamas.gov.bs)
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
                  <li>
                    Personal data is processed lawfully, fairly, and
                    transparently.
                  </li>
                  <li>
                    We collect only the data necessary for the purposes
                    described.
                  </li>
                  <li>
                    We keep data accurate and remove or correct it when
                    requested.
                  </li>
                  <li>
                    We retain data only as long as needed (or as required by
                    law).
                  </li>
                  <li>
                    We take all reasonable precautions to protect the privacy of
                    your personal data.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  4. Sharing Your Information
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We may share personal data with:
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
                  <li>
                    Service providers (e.g. payment processors, IT/website
                    hosting, contractors) for performance of their services.
                  </li>
                  <li>
                    Where required by law, for legal claims, or to protect
                    rights.
                  </li>
                  <li>
                    Third parties in connection with a merger, sale, or
                    reorganization, provided they agree to terms consistent with
                    this policy.
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-7 text-zinc-700">
                  We do not sell your personal information to third parties for
                  their direct marketing (unless you have given your explicit
                  consent).
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  5. Your Rights
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  Under Bahamian law, you have rights including:
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-zinc-700">
                  <li>To access personal data we hold about you.</li>
                  <li>To request correction or update of inaccurate data.</li>
                  <li>
                    To request deletion or erasure of personal data, subject to
                    legal or operational retention requirements.
                  </li>
                  <li>To object to direct marketing.</li>
                  <li>
                    To withdraw consent (where consent is the basis for
                    processing).
                  </li>
                  <li>
                    To exercise any of these rights, contact us at{" "}
                    <a
                      className="font-medium text-[#4474E7] hover:underline"
                      href="mailto:info@truckitbahamas.com"
                    >
                      info@truckitbahamas.com
                    </a>{" "}
                    with sufficient information to identify you and the request.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  6. Cookies &amp; Tracking
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We use cookies and similar technologies to provide, improve,
                  and analyze our service.
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  Cookies may be used for functionality (e.g. site login, quote
                  calculators, etc.), analytics (to understand how visitors use
                  our Site), and marketing (if you opt in).
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  You can disable cookies via your browser settings. Note: some
                  parts of the Site may not function properly if cookies are
                  disabled.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  7. Data Retention
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We retain personal data for as long as needed to fulfill the
                  purposes set out in this policy (contractual, legal, or
                  business needs).
                </p>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  After that, personal data will be securely deleted or
                  anonymized.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  8. Security
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We take reasonable steps to protect personal data from
                  unauthorized access, destruction, alteration, or disclosure.
                  These include secure servers, encryption where appropriate,
                  restricted access to personnel, and regular review of our data
                  security practices.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  9. Changes to this Policy
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  We may update this Privacy Policy periodically. We will post
                  any changes on this site and, where appropriate, notify you
                  via email. Your continued use of the Site after changes
                  constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  10. Contact Us
                </h2>
                <p className="mt-3 text-sm leading-7 text-zinc-700">
                  If you have questions about this Privacy Policy or how we
                  handle your personal data, please contact:
                </p>
                <div className="mt-3 text-sm leading-7 text-zinc-700">
                  <div>Truck It Bahamas</div>
                  <div>
                    <a
                      className="font-medium text-[#4474E7] hover:underline"
                      href="mailto:info@truckitbahamas.com"
                    >
                      info@truckitbahamas.com
                    </a>
                  </div>
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
