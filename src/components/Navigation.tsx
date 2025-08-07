import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";

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
    { label: "Courses", href: "#courses" },
    { label: "Events", href: "#events" },
    { label: "Membership", href: "#membership" },
    { label: "Resources", href: "#resources" },
    { label: "About Us", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">IM</span>
            </div>
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-slate-800">Iraq Medical Education</h1>
              <p className="text-xs text-slate-600">Healthcare Excellence Platform</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                size="sm"
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 transition-colors font-medium"
                onClick={() => document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" })}
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
              <Button variant="ghost" className="text-slate-700 hover:text-blue-600 font-medium">
                Login
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg font-medium">
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
                    document.getElementById(item.href.slice(1))?.scrollIntoView({ behavior: "smooth" });
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