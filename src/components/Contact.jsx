import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="section-container relative">
      {/* Background decorations */}
      <div className="absolute top-40 right-20 w-72 h-72 bg-purple-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-40 left-20 w-72 h-72 bg-blue-900/20 rounded-full blur-[120px] -z-10" />
      
      <h2 className="section-title">Contact Me</h2>
      
      <div className="max-w-2xl mx-auto">
        <div className="card-cosmic p-8 cosmic-glow">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-300">
                Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-space/50 border-cosmic-light/20 text-white placeholder:text-gray-500 focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-300">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-space/50 border-cosmic-light/20 text-white placeholder:text-gray-500 focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all duration-300"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-300">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="min-h-[150px] bg-space/50 border-cosmic-light/20 text-white placeholder:text-gray-500 focus:border-cosmic-blue focus:ring-1 focus:ring-cosmic-blue transition-all duration-300"
                placeholder="Your message..."
              />
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-cosmic-blue to-cosmic-purple hover:opacity-90 transition-all duration-300 text-white font-medium py-6 text-lg"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 