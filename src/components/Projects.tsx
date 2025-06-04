import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Boxes, Store, Hospital, Truck, Calendar, CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Production Monitoring System",
      description: "Comprehensive mobile application for monitoring production processes at Jbel Annour factory. Includes real-time monitoring, production tracking, and maintenance management.",
      icon: Boxes,
      tags: ["React Native", "Laravel", "RESTful API", "Real-time Updates"],
      type: "Mobile App",
      company: "Briqueterie Jbel Annour",
      fullDescription: [
        "Real-time production process monitoring",
        "Maintenance scheduling and tracking",
        "Production metrics and analytics",
        "User role management system",
        "Offline data synchronization",
        "Push notifications for alerts"
      ]
    },
    {
      title: "Analytics Dashboard",
      description: "Advanced dashboard for monitoring and analyzing reports submitted through mobile applications. Features data visualization and real-time statistics.",
      icon: Store,
      tags: ["ReactJS", "Laravel", "Charts", "Analytics"],
      type: "Web Application",
      company: "Briqueterie Jbel Annour",
      fullDescription: [
        "Real-time data visualization and analytics",
        "Custom report generation",
        "Interactive dashboard widgets",
        "Performance metrics tracking",
        "User activity monitoring",
        "Export functionality for reports"
      ]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform for Africa-IT with product management, cart functionality, and secure checkout process.",
      icon: Store,
      tags: ["Laravel", "MySQL", "Payment Integration", "Admin Dashboard"],
      type: "Web Application",
      company: "Africa IT Innovation",
      fullDescription: [
        "Product catalog management",
        "Shopping cart functionality",
        "Secure payment processing",
        "Order management system",
        "Customer account management",
        "Admin dashboard for inventory"
      ]
    },
    {
      title: "Dental Clinic Management",
      description: "Comprehensive website for dental clinic management including appointment scheduling, patient records, and service management.",
      icon: Hospital,
      tags: ["Laravel", "MySQL", "Appointment System"],
      type: "Web Application",
      company: "Africa IT Innovation",
      fullDescription: [
        "Online appointment scheduling",
        "Patient records management",
        "Treatment history tracking",
        "Service catalog management",
        "Staff scheduling system",
        "Automated appointment reminders"
      ]
    },
    {
      title: "Fleet Management System",
      description: "Complete truck fleet management system with real-time tracking, maintenance scheduling, and route optimization.",
      icon: Truck,
      tags: ["Laravel", "GPS Integration", "Real-time Tracking"],
      type: "Web Application",
      company: "Africa IT Innovation",
      fullDescription: [
        "Real-time vehicle tracking",
        "Route optimization",
        "Maintenance scheduling",
        "Fuel consumption monitoring",
        "Driver management",
        "Performance analytics"
      ]
    },
    {
      title: "Event Management Platform",
      description: "Event website for African summit featuring registration system, content management, and attendee tracking.",
      icon: Calendar,
      tags: ["Laravel", "Event System", "User Management"],
      type: "Web Application",
      company: "Africa IT Innovation",
      fullDescription: [
        "Event registration system",
        "Content management system",
        "Attendee tracking",
        "Schedule management",
        "Speaker profiles",
        "Digital resource distribution"
      ]
    }
  ];

  return (
    <section id="projects" className="section py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            Showcase of my recent development work
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300"
            >
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <project.icon size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-semibold">
                        {project.title}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">
                        {project.company}
                      </p>
                    </div>
                  </div>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 whitespace-nowrap shrink-0">
                    {project.type}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-4">
                <button 
                  onClick={() => setSelectedProject(project)}
                  className="text-sm text-primary hover:text-primary/80 font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                >
                  Learn More
                  <ExternalLink size={14} />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <selectedProject.icon size={32} />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-bold">
                      {selectedProject.title}
                    </DialogTitle>
                    <DialogDescription className="text-base font-medium">
                      {selectedProject.company}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground">
                    {selectedProject.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid gap-2">
                    {selectedProject.fullDescription.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 size={18} className="text-primary mt-0.5 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary" 
                        className="bg-primary/10 text-primary hover:bg-primary/20 px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
