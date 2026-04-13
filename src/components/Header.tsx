"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Container } from "./Container";
import { RequestQuoteLink } from "./RequestQuoteLink";

const navLinks = [
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

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 9h16M4 15h16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
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

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const links = useMemo(() => navLinks, []);
  const pathname = usePathname();

  useEffect(() => {
    // Ensure scroll-lock is never carried across navigations.
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    // <header className="sticky top-0 z-50 w-full">
    <header className="fixed top-0 z-50 w-full">
      {/* <div className="bg-gradient-to-b from-zinc-500 to-zinc-700"> */}
      <div
        style={{
          background:
            "linear-gradient(180deg, rgba(17, 17, 17, 0.52) 0%, rgba(79, 79, 79, 0.3848) 100%)",
        }}
      >
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo.png"
                alt="TRUCKIT"
                width={140}
                height={40}
                priority
                className="h-8 w-auto object-contain"
              />
            </Link>

            <nav className="hidden items-center gap-8 text-sm font-medium text-white/90 md:flex">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="tel:+12428143648"
                className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-xs font-semibold tracking-wide text-zinc-900 shadow-sm ring-1 ring-black/10 transition hover:bg-zinc-100 md:inline-flex"
              >
                <PhoneIcon className="h-4 w-4 text-zinc-700" />
                CALL NOW
              </a>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/10 md:hidden"
                aria-label="Open menu"
                aria-haspopup="dialog"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen(true)}
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Container>
      </div>

      {mobileOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute inset-0 bg-white shadow-xl">
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between px-5 py-4">
                <Link href="/#home" onClick={() => setMobileOpen(false)}>
                  <Image
                    src="/images/logo.png"
                    alt="TRUCKIT"
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain invert"
                  />
                </Link>
                <button
                  type="button"
                  className="rounded-md p-2 text-zinc-800 hover:bg-zinc-100"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="flex-1 px-6 pb-6 pt-8">
                <nav className="flex flex-col items-center gap-5 text-sm font-medium text-zinc-900">
                  {links.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="py-1"
                      onClick={() => setMobileOpen(false)}
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                <div className="mt-12 flex flex-col items-center gap-4 text-xs text-zinc-700">
                  <div className="flex items-center gap-2 text-zinc-700">
                    <PhoneIcon className="h-4 w-4" />
                    <a href="tel:+12428143648" className="hover:underline">
                      +1 (242) 814-3648
                    </a>
                  </div>

                  <div className="flex items-center gap-1 text-zinc-900">
                    <a
                      href="https://www.facebook.com/profile.php?id=61585079669583"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                      className="inline-flex items-center justify-center rounded-md p-1 hover:bg-zinc-100"
                    >
                      <FacebookIcon className="block h-5 w-5 -translate-y-[3px]" />
                    </a>
                    <a
                      href="https://www.instagram.com/truckitbahamas/"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="inline-flex items-center justify-center rounded-md p-1 hover:bg-zinc-100"
                    >
                      <InstagramIcon className="block h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-8">
                <RequestQuoteLink
                  onClick={() => setMobileOpen(false)}
                  className="mx-auto flex h-12 w-full max-w-[360px] items-center justify-center rounded-md bg-[#4474E7] text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#3b66cc] sm:max-w-none sm:rounded sm:text-xs"
                >
                  REQUEST A QUOTE
                </RequestQuoteLink>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
