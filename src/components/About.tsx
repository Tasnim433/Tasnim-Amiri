
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "Constantly exploring new technologies and methodologies to solve complex problems."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Collaboration",
      description: "Building strong relationships with teams and stakeholders to deliver exceptional results."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance",
      description: "Optimizing every aspect of development for speed, efficiency, and user experience."
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Tasnim</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Passionate Full-Stack Developer</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a dedicated software developer with a deep passion for creating digital experiences 
                that make a difference. From intuitive user interfaces to robust backend systems, 
                I thrive on building comprehensive and impactful solutions that push the boundaries 
                of what's possible.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey in software development is driven by continuous learning and a commitment 
                to best practices. I believe in writing clean, testable code and designing scalable 
                architectures that can grow with business needs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a user-centric approach to development, I focus on creating solutions that not 
                only meet technical requirements but also deliver exceptional user experiences. 
                I excel in collaborative environments and enjoy communicating complex technical 
                concepts to diverse stakeholders.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-purple-400 mb-3">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{value.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats or Additional Info */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
              3+
            </div>
            <p className="text-gray-300">Years Experience</p>
          </div>
          <div className="glass rounded-xl p-6 text-center">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-300">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
