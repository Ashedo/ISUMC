import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>

      {/* Minimalist Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
        {/* Simple badge */}
        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
          Iraq's First Medical Education Platform
        </div>

        {/* Clean title */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Welcome to Iraq's First
          <br />
          <span className="text-blue-600">Medical Education Platform</span>
        </h1>

        {/* Simple subtitle */}
        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Advancing healthcare excellence through innovative medical education.
        </p>

        {/* Clean CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
          >
            Explore Courses
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
          >
            Get Started
          </Button>
        </div>

        {/* Simple stats */}
        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Medical Students</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Healthcare Educators</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">6</div>
            <div className="text-sm text-gray-600">Medical Specialties</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;