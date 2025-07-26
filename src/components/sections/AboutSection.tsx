import { Card } from "@/components/ui/card";
import { Shield, Zap, Heart, Users } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every interaction is designed with empathy and understanding at its core."
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your conversations are completely confidential and securely encrypted."
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Get help when you need it most, 24 hours a day, 7 days a week."
    },
    {
      icon: Users,
      title: "Professional Backed",
      description: "Developed with input from licensed mental health professionals."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">OpenMind</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe mental health support should be accessible, immediate, and judgment-free. 
            OpenMind combines cutting-edge AI technology with evidence-based therapeutic approaches 
            to provide you with the support you deserve.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
              To democratize mental health support by providing intelligent, compassionate, 
              and accessible counseling through advanced AI technology. We're breaking down 
              barriers to mental health care, one conversation at a time.
            </p>
            <div className="bg-glass/60 backdrop-blur-sm border border-glass-border/30 rounded-xl p-6 shadow-glass">
              <blockquote className="text-lg italic text-foreground/90">
                "Mental health is not a destination, but a process. It's about how you drive, 
                not where you're going."
              </blockquote>
              <cite className="text-sm text-muted-foreground mt-2 block">— OpenMind Philosophy</cite>
            </div>
          </div>
          
          <div className="bg-glass/40 backdrop-blur-sm border border-glass-border/30 rounded-2xl p-8 shadow-glass">
            <div className="space-y-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-semibold mb-2">moodi Technology</h4>
                <p className="text-muted-foreground">
                  Powered by our proprietary emotional intelligence engine, 
                  moodi understands context, tone, and emotional nuance to provide 
                  more human-like support.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card 
              key={index}
              className="bg-glass/60 backdrop-blur-sm border-glass-border/30 p-6 hover:shadow-primary-glow/20 transition-all duration-300"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;