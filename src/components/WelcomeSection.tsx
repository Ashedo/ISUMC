import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const WelcomeSection = () => {
  return (
    <section id="welcome" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Welcome Message
            </h2>
          </div>

          <Card className="bg-gradient-section border-0 shadow-elevated">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center shadow-card">
                    <Quote className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>

                {/* Message Content */}
                <div className="flex-1">
                  <div className="mb-6">
                    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
                      It is with great honor and excitement that I welcome you to the First Iraq Medical 
                      Education Conference (IMEConf 2025). This historic gathering represents a pivotal 
                      moment in our nation's commitment to advancing medical education excellence.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                      As we convene in the sacred city of Karbala, we bring together the brightest minds 
                      in medical education from across Iraq and beyond. This conference serves as a 
                      platform for sharing innovative teaching methodologies, fostering meaningful 
                      collaborations, and establishing new standards for medical education in our region.
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Together, we will shape the future of medical education, ensuring that Iraq's 
                      healthcare professionals are equipped with the knowledge, skills, and vision 
                      needed to serve our communities with excellence and compassion.
                    </p>
                  </div>

                  {/* Signature Section */}
                  <div className="border-t border-border pt-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground mb-1">
                          Prof. [Conference Chair Name]
                        </h4>
                        <p className="text-muted-foreground">
                          Dean of Medical Education
                        </p>
                        <p className="text-muted-foreground">
                          Al-Sibtain University
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="w-32 h-16 bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-sm text-muted-foreground">Signature</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* University Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-card border-border shadow-card hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">A</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Al-Sibtain University</h3>
                <p className="text-sm text-muted-foreground">
                  Leading institution in medical education and healthcare research in Iraq
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">K</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Karbala, Iraq</h3>
                <p className="text-sm text-muted-foreground">
                  Historic and sacred city, perfect setting for academic excellence
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-card hover:shadow-elevated transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">First of Its Kind</h3>
                <p className="text-sm text-muted-foreground">
                  Inaugural medical education conference in Iraq, making history
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;