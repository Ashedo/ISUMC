import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram, SendHorizonal } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Address",
      details: [
        "Al-Subtain University of Medical Sciences",
        "International Branch of Tehran University of Medical Sciences",
        "Karbala, Iraq"
      ]
    },
    {
      icon: <Mail className="w-5 h-5 text-primary" />,
      title: "Email",
      details: [
        "isumec2025@sums.edu.iq"
      ]
    },
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Phone",
      details: [
        "+964 787 5729 523"
      ]
    }
  ];

  const socialMedia = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook", color: "hover:text-blue-600" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", color: "hover:text-blue-400" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", color: "hover:text-blue-700" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram", color: "hover:text-pink-600" }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about ISUMEC 2025? We're here to help. Get in touch with our organizing committee for any inquiries about registration, abstracts, or the conference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-background border-border shadow-card hover:shadow-elevated transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-card flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media */}
            <Card className="bg-background border-border shadow-card mt-6">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-4">Follow Us on Social Media</h4>
                <div className="flex space-x-4">
                  {socialMedia.map((social, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-card ${social.color}`}
                      title={social.name}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Stay updated with the latest conference news and announcements
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-background border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <SendHorizonal className="w-6 h-6 text-primary mr-3" />
                  <h3 className="text-2xl font-semibold text-foreground">
                    Send us a Message
                  </h3>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="contactName">Name *</Label>
                      <Input id="contactName" placeholder="Your full name" className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="contactEmail">Email *</Label>
                      <Input id="contactEmail" type="email" placeholder="your.email@example.com" className="mt-1" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="contactSubject">Subject *</Label>
                    <Input id="contactSubject" placeholder="What is your message about?" className="mt-1" />
                  </div>

                  <div>
                    <Label htmlFor="contactMessage">Message *</Label>
                    <Textarea 
                      id="contactMessage" 
                      placeholder="Tell us how we can help you..."
                      className="mt-1"
                      rows={6}
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" id="newsletter" className="mt-1" />
                    <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                      Subscribe to our newsletter for conference updates and medical education news
                    </label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-semibold py-3 shadow-elevated"
                  >
                    <SendHorizonal className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <Card className="bg-background border-border shadow-card">
          <CardContent className="p-0">
            <div className="h-64 md:h-96 rounded-lg overflow-hidden">
              <iframe
                title="Google Map - Al Subtain University"
                src="https://maps.google.com/maps?q=Al%20Subtain%20University%20Karbala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="p-4 border-t border-border text-sm">
              <a
                href="https://maps.app.goo.gl/hJQWioaGfKsLjiKs6"
                target="_blank"
                rel="noreferrer"
                className="underline text-primary"
              >
                Open in Google Maps
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;