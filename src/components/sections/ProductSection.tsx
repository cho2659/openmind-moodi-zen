import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Brain, Shield, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const navigate = useNavigate();
  
  const handleTryMoodi = () => {
    navigate("/chat");
  };
  
  const features = [
    {
      icon: MessageCircle,
      title: "AI Counseling Sessions",
      description: "Engage in meaningful conversations with our AI counselor trained in various therapeutic approaches."
    },
    {
      icon: Brain,
      title: "Intelligent Understanding",
      description: "Advanced AI that adapts to your emotional state and provides personalized support."
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "Your conversations are protected with end-to-end encryption and strict privacy controls."
    },
    {
      icon: Heart,
      title: "24/7 Support",
      description: "Get mental health support whenever you need it, day or night."
    }
  ];

  return (
    <section id="product" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="bg-gradient-primary bg-clip-text text-transparent">MOO:DI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your personal AI mental health companion, designed to provide needed supports.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6 hover:shadow-primary-glow/20 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Product Demo Section */}
        <div className="bg-glass/40 backdrop-blur-sm border border-glass-border/30 rounded-2xl p-8 md:p-12 shadow-glass mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-semibold mb-6">Experience MOO:DI in Action</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Intelligent conversation flow that adapts to your emotional state</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Understanding your region's culture and language for better support</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Personalized coping strategies and actionable insights</p>
                </div>
              </div>
              <Button variant="glass-primary" className="mt-6" onClick={handleTryMoodi}>
                Try moodi Now
              </Button>
            </div>
            
            <div className="bg-gradient-subtle rounded-xl p-6 border border-glass-border/20">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-primary font-medium">MOO:DI</p>
                  <p className="text-foreground mt-1">Hi there! I'm here to listen and support you. How are you feeling today?</p>
                </div>
                <div className="bg-glass/60 rounded-lg p-4 ml-8">
                  <p className="text-sm text-muted-foreground font-medium">You</p>
                  <p className="text-foreground mt-1">I've been feeling overwhelmed with work lately...</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-primary font-medium">MOO:DI</p>
                  <p className="text-foreground mt-1">I understand how work stress can feel overwhelming. Let's explore some strategies that might help you feel more in control...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;