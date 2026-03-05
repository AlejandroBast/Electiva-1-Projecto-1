import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import Categories from "@/components/Categories";
import Features from "@/components/Features";
import FeaturedCars from "@/components/FeaturedCars";
import TeamResumes from "@/components/TeamResumes";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background scroll-smooth">
      <Navbar />
      <HeroSlider />
      <Categories />
      <FeaturedCars />
      <Features />
      <TeamResumes />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
