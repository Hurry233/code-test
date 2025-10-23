"use client";

import { motion } from "framer-motion";
import { Shield, Scale, Users, AlertTriangle } from "lucide-react";

const policies = [
  {
    title: "Proactive safety",
    description: "Every release goes through adversarial testing, bias evaluation, and real-world performance monitoring.",
    icon: Shield,
  },
  {
    title: "Human oversight",
    description: "Dedicated policy teams collaborate with researchers, ethicists, and impacted communities.",
    icon: Users,
  },
  {
    title: "Transparent governance",
    description: "Comprehensive documentation, system cards, and alignment evaluations published for every major update.",
    icon: Scale,
  },
  {
    title: "Responsible deployment",
    description: "Tiered API access, rate limits, and safety filters designed to prevent misuse at scale.",
    icon: AlertTriangle,
  },
];

export function SafetySection() {
  return (
    <section id="safety" className="relative py-24 sm:py-32 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-muted/40 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-sm font-medium text-primary"
            >
              Safety & Alignment
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Building AI that&apos;s beneficial by design
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Safety is integrated across our research, product, and policy work. We iterate with feedback from 
              global communities, regulators, and independent partners to ensure our systems remain trustworthy.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {policies.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="space-y-1.5">
                      <p className="text-base font-medium text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur"
          >
            <div className="space-y-6">
              {policies.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-border/50 bg-background/70 p-5">
                    <div className="mt-1 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-base font-semibold text-foreground">{item.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
