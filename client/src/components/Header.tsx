import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@assets/rochelle-logo-clean.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close overlay on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const practiceAreas = [
    { href: "/criminal-defense", label: "Criminal Defense" },
    { href: "/dui-defense", label: "DUI Defense" },
    { href: "/family-law", label: "Family Law" },
    { href: "/practice-areas/domestic-violence", label: "Domestic Violence" },
    { href: "/practice-areas/tribal-family-law", label: "Tribal Family Law" },
    { href: "/practice-areas/wills-trusts-probate", label: "Wills, Trusts & Probate" }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full bg-primary text-primary-foreground transition-shadow duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-24 items-center justify-between">
            {/* Firm Name */}
            <div className="flex-1">
              <Link href="/" className="inline-block" data-testid="link-home">
                <img
                  src={logoImg}
                  alt="Rochelle & Associates — Criminal Defense & Family Law"
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8 flex-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    location === link.href
                      ? "text-secondary border-b-2 border-secondary pb-1"
                      : "text-primary-foreground/90"
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ))}

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    className="flex items-center text-sm font-medium text-primary-foreground/90 hover:text-secondary transition-colors"
                    data-testid="dropdown-practice-areas"
                  >
                    Practice Areas
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {practiceAreas.map((area) => (
                    <DropdownMenuItem key={area.href} asChild>
                      <Link
                        href={area.href}
                        className="cursor-pointer"
                        data-testid={`link-${area.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {area.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
              <div className="text-right">
                <a
                  href="tel:5802481822"
                  className="text-lg font-bold text-primary-foreground hover:text-secondary transition-colors block"
                  data-testid="text-phone"
                >
                  (580) 248-1822
                </a>
                <div className="text-xs text-primary-foreground/70 tracking-wide">
                  AVAILABLE 24/7
                </div>
              </div>
              <Button
                asChild
                className="bg-secondary text-secondary-foreground hover:bg-accent font-semibold px-5 transition-all hover:scale-[1.02]"
              >
                <Link href="/contact" data-testid="button-free-consultation">
                  Free Strategy Session
                </Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(true)}
                className="p-2 text-primary-foreground"
                aria-label="Open menu"
                data-testid="button-mobile-menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] bg-primary flex flex-col">
          {/* Close Button */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-primary-foreground/20">
            <Link href="/" className="inline-block" onClick={() => setIsOpen(false)}>
              <img
                src={logoImg}
                alt="Rochelle & Associates"
                className="h-16 w-auto"
              />
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-primary-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex-1 overflow-y-auto px-6 py-8 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-2xl font-serif font-semibold text-primary-foreground py-3 border-b border-primary-foreground/10 hover:text-secondary transition-colors"
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="pt-4">
              <p className="text-xs font-semibold tracking-widest text-primary-foreground/50 uppercase mb-3">
                Practice Areas
              </p>
              {practiceAreas.map((area) => (
                <Link
                  key={area.href}
                  href={area.href}
                  className="block text-lg text-primary-foreground/80 hover:text-secondary transition-colors py-2.5 border-b border-primary-foreground/10"
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-${area.label.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile CTA at Bottom */}
          <div className="px-6 py-8 border-t border-primary-foreground/20 space-y-4">
            <a
              href="tel:5802481822"
              className="flex items-center justify-center gap-3 w-full bg-secondary text-secondary-foreground py-4 rounded font-bold text-xl hover:bg-accent transition-colors"
              data-testid="text-mobile-phone"
            >
              <Phone className="h-5 w-5" />
              (580) 248-1822
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center w-full border-2 border-primary-foreground/40 text-primary-foreground py-3 rounded font-semibold hover:border-secondary hover:text-secondary transition-colors"
              onClick={() => setIsOpen(false)}
              data-testid="button-mobile-free-consultation"
            >
              Free Strategy Session
            </Link>
            <p className="text-center text-xs text-primary-foreground/50">
              Available 24/7 for emergencies
            </p>
          </div>
        </div>
      )}
    </>
  );
}
