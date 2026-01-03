import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Layers,
  Users,
  Settings,
  Shield,
  Zap,
  Code,
  ArrowRight,
  CheckCircle,
  Globe,
  Building
} from "lucide-react";

const LiferayDXP = () => {
  const services = [
    {
      icon: Settings,
      title: "Implementation & Migration",
      description: "End-to-end Liferay DXP implementation and seamless migration from legacy systems to modern digital platforms.",
    },
    {
      icon: Layers,
      title: "Custom Theme Development",
      description: "Design and develop custom themes and layouts that match your brand identity and user experience requirements.",
    },
    {
      icon: Zap,
      title: "Integration Services",
      description: "Integrate Liferay with CRM, ERP, databases, and third-party applications for unified business operations.",
    },
    {
      icon: Code,
      title: "Custom Module Development",
      description: "Build custom portlets, modules, and extensions tailored to your specific business requirements.",
    },
    {
      icon: Shield,
      title: "Upgrade & Optimization",
      description: "Upgrade to latest Liferay versions and optimize performance for better user experience and scalability.",
    },
    {
      icon: Users,
      title: "Support & Maintenance",
      description: "24/7 technical support, monitoring, and maintenance to ensure smooth operation of your Liferay platform.",
    },
  ];

  const features = [
    { title: "Personalization Engine", description: "Deliver personalized content and experiences based on user behavior and preferences" },
    { title: "Multi-Channel Support", description: "Consistent experience across web, mobile, and other digital channels" },
    { title: "Content Management", description: "Powerful CMS with easy-to-use tools for content creation and management" },
    { title: "Enterprise Security", description: "Built-in security features and compliance with industry standards" },
    { title: "Scalable Architecture", description: "Cloud-ready platform that scales with your business growth" },
    { title: "Low-Code Development", description: "Accelerate development with visual tools and reusable components" },
  ];

  const useCases = [
    { icon: Globe, title: "Corporate Websites", description: "Build engaging corporate websites" },
    { icon: Users, title: "Customer Portals", description: "Create self-service portals with personalized experiences" },
    { icon: Building, title: "Employee Intranets", description: "Internal collaboration platforms with document management" },
    { icon: Zap, title: "Partner Portals", description: "Enable seamless collaboration with partners and vendors" },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground mb-6 transition-colors"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Liferay DXP Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Transform your digital presence with Liferay Digital Experience Platform - creating personalized, engaging experiences across all customer touchpoints with enterprise-grade capabilities.
            </p>
            <Button asChild size="lg" className="gradient-bg hover:opacity-90">
              <Link to="/contact">
                Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Liferay DXP Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive Liferay implementation and customization services
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

      {/* Why Liferay Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose{" "}
              <span className="gradient-text">Liferay DXP?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade digital experience platform trusted by global organizations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Liferay Use Cases</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Versatile platform for diverse business needs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase) => (
              <Card key={useCase.title} className="hover-lift text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Digital Experience?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how Liferay DXP can help you create exceptional digital experiences
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

export default LiferayDXP;
