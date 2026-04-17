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
        <div className="grid items-center gap-12 py-16 md:grid-cols-3 md:gap-20">
          {/* <div className="grid gap-12 py-16 md:grid-cols-3 md:gap-20 md:items-center"> */}
          {/* Logo */}
          <div className="flex items-start justify-center md:justify-start md:items-start">
            <div className="flex flex-col items-center md:items-start">
              <div className="mb-4 w-full">
                <div className="text-sm font-semibold text-white/90 text-center md:text-left">
                  Partnering with
                </div>
                <div className="mt-3 flex flex-col items-center justify-center gap-3 md:items-start md:justify-start">
                  <Image
                    src="/images/footer1.png"
                    alt="Partner logo 1"
                    width={220}
                    height={90}
                    className="h-14 w-44 object-contain opacity-95"
                  />
                  <Image
                    src="/images/footer2.png"
                    alt="Partner logo 2"
                    width={220}
                    height={90}
                    className="h-14 w-44 object-contain opacity-95"
                  />
                  <Image
                    src="/images/logo%20white.png"
                    alt="TRUCKIT partner logo"
                    width={220}
                    height={90}
                    className="h-14 w-44 object-contain opacity-95"
                  />
                </div>
              </div>
            <Image
              src="/images/logo.png"
              alt="TRUCKIT"
              width={180}
              height={52}
              className="h-20 w-auto object-contain md:mb-10"
            />
            </div>
          </div>

          {/* Links */}
          <div className="text-sm flex justify-center md:justify-start">
            <ul className="space-y-2 text-white/80 text-center md:text-left">
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

          {/* Contact */}
          <div className="flex flex-col items-center text-sm md:items-start">
            <div className="mb-4 text-center font-semibold text-white/90 md:text-left">
              Connect with us
            </div>
            <div className="flex w-full flex-col items-center space-y-3 text-white/80 md:items-start">
              <a
                href="tel:+12428143648"
                className="flex w-full items-center justify-center gap-2 hover:text-white md:w-auto md:justify-start"
              >
                <PhoneIcon className="h-4 w-4 shrink-0" />
                +1 (242) 814-3648
              </a>
              <a
                href="mailto:info@truckitbahamas.com"
                className="flex w-full items-center justify-center gap-2 text-center hover:text-white md:w-auto md:justify-start md:text-left"
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
        <div className="flex flex-col gap-3 border-t border-white/15 py-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="text-center md:text-left">
            Copyright © 2026 Truck it Bahamas. All rights reserved.
          </div>

          <div className="flex w-full justify-center items-center gap-4 md:w-auto md:justify-end">
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
