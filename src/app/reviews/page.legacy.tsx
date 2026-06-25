import { ContactBand, PageHero, TestimonialRail } from "@/components/marketing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Client Reviews | econstruct",
  description:
    "Client reviews and reputation signals for econstruct, a Los Angeles contractor focused on luxury residential and commercial construction.",
  path: "/reviews/",
});

export default function ReviewsPage() {
  return (
    <>
      <PageHero
        kicker="Reviews"
        title="Reputation is built the same way the projects are."
        description="The most useful testimonial signals for a contractor are clarity, finish quality, and reliability under pressure. This page keeps the reviews focused there."
        image="/assets/photography/hero-office.jpg"
        alt="Client reviews for econstruct"
      />
      <TestimonialRail />
      <ContactBand />
    </>
  );
}
