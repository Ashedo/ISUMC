import { Card, CardContent } from "@/components/ui/card";
import { Users, Sprout, Sparkles } from "lucide-react";

const GuidingPrinciples = () => {
  const principles = [
    {
      icon: <Users className="w-6 h-6" />, 
      title: "Connect",
      description: "Join and activate global communities of practice together with IMEConf."
    },
    {
      icon: <Sprout className="w-6 h-6" />, 
      title: "Grow",
      description: "Develop the capacity to learn, teach, research, reach and lead."
    },
    {
      icon: <Sparkles className="w-6 h-6" />, 
      title: "Inspire",
      description: "Celebrate exemplars and enable culture that inspires excellent professional education."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-10">Guiding Principles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <Card key={i} className="border-border shadow-card hover:shadow-elevated transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-academic-blue-light text-academic-navy flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-muted-foreground">{p.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;


