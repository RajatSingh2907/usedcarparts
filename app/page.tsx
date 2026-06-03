import Hero from "@/components/sections/home/Hero";
import HeroTrustStrip from "@/components/sections/home/HeroTrustStrip";
import AuthorityStats from "@/components/sections/home/AuthorityStats";
import MiniAuthorityStrip from "@/components/sections/home/MiniAuthorityStrip";
import SectionDivider from "@/components/sections/home/SectionDivider";
import QualityParts from "@/components/sections/home/QualityParts";
import Trust from "@/components/sections/home/Trust";
import Services from "@/components/sections/home/Services";
import CustomerStories from "@/components/sections/home/CustomerStories";
import HowItWorks from "@/components/sections/home/HowItWorks";
import Brands from "@/components/sections/home/Brands";
import CTA from "@/components/sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroTrustStrip />
      <QualityParts />
      <SectionDivider />
      <Brands />
      <SectionDivider />
      <Trust />
      <Services />
      <AuthorityStats />
      <HowItWorks />
      <SectionDivider />
      <MiniAuthorityStrip />
      <CustomerStories />
      <CTA />
    </>
  );
}
