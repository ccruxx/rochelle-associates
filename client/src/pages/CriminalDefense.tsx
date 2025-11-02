import { Link } from "wouter";
import {
  Shield,
  Phone,
  CheckCircle,
  Scale,
  Gavel,
  AlertTriangle,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function CriminalDefense() {
  useEffect(() => {
    const originalTitle = document.title;
    document.title =
      "Criminal Defense Attorney Lawton OK | Rochelle & Associates";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute('content') : null;
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Experienced criminal defense attorney in Lawton, OK with 36+ years defending clients in Comanche County. Call (580) 248-1822 for a free consultation.",
      );
    }

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://rochelle-associates.com/criminal-defense');

    const schema = document.createElement('script');
    schema.type = 'application/ld+json';
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Criminal Defense Attorney",
      "provider": {
        "@type": "Attorney",
        "name": "Rochelle & Associates",
        "telephone": "+1-580-248-1822",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "511 SW C Ave",
          "addressLocality": "Lawton",
          "addressRegion": "OK",
          "postalCode": "73501",
          "addressCountry": "US"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Lawton",
        "containedIn": {
          "@type": "AdministrativeArea",
          "name": "Comanche County"
        }
      },
      "description": "Experienced criminal defense attorney in Lawton, OK with 36+ years defending clients in Comanche County against felonies, misdemeanors, and federal crimes."
    });
    document.head.appendChild(schema);

    return () => {
      document.title = originalTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc && originalDescription) {
        metaDesc.setAttribute('content', originalDescription);
      }
      if (schema.parentNode) {
        schema.parentNode.removeChild(schema);
      }
      const canonicalToRemove = document.querySelector('link[rel="canonical"]');
      if (canonicalToRemove && canonicalToRemove.parentNode) {
        canonicalToRemove.parentNode.removeChild(canonicalToRemove);
      }
    };
  }, []);

  const defenseCases = [
    {
      icon: AlertTriangle,
      title: "Felony Charges",
      description:
        "Aggressive defense against serious felony charges including drug crimes, assault, theft, and weapons offenses in Comanche County courts.",
    },
    {
      icon: Scale,
      title: "Misdemeanor Offenses",
      description:
        "Strategic representation for misdemeanor charges to minimize impact on your record and future opportunities.",
    },
    {
      icon: Gavel,
      title: "Federal Crimes",
      description:
        "Experienced defense in federal court for complex white-collar crimes and federal charges.",
    },
    {
      icon: Shield,
      title: "Domestic Violence",
      description:
        "Compassionate yet aggressive defense for domestic violence allegations with understanding of Oklahoma family dynamics.",
    },
  ];

  const whyChoose = [
    "36+ years defending clients in Lawton and Comanche County",
    "Former insurance defense attorney - knows prosecution tactics",
    "Licensed in Oklahoma and California courts",
    "Direct attorney access - not passed to paralegals",
    "Appointed to Professional Responsibility Commission",
    "Extensive trial experience in Oklahoma courts",
    "Free initial consultation to discuss your case",
    "Available 24/7 for emergencies and arrests",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              data-testid="text-criminal-defense-headline"
            >
              Experienced Criminal Defense Attorney in Lawton, OK
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Protecting Your Rights and Freedom in Comanche County Courts for
              Over 36 Years
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
                data-testid="button-call-now"
              >
                <a href="tel:5802481822">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (580) 248-1822
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8"
                data-testid="button-free-consultation"
              >
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
          <section className="py-8 text-center text-sm text-muted-foreground">
            Each case is unique; outcomes depend on individual circumstances.
          </section>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Your Future Depends on Your Defense
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                If you're facing criminal charges in Lawton, Oklahoma, your
                freedom, reputation, and future are on the line. You need an
                experienced criminal defense attorney who knows the Comanche
                County courts, prosecutors, and judges.
              </p>
              <p>
                Robin Lee Rochelle has been defending clients in Lawton for over
                36 years. As a former insurance defense attorney who practiced
                in California before returning to Oklahoma, he understands how
                prosecutors build their cases - and more importantly, how to
                dismantle them.
              </p>
              <p>
                Whether you're facing felony charges, misdemeanor offenses, or
                federal crimes, Attorney Rochelle provides aggressive, ethical
                representation focused on protecting your constitutional rights
                and achieving the best possible outcome for your case.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Criminal Defense Cases Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Criminal Defense Cases We Handle in Lawton
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive criminal defense representation for all charges in
              Oklahoma state and federal courts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {defenseCases.map((caseType) => {
              const IconComponent = caseType.icon;
              return (
                <Card key={caseType.title} className="border-0 bg-background">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif">
                          {caseType.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {caseType.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Experience Matters Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-center">
              Why Experience Matters in Criminal Defense
            </h2>
            <div className="space-y-4 text-lg leading-relaxed mb-12">
              <p>
                When you’re facing criminal charges in Lawton, Oklahoma, the
                attorney you choose can have a major impact on how your case is
                handled and resolved. With more than 36 years of experience
                practicing in Comanche County, Attorney Robin Lee Rochelle
                brings deep local insight and seasoned judgment to every
                defense.
              </p>
              <p>
                Our deep experience in the Lawton court system means we
                understand local procedures, courtroom dynamics, and how
                prosecutors typically approach cases. Having handled hundreds of
                matters in these same courtrooms, we bring practical insight
                that helps us prepare the strongest possible defense for each
                client.
              </p>
              <p>
                Every criminal case is unique, and we treat it that way. Whether
                you're facing your first misdemeanor charge or serious felony
                accusations, you'll receive personalized attention from an
                experienced trial attorney—not a paralegal or junior associate.
                Your future is too important to trust to anyone less.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Why Choose Rochelle & Associates for Criminal Defense in Lawton
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {whyChoose.map((reason, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{reason}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">
                  Local Knowledge Matters:
                </strong>{" "}
                Attorney Rochelle has practiced in Lawton for decades and knows
                the local court system inside and out. This familiarity with
                Comanche County judges, prosecutors, and court procedures gives
                our clients a significant advantage in developing effective
                defense strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              What to Expect After a Criminal Arrest in Lawton, OK
            </h2>

            <div className="space-y-6">
              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    1. Immediate Legal Representation
                  </h3>
                  <p className="text-lg leading-relaxed">
                    Contact Rochelle & Associates immediately after arrest.
                    We're available 24/7 to protect your rights from the start.
                    The sooner we get involved, the better we can protect your
                    interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    2. Initial Court Appearance
                  </h3>
                  <p className="text-lg leading-relaxed">
                    We'll represent you at your arraignment in Comanche County
                    Court, where charges are formally read and bail is set.
                    Having an experienced attorney at this stage is crucial for
                    securing reasonable bail terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    3. Case Investigation & Strategy
                  </h3>
                  <p className="text-lg leading-relaxed">
                    We thoroughly investigate your case, review evidence,
                    interview witnesses, and identify weaknesses in the
                    prosecution's case. Every case receives a customized defense
                    strategy.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    4. Negotiation or Trial
                  </h3>
                  <p className="text-lg leading-relaxed">
                    We'll negotiate with prosecutors for charge reduction or
                    dismissal when appropriate. If trial is necessary, you'll
                    have an experienced trial attorney who has successfully
                    defended hundreds of clients in Oklahoma courts.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-primary mb-6 text-center">
              We Also Handle Related Legal Matters
            </h2>
            <p className="text-lg text-center mb-8">
              In addition to criminal defense, Rochelle & Associates provides
              comprehensive legal services for{" "}
              <Link
                href="/dui-defense"
                className="text-primary font-semibold hover:underline"
                data-testid="link-to-dui"
              >
                DUI Defense
              </Link>{" "}
              and{" "}
              <Link
                href="/family-law"
                className="text-primary font-semibold hover:underline"
                data-testid="link-to-family"
              >
                Family Law
              </Link>{" "}
              matters throughout Lawton and Comanche County.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    DUI Defense in Lawton
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Facing DUI charges? We aggressively challenge breathalyzer
                    tests, field sobriety results, and fight to protect your
                    driving privileges. Time is critical—you have only 15 days
                    to save your license.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dui-defense" data-testid="button-learn-dui">
                      Learn About DUI Defense
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    Family Law Services
                  </h3>
                  <p className="mb-4 leading-relaxed">
                    Navigating divorce, child custody, or domestic violence
                    issues? We provide compassionate yet strategic
                    representation to protect your family's interests in
                    Comanche County courts.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/family-law" data-testid="button-learn-family">
                      Learn About Family Law
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Don't Face Criminal Charges Alone in Lawton
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Every moment counts when you're facing criminal charges. Contact
            Rochelle & Associates today for a free consultation about your case.
            We're here to protect your rights and fight for your freedom.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
              data-testid="button-cta-call"
            >
              <a href="tel:5802481822">
                <Phone className="mr-2 h-5 w-5" />
                Call (580) 248-1822 Now
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-4"
              data-testid="button-cta-contact"
            >
              <Link href="/contact">Schedule Free Consultation</Link>
            </Button>
          </div>

          <div className="mt-8 text-lg">
            <p className="mb-2">511 SW C Ave, Lawton, OK 73501</p>
            <p>Serving Lawton, Comanche County, and surrounding areas</p>
          </div>
        </div>
      </section>
    </div>
  );
}
