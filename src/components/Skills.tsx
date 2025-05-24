
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["JavaScript (ES2024)", "TypeScript", "React", "Next.js", "Redux/Zustand", "Tailwind CSS", "Styled Components", "HTML5/CSS3"]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "Python", "Django/Flask", "REST APIs", "GraphQL", "Microservices"]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Database Design", "Query Optimization"]
    },
    {
      title: "DevOps & Tools",
      icon: "🚀",
      skills: ["Git", "Docker", "Kubernetes", "CI/CD", "AWS", "Vercel", "GitHub Actions", "System Design"]
    },
    {
      title: "Methodologies",
      icon: "📋",
      skills: ["Agile/Scrum", "TDD", "Clean Code", "SOLID Principles", "Responsive Design", "Accessibility (WCAG)"]
    },
    {
      title: "Soft Skills",
      icon: "🤝",
      skills: ["Problem Solving", "Critical Thinking", "Communication", "Collaboration", "Leadership", "UI/UX Acumen"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Technical <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and user-centric applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-500 transform hover:scale-105 hover:bg-slate-800/50"
            >
              <div className="flex items-center mb-4">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="flex items-center text-gray-300 hover:text-white transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full mr-3 opacity-70"></div>
                    <span className="text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
