
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-16 md:pt-36 md:pb-24 min-h-screen flex items-center bg-portfolio-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div id="about" className="md:w-1/2 animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
              Kusuma Ningrat
            </h1>
            <h2 className="text-xl md:text-2xl text-portfolio-gray font-medium mb-6">
              DevOps Engineer
            </h2>
            <p className="text-base md:text-lg text-portfolio-gray mb-8 max-w-xl">
              Become a SysAdmin and DevOps Engineer is challenge. We have to make sure all the apps are running well either on prod or dev.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-portfolio-red hover:bg-red-600"
                onClick={() => {
                  const projectsSection = document.getElementById('projects');
                  if (projectsSection) {
                    const yOffset = -80;
                    const y = projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    const yOffset = -80;
                    const y = contactSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                  }
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-portfolio-red"></div>
              <img 
                src="/image/kusuma.png"
                alt="Kusuma Ningrat" 
                className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
