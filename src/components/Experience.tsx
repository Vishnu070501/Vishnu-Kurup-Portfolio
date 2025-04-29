
import { BriefcaseIcon } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Ornate Solar",
      period: "Nov 2023 – Apr 2025",
      location: "Okhla, Delhi",
      responsibilities: [
        "Developed internal portals using React.js, Next.js, Redux, and Tanstack Query.",
        "Built scalable backend APIs using Django for procurement and inventory management.",
        "Collaborated cross-functionally with Procurement, Marketing, and R&D teams."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Aspire Systems",
      period: "Aug 2022 – Feb 2023",
      location: "Chennai / Remote",
      responsibilities: [
        "Refactored backend modules using Spring Boot; migrated libraries like iText and PDFBox.",
        "Contributed to internal meeting scheduler frontend using Angular.",
        "Worked in Agile teams and followed standard SDLC practices."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Zoho Corporation",
      period: "Feb 2022 – Jun 2022",
      location: "Coimbatore, Tamil Nadu",
      responsibilities: [
        "Built a Web Student Tracker project using Java, JSP, Servlets, and MySQL.",
        "Worked on CRM backend, optimized event creation flow, and updated legacy libraries.",
        "Gained exposure to Angular development and large-scale systems."
      ]
    }
  ];

  return (
    <section id="experience" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-900/20 rounded-full blur-[120px] -z-10" />
      
      <h2 className="section-title">Experience</h2>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform md:-translate-x-0.5" />
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Circle on timeline */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-cosmic border-2 border-blue-400 transform -translate-x-1/2 flex items-center justify-center z-10">
                <BriefcaseIcon size={16} className="text-blue-400" />
              </div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] ${index % 2 === 0 ? 'md:pr-10' : 'md:pl-10'}`}>
                <div className="card-cosmic p-6 h-full hover:shadow-blue-900/20 hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold text-gradient">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between my-2">
                    <p className="text-lg font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                  <p className="text-sm text-gray-400 mb-4">{exp.location}</p>
                  
                  <ul className="space-y-2 list-disc pl-5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="text-gray-300">{resp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
