import { Star, ArrowUpRight } from "lucide-react";
import { Container } from "@/app/components/Container";
import caseSentellent from "@/assets/case-sentellent.png";

type CaseStudy = {
  name: string;
  tag: string;
  description: string;
  href: string;
  metric?: string;
  visual: React.ReactNode;
};

const caseStudies: CaseStudy[] = [
  {
    name: "Sentellent",
    tag: "AI Product & Services Company",
    description:
      "An AI-powered workflow manager that accelerates every phase of the development lifecycle.",
    href: "https://sentellent.com/",
    metric: "156% Growth Rate",
    visual: (
      <img
        src={caseSentellent}
        alt="Sentellent product screenshot"
        className="h-full w-full object-cover object-top"
      />
    ),
  },
  {
    name: "EMSPal",
    tag: "Website Design",
    description:
      "A cleaner, more focused website redesign that gives EMSPal's product a clear, credible front door.",
    href: "mailto:info@emspal.com",
    visual: (
      <div className="flex h-full w-full items-center justify-center bg-[#05000f]">
        <span className="text-3xl font-semibold tracking-tight text-white">
          EMSPal
        </span>
      </div>
    ),
  },
  {
    name: "Jammin.ai",
    tag: "Pitch Deck",
    description:
      "Be the go-to tool for modern, AI-powered learning and casual jamming.",
    href: "mailto:contact@jammin.ai",
    visual: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(120deg,#2f7aff_0%,#e52ffa_100%)]">
        <span className="text-3xl font-semibold tracking-tight text-white">
          Jammin.ai
        </span>
      </div>
    ),
  },
];

export function Work() {
  return (
    <section id="work" className="border-t border-black/5 bg-white py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-wide text-[#4338ca]">
            Our work
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#05000f] sm:text-[40px]">
            Our work reflects the genuine care and commitment we put into
            every client partnership.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <a
              key={study.name}
              href={study.href}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col overflow-hidden rounded-2xl border border-black/[0.06] bg-white transition-shadow hover:shadow-[0_16px_40px_-16px_rgba(5,0,15,0.18)]"
            >
              <div className="h-56 overflow-hidden bg-[#f0f0f3]">
                {study.visual}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="text-[13px] text-[#888]">{study.tag}</p>
                <h3 className="mt-1 text-lg font-semibold text-[#05000f]">
                  {study.name}
                </h3>
                <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#504d57]">
                  {study.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-black/[0.06] pt-4">
                  {study.metric ? (
                    <span className="text-[13px] font-medium text-[#21b005]">
                      {study.metric}
                    </span>
                  ) : (
                    <span className="flex gap-0.5 text-[#f5a623]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className="size-3.5 fill-current" />
                      ))}
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-[13px] font-medium text-[#05000f] transition-transform group-hover:translate-x-0.5">
                    View case study
                    <ArrowUpRight className="size-3.5" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <blockquote className="mt-14 rounded-2xl border border-black/[0.06] bg-[#f7f7fb] p-8 sm:p-10">
          <div className="mb-4 flex gap-0.5 text-[#f5a623]">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-4 fill-current" />
            ))}
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-[#05000f]">
            &ldquo;It is my honor to recommend Userine, an exceptional UX
            designer who has been instrumental in the success of easy-donate
            and other projects.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-[#504d57]">
            <span className="font-medium text-[#05000f]">
              Sanjay Dorairaj
            </span>{" "}
            &middot; CEO @ Sentellent
          </footer>
        </blockquote>
      </Container>
    </section>
  );
}
