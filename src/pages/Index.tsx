import { useState } from "react";
import LogoIntro from "@/components/LogoIntro";
import Navbar from "@/components/Navbar";
import HeroSlideshow from "@/components/HeroSlideshow";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProductsSection from "@/components/ProductsSection";
import ProjectGallery from "@/components/ProjectGallery";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import FloatingButtons from "@/components/FloatingButtons";
import Footer from "@/components/Footer";

const Index = () => {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {!introComplete && <LogoIntro onComplete={() => setIntroComplete(true)} />}
      <Navbar />
      <HeroSlideshow />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <ProjectGallery />
      <VideoSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Index;
