
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust this value based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold">
          <span className="bg-portfolio-red text-white px-2 py-1 rounded-md mr-1">K</span>
          <span className="text-portfolio-dark">Ningrat</span>
        </Link>
        
        <div className={`md:flex space-y-4 md:space-y-0 md:space-x-8 ${isMenuOpen ? 'block absolute top-full left-0 w-full bg-white shadow-md p-6 mt-0' : 'hidden'}`}>
          <a onClick={() => handleNavLinkClick('hero')} className="block text-portfolio-dark hover:text-portfolio-red transition-colors cursor-pointer">Home</a>
          <a onClick={() => handleNavLinkClick('about')} className="block text-portfolio-dark hover:text-portfolio-red transition-colors cursor-pointer">About</a>
          <a onClick={() => handleNavLinkClick('projects')} className="block text-portfolio-dark hover:text-portfolio-red transition-colors cursor-pointer">Projects</a>
          <a onClick={() => handleNavLinkClick('freelance')} className="block text-portfolio-dark hover:text-portfolio-red transition-colors cursor-pointer">Freelance</a>
          <a onClick={() => handleNavLinkClick('contact')} className="block text-portfolio-dark hover:text-portfolio-red transition-colors cursor-pointer">Contact</a>
        </div>
        
        <button 
          className="md:hidden text-portfolio-dark"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
