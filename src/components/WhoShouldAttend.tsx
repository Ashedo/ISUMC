import { Card, CardContent } from "@/components/ui/card";
import { UserRoundCheck, GraduationCap, BookOpenText, UsersRound, Target, Stethoscope } from "lucide-react";
import IconBadge from "@/components/IconBadge";

const WhoShouldAttend = () => {
  const attendees = [
    {
      icon: <UserRoundCheck className="w-7 h-7" />,
      title: "Medical Educators & Faculty",
      description: "Professors, associate professors, and teaching staff from medical schools and universities",
      count: "200+"
    },
    {
      icon: <GraduationCap className="w-7 h-7" />,
      title: "Health Sciences Students",
      description: "Medical, dental, nursing, pharmacy, and public health students at all levels",
      count: "150+"
    },
    {
      icon: <BookOpenText className="w-7 h-7" />,
      title: "Medical Education Professionals",
      description: "Education specialists, curriculum developers, and instructional designers",
      count: "80+"
    },
    {
      icon: <Target className="w-7 h-7" />,
      title: "Curriculum Developers",
      description: "Experts in designing and implementing medical education curricula and programs",
      count: "50+"
    },
    {
      icon: <UsersRound className="w-7 h-7" />,
      title: "Academic Leaders",
      description: "Deans, department heads, and academic administrators from healthcare institutions",
      count: "40+"
    },
    {
      icon: <Stethoscope className="w-7 h-7" />,
      title: "Healthcare Professionals",
      description: "Practicing physicians, nurses, and healthcare providers interested in education",
      count: "100+"
    }
  ];

  const benefits = [
    "Network with leading medical education experts",
    "Learn innovative teaching methodologies",
    "Share research and best practices",
    "Participate in hands-on workshops",
    "Earn continuing education credits",
    "Access to conference proceedings and materials"
  ];

  return (
    <section id="attend" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Who Should Attend?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            ISUMEC 2025 welcomes medical educators, policymakers, healthcare professionals, students, 
            accreditation representatives, and medical education teams across disciplines and levels.
          </p>
        </div>

        {/* Target Audience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {attendees.map((attendee, index) => (
            <Card 
              key={index} 
              className="group bg-card border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    <IconBadge>{attendee.icon}</IconBadge>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-primary">{attendee.count}</span>
                    <p className="text-xs text-muted-foreground">Expected</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3 leading-tight">
                  {attendee.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {attendee.description}
                </p>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">Target Group</span>
                    <div className="w-8 h-1 bg-gradient-primary rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-section rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Attend IMEConf 2025?
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                This conference offers unparalleled opportunities for professional development, 
                networking, and contributing to the advancement of medical education in Iraq.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center group">
                    <div className="w-2 h-2 bg-primary rounded-full mr-4 group-hover:scale-150 transition-transform duration-300"></div>
                    <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background rounded-xl p-8 shadow-card">
              <h4 className="text-2xl font-bold text-foreground mb-6 text-center">
                Conference Demographics
              </h4>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Medical Educators</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-muted rounded-full mr-3">
                      <div className="w-4/5 h-2 bg-gradient-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">40%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Students</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-muted rounded-full mr-3">
                      <div className="w-3/5 h-2 bg-gradient-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">30%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Healthcare Professionals</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-muted rounded-full mr-3">
                      <div className="w-1/5 h-2 bg-gradient-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">20%</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Academic Leaders</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-muted rounded-full mr-3">
                      <div className="w-1/10 h-2 bg-gradient-primary rounded-full"></div>
                    </div>
                    <span className="text-sm font-medium text-foreground">10%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoShouldAttend;