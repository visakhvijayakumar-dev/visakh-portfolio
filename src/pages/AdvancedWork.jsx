import React from 'react';
import { ExternalLink, Github, ArrowRight, Layers, Brain, Beaker } from 'lucide-react';

const ProjectCard = ({ title, problem, techStack, type, comingSoon = false }) => (
  <div className="advanced-project-card">
    <div className="advanced-project-content">
      <div className="advanced-project-header">
        <h3 className="advanced-project-title">{title}</h3>
        {comingSoon && (
          <span className="coming-soon-badge">Coming Soon</span>
        )}
      </div>
      
      <p className="advanced-project-problem">{problem}</p>
      
      <div className="tech-stack-container">
        {techStack.map((tech) => (
          <span key={tech} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>

      <div className="advanced-project-placeholder">
        <div className="placeholder-content">
          <div className="placeholder-icon">
            {type === 'system' && <Layers size={32} />}
            {type === 'ai' && <Brain size={32} />}
            {type === 'research' && <Beaker size={32} />}
          </div>
          <span className="placeholder-text">
            {type === 'system' && 'Architecture Diagram'}
            {type === 'ai' && 'Model Pipeline'}
            {type === 'research' && 'Research Findings'}
          </span>
        </div>
      </div>
      
      <div className="advanced-project-actions">
        <button className="project-btn primary" disabled={comingSoon}>
          <span>View Details</span>
          <ArrowRight size={16} />
        </button>
        <button className="project-btn secondary" disabled={comingSoon}>
          <Github size={16} />
          <span>GitHub</span>
        </button>
      </div>
    </div>
  </div>
);

const SectionHeader = ({ icon: Icon, title, description }) => (
  <div className="advanced-section-header">
    <div className="section-icon-wrapper">
      <Icon size={24} />
    </div>
    <div className="section-header-content">
      <h2 className="advanced-section-title">{title}</h2>
      <p className="advanced-section-description">{description}</p>
    </div>
  </div>
);

const AdvancedWork = () => {
  const systemDesignProjects = [
    {
      title: "Microservices Architecture Migration",
      problem: "Design scalable system to handle 10x traffic growth while maintaining 99.9% uptime and seamless user experience.",
      techStack: ["Node.js", "Docker", "Kubernetes", "Redis", "PostgreSQL", "NGINX"],
      type: "system"
    },
    {
      title: "Real-time Data Processing Pipeline",
      problem: "Build event-driven architecture for processing millions of real-time events with sub-second latency requirements.",
      techStack: ["Apache Kafka", "Apache Flink", "MongoDB", "WebSocket", "AWS"],
      type: "system"
    },
    {
      title: "Distributed Cache Strategy",
      problem: "Implement multi-layer caching solution to reduce database load by 80% and improve response times globally.",
      techStack: ["Redis Cluster", "CDN", "ElastiCache", "Database Sharding"],
      type: "system"
    }
  ];

  const aiMlProjects = [
    {
      title: "Enterprise GraphRAG System",
      problem: "Build context-aware retrieval system for enterprise knowledge base with 95% accuracy in domain-specific queries.",
      techStack: ["Python", "LangChain", "Vector DB", "IBM Granite", "FastAPI"],
      type: "ai"
    },
    {
      title: "Business Intelligence AI Agent",
      problem: "Create intelligent analytics agent that generates insights and recommendations from complex business data patterns.",
      techStack: ["LLMs", "Pandas", "ML Pipeline", "NLP", "Cloud Functions"],
      type: "ai"
    },
    {
      title: "Document Processing Pipeline",
      problem: "Automate document analysis and extraction using AI to process thousands of files with 98% accuracy.",
      techStack: ["Computer Vision", "OCR", "Machine Learning", "AWS Lambda"],
      type: "ai",
      comingSoon: true
    }
  ];

  const researchProjects = [
    {
      title: "Performance Optimization Study",
      problem: "Research and benchmark different architectural patterns to identify optimal solutions for high-throughput applications.",
      techStack: ["Performance Testing", "Data Analysis", "Benchmarking", "Optimization"],
      type: "research"
    },
    {
      title: "AI Model Efficiency Research",
      problem: "Investigate techniques for reducing LLM inference costs while maintaining output quality for enterprise applications.",
      techStack: ["Model Optimization", "Cost Analysis", "Benchmarking", "Research"],
      type: "research",
      comingSoon: true
    }
  ];

  return (
    <div className="advanced-work-container">
      {/* Hero Section */}
      <div className="advanced-hero">
        <div className="advanced-hero-content">
          <h1 className="advanced-hero-title">Advanced Work</h1>
          <div className="advanced-hero-divider"></div>
          <p className="advanced-hero-description">
            Exploring the intersection of system design, artificial intelligence, and scalable architecture. 
            A collection of projects that demonstrate progression beyond traditional full-stack development 
            into senior-level technical challenges and emerging technologies.
          </p>
          <div className="advanced-hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">3</span>
              <span className="hero-stat-label">System Design</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">3</span>
              <span className="hero-stat-label">AI/ML Engineering</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2</span>
              <span className="hero-stat-label">Research Projects</span>
            </div>
          </div>
        </div>
      </div>

      {/* System Design Section */}
      <section className="advanced-section">
        <SectionHeader 
          icon={Layers}
          title="System Design Case Studies"
          description="Large-scale architecture solutions focusing on scalability, performance, and reliability. Real-world problems solved through thoughtful system design and engineering best practices."
        />
        <div className="advanced-projects-grid">
          {systemDesignProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* AI/ML Engineering Section */}
      <section className="advanced-section">
        <SectionHeader 
          icon={Brain}
          title="AI/ML Engineering"
          description="Practical applications of artificial intelligence and machine learning in enterprise environments. Focus on production-ready systems, model optimization, and real business value."
        />
        <div className="advanced-projects-grid">
          {aiMlProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Research Projects Section */}
      <section className="advanced-section">
        <SectionHeader 
          icon={Beaker}
          title="Research Projects"
          description="Experimental work and technical research exploring new approaches, performance optimizations, and emerging technologies. Contributing to the broader understanding of scalable systems."
        />
        <div className="advanced-projects-grid">
          {researchProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="advanced-cta">
        <h3 className="advanced-cta-title">Interested in Technical Collaboration?</h3>
        <p className="advanced-cta-description">
          I'm always open to discussing complex technical challenges, system architecture, 
          or AI/ML applications. Let's explore how these approaches can solve real problems.
        </p>
        <button className="advanced-cta-button">
          <span>Get In Touch</span>
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default AdvancedWork;