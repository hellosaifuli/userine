import { Container } from "@/app/components/Container";

const socials = [
  { label: "Facebook", href: "https://facebook.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Behance", href: "https://behance.net/" },
];

export function Footer() {
  return (
    <footer className="bg-[#05000f] pt-16 text-white">
      <Container className="flex flex-col gap-8 pb-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm text-white/50">Email</p>
          <a
            href="mailto:hello@userine.com"
            className="mt-1 block text-2xl font-semibold tracking-tight"
          >
            hello@userine.com
          </a>
        </div>

        <div className="flex gap-6">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-white/60 transition-colors hover:text-white"
            >
              {social.label}
            </a>
          ))}
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col-reverse items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-[13px] text-white/40">
            &copy; 2025, Userine, All Rights Reserved.
          </p>
        </Container>
      </div>

      <p
        aria-hidden
        className="select-none overflow-hidden whitespace-nowrap text-center text-[18vw] font-semibold leading-none tracking-tight text-white/[0.04]"
      >
        Userine
      </p>
    </footer>
  );
}
