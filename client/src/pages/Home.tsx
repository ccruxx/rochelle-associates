import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Shield, Scale, Users, Award, Phone, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Testimonial } from "@shared/schema";

// Actual Google reviews and testimonials (names abbreviated for client privacy)
const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "J.M.",
    content: "Robin did an amazing job on my case and his paralegal team is amazing. I could not ask for anything more. They are awesome people and will do everything they can to help you out! I would highly recommend them!",
    rating: 5,
    caseType: "Criminal Defense"
  },
  {
    id: "2", 
    name: "Former Client",
    content: "I chose Robin Rochelle based on his rating and reviews. It was a good decision, and I would recommend him to anyone needing legal assistance. He and his staff delivered exactly what was agreed upon, in a professional, discreet, and timely manner.",
    rating: 5,
    caseType: "Criminal Defense"
  },
  {
    id: "3",
    name: "D.R.",
    content: "Professional service and great results. The team at Rochelle & Associates really knows their stuff. Robin has years of experience and it shows in how he handles criminal cases.",
    rating: 5,
    caseType: "Criminal Defense"
  },
  {
    id: "4",
    name: "M.S.",
    content: "It was reassuring to know such an experienced team was working on my behalf. They explained everything clearly and fought hard for the best outcome in my case.",
    rating: 4,
    caseType: "DUI Defense"
  }
];

export default function Home() {
  const practiceAreas = [
    {
      title: "Criminal Defense",
      description: "Aggressive defense for felonies, misdemeanors, and federal crimes. Protecting your rights and future.",
      icon: Shield,
      href: "/practice-areas/criminal-defense",
      features: ["Drug Crimes", "Theft & Burglary", "Assault & Battery", "White Collar Crimes"]
    },
    {
      title: "DUI Defense", 
      description: "Expert defense against DUI charges. Challenging evidence and protecting your driving privileges.",
      icon: Scale,
      href: "/practice-areas/dui-defense", 
      features: ["Field Sobriety Tests", "Breathalyzer Defense", "License Suspension", "Repeat Offenses"]
    },
    {
      title: "Family Law",
      description: "Compassionate representation for divorce, custody, and family matters during difficult times.",
      icon: Users,
      href: "/practice-areas/family-law",
      features: ["Divorce & Separation", "Child Custody", "Child Support", "Protective Orders"]
    },
    {
      title: "Domestic Violence",
      description: "Sensitive defense for domestic violence allegations. Protecting relationships and reputations.",
      icon: Award,
      href: "/practice-areas/domestic-violence",
      features: ["Protective Orders", "Emergency Hearings", "Evidence Analysis", "Plea Negotiations"]
    },
    {
      title: "Tribal Family Law",
      description: "Representing your family with tribal attorney expertise in specialized tribal courts.",
      icon: Users,
      href: "/practice-areas/tribal-family-law",
      features: ["Tribal Divorces", "Tribal Adoptions", "Tribal Child Custody", "Guardianships"]
    },
    {
      title: "Wills, Trusts & Probate",
      description: "Estate planning and probate services to protect your family's future and legacy.",
      icon: Shield,
      href: "/practice-areas/wills-trusts-probate", 
      features: ["Will Creation", "Estate Planning", "Probate Proceedings", "Trust Management"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight" data-testid="text-hero-headline">
              Expert Legal Defense When Your Future is at Stake
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              36 years of proven experience defending clients across Lawton, Oklahoma. 
              Criminal defense, family law, and DUI representation you can trust.
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
                <span className="font-semibold" data-testid="text-hero-phone">(580) 248-1822</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">36+</div>
                <div className="text-sm text-primary-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">1000+</div>
                <div className="text-sm text-primary-foreground/80">Cases Handled</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">95%</div>
                <div className="text-sm text-primary-foreground/80">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Areas of Practice
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services focused on criminal defense and family law matters throughout Oklahoma.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => {
              const IconComponent = area.icon;
              return (
                <Card key={area.title} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif">{area.title}</CardTitle>
                      </div>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {area.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={area.href} data-testid={`button-${area.title.toLowerCase().replace(/\s+/g, '-')}`}>
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
                  With over 36 years of legal experience, Robin Lee Rochelle has established himself as one of 
                  Lawton's most trusted criminal defense and family law attorneys. His appointment to the 
                  Professional Responsibility Commission demonstrates his commitment to legal excellence and ethics.
                </p>
                
                <p>
                  Attorney Rochelle understands that facing criminal charges or family legal issues can be 
                  overwhelming. He provides personalized attention to each case, ensuring clients understand 
                  their rights and options every step of the way.
                </p>
                
                <p>
                  His extensive courtroom experience and deep understanding of Oklahoma law have resulted in 
                  successful outcomes for hundreds of clients facing serious legal challenges.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">Education</div>
                  <div className="text-sm text-muted-foreground">JD - San Diego University School of Law, 1988</div>
                  <div className="text-sm text-muted-foreground">BA Accounting - University of Oklahoma, 1984</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">Bar Admissions</div>
                  <div className="text-sm text-muted-foreground">Oklahoma Bar Association, 2009</div>
                  <div className="text-sm text-muted-foreground">California Bar Association, 1989</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">Specialization</div>
                  <div className="text-sm text-muted-foreground">Criminal Defense & Family Law</div>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold text-primary">Commission</div>
                  <div className="text-sm text-muted-foreground">Professional Responsibility</div>
                </div>
              </div>

              <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                <Link href="/about" data-testid="button-attorney-profile">
                  Learn More About Our Firm
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-12 h-12 text-primary" />
                  </div>
                  <p className="font-medium">Professional Attorney Portrait</p>
                  <p className="text-sm">Robin Lee Rochelle</p>
                </div>
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
              Real testimonials from clients who trusted us with their most important legal matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-lg mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-semibold text-primary" data-testid={`text-testimonial-name-${testimonial.id}`}>
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

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Don't wait to protect your rights. Contact Rochelle & Associates today for a free consultation 
            about your criminal defense or family law matter.
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
            Available 24/7 for emergencies • Free initial consultation • No obligation
          </p>
        </div>
      </section>
    </div>
  );
}