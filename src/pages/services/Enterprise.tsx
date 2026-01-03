import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Code,
  Cloud,
  Smartphone,
  Shield,
  Cog,
  ArrowRight,
  CheckCircle,
  Zap,
  Award
} from "lucide-react";

const Enterprise = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Application Development",
      description: "Build bespoke enterprise applications from scratch, designed to meet your specific business processes and requirements.",
    },
    {
      icon: Cog,
      title: "Legacy Modernization",
      description: "Modernize outdated systems with new technologies, improving performance, security, and maintainability.",
    },
    {
      icon: Zap,
      title: "System Integration",
      description: "Seamlessly integrate multiple enterprise systems, applications, and databases for unified operations.",
    },
    {
      icon: Cloud,
      title: "Cloud-Native Development",
      description: "Build scalable cloud applications leveraging AWS, Azure, or Google Cloud platforms.",
    },
    {
      icon: Smartphone,
      title: "Enterprise Mobility",
      description: "Develop mobile applications that extend your enterprise capabilities to smartphones and tablets.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security measures and compliance with industry standards like GDPR, HIPAA, SOC 2.",
    },
  ];

  const whyChoose = [
    { title: "Scalable Architecture", description: "Applications designed to grow with your business needs" },
    { title: "Agile Methodology", description: "Iterative development with continuous feedback and improvements" },
    { title: "Expert Team", description: "Experienced developers skilled in latest technologies and frameworks" },
    { title: "24/7 Support", description: "Round-the-clock maintenance and technical support" },
    { title: "Cost-Effective", description: "Optimized development processes to maximize ROI" },
    { title: "Quality Assurance", description: "Rigorous testing and QA processes ensuring bug-free delivery" },
  ];

  const technologies = [
    { name: "Java Ecosystem", techs: "Spring Boot, Hibernate, Microservices, JEE" },
    { name: ".NET Framework", techs: ".NET Core, ASP.NET, C#, Azure Services" },
    { name: "Python", techs: "Django, Flask, FastAPI, Data Analytics" },
    { name: "Node.js", techs: "Express, NestJS, Real-time Applications" },
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
              Enterprise Application Development
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Build robust, scalable, and secure enterprise applications that drive digital transformation and accelerate business growth with cutting-edge technologies and best practices.
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive enterprise solutions tailored to your unique business requirements
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

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our{" "}
              <span className="gradient-text">Enterprise Solutions?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proven expertise in delivering enterprise-grade applications
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Work With</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern tech stack for enterprise application development
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech) => (
              <Card key={tech.name} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.techs}</p>
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
            <Award className="h-12 w-12 mx-auto text-primary-foreground mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Enterprise Application?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution that drives your business forward
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

export default Enterprise;
