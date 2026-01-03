import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Database, Cloud, Code, Users, Award, CheckCircle } from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Enterprise Application Development",
      description: "Build robust, scalable applications tailored to your business needs.",
      href: "/services/enterprise",
    },
    {
      icon: Cloud,
      title: "Liferay DXP Solutions",
      description: "Transform your digital presence with powerful DXP implementations.",
      href: "/services/liferay",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your organization.",
      href: "/services/cybersecurity",
    },
    {
      icon: Database,
      title: "Data Science & AI",
      description: "Unlock insights and automate with cutting-edge AI solutions.",
      href: "/services/data-science",
    },
  ];

  const stats = [
    { value: "350+", label: "Companies Worldwide" },
    { value: "24/7", label: "Support Available" },
    { value: "99.9%", label: "Uptime Guaranteed" },
    { value: "15+", label: "Years Experience" },
  ];

  const features = [
    "B2B/B2C Portals",
    "Mobile Application Development",
    "eCommerce Solutions",
    "UX/UI Design Services",
    "Cloud Consulting",
    "Digital Transformation",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Driving Technological Empowerment Through{" "}
              <span className="gradient-text">End-to-End Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Solugenious AI Technologies is your perfect partner for software development and digital presence needs. Transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your unique business requirements
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="hover-lift group cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <Link
                    to={service.href}
                    className="text-primary text-sm font-medium inline-flex items-center hover:gap-2 transition-all"
                  >
                    Learn More <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Level Up Your Operations Through{" "}
                <span className="gradient-text">Digital Enterprise Solutions</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                When the possibilities are endless, choosing the right path is important. Take the first step of your digital transformation in the right direction with our experienced experts by your side.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl gradient-bg p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <Users className="h-16 w-16 mx-auto text-primary mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Customer Experience</h3>
                    <p className="text-muted-foreground">
                      Backed with cutting-edge technologies
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-2xl p-8 md:p-12 lg:p-16 text-center">
            <Award className="h-12 w-12 mx-auto text-primary-foreground mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Partner with us to unlock the true potential of digital transformation and drive your business forward.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
