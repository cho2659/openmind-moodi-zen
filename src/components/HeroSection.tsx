import { Button } from "@/components/ui/button";
import { Heart, Brain, Users } from "lucide-react";

interface HeroSectionProps {
  onGetStarted: () => void;
}

const HeroSection = ({ onGetStarted }: HeroSectionProps) => {
  const scrollToProduct = () => {
    document.getElementById('product')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start' 
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16">
        <div className="text-center">
          {/* Main heading */}
          <div className="mb-8 animate-fade-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                OpenMind
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-4">
              AI-Powered Mental Health Counseling
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get help by talking to our AI mental health therapist.
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {[
              {
                icon: Brain,
                title: "AI-Powered",
                description: "Advanced language model trained in mental health support"
              },
              {
                icon: Heart,
                title: "Compassionate",
                description: "Empathetic responses tailored to your mental health needs"
              },
              {
                icon: Users,
                title: "Support",
                description: "Always available when you need someone to talk to"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-glass/60 backdrop-blur-sm border border-glass-border/30 rounded-xl p-6 shadow-glass hover:shadow-primary-glow/20 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="glass-primary" 
              size="lg"
              onClick={onGetStarted}
              className="transform hover:scale-105 transition-all duration-300"
            >
              Start Your Journey
            </Button>
            <Button 
              variant="glass-outline" 
              size="lg"
              onClick={scrollToProduct}
              className="transform hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="text-2xl font-bold">✓ Trusted training data</div>
              <div className="text-2xl font-bold">✓ Secure & Private</div>
              <div className="text-2xl font-bold">✓ Advanced AI in mental health</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;