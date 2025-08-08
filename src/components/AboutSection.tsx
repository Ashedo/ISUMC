import { Card, CardContent } from "@/components/ui/card";
import { Users2, GraduationCap, Microscope, Globe2 } from "lucide-react";
import IconBadge from "@/components/IconBadge";

const AboutSection = () => {
  const highlights = [
    { icon: <GraduationCap className="w-7 h-7" />, title: "Educational Excellence", description: "Advancing medical education standards across Iraq and the region" },
    { icon: <Users2 className="w-7 h-7" />, title: "Expert Network", description: "Connecting medical educators, students, and healthcare professionals" },
    { icon: <Microscope className="w-7 h-7" />, title: "Research Focus", description: "Promoting innovative research in medical education methodologies" },
    { icon: <Globe2 className="w-7 h-7" />, title: "Global Standards", description: "Implementing international best practices in medical education" }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About IMEConf 2025
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            The First Iraq Medical Education Conference represents a historic milestone in advancing 
            medical education across Iraq and the broader Middle East region. Hosted by the prestigious 
            Al-Sibtain University in the holy city of Karbala, this inaugural conference brings together 
            distinguished medical educators, innovative researchers, dedicated students, and healthcare 
            professionals.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our conference focuses on enhancing educational quality, bridging academic gaps, supporting 
            innovation in medical research, and promoting meaningful collaboration within the medical 
            education community. Join us as we shape the future of medical education in Iraq and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 bg-card border-border">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  <IconBadge variant="muted">{highlight.icon}</IconBadge>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-academic-blue-light rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Conference Themes & Fields
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our comprehensive program covers multiple disciplines and innovative approaches 
                to medical education, ensuring relevance for all healthcare professionals.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">Medicine</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">Dentistry</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">Nursing</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">Pharmacy</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">Public Health</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                    <span className="text-foreground">Medical Technology</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-xl p-6 shadow-card">
              <h4 className="text-xl font-semibold text-foreground mb-4">Conference Statistics</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Expected Participants</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3</div>
                  <div className="text-sm text-muted-foreground">Conference Days</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Speakers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-sm text-muted-foreground">Medical Fields</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;