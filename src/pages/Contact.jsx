import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with a form handling service like FormSpree, Netlify Forms, etc.
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      <div className="page-header">
        <h1 className="page-title">Get In Touch</h1>
        <hr className="page-divider" />
        <p className="page-description">
          I'm always interested in new opportunities, challenging projects, 
          and meaningful collaborations. Let's discuss how we can work together.
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Information */}
        <div className="section">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-links">
            <a 
              href="mailto:mailtovisakhv@gmail.com"
              className="contact-link"
            >
              <Mail size={20} />
              <span>mailtovisakhv@gmail.com</span>
            </a>
            
            <a 
              href="tel:+919447716854"
              className="contact-link"
            >
              <Phone size={20} />
              <span>+91 94477 16854</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/visakh-vijayakumar-23b36882"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <Linkedin size={20} />
              <span>LinkedIn Profile</span>
            </a>
            
            <div className="contact-link">
              <MapPin size={20} />
              <span>Trivandrum, Kerala, India</span>
            </div>
          </div>

          <div style={{ paddingTop: '2rem', borderTop: '1px solid #e5e5e5', marginTop: '2rem' }}>
            <h3 className="section-title" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>Current Status</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', color: '#525252' }}>
              <p>🤝 Interested in collaboration</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="section">
          <h2 className="section-title">Send a Message</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                placeholder="Tell me about your project or opportunity..."
              />
            </div>

            <button type="submit" className="form-button">
              Send Message
            </button>
          </form>

          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#fafafa', border: '1px solid #e5e5e5' }}>
            <h3 style={{ fontSize: '1.125rem', fontWeight: '500', color: '#171717', marginBottom: '0.75rem' }}>
              Response Time
            </h3>
            <p style={{ color: '#525252', fontSize: '0.875rem' }}>
              I typically respond to messages within 24-48 hours. For urgent matters, 
              feel free to reach out directly via phone or LinkedIn.
            </p>
          </div>
        </div>
      </div>

      <div style={{ paddingTop: '2rem', borderTop: '1px solid #e5e5e5', textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ color: '#525252', marginBottom: '1rem' }}>
          Based in Kerala, India • Available for remote work worldwide
        </p>
        <div className="stats-grid" style={{ maxWidth: '500px', margin: '0 auto' }}>
          <div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div>
            <div className="stat-number">87.7%</div>
            <div className="stat-label">AWS Cert Score</div>
          </div>
          <div>
            <div className="stat-number">24h</div>
            <div className="stat-label">Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;