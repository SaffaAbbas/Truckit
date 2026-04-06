import Image from "next/image";
import { Container } from "./Container";

const defaultSpecs = [
  { label: "Truck type", value: "6×4 tractor unit" },
  { label: "Steering", value: "Left-hand drive (LHD)" },
  { label: "Engine power", value: "371 HP" },
  { label: "Maximum gross weight", value: "up to 50,000 kg (110,231 lbs)" },
  { label: "Unladen weight", value: "approx. 8,800 kg (19,400 lbs)" },
] as const;

export function OurTrucks({
  eyebrow = "Our Trucks",
  title = "BUILT TO MOVE HEAVY LOADS SAFELY AND EFFICIENTLY",
  description = "Our 6×4 truck is designed for heavy-duty transport, construction logistics, industrial hauling, transportation and operator included.",
  specsTitle = "Truck Specifications:",
  specs = defaultSpecs,
  imageSrc = "/images/truck2.png",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  specsTitle?: string;
  specs?: ReadonlyArray<{ label: string; value: string }>;
  imageSrc?: string;
}) {
  return (
    <section className="bg-white py-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-xl bg-zinc-100">
            <div className="aspect-[16/9] w-full">
              <Image
                src={imageSrc}
                alt=""
                fill
                className="object-cover grayscale"
                sizes="(min-width: 1024px) 520px, 100vw"
              />
            </div>
          </div>

          <div>
            <div className="text-xs font-medium text-[#4474E7]">{eyebrow}</div>
            <h2 className="font-heading mt-2 text-2xl font-extrabold tracking-tight text-zinc-950 sm:text-3xl">
              {title}
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-700">
              {description}
            </p>

            <div className="mt-5 text-sm font-semibold text-zinc-950">
              {specsTitle}
            </div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 text-zinc-700">
              {specs.map((s) => (
                <li key={s.label}>
                  <span className="font-medium text-zinc-900">{s.label}:</span>{" "}
                  {s.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
