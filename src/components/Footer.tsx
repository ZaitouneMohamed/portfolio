import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ZaitouneMohamed/",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mohamed-zaitoune/",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:mohamedztn3@gmail.com",
      label: "Email"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      value: "+212 7 00 26 0091",
      href: "tel:+212700260091"
    },
    {
      icon: MapPin,
      value: "Morocco",
      href: "https://maps.google.com/?q=Morocco"
    }
  ];

  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <a href="#" className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
              Mohamed Zaitoune
            </a>
            <p className="text-muted-foreground">
              Full Stack Developer passionate about creating efficient and scalable web solutions
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {["Home", "About", "Projects", "Experience", "Skills", "Contact"].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Connect</h3>
            
            {/* Contact Info */}
            <div className="space-y-2">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <item.icon size={16} />
                  <span>{item.value}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-8 h-8 flex items-center justify-center rounded-md bg-primary/10 text-primary 
                           hover:bg-primary hover:text-background transform hover:-translate-y-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8 opacity-50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>
            © {currentYear} Mohamed Zaitoune. All rights reserved.
          </p>
          <p className="text-center md:text-right">
            Crafted with passion and modern technologies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
