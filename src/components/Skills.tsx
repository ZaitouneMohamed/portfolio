import { cn } from "@/lib/utils";
import { 
  Braces, 
  Code2, 
  Database, 
  Server, 
  Layers, 
  Box, 
  Palette, 
  GitBranch,
  Container,
  Cloud,
  Figma as FigmaIcon,
  Layout,
  FileCode2,
  Cpu
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend Development",
      icon: Layout,
      description: "Building responsive and interactive user interfaces",
      skills: [
        { name: "HTML/CSS", level: 95, icon: FileCode2 },
        { name: "JavaScript", level: 90, icon: Braces },
        { name: "React.js", level: 85, icon: Code2 },
        { name: "Vue.js", level: 80, icon: Code2 },
        { name: "Tailwind CSS", level: 90, icon: Palette }
      ]
    },
    {
      category: "Backend Development",
      icon: Server,
      description: "Creating robust and scalable server-side applications",
      skills: [
        { name: "PHP/Laravel", level: 90, icon: Code2 },
        { name: "RESTful APIs", level: 85, icon: Box },
        { name: "MySQL", level: 85, icon: Database },
        { name: "PostgreSQL", level: 80, icon: Database },
        { name: "Clean Architecture", level: 85, icon: Layers }
      ]
    },
    {
      category: "DevOps & Tools",
      icon: Cpu,
      description: "Tools and technologies for development and deployment",
      skills: [
        { name: "Git/GitHub", level: 90, icon: GitBranch },
        { name: "Docker", level: 80, icon: Container },
        { name: "Linux", level: 85, icon: Server },
        { name: "Cloud Services", level: 75, icon: Cloud },
        { name: "UI/UX Design", level: 80, icon: FigmaIcon }
      ]
    }
  ];

  return (
    <section id="skills" className="section py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Technical Skills
          </h2>
          <p className="text-muted-foreground">
            Technologies and tools I work with
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} 
                  className="group relative overflow-hidden border border-border/50 bg-background/50 backdrop-blur-sm 
                           hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} 
                         className="group/skill relative bg-muted/30 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <skill.icon size={16} className="text-primary" />
                          <p className="font-medium">{skill.name}</p>
                        </div>
                        <span className="text-sm text-primary font-medium opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full bg-gradient-to-r from-primary/80 to-primary transition-all duration-500 ease-out",
                            "transform origin-left scale-x-0 group-hover/skill:scale-x-100"
                          )}
                          style={{ 
                            width: `${skill.level}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
