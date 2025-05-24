
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "Project Nova - AI-Powered E-commerce Platform",
      tagline: "Revolutionizing online shopping with intelligent product recommendations and seamless user experience",
      role: "Lead Full-Stack Developer",
      description: "A comprehensive e-commerce platform featuring AI-driven product recommendations, real-time inventory management, and advanced analytics dashboard. Built with modern technologies to handle high-traffic loads while maintaining optimal performance.",
      techStack: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "AWS", "Stripe API"],
      features: [
        "AI-powered product recommendation engine with 40% conversion improvement",
        "Real-time inventory management with automated restock notifications",
        "Advanced analytics dashboard with comprehensive sales insights"
      ],
      mockupType: "laptop"
    },
    {
      title: "Project QuantumLeap - Scalable SaaS Dashboard",
      tagline: "Enterprise-grade analytics platform serving millions of data points with real-time insights",
      role: "Frontend Architect & Backend Engineer",
      description: "A sophisticated SaaS platform providing real-time analytics, customizable dashboards, and team collaboration tools. Designed to scale efficiently while maintaining excellent user experience across all device types.",
      techStack: ["Vue.js", "Express.js", "MongoDB", "Socket.io", "Docker", "Kubernetes", "GraphQL"],
      features: [
        "Real-time data visualization handling 10M+ daily events",
        "Customizable dashboard builder with drag-and-drop interface",
        "Advanced team collaboration with role-based access control"
      ],
      mockupType: "desktop"
    },
    {
      title: "Project Iris - Interactive Mobile Wellness App",
      tagline: "Gamified wellness platform promoting healthy habits through engaging user experiences",
      role: "Mobile-First Full-Stack Developer",
      description: "A React Native wellness application featuring habit tracking, social challenges, and personalized coaching. Integrated with wearable devices and health APIs to provide comprehensive wellness insights.",
      techStack: ["React Native", "Django", "PostgreSQL", "Firebase", "Apple HealthKit", "Google Fit"],
      features: [
        "Gamified habit tracking with social leaderboards and achievements",
        "Integration with popular fitness wearables and health platforms",
        "Personalized coaching system with ML-driven recommendations"
      ],
      mockupType: "mobile"
    }
  ];

  const getMockupGradient = (type: string) => {
    switch (type) {
      case 'laptop': return 'from-blue-500 to-purple-600';
      case 'desktop': return 'from-purple-500 to-pink-600';
      case 'mobile': return 'from-teal-500 to-blue-600';
      default: return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Showcasing innovative solutions that blend technical excellence with user-centered design
          </p>
        </div>
        
        <div className="space-y-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}
            >
              {/* Project Mockup */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group`}>
                <div className="relative bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500/50 transition-all duration-500 transform group-hover:scale-105">
                  <div className={`aspect-video bg-gradient-to-br ${getMockupGradient(project.mockupType)} rounded-lg flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="text-center z-10">
                      <div className="text-6xl mb-4">
                        {project.mockupType === 'laptop' && '💻'}
                        {project.mockupType === 'desktop' && '🖥️'}
                        {project.mockupType === 'mobile' && '📱'}
                      </div>
                      <p className="text-white/80 text-sm">High-Quality Mockup Placeholder</p>
                    </div>
                  </div>
                  
                  {/* Floating Tech Stack */}
                  <div className="absolute -bottom-4 left-4 right-4">
                    <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-600 rounded-lg p-3">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 4).map((tech, techIndex) => (
                          <span key={techIndex} className="text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full border border-blue-500/30">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="text-xs text-gray-400 px-2 py-1">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                <div>
                  <div className="text-sm text-blue-400 font-medium mb-2">{project.role}</div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4 font-medium">
                    {project.tagline}
                  </p>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                {/* Key Features */}
                <div>
                  <h4 className="text-white font-semibold mb-3">Key Features & Achievements:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start text-gray-300">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-300">
                    <Github className="mr-2 h-4 w-4" />
                    View Code
                  </Button>
                  <Button variant="ghost" className="text-teal-400 hover:text-teal-300 hover:bg-teal-400/10">
                    View Case Study →
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
