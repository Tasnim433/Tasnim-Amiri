
import { useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">Amazing Together</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interested in collaborating on your next project? I'd love to hear about your ideas and discuss how we can bring them to life.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-blue-500 resize-none"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105"
              >
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <a 
                  href="mailto:tassnimamiri08@gmail.com"
                  className="flex items-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400">tassnimamiri08@gmail.com</p>
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/tasnim-amiri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <p className="text-gray-400">Connect professionally</p>
                  </div>
                </a>
                
                <a 
                  href="https://github.com/Tasnim433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-800 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <p className="text-gray-400">View my repositories</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Resume Download */}
            <div className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-xl p-6">
              <h4 className="text-white font-semibold mb-3">Resume</h4>
              <p className="text-gray-400 mb-4 text-sm">
                Download my resume to learn more about my experience and qualifications.
              </p>
              <Button 
                variant="outline" 
                className="border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 transition-all duration-300"
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
