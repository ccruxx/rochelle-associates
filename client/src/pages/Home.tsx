import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import {
  Shield,
  Scale,
  Users,
  Award,
  Phone,
  ChevronRight,
  Star,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@shared/schema";
import robinPhoto from "@assets/image_1757800548582.png";

// Actual Google reviews and testimonials (names abbreviated for client privacy)
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "J.M.",
    content:
      "Robin did an amazing job on my case and his paralegal team is amazing. I could not ask for anything more. They are awesome people and will do everything they can to help you out! I would highly recommend them!",
    rating: 5,
    caseType: "Criminal Defense",
  },
  {
    id: "2",
    name: "Former Client",
    content:
      "I chose Robin Rochelle based on his rating and reviews. It was a good decision, and I would recommend him to anyone needing legal assistance. He and his staff delivered exactly what was agreed upon, in a professional, discreet, and timely manner.",
    rating: 5,
    caseType: "Criminal Defense",
  },
  {
    id: "3",
    name: "D.R.",
    content:
      "Professional service and great results. The team at Rochelle & Associates really knows their stuff. Robin has years of experience and it shows in how he handles criminal cases.",
    rating: 5,
    caseType: "Criminal Defense",
  },
  {
    id: "4",
    name: "M.S.",
    content:
      "It was reassuring to know such an experienced team was working on my behalf. They explained everything clearly and fought hard for the best outcome in my case.",
    rating: 4,
    caseType: "DUI Defense",
  },
];

