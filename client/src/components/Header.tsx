import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" }
  ];

  const practiceAreas = [
    { href: "/practice-areas/criminal-defense", label: "Criminal Defense" },
    { href: "/practice-areas/dui-defense", label: "DUI Defense" },
    { href: "/practice-areas/family-law", label: "Family Law" },
    { href: "/practice-areas/domestic-violence", label: "Domestic Violence" }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" data-testid="link-home">
            <div className="flex items-center">
              <span className="text-xl font-serif font-bold text-primary">
                Rochelle & Associates
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location === link.href
                    ? "text-primary border-b-2 border-primary"
                    : "text-muted-foreground"
                }`}
                data-testid={`link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Practice Areas Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button 
                  className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
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
                      data-testid={`link-${area.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {area.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          {/* Phone & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <Phone className="h-4 w-4 mr-2" />
              <span data-testid="text-phone">(580) 248-1822</span>
            </div>
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <Link href="/contact" data-testid="button-free-consultation">
                Free Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" data-testid="button-mobile-menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <div className="flex flex-col space-y-4 mt-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-primary ${
                        location === link.href ? "text-primary" : "text-muted-foreground"
                      }`}
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  
                  <div className="border-t pt-4">
                    <h3 className="font-medium text-sm text-muted-foreground mb-2">Practice Areas</h3>
                    {practiceAreas.map((area) => (
                      <Link
                        key={area.href}
                        href={area.href}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        onClick={() => setIsOpen(false)}
                        data-testid={`link-mobile-${area.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {area.label}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Phone className="h-4 w-4 mr-2" />
                      <span data-testid="text-mobile-phone">(580) 248-1822</span>
                    </div>
                    <Button asChild className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      <Link href="/contact" onClick={() => setIsOpen(false)} data-testid="button-mobile-free-consultation">
                        Free Consultation
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}