import { useState, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema, type InsertContactSubmission } from "@shared/schema";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Rochelle & Associates | Lawton OK Criminal Defense Attorney";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Contact Rochelle & Associates in Lawton, OK for a free consultation. Located at 511 SW C Ave. Call (580) 248-1822 for criminal defense and family law representation.");
    }
  }, []);
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }
      
      return response.json();
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Message Sent Successfully",
        description: "We'll contact you within 24 hours to discuss your case.",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error) => {
      toast({
        title: "Error Sending Message",
        description: "Please try again or call us directly at (580) 248-1822",
        variant: "destructive",
      });
      console.error('Contact form error:', error);
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "(580) 248-1822",
      secondary: "Available 24/7 for emergencies",
      href: "tel:5802481822"
    },
    {
      icon: Mail,
      title: "Email", 
      primary: "info@rochellelaw.com",
      secondary: "We respond within 4 hours",
      href: "mailto:info@rochellelaw.com"
    },
    {
      icon: MapPin,
      title: "Address",
      primary: "511 SW C Ave",
      secondary: "Lawton, OK 73501",
      href: "https://maps.google.com/?q=511+SW+C+Ave+Lawton+OK+73501"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Mon-Fri: 8:00 AM - 5:00 PM",
      secondary: "Weekend appointments available",
      href: null
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/90 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-contact-headline">
              Contact Rochelle & Associates
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed mb-8">
              Ready to discuss your case? We're here to help with your criminal defense 
              and family law needs throughout Lawton, Oklahoma.
            </p>
            
            <div className="bg-secondary/20 rounded-lg p-6 inline-block">
              <p className="text-lg font-semibold text-secondary mb-2">Free Initial Consultation</p>
              <div className="flex items-center justify-center text-2xl font-bold">
                <Phone className="mr-2 h-6 w-6" />
                <span data-testid="text-contact-hero-phone">(580) 248-1822</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info) => {
              const IconComponent = info.icon;
              const content = (
                <Card className="text-center border-0 bg-muted/30 hover:bg-muted/50 transition-colors h-full">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg font-serif">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-semibold text-primary mb-1" data-testid={`text-contact-${info.title.toLowerCase()}-primary`}>
                      {info.primary}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {info.secondary}
                    </p>
                  </CardContent>
                </Card>
              );

              return info.href ? (
                <a 
                  key={info.title} 
                  href={info.href}
                  className="block"
                  data-testid={`link-contact-${info.title.toLowerCase()}`}
                >
                  {content}
                </a>
              ) : (
                <div key={info.title}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <Card className="border-0 bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Send Us a Message</CardTitle>
                  <CardDescription className="text-base">
                    Tell us about your case and we'll get back to you within 24 hours.
                    All consultations are confidential.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Send className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-xl font-semibold text-primary mb-2">Message Sent Successfully!</h3>
                      <p className="text-muted-foreground mb-6">
                        We've received your message and will contact you within 24 hours to discuss your case.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        data-testid="button-send-another"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name *</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  data-testid="input-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address *</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email"
                                  placeholder="Enter your email address" 
                                  {...field} 
                                  data-testid="input-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel"
                                  placeholder="(580) 123-4567" 
                                  {...field} 
                                  data-testid="input-phone"
                                />
                              </FormControl>
                              <FormDescription>
                                Optional, but helps us contact you faster
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Tell Us About Your Case *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Please describe your legal situation. Include relevant details about your case, charges, or family law matter. All information is confidential."
                                  className="min-h-[120px]"
                                  {...field}
                                  data-testid="input-message"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          size="lg" 
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                          disabled={submitMutation.isPending}
                          data-testid="button-submit-contact"
                        >
                          {submitMutation.isPending ? (
                            "Sending Message..."
                          ) : (
                            <>
                              <Send className="mr-2 h-4 w-4" />
                              Send Message
                            </>
                          )}
                        </Button>

                        <p className="text-xs text-muted-foreground text-center">
                          By submitting this form, you agree to our privacy policy. 
                          This form creates no attorney-client relationship.
                        </p>
                      </form>
                    </Form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Map and Office Info */}
            <div className="space-y-6">
              <Card className="border-0 bg-background">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">Our Office Location</CardTitle>
                  <CardDescription>
                    Conveniently located in downtown Lawton, Oklahoma
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-medium">Interactive Map</p>
                      <p className="text-sm">511 SW C Ave, Lawton, OK 73501</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Parking & Accessibility</h4>
                      <p className="text-sm text-muted-foreground">
                        Free parking available. Our office is fully accessible and located 
                        on the ground floor for your convenience.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Public Transportation</h4>
                      <p className="text-sm text-muted-foreground">
                        Easily accessible by bus routes 2 and 5. The Main Street bus stop 
                        is located directly in front of our building.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 bg-primary text-primary-foreground">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-4">Emergency Legal Services</h3>
                  <p className="mb-4">
                    Facing arrest or urgent legal matters? We provide 24/7 emergency 
                    consultation for serious criminal charges and time-sensitive family law issues.
                  </p>
                  <div className="flex items-center text-lg font-semibold">
                    <Phone className="mr-2 h-5 w-5" />
                    <span data-testid="text-emergency-phone">(580) 248-1822</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}