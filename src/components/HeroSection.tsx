import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import heroImage from "@/assets/Hero.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-white">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="ISUMEC hero" className="w-full h-full object-cover [image-rendering:high-quality]" />
      </div>
      {/* Contrast overlay for readability over image */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/20 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-card">
          <span className="w-2 h-2 rounded-full bg-academic-gold" />
          The First International Subtain University Medical Education Conference
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
          ISUMEC 2025
          <span className="block text-white/90">Karbala, Iraq | October 25-27, 2025</span>
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-3xl mx-auto">
          Hosted by Al-Subtain University of Medical Sciences, the International Branch of Tehran University of Medical Sciences. A landmark event positioning Iraq as a regional hub for medical education innovation.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground px-8 py-6 text-base shadow-elevated">
            Register Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" className="bg-academic-gold text-academic-navy hover:bg-academic-gold/90 px-8 py-6 text-base shadow-elevated">
            Abstract Submission
          </Button>
        </div>

        {/* Live Countdown */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <CountdownTimer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;