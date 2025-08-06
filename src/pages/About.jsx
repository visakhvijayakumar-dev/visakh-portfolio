import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <hr className="page-divider" />
        <p className="page-description">
          Software Engineer at IBM India Software Labs, expanding into AI and machine learning 
          technologies with over 7 years of enterprise software development experience.
        </p>
      </div>

      <div className="two-column">
        <div className="section">
          <h2 className="section-title">Background</h2>
          <div className="section-content">
            <p>
              I'm a passionate Software Engineer at IBM India Software Labs in Kochi, working as part 
              of the innovative <strong>Hyper Blue</strong> team - IBM's internal AI incubator program. 
              My journey spans over 7 years of building enterprise-level applications, from full-stack 
              web development to cutting-edge AI-powered solutions.
            </p>
            <p style={{ marginTop: '1rem' }}>
              With an M.Tech in Computer Science from Kerala Technological University (8.73 CGPA), 
              I've evolved from traditional web development to specializing in generative AI applications 
              and AI product development, working on next-generation solutions that aim to generate 
              significant business impact.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Current Focus</h2>
          <div className="section-content">
            <p>
              At IBM's Hyper Blue AI incubator, I'm working on innovative AI-powered products including 
              <strong> Enterprise GraphRAG systems</strong> and <strong>Perceptive Analytics for Business Intelligence</strong>. 
              I'm actively learning and applying machine learning concepts while working with large language models 
              to build practical AI applications.
            </p>
            <p style={{ marginTop: '1rem' }}>
              My role involves transitioning from traditional software engineering to AI product development, 
              collaborating with experienced AI teams to create next-generation solutions. I'm passionate about 
              expanding my knowledge in ML and AI while contributing to IBM's innovative AI initiatives.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Technical Skills & Learning Journey</h2>
        <div className="skills-grid">
          {[
            // Core Software Engineering
            'JavaScript', 'TypeScript', 'Node.js', 'React.js', 'Python', 
            'MERN Stack', 'MongoDB', 'PostgreSQL', 'RESTful APIs',
            
            // AI/ML (Learning & Working)
            'Large Language Models (LLMs)', 'Generative AI', 'Machine Learning (Learning)', 
            'IBM Granite Models', 'Llama Models', 'Claude AI', 'GraphRAG', 
            'Natural Language Processing', 'AI Product Development',
            
            // Cloud & Tools
            'AWS', 'Google Cloud Platform', 'Git', 'Agile Development'
          ].map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Career Journey</h2>
        <div className="section-content">
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: '500', color: '#171717' }}>
              Software Engineer - IBM India Software Labs
            </h3>
            <p style={{ color: '#525252', marginBottom: '0.5rem' }}>
              Hyper Blue AI Incubator Team, Kochi
            </p>
            <p style={{ color: '#737373', fontSize: '0.875rem' }}>
              Mar 2024 - Present
            </p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: '500', color: '#171717' }}>
              Senior Software Engineer - Quantiphi Analytics
            </h3>
            <p style={{ color: '#525252', marginBottom: '0.5rem' }}>
              Business Intelligence & Cloud Platforms
            </p>
            <p style={{ color: '#737373', fontSize: '0.875rem' }}>
              Nov 2021 - Feb 2024
            </p>
          </div>

          <div>
            <h3 style={{ fontWeight: '500', color: '#171717' }}>
              Previous Experience
            </h3>
            <p style={{ color: '#525252' }}>
              Full-stack development, IoT systems, security testing, and academic roles 
              spanning healthcare, energy, and educational technology sectors.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="section-content">
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: '500', color: '#171717' }}>
              Master of Technology in Computer Science
            </h3>
            <p style={{ color: '#525252', marginBottom: '0.5rem' }}>
              Kerala Technological University, College of Engineering Trivandrum
            </p>
            <p style={{ color: '#737373', fontSize: '0.875rem' }}>
              2016 - 2018 • CGPA: 8.73
            </p>
          </div>
          
          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontWeight: '500', color: '#171717' }}>
              Bachelor of Technology in Information Technology
            </h3>
            <p style={{ color: '#525252', marginBottom: '0.5rem' }}>
              Cochin University of Science and Technology (CUSAT)
            </p>
            <p style={{ color: '#737373', fontSize: '0.875rem' }}>
              2008 - 2012 • 77.67%
            </p>
          </div>

          <div>
            <h3 style={{ fontWeight: '500', color: '#171717' }}>
              AWS Certified Cloud Practitioner
            </h3>
            <p style={{ color: '#525252' }}>
              Amazon Web Services • Score: 87.7%
            </p>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div>
          <div className="stat-number">7+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div>
          <div className="stat-number">AI</div>
          <div className="stat-label">Product Focus</div>
        </div>
        <div>
          <div className="stat-number">IBM</div>
          <div className="stat-label">Hyper Blue Team</div>
        </div>
      </div>
    </div>
  );
};

export default About;