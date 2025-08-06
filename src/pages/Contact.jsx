import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

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
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8">
            Get In Touch
          </h1>
          <div className="w-24 h-0.5 bg-gray-300"></div>
          <p className="text-xl text-gray-600 mt-8 max-w-2xl">
            I'm always interested in new opportunities, challenging projects, 
            and meaningful collaborations. Let's discuss how we can work together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-6">Let's Connect</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:visakh@visakh.dev"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <Mail size={20} className="group-hover:scale-110 transition-transform" />
                  <span>visakh@visakh.dev</span>
                </a>
                
                <a 
                  href="https://linkedin.com/in/visakhvijayakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                  <span>LinkedIn Profile</span>
                </a>
                
                <a 
                  href="https://github.com/visakhvijayakumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 text-gray-700 hover:text-gray-900 transition-colors group"
                >
                  <Github size={20} className="group-hover:scale-110 transition-transform" />
                  <span>GitHub Profile</span>
                </a>
                
                <div className="flex items-center space-x-4 text-gray-700">
                  <MapPin size={20} />
                  <span>Available for remote work worldwide</span>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="text-lg font-serif text-gray-900 mb-4">Current Status</h3>
              <div className="space-y-2 text-gray-600">
                <p>🔍 Open to new opportunities</p>
                <p>💼 Available for consulting projects</p>
                <p>🤝 Interested in collaboration</p>
                <p>📍 Remote-first approach</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-serif text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:border-gray-500 focus:outline-none transition-colors resize-vertical"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gray-900 text-white py-3 px-6 hover:bg-gray-800 transition-colors font-medium"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 p-6 bg-gray-50 border border-gray-200">
              <h3 className="text-lg font-serif text-gray-900 mb-3">Response Time</h3>
              <p className="text-gray-600 text-sm">
                I typically respond to messages within 24-48 hours. For urgent matters, 
                feel free to reach out directly via email or LinkedIn.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600 mb-4">
            Prefer a quick call? Schedule a meeting directly:
          </p>
          <a 
            href="https://calendly.com/visakhvijayakumar" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 hover:border-gray-400 hover:text-gray-900 transition-colors"
          >
            Schedule a Call
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;