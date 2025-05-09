import { cn } from '@/lib/utils';
import portfolioData from '../data/portfolio.json';

const About = () => {
  const { personalInfo, skills, education, coursework } = portfolioData;

  // Define color schemes for different skill categories
  const skillColorSchemes = {
    languages: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20',
      text: 'text-blue-300'
    },
    frameworks: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20',
      text: 'text-purple-300'
    },
    databases: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/20',
      text: 'text-green-300'
    },
    devops: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
      text: 'text-orange-300'
    },
    // Default color scheme for any new categories
    default: {
      bg: 'bg-gray-500/10',
      border: 'border-gray-500/20',
      text: 'text-gray-300'
    }
  };

  // Helper function to get color scheme for a skill category
  const getColorScheme = (category) => {
    return skillColorSchemes[category] || skillColorSchemes.default;
  };
  return (
    <section id="about" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-900/20 rounded-full blur-[120px] -z-10" />
      
      <h2 className="section-title">About Me</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left column - About text */}
        <div className="card-cosmic p-6">
          <h3 className="text-xl font-bold mb-4">Who I Am</h3>
          <div className="space-y-4 text-gray-300">
            <p>
              {personalInfo.bio || "I'm a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies. My journey in web development started with a curiosity about how things work on the internet, which led me to explore various technologies and frameworks."}
          </p>
            <p>
              {personalInfo.specialization || "I specialize in creating responsive, user-friendly web applications using modern technologies. My approach combines technical expertise with a keen eye for design and user experience."}
          </p>
            <p>
              {personalInfo.interests || "When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing."}
          </p>
          </div>
        </div>
        
        {/* Right column - Key Information */}
        <div>
          <div className="card-cosmic p-6 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Key Information</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Location:</span> 
                  <span className="break-words">{personalInfo.location}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Email:</span> 
                  <a href={`mailto:${personalInfo.email}`} className="text-blue-400 hover:underline break-words">
                    {personalInfo.email}
                  </a>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Phone:</span> 
                  <span className="break-words">{personalInfo.phone}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Education:</span> 
                  <span className="break-words">{education[0].degree}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">University:</span> 
                  <span className="break-words">{education[0].institution}</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium min-w-20">Grade:</span> 
                  <span className="break-words">{education[0].grade}</span>
                </li>
              </ul>
            </div>
            
            {/* Skills */}
            <div className="mt-6">
              <h3 className="text-xl font-bold mb-4">Skills</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => {
                  const colorScheme = getColorScheme(category);
                  return (
                    <div key={category}>
                      <h4 className="text-sm font-medium text-gray-400 mb-2">
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill) => (
                          <span 
                            key={skill}
                            className={`px-3 py-1 ${colorScheme.bg} border ${colorScheme.border} rounded-full text-sm ${colorScheme.text} break-words`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Coursework */}
            {coursework && coursework.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-bold mb-4">Coursework</h3>
                <div className="flex flex-wrap gap-2">
                  {coursework.map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/20 rounded-full text-sm text-yellow-300 break-words"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 