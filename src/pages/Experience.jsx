import React from 'react';

const Experience = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Experience</h1>
        <hr className="page-divider" />
        <p className="page-description">
          A journey through enterprise software development, cloud architecture, 
          and innovative technology solutions.
        </p>
      </div>

      <div className="section">
        <h2 className="section-title">Professional Journey</h2>
        <div className="experience-timeline">
          
          <div className="experience-item">
            <h3 className="experience-title">Senior Software Engineer</h3>
            <div className="experience-company">Quantiphi Analytics Solutions Pvt Ltd</div>
            <div className="experience-period">Nov 2021 - Present</div>
            <div className="experience-description">
              <p style={{ marginBottom: '1rem' }}>
                <strong>Business Intelligence Platform (Nov 2022 - Present):</strong><br />
                Leading development of AI-powered backend services including automated presentation 
                generation, email alert systems, and comprehensive reporting services. Working with 
                Google Cloud Platform and collaborating directly with Google architects on platform architecture.
              </p>
              <p>
                <strong>Renewable Energy Platform (Mar 2021 - Nov 2022):</strong><br />
                Spearheaded core backend development including Role-Based Access Management (RBAM), 
                API Manager, Logging Microservice, User Management, and App Usage Analytics. 
                Received recognition from Google for maintaining architectural integrity and coding standards.
              </p>
            </div>
            <div className="skills-grid">
              {['Node.js', 'TypeScript', 'Google Cloud Platform', 'Cloud SQL', 'Looker', 'Cloud Functions'].map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Software Engineer</h3>
            <div className="experience-company">Lifebytes India (P) Ltd, Bangalore</div>
            <div className="experience-period">Nov 2020 - Feb 2021</div>
            <div className="experience-description">
              <p>
                Designed and developed a comprehensive web application for displaying patient health 
                conditions and symptoms. The application serves doctors and researchers in identifying 
                and treating conditions, particularly focused on genetic disease research and analysis.
              </p>
            </div>
            <div className="skills-grid">
              {['React.js', 'Node.js', 'Healthcare Systems', 'Database Design'].map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Software Engineer</h3>
            <div className="experience-company">Tismo Technology Solutions (P) Ltd., Bangalore</div>
            <div className="experience-period">Sep 2018 - Nov 2020</div>
            <div className="experience-description">
              <p style={{ marginBottom: '1rem' }}>
                <strong>Network Device Monitoring:</strong> Developed AWS Cloud infrastructure for IoT device 
                registration, control, and monitoring. Created SNMP Agent using Python and implemented 
                secure communication protocols. Received significant client appreciation for this project.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                <strong>Fragrance Control Device:</strong> Converted traditional fragrance generators to IoT 
                devices using AWS Cloud platform. Implemented TOTP security mechanisms and created comprehensive 
                REST APIs for mobile and web applications.
              </p>
              <p>
                <strong>Security & Testing:</strong> Conducted penetration testing using OWASP ZAP Proxy tool, 
                identified SQL injection vulnerabilities, and implemented security measures to prevent 
                clickjacking and protect session cookies.
              </p>
            </div>
            <div className="skills-grid">
              {['AWS IoT', 'Python', 'AWS Lambda', 'React.js', 'SNMP', 'Security Testing', 'OWASP', 'SQLMap'].map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

          <div className="experience-item">
            <h3 className="experience-title">Assistant Professor</h3>
            <div className="experience-company">LBS Institute of Technology for Women</div>
            <div className="experience-period">Dec 2012 - Jun 2015</div>
            <div className="experience-description">
              <p>
                Spearheaded development of college website and placement cell portal, achieving streamlined 
                user experience and enhanced online visibility. Engineered internal student assessment tool 
                leveraging Moodle and orchestrated technical conferences and workshops.
              </p>
            </div>
            <div className="skills-grid">
              {['Web Development', 'Moodle', 'Educational Technology', 'Project Management'].map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>

        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Recognition & Achievements</h2>
        <div className="section-content">
          <div style={{ padding: '1.5rem', background: '#fafafa', border: '1px solid #f5f5f5', marginBottom: '1rem' }}>
            <h3 style={{ fontWeight: '500', color: '#171717', marginBottom: '0.5rem' }}>
              Google Cloud Recognition
            </h3>
            <p style={{ color: '#404040' }}>
              Received recognition and appreciation from Google for maintaining architectural 
              integrity and coding standards throughout complex project development cycles.
            </p>
          </div>
          
          <div style={{ padding: '1.5rem', background: '#fafafa', border: '1px solid #f5f5f5' }}>
            <h3 style={{ fontWeight: '500', color: '#171717', marginBottom: '0.5rem' }}>
              AWS Certification Excellence
            </h3>
            <p style={{ color: '#404040' }}>
              Achieved AWS Cloud Practitioner certification with an outstanding score of 87.7%, 
              demonstrating deep understanding of cloud architecture and services.
            </p>
          </div>
        </div>
      </div>

      <div className="stats-grid">
        <div>
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div>
          <div className="stat-number">20+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div>
          <div className="stat-number">4</div>
          <div className="stat-label">Companies</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;