import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Clock, FileText, CheckCircle, MapPin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ImportantDates = () => {
  const dates = [
    {
      icon: <FileText className="w-6 h-6 text-primary" />,
      title: "Abstract Submission Opens",
      date: "January 1, 2025",
      status: "active",
      description: "Begin submitting your research abstracts"
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Abstract Submission Deadline",
      date: "August 31, 2025",
      status: "upcoming",
      description: "Final date for abstract submissions"
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Abstract Acceptance Notification",
      date: "September 30, 2025",
      status: "upcoming",
      description: "Authors will be notified of acceptance"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Early Bird Registration Ends",
      date: "September 15, 2025",
      status: "upcoming",
      description: "Last chance for discounted registration"
    },
    {
      icon: <MapPin className="w-6 h-6 text-primary" />,
      title: "Conference Begins",
      date: "October 25, 2025",
      status: "upcoming",
      description: "IMEConf 2025 officially starts in Karbala"
    }
  ];

  const conferenceInfo = [
    {
      label: "Conference Dates",
      value: "October 25–27, 2025",
      icon: <Calendar className="w-5 h-5 text-primary" />
    },
    {
      label: "Conference Venue",
      value: "Al-Sibtain University, Karbala, Iraq",
      icon: <MapPin className="w-5 h-5 text-primary" />
    },
    {
      label: "Registration Type",
      value: "Online & On-site Available",
      icon: <CheckCircle className="w-5 h-5 text-primary" />
    }
  ];

  return (
    <section id="dates" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Important Dates
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Mark your calendar with these crucial dates for IMEConf 2025. Stay informed 
            and don't miss any important deadlines.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full"></div>
          
          <div className="space-y-8">
            {dates.map((date, index) => (
              <div 
                key={index} 
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className="bg-background border-border shadow-card hover:shadow-elevated transition-all duration-300">
                    <CardContent className="p-6">
                      <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-3`}>
                        <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center shadow-card mr-3">
                          {date.icon}
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          date.status === 'active' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-academic-blue-light text-primary'
                        }`}>
                          {date.status === 'active' ? 'Active' : 'Upcoming'}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {date.title}
                      </h3>
                      <p className="text-xl font-bold text-primary mb-2">
                        {date.date}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {date.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-academic-gold rounded-full border-4 border-background shadow-card"></div>
                </div>
                
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Conference Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-background border-border shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Conference Information
              </h3>
              <div className="space-y-4">
                {conferenceInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="mt-1">{info.icon}</div>
                    <div>
                      <p className="font-medium text-foreground">{info.label}</p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-primary border-0 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary-foreground mb-4">
                Download Conference Materials
              </h3>
              <p className="text-primary-foreground/90 mb-6">
                Access our comprehensive conference brochure, abstract submission 
                guidelines, and registration information.
              </p>
              
              <div className="space-y-3">
                <Button 
                  variant="secondary" 
                  className="w-full justify-between bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/30"
                >
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Conference Brochure
                  </span>
                  <span className="text-sm">PDF</span>
                </Button>
                
                <Button 
                  variant="secondary" 
                  className="w-full justify-between bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/30"
                >
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Abstract Template
                  </span>
                  <span className="text-sm">DOCX</span>
                </Button>
                
                <Button 
                  variant="secondary" 
                  className="w-full justify-between bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground border-primary-foreground/30"
                >
                  <span className="flex items-center">
                    <Download className="w-4 h-4 mr-2" />
                    Registration Guide
                  </span>
                  <span className="text-sm">PDF</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImportantDates;