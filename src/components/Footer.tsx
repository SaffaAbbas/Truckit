import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

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
      <path
        d="M14 9h2V6h-2c-1.7 0-3 1.3-3 3v2H9v3h2v7h3v-7h2.2l.8-3H14V9c0-.6.4-1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
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
            <Image
              src="/images/logo.png"
              alt="TRUCKIT"
              width={180}
              height={52}
              className="h-20 w-auto object-contain md:mb-10"
            />
          </div>

          {/* Links */}
          <div className="text-sm flex justify-center md:justify-start">
            <ul className="space-y-2 text-white/80 text-center md:text-left">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-sm flex flex-col items-center md:items-start">
            <div className="mb-4 font-semibold text-white/90">
              Connect with us
            </div>
            <div className="space-y-3 text-white/80">
              <a
                href="tel:+12428143648"
                className="flex items-center gap-2 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4" />
                +1 (242) 814-3648
              </a>
              <a
                href="mailto:info@truckitbahamas.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <MailIcon className="h-4 w-4" />
                info@truckitbahamas.com
              </a>

              <div className="flex items-center justify-center md:justify-start gap-3 pt-1 text-white/90">
                <a
                  href="https://www.facebook.com/truckitbahamas"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-md p-1 hover:bg-white/10"
                >
                  <FacebookIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/truckitbahamas/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-md p-1 hover:bg-white/10"
                >
                  <InstagramIcon className="h-5 w-5" />
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

          <div className="flex justify-center md:justify-end items-center gap-4">
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
