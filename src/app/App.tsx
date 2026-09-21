import { Toaster } from "@/app/components/ui/sonner";
import { Header } from "@/app/sections/Header";
import { Hero } from "@/app/sections/Hero";
import { About } from "@/app/sections/About";
import { Work } from "@/app/sections/Work";
import { Services } from "@/app/sections/Services";
import { WhyUs } from "@/app/sections/WhyUs";
import { Contact } from "@/app/sections/Contact";
import { Footer } from "@/app/sections/Footer";

export default function App() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
