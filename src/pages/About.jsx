import React from 'react';

const About = () => {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">About Me</h1>
        <hr className="page-divider" />
        <p className="page-description">
          Senior Software Engineer and AWS Certified Cloud Practitioner with over 5 years 
          of industrial experience building scalable enterprise solutions.
        </p>
      </div>

      <div className="two-column">
        <div className="section">
          <h2 className="section-title">Background</h2>
          <div className="section-content">
            <p>
              I'm a passionate Senior Software Engineer at Quantiphi Analytics with extensive experience 
              in full-stack development and cloud architecture. My journey began with a strong foundation 
              in Computer Science, earning my M.Tech from Kerala Technological University with a CGPA of 8.73.
            </p>
            <p style={{ marginTop: '1rem' }}>
              Throughout my career, I've had the privilege of working on cutting-edge projects that serve 
              millions of users, from IoT device management systems to AI-powered business intelligence platforms.
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Current Focus</h2>
          <div className="section-content">
            <p>
              At Quantiphi Analytics, I lead the development of sophisticated backend services including 
              automated presentation generation systems and comprehensive business intelligence platforms. 
              I work extensively with Google Cloud Platform and collaborate directly with Google architects 
              on platform architecture.
            </p>
            <p style={{ marginTop: '1rem' }}>
              I've received recognition from Google for maintaining architectural integrity and coding 
              standards throughout complex project developments.
            </p>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section-title">Core Technologies</h2>
        <div className="skills-grid">
          {[
            'JavaScript', 'TypeScript', 'Node.js', 'React.js', 
            'Python', 'MongoDB', 'PostgreSQL', 'MySQL',
            'AWS', 'Google Cloud Platform', 'AWS IoT',
            'MERN Stack', 'RESTful APIs', 'OAuth',
            'Kali Linux', 'OWASP ZAP', 'SQLMap',
            'HTML5', 'CSS3', 'Material UI', 'Git'
          ].map((tech) => (
            <span key={tech} className="skill-tag">
              {tech}
            </span>
          ))}
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
          <div className="stat-number">5+</div>
          <div className="stat-label">Years Experience</div>
        </div>
        <div>
          <div className="stat-number">15+</div>
          <div className="stat-label">Projects Delivered</div>
        </div>
        <div>
          <div className="stat-number">87.7%</div>
          <div className="stat-label">AWS Certification Score</div>
        </div>
      </div>
    </div>
  );
};

export default About;