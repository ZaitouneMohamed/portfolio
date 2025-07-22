import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Calendar,
  MessageCircle,
  Download,
  Clock,
  Coffee
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "mohamedztn3@gmail.com",
      href: "mailto:mohamedztn3@gmail.com",
      action: "Send Email"
    },
    { 
      icon: Phone, 
      label: "Phone", 
      value: "+212 7 00 26 0091",
      href: "tel:+212700260091",
      action: "Call Now"
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "Morocco",
      href: "https://maps.google.com/?q=Morocco",
      action: "View Location"
    }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      label: "GitHub",
      href: "https://github.com/ZaitouneMohamed/",
      color: "hover:bg-[#333333]",
      description: "Check out my code"
    },
    { 
      icon: Linkedin, 
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohamed-zaitoune/",
      color: "hover:bg-[#0077B5]",
      description: "Connect professionally"
    }
  ];



  return (
    <section id="contact" className="section py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground">
            Ready to bring your ideas to life? Let's connect and make it happen!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div className="prose dark:prose-invert">
              <h3 className="text-2xl font-semibold mb-4">Get In Touch</h3>
              <p className="text-muted-foreground">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a website, web application, or just want to discuss an idea, 
                I'm here to help!
              </p>
            </div>

            {/* Availability Status */}
            <Card className="border border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/20">
              <CardContent className="flex items-center gap-3 p-4">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="flex-1">
                  <p className="font-medium text-green-800 dark:text-green-200">Available for Projects</p>
                  <p className="text-sm text-green-600 dark:text-green-300">
                    Currently accepting new opportunities
                  </p>
                </div>
                <Badge variant="secondary" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
                  <Clock size={12} className="mr-1" />
                  Open
                </Badge>
              </CardContent>
            </Card>
            
            {/* Contact Methods */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="group overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm 
                                          hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-background transition-colors duration-300">
                      <item.icon size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      asChild
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a 
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.action}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Right Column - Social Links */}
          <div className="space-y-8">
            {/* Connect With Me */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Connect With Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 bg-background/50 backdrop-blur-sm">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4">
                        <div className={`w-12 h-12 mx-auto rounded-lg bg-primary/10 text-primary flex items-center justify-center
                                      group-hover:bg-primary group-hover:text-background transition-colors duration-300`}>
                          <social.icon size={24} />
                        </div>
                      </div>
                      <h5 className="font-medium mb-1">{social.label}</h5>
                      <p className="text-sm text-muted-foreground mb-4">{social.description}</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full"
                        asChild
                      >
                        <a 
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit {social.label}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Coffee Chat CTA */}
            <Card className="border-2 border-dashed border-primary/30 bg-primary/5">
              <CardContent className="p-6 text-center">
                <Coffee className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h5 className="font-semibold mb-2">Let's Grab a Virtual Coffee!</h5>
                <p className="text-sm text-muted-foreground mb-4">
                  I love connecting with fellow developers and discussing exciting projects over a cup of coffee.
                </p>
                <Button className="w-full" asChild>
                  <a 
                    href="mailto:mohamedztn3@gmail.com?subject=Let's Have a Coffee Chat!"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Coffee size={16} className="mr-2" />
                    Schedule Coffee Chat
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
