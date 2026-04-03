import Image from "next/image";
import { Container } from "./Container";

export function RequestQuoteSection({
  title = "WHEN THE LOAD IS HEAVY, TRUST TRUCK IT BAHAMAS",
  description = "If you have any questions or would like to get a quote, please send us a message or call us.",
  imageSrc = "/images/truck3.png",
}: {
  title?: string;
  description?: string;
  imageSrc?: string;
}) {
  return (
    <section className="bg-[#F5F5F5] overflow-hidden">
      <div className="grid items-stretch lg:grid-cols-2">
        {/* LEFT SIDE */}
        {/* <div className="flex items-center py-14 sm:py-16 lg:py-20"> */}
        <div className="flex items-center py-8 sm:py-10 lg:py-12">
          <div className="w-full max-w-[600px] ml-auto px-6 lg:px-12">
            <h2 className="text-3xl font-extrabold uppercase leading-tight tracking-tight text-zinc-950 sm:text-4xl">
              {title}
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-600">
              {description}
            </p>

            <form className="mt-8 space-y-6">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm outline-none focus:border-[#4474E7]"
              />

              <input
                type="tel"
                placeholder="Phone Number*"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm outline-none focus:border-[#4474E7]"
              />

              <input
                type="email"
                placeholder="Email Address*"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm outline-none focus:border-[#4474E7]"
              />

              <input
                type="text"
                placeholder="Comments"
                className="w-full border-b border-zinc-300 bg-transparent pb-3 text-sm outline-none focus:border-[#4474E7]"
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

        {/* RIGHT SIDE IMAGE */}
        {/* <div className="relative h-full min-h-[400px] lg:min-h-[520px] w-full"> */}
        <div className="relative h-full min-h-[300px] lg:min-h-[380px] w-full">
          <Image src={imageSrc} alt="" fill className="object-cover" priority />
        </div>
      </div>
    </section>
  );
}
