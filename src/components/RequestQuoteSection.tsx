"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useState } from "react";
function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function RequestQuoteSection({
  title = "WHEN THE LOAD IS HEAVY, TRUST TRUCK IT BAHAMAS",
  description = "If you have any questions or would like to get a quote, please send us a message or call us.",
  imageSrc = "/images/truck3.png",
}: {
  title?: string;
  description?: string;
  imageSrc?: string;
}) {
  const [thankYouOpen, setThankYouOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!thankYouOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [thankYouOpen]);

  useEffect(() => {
    if (!thankYouOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setThankYouOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [thankYouOpen]);

  return (
    <section className="bg-[#F5F5F5] overflow-hidden">
      <div className="grid items-stretch lg:grid-cols-2">
        <div className="flex items-center py-8 sm:py-10 lg:py-12">
          <div className="w-full max-w-[600px] ml-auto px-6 lg:px-12">
            <h2 className="font-heading text-xl font-extrabold uppercase leading-tight tracking-tight text-zinc-950 sm:text-3xl">
              {title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-600">
              {description}
            </p>

            <form
              className="mt-8 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setThankYouOpen(true);
              }}
            >
              <input
                type="text"
                name="name"
                required
                autoComplete="name"
                placeholder="Your Name*"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm text-black outline-none focus:border-[#4474E7]"
              />

              <input
                type="tel"
                name="phone"
                required
                autoComplete="tel"
                placeholder="Phone Number*"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm text-black outline-none focus:border-[#4474E7]"
              />

              <input
                type="email"
                name="email"
                required
                autoComplete="email"
                placeholder="Email Address*"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm text-black outline-none focus:border-[#4474E7]"
              />

              <input
                type="text"
                name="comments"
                placeholder="Comments"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm text-black outline-none focus:border-[#4474E7]"
              />

              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center bg-[#4474E7] px-7 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-[#3b66cc]"
              >
                Request a quote
              </button>
            </form>
          </div>
        </div>

        <div className="relative h-full min-h-[300px] lg:min-h-[380px] w-full">
          <Image src={imageSrc} alt="" fill className="object-cover" priority />
        </div>
      </div>

      {thankYouOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          role="presentation"
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-black/50"
            onClick={() => setThankYouOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 w-full max-w-[min(100%,26rem)] rounded-sm bg-white px-5 pb-8 pt-10 shadow-xl sm:px-8 sm:pb-10 sm:pt-12"
          >
            <button
              type="button"
              onClick={() => setThankYouOpen(false)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black text-white hover:bg-zinc-800 sm:right-4 sm:top-4"
              aria-label="Close dialog"
            >
              <CloseIcon className="h-4 w-4" />
            </button>

            <div className="flex flex-col items-center text-center font-sans">
              {/* Same asset as header; invert so it stays visible on white (asset is tuned for dark backgrounds). */}
              <div className="relative h-12 w-44 shrink-0 sm:h-14 sm:w-52">
                <Image
                  src="/images/logo.png"
                  alt="TRUCKIT"
                  fill
                  className="object-contain object-center invert"
                  sizes="(max-width: 640px) 176px, 208px"
                  priority
                />
              </div>
              <p
                id={titleId}
                className="mt-6 max-w-sm text-sm leading-7 text-black sm:text-[15px] sm:leading-8"
              >
                <span className="block">
                  We appreciate you getting in touch with us.
                </span>
                <span className="mt-1 block">
                  We will be in contact with you shortly.
                </span>
              </p>
              <Link
                href="/"
                onClick={() => setThankYouOpen(false)}
                className="mt-8 inline-flex h-11 w-full max-w-xs items-center justify-center bg-[#4474E7] px-6 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-[#3b66cc] sm:h-12"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
