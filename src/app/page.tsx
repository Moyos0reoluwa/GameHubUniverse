import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TestimonialCarousel from "@/components/testimonial";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function Page(): React.ReactElement {
  return (
    <div>
      <Navbar />

      <Hero />

      <TestimonialCarousel />

      <ContactSection />

      <Footer />

    </div>
  )
}