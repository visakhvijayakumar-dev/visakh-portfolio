import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, liveUrl, githubUrl, featured = false }) => (
  <div className={`group ${featured ? 'md:col-span-2' : ''}`}>
    <div className="border border-gray-200 hover:border-gray-300 transition-colors duration-300 bg-white">
      <div className="p-8 space-y-6">
        <div className="flex justify-between items-start">
          <h3 className="text-2xl font-serif text-gray-900">{title}</h3>
          <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-gray-700 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Enterprise Analytics Platform",
      description: "A comprehensive analytics platform built for IBM Labs, processing millions of data points daily. Features real-time dashboards, advanced reporting capabilities, and machine learning-powered insights that help enterprise clients make data-driven decisions.",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "D3.js", "AWS"],
      featured: true
    },
    {
      title: "Microservices Architecture",
      description: "Designed and implemented a scalable microservices architecture for a financial services client, reducing system response times by 60% and improving overall reliability.",
      technologies: ["Node.js", "Docker", "Kubernetes", "MongoDB", "GraphQL"]
    },
    {
      title: "Real-time Collaboration Tool",
      description: "Built a collaborative workspace application with real-time editing, video conferencing integration, and advanced permission management for distributed teams.",
      technologies: ["React", "Socket.io", "Express", "PostgreSQL", "WebRTC"]
    },
    {
      title: "Cloud Migration Platform",
      description: "Developed tooling to automate cloud migration processes for legacy enterprise applications, reducing migration time from months to weeks.",
      technologies: ["Python", "AWS", "Terraform", "Docker", "Jenkins"]
    },
    {
      title: "API Management System",
      description: "Created a comprehensive API management platform with authentication, rate limiting, analytics, and developer portal functionality.",
      technologies: ["Node.js", "Redis", "MongoDB", "React", "OpenAPI"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 max-w-6xl mx-auto">
      <div className="space-y-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8">
            Selected Projects
          </h1>
          <div className="w-24 h-0.5 bg-gray-300"></div>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl">
            A collection of enterprise-level applications and systems I've built 
            throughout my career, focusing on scalability, performance, and user experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">
            Interested in seeing more? Many of my professional projects are proprietary, 
            but I'm happy to discuss them in detail during a conversation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;