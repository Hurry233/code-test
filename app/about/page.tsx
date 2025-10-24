"use client";

import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { motion } from "framer-motion";
import { Target, Users, Zap, Heart, Award, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "We're committed to advancing AI technology for the benefit of humanity.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe in the power of collaboration and open research.",
  },
  {
    icon: Zap,
    title: "Innovation First",
    description: "We push the boundaries of what's possible with artificial intelligence.",
  },
  {
    icon: Heart,
    title: "Safety Focused",
    description: "Building safe and beneficial AI is at the core of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for excellence in research, products, and impact.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Our work aims to benefit people around the world.",
  },
];

const stats = [
  { number: "500M+", label: "Users Worldwide" },
  { number: "150+", label: "Countries" },
  { number: "1000+", label: "Team Members" },
  { number: "10B+", label: "API Requests Daily" },
];

export default function AboutPage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              >
                Building the future of{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                  artificial intelligence
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                We&apos;re on a mission to ensure that artificial general intelligence benefits all of humanity.
                Our research and products are designed to be safe, beneficial, and accessible to everyone.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-20 border-y border-border/40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-lg leading-relaxed text-muted-foreground"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                  Our Story
                </h2>
                <p>
                  Founded with the vision of ensuring that artificial general intelligence benefits all of humanity,
                  we&apos;ve grown from a research organization into a leading AI company that develops cutting-edge
                  technologies and products used by millions worldwide.
                </p>
                <p>
                  Our journey began with a simple yet ambitious goal: to advance digital intelligence in the way
                  that is most likely to benefit humanity as a whole. This mission has guided every decision we&apos;ve
                  made, from our research priorities to our product development.
                </p>
                <p>
                  Today, we&apos;re proud to be at the forefront of AI research and development, with a team of world-class
                  researchers, engineers, and product designers working together to push the boundaries of what&apos;s
                  possible with artificial intelligence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4"
              >
                Our Values
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-base sm:text-lg text-muted-foreground"
              >
                The principles that guide our work and shape our culture
              </motion.p>
            </div>

            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                        <div className="flex flex-col space-y-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight">
                            {value.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {value.description}
                          </p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                Join us on our mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We&apos;re always looking for talented people who share our vision and values.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-6"
                >
                  Get in Touch
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-6"
                >
                  Explore Products
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
