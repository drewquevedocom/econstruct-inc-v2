import {
  ContactBand,
  HomeHero,
  LogoBar,
  ProofSection,
  ServiceGrid,
  TestimonialRail,
} from "@/components/marketing";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LogoBar />
      <ServiceGrid />
      <ProofSection />
      <TestimonialRail />
      <ContactBand />
    </>
  );
}
