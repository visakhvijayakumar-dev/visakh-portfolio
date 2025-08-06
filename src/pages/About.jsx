import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8">
            About Me
          </h1>
          <div className="w-24 h-0.5 bg-gray-300"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Background</h2>
              <p className="text-gray-700 leading-relaxed">
                With seven years of experience in full-stack development, I've dedicated my career 
                to building robust, scalable applications that solve complex business problems. 
                My journey began with a passion for creating elegant solutions that bridge the gap 
                between technical possibility and user needs.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Philosophy</h2>
              <p className="text-gray-700 leading-relaxed">
                I believe in writing clean, maintainable code that stands the test of time. 
                My approach emphasizes performance, scalability, and user experience, ensuring 
                that every solution I deliver meets both current needs and future growth.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Current Focus</h2>
              <p className="text-gray-700 leading-relaxed">
                At IBM Labs, I work on cutting-edge enterprise applications, leveraging modern 
                web technologies to create solutions that impact thousands of users. My current 
                focus includes cloud-native architectures, microservices, and advanced frontend 
                frameworks.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-serif text-gray-900 mb-4">Core Technologies</h2>
              <div className="flex flex-wrap gap-3">
                {[
                  'JavaScript', 'TypeScript', 'React', 'Node.js', 
                  'Python', 'PostgreSQL', 'MongoDB', 'AWS', 
                  'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-gray-600 italic">
            "Technology is best when it brings people together and solves real problems."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;