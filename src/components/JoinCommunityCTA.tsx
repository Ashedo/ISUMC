import { Button } from "@/components/ui/button";

const JoinCommunityCTA = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-academic-blue-light to-white overflow-hidden">
      {/* Wave shape */}
      <svg className="absolute top-0 left-0 w-full" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 60L60 56.7C120 53 240 47 360 39.3C480 31 600 21 720 30C840 39 960 67 1080 76C1200 85 1320 75 1380 70L1440 65V0H0V60Z" fill="rgba(33,68,148,0.06)" />
      </svg>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-academic-navy mb-3">Join the global online community</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Members-only communities, special interest groups, networking, and knowledge sharing.
        </p>
        <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:bg-primary-hover px-8 py-6">Become a member today</Button>
      </div>
    </section>
  );
};

export default JoinCommunityCTA;


