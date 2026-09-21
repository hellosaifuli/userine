import { Container } from "@/app/components/Container";
import avatarSaiful from "@/assets/avatar-saiful.png";

const stats = [
  { value: "9", label: "Startups Launched" },
  { value: "$15M+", label: "Raised by Clients" },
  { value: "12", label: "Trusted Companies" },
  { value: "5", label: "Designers" },
];

export function About() {
  return (
    <section className="border-t border-black/5 bg-white py-20 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div>
          <div className="flex items-center gap-3">
            <img
              src={avatarSaiful}
              alt="Saiful Islam"
              className="size-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-medium text-[#05000f]">Saiful Islam</p>
              <p className="text-[13px] text-[#888]">Design Lead at Userine&reg;</p>
            </div>
          </div>

          <h2 className="mt-6 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#05000f] sm:text-[40px]">
            We help businesses grow{" "}
            <span className="text-[#75737b]">
              through strategy, innovation, and bold experiences
            </span>{" "}
            all with flat-rate pricing and unlimited requests.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-black/[0.06] bg-[#f7f7fb] p-6"
            >
              <p className="text-[32px] font-semibold tracking-[-0.02em] text-[#05000f]">
                {stat.value}
              </p>
              <p className="mt-1 text-[15px] text-[#504d57]">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
