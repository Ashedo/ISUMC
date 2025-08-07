import { useState, useEffect } from "react";
import { Clock, Star } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-10-25T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex items-center justify-center mt-12">
      <div className="bg-background/15 backdrop-blur-md rounded-3xl p-8 shadow-glow border border-white/20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-2 w-6 h-6 border-2 border-academic-gold rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-academic-gold rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-accent rounded-full p-3 mr-4 shadow-elevated">
              <Clock className="w-8 h-8 text-academic-navy" />
            </div>
            <div className="text-center">
              <span className="text-primary-foreground font-bold text-2xl block">Conference Countdown</span>
              <span className="text-primary-foreground/80 text-sm">October 25, 2025</span>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-6">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="text-center relative">
                <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-4 mb-3 shadow-elevated border border-white/10 relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-academic-gold/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="text-4xl md:text-5xl font-bold text-primary-foreground block relative z-10 bg-gradient-to-r from-white to-academic-gold bg-clip-text text-transparent">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                  
                  {/* Corner Decoration */}
                  <div className="absolute top-1 right-1 w-3 h-3 bg-academic-gold/30 rounded-full"></div>
                </div>
                <span className="text-primary-foreground/90 text-base font-semibold">{unit.label}</span>
                
                {/* Separator */}
                {index < timeUnits.length - 1 && (
                  <div className="absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <Star className="w-4 h-4 text-academic-gold animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-primary-foreground/80 text-sm font-medium">
              Don't miss this historic event!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;