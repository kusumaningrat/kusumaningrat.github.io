
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWorks from "@/components/FeaturedWorks";
import FreelanceProjects from "@/components/FreelanceProjects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-portfolio-light">
      <Navbar />
      <Hero />
      <FeaturedWorks />
      <FreelanceProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
