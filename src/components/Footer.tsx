import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Mail, Phone, CalendarDays, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Committees", href: "#committees" },
    { label: "Program", href: "#program" },
    { label: "Speakers", href: "#speakers" },
    { label: "Important Dates", href: "#dates" },
    { label: "Abstract Submission", href: "#submission" },
    { label: "Contact Us", href: "#contact" }
  ];

  const importantInfo = [
    { label: "Conference Dates", value: "October 25–27, 2025" },
    { label: "Location", value: "Karbala, Iraq" },
    { label: "Organizer", value: "Al-Subtain University of Medical Sciences" },
    { label: "International Partner", value: "Tehran University of Medical Sciences (International Branch)" }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, name: "Instagram" }
  ];

  return (
    <footer className="bg-academic-navy text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated with ISUMEC 2025</h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Subscribe for updates, speaker announcements, and important deadlines.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-academic-gold hover:bg-academic-gold/90 text-academic-navy font-semibold whitespace-nowrap">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Conference Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-academic-gold rounded-full flex items-center justify-center">
                <span className="text-academic-navy font-bold text-lg">IM</span>
              </div>
              <div>
                <h4 className="font-bold text-lg">ISUMEC 2025</h4>
                <p className="text-sm text-primary-foreground/70">Al-Subtain University of Medical Sciences</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">The First International Subtain University Medical Education Conference (ISUMEC 2025).</p>
            <div className="space-y-2">
              {importantInfo.map((info, index) => (
                <div key={index} className="flex items-center text-sm">
                  <div className="w-2 h-2 bg-academic-gold rounded-full mr-3"></div>
                  <span className="text-primary-foreground/70">{info.label}:</span>
                  <span className="ml-2 text-primary-foreground">{info.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => document.getElementById(link.href.slice(1))?.scrollIntoView({ behavior: "smooth" })}
                  className="block text-primary-foreground/80 hover:text-academic-gold transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-academic-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground font-medium">Al-Sibtain University</p>
                  <p className="text-primary-foreground/70 text-sm">Karbala, Iraq</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-academic-gold flex-shrink-0" />
                <p className="text-primary-foreground/80">isumec2025@sums.edu.iq</p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-academic-gold flex-shrink-0" />
                <p className="text-primary-foreground/80">+964 787 5729 523</p>
              </div>
              <div className="flex items-center space-x-3">
                <CalendarDays className="w-5 h-5 text-academic-gold flex-shrink-0" />
                <p className="text-primary-foreground/80">October 25–27, 2025</p>
              </div>
            </div>
          </div>

          {/* Social Media & Updates */}
          <div>
            <h4 className="font-bold text-lg mb-6">Follow Us</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Stay connected for the latest updates and medical education insights.
            </p>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social, index) => (
                <button
                  key={index}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-academic-gold hover:text-academic-navy rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                  title={social.name}
                >
                  {social.icon}
                </button>
              ))}
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-4">
              <h5 className="font-semibold text-academic-gold mb-2">Important Reminder</h5>
              <p className="text-sm text-primary-foreground/80">
                Abstract submission deadline: August 31, 2025
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-primary-foreground/70">
                <p>&copy; 2024 ISUMEC 2025. All Rights Reserved. IT Department - Al Subtain University.</p>
              </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/70">
              <button className="hover:text-academic-gold transition-colors duration-300">
                Privacy Policy
              </button>
              <button className="hover:text-academic-gold transition-colors duration-300">
                Terms of Service
              </button>
              <button className="hover:text-academic-gold transition-colors duration-300">
                Code of Conduct
              </button>
            </div>
          </div>
            <div className="mt-4 pt-4 border-t border-primary-foreground/10 text-center">
              <p className="text-sm text-primary-foreground/60">Al Subtain University - Karbala, Iraq</p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;