import Image from "next/image";
import { Container } from "./Container";
import { RequestQuoteLink } from "./RequestQuoteLink";

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
            className="object-cover object-[80%_center] sm:object-center brightness-150"
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>

        <Container>
          {/* <div
            className={`relative px-0 py-16 sm:py-20 lg:py-28 ${
              headerOffset ? "pt-24 sm:pt-28 lg:pt-36" : ""
            } ${contentClassName}`}
          > */}
          <div
            className={`relative px-0 pb-24 pt-44 sm:py-32 lg:pb-40 lg:pt-64 ${
              headerOffset ? "pt-32 sm:pt-36 lg:pt-44" : ""
            } ${contentClassName}`}
          >
            <div className="mx-auto max-w-2xl text-center sm:mx-0 sm:text-left">
              <h1 className="font-heading text-balance text-[20px] font-extrabold uppercase leading-[1.35] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-3xl sm:leading-tight lg:text-4xl">
                {title}
              </h1>
              {showCta ? (
                <div className="mt-6 flex justify-center sm:block">
                  {ctaHref === "/#quote" ? (
                    <RequestQuoteLink className="inline-flex w-full max-w-[360px] items-center justify-center rounded-md bg-[#4474E7] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-[#3b66cc] sm:w-auto sm:max-w-none sm:justify-start sm:px-5 sm:py-3 sm:text-xs">
                      {ctaLabel}
                    </RequestQuoteLink>
                  ) : (
                    <a
                      href={ctaHref}
                      className="inline-flex w-full max-w-[360px] items-center justify-center rounded-md bg-[#4474E7] px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white shadow-sm hover:bg-[#3b66cc] sm:w-auto sm:max-w-none sm:justify-start sm:px-5 sm:py-3 sm:text-xs"
                    >
                      {ctaLabel}
                    </a>
                  )}
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
