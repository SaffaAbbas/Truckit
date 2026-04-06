import Image from "next/image";
import { Container } from "./Container";

export function PageHero({
  title,
  backgroundImageSrc = "/images/bg.png",
  overlayClassName = "bg-black/5",
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
            className="object-cover brightness-150"
          />
          <div className={`absolute inset-0 ${overlayClassName}`} />
        </div>

        <Container>
          <div className="relative flex min-h-[520px] items-center pt-16 sm:min-h-[600px] lg:min-h-[720px]">
            <h1 className="font-heading max-w-2xl text-balance text-2xl font-extrabold uppercase leading-tight tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)] sm:text-3xl lg:text-4xl">
              {title}
            </h1>
          </div>
        </Container>
      </div>
    </section>
  );
}

