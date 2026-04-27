import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Spotlight } from "@/components/ui/spotlight";
import {
  Shield,
  Scale,
  Users,
  Award,
  Phone,
  ChevronRight,
  Star,
  MapPin,
  CheckCircle,
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
import robinPhoto from "@assets/robin-rochelle-professional-picture.jpg";
import courthouseHero from "@assets/comanchecountycourthouse-ezgif.com-jpg-to-webp-converter.webp";

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

// Animated counter hook
function useCountUp(target: number, duration: number = 1.6) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

function AnimatedSection({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Aceternity Card Hover Effect — sliding gold background between practice area cards.
// Fix notes:
//   1. Use <div> (not <Link>) as the hover-tracking element so onMouseEnter/Leave
//      are guaranteed to fire (Link passes through but div is unambiguous).
//   2. Card uses bg-transparent so the motion.span fills the full card area,
//      not just the 8px gutter. Previously bg-card (opaque white) buried the effect.
//   3. Increased hover background to bg-secondary/15 for clear visibility.
function PracticeAreaHoverGrid({ areas }: { areas: typeof practiceAreasMock }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {areas.map((area, idx) => {
        const IconComponent = area.icon;
        return (
          <div
            key={area.href}
            className="relative group p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Aceternity sliding background — fills full slot because Card is bg-transparent */}
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 bg-secondary/15 block rounded-lg"
                  layoutId="practiceHoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                />
              )}
            </AnimatePresence>

            {/* Link wraps the card for navigation; Card is transparent so hover shows through */}
            <Link href={area.href} className="block h-full">
              <Card className="relative z-10 h-full border border-border group-hover:border-secondary/60 bg-transparent transition-colors duration-150">
                <CardHeader className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
                      <IconComponent className="h-7 w-7 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <CardTitle className="text-xl font-serif">{area.title}</CardTitle>
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
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors pointer-events-none"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

// Type alias so PracticeAreaHoverGrid can reference the practiceAreas shape
type practiceAreasMock = {
  title: string;
  description: string;
  icon: React.ElementType;
  href: string;
  features: string[];
}[];

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
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
          "opens": "09:00",
          "closes": "17:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Friday",
          "opens": "09:00",
          "closes": "12:00"
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
        "Aggressive defense for felonies, misdemeanors, and federal crimes. Protecting your rights and future in Comanche County.",
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
        "Expert defense against DUI charges. Challenging evidence and protecting your driving privileges. 15-day deadline to save your license.",
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
        "Compassionate representation for divorce, custody, and family matters during the most difficult transitions.",
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
        "Sensitive defense for domestic violence allegations. Protecting relationships, rights, and reputations.",
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
        "Southwest Oklahoma's only attorney with tribal court expertise — a genuine competitive advantage for tribal community members.",
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

  // CountUp refs
  const { count: yearsCount, ref: yearsRef } = useCountUp(36);
  const { count: casesCount, ref: casesRef } = useCountUp(1000);

  return (
    <div className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="relative bg-primary text-primary-foreground overflow-hidden">
        {/* Courthouse background image — fetchpriority="high" for LCP, loading="eager" since above fold */}
        <img
          src={courthouseHero}
          alt=""
          width={1375}
          height={767}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark overlay — two-layer approach: base black + directional gradient for depth */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
        {/* Two spotlights crossing from left and right — illuminates the headline */}
        <Spotlight
          className="-top-40 left-0 md:-top-20 md:left-1/4"
          fill="white"
        />
        <Spotlight
          className="-top-40 right-0 md:-top-20 md:right-1/4"
          fill="hsl(40 80% 85%)"
        />
        <div className="relative container mx-auto px-4 py-12 md:py-20 lg:py-36">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1
                className="text-4xl md:text-6xl lg:text-7xl font-serif font-extrabold mb-6 leading-tight [text-shadow:_0_2px_8px_rgba(0,0,0,0.85),_0_1px_3px_rgba(0,0,0,0.9)]"
                data-testid="text-hero-headline"
              >
                When Everything Is on the Line,{" "}
                <span className="text-secondary">Lawton Trusts Rochelle.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl mb-3 text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto"
            >
              Serving on the Professional Responsibility Commission — the Oklahoma
              Bar's statewide ethics enforcement body, established by and operating
              under the authority of the Oklahoma Supreme Court.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
              className="text-base text-primary-foreground/60 mb-10 tracking-wide"
            >
              36 years. 1,000+ cases. Available 24/7. One call.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-accent text-lg px-8 py-4 transition-all hover:scale-[1.02] shadow-lg"
              >
                <Link href="/contact" data-testid="button-hero-consultation">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Strategy Session
                </Link>
              </Button>

              <a
                href="tel:5802481822"
                className="flex items-center text-lg font-semibold hover:text-secondary transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span data-testid="text-hero-phone">(580) 248-1822</span>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 border-t border-primary-foreground/20 pt-10"
            >
              <div className="text-center" ref={yearsRef}>
                <div className="text-5xl font-serif font-bold text-secondary">
                  {yearsCount}+
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1 tracking-wide uppercase">
                  Years in Lawton Courts
                </div>
              </div>
              <div className="text-center" ref={casesRef}>
                <div className="text-5xl font-serif font-bold text-secondary">
                  {casesCount}+
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1 tracking-wide uppercase">
                  Cases Handled
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-serif font-bold text-secondary">
                  SW OK
                </div>
                <div className="text-sm text-primary-foreground/70 mt-1 tracking-wide uppercase">
                  Comanche County Courts
                </div>
              </div>
            </motion.div>
            <p className="text-xs text-primary-foreground/40 mt-3 italic">
              Each case is unique. Past results do not guarantee future outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Urgency Strip ── */}
      <div className="bg-secondary text-secondary-foreground py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="font-semibold text-lg">
            Arrested or facing charges?{" "}
            <a
              href="tel:5802481822"
              className="underline underline-offset-2 hover:no-underline font-bold"
            >
              Call (580) 248-1822 now.
            </a>{" "}
            You have rights. Attorney Rochelle is available 24/7.
          </p>
        </div>
      </div>

      {/* ── Primary Practice Areas — 3 Cards ── */}
      <section className="py-20 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Experienced Legal Representation in Lawton, Oklahoma
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Rochelle & Associates provides comprehensive legal services for{" "}
                  <Link href="/criminal-defense" className="text-primary font-semibold hover:underline" data-testid="link-home-criminal">
                    Criminal Defense
                  </Link>
                  ,{" "}
                  <Link href="/dui-defense" className="text-primary font-semibold hover:underline" data-testid="link-home-dui">
                    DUI Defense
                  </Link>
                  , and{" "}
                  <Link href="/family-law" className="text-primary font-semibold hover:underline" data-testid="link-home-family">
                    Family Law
                  </Link>{" "}
                  throughout Comanche County. 36 years of local courtroom experience fighting for your rights, your freedom, and your family.
                </p>
              </div>
            </AnimatedSection>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {[
                {
                  Icon: Shield,
                  href: "/criminal-defense",
                  title: "Criminal Defense Attorney",
                  desc: "Aggressive defense for felonies, misdemeanors, and federal crimes in Lawton and Comanche County. You get Attorney Rochelle — not a paralegal, not a junior associate.",
                  cta: "View Criminal Defense Services",
                  testId: "link-criminal-card",
                },
                {
                  Icon: Scale,
                  href: "/dui-defense",
                  title: "DUI Defense Lawyer",
                  desc: "Time-sensitive defense for DUI/DWI charges. You have only 15 days to save your license. Call now — available 24/7 for Lawton arrests.",
                  cta: "View DUI Defense Services",
                  testId: "link-dui-card",
                },
                {
                  Icon: Users,
                  href: "/family-law",
                  title: "Family Law Attorney",
                  desc: "Compassionate representation for divorce, child custody, and domestic relations in Comanche County. Protecting your family during life's hardest transitions.",
                  cta: "View Family Law Services",
                  testId: "link-family-card",
                },
              ].map(({ Icon, href, title, desc, cta, testId }) => (
                <motion.div key={href} variants={fadeUp}>
                  <Card className="border-2 border-primary/20 hover:border-secondary hover:shadow-lg transition-all duration-300 h-full bg-card">
                    <CardContent className="p-6 flex flex-col h-full">
                      <Icon className="w-12 h-12 text-secondary mb-4" />
                      <h3 className="text-xl font-serif font-bold text-primary mb-3">
                        <Link href={href} className="hover:text-secondary transition-colors" data-testid={testId}>
                          {title}
                        </Link>
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed flex-1">{desc}</p>
                      <Button asChild variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
                        <Link href={href} data-testid={`button-${testId}`}>
                          {cta}
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Why Rochelle — Commission Story ── */}
      <section className="py-20 bg-[hsl(212,48%,12%)] text-white">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-4 py-2 rounded-full text-sm font-semibold tracking-wide mb-8">
                <Award className="h-4 w-4" />
                A Credential No Competitor Can Claim
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                The Attorney the Oklahoma Supreme Court Trusts
              </h2>
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-3xl mx-auto">
                Robin Rochelle serves on the{" "}
                <strong className="text-white">Professional Responsibility Commission</strong> —
                the Oklahoma Bar Association's statewide ethics body, established by
                and operating under the authority of the Oklahoma Supreme Court, that
                investigates attorney misconduct and recommends discipline across
                the entire state.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
                {[
                  {
                    title: "Appointed by the Oklahoma Bar Association",
                    body: "Lawyer members are appointed by the OBA President with Board of Governors approval — a recognition of exemplary character and ethical standing within the profession.",
                  },
                  {
                    title: "Holds Every Lawyer in Oklahoma Accountable",
                    body: "The Commission investigates attorney misconduct and recommends discipline to the Oklahoma Supreme Court. Robin Rochelle enforces the standard statewide — and holds himself to it in every case.",
                  },
                  {
                    title: "No OKC or Tulsa Firm Can Make This Claim",
                    body: "Cannon, Lai & Turner, Boeheim Freeman — none hold this appointment. It is a genuine, externally verified credential that signals the deepest trust.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 border border-white/10 rounded-lg p-5">
                    <h3 className="font-semibold text-secondary mb-2 leading-snug">{item.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-accent transition-all hover:scale-[1.02]"
              >
                <Link href="/about">
                  Learn More About Attorney Rochelle
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Attorney Profile ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <AnimatedSection className="space-y-6">
              <div>
                <p className="text-sm font-semibold tracking-widest text-secondary uppercase mb-2">
                  Lead Attorney & Founder
                </p>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Meet Robin Lee Rochelle
                </h2>
              </div>

              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Robin Rochelle has spent 36 years doing one thing in Lawton: fighting for
                  people when the system turns against them. As a former insurance defense
                  attorney, he knows exactly how the other side builds its case — and how to
                  dismantle it.
                </p>
                <p>
                  When you hire Rochelle & Associates, you work directly with Attorney
                  Rochelle. Not a paralegal. Not a junior associate. The attorney the
                  Oklahoma Supreme Court trusts to police the entire legal profession.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Education", value: "JD — San Diego, 1988" },
                  { label: "Oklahoma Bar", value: "Admitted 2009" },
                  { label: "California Bar", value: "Admitted 1989" },
                  { label: "Commission", value: "Professional Responsibility" },
                ].map((item) => (
                  <div key={item.label} className="p-4 bg-muted/50 rounded-lg">
                    <div className="font-semibold text-primary text-sm">{item.label}</div>
                    <div className="text-sm text-muted-foreground mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-accent transition-all"
              >
                <Link href="/about" data-testid="button-attorney-profile">
                  Full Attorney Profile
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </AnimatedSection>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-xl">
                <img
                  src={robinPhoto}
                  alt="Robin Lee Rochelle, Attorney at Rochelle & Associates"
                  className="w-full h-full object-cover object-center"
                  data-testid="img-attorney-robin"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                What Lawton Says About Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Real testimonials from clients who trusted us with their most
                important legal matters in Comanche County.
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, x: idx % 2 === 0 ? -30 : 30 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
                }}
              >
                <Card className="border-0 bg-card shadow-sm hover:shadow-md transition-shadow h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5"
                          style={{ fill: "hsl(43 80% 60%)", color: "hsl(43 80% 60%)" }}
                        />
                      ))}
                    </div>

                    <blockquote className="text-base mb-4 leading-relaxed flex-1 italic text-foreground/80">
                      "{testimonial.content}"
                    </blockquote>

                    <div className="flex justify-between items-center pt-2 border-t border-border">
                      <div>
                        <div
                          className="font-semibold text-primary"
                          data-testid={`text-testimonial-name-${testimonial.id}`}
                        >
                          {testimonial.name}
                        </div>
                        {testimonial.caseType && (
                          <div className="text-xs text-muted-foreground">
                            {testimonial.caseType} Client, Lawton OK
                          </div>
                        )}
                      </div>
                      <Badge variant="outline" className="text-xs border-secondary text-secondary">
                        {testimonial.caseType}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── All Practice Areas ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                All Areas of Practice
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive legal services focused on criminal defense and
                family law throughout Southwest Oklahoma.
              </p>
            </div>
          </AnimatedSection>

          {/* Aceternity Card Hover Effect — animated sliding background between cards */}
          <PracticeAreaHoverGrid areas={practiceAreas} />
        </div>
      </section>

      {/* ── Location / Map Section ── */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                  Located in Downtown Lawton
                </h2>
                <p className="text-lg text-muted-foreground">
                  Proudly serving Lawton and Comanche County — visit our office downtown
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Card className="border-0 bg-card shadow-sm">
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
                        <p className="text-lg mb-4">Lawton, OK 73501</p>
                        <div className="space-y-1 text-sm text-muted-foreground mb-4">
                          <p><strong className="text-foreground">Office:</strong> Mon–Thu 9–5 PM, Fri 9 AM–12 PM</p>
                          <p><strong className="text-foreground">Emergency Line:</strong>{" "}
                            <a href="tel:5802481822" className="text-secondary font-semibold hover:underline">
                              Available 24/7
                            </a>
                          </p>
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
                  <div className="p-4 bg-card rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">Free Parking</p>
                    <p className="font-semibold text-primary text-sm">Available On-Site</p>
                  </div>
                  <div className="p-4 bg-card rounded-lg shadow-sm">
                    <CheckCircle className="h-5 w-5 text-secondary mx-auto mb-1" />
                    <p className="text-sm text-muted-foreground">Accessibility</p>
                    <p className="font-semibold text-primary text-sm">Ground Floor Office</p>
                  </div>
                </div>
              </div>

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
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 bg-[hsl(212,48%,12%)] text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Don't Face This Alone.
              <br />
              <span className="text-secondary">Call Lawton's Most Credentialed Defense Attorney.</span>
            </h2>
            <p className="text-lg mb-3 max-w-2xl mx-auto text-white/70 leading-relaxed">
              36 years. 1,000+ cases. Member of the Oklahoma Bar's Professional Responsibility Commission.
              The attorney who knows your courthouse, your judges, and your community.
            </p>
            <p className="text-sm text-white/50 mb-10">
              Available 24/7 for emergencies — including nights, weekends, and holidays.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-accent text-lg px-8 py-4 transition-all hover:scale-[1.02] shadow-lg"
              >
                <Link href="/contact" data-testid="button-cta-contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Free Strategy Session
                </Link>
              </Button>

              <a
                href="tel:5802481822"
                className="flex items-center text-lg font-semibold hover:text-secondary transition-colors"
              >
                <Phone className="mr-2 h-5 w-5" />
                <span data-testid="text-cta-phone">(580) 248-1822</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Mobile Sticky CTA Bar ── */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary border-t border-primary-foreground/20 grid grid-cols-2">
        <a
          href="tel:5802481822"
          className="flex items-center justify-center gap-2 py-4 text-primary-foreground font-semibold text-sm bg-secondary hover:bg-accent transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 py-4 text-primary-foreground font-semibold text-sm hover:bg-primary/80 transition-colors"
        >
          Schedule Session
        </Link>
      </div>
    </div>
  );
}
