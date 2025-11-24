"use client";

import { motion } from "framer-motion";

export function ResearchShowcase() {
  const highlightCards = [
    {
      title: "Interactive prototypes",
      caption: "Live demos",
      description: "Experience breakthrough interfaces generated directly from our latest model checkpoints.",
    },
    {
      title: "Alignment insights",
      caption: "Research briefs",
      description: "Transparent reporting keeps every experiment grounded in safety metrics and human feedback.",
    },
    {
      title: "Open collaborations",
      caption: "Global labs",
      description: "Join partner institutions shaping benchmarks for reasoning, robotics, and multimodal learning.",
    },
    {
      title: "Deployment playbooks",
      caption: "Production ready",
      description: "Operational guides show how we carry ideas from whiteboard concepts to launched features.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Research in motion
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Bridging theory and product experiences
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Our research programs explore new capabilities and alignment techniques, and we bring those advances 
              into production with careful evaluation. Preview the latest interactive concepts in real time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                {
                  title: "Generative experiences",
                  description: "Transform prompts into dynamic worlds, interfaces, and simulations."
                },
                {
                  title: "Adaptive reasoning",
                  description: "Models that learn from feedback loops and adapt in-context."
                },
                {
                  title: "Multimodal interfaces",
                  description: "Understand text, imagery, and motion in a single unified system."
                },
                {
                  title: "Evaluation pipelines",
                  description: "Continuous monitoring and alignment scoring for safe deployment."
                }
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full rounded-3xl border border-border/60 bg-background/60 p-6 shadow-[0px_0px_70px_-25px_rgba(80,80,120,0.35)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/0 to-primary/30 blur-3xl" />
              <div className="relative grid gap-6 sm:grid-cols-2">
                {highlightCards.map((card) => (
                  <div
                    key={card.title}
                    className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 backdrop-blur"
                  >
                    <span className="text-xs uppercase tracking-wider text-primary/80">
                      {card.caption}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
