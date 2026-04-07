import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

export function WhyChooseUs({
  eyebrow = "About us",
  title = "WHY CHOOSE US",
  description = "Locally owned and with extensive experience, we've built a reputation for safe, reliable truck services. From residential to industrial projects, our professional drivers and reliable trucks handle each job hassle-free.",
  buttonLabel = "CALL/TEXT NOW",
  buttonHref = "tel:+12428143648",
  imageSrc = "/images/labour.png",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
  imageSrc?: string;
}) {
  return (
    <section className="bg-white">
      <Container>
        <div className="grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16">
          <div>
            <Link
              href="/about-us"
              className="text-xs font-medium text-[#4474E7] hover:underline"
            >
              {eyebrow}
            </Link>
            <h2 className="font-heading mt-3 text-xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-black font-sans">
              {description}
            </p>

            <a
              href={buttonHref}
              className="mt-8 inline-flex h-11 items-center justify-center rounded bg-[#4474E7] px-6 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#3b66cc]"
            >
              {buttonLabel}
            </a>
          </div>

          <div className="relative overflow-hidden rounded-xl bg-zinc-100">
            <div className="aspect-[4/3] w-full">
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

