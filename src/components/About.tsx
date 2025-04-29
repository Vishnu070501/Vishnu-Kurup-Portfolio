
import { Code, Database, Server, Layout } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout size={32} />,
      items: ["JavaScript", "React.js", "Next.js", "Redux", "Tanstack Query", "Angular"]
    },
    {
      category: "Backend",
      icon: <Server size={32} />,
      items: ["Django", "Spring Boot", "Java", "Python"]
    },
    {
      category: "Languages",
      icon: <Code size={32} />,
      items: ["JavaScript", "Java", "Python", "C", "C++"]
    },
    {
      category: "Databases",
      icon: <Database size={32} />,
      items: ["MySQL", "PostgreSQL"]
    }
  ];

  return (
    <section id="about" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cosmic/30 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-900/20 rounded-full blur-[120px] -z-10" />
      
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <div className="card-cosmic p-6 h-full">
            <p className="text-lg mb-6 leading-relaxed">
              I'm a passionate Full-Stack Web Developer with expertise in creating robust web applications 
              using modern technologies. With a strong foundation in both frontend and backend development, 
              I enjoy building intuitive user interfaces and scalable server-side solutions.
            </p>
            <p className="text-lg mb-6 leading-relaxed">
              My journey in software development has taken me through roles at Zoho Corporation, 
              Aspire Systems, and Ornate Solar, where I've worked with diverse teams to deliver 
              high-quality applications that solve real business problems.
            </p>
            <p className="text-lg leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with the latest 
              industry trends to deliver the best possible solutions.
            </p>
          </div>
        </div>
        
        <div>
          <div className="card-cosmic p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Key Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Location:</span> 
                  <span>Faridabad, India</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Email:</span> 
                  <a href="mailto:vishnu.vrap7@gmail.com" className="text-blue-400 hover:underline">
                    vishnu.vrap7@gmail.com
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Phone:</span> 
                  <span>8459452363</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Education:</span> 
                  <span>B.E. Electronics & Communication</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">University:</span> 
                  <span>Karpagam Institute of Technology</span>
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <div className="flex justify-between">
                <a 
                  href="https://github.com/Vishnu070501"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cosmic rounded-lg hover:bg-cosmic-light transition-colors"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/vishnu-kurup-622658210"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cosmic rounded-lg hover:bg-cosmic-light transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="card-cosmic p-6 hover:-translate-y-2 transition-transform">
              <div className="flex items-center mb-4">
                <div className="text-blue-400 mr-3">{skill.icon}</div>
                <h4 className="text-xl font-bold">{skill.category}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-cosmic rounded-full text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
