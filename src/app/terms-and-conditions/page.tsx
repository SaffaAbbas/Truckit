import { Hero } from "../../components/Hero";
import { RequestQuoteSection } from "../../components/RequestQuoteSection";
import { Container } from "../../components/Container";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Hero
        title="TERMS & CONDITIONS"
        backgroundImageSrc="/images/bg.png"
        showCta={false}
        contentClassName="lg:pt-80 lg:pb-56"
      />
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-left font-sans text-black">
            <p>Last Updated: April, 2026</p>
            <p className="mt-4 text-sm leading-7">
              These Terms and Conditions (&quot;Terms&quot;) govern your access
              to and use of the website{" "}
              <a
                className="font-medium text-[#4474E7] hover:underline"
                href="https://www.truckitbahamas.com"
                target="_blank"
                rel="noreferrer"
              >
                www.truckitbahamas.com
              </a>{" "}
              (the &quot;Site&quot;) and the services provided by Truck It
              Bahamas (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or
              &quot;our&quot;).
            </p>
            <p className="mt-3 text-sm leading-7">
              By using the Site or booking any services, you agree to be bound
              by these Terms.
            </p>

            <div className="mt-10 space-y-10">
              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  1. Services
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Truck It Bahamas provides a platform for requesting and
                  coordinating trucking, hauling, and equipment rental services
                  (&quot;Services&quot;). We may act as a direct provider and/or
                  as an intermediary connecting customers with independent
                  contractors or operators.
                </p>
                <p className="mt-3 text-sm leading-7">
                  We reserve the right to accept, reject, or cancel any booking
                  at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  2. Eligibility
                </h2>
                <p className="mt-3 text-sm leading-7">
                  You must be at least 18 years old to use our Services. By
                  using the Site, you confirm that you meet this requirement and
                  have the legal capacity to enter into binding contracts.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  3. Bookings and Payments
                </h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>
                    All bookings are subject to availability and confirmation.
                  </li>
                  <li>
                    Prices may be provided as quotes and are subject to change
                    until confirmed.
                  </li>
                  <li>
                    Payment terms (including deposits or full payment) will be
                    specified at the time of booking.
                  </li>
                  <li>
                    We may use third-party payment processors to handle
                    transactions securely.
                  </li>
                  <li>
                    You agree to provide accurate billing and payment
                    information.
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  Failure to make required payments may result in cancellation
                  of services.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  4. Cancellations and Refunds
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Cancellation policies will be communicated at the time of
                  booking.
                </p>
                <p className="mt-3 text-sm leading-7">
                  Late cancellations or no-shows may be subject to fees.
                </p>
                <p className="mt-3 text-sm leading-7">
                  Refunds, if applicable, will be processed in accordance with
                  the agreed terms and may be subject to administrative
                  deductions.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  5. User Responsibilities
                </h2>
                <p className="mt-3 text-sm leading-7">You agree to:</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Provide accurate and complete information</li>
                  <li>Use the Services only for lawful purposes</li>
                  <li>
                    Ensure safe and appropriate use of any rented equipment
                  </li>
                  <li>
                    Comply with all applicable laws, regulations, and safety
                    requirements
                  </li>
                  <li>
                    Obtain any necessary permits or permissions required for
                    your project
                  </li>
                </ul>
                <p className="mt-4 text-sm leading-7">
                  You are responsible for any damage, loss, or misuse of
                  equipment during your rental period unless otherwise agreed.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  6. Equipment and Operator Terms
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Equipment is provided &quot;as available&quot; and may vary
                  from descriptions.
                </p>
                <p className="mt-3 text-sm leading-7">
                  Operators (where provided) may be independent contractors.
                </p>
                <p className="mt-3 text-sm leading-7">
                  You acknowledge that heavy equipment and transport services
                  involve inherent risks.
                </p>
                <p className="mt-3 text-sm leading-7">
                  You assume responsibility for site conditions, including
                  access, safety, and suitability for the requested services.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  7. Liability and Risk Allocation
                </h2>
                <p className="mt-3 text-sm leading-7">
                  To the fullest extent permitted by law:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>
                    The Company is not liable for indirect, incidental, or
                    consequential damages.
                  </li>
                  <li>
                    We are not responsible for delays caused by weather,
                    traffic, mechanical issues, or events beyond our control.
                  </li>
                  <li>
                    Where services are performed by third-party operators, we
                    are not liable for their acts or omissions.
                  </li>
                  <li>
                    Our total liability for any claim shall not exceed the
                    amount paid by you for the specific service.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  8. Indemnification
                </h2>
                <p className="mt-3 text-sm leading-7">
                  You agree to indemnify and hold harmless Truck It Bahamas, its
                  affiliates, employees, and partners from any claims, damages,
                  liabilities, and expenses arising from:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Your use of the Services</li>
                  <li>Your breach of these Terms</li>
                  <li>
                    Any damage to property or injury caused during your project
                    or rental period
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  9. Site Use and Intellectual Property
                </h2>
                <p className="mt-3 text-sm leading-7">
                  All content on the Site, including text, graphics, logos, and
                  software, is the property of the Company or its licensors and
                  is protected by applicable laws.
                </p>
                <p className="mt-3 text-sm leading-7">
                  You may not copy, reproduce, distribute, or use any content
                  without prior written permission.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  10. Third-Party Services
                </h2>
                <p className="mt-3 text-sm leading-7">
                  Our Site may contain links to third-party services. We do not
                  control and are not responsible for their content, policies,
                  or practices.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  11. Suspension and Termination
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We may suspend or terminate your access to the Site or
                  Services at any time if you:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Violate these Terms</li>
                  <li>Engage in fraudulent or harmful behavior</li>
                  <li>Fail to make required payments</li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  12. Disclaimer of Warranties
                </h2>
                <p className="mt-3 text-sm leading-7">
                  The Services are provided on an &quot;as is&quot; and &quot;as
                  available&quot; basis. We make no warranties regarding:
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7">
                  <li>Availability or reliability of the Services</li>
                  <li>Accuracy of information on the Site</li>
                  <li>Suitability of services for your specific needs</li>
                </ul>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  13. Force Majeure
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We are not responsible for failure or delay in performance due
                  to events beyond our reasonable control, including natural
                  disasters, weather conditions, labor disputes, or government
                  actions.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  14. Governing Law and Dispute Resolution
                </h2>
                <p className="mt-3 text-sm leading-7">
                  These Terms are governed by the laws of the Commonwealth of
                  The Bahamas.
                </p>
                <p className="mt-3 text-sm leading-7">
                  You agree to first attempt to resolve any dispute informally
                  by contacting us. If unresolved, disputes shall be subject to
                  the exclusive jurisdiction of the courts of The Bahamas.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  15. Changes to These Terms
                </h2>
                <p className="mt-3 text-sm leading-7">
                  We may update these Terms at any time. Updated versions will
                  be posted on this page with a revised &quot;Last updated&quot;
                  date.
                </p>
                <p className="mt-3 text-sm leading-7">
                  Continued use of the Services constitutes acceptance of the
                  updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  16. Entire Agreement
                </h2>
                <p className="mt-3 text-sm leading-7">
                  These Terms constitute the entire agreement between you and
                  Truck It Bahamas regarding the use of the Services and
                  supersede any prior agreements.
                </p>
              </section>

              <section>
                <h2 className="text-base font-semibold text-zinc-950">
                  17. Contact Us
                </h2>
                <div className="mt-3 text-sm leading-7">
                  <div>Truck It Bahamas</div>
                  <div>
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