export default function Home() {
  useEffect(() => {
    document.title = "Criminal Defense Attorney Lawton OK | DUI Lawyer | Rochelle & Associates";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experienced criminal defense attorney in Lawton, OK with 36+ years defending clients in Comanche County. DUI, felonies, family law. Call (580) 248-1822 for free consultation.");
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://rochelle-associates.com/');

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.id = 'legal-service-schema';
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Rochelle & Associates",
      "telephone": "+1-580-248-1822",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "511 SW C Ave",
        "addressLocality": "Lawton",
        "addressRegion": "OK",
        "postalCode": "73501",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.604,
        "longitude": -98.395
      },
      "url": "https://rochelle-associates.com",
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Lawton",
          "containedIn": {
            "@type": "AdministrativeArea",
            "name": "Comanche County"
          }
        }
      ]
    });
    document.head.appendChild(schema);

    return () => {
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove && canonicalToRemove.parentNode) {
        canonicalToRemove.parentNode.removeChild(canonicalToRemove);
      }
      const schemaToRemove = document.getElementById('legal-service-schema');
      if (schemaToRemove && schemaToRemove.parentNode) {
        schemaToRemove.parentNode.removeChild(schemaToRemove);
      }
    };
  }, []);

  const practiceAreas = [
    {
      title: "Criminal Defense",
      description:
        "Aggressive defense for felonies, misdemeanors, and federal crimes. Protecting your rights and future.",
      icon: Shield,
      href: "/criminal-defense",
      features: [
        "Drug Crimes",
        "Theft & Burglary",
        "Assault & Battery",
        "White Collar Crimes",
      ],
    },
    {
      title: "DUI Defense",
      description:
        "Expert defense against DUI charges. Challenging evidence and protecting your driving privileges.",
      icon: Scale,
      href: "/dui-defense",
      features: [
        "Field Sobriety Tests",
        "Breathalyzer Defense",
        "License Suspension",
        "Repeat Offenses",
      ],
    },
    {
      title: "Family Law",
      description:
        "Compassionate representation for divorce, custody, and family matters during difficult times.",
      icon: Users,
      href: "/family-law",
      features: [
        "Divorce & Separation",
        "Child Custody",
        "Child Support",
        "Protective Orders",
      ],
    },
    {
      title: "Domestic Violence",
      description:
        "Sensitive defense for domestic violence allegations. Protecting relationships and reputations.",
      icon: Award,
      href: "/practice-areas/domestic-violence",
      features: [
        "Protective Orders",
        "Emergency Hearings",
        "Evidence Analysis",
        "Plea Negotiations",
      ],
    },
    {
      title: "Tribal Family Law",
      description:
        "Representing your family with tribal attorney expertise in specialized tribal courts.",
      icon: Users,
      href: "/practice-areas/tribal-family-law",
      features: [
        "Tribal Divorces",
        "Tribal Adoptions",
        "Tribal Child Custody",
        "Guardianships",
      ],
    },
    {
      title: "Wills, Trusts & Probate",
      description:
        "Estate planning and probate services to protect your family's future and legacy.",
      icon: Shield,
      href: "/practice-areas/wills-trusts-probate",
      features: [
        "Will Creation",
        "Estate Planning",
        "Probate Proceedings",
        "Trust Management",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight"
              data-testid="text-hero-headline"
            >
              Expert Legal Defense When Your Future is at Stake
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              36 years of proven experience defending clients across Lawton,
              Oklahoma. Criminal defense, family law, and DUI representation you
              can trust.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
              >
                <Link href="/contact" data-testid="button-hero-consultation">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>

              <div className="flex items-center text-lg">
                <Phone className="mr-2 h-5 w-5" />
                <span className="font-semibold" data-testid="text-hero-phone">
                  (580) 248-1822
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">36+</div>
                <div className="text-sm text-primary-foreground/80">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-primary-foreground/80">
                  Cases Handled
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-sm text-primary-foreground/80">
                  Client Satisfaction
                </div>
              </div>
            </div>
            <p className="text-xs text-primary-foreground/70 mt-2 italic">
              *Each case is unique. Past results do not guarantee future
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-16 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Experienced Legal Representation in Lawton, Oklahoma
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Rochelle & Associates provides comprehensive legal services for{" "}
                <Link
                  href="/criminal-defense"
                  className="text-primary font-semibold hover:underline"
                  data-testid="link-home-criminal"
                >
                  Criminal Defense
                </Link>
                ,{" "}
                <Link
                  href="/dui-defense"
                  className="text-primary font-semibold hover:underline"
                  data-testid="link-home-dui"
                >
                  DUI Defense
                </Link>
                , and{" "}
                <Link
                  href="/family-law"
                  className="text-primary font-semibold hover:underline"
                  data-testid="link-home-family"
                >
                  Family Law
                </Link>{" "}
                matters throughout Comanche County. With over 36 years of local
                courtroom experience, we fight to protect your rights, your
                freedom, and your family's future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">
                    <Link
                      href="/criminal-defense"
                      className="hover:underline"
                      data-testid="link-criminal-card"
                    >
                      Criminal Defense Attorney
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Aggressive defense for felonies, misdemeanors, and federal
                    crimes in Lawton and Comanche County. Protecting your
                    constitutional rights and fighting for your freedom with
                    proven trial experience.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/criminal-defense"
                      data-testid="button-criminal-services"
                    >
                      View Criminal Defense Services
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Scale className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">
                    <Link
                      href="/dui-defense"
                      className="hover:underline"
                      data-testid="link-dui-card"
                    >
                      DUI Defense Lawyer
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Time-sensitive defense for DUI/DWI charges in Oklahoma.
                    Challenging breathalyzer tests, protecting your license, and
                    fighting to minimize penalties. Available 24/7 for Lawton
                    arrests.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dui-defense" data-testid="button-dui-services">
                      View DUI Defense Services
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-serif font-bold text-primary mb-3">
                    <Link
                      href="/family-law"
                      className="hover:underline"
                      data-testid="link-family-card"
                    >
                      Family Law Attorney
                    </Link>
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Compassionate representation for divorce, child custody, and
                    domestic relations in Comanche County. Protecting your
                    family's interests during life's most difficult transitions.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link
                      href="/family-law"
                      data-testid="button-family-services"
                    >
                      View Family Law Services
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              All Areas of Practice
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services focused on criminal defense and
              family law matters throughout Oklahoma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <Card
                  key={area.title}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-background"
                >
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif">
                          {area.title}
                        </CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature) => (
                        <Badge
                          key={feature}
                          variant="secondary"
                          className="text-xs"
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      <Link
                        href={area.href}
                        data-testid={`button-${area.title.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        Learn More
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Meet Robin Lee Rochelle
                </h2>
                <p className="text-lg text-muted-foreground">
                  Lead Attorney & Founder
                </p>
              </div>

              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  With over 36 years of legal experience, Robin Lee Rochelle has
                  established himself as one of Lawton's most trusted criminal
                  defense and family law attorneys. His appointment to the
                  Professional Responsibility Commission demonstrates his
                  commitment to legal excellence and ethics.
                </p>

                <p>
                  Attorney Rochelle understands that facing criminal charges or
                  family legal issues can be overwhelming. He provides
                  personalized attention to each case, ensuring clients
                  understand their rights and options every step of the way.
                </p>

                <p>
                  His extensive courtroom experience and deep understanding of
                  Oklahoma law have resulted in successful outcomes for hundreds
                  of clients facing serious legal challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">Education</div>
                  <div className="text-sm text-muted-foreground">
                    JD - San Diego University School of Law, 1988
                  </div>
                  <div className="text-sm text-muted-foreground">
                    BA Accounting - University of Oklahoma, 1984
                  </div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">
                    Bar Admissions
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Oklahoma Bar Association, 2009
                  </div>
                  <div className="text-sm text-muted-foreground">
                    California Bar Association, 1989
                  </div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">
                    Specialization
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Criminal Defense & Family Law
                  </div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">Commission</div>
                  <div className="text-sm text-muted-foreground">
                    Professional Responsibility
                  </div>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                <Link href="/about" data-testid="button-attorney-profile">
                  Learn More About Our Firm
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={robinPhoto}
                  alt="Robin Lee Rochelle, Attorney at Rochelle & Associates"
                  className="w-full h-full object-cover object-center"
                  data-testid="img-attorney-robin"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real testimonials from clients who trusted us with their most
              important legal matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  <div className="flex justify-between items-center">
                    <div>
                      <div
                        className="font-semibold text-primary"
                        data-testid={`text-testimonial-name-${testimonial.id}`}
                      >
                        {testimonial.name}
                      </div>
                      {testimonial.caseType && (
                        <div className="text-sm text-muted-foreground">
                          {testimonial.caseType} Client
                        </div>
                      )}
                    </div>
                    <Badge variant="outline">{testimonial.caseType}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Visit Our Office Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Located in Downtown Lawton
              </h2>
              <p className="text-lg text-muted-foreground">
                Proudly serving Lawton and Comanche County — visit our office downtown
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Card className="border-0 bg-muted/30">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-serif font-bold text-primary mb-2">
                          Rochelle & Associates
                        </h3>
                        <p className="text-lg mb-1" data-testid="text-home-office-address">
                          511 SW C Ave
                        </p>
                        <p className="text-lg mb-4">
                          Lawton, OK 73501
                        </p>
                        <div className="space-y-2 text-sm text-muted-foreground mb-4">
                          <p><strong>Office Hours:</strong> Mon-Fri: 8:00 AM - 5:00 PM</p>
                          <p><strong>Emergency Line:</strong> Available 24/7</p>
                          <p><strong>Phone:</strong> (580) 248-1822</p>
                        </div>
                        <Button 
                          asChild 
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                        >
                          <a 
                            href="https://www.google.com/maps/dir/?api=1&destination=511+SW+C+Ave,+Lawton,+OK+73501"
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="button-home-get-directions"
                          >
                            <MapPin className="mr-2 h-4 w-4" />
                            Get Directions
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Free Parking</p>
                    <p className="font-semibold text-primary">Available On-Site</p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Accessibility</p>
                    <p className="font-semibold text-primary">Ground Floor Office</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden shadow-lg">
                  <iframe
                    src="https://maps.google.com/maps?q=511+SW+C+Ave,+Lawton,+OK+73501&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rochelle & Associates Office Location - Downtown Lawton"
                    data-testid="map-home-office-location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Don't wait to protect your rights. Contact Rochelle & Associates
            today for a free consultation about your criminal defense or family
            law matter.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
            >
              <Link href="/contact" data-testid="button-cta-contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>

            <div className="flex items-center text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              <span data-testid="text-cta-phone">(580) 248-1822</span>
            </div>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-6">
            Available 24/7 for emergencies • Free initial consultation • No
            obligation
          </p>
        </div>
      </section>
    </div>
  );
}
