import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Calendar, BarChart3, BookOpen } from "lucide-react";

const ProductSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "AI Counseling Sessions",
      description: "Engage in meaningful conversations with our empathetic AI counselor trained in various therapeutic approaches."
    },
    {
      icon: Calendar,
      title: "Mood Tracking",
      description: "Monitor your emotional patterns and mental health progress with intelligent insights and recommendations."
    },
    {
      icon: BarChart3,
      title: "Progress Analytics",
      description: "Visualize your mental health journey with detailed reports and milestone tracking."
    },
    {
      icon: BookOpen,
      title: "Resource Library",
      description: "Access curated mental health resources, exercises, and educational content tailored to your needs."
    }
  ];

  const testimonials = [
    {
      text: "OpenMind has been a game-changer for my mental health journey. The AI understands me better than I expected.",
      author: "Sarah K.",
      role: "Mental Health Advocate"
    },
    {
      text: "Having 24/7 support available has given me peace of mind knowing help is always just a conversation away.",
      author: "Michael R.",
      role: "Working Professional"
    },
    {
      text: "The privacy and non-judgmental nature of the platform made it easier for me to open up about my struggles.",
      author: "Jessica L.",
      role: "Student"
    }
  ];

  return (
    <section id="product" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="bg-gradient-primary bg-clip-text text-transparent">moodi</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your personal AI mental health companion, designed to provide professional-grade 
            support while maintaining the warmth and understanding you need.
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
              <h3 className="text-3xl font-semibold mb-6">Experience moodi in Action</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Intelligent conversation flow that adapts to your emotional state</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Evidence-based therapeutic techniques integrated naturally</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <p className="text-muted-foreground">Personalized coping strategies and actionable insights</p>
                </div>
              </div>
              <Button variant="glass-primary" className="mt-6">
                Try moodi Now
              </Button>
            </div>
            
            <div className="bg-gradient-subtle rounded-xl p-6 border border-glass-border/20">
              <div className="space-y-4">
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-primary font-medium">moodi</p>
                  <p className="text-foreground mt-1">Hi there! I'm here to listen and support you. How are you feeling today?</p>
                </div>
                <div className="bg-glass/60 rounded-lg p-4 ml-8">
                  <p className="text-sm text-muted-foreground font-medium">You</p>
                  <p className="text-foreground mt-1">I've been feeling overwhelmed with work lately...</p>
                </div>
                <div className="bg-primary/10 rounded-lg p-4">
                  <p className="text-sm text-primary font-medium">moodi</p>
                  <p className="text-foreground mt-1">I understand how work stress can feel overwhelming. Let's explore some strategies that might help you feel more in control...</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-semibold mb-12">What People Are Saying</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6"
            >
              <p className="text-foreground mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-semibold">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-muted-foreground text-xs">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;