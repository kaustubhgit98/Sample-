import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedBanner from "@/components/FeaturedBanner";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">
        <HeroCarousel />
        <FeaturedBanner />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
