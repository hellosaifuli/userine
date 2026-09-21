import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { Container } from "@/app/components/Container";
import avatarSaiful from "@/assets/avatar-saiful.png";

const serviceTypes = [
  "Web / Mobile App",
  "No-Code Development",
  "Branding",
  "Other",
];

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent — we'll get back to you within a day.");
      event.currentTarget.reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <section id="contact" className="border-t border-black/5 bg-[#f7f7fb] py-20 sm:py-28">
      <Container className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16">
        <div>
          <p className="text-[13px] font-medium uppercase tracking-wide text-[#4338ca]">
            Get in touch
          </p>
          <h2 className="mt-3 text-[32px] font-semibold leading-[1.15] tracking-[-0.01em] text-[#05000f] sm:text-[40px]">
            Tell us about your project &mdash; whether it&rsquo;s a Web/Mobile
            App, No-Code, or Branding.
          </h2>

          <div className="mt-10 flex items-center gap-4 rounded-2xl border border-black/[0.06] bg-white p-5">
            <img
              src={avatarSaiful}
              alt="Saiful Islam"
              className="size-14 rounded-full object-cover"
            />
            <div className="flex-1">
              <p className="text-[13px] text-[#888]">Design Lead</p>
              <p className="text-[17px] font-semibold text-[#05000f]">
                Saiful Islam
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex h-9 items-center gap-1.5 rounded-full bg-[#05000f] px-4 text-[13px] font-medium text-white transition-colors hover:bg-[#221e33]"
            >
              Schedule a Call
              <ArrowRight className="size-3.5" />
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-black/[0.06] bg-white p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#05000f]">Name</span>
              <input
                required
                name="name"
                placeholder="John Doe"
                className="h-11 rounded-lg border border-black/10 bg-[#f3f3f5] px-3.5 text-[15px] text-[#05000f] outline-none placeholder:text-[#a8a6ab] focus:border-[#4338ca]/40 focus:bg-white focus:ring-2 focus:ring-[#4338ca]/10"
              />
            </label>
            <label className="flex flex-col gap-1.5 text-sm">
              <span className="font-medium text-[#05000f]">Email</span>
              <input
                required
                type="email"
                name="email"
                placeholder="john@company.com"
                className="h-11 rounded-lg border border-black/10 bg-[#f3f3f5] px-3.5 text-[15px] text-[#05000f] outline-none placeholder:text-[#a8a6ab] focus:border-[#4338ca]/40 focus:bg-white focus:ring-2 focus:ring-[#4338ca]/10"
              />
            </label>
          </div>

          <label className="mt-5 flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-[#05000f]">Service type</span>
            <select
              name="service"
              defaultValue=""
              required
              className="h-11 rounded-lg border border-black/10 bg-[#f3f3f5] px-3.5 text-[15px] text-[#05000f] outline-none focus:border-[#4338ca]/40 focus:bg-white focus:ring-2 focus:ring-[#4338ca]/10"
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceTypes.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </label>

          <label className="mt-5 flex flex-col gap-1.5 text-sm">
            <span className="font-medium text-[#05000f]">Project details</span>
            <textarea
              required
              name="details"
              rows={4}
              placeholder="Tell us a bit about what you're building..."
              className="resize-none rounded-lg border border-black/10 bg-[#f3f3f5] px-3.5 py-3 text-[15px] text-[#05000f] outline-none placeholder:text-[#a8a6ab] focus:border-[#4338ca]/40 focus:bg-white focus:ring-2 focus:ring-[#4338ca]/10"
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-[#05000f] text-[15px] font-medium text-white transition-colors hover:bg-[#221e33] disabled:opacity-60"
          >
            {submitting ? "Sending…" : "Send Message"}
          </button>
        </form>
      </Container>
    </section>
  );
}
