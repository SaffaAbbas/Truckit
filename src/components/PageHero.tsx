import Image from "next/image";
import { Container } from "./Container";

export function PageHero({
  title,
  backgroundImageSrc = "/images/bg.png",
  overlayClassName = "bg-black/35",
}: {
  title: string;
  backgroundImageSrc?: string;
  overlayClassName?: string;
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
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </div>

        <Container>
          <div className="relative flex min-h-[520px] items-center pt-16 sm:min-h-[600px] lg:min-h-[720px]">
            <h1 className="max-w-2xl text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
}

