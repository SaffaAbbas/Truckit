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
        contentClassName="min-h-[70vh] sm:min-h-[75vh] lg:min-h-[85vh] flex items-center"
      />
      <section className="bg-white py-16">
        <Container>
          <div className="mx-auto max-w-4xl text-left font-sans text-black">
            <p className="text-sm leading-7">
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your use
              of the Site and the services offered by Truck It Bahamas. By
              accessing or using the Site or renting equipment through us, you
              agree to these Terms.
            </p>

            <div className="mt-10 space-y-4 text-sm leading-7">
              <p>
                Acknowledgement. These are the rules that apply to using this
                service, as well as the contract between You (Customer) and the
                Company (Truck It Bahamas).All users&apos; rights and
                responsibilities in relation to using the service are outlined
                in these Terms and Conditions. Your acceptance of and adherence
                to these Terms and Conditions will govern your access to and use
                of the service. All users, visitors, and other individuals who
                access or use the service are subject to these Terms and
                Conditions.
              </p>
              <p>
                You accept these Terms and Conditions by accessing or using the
                service.
              </p>
              <p>
                You may not use the service if You disagree with any part of
                these Terms and Conditions. You certify that You are older than
                18 years old. People under 18 years old are not allowed to
                utilise the service, according to Truck It Bahamas. The
                Company&apos;s Privacy Policy must also be accepted and followed
                in order for you to access and use the service.
              </p>
              <p>
                Our Privacy Policy informs You of your privacy rights and the
                ways in which the law protects You while describing our policies
                and practices regarding the gathering, use, and sharing of your
                personal information when You use the website.
              </p>
              <p>
                Before using our service, please carefully read our Privacy
                Policy.
              </p>
              <p>
                The service is and will continue to be the sole property of the
                Company and its licensors, including all of its original content
                (aside from content that is supplied by You or other users),
                features, and functionality.
              </p>
              <p>
                The copyright, trademark, and other laws of the country as well
                as those of other nations provide protection for the service.
                Without the prior written approval of the Company, use of our
                trademarks and trade dress in connection with any good or
                service is strictly prohibited.
              </p>
              <p>
                Links to Other Websites. Links to third-party websites or
                services that are not within the Company&apos;s control or
                ownership may be found on our service. The Company has no
                control over and accepts no liability for any third-party web
                sites or services&apos; content, privacy policies, or practices.
                You further acknowledge and agree that the Company shall not be
                responsible or liable, directly or indirectly, for any injury or
                damage of any kind resulting from use of or reliance on any such
                content, goods, or services made available on or through any
                such websites or services, whether such injury or damage is
                foreseeable or arises from a negligent act or omission on the
                part of the Company. We firmly encourage that before using any
                third-party websites or services, You read their terms of
                service and privacy policies.
              </p>
              <p>
                Termination Without Warning or Liability. We reserve the right
                to immediately cancel or suspend your use of this website for
                any reason, including, without limitation, if You violate these
                Terms and Conditions. Limitation of Liability. To the fullest
                extent permitted by law, in no event shall the Company or its
                suppliers be liable for any special, incidental, indirect, or
                consequential damages of any kind (including, but not limited
                to, damages for loss of profits, loss of data or other
                information, for business interruption, for personal injury, for
                loss of privacy, or otherwise arising out of or connected to the
                use of or inability to use the Service, third-party software,
                and/or third-party hardware).
              </p>
              <p>
                Governing Law. The terms of this agreement and your use of the
                service shall be governed by Commonwealth of The Bahamas law,
                except for its rules on conflicts of law. You consent to
                initially attempt an informal resolution of any issue or
                disagreement You may have with the service by getting in touch
                with the Company.
              </p>
              <p>
                Severability and Waiver Severability. The remaining provisions
                will remain in full force and effect even if any provision of
                these Terms is found to be unenforceable or unlawful. Instead,
                that provision will be amended and interpreted to the greatest
                degree permitted by relevant law in order to achieve its
                intended goals.
              </p>
              <p>
                Waiver Except. A party&apos;s inability to exercise a right
                under these terms or to enforce a performance obligation shall
                not prevent that party from doing so in the future, nor shall a
                party&apos;s waiver of one breach constitute a waiver of any
                subsequent breaches.
              </p>
              <p>
                Changes to These Terms and Conditions. We reserve the right to
                alter or amend these Terms at any moment, in our sole
                discretion. We shall use reasonable efforts to give You at least
                30 days&apos; notice before any new terms go into effect if the
                adjustment is important. We reserve the right to judge what
                constitutes a material change. You agree to be bound by the
                amended terms if You access or use our service after such
                revisions take effect.
              </p>
              <p>
                Please discontinue using the website and the service if, in
                whole or in part, You disagree with the new terms.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <RequestQuoteSection imageSrc="/images/truck3.png" />
    </>
  );
}
