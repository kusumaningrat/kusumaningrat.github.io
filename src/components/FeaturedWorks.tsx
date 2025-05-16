
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Project {
  id: number;
  title: string;
  year: string;
  role: string;
  description: string;
  logo: string;
  tools: string[];
  detailedDescription: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "SILACAK (Castellum Digital Indonesia)",
    year: "2022",
    role: "DevOps Engineer",
    description: "Silacak is an application that used for tracking COVID-19, both confirmed cases of COVID-19 and close contacts of confirmed cases.",
    detailedDescription: "Silacak is an application that used for tracking COVID-19, both confirmed cases of COVID-19 and close contacts of confirmed cases. This application intended for tracers at PUSKESMAS level to be able to report findings of COVID-19 cases in their respective region throughout Indonesia. (silacak.kemkes.go.id)",
    logo: "/image/kemenkes.jpg",
    tools: ["Docker", "Grafana", "Ansible", "Slack", "Google Cloud Platform", "PostgreSQL", "Gitlab CI/CD", "Envoy Proxy", "Python", "Bash Script"]
  },
  {
    id: 2,
    title: "Boer Technology Indonesia",
    year: "2023",
    role: "Cloud Engineer",
    description: "Careguard Jasa Indonesia is a national private company engaged in the outsourcing of security services.",
    detailedDescription: "Careguard Jasa Indonesia is a national private company engaged in the outsourcing of security services. With expertise in personnel management, capability, and company credibility, we are ready to implement and serve customers in protecting assets, responding to changing needs, and improving cost-effectiveness by integrating social and cultural aspects.",
    logo: "/image/btech.jpg",
    tools: ["Kubernetes", "Kube Monitoring Stack", "Openstack", "Ceph", "Ansible", "Terraform"]
  },
  {
    id: 3,
    title: "CareGuard Indonesia",
    year: "2025",
    role: "DevOps Engineer",
    description: "Careguard Jasa Indonesia is a national private company engaged in the outsourcing of security services.",
    detailedDescription: "Careguard Jasa Indonesia is a national private company engaged in the outsourcing of security services. With expertise in personnel management, capability, and company credibility, we are ready to implement and serve customers in protecting assets, responding to changing needs, and improving cost-effectiveness by integrating social and cultural aspects.",
    logo: "/image/careguard.png",
    tools: ["Docker", "Envoy Proxy", "PostgreSQL", "Gitlab CI/CD"]
  },
  {
    id: 4,
    title: "Jatis Mobile",
    year: "2025",
    role: "DevOps Engineer",
    description: "Jatis Mobile is a technology solution company, focused on messaging solution and digital distribution.",
    detailedDescription: "Jatis Mobile is a technology solution company, focused on messaging solution and digital distribution, gaining market experience and insights since 2002",
    logo: "/image/jatis.jpg",
    tools: ["Docker", "Kubernetes", "Istio as Proxy", "Kube Monitoring Stack", "Tencent Cloud", "Python", "Bash Script", "Terraform"]
  },
];

const FeaturedWorks = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const toggleProjectDetails = (projectId: number) => {
    if (expandedProject === projectId) {
      setExpandedProject(null); // Collapse if already expanded
    } else {
      setExpandedProject(projectId); // Expand the clicked project
    }
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Featured Works
        </h2>
        
        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="space-y-4">
              <Card 
                className="overflow-hidden border-0 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => toggleProjectDetails(project.id)}
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/6 p-6 flex justify-center items-center">
                    <img 
                      src={project.logo} 
                      alt={project.title} 
                      className="w-24 h-24 object-contain"
                    />
                  </div>
                  <div className="md:w-5/6 p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                      <span className="inline-block bg-portfolio-dark text-white px-3 py-1 text-sm rounded-md mt-2 md:mt-0">
                        {project.year}
                      </span>
                    </div>
                    <p className="text text-portfolio-gray mt-1 font-bold">{project.role}</p><br />
                    <p className="text-portfolio-gray">
                      {project.description}
                    </p>
                    <div className="mt-2 flex items-center text-portfolio-dark">
                      <span className="text-sm mr-2">
                        {expandedProject === project.id ? "Hide details" : "View details"}
                      </span>
                      {expandedProject === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </div>
                </div>
              </Card>
              
              {/* Expanded details section */}
              {expandedProject === project.id && (
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 transition-all duration-300 animate-in fade-in slide-in-from-top-5">
                  <div className="mb-6">
                    <h4 className="font-bold text-lg mb-3">Project Details:</h4>
                    <p className="text-gray-700">{project.detailedDescription}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-portfolio-light text-portfolio-dark rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorks;
