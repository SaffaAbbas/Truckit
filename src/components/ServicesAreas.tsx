import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";

const services = [
  {
    title: "Heavy Equipment",
    description:
      "We transport heavy construction and industrial equipment using lowboy, flatbed, and step-deck trailers. We support excavators, loaders, compactors, generators, and more—ensuring efficient mobilization, demobilization, and site-to-site delivery.",
  },
  {
    title: "Container Hauling Services",
    description:
      "We provide reliable container hauling using chassis trailers, transporting 20 ft and 40 ft containers for ports, construction sites, warehouses, and more. All loads are moved in compliance with legal weight limits and transport regulations.",
  },
  {
    title: "Bulk Material Transport",
    description:
      "Using dump trailers and end-tippers, we transport sand, aggregate, gravel, asphalt (hot mix), and demolition debris to support construction and infrastructure projects efficiently and safely.",
  },
  {
    title: "Flatbed Freight",
    description:
      "Using flatbed trailers, our trucks transport steel, lumber, pipes, precast concrete, pallets of materials, and more. All loads are properly secured, with support for oversized (non-superload) freight in accordance with permit requirements.",
  },
] as const;

export function ServicesAreas({
  eyebrow = "Services",
  title = "SERVICE AREAS",
  intro = "Every transportation requires planning, precision, and experience. Truck It provides reliable and safe transportation for your project's needs, big or small. Below are our core service areas.",
  imageSrc = "/images/truck.png",
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  imageSrc?: string;
}) {
  return (
    <section className="bg-[#F5F5F5] py-16 font-sans text-black">
      <Container>
        <div className="max-w-3xl">
          <div className="text-xs font-medium text-[#4474E7]">{eyebrow}</div>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-3 text-sm leading-7">{intro}</p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative bg-zinc-100">
                <div className="aspect-[16/7] w-full">
                  <Image
                    src={imageSrc}
                    alt=""
                    fill
                    className="object-cover grayscale"
                    sizes="(min-width: 768px) 520px, 100vw"
                  />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-sm font-semibold text-zinc-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-xs leading-6">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/request-a-quote"
            className="inline-flex h-10 items-center justify-center rounded bg-[#4474E7] px-6 text-[11px] font-semibold uppercase tracking-wide text-white hover:bg-[#3b66cc]"
          >
            Request a quote
          </Link>
        </div>
      </Container>
    </section>
  );
}

