
const About = () => {
  const values = [
    { title: "Innovation", description: "Embracing cutting-edge technologies and creative solutions" },
    { title: "Quality", description: "Delivering clean, maintainable, and scalable code" },
    { title: "User-Centricity", description: "Building experiences that delight and empower users" }
  ];

  return (
    <section id="about" className="py-20 bg-slate-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Placeholder */}
          <div className="relative">
            <div className="w-full max-w-md mx-auto">
              <div className="aspect-square bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl border border-slate-600 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-center z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">TA</span>
                  </div>
                  <p className="text-gray-400 text-sm">Professional Photo Placeholder</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              About <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Me</span>
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p className="text-lg">
                I'm a passionate software developer who thrives on transforming complex problems into elegant, 
                user-friendly solutions. With expertise spanning the entire development stack, I bring ideas to 
                life through clean code, intuitive design, and robust architecture.
              </p>
              
              <p>
                From crafting responsive user interfaces that engage and delight, to building scalable backend 
                systems that power modern applications, I believe in the power of technology to create meaningful 
                impact. My approach combines technical excellence with a deep understanding of user needs and 
                business objectives.
              </p>
              
              <p>
                I'm committed to continuous learning, staying current with emerging technologies, and applying 
                best practices in clean code, testing, and scalability. Whether working independently or as part 
                of a collaborative team, I bring strong communication skills and a solutions-oriented mindset to 
                every project.
              </p>
            </div>
            
            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {values.map((value, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-blue-400 font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-400 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
