import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Shield,
  Eye,
  Zap,
  Lock,
  AlertTriangle,
  Server,
  ArrowRight,
  CheckCircle,
  Award
} from "lucide-react";

const Cybersecurity = () => {
  const stats = [
    { value: "24/7", label: "Security Monitoring", description: "Round-the-clock threat surveillance" },
    { value: "99.9%", label: "Threat Detection Rate", description: "Industry-leading accuracy" },
    { value: "<15min", label: "Incident Response", description: "Rapid threat containment" },
    { value: "ISO 27001", label: "Certified Processes", description: "Enterprise-grade standards" },
  ];

  const services = [
    {
      icon: Eye,
      title: "Security Monitoring",
      description: "Continuous monitoring of your infrastructure for potential threats and vulnerabilities.",
    },
    {
      icon: AlertTriangle,
      title: "Threat Detection",
      description: "Advanced AI-powered threat detection to identify and neutralize risks before they escalate.",
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response team ready to contain and remediate security incidents 24/7.",
    },
    {
      icon: Lock,
      title: "Data Protection",
      description: "Comprehensive data encryption and protection strategies for sensitive information.",
    },
    {
      icon: Server,
      title: "Infrastructure Security",
      description: "Secure your cloud and on-premise infrastructure with enterprise-grade solutions.",
    },
    {
      icon: Award,
      title: "Compliance Management",
      description: "Ensure compliance with industry regulations including GDPR, HIPAA, and SOC 2.",
    },
  ];

  const features = [
    "Managed Security Services (MSSP)",
    "Vulnerability Assessment",
    "Penetration Testing",
    "Security Audits",
    "Risk Assessment",
    "Security Training",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary-foreground mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">Certified MSSP Partner</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Enterprise-Grade Cybersecurity Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              As a Certified Managed Security Services Provider (MSSP), we deliver comprehensive security solutions designed to protect your organization from evolving cyber threats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="gradient-bg hover:opacity-90">
                <Link to="/contact">
                  Schedule Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="#services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Security Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cybersecurity solutions to protect your organization
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

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Our{" "}
                <span className="gradient-text">Security Solutions?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Our expert team provides 24/7 monitoring, threat detection, and rapid incident response to keep your business secure. We use advanced AI-powered tools to stay ahead of evolving threats.
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
            <div className="relative">
              <Card className="p-8">
                <div className="text-center">
                  <Shield className="h-20 w-20 mx-auto text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Active Protection</h3>
                  <p className="text-4xl font-bold gradient-text mb-2">500+</p>
                  <p className="text-muted-foreground">Threats Blocked Daily</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="gradient-bg rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a comprehensive security assessment and protect your business from cyber threats
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

export default Cybersecurity;
