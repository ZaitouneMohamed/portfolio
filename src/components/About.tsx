import { Card } from '@/components/ui/card';
import { Code2, Rocket, Brain, Users } from 'lucide-react';

const About = () => {
  const techStack = {
    backend: ['Laravel', 'PHP 8.x', 'Clean Architecture', 'REST API'],
    frontend: ['Vue.js 3', 'React', 'Tailwind CSS', 'Livewire'],
    database: ['MySQL', 'PostgreSQL', 'Query Optimization'],
    devOps: ['Docker', 'Linux', 'Git', 'Microservices']
  };

  return (
    <section id="about" className="section py-20 bg-gradient-to-b from-background to-accent/10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="space-y-2 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold animate-on-scroll opacity-0" 
              style={{ transform: 'translateY(20px)', transition: 'all 0.5s ease-out' }}>
            About Me
          </h2>
          <p className="text-muted-foreground animate-on-scroll opacity-0" 
             style={{ transform: 'translateY(20px)', transition: 'all 0.5s ease-out', animationDelay: '0.1s' }}>
            Passionate Full Stack Developer
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 animate-on-scroll opacity-0" 
               style={{ transform: 'translateX(-50px)', transition: 'all 0.5s ease-out', animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed">
              I'm a Full Stack Web Developer passionate about creating efficient and scalable web solutions. 
              I specialize in building robust applications by combining Laravel with modern JavaScript frameworks.
            </p>
            <p className="text-lg leading-relaxed">
              What drives me is the pursuit of clean, efficient, and maintainable code. I'm committed to designing 
              scalable solutions that solve real-world problems while embracing DevOps practices and automation.
            </p>
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-semibold text-primary">What Motivates Me</h3>
              <ul className="grid gap-3">
                {[
                  "Writing clean, efficient, and maintainable code",
                  "Designing scalable solutions for real-world problems",
                  "Embracing DevOps practices and automation",
                  "Continuous learning and technology watch"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-primary mb-4 animate-on-scroll opacity-0"
                style={{ transform: 'translateY(20px)', transition: 'all 0.5s ease-out', animationDelay: '0.3s' }}>
              Technical Stack
            </h3>
            
            <div className="grid gap-4">
              {Object.entries(techStack).map(([category, technologies], index) => (
                <Card key={category} 
                      className="p-4 animate-on-scroll opacity-0" 
                      style={{ 
                        transform: 'translateY(20px)', 
                        transition: 'all 0.5s ease-out', 
                        animationDelay: `${0.4 + index * 0.1}s` 
                      }}>
                  <h4 className="text-lg font-medium capitalize mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span key={tech} 
                            className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { icon: Code2, title: 'Projects', value: '10+' },
                { icon: Brain, title: 'Experience', value: '2+ Years' },
                { icon: Rocket, title: 'Solutions', value: '100%' }
              ].map((item, index) => (
                <Card key={index} 
                      className="p-4 text-center animate-on-scroll opacity-0" 
                      style={{ 
                        transform: 'translateY(20px)', 
                        transition: 'all 0.5s ease-out', 
                        animationDelay: `${0.8 + index * 0.1}s` 
                      }}>
                  <item.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <h3 className="text-2xl font-bold">{item.value}</h3>
                  <p className="text-muted-foreground text-sm">{item.title}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-on-scroll opacity-0"
             style={{ transform: 'translateY(20px)', transition: 'all 0.5s ease-out', animationDelay: '1s' }}>
          <p className="text-muted-foreground">
            Let's connect! I'm open to opportunities where I can contribute to innovative web development projects.
          </p>
          <a href="mailto:mohamedztn3@gmail.com" 
             className="text-primary hover:underline inline-block mt-2">
            mohamedztn3@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
