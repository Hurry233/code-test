"use client";

import { motion } from "framer-motion";
import { WorldMap } from "@/components/ui/map";

const dots = [
  {
    start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 40.7128, lng: -74.006, label: "New York" },
    end: { lat: 35.6762, lng: 139.6503, label: "Tokyo" },
  },
  {
    start: { lat: 52.52, lng: 13.405, label: "Berlin" },
    end: { lat: -33.8688, lng: 151.2093, label: "Sydney" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "Delhi" },
    end: { lat: -34.6037, lng: -58.3816, label: "Buenos Aires" },
  },
  {
    start: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
    end: { lat: 48.2082, lng: 16.3738, label: "Vienna" },
  },
];

export function GlobalImpactSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-medium text-primary"
            >
              Globally trusted
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              Scaling responsibly across the world
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              Our platform powers teams in research, education, finance, healthcare, and creative industries 
              across more than 175 countries. The world map visualizes live collaboration routes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                {
                  value: "2.3M",
                  label: "Developers building on our APIs",
                },
                {
                  value: "98%",
                  label: "Satisfaction score across enterprise clients",
                },
                {
                  value: "500+",
                  label: "Safety & policy partners globally",
                },
                {
                  value: "24/7",
                  label: "Real-time monitoring and support",
                },
              ].map((stat) => (
                <div key={stat.value} className="space-y-2">
                  <p className="text-3xl font-semibold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-card/60 p-6 backdrop-blur">
              <div className="rounded-2xl border border-border/60 bg-black/90 p-4">
                <WorldMap dots={dots} lineColor="#3b82f6" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
