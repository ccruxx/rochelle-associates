import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    "Criminal Defense",
    "DUI Defense", 
    "Family Law",
    "Domestic Violence",
    "Tribal Family Law",
    "Wills, Trusts & Probate"
  ];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Firm Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Rochelle & Associates</h3>
            <p className="text-sm text-primary-foreground/80">
              Providing experienced legal representation in criminal defense and family law matters throughout Lawton, Oklahoma for over 36 years.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <div className="bg-secondary px-3 py-1 rounded text-secondary-foreground font-medium">
                Free Consultation
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium" data-testid="text-footer-phone">(580) 248-1822</p>
                  <p className="text-sm text-primary-foreground/80">Call for immediate assistance</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p data-testid="text-footer-email">info@rochellelaw.com</p>
                  <p className="text-sm text-primary-foreground/80">Email us anytime</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p data-testid="text-footer-address">123 Main Street<br />Lawton, OK 73501</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-sm text-primary-foreground/80">
                    Mon-Fri: 8:00 AM - 5:00 PM<br />
                    Weekend: By appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Practice Areas</h4>
            <ul className="space-y-2">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <Link 
                    href={`/practice-areas/${area.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    data-testid={`link-footer-${area.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4 border-t border-primary-foreground/20">
              <Link 
                href="/contact"
                className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded text-sm font-medium hover:bg-secondary/90 transition-colors"
                data-testid="button-footer-contact"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              <p>© {currentYear} Rochelle & Associates. All rights reserved.</p>
              <p className="mt-1">Licensed to practice law in Oklahoma</p>
            </div>
            
            <div className="text-sm text-primary-foreground/80 text-center md:text-right">
              <p>Attorney Robin Lee Rochelle</p>
              <p>36+ Years of Experience • Professional Responsibility Commission</p>
            </div>
          </div>
          
          <div className="mt-4 text-xs text-primary-foreground/60 text-center">
            <p>
              This website is for informational purposes only and does not constitute legal advice. 
              The information contained herein is not intended to create an attorney-client relationship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}