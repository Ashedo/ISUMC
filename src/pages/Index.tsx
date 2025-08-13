import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import GuidingPrinciples from "@/components/GuidingPrinciples";
import AboutSection from "@/components/AboutSection";
import WelcomeSection from "@/components/WelcomeSection";
import ConferenceAims from "@/components/ConferenceAims";
import WhoShouldAttend from "@/components/WhoShouldAttend";
import ImportantDates from "@/components/ImportantDates";
import AbstractSubmission from "@/components/AbstractSubmission";
import ContactSection from "@/components/ContactSection";
import NewsGridSection from "@/components/NewsGridSection";
import SpeakersSection from "@/components/SpeakersSection";
import Footer from "@/components/Footer";
import JoinCommunityCTA from "@/components/JoinCommunityCTA";
import FAQSection from "@/components/FAQSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GuidingPrinciples />
      <NewsGridSection />
      <AboutSection />
      <SpeakersSection />
      <WelcomeSection />
      <ConferenceAims />
      <WhoShouldAttend />
      <ImportantDates />
      <AbstractSubmission />
      <JoinCommunityCTA />
      <ContactSection />
      <FAQSection />
      {/* Placeholder anchors for navigation */}
      <div id="committees"></div>
      <div id="program"></div>
      <div id="speakers"></div>
      <Footer />
    </div>
  );
};

export default Index;
