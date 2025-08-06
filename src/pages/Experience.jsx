import React from 'react';

const ExperienceItem = ({ title, company, period, description, technologies }) => (
  <div className="border-l-2 border-gray-200 pl-8 pb-12 relative">
    <div className="absolute -left-2 top-0 w-4 h-4 bg-white border-2 border-gray-300 rounded-full"></div>
    <div className="space-y-4">
      <div>
        <h3 className="text-2xl font-serif text-gray-900">{title}</h3>
        <p className="text-lg text-gray-600">{company}</p>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{period}</p>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
      {technologies && (
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
      )}
    </div>
  </div>
);

const SkillCategory = ({ title, skills }) => (
  <div className="space-y-4">
    <h3 className="text-xl font-serif text-gray-900">{title}</h3>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {skills.map((skill) => (
        <div key={skill.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-700">{skill.name}</span>
            <span className="text-gray-500 text-sm">{skill.level}</span>
          </div>
          <div className="h-1 bg-gray-200 rounded">
            <div 
              className="h-1 bg-gray-900 rounded transition-all duration-300"
              style={{ width: `${skill.percentage}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "IBM Labs",
      period: "2018 - Present",
      description: "Lead development of enterprise-level applications serving millions of users. Architect scalable solutions using modern web technologies and cloud platforms. Mentor junior developers and drive technical decision-making for critical projects.",
      technologies: ["React", "Node.js", "Python", "AWS", "PostgreSQL", "Docker", "Kubernetes"]
    },
    {
      title: "Full Stack Developer",
      company: "IBM Labs",
      period: "2016 - 2018",
      description: "Developed and maintained multiple web applications with focus on performance optimization and user experience. Collaborated with cross-functional teams to deliver high-quality software solutions on schedule.",
      technologies: ["JavaScript", "Java", "Spring Boot", "MongoDB", "React", "Angular"]
    },
    {
      title: "Software Developer",
      company: "IBM Labs",
      period: "2015 - 2016",
      description: "Built RESTful APIs and integrated third-party services. Participated in code reviews, testing, and deployment processes. Gained expertise in agile development methodologies and enterprise software patterns.",
      technologies: ["Java", "Spring", "MySQL", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React", level: "Expert", percentage: 95 },
        { name: "TypeScript", level: "Advanced", percentage: 90 },
        { name: "Vue.js", level: "Intermediate", percentage: 75 },
        { name: "Angular", level: "Intermediate", percentage: 70 },
        { name: "Next.js", level: "Advanced", percentage: 85 },
        { name: "Tailwind CSS", level: "Advanced", percentage: 90 }
      ]
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", level: "Expert", percentage: 95 },
        { name: "Python", level: "Advanced", percentage: 85 },
        { name: "Java", level: "Advanced", percentage: 80 },
        { name: "GraphQL", level: "Advanced", percentage: 85 },
        { name: "REST APIs", level: "Expert", percentage: 95 },
        { name: "Microservices", level: "Advanced", percentage: 90 }
      ]
    },
    {
      title: "Databases & Infrastructure",
      skills: [
        { name: "PostgreSQL", level: "Advanced", percentage: 90 },
        { name: "MongoDB", level: "Advanced", percentage: 85 },
        { name: "Redis", level: "Intermediate", percentage: 75 },
        { name: "AWS", level: "Advanced", percentage: 85 },
        { name: "Docker", level: "Advanced", percentage: 90 },
        { name: "Kubernetes", level: "Intermediate", percentage: 70 }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-6 max-w-4xl mx-auto">
      <div className="space-y-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-serif text-gray-900 mb-8">
            Experience
          </h1>
          <div className="w-24 h-0.5 bg-gray-300"></div>
        </div>

        <div className="space-y-2">
          <h2 className="text-3xl font-serif text-gray-900 mb-8">Professional Journey</h2>
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} {...exp} />
          ))}
        </div>

        <div className="space-y-12">
          <h2 className="text-3xl font-serif text-gray-900">Technical Skills</h2>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} {...category} />
          ))}
        </div>

        <div className="pt-8 border-t border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-serif text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;