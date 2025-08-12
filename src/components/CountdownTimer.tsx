import { useState, useEffect } from "react";
import { Clock } from "lucide-react";

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

  const formatTwoDigits = (value: number) => String(value).padStart(2, "0").slice(-2);

  const timeUnits = [
    { label: "Days", value: formatTwoDigits(timeLeft.days) },
    { label: "Hours", value: formatTwoDigits(timeLeft.hours) },
    { label: "Minutes", value: formatTwoDigits(timeLeft.minutes) },
    { label: "Seconds", value: formatTwoDigits(timeLeft.seconds) },
  ];

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="bg-black/50 rounded-2xl p-4 md:p-6 border border-white/15 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-2 left-2 w-6 h-6 border-2 border-academic-gold rounded-full"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 bg-academic-gold rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center mb-3 text-white/85 text-sm">
            <Clock className="w-4 h-4 mr-2" />
            <span>Conference Countdown • Oct 25, 2025</span>
          </div>
          
          <div className="grid grid-cols-4 gap-2 md:gap-4 items-stretch">
            {timeUnits.map((unit, index) => (
              <div key={unit.label} className="text-center relative">
                <div className="bg-white/10 rounded-xl p-2.5 md:p-3 mb-2 border border-white/15">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-academic-gold/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <span className="text-3xl md:text-5xl font-extrabold text-white block">
                    {unit.value}
                  </span>
                  
                  {/* Corner Decoration */}
                  <div className="hidden md:block absolute top-1 right-1 w-2 h-2 bg-white/20 rounded-full"></div>
                </div>
                <span className="text-white/85 text-xs md:text-sm font-medium">{unit.label}</span>
                
                {/* Minimal vertical divider between blocks */}
                {index < timeUnits.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 w-px h-6 bg-white/20" />
                )}
              </div>
            ))}
          </div>
          
          {/* Additional Info */}
          <div className="mt-2 text-center">
            <p className="text-white/75 text-xs">Don't miss this historic event!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;