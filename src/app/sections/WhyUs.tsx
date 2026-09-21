import { Zap, Handshake, TrendingDown } from "lucide-react";
import { Container } from "@/app/components/Container";

const points = [
  {
    icon: Zap,
    title: "Instant onboarding",
    description: "Skip the hiring delays. Start seeing results in days, not weeks.",
  },
  {
    icon: Handshake,
    title: "Stress-free collaboration",
    description: "We take full ownership of your project, from start to finish.",
  },
  {
    icon: TrendingDown,
    title: "High-impact, low overhead",
    description: "No full-time salaries or bloated costs, just senior design that delivers.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-black/5 bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-wide text-[#4338ca]">
            What makes us different
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#05000f] sm:text-[40px]">
            From idea to launch, designed with clarity, built with purpose.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {points.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-black/[0.06] p-7">
              <span className="flex size-10 items-center justify-center rounded-xl bg-[#ecf0ff] text-[#4338ca]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-[#05000f]">
                {title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-[#504d57]">
                {description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
