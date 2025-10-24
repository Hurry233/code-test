"use client";

import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { ProductsSection } from "@/components/ui/products-section";
import { FeaturesBentoSection } from "@/components/ui/features-bento-section";
import { PricingSection } from "@/components/ui/pricing-section";
import { Logos3 } from "@/components/ui/logos3";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const integrations = [
  "Slack",
  "Salesforce",
  "Notion",
  "Zapier",
  "Linear",
  "Asana",
];

export default function ProductsPage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-24 sm:pt-40 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-muted/20" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  AI-first product suite
                </span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  Everything you need to build experiences your users love
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From conversational assistants to advanced reasoning tools, our products are designed for builders who demand reliability, safety, and performance at scale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg">Start building</Button>
                  <Button variant="outline" size="lg">
                    View documentation
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="rounded-3xl border border-border/40 bg-card/40 p-6 backdrop-blur"
              >
                <h3 className="text-xl font-semibold mb-4">Plug-and-play integrations</h3>
                <p className="text-muted-foreground mb-6">
                  Connect our APIs with the tools your team already uses. Ship faster with production-ready integrations.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {integrations.map((name) => (
                    <div
                      key={name}
                      className="rounded-xl border border-border/50 bg-background/60 px-4 py-3 text-sm font-medium text-muted-foreground"
                    >
                      {name}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Logos */}
        <Logos3 heading="Trusted by the world's most innovative teams" />

        {/* Product grid */}
        <ProductsSection />

        {/* Feature stories */}
        <FeaturesBentoSection />

        {/* Pricing CTA */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <span className="inline-flex items-center rounded-full bg-secondary/10 px-4 py-1 text-sm font-medium text-secondary">
                Pricing built for scale
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Flexible plans for every stage of your product
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Start for free, launch quickly, and upgrade only when you&apos;re ready. No hidden fees or surprises.
              </p>
            </motion.div>
          </div>
        </section>

        <PricingSection />
      </main>
    </>
  );
}
