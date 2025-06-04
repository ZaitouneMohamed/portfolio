import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  User,
  MessageSquare,
  AlertCircle
} from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated delay
    setIsSubmitting(false);
  };

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "mohamedztn3@gmail.com",
      href: "mailto:mohamedztn3@gmail.com"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+212 7 00 26 0091",
      href: "tel:+212700260091"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Morocco",
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub",
      href: "https://github.com/ZaitouneMohamed/",
      color: "hover:bg-[#333333]"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-zaitoune/",
      color: "hover:bg-[#0077B5]"
    }
  ];

  return (
    <section id="contact" className="section py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Get In Touch
          </h2>
          <p className="text-muted-foreground">
            Let's discuss your project and bring your ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="prose dark:prose-invert">
              <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
              <p className="text-muted-foreground">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I'll try my best 
                to get back to you!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="group overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm 
                                          hover:border-primary/50 transition-all duration-300">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <a 
                        href={item.href}
                        className="font-medium hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-muted-foreground mb-4">
                FIND ME ON
              </h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 text-primary 
                              ${social.color} hover:text-white transform hover:-translate-y-1 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div>
            <Card className="border border-border/50 bg-background/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                        <User size={16} className="text-primary" />
                        Name
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                        <Mail size={16} className="text-primary" />
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-background/50"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium flex items-center gap-2">
                      <AlertCircle size={16} className="text-primary" />
                      Subject
                    </label>
                    <Input 
                      id="subject" 
                      placeholder="How can I help you?"
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="bg-background/50"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare size={16} className="text-primary" />
                      Message
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Your message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-background/50 resize-none"
                      required
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-white flex items-center justify-center gap-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
