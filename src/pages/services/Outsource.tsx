import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Code,
  Headphones,
  BarChart3,
  ClipboardCheck,
  Users,
  DollarSign,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Target
} from "lucide-react";

const Outsource = () => {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Dedicated development teams for web, mobile, and enterprise applications.",
    },
    {
      icon: Headphones,
      title: "IT Support Services",
      description: "24/7 technical support and helpdesk services for your customers.",
    },
    {
      icon: BarChart3,
      title: "Data Processing",
      description: "Data entry, management, and analytics outsourcing.",
    },
    {
      icon: TrendingUp,
      title: "Business Analytics",
      description: "Market research, data analysis, and business intelligence.",
    },
    {
      icon: ClipboardCheck,
      title: "QA & Testing",
      description: "Comprehensive testing services ensuring quality deliverables.",
    },
    {
      icon: Target,
      title: "Project Management",
      description: "End-to-end project management and delivery.",
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Savings",
      description: "Reduce operational costs by up to 60%",
      highlight: "Up to 60%"
    },
    {
      icon: Users,
      title: "Skilled Workforce",
      description: "Access to highly skilled professionals",
      highlight: "Top Talent"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Scale resources up or down as needed",
      highlight: "Flexible"
    },
    {
      icon: Target,
      title: "Focus on Core Business",
      description: "Concentrate on strategic initiatives",
      highlight: "Strategic"
    },
  ];

  const features = [
    "Dedicated Team Model",
    "Flexible Engagement",
    "Transparent Pricing",
    "Quality Assurance",
    "24/7 Communication",
    "NDA Protection",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6">
              <Users className="h-4 w-4" />
              <span className="text-sm font-medium">Flexible Outsourcing Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Outsourcing Services
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Scale your business with our flexible, cost-effective outsourcing solutions. Access global talent, reduce operational costs, and focus on your core business while we handle the rest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Outsourcing Solutions</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services to support your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Outsource{" "}
              <span className="gradient-text">With Us?</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div className="text-2xl font-bold gradient-text mb-2">{benefit.highlight}</div>
                  <h3 className="font-semibold mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Partner with Us for{" "}
                <span className="gradient-text">Seamless Outsourcing</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our outsourcing model is designed to give you maximum flexibility while ensuring quality deliverables. We become an extension of your team, working seamlessly with your processes.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="p-8">
              <div className="text-center">
                <Users className="h-16 w-16 mx-auto text-primary mb-4" />
                <h3 className="text-2xl font-bold mb-2">Dedicated Teams</h3>
                <p className="text-muted-foreground mb-6">
                  Get a dedicated team that works exclusively on your projects
                </p>
                <Button asChild className="gradient-bg hover:opacity-90">
                  <Link to="/contact">Talk to Us</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Optimize Your Operations?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our outsourcing services can benefit your business
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Outsource;
