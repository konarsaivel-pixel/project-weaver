import PageLayout from "@/components/layout/PageLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Zap, CheckCircle } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "Delivering innovative solutions that drive business growth and digital transformation.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Building lasting partnerships through exceptional service and tailored solutions.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "Leveraging cutting-edge technologies to solve complex business challenges.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering quality and exceeding expectations in every project.",
    },
  ];

  const highlights = [
    "Skilled Technical Experts",
    "Online & Offline Training",
    "International Certifications",
    "24/7 Support Available",
    "Custom Solutions",
    "Agile Methodology",
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="hero-gradient text-primary-foreground py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-lg text-primary-foreground/80">
              Driving technological empowerment through end-to-end technical solutions for every industry
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Welcome to{" "}
                <span className="gradient-text">Solugenious AI Techs</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Solugenious AI Technologies is your perfect partner when it comes to your software development and digital presence needs. We specialize in delivering cutting-edge solutions that transform businesses and drive growth.
              </p>
              <p className="text-muted-foreground mb-8">
                From identifying gaps in your digital services to creating impactful touchpoints, we build loyal and rewarding customer experiences with modernized brand processes. Our team reaches out to your customers across digital channels, capturing their attention and driving conversions at intended touch points.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                    <span className="text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl gradient-bg p-1">
                <div className="w-full h-full rounded-xl bg-card flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-6xl font-bold gradient-text mb-4">350+</div>
                    <p className="text-muted-foreground text-lg">
                      Trusted by companies worldwide
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="hover-lift">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Experience Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Unlock True Customer Value with{" "}
              <span className="gradient-text">Digital Experience Platforms</span>
            </h2>
            <p className="text-muted-foreground text-center mb-12">
              Reimagine digital experience with our effective digital experience solutions. From identifying gaps in your digital services to creating impactful touchpoints, build a loyal and rewarding customer base with modernized brand processes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
                  <p className="text-sm text-muted-foreground">Security Monitoring</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">99.9%</div>
                  <p className="text-sm text-muted-foreground">Uptime Guarantee</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-lift">
                <CardContent className="p-6">
                  <div className="text-4xl font-bold gradient-text mb-2">&lt;15min</div>
                  <p className="text-sm text-muted-foreground">Response Time</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
