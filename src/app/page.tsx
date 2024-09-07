import OurCourses from "@/components/shared/OurCourses";
import HeroSection from "@/components/shared/HeroSection";
import HeroSection2 from "@/components/shared/HeroSection2";
import FeaturesSection from "@/components/shared/features-section";
import TestimonialsSection from "@/components/shared/testimonials-section";
import CTASection from "@/components/shared/cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <OurCourses />

      <TestimonialsSection />

      <CTASection />
    </>
  );
}
