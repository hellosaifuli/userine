import { BadgeCheck, ArrowRight, MessageCircle } from "lucide-react";
import { Container } from "@/app/components/Container";

const strip = [
  "Brand Identity",
  "Website Design",
  "Product Design",
  "No-Code Development",
  "Pitch Deck",
  "Motion Design",
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-120px] h-[520px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(79,70,229,0.14),rgba(255,255,255,0)_70%)]"
      />

      <Container className="relative flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 sm:pb-20">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#21b005]/20 bg-[#21b005]/5 px-3.5 py-1.5 text-[13px] font-medium text-[#21b005]">
          <BadgeCheck className="size-4" />
          100% Money Back Guarantee
        </span>

        <h1 className="mt-6 max-w-3xl text-[40px] font-semibold leading-[1.08] tracking-[-0.02em] text-[#05000f] sm:text-[56px]">
          Design partner for{" "}
          <span className="bg-gradient-to-r from-[#4338ca] to-[#a21caf] bg-clip-text text-transparent">
            SaaS &amp; AI startups
          </span>
        </h1>

        <p className="mt-5 max-w-lg text-lg text-[#504d57]">
          Build, iterate, and launch without the hiring hassle.
        </p>

        <div className="mt-8 flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-full bg-[#05000f] px-6 text-[15px] font-medium text-white transition-colors hover:bg-[#221e33]"
          >
            Schedule a Call
            <ArrowRight className="size-4" />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
            className="flex size-11 items-center justify-center rounded-full bg-[#21c55d] text-white transition-transform hover:scale-105"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="size-5" />
          </a>
        </div>

        <div className="mt-16 flex w-full max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {strip.map((item) => (
            <span
              key={item}
              className="rounded-full border border-black/[0.06] bg-[#f7f7fb] px-4 py-2 text-sm text-[#504d57]"
            >
              {item}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
