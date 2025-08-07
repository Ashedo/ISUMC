import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WelcomeSection from "@/components/WelcomeSection";
import ConferenceAims from "@/components/ConferenceAims";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import ImportantDates from "@/components/ImportantDates";
import AbstractSubmission from "@/components/AbstractSubmission";
import ContactSection from "@/components/ContactSection";
import NewsGridSection from "@/components/NewsGridSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <NewsGridSection />
      <AboutSection />
      <WelcomeSection />
      <ConferenceAims />
      <WhoShouldAttend />
      <ImportantDates />
      <AbstractSubmission />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
