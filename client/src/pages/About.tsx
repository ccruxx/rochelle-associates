import { Link } from "wouter";
import { Award, Users, Shield, Clock, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import robinPhoto from "@assets/image_1757800548582.png";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.title =
      "About Robin Lee Rochelle | Attorney Lawton OK | Rochelle & Associates";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Meet Robin Lee Rochelle, experienced attorney in Lawton, OK with 36+ years in criminal defense and family law. Appointed to Professional Responsibility Commission.",
      );
    }
  }, []);
  const firmValues = [
    {
      icon: Shield,
      title: "Aggressive Defense",
      description:
        "We fight tirelessly to protect your rights and achieve the best possible outcome for your case.",
    },
    {
      icon: Users,
      title: "Personal Attention",
      description:
        "Every client receives direct access to Attorney Rochelle and personalized legal strategies.",
    },
    {
      icon: Clock,
      title: "Available When Needed",
      description:
        "Legal emergencies don't wait for business hours. We're available 24/7 for urgent matters.",
    },
    {
      icon: Award,
      title: "Proven Experience",
      description:
        "36+ years of successful representation in Oklahoma courts with a track record of positive results.",
    },
  ];

  const achievements = [
    "36+ years practicing law in Oklahoma",
    "Appointed to Professional Responsibility Commission",
    "Licensed in all Oklahoma state courts",
    "Hundreds of successful criminal defense cases",
    "Extensive family law and domestic relations experience",
    "Member of Oklahoma Bar Association",
    "Continuing legal education instructor",
    "Recognition for ethical practice standards",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              data-testid="text-about-headline"
            >
              About Rochelle & Associates
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
              Three decades of dedicated legal service to the Lawton, Oklahoma
              community. Providing experienced representation when it matters
              most.
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Robin Lee Rochelle
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Founding Attorney & Lead Counsel
                </p>
              </div>

              <div className="space-y-4 text-lg leading-relaxed">
                <p>
                  Robin Lee Rochelle founded Rochelle & Associates with a simple
                  mission: to provide ethical, effective, and assertive legal
                  representation to individuals facing their most challenging
                  situations. With more than 36 years of practice in Oklahoma,
                  Attorney Rochelle has built a reputation for thorough
                  preparation, strategic thinking, and unwavering dedication to
                  his clients.
                </p>

                <p>
                  His appointment to the Professional Responsibility Commission
                  by the Oklahoma Supreme Court reflects his ongoing commitment
                  to the highest ethical standards in the legal profession — a
                  distinction that underscores the respect and trust he has
                  earned among colleagues and the judiciary.
                </p>

                <p>
                  Attorney Rochelle focuses his practice on criminal defense and
                  family law — areas where individuals and families face
                  life-changing decisions and consequences. He understands that
                  behind every case is a person whose future, family, and
                  freedom may be at stake.
                </p>

                <p>
                  Over the course of his career, he has represented clients in
                  cases ranging from misdemeanors to serious felonies, and has
                  guided families through complex divorce, custody, and
                  domestic-relations matters with compassion and skill.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">Education</div>
                    <div className="text-sm text-muted-foreground">
                      JD - San Diego University School of Law, 1988
                    </div>
                    <div className="text-sm text-muted-foreground">
                      BA Accounting - University of Oklahoma, 1984
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">
                      Bar Admissions
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Oklahoma Bar Association, 2009
                    </div>
                    <div className="text-sm text-muted-foreground">
                      California Bar Association, 1989
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">
                      Practice Areas
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Criminal Defense & Family Law
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">
                      Special Appointment
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Professional Responsibility Commission
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              {/* Professional Photo */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                <img
                  src={robinPhoto}
                  alt="Robin Lee Rochelle, Founding Attorney at Rochelle & Associates"
                  className="w-full h-full object-cover object-center"
                  data-testid="img-attorney-robin-about"
                />
              </div>

              {/* Achievements */}
              <Card className="border-0 bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Professional Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                        <span className="text-sm">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The values that guide our practice and our promise to every client
              who trusts us with their case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firmValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.title}
                  className="text-center border-0 bg-background"
                >
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
                Why Choose Rochelle & Associates?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Local Knowledge & Experience
                </h3>
                <p className="text-lg leading-relaxed">
                  As a long-time member of the Lawton legal community, Attorney
                  Rochelle knows the local courts, prosecutors, and judges. This
                  familiarity allows him to craft effective strategies tailored
                  to the specific practices and preferences of the local legal
                  system.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Personalized Legal Strategies
                </h3>
                <p className="text-lg leading-relaxed">
                  We understand that every case is unique, with its own set of
                  circumstances and challenges. Rather than using a
                  one-size-fits-all approach, we develop customized legal
                  strategies designed specifically for your situation and goals.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Direct Attorney Access
                </h3>
                <p className="text-lg leading-relaxed">
                  When you hire Rochelle & Associates, you work directly with
                  Attorney Rochelle, not with paralegals or junior attorneys.
                  You'll have his personal phone number and direct access to
                  discuss your case whenever you have questions or concerns.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Ethical Excellence
                </h3>
                <p className="text-lg leading-relaxed">
                  Our appointment to the Professional Responsibility Commission
                  demonstrates our commitment to the highest ethical standards.
                  You can trust that your case will be handled with integrity,
                  honesty, and in full compliance with all professional conduct
                  rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Makes the Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            When your future is on the line, trust the experience and dedication
            of Rochelle & Associates. Contact us today for a free consultation
            about your case.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4"
            >
              <Link href="/contact" data-testid="button-about-contact">
                <Phone className="mr-2 h-5 w-5" />
                Schedule Your Free Consultation
              </Link>
            </Button>

            <div className="flex items-center text-lg font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              <span data-testid="text-about-phone">(580) 248-1822</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
