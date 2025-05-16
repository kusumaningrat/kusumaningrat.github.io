
import { Github, Linkedin, Mail, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-portfolio-dark text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              <span className="bg-portfolio-red px-2 py-1 rounded-md mr-1">K</span>
              Ningrat
            </div>
            <p className="text-gray-400">DevOps Engineer</p>
          </div>
          
          <div className="flex space-x-4 mb-6 md:mb-0">
            <a 
              href="https://github.com/kusumaningrat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors hover:bg-portfolio-red"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://medium.com/@kusumaningrat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors hover:bg-portfolio-red"
            >
              <Globe className="h-5 w-5" />
            </a>
            <a 
              href="https://linkedin.com/in/kusumaningrat" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors hover:bg-portfolio-red"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:kusumaningrat1608@gmail.com"
              className="h-10 w-10 rounded-full bg-gray-700 flex items-center justify-center transition-colors hover:bg-portfolio-red"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; {currentYear} Kusuma Ningrat. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="hover:text-portfolio-red mr-6">Privacy Policy</a>
              <a href="#" className="hover:text-portfolio-red">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
