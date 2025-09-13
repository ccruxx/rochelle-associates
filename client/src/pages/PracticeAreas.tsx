import { useParams, Link } from "wouter";
import { Shield, Scale, Users, Award, CheckCircle, Phone, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const practiceAreasData = {
  "criminal-defense": {
    title: "Criminal Defense",
    description: "Comprehensive defense against all criminal charges in Oklahoma",
    icon: Shield,
    services: [
      "Drug Crimes & Possession",
      "Theft & Burglary",
      "Assault & Battery",
      "White Collar Crimes",
      "Traffic Violations",
      "Weapons Charges",
      "Fraud & Embezzlement",
      "Probation Violations"
    ],
    content: {
      overview: "When you're facing criminal charges, your freedom, reputation, and future are at stake. At Rochelle & Associates, we provide aggressive criminal defense representation with over 36 years of experience in Oklahoma courts. Attorney Rochelle understands the complexities of criminal law and works tirelessly to protect your rights and achieve the best possible outcome.",
      approach: "Our approach to criminal defense begins with a thorough investigation of your case. We examine all evidence, witness statements, and police procedures to identify weaknesses in the prosecution's case. We believe that every person deserves a strong defense, regardless of the charges they face.",
      whyChoose: "With extensive experience in Lawton courts and a deep understanding of Oklahoma criminal law, Attorney Rochelle has successfully defended clients against charges ranging from misdemeanors to serious felonies. Our track record speaks for itself."
    }
  },
  "dui-defense": {
    title: "DUI Defense",
    description: "Expert defense against DUI and DWI charges throughout Oklahoma",
    icon: Scale,
    services: [
      "First-Time DUI Offenses",
      "Repeat DUI Offenses",
      "Field Sobriety Test Challenges",
      "Breathalyzer Defense",
      "Blood Test Challenges",
      "License Suspension Hearings",
      "Administrative License Actions",
      "Ignition Interlock Device Issues"
    ],
    content: {
      overview: "A DUI charge can have devastating consequences on your life, including license suspension, hefty fines, increased insurance rates, and even jail time. Attorney Rochelle has extensive experience defending DUI cases and understands the science behind sobriety testing, the requirements for proper police procedures, and the legal strategies that can lead to successful outcomes.",
      approach: "We meticulously examine every aspect of your DUI arrest, from the initial traffic stop to the administration of field sobriety tests and chemical testing. Many DUI cases can be successfully challenged based on improper procedures, faulty equipment, or violations of your constitutional rights.",
      whyChoose: "DUI law is complex and constantly evolving. Attorney Rochelle stays current with the latest developments in DUI defense strategies and has the knowledge and experience to identify the best defense for your specific situation."
    }
  },
  "family-law": {
    title: "Family Law",
    description: "Compassionate representation for divorce, custody, and family matters",
    icon: Users,
    services: [
      "Divorce & Legal Separation",
      "Child Custody & Visitation",
      "Child Support",
      "Spousal Support/Alimony",
      "Property Division",
      "Protective Orders",
      "Adoption Proceedings",
      "Modification of Orders"
    ],
    content: {
      overview: "Family legal matters are among the most emotionally challenging situations you may face. Whether you're going through a divorce, fighting for custody of your children, or dealing with other family law issues, you need an attorney who combines legal expertise with understanding and compassion.",
      approach: "We work to resolve family law matters efficiently while protecting your interests and those of your children. When possible, we seek amicable solutions that avoid lengthy court battles. However, when litigation is necessary, we provide aggressive representation to protect your rights.",
      whyChoose: "Attorney Rochelle understands that family law cases affect real people and real relationships. She approaches each case with sensitivity while never losing sight of the goal: achieving the best possible outcome for you and your family."
    }
  },
  "domestic-violence": {
    title: "Domestic Violence Defense",
    description: "Sensitive defense for domestic violence allegations and protective orders",
    icon: Award,
    services: [
      "Domestic Violence Charges",
      "Protective Order Defense",
      "Emergency Protective Orders",
      "Violation of Protective Orders",
      "Domestic Assault & Battery",
      "Stalking Charges",
      "Harassment Cases",
      "Family Court Proceedings"
    ],
    content: {
      overview: "Domestic violence allegations can destroy relationships, careers, and reputations. Even false accusations can have serious consequences, including protective orders, loss of gun rights, and difficulty with employment or housing. These cases require immediate attention and experienced legal representation.",
      approach: "We understand the sensitive nature of domestic violence cases and approach each situation with discretion and professionalism. Our goal is to protect your rights while working toward a resolution that serves everyone's best interests, especially when children are involved.",
      whyChoose: "Domestic violence cases often involve complex family dynamics and emotional situations. Attorney Rochelle has the experience and sensitivity necessary to navigate these challenging cases while providing strong legal advocacy."
    }
  }
};

export default function PracticeAreas() {
  const params = useParams();
  const areaKey = params.area as keyof typeof practiceAreasData;
  const areaData = areaKey ? practiceAreasData[areaKey] : null;

  if (areaKey && !areaData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Practice Area Not Found</h1>
          <Link href="/" className="text-blue-600 hover:underline">Return to Home</Link>
        </div>
      </div>
    );
  }

  if (areaData) {
    const IconComponent = areaData.icon;
    
    return (
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-4">
            <Link 
              href="/"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
              data-testid="link-back-home"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <IconComponent className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid={`text-${areaKey}-headline`}>
                {areaData.title}
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                {areaData.description}
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8">Overview</h2>
              <p className="text-lg leading-relaxed mb-8">{areaData.content.overview}</p>
              
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">Our Approach</h3>
              <p className="text-lg leading-relaxed mb-8">{areaData.content.approach}</p>
              
              <h3 className="text-2xl font-serif font-semibold text-primary mb-6">Why Choose Us</h3>
              <p className="text-lg leading-relaxed">{areaData.content.whyChoose}</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 text-center">
                Our {areaData.title} Services
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {areaData.services.map((service) => (
                  <Card key={service} className="border-0 bg-background">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-lg font-medium">{service}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Need Help with {areaData.title}?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Don't face these charges alone. Contact Rochelle & Associates today for experienced 
              legal representation and a free consultation about your case.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
              >
                <Link href="/contact" data-testid={`button-${areaKey}-contact`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              
              <div className="flex items-center text-lg font-semibold">
                <Phone className="mr-2 h-5 w-5" />
                <span data-testid={`text-${areaKey}-phone`}>(580) 248-1822</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // Practice Areas Overview Page
  const allAreas = Object.entries(practiceAreasData);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-practice-areas-headline">
              Areas of Practice
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Comprehensive legal services focused on criminal defense and family law matters 
              throughout Lawton, Oklahoma and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {allAreas.map(([key, area]) => {
              const IconComponent = area.icon;
              return (
                <Card key={key} className="group hover:shadow-lg transition-all duration-300 border-0 bg-background">
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
                    <div className="space-y-2">
                      {area.services.slice(0, 4).map((service) => (
                        <div key={service} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-600" />
                          {service}
                        </div>
                      ))}
                      {area.services.length > 4 && (
                        <div className="text-sm text-muted-foreground">
                          + {area.services.length - 4} more services
                        </div>
                      )}
                    </div>
                    <Button asChild className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <Link href={`/practice-areas/${key}`} data-testid={`button-${key}`}>
                        Learn More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Discuss Your Legal Matter?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Contact Rochelle & Associates today for experienced legal representation 
            and a free consultation about your case.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
            >
              <Link href="/contact" data-testid="button-practice-areas-contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Free Consultation
              </Link>
            </Button>
            
            <div className="flex items-center text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              <span data-testid="text-practice-areas-phone">(580) 248-1822</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}