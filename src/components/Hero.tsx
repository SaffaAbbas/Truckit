import Link from "next/link";
import Image from "next/image";
import { Container } from "./Container";

export function Hero({
  title = "YOUR RELIABLE HEAVY LOAD TRANSPORTATION ACROSS NASSAU",
  ctaLabel = "REQUEST A QUOTE",
  ctaHref = "/#quote",
  backgroundImageSrc = "/images/bg.png",
  showCta = true,
  headerOffset = false,
  contentClassName = "",
}: {
  title?: string;
  ctaLabel?: string;
  ctaHref?: string;
  backgroundImageSrc?: string;
  showCta?: boolean;
  headerOffset?: boolean;
  contentClassName?: string;
}) {
  return (
    <section className="w-full bg-zinc-100">
      <div className="relative w-full overflow-hidden bg-zinc-200">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={backgroundImageSrc}
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <Container>
          {/* <div
            className={`relative px-0 py-16 sm:py-20 lg:py-28 ${
              headerOffset ? "pt-24 sm:pt-28 lg:pt-36" : ""
            } ${contentClassName}`}
          > */}
          <div
            className={`relative px-0 py-24 sm:py-32 lg:py-40 ${
              headerOffset ? "pt-32 sm:pt-36 lg:pt-44" : ""
            } ${contentClassName}`}
          >
            <div className="max-w-2xl">
              <h1 className="text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h1>
              {showCta ? (
                <div className="mt-6">
                  <Link
                    href={ctaHref}
                    className="inline-flex items-center rounded bg-[#4474E7] px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-[#3b66cc]"
                  >
                    {ctaLabel}
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
