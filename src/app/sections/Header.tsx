import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/app/components/Container";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-[#05000f] text-[13px] font-semibold text-white">
            U
          </span>
          <span className="text-[15px] font-semibold tracking-tight text-[#05000f]">
            Userine
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#504d57] transition-colors hover:text-[#05000f]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-full bg-[#05000f] px-5 text-sm font-medium text-white transition-colors hover:bg-[#221e33]"
          >
            Let&rsquo;s talk
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-9 items-center justify-center rounded-full text-[#05000f] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-[#504d57] hover:bg-[#f5f4f7]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-full bg-[#05000f] px-5 text-sm font-medium text-white"
            >
              Let&rsquo;s talk
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
