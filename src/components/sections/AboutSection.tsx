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
      description: "Using decentralized technology, we ensure your data is secure and private."
    },
    {
      icon: Zap,
      title: "Instant Support",
      description: "Get help when you need it most, 24 hours a day, 7 days a week."
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
          We are a non-profit organization that makes custom mental health AI models by your region. Models are trained based on open TREC CDS, TREC CT tracks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold">Our Mission</h3>
            <p className="text-lg text-muted-foreground">
            Our mission is to make support more accessible and affordable in mental health clinics.
            By making custom mental health AI models by your region, we can provide more advanced support to more people.
            Unlike other AI models, our models provide more advanced support to more people by making the model aim to mental health.
            </p>
            <div className="bg-glass/60 backdrop-blur-sm border border-glass-border/30 rounded-xl p-6 shadow-glass">
              <blockquote className="text-lg italic text-foreground/90">
                "Make mental health support more accessible in mental health clinics."
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
                <h4 className="text-2xl font-semibold mb-2">MOO:DI Technology</h4>
                <p className="text-muted-foreground">
                  Powered by our proprietary emotional intelligence engine, 
                  MOO:DI understands context, tone, and emotional nuance to provide 
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