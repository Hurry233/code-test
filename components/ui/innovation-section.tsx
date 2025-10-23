"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Brain, Lightbulb, Network, ShieldCheck } from "lucide-react";

const innovations = [
  {
    title: "Aligned Intelligence",
    description: "Models that understand nuance, context, and intent with unprecedented depth.",
    icon: Brain,
    gradient: "from-purple-500/20 via-purple-500/10 to-transparent",
  },
  {
    title: "Creative Systems",
    description: "Design, code, and storytelling tools that adapt to your imagination.",
    icon: Lightbulb,
    gradient: "from-blue-500/20 via-blue-500/10 to-transparent",
  },
  {
    title: "Global Reach",
    description: "An AI infrastructure that scales responsibly to billions of users.",
    icon: Network,
    gradient: "from-teal-500/20 via-teal-500/10 to-transparent",
  },
  {
    title: "Safety First",
    description: "Continuous red-teaming, evaluations, and governance built-in by default.",
    icon: ShieldCheck,
    gradient: "from-amber-500/20 via-amber-500/10 to-transparent",
  },
];

export function InnovationSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-background">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-muted/40 to-transparent" />
      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Built for the frontier of what AI can do
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Our research and product teams collaborate to transform breakthroughs into accessible experiences. 
              Every release is guided by the same principle: augment human capability while keeping humans in control.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition"
          >
            Explore our research
            <ArrowUpRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {innovations.map((innovation, index) => {
            const Icon = innovation.icon;
            return (
              <motion.div
                key={innovation.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-8"
              >
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${innovation.gradient}`} />
                <div className="relative space-y-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-border/70 bg-background/60 backdrop-blur-sm">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {innovation.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {innovation.description}
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    Learn more
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
