import { Link } from "wouter";
import { Award, Users, Shield, Clock, CheckCircle, Phone, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import robinPhoto from "@assets/robinrochellepic1.webp";
import officeHero from "@assets/lawton-attorney-robin-rochelle-office-hero.jpg";
import { useEffect } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

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
        "Every client receives direct access to Attorney Rochelle — not a paralegal, not a junior associate.",
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
        "36+ years of successful representation in Oklahoma courts, appointed to the Professional Responsibility Commission.",
    },
  ];

  const achievements = [
    "36+ years practicing law in Lawton and Comanche County",
    "Appointed to the Oklahoma Bar Association's Professional Responsibility Commission",
    "Licensed in all Oklahoma state courts",
    "1,000+ criminal defense and family law cases handled",
    "Extensive family law and domestic relations experience",
    "Member of Oklahoma Bar Association",
    "Continuing legal education instructor",
    "Recognition for ethical practice standards",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-[hsl(212,48%,12%)]" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1
              className="text-4xl md:text-5xl font-serif font-bold mb-6"
              data-testid="text-about-headline"
            >
              About Rochelle & Associates
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
              Three decades of dedicated legal service to the Lawton, Oklahoma
              community. Providing experienced representation when it matters most.
            </p>
          </div>
        </div>
      </section>

      {/* Attorney Profile Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="space-y-6"
            >
              <div>
                <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-2">
                  Founding Attorney & Lead Counsel
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Robin Lee Rochelle
                </h2>
              </div>

              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Robin Rochelle has spent 36 years doing one thing in Lawton: fighting for
                  people when the system turns against them. He founded Rochelle & Associates
                  with a mission — ethical, effective, and assertive legal representation for
                  individuals facing their most challenging situations.
                </p>

                <p>
                  As a former insurance defense attorney who practiced in California, Attorney
                  Rochelle understands exactly how the prosecution builds its case. That
                  knowledge — from the other side of the courtroom — shapes every defense
                  strategy he develops.
                </p>

                <p>
                  Attorney Rochelle focuses his practice on criminal defense and family law,
                  the areas where individuals and families face the most life-changing
                  consequences. He understands that behind every case is a person whose
                  freedom, family, and future may be on the line.
                </p>

                <p>
                  Over the course of his career, he has represented clients in cases ranging
                  from misdemeanors to serious felonies, and guided families through complex
                  divorce and custody matters with skill and compassion.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">Education</div>
                    <div className="text-sm text-muted-foreground">JD — San Diego University School of Law, 1988</div>
                    <div className="text-sm text-muted-foreground">BA Accounting — University of Oklahoma, 1984</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">Bar Admissions</div>
                    <div className="text-sm text-muted-foreground">Oklahoma Bar Association, 2009</div>
                    <div className="text-sm text-muted-foreground">California Bar Association, 1989</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-muted/50">
                  <CardContent className="p-4">
                    <div className="font-semibold text-primary">Specialization</div>
                    <div className="text-sm text-muted-foreground">Criminal Defense & Family Law</div>
                  </CardContent>
                </Card>
                <Card className="border-0 bg-secondary/10 border-secondary/20 border">
                  <CardContent className="p-4">
                    <div className="font-semibold text-secondary">Special Appointment</div>
                    <div className="text-sm text-muted-foreground">Professional Responsibility Commission — Oklahoma Bar Association</div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            <div className="space-y-6">
              {/* Professional Photo */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src={robinPhoto}
                  alt="Robin Lee Rochelle, Founding Attorney at Rochelle & Associates"
                  className="w-full h-full object-cover object-center"
                  data-testid="img-attorney-robin-about"
                />
              </motion.div>

              {/* Achievements */}
              <Card className="border-0 bg-muted/30">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="w-5 h-5 mr-2 text-secondary" />
                    Professional Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-secondary flex-shrink-0" />
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

      {/* The Commission Story — Dedicated Section */}
      <section className="py-20 bg-[hsl(212,48%,12%)] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-6">
                <Award className="h-4 w-4" />
                A Credential No Competitor Can Match
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                The Attorney the Oklahoma Supreme Court Trusts
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Robin Rochelle serves on the{" "}
                <strong className="text-white">Professional Responsibility Commission</strong> —
                the Oklahoma Bar Association's statewide ethics enforcement body, established
                by and operating under the authority of the Oklahoma Supreme Court. The
                Commission investigates allegations of professional misconduct by attorneys
                and recommends discipline to the Supreme Court.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-secondary">What Does This Mean?</h3>
                <p className="text-white/70 leading-relaxed">
                  Lawyer members are appointed by the OBA President with Board of Governors
                  approval — a recognition of exemplary standing within the profession. The
                  Commission operates under the Oklahoma Supreme Court's Rules Governing
                  Disciplinary Proceedings, and its formal complaint recommendations go
                  directly to the Supreme Court.
                </p>
                <p className="text-white/70 leading-relaxed">
                  When you hire Robin Rochelle, you are hiring an attorney trusted by the
                  Oklahoma Bar to help police the legal profession across the entire state.
                  That is not a marketing claim. It is the public record.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-serif font-semibold text-secondary">Why It Matters to You</h3>
                <ul className="space-y-3">
                  {[
                    "No OKC or Tulsa competitor in our analysis holds this appointment",
                    "Appointed by the OBA President — a peer recognition of ethical standing",
                    "The Commission operates under Oklahoma Supreme Court authority",
                    "Your case is handled with the same ethics standard he enforces statewide",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Photo Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className="text-center mb-10"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Our Lawton Office
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in downtown Lawton at 511 SW C Ave — serving Comanche County for over 36 years.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              className="rounded-xl overflow-hidden shadow-xl aspect-[16/7]"
            >
              <img
                src={officeHero}
                alt="Rochelle & Associates law office in downtown Lawton, Oklahoma"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Firm Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Commitment to You
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The values that guide our practice and our promise to every client
              who trusts us with their case.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {firmValues.map((value) => {
              const IconComponent = value.icon;
              return (
                <Card key={value.title} className="text-center border-0 bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-serif">{value.title}</CardTitle>
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
      <section className="py-20 bg-background">
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
                <p className="text-lg leading-relaxed text-muted-foreground">
                  As a long-time member of the Lawton legal community, Attorney
                  Rochelle knows the local courts, prosecutors, and judges. This
                  familiarity allows him to craft effective strategies tailored
                  to the specific practices of the Comanche County legal system.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Personalized Legal Strategies
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Every case is unique. Rather than a one-size-fits-all approach,
                  we develop customized strategies designed specifically for your
                  situation, your judge, and your goals.
                </p>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Direct Attorney Access
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  When you hire Rochelle & Associates, you work directly with
                  Attorney Rochelle — not paralegals or junior attorneys.
                  You'll have his personal attention on your case from day one.
                </p>

                <h3 className="text-2xl font-serif font-semibold text-primary">
                  Ethical Excellence
                </h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  His appointment to the Professional Responsibility Commission
                  demonstrates a commitment to the highest ethical standards.
                  Your case will be handled with integrity, honesty, and full
                  compliance with every professional conduct rule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[hsl(212,48%,12%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Experience Makes the Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/70 leading-relaxed">
            When your future is on the line, trust the experience and integrity of
            Rochelle & Associates. Contact us today for a free strategy session.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-accent text-lg px-8 py-4 transition-all hover:scale-[1.02]"
            >
              <Link href="/contact" data-testid="button-about-contact">
                <Phone className="mr-2 h-5 w-5" />
                Free Strategy Session
              </Link>
            </Button>

            <a
              href="tel:5802481822"
              className="flex items-center text-lg font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="mr-2 h-5 w-5" />
              <span data-testid="text-about-phone">(580) 248-1822</span>
            </a>
          </div>
          <p className="text-sm text-white/40 mt-4">Available 24/7 for emergencies</p>
        </div>
      </section>
    </div>
  );
}
