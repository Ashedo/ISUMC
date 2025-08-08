import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, UserRound, TrendingUp, Award, Globe2, BookOpenText, BookOpen } from "lucide-react";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const NewsGridSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Revolutionary Teaching Methods Transform Medical Education",
      excerpt: "Discover how innovative digital learning platforms and VR simulations are revolutionizing the way medical students learn and practice.",
      image: news1,
      category: "Innovation",
      date: "January 15, 2025",
      author: "Dr. Sarah Ahmed",
      readTime: "5 min read",
      trending: true,
      icon: <TrendingUp className="w-4 h-4" />,
      gradient: "from-academic-purple/20 to-academic-blue/20"
    },
    {
      id: 2,
      title: "Breakthrough Research in Medical Education Methodologies",
      excerpt: "Latest research findings reveal new approaches to clinical training that improve student outcomes and patient safety.",
      image: news2,
      category: "Research",
      date: "January 12, 2025",
      author: "Prof. Mohammed Hassan",
      readTime: "7 min read",
      trending: false,
      icon: <Award className="w-4 h-4" />,
      gradient: "from-academic-emerald/20 to-academic-blue/20"
    },
    {
      id: 3,
      title: "Global Collaboration in Medical Education Reaches New Heights",
      excerpt: "International partnerships are creating unprecedented opportunities for knowledge sharing and collaborative learning.",
      image: news3,
      category: "Global",
      date: "January 10, 2025",
      author: "Dr. Fatima Al-Zahra",
      readTime: "6 min read",
      trending: true,
      icon: <Globe2 className="w-4 h-4" />,
      gradient: "from-academic-gold/20 to-academic-blue/20"
    }
  ];

  const categoryColors = {
    "Innovation": "bg-academic-purple text-white",
    "Research": "bg-academic-emerald text-white", 
    "Global": "bg-academic-gold text-white"
  };

  return (
    <section className="py-20 bg-gradient-news relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23214494' fill-opacity='0.1'%3E%3Ccircle cx='15' cy='15' r='2'/%3E%3Ccircle cx='45' cy='45' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-2 rounded-full mb-6 shadow-glow">
            <BookOpenText className="w-5 h-5" />
            <span className="font-semibold">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Medical Education News
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest developments, research breakthroughs, and innovations 
            shaping the future of medical education worldwide.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card 
              key={item.id}
              className={`group bg-gradient-card border-0 shadow-news hover:shadow-glow transition-all duration-500 hover:-translate-y-3 animate-fade-in overflow-hidden ${
                index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                    index === 0 ? 'h-64 lg:h-80' : 'h-48'
                  }`}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${categoryColors[item.category]} shadow-elevated`}>
                    <span className="mr-1">{item.icon}</span>
                    {item.category}
                  </Badge>
                </div>

                {/* Trending Badge */}
                {item.trending && (
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-accent text-academic-navy shadow-elevated animate-pulse-glow">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Trending
                    </Badge>
                  </div>
                )}

                {/* Read More Overlay */}
                <div className="absolute inset-0 bg-academic-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-gradient-accent hover:bg-academic-gold text-academic-navy font-semibold shadow-elevated transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              <CardContent className={`p-6 ${index === 0 ? 'lg:p-8' : ''}`}>
                {/* Meta Information */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UserRound className="w-4 h-4" />
                    <span>{item.author}</span>
                  </div>
                  <span className="text-primary font-medium">{item.readTime}</span>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300 ${
                  index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className={`text-muted-foreground leading-relaxed mb-4 ${
                  index === 0 ? 'text-lg' : 'text-base'
                }`}>
                  {item.excerpt}
                </p>

                {/* Read More Link */}
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-hover font-semibold group/btn"
                >
                  Continue Reading
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All News */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground font-semibold px-8 py-4 shadow-elevated hover:shadow-glow transition-all duration-300 hover:scale-105"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            View All News & Updates
          </Button>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Published Articles", value: "150+", icon: <BookOpenText className="w-6 h-6" /> },
            { label: "Research Papers", value: "85+", icon: <Award className="w-6 h-6" /> },
            { label: "Global Contributors", value: "50+", icon: <Globe2 className="w-6 h-6" /> },
            { label: "Monthly Readers", value: "10K+", icon: <TrendingUp className="w-6 h-6" /> }
          ].map((stat, index) => (
            <Card key={index} className="bg-background/80 backdrop-blur-sm border-border shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 text-primary-foreground">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGridSection;