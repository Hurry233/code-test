"use client";

import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email us",
    description: "Get in touch via email",
    contact: "hello@aicorp.com",
    href: "mailto:hello@aicorp.com",
  },
  {
    icon: MessageSquare,
    title: "Live chat",
    description: "Chat with our team",
    contact: "Available 24/7",
    href: "#",
  },
  {
    icon: Phone,
    title: "Call us",
    description: "Mon-Fri from 8am to 5pm",
    contact: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Visit us",
    description: "Visit our office",
    contact: "San Francisco, CA",
    href: "#",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SimplifiedNavbar />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6"
              >
                Let&apos;s start a{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  conversation
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                Have a question or want to work together? We&apos;d love to hear from you.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <motion.a
                      key={method.title}
                      href={method.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Card className="p-6 h-full hover:shadow-lg transition-all hover:border-primary/50 cursor-pointer">
                        <div className="flex flex-col space-y-3">
                          <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>
                          <h3 className="font-semibold">{method.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium text-primary">
                            {method.contact}
                          </p>
                        </div>
                      </Card>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                    Send us a message
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mt-1">
                        <span className="text-sm font-bold text-primary">1</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Tell us about yourself</h3>
                        <p className="text-sm text-muted-foreground">
                          Share your name, email, and company details
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mt-1">
                        <span className="text-sm font-bold text-primary">2</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Describe your needs</h3>
                        <p className="text-sm text-muted-foreground">
                          Let us know how we can help you achieve your goals
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 mt-1">
                        <span className="text-sm font-bold text-primary">3</span>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Get a response</h3>
                        <p className="text-sm text-muted-foreground">
                          Our team will reach out with solutions tailored to you
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Acme Inc"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>

                      <Button type="submit" className="w-full" size="lg">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </Button>
                    </form>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-6xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                  Visit Our Office
                </h2>
                <p className="text-lg text-muted-foreground">
                  We&apos;re located in the heart of San Francisco
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-2xl border border-border/40 bg-muted/50 h-[400px] flex items-center justify-center"
              >
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-lg font-semibold">123 Market Street</p>
                  <p className="text-muted-foreground">San Francisco, CA 94103</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
