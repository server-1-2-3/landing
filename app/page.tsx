import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Cta } from "@/components/Cta";
import { FAQ } from "@/components/FAQ";

import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Pricing />
      <Newsletter />
      <FAQ />
    </>
  );
}
