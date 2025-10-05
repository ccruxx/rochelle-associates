import { Link } from "wouter";
import { Heart, Phone, CheckCircle, Users, Home, FileText, Scale, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";

export default function FamilyLaw() {
  useEffect(() => {
    document.title = "Family Law Attorney Lawton OK | Divorce & Custody Lawyer | Rochelle & Associates";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Experienced family law attorney in Lawton, OK handling divorce, child custody, and domestic relations in Comanche County. 36+ years experience. Call (580) 248-1822.");
    }
  }, []);

  const familyLawServices = [
    {
      icon: FileText,
      title: "Divorce & Legal Separation",
      description: "Compassionate representation for contested and uncontested divorces in Comanche County, protecting your interests and assets."
    },
    {
      icon: Users,
      title: "Child Custody & Visitation",
      description: "Fighting for fair custody arrangements that prioritize your children's best interests while protecting your parental rights."
    },
    {
      icon: Home,
      title: "Tribal Family Law",
      description: "Experienced in tribal court proceedings and family law matters involving Native American children and families."
    },
    {
      icon: Scale,
      title: "Child Support & Alimony",
      description: "Ensuring fair child support and spousal support calculations based on Oklahoma guidelines and your financial situation."
    },
    {
      icon: Heart,
      title: "Adoption & Guardianship",
      description: "Guiding families through adoption processes and establishing legal guardianship for minors in Oklahoma courts."
    },
    {
      icon: FileText,
      title: "Protective Orders",
      description: "Swift action to obtain or defend against protective orders in domestic violence cases throughout Comanche County."
    }
  ];

  const divorceProcess = [
    {
      step: "1. Initial Consultation",
      description: "We discuss your situation, goals, and legal options. Understand your rights and what to expect in Oklahoma divorce proceedings."
    },
    {
      step: "2. Filing & Service",
      description: "Prepare and file divorce petition in Comanche County Court. Ensure proper service of documents to your spouse."
    },
    {
      step: "3. Temporary Orders",
      description: "Request temporary custody, support, or protective orders if needed to protect you and your children during divorce."
    },
    {
      step: "4. Discovery & Negotiation",
      description: "Exchange financial information and negotiate settlement terms. Most cases settle without trial, saving time and money."
    },
    {
      step: "5. Final Decree",
      description: "Whether by settlement or trial, obtain final divorce decree that protects your interests and provides clarity going forward."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-family-law-headline">
              Family Law Attorney in Lawton, OK
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 leading-relaxed">
              Compassionate Legal Guidance for Divorce, Custody, and Family Matters in Comanche County
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8"
                data-testid="button-call-family"
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
                data-testid="button-free-consult-family"
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
              Protecting Families During Life's Most Difficult Transitions
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Family law matters are deeply personal and emotionally challenging. Whether you're facing divorce, fighting 
                for custody of your children, or dealing with domestic violence, you need an attorney who combines legal 
                expertise with genuine compassion.
              </p>
              <p>
                For over 36 years, Attorney Robin Lee Rochelle has helped families in Lawton and Comanche County navigate 
                divorce, child custody disputes, and complex family legal issues. His experience in Oklahoma family courts 
                means he understands local judges, procedures, and what it takes to protect your family's interests.
              </p>
              <p>
                At Rochelle & Associates, we provide personalized attention to every family law case. You'll work directly 
                with Attorney Rochelle, not paralegals, ensuring your voice is heard and your concerns are addressed 
                throughout the legal process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Law Services Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Family Law Services in Lawton, Oklahoma
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal representation for all family law matters in Comanche County courts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {familyLawServices.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card key={service.title} className="border-0 bg-background">
                  <CardHeader>
                    <div className="flex flex-col items-center text-center gap-3">
                      <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-7 h-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl font-serif">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divorce Process Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              The Divorce Process in Comanche County, Oklahoma
            </h2>
            
            <div className="space-y-6">
              {divorceProcess.map((phase, index) => (
                <Card key={index} className="border-l-4 border-primary">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-primary mb-3">{phase.step}</h3>
                    <p className="text-lg leading-relaxed">{phase.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">Oklahoma has a 90-day waiting period</strong> for divorce with minor children, 
                and 10 days for divorces without children. However, temporary orders can be obtained immediately to protect 
                your interests during this waiting period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Child Custody Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Child Custody in Oklahoma: Protecting Your Parental Rights
            </h2>
            
            <div className="space-y-6 mb-8">
              <p className="text-lg leading-relaxed">
                Oklahoma courts determine custody based on the "best interests of the child." Factors include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">Each parent's ability to provide care and stability</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">Child's relationship with each parent</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">Parent's physical and mental health</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">Child's preference (if age appropriate)</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">History of domestic violence or abuse</span>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg">Continuity of the child's environment</span>
                </div>
              </div>
            </div>

            <Card className="border-0 bg-background">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-4">
                  We Fight for Fair Custody Arrangements
                </h3>
                <p className="text-lg leading-relaxed">
                  Attorney Rochelle has extensive experience in custody disputes in Lawton and Comanche County. Whether 
                  seeking primary custody, joint custody, or defending your visitation rights, we present compelling evidence 
                  that demonstrates your commitment to your children's wellbeing and your capability as a parent.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tribal Family Law Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Tribal Family Law Experience in Oklahoma
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Oklahoma has one of the largest Native American populations in the country, and family law cases involving 
                tribal members or children may fall under tribal court jurisdiction. Attorney Rochelle has experience 
                navigating the complex intersection of state and tribal family law.
              </p>
              <p>
                Whether your case involves the Indian Child Welfare Act (ICWA), tribal court custody proceedings, or 
                jurisdictional questions, we provide knowledgeable representation that respects tribal sovereignty while 
                protecting your family's interests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Understanding Family Law in Oklahoma Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6 text-center">
              Understanding Family Law in Lawton and Comanche County
            </h2>
            <div className="space-y-4 text-lg leading-relaxed mb-12">
              <p>
                Family law cases in Oklahoma require an attorney who understands not just the law, but also the local 
                courts, judges, and procedures specific to Comanche County. Attorney Robin Lee Rochelle has practiced 
                family law in Lawton for over three decades, giving him unique insights into how these cases are handled 
                in our local court system.
              </p>
              <p>
                Whether you're going through a difficult divorce, fighting for custody of your children, or need to 
                establish child support, the decisions made during your family law case will affect you and your family 
                for years to come. That's why it's critical to have an experienced Lawton attorney who will fight to 
                protect your interests while helping you navigate this emotional process.
              </p>
              <p>
                We understand that many families in Lawton have unique situations—military families stationed at Fort Sill, 
                families with tribal court considerations, and blended families with complex custody needs. Our firm has 
                handled all types of family law matters in Comanche County and knows how to address these special circumstances 
                effectively.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
              Why Choose Rochelle & Associates for Family Law in Lawton
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">36+ Years Local Experience</h3>
                  <p className="leading-relaxed">
                    Deep knowledge of Comanche County family courts, judges, and procedures gives our clients a strategic advantage.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Direct Attorney Access</h3>
                  <p className="leading-relaxed">
                    Work directly with Attorney Rochelle throughout your case. No paralegals, no junior attorneys - just experienced counsel.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Compassionate Approach</h3>
                  <p className="leading-relaxed">
                    We understand the emotional toll of family law matters and provide supportive guidance during this difficult time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-background">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Proven Track Record</h3>
                  <p className="leading-relaxed">
                    Hundreds of successful family law cases including complex custody disputes, high-asset divorces, and protective orders.
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
              Complete Legal Services for Your Needs
            </h2>
            <p className="text-lg text-center mb-8">
              In addition to family law, we offer experienced legal representation for{" "}
              <Link href="/criminal-defense" className="text-primary font-semibold hover:underline" data-testid="link-to-criminal-family">
                Criminal Defense
              </Link>{" "}
              and{" "}
              <Link href="/dui-defense" className="text-primary font-semibold hover:underline" data-testid="link-to-dui-family">
                DUI Defense
              </Link>{" "}
              matters in Lawton and Comanche County.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">Criminal Defense in Lawton</h3>
                  <p className="mb-4 leading-relaxed">
                    Arrested for a crime? We provide aggressive defense for all criminal charges including felonies, 
                    misdemeanors, and federal crimes. Protect your freedom with 36+ years of courtroom experience.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/criminal-defense" data-testid="button-learn-criminal-family">
                      Learn About Criminal Defense
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/20 hover:border-primary/40 transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-3">DUI Defense Attorney</h3>
                  <p className="mb-4 leading-relaxed">
                    Facing DUI or DWI charges in Oklahoma? We fight to protect your license and freedom. Time-sensitive 
                    defense to challenge tests and minimize penalties. Available 24/7 for arrests.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/dui-defense" data-testid="button-learn-dui-family">
                      Learn About DUI Defense
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
            Get the Family Law Guidance You Deserve
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
            Family law matters require experienced legal counsel who understands both the law and the emotional complexity 
            of your situation. Contact Rochelle & Associates today for a consultation about your case.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
              data-testid="button-cta-call-family"
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
              data-testid="button-cta-contact-family"
            >
              <Link href="/contact">
                Schedule Free Consultation
              </Link>
            </Button>
          </div>

          <div className="mt-8 text-lg">
            <p className="mb-2">511 SW C Ave, Lawton, OK 73501</p>
            <p>Serving families in Lawton, Comanche County, and surrounding communities</p>
          </div>
        </div>
      </section>
    </div>
  );
}
