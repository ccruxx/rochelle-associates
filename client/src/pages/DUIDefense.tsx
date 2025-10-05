import { Link } from "wouter";
import { AlertTriangle, Phone, CheckCircle, Car, Scale, FileText, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function DUIDefense() {
  useEffect(() => {
    document.title = "DUI Lawyer Lawton OK | DUI Defense Attorney | Rochelle & Associates";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experienced DUI lawyer in Lawton, OK defending clients in Comanche County. 36+ years experience with DUI/DWI cases. Call (580) 248-1822 for free consultation.");
    }
  }, []);

  const duiServices = [
    {
      icon: Car,
      title: "DUI/DWI Defense",
      description: "Aggressive defense against drunk driving charges, challenging breathalyzer and field sobriety test results in Lawton courts."
    },
    {
      icon: AlertTriangle,
      title: "Underage DUI",
      description: "Protecting young drivers' futures with strategic defense against underage DUI charges and license suspension."
    },
    {
      icon: Scale,
      title: "License Suspension Hearings",
      description: "Fighting to preserve your driving privileges at Oklahoma DPS administrative hearings."
    },
    {
      icon: Shield,
      title: "Repeat DUI Offenses",
      description: "Strategic defense for second, third, or felony DUI charges with focus on minimizing penalties and jail time."
    }
  ];

  const penalties = [
    {
      offense: "First DUI Offense",
      consequences: ["Up to 1 year in jail", "$1,000 fine", "License suspension up to 6 months", "Mandatory alcohol assessment"]
    },
    {
      offense: "Second DUI Offense",
      consequences: ["1-5 years in prison", "$2,500 fine", "License revocation 1-5 years", "Ignition interlock device required"]
    },
    {
      offense: "Third or Subsequent DUI",
      consequences: ["1-10 years in prison", "$5,000 fine", "License revocation 3 years", "Felony on permanent record"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-dui-headline">
              DUI Lawyer in Lawton, OK
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Experienced DUI Defense Attorney Protecting Your License and Freedom in Comanche County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
                data-testid="button-call-dui"
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
                data-testid="button-free-consult-dui"
              >
                <Link href="/contact">
                  Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Don't Let a DUI Destroy Your Future
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                A DUI arrest in Lawton, Oklahoma can have devastating consequences - jail time, massive fines, license 
                suspension, increased insurance rates, and a permanent criminal record that affects employment opportunities.
              </p>
              <p>
                But a DUI arrest is not a DUI conviction. With over 36 years of experience defending clients in Comanche 
                County courts, Attorney Robin Lee Rochelle knows how to challenge DUI charges effectively. From questioning 
                the validity of breathalyzer tests to challenging improper police procedures, we explore every avenue to 
                protect your rights.
              </p>
              <p>
                Time is critical in DUI cases. You have only 15 days to request a hearing to save your driver's license. 
                Contact Rochelle & Associates immediately for aggressive DUI defense in Lawton.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DUI Services Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              DUI Defense Services in Lawton, OK
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal representation for all DUI and DWI charges in Oklahoma courts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {duiServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="border-0 bg-background">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Oklahoma DUI Penalties Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Oklahoma DUI Penalties: What You're Facing
            </h2>
            
            <div className="space-y-6 mb-12">
              {penalties.map((penalty, index) => (
                <Card key={index} className="border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-4">{penalty.offense}</h3>
                    <ul className="space-y-2">
                      {penalty.consequences.map((consequence, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                          <span className="text-lg">{consequence}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="bg-amber-50 dark:bg-amber-950 border-l-4 border-amber-600 p-6 rounded-r-lg">
              <p className="text-lg leading-relaxed">
                <strong className="text-amber-800 dark:text-amber-200">Important:</strong> These are maximum penalties. 
                With experienced legal representation, many DUI charges can be reduced or dismissed. Attorney Rochelle has 
                successfully helped hundreds of clients in Lawton avoid the harshest consequences of DUI charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Defense Strategies Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              How We Defend DUI Cases in Comanche County
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Challenge Breathalyzer Results</h3>
                  <p className="text-muted-foreground">Breathalyzer machines must be properly calibrated and maintained. We scrutinize testing procedures for errors.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Question Field Sobriety Tests</h3>
                  <p className="text-muted-foreground">These tests are subjective and can be challenged based on medical conditions, weather, or improper administration.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Review Traffic Stop Legality</h3>
                  <p className="text-muted-foreground">Police must have reasonable suspicion to stop your vehicle. Illegal stops can result in case dismissal.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Examine Blood Test Procedures</h3>
                  <p className="text-muted-foreground">Blood samples must follow strict chain of custody. Contamination or mishandling can invalidate results.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Negotiate Reduced Charges</h3>
                  <p className="text-muted-foreground">When appropriate, we negotiate with prosecutors for reduced charges like reckless driving.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Fight for License Reinstatement</h3>
                  <p className="text-muted-foreground">We represent clients at DPS hearings to prevent or minimize license suspension periods.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              What to Do After a DUI Arrest in Lawton
            </h2>
            
            <div className="space-y-4">
              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <FileText className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">1. Request a DPS Hearing Within 15 Days</h3>
                      <p className="text-lg leading-relaxed">
                        You have only 15 days from your arrest to request an administrative hearing to save your license. 
                        Contact us immediately - we'll handle this critical deadline for you.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Phone className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">2. Contact a DUI Lawyer Immediately</h3>
                      <p className="text-lg leading-relaxed">
                        The sooner we get involved, the better we can protect your rights. We're available 24/7 for DUI arrests in Lawton.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <Shield className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-2">3. Don't Talk to Police Without Your Lawyer</h3>
                      <p className="text-lg leading-relaxed">
                        You have the right to remain silent. Don't make statements that could be used against you. 
                        Let us do the talking.
                      </p>
                    </div>
                  </div>
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
            Fight Your DUI Charge with an Experienced Lawton Attorney
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Don't face DUI charges alone. With over 36 years defending clients in Comanche County, we know how to 
            fight for your license, your freedom, and your future. Call now for a free consultation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
              data-testid="button-cta-call-dui"
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
              data-testid="button-cta-contact-dui"
            >
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-lg">
            <p className="mb-2">511 SW C Ave, Lawton, OK 73501</p>
            <p>Available 24/7 for DUI arrests in Lawton and Comanche County</p>
          </div>
        </div>
      </section>
    </div>
  );
}
