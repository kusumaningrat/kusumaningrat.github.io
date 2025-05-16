
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Github, Code, Server } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Technology {
  name: string;
  color: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: Technology[];
  githubUrl?: string;
  demoUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Deploy NestJS on Kubernetes with Helm",
    description: "This repository contains an example project demonstrating how to deploy a NestJS application to a Kubernetes cluster using Helm. It serves as a practical exercise to understand the deployment workflow, Helm chart structure, and Kubernetes resource configurations required to run a Node.js backend service in a containerized environment",
    technologies: [
      { name: "PostgreSQL", color: "gray" },
      { name: "NestJS", color: "green" },
      { name: "Kubernetes", color: "red" },
      { name: "Helm", color: "blue" },
    ],
    githubUrl: "https://github.com/kusumaningrat/Deploy-NestJS-on-Kubernetes-with-Helm",
  },
  {
    id: 2,
    title: "Kubernetes Automation with Terraform and Ansible",
    description: "Developed an automated solution for provisioning and configuring Kubernetes clusters using Terraform and Ansible, streamlining infrastructure deployment and ensuring consistency across environments.",
    technologies: [
      { name: "Kubernetes", color: "blue" },
      { name: "Terraform", color: "gray" },
      { name: "Proxmox Cloud", color: "red" },
    ],
    githubUrl: "https://github.com/kusumaningrat/Kubernetes-Automation-with-Terraform-and-Ansible",
  },
  {
    id: 3,
    title: "Simple AWS EC2 Autoscale for NodeJS",
    description: "Designed and deployed a scalable Node.js application using AWS EC2 with Auto Scaling groups and load balancing. This proof-of-concept project demonstrates horizontal scaling to handle increased traffic efficiently while maintaining application availability and performance.",
    technologies: [
      { name: "NodeJS", color: "purple" },
      { name: "AWS", color: "red" },
      { name: "Autoscaling (Horizontal)", color: "blue" },
    ],
    githubUrl: "https://github.com/kusumaningrat/aws-ec2-autoscale-node-app"
  }
];

const getColorClass = (color: string) => {
  const colorMap: Record<string, string> = {
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
    blue: "bg-blue-100 text-blue-800",
    purple: "bg-purple-100 text-purple-800",
    gray: "bg-gray-100 text-gray-800",
    orange: "bg-orange-100 text-orange-800",
  };
  
  return colorMap[color] || "bg-gray-100 text-gray-800";
};

const FreelanceProjects = () => {
  return (
    <section id="freelance" className="py-16 md:py-24 bg-portfolio-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projects
          </h2>
          <p className="text-portfolio-gray max-w-3xl mx-auto">
          Primarily focused on DevOps and Cloud infrastructure, with occasional in backend development and scripting to support deployment workflows and system automation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="h-full flex flex-col border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl mb-1">{project.title}</CardTitle>
                  </div>
                  <Server className="h-6 w-6 text-portfolio-red" />
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-portfolio-gray mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className={`${getColorClass(tech.color)}`}>
                      {tech.name}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center pt-4 border-t border-gray-100">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </a>
                  </Button>
                )}
                {project.demoUrl && (
                  <Button size="sm" className="bg-portfolio-red hover:bg-red-600" asChild>
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </Button>
                )}
                {!project.githubUrl && !project.demoUrl && (
                  <span className="text-sm text-portfolio-gray">Private Project</span>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceProjects;
