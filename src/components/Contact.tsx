
import { useState } from 'react';
import { Github, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // This is a mock submission
    // In a real application, you would send the form data to an API
    console.log('Form submitted:', formState);
    
    // Simulate success
    setFormStatus('success');
    setFormState({
      name: '',
      email: '',
      message: ''
    });
    
    // Reset form status after 3 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "vishnu.vrap7@gmail.com",
      href: "mailto:vishnu.vrap7@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "8459452363",
      href: "tel:8459452363"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Faridabad, India",
      href: null
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "github.com/Vishnu070501",
      href: "https://github.com/Vishnu070501"
    },
    {
      icon: <ExternalLink size={24} />,
      label: "LinkedIn",
      value: "Vishnu Kurup",
      href: "https://www.linkedin.com/in/vishnu-kurup-622658210"
    }
  ];

  return (
    <section id="contact" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-20 right-40 w-72 h-72 bg-cosmic/30 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-900/20 rounded-full blur-[100px] -z-10" />
      
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div>
          <div className="card-cosmic p-6 h-full">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-cosmic/50 border border-cosmic-light/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-cosmic/50 border border-cosmic-light/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-cosmic/50 border border-cosmic-light/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 font-medium hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
              
              {formStatus === 'success' && (
                <div className="text-green-500 mt-2">
                  Message sent successfully!
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="text-red-500 mt-2">
                  Failed to send message. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
        
        {/* Contact Info */}
        <div>
          <div className="card-cosmic p-6 h-full">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            
            <ul className="space-y-6">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-4 text-blue-400">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-300">{info.label}</h4>
                    {info.href ? (
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h4 className="font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/Vishnu070501"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cosmic flex items-center justify-center hover:bg-cosmic-light transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vishnu-kurup-622658210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-cosmic flex items-center justify-center hover:bg-cosmic-light transition-colors"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
