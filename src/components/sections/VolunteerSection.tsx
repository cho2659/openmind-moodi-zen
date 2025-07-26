import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, BookOpen, Award } from "lucide-react";

const VolunteerSection = () => {
  const opportunities = [
    {
      icon: Heart,
      title: "Peer Support Specialist",
      description: "Provide guidance and share your recovery journey with others who need support.",
      commitment: "4-6 hours/week"
    },
    {
      icon: Users,
      title: "Community Moderator",
      description: "Help maintain a safe and supportive environment in our community forums.",
      commitment: "2-4 hours/week"
    },
    {
      icon: BookOpen,
      title: "Content Reviewer",
      description: "Review and improve mental health resources and educational materials.",
      commitment: "3-5 hours/week"
    },
    {
      icon: Award,
      title: "Mentor",
      description: "Guide new users through their first steps on their mental health journey.",
      commitment: "5-8 hours/week"
    }
  ];

  const benefits = [
    "Flexible scheduling that works with your life",
    "Comprehensive training and ongoing support", 
    "Connect with a community of like-minded individuals",
    "Make a meaningful impact in mental health advocacy",
    "Professional development opportunities",
    "Recognition and certification programs"
  ];

  return (
    <section id="volunteer" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Be a <span className="bg-gradient-primary bg-clip-text text-transparent">Volunteer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join our community of dedicated volunteers helping to make mental health support 
            more accessible and impactful for everyone. Your experience and compassion can 
            make a real difference.
          </p>
        </div>

        {/* Volunteer Opportunities */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card 
              key={index}
              className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6 hover:shadow-primary-glow/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <opportunity.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{opportunity.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{opportunity.description}</p>
              <div className="bg-primary/10 rounded-lg px-3 py-1">
                <p className="text-primary text-xs font-medium">{opportunity.commitment}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Why Volunteer Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Why Volunteer with OpenMind?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Your lived experience and desire to help others can be powerful tools for healing. 
              As a volunteer, you'll not only support others but also continue your own growth 
              and recovery journey.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <p className="text-muted-foreground">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-glass/40 backdrop-blur-sm border border-glass-border/30 rounded-2xl p-8 shadow-glass">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-semibold mb-4">Join Our Community</h4>
              <p className="text-muted-foreground mb-6">
                Over 500+ volunteers worldwide are already making a difference. 
                Become part of our mission to democratize mental health support.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Active Volunteers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
              
              <Button variant="glass-primary" className="w-full">
                Apply to Volunteer
              </Button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-glass/60 backdrop-blur-sm border border-glass-border/30 rounded-2xl p-8 shadow-glass">
          <h3 className="text-2xl font-semibold mb-4">Ready to Make a Difference?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you have 2 hours a week or 10, there's a volunteer opportunity that fits your schedule and interests. 
            Start your application today and join our mission to support mental health for all.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="glass-primary" size="lg">
              Start Application
            </Button>
            <Button variant="glass-outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;