import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Enterprise Development", href: "/services/enterprise" },
    { name: "Liferay DXP", href: "/services/liferay" },
    { name: "Cybersecurity", href: "/services/cybersecurity" },
    { name: "Data Science & AI", href: "/services/data-science" },
    { name: "Outsourcing", href: "/services/outsource" },
  ];

  const industries = ["BFSI", "Healthcare", "Retail", "Manufacturing"];

  return (
    <footer className="hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-bold text-lg">Solugenious</span>
                <span className="text-primary font-semibold ml-1">AI Techs</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 mb-4">
              Leading provider of AI-powered solutions and technology services for enterprise digital transformation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-primary-foreground/70">
                  Shop No: S-3, Ripplez Premises, Sector 7, Airoli, Navi Mumbai 400708
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="tel:+918838073043"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  +91-8838073043
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <a
                  href="mailto:careers@solugeniousaitechs.com"
                  className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                >
                  careers@solugeniousaitechs.com
                </a>
              </li>
            </ul>

            {/* Industries */}
            <div className="mt-6">
              <h5 className="font-medium text-sm mb-2">Industries</h5>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <span
                    key={industry}
                    className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary-foreground/80"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <p className="text-center text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Solugenious AI Services Technology Private Limited. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
