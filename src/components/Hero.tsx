import { Button } from '@/components/ui/button';
import { ArrowRight, FileText, Download, ExternalLink } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from 'react';

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/mohamed zaitoune cv.pdf';
    link.download = 'mohamed_zaitoune_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-accent/30 to-background dark:from-accent/10 dark:to-background">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-sm md:text-base text-primary font-medium tracking-wider uppercase opacity-0 animate-slide-in" 
               style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Welcome to my portfolio
            </p>
            <div className="overflow-hidden">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight opacity-0 animate-slide-in"
                  style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
                Hi, I'm <span className="text-primary">Mohamed zaitoune</span>
              </h1>
            </div>
          </div>
          
          <div className="overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground opacity-0 animate-slide-in"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              Full-stack developer
            </h2>
          </div>
          
          <div className="overflow-hidden max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-muted-foreground/90 opacity-0 animate-slide-in"
               style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              I create beautiful and functional web experiences with attention to detail and a passion for user experience.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center pt-4 opacity-0 animate-fade-in"
               style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 group text-base">
              View My Work
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" size={18} />
            </Button>
            <Button size="lg" variant="outline" 
                    className="border-primary text-primary hover:bg-primary/10 text-base">
              Contact Me
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowResume(true)}
              className="border-primary text-primary hover:bg-primary/10 text-base flex items-center gap-2"
            >
              <FileText size={18} />
              View Resume
            </Button>
          </div>
          
          <div className="flex justify-center gap-4 pt-8 opacity-0 animate-fade-in"
               style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <div className="h-2 w-2 rounded-full bg-primary/60"></div>
            <div className="h-2 w-2 rounded-full bg-primary/30"></div>
          </div>
        </div>
      </div>

      <Dialog open={showResume} onOpenChange={setShowResume}>
        <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0">
          <DialogHeader className="p-6 pb-2">
            <DialogTitle className="flex items-center justify-between">
              <span>My Resume</span>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleDownloadResume}
                  className="flex items-center gap-2"
                >
                  <Download size={16} />
                  Download PDF
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('/mohamed zaitoune cv.pdf', '_blank')}
                  className="flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  Open in New Tab
                </Button>
              </div>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full h-full p-6 pt-2">
            <iframe
              src="/mohamed zaitoune cv.pdf"
              className="w-full h-full rounded-lg border border-border"
              title="Resume PDF"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Hero;
