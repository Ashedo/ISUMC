import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/Hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="IMEConf hero" className="w-full h-full object-cover" />
      </div>
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/10 to-white" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-academic-blue-light text-academic-navy px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-card">
          <span className="w-2 h-2 rounded-full bg-academic-gold" />
          The First International Subtain University Medical Education Conference
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-academic-navy mb-4 leading-tight">
          ISUMEC 2025
          <span className="block text-academic-blue">Karbala, Iraq | October 25-27, 2025</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Hosted by Al-Subtain University of Medical Sciences, the International Branch of Tehran University of Medical Sciences. A landmark event positioning Iraq as a regional hub for medical education innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-base shadow-elevated">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-academic-blue-light px-8 py-6 text-base">
            Abstract Submission
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[{label:"Days",value:"074"},{label:"Hours",value:"14"},{label:"Minutes",value:"56"},{label:"Seconds",value:"56"}].map((s)=> (
            <div key={s.label}>
              <div className="text-3xl font-bold text-academic-navy">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;