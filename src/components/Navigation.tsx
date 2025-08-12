import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe, Mail, CalendarDays, Phone } from "lucide-react";
import mainLogo from "@/assets/Logo (5).png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Committees", href: "#committees" },
    { label: "Submission", href: "#submission" },
    { label: "Program", href: "#program" },
    { label: "Speakers", href: "#speakers" },
    { label: "Contact Us", href: "#contact" },
    { label: "Registration", href: "/registration" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
    }`}>
      {/* Top utility bar */}
      <div className="hidden md:block border-b border-border/60 bg-academic-blue-light">
        <div className="container mx-auto px-4 h-8 flex items-center justify-between text-xs text-foreground/70">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1"><CalendarDays className="w-3.5 h-3.5" /> Oct 25–27, 2025</span>
            <span className="inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> +964 xxx xxx xxx</span>
            <span className="inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> info@imeconf2025.org</span>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" className="h-6 px-2 text-foreground hover:text-academic-gold">Join</Button>
            <Button variant="ghost" size="sm" className="h-6 px-2 text-foreground hover:text-academic-gold">Events</Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={mainLogo} alt="IMEConf logo" className="w-10 h-10 object-contain" />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-academic-navy">ISUMEC 2025</h1>
              <p className="text-xs text-foreground/70">Karbala, Iraq | Oct 25–27, 2025</p>
            </div>
          </div>

          {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="text-foreground hover:text-academic-gold hover:bg-academic-blue-light transition-colors font-medium"
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.assign(item.href);
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex items-center space-x-1 text-foreground hover:text-primary"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === "en" ? "العربية" : "English"}</span>
            </Button>

            {/* Login/Register Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" className="text-foreground hover:text-academic-gold font-medium">
                Login
              </Button>
              <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-lg font-medium" onClick={() => window.location.assign('/registration')}>
                Register
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-slide-in">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium"
                  onClick={() => {
                    if (item.href.startsWith('#')) {
                      document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      window.location.assign(item.href);
                    }
                    setIsMenuOpen(false);
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <div className="pt-2 border-t border-border">
                <Button
                  variant="ghost"
                  className="w-full justify-start flex items-center space-x-2"
                  onClick={() => setLanguage(language === "en" ? "ar" : "en")}
                >
                  <Globe className="w-4 h-4" />
                  <span>{language === "en" ? "العربية" : "English"}</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;