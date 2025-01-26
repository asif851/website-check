import OurCourses from "@/components/shared/OurCourses";
import OurServices from "@/components/shared/OurServices";
import HeroSection from "@/components/shared/HeroSection";
import FeaturesSection from "@/components/shared/features-section";
import TestimonialsSection from "@/components/shared/testimonials-section";
import CTASection from "@/components/shared/cta-section";
import ClientTestimonials from "@/components/shared/client-testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />

      <FeaturesSection />

      <OurCourses />

      <TestimonialsSection />

      <OurServices />

      <ClientTestimonials />

      <CTASection />
    </>
  );
}
