import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Clean gradient background with subtle dotted pattern (no rectangles) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-academic-blue-light to-white" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "url( data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill='%23224466'%3E%3Ccircle cx='2' cy='2' r='1.5'/%3E%3C/g%3E%3C/svg%3E )",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-academic-blue-light text-academic-navy px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-card">
          <span className="w-2 h-2 rounded-full bg-academic-gold" />
          Join the IMEConf community
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-academic-navy mb-4 leading-tight">
          Join the International Association for Health Professions Education
          <span className="block text-academic-blue">as a member today</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Connect, grow, and inspire with Iraq’s first medical education platform.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-base shadow-elevated">
            Become a member
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-academic-blue-light px-8 py-6 text-base">
            Find out more
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          {[{label:"Medical Students",value:"500+"},{label:"Healthcare Educators",value:"50+"},{label:"Medical Specialties",value:"6"}].map((s)=> (
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