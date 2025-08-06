import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, featured = false }) => (
  <div className={`project-card ${featured ? 'projects-grid' : ''}`} style={featured ? { gridColumn: '1 / -1' } : {}}>
    <div className="project-card-content">
      <div className="project-card-header">
        <h3 className="project-title">{title}</h3>
        <div className="project-links">
          <span className="project-link">
            <ExternalLink size={20} />
          </span>
        </div>
      </div>
      
      <p className="project-description">{description}</p>
      
      <div className="skills-grid">
        {technologies.map((tech) => (
          <span key={tech} className="skill-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: "Business Intelligence Platform",
      description: "Comprehensive AI-powered platform featuring automated presentation generation service, email alert systems, and advanced reporting capabilities. Built backend services that integrate with Looker to provide real-time business insights and performance tracking for enterprise clients.",
      technologies: ["Node.js", "TypeScript", "Google Cloud Platform", "Cloud SQL", "Looker", "Cloud Functions"],
      featured: true
    },
    {
      title: "Renewable Energy Platform",
      description: "Enterprise-scale platform with core backend functionalities including Role-Based Access Management (RBAM), API Manager, Logging Microservice, User Management, and comprehensive analytics. Collaborated with Google architects on platform architecture.",
      technologies: ["Node.js", "Google Cloud Platform", "Microservices", "RBAM", "Analytics"]
    },
    {
      title: "Healthcare Web Application",
      description: "Advanced web application for displaying patient health conditions and symptoms, designed for doctors and researchers to identify, treat conditions, and conduct genetic disease research.",
      technologies: ["React.js", "Node.js", "Healthcare Systems", "Database Design", "Medical Research"]
    },
    {
      title: "IoT Network Device Monitoring",
      description: "AWS Cloud infrastructure for IoT device registration, control, and monitoring. Created SNMP Agent using Python to retrieve data from DynamoDB and implemented secure communication protocols. Received significant client appreciation.",
      technologies: ["AWS IoT", "Python", "AWS Lambda", "DynamoDB", "SNMP", "Security"]
    },
    {
      title: "Smart Fragrance Control System",
      description: "Converted traditional fragrance generators to IoT devices using AWS Cloud platform. Implemented TOTP security mechanisms, REST APIs for mobile/web apps, and comprehensive device management systems.",
      technologies: ["AWS IoT", "AWS Lambda", "TOTP", "REST APIs", "React.js", "Mobile Integration"]
    },
    {
      title: "Security Testing & Penetration",
      description: "Conducted comprehensive penetration testing for client web applications using OWASP ZAP Proxy tool. Identified and remediated SQL injection vulnerabilities, implemented clickjacking protection, and secured session management.",
      technologies: ["OWASP ZAP", "SQLMap", "Security Testing", "Vulnerability Assessment", "Kali Linux"]
    }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Selected Projects</h1>
        <hr className="page-divider" />
        <p className="page-description">
          A showcase of enterprise-level applications, IoT systems, and security solutions 
          I've built throughout my career, emphasizing scalability, security, and innovation.
        </p>
      </div>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

      <div className="section" style={{ paddingTop: '2rem', borderTop: '1px solid #e5e5e5', textAlign: 'center' }}>
        <div className="section-content">
          <h3 style={{ fontWeight: '500', color: '#171717', marginBottom: '1rem' }}>
            Recognition & Impact
          </h3>
          <p style={{ color: '#525252', marginBottom: '1.5rem' }}>
            Many of my professional projects are proprietary enterprise solutions. 
            I've received recognition from Google for architectural integrity and have 
            delivered solutions that serve millions of users.
          </p>
          <div className="stats-grid" style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div>
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div>
              <div className="stat-number">5</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div>
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;