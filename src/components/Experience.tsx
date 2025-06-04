import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Full-stack Developer",
      company: "Briqueterie Jbel Annour",
      duration: "Oct 2024 - Present",
      responsibilities: [
        "Migration of work environments to new servers",
        "Development infrastructure management (Databases and repositories)",
        "Design, implementation and monitoring of development projects (Laravel, ReactJS, Flutter, React Native)",
        "Design and implementation of production monitoring applications for Jbel Annour factory, including monitoring, production, and maintenance processes (React Native, Laravel)",
        "Design and implementation of Dashboard for monitoring reports submitted by mobile app users (ReactJS, Laravel)"
      ],
      technologies: ["Laravel", "ReactJS", "React Native", "Flutter"]
    },
    {
      title: "Full-stack Developer",
      company: "Africa IT Innovation",
      duration: "Oct 2023 - Mar 2024",
      responsibilities: [
        "Development of e-Commerce platform for Africa-IT (Laravel)",
        "Development of a dental clinic website for Africa-IT client (Laravel)",
        "Design and implementation of truck management system and website (Laravel)",
        "Development of an event website for an African summit, including registration system and content management (Laravel)"
      ],
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript"]
    }
  ];

  return (
    <section id="experience" className="section py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0" 
              style={{ transform: 'translateY(20px)', transition: 'all 0.5s ease-out' }}>
            Work Experience
          </h2>
          <p className="text-muted-foreground animate-on-scroll opacity-0" 
             style={{ transform: 'translateY(20px)', transition: 'all 0.5s ease-out', animationDelay: '0.1s' }}>
            My Professional Journey
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-1 bg-primary/20"></div>
          
          {/* Experience Cards */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } group`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:-ml-2.5 w-5 h-5 rounded-full border-4 border-primary bg-background 
                              transition-transform duration-300 group-hover:scale-125"></div>
                
                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 
                    ? 'md:pr-10 md:pl-4' 
                    : 'md:pl-10 md:pr-4'
                }`}>
                  <Card className="transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardHeader className="space-y-4">
                      <div className="space-y-2">
                        <CardTitle className="text-xl font-bold text-primary flex items-center justify-between">
                          {exp.title}
                          <span className="text-sm font-normal text-muted-foreground flex items-center gap-1">
                            <Calendar size={14} className="text-primary" />
                            {exp.duration}
                          </span>
                        </CardTitle>
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Briefcase size={14} className="text-primary" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span key={i} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <CheckCircle2 size={16} className="mt-1 text-primary" />
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
