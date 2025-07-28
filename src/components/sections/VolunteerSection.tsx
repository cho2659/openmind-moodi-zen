import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, BookOpen, Award } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface VolunteerSectionProps {
  onVolunteerClick?: () => void;
}

const VolunteerSection = ({ onVolunteerClick }: VolunteerSectionProps) => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
    setIsMenuOpen(false);
  };

  const handleVolunteerClick = () => {
    navigate("/volunteer");
  };
  
  const opportunities = [
    {
      icon: Users,
      title: "Node Operator",
      description: "Help maintain a safe and fast AI mental health model by running a volunteer node.",
    },
    {
      icon: Heart,
      title: "Community Support",
      description: "Join our community of volunteers making mental health accessible to everyone.",
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Get recognized for your contributions to mental health advocacy.",
    },
    {
      icon: BookOpen,
      title: "Learning",
      description: "Learn about AI, mental health, and distributed computing systems.",
    }
  ];

  const benefits = [
    "Make a meaningful impact in mental health advocacy",
    "Choose how much computer resources to use when volunteering",
    "Join a global community of like-minded volunteers",
    "Learn valuable skills in AI and distributed systems",
    "Help make mental health support more accessible worldwide"
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
            more accessible and impactful for everyone. Making it safer and more faster.
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
            </Card>
          ))}
        </div>

        {/* Why Volunteer Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Why Volunteer with OpenMind?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              By being a volunteer, you can help make mental health support more accessible and impactful for everyone.
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
                Make a difference with your own hands. 
                Become part of our mission to democratize mental health support.
              </p>
              <Button variant="glass-primary" onClick={handleVolunteerClick} className="w-full">
                Apply to Volunteer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VolunteerSection;