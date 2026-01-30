import { BookOpen, Globe, Stethoscope, Users } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Access information in 12+ Indian languages including Hindi, Bengali, Tamil, and more.",
  },
  {
    icon: Stethoscope,
    title: "Disease Database",
    description: "Comprehensive database of common animal diseases, symptoms, and treatments.",
  },
  {
    icon: BookOpen,
    title: "Expert Knowledge",
    description: "Verified information from veterinary experts and agricultural research.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Connect with farmers and animal caretakers across India for advice and support.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose PashuSeva?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your trusted companion for animal healthcare information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="card-nature text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon mx-auto mb-5">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
