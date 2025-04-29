
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Raw Materials Inventory Management (Backend)",
      description: "Backend system to track raw material check-ins, production steps, and outputs. Implemented CRUD operations and multi-step production handling.",
      technologies: ["Django", "PostgreSQL"],
      github: "https://github.com/Vishnu070501/RawMaterialsManagementInventory",
      live: null,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
    },
    {
      title: "Raw Materials Inventory Management (Frontend)",
      description: "Frontend for managing raw materials inventory. Seamless API integration for real-time updates and production workflows.",
      technologies: ["React.js", "Next.js", "Redux", "Tanstack Query"],
      github: "https://github.com/Vishnu070501/RawMaterialsManagementInventoryFrontEnd",
      live: null,
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b"
    },
    {
      title: "Book Your Tickets",
      description: "REST API to book, modify, and cancel tickets with show management functionality.",
      technologies: ["Spring Boot", "MySQL"],
      github: "https://github.com/Vishnu070501/bookyourtickets",
      live: null,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e"
    }
  ];

  return (
    <section id="projects" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-blue-900/20 rounded-full blur-[130px] -z-10" />
      
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group card-cosmic overflow-hidden"
          >
            {/* Project image */}
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              
              <p className="text-gray-300 mb-4 h-20 overflow-hidden">{project.description}</p>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-cosmic text-xs font-medium rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Links */}
              <div className="flex justify-between">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
                
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
