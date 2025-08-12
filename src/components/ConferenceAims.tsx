import { Card, CardContent } from "@/components/ui/card";
import { Target, Link2, Lightbulb, UsersRound, GraduationCap, Award, Sparkles, ArrowUpRight, Users } from "lucide-react";
import IconBadge from "@/components/IconBadge";

const ConferenceAims = () => {
  const aims = [
    { icon: <Target className="w-7 h-7" />, title: "Facilitate exchange of ideas and best practices", description: "Share innovations in teaching, learning, and assessment across institutions." },
    { icon: <UsersRound className="w-7 h-7" />, title: "Engage international and regional experts", description: "Gather insights on contemporary challenges and opportunities in medical education." },
    { icon: <Lightbulb className="w-7 h-7" />, title: "Promote research in medical education", description: "Enhance quality in pedagogy and assessment through evidence-based approaches." },
    { icon: <Link2 className="w-7 h-7" />, title: "Foster collaboration among institutions", description: "Strengthen partnerships in Iraq and beyond for sustained impact." },
    { icon: <GraduationCap className="w-7 h-7" />, title: "Provide professional development", description: "Offer interactive sessions and networking opportunities for educators." },
    { icon: <Award className="w-7 h-7" />, title: "Advance standards and accreditation", description: "Align with global best practices while addressing local needs." },
  ];

  return (
    <section id="aims" className="py-20 bg-academic-blue-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conference Aims
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our comprehensive objectives are designed to transform medical education in Iraq 
            and establish a foundation for continued excellence in healthcare education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aims.map((aim, index) => (
            <Card 
              key={index} 
              className="group bg-gradient-card border-0 shadow-news hover:shadow-glow transition-all duration-500 hover:-translate-y-3 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-4 right-4 w-20 h-20 border border-primary rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-academic-gold/20 rounded-full"></div>
              </div>
              
              <CardContent className="p-8 relative z-10">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-500">
                  <IconBadge size="lg" variant="primary">
                    {aim.icon}
                  </IconBadge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                  {aim.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {aim.description}
                </p>

                {/* Enhanced decorative element */}
                <div className="pt-4 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(3)].map((_, i) => (
                        <div 
                          key={i} 
                          className="w-2 h-2 bg-gradient-primary rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-125"
                          style={{ animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-semibold">Learn More</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-primary rounded-3xl p-10 md:p-16 shadow-glow relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-8 left-8 w-16 h-16 border-2 border-white rounded-full"></div>
              <div className="absolute bottom-8 right-8 w-20 h-20 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-8 h-8 border border-white rounded-full animate-pulse"></div>
            </div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground px-6 py-2 rounded-full mb-6">
                <Sparkles className="w-5 h-5" />
                <span className="font-semibold">Join the Movement</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Be Part of This Historic Initiative
              </h3>
              <p className="text-xl text-primary-foreground/95 mb-8 max-w-3xl mx-auto leading-relaxed">
                Transform medical education in Iraq and set new standards for excellence. 
                Your participation will shape the future of healthcare education in our region.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="bg-gradient-accent hover:bg-academic-gold text-academic-navy font-bold px-10 py-4 rounded-2xl transition-all duration-300 hover:scale-105 shadow-elevated text-lg">
                  <Award className="w-5 h-5 mr-2 inline" />
                  Submit Your Abstract
                </button>
                <button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground font-bold px-10 py-4 rounded-2xl border-2 border-primary-foreground/30 transition-all duration-300 hover:scale-105 text-lg">
                  <Users className="w-5 h-5 mr-2 inline" />
                  Register Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferenceAims;