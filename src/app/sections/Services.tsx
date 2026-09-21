import {
  Palette,
  Globe,
  LayoutGrid,
  Code2,
  Presentation,
  Clapperboard,
} from "lucide-react";
import { Container } from "@/app/components/Container";

const services = [
  { icon: Palette, name: "Brand Identity" },
  { icon: Globe, name: "Website Design" },
  { icon: LayoutGrid, name: "Product Design" },
  { icon: Code2, name: "No-Code Development" },
  { icon: Presentation, name: "Pitch Deck" },
  { icon: Clapperboard, name: "Motion Design" },
];

export function Services() {
  return (
    <section id="services" className="border-t border-black/5 bg-[#f7f7fb] py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-wide text-[#4338ca]">
            Our services
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#05000f] sm:text-[40px]">
            From branding, through product and web, to development and
            marketing pitch decks. We handle it all.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {services.map(({ icon: Icon, name }) => (
            <div
              key={name}
              className="flex flex-col items-start gap-4 rounded-2xl border border-black/[0.06] bg-white p-6 transition-colors hover:border-[#4338ca]/30"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#4338ca]/10 text-[#4338ca]">
                <Icon className="size-5" />
              </span>
              <p className="text-[15px] font-medium text-[#05000f]">{name}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
