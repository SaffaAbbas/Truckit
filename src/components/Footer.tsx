import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";
import { RequestQuoteLink } from "./RequestQuoteLink";

const quickLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About us" },
  { href: "/#services", label: "Services" },
  { href: "/#trucks", label: "Trucks" },
  { href: "/#quote", label: "Request a quote" },
] as const;

/** Main TRUCKIT mark: centered on mobile like nav/contact; left in box on desktop */
const footerLogoBoxClass =
  "block h-14 w-44 max-w-full shrink-0 object-contain object-center opacity-95 mx-auto md:mx-0 md:object-left";

/**
 * Partner logos: mobile matches centered nav + contact (`object-center`, `mx-auto`).
 * Desktop: left column rail with `object-left` + fixed width.
 */
const partnerLogoBoxClass =
  "block h-14 w-44 max-w-full shrink-0 object-contain object-center opacity-95 mx-auto md:mx-0 md:object-left md:h-14 md:w-44";

/** footer1.png has extra transparent padding on the left — desktop only */
const partnerFooter1Class = `${partnerLogoBoxClass} md:-ml-4`;

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.6 3.5c.5 0 .9.3 1.1.8l1 2.6c.2.5 0 1-.4 1.3l-1.2.9a12.9 12.9 0 0 0 6.8 6.8l.9-1.2c.3-.4.9-.6 1.3-.4l2.6 1c.5.2.8.6.8 1.1v2.1c0 .7-.6 1.3-1.3 1.3C10 21.8 2.2 14 2.2 4.8c0-.7.6-1.3 1.3-1.3h3.1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.5 7.5h15v9h-15v-9Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m5.2 8.2 6.8 5.4 6.8-5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(0.5 0.25) scale(1.12)">
        <path
          d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9c0-.6.4-1 1-1Z"
          fill="currentColor"
        />
      </g>
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <g transform="translate(0.95 0.95) scale(0.92)">
        <path
          d="M8 3.8h8A4.2 4.2 0 0 1 20.2 8v8A4.2 4.2 0 0 1 16 20.2H8A4.2 4.2 0 0 1 3.8 16V8A4.2 4.2 0 0 1 8 3.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M12 9.1a2.9 2.9 0 1 0 0 5.8 2.9 2.9 0 0 0 0-5.8Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M17.3 6.7h.01" stroke="currentColor" strokeWidth="2.8" />
      </g>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto bg-gradient-to-r from-black to-zinc-900 text-white">
      <Container>
        {/* Top Section */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-8 py-12 sm:gap-10 sm:py-14 md:grid-cols-4 md:gap-10 md:py-16 lg:gap-16">
          {/* Brand: TRUCKIT — top-aligned with nav + section headers */}
          <div className="flex min-w-0 flex-col items-center self-start md:items-start">
            <Image
              src="/images/logo.png"
              alt="TRUCKIT"
              width={176}
              height={56}
              className={footerLogoBoxClass}
            />
          </div>

          {/* Links — first line lines up with “Partnering with” / “Connect with us” */}
          <div className="flex min-w-0 justify-center self-start text-sm md:justify-start">
            <ul className="space-y-2 text-white/80 text-center md:text-left md:leading-5">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  {l.href === "/#quote" ? (
                    <RequestQuoteLink className="hover:text-white">
                      {l.label}
                    </RequestQuoteLink>
                  ) : (
                    <Link href={l.href} className="hover:text-white">
                      {l.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Partner logos: centered on mobile like nav + contact; desktop rail unchanged */}
          <div className="flex w-full min-w-0 max-w-full flex-col items-center self-start text-center md:w-max md:max-w-none md:items-start md:justify-self-start md:text-left">
            <div className="mb-3 w-full text-center text-sm font-semibold leading-5 text-white/90 md:w-auto md:-translate-x-1 md:text-left">
              Partnering with
            </div>
            <div className="flex w-full min-w-0 flex-col items-center gap-2 md:w-auto md:items-start">
              <Image
                src="/images/footer1.png"
                alt="Mr. Foam Bahamas"
                width={176}
                height={56}
                className={partnerFooter1Class}
              />
              <Image
                src="/images/footer2.png"
                alt="Mr. Crane"
                width={176}
                height={56}
                className={partnerLogoBoxClass}
              />
              <Image
                src="/images/logo%20white.png"
                alt="Bahamas Machine Rentals"
                width={176}
                height={56}
                className={partnerLogoBoxClass}
              />
            </div>
          </div>

          {/* Contact */}
          <div className="flex min-w-0 flex-col items-center self-start text-sm md:items-start">
            <div className="mb-3 text-center font-semibold leading-5 text-white/90 md:text-left">
              Connect with us
            </div>
            <div className="flex w-full min-w-0 max-w-full flex-col items-center space-y-3 text-white/80 md:items-start">
              <a
                href="tel:+12428143648"
                className="flex w-full min-w-0 items-center justify-center gap-2 hover:text-white md:w-auto md:justify-start"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                +1 (242) 814-3648
              </a>
              <a
                href="mailto:info@truckitbahamas.com"
                className="flex w-full min-w-0 max-w-full items-center justify-center gap-2 break-words text-center hover:text-white md:w-auto md:justify-start md:text-left"
              >
                <MailIcon className="h-4 w-4 shrink-0" />
                info@truckitbahamas.com
              </a>

              <div className="flex items-center justify-center gap-1 pt-1 text-white/90 md:justify-start md:gap-2 md:-ml-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61585079669583"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center rounded-md p-1 hover:bg-white/10"
                >
                  <FacebookIcon className="block h-5 w-5 -translate-y-[3px]" />
                </a>
                <a
                  href="https://www.instagram.com/truckitbahamas/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="inline-flex items-center justify-center rounded-md p-1 hover:bg-white/10"
                >
                  <InstagramIcon className="block h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex min-w-0 flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="min-w-0 text-center break-words md:text-left">
            Copyright © 2026 Truck it Bahamas. All rights reserved.
          </div>

          <div className="flex w-full min-w-0 shrink-0 flex-wrap justify-center items-center gap-x-4 gap-y-2 md:w-auto md:flex-nowrap md:justify-end">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
