"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Code, Image, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "ChatGPT",
    description: "An AI assistant that can engage in natural conversation, answer questions, and help with a wide variety of tasks.",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-600",
    href: "#",
    badge: "Most Popular"
  },
  {
    title: "GPT-4",
    description: "Our most capable model for complex reasoning, creative writing, and detailed instruction following.",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    href: "#",
    badge: "Latest"
  },
  {
    title: "DALL·E 3",
    description: "Create unique images from text descriptions with unprecedented realism and accuracy.",
    icon: Image,
    color: "from-pink-500 to-rose-600",
    href: "#",
  },
  {
    title: "Whisper",
    description: "Advanced speech recognition system for transcription and translation in multiple languages.",
    icon: Mic,
    color: "from-blue-500 to-cyan-600",
    href: "#",
  },
];

export function ProductsSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/5 to-background" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight mb-4"
          >
            Our Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground"
          >
            Powerful AI tools designed for everyone, from developers to creators
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-8 transition-all hover:border-border hover:shadow-xl">
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br ${product.color}`} />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-6 right-6">
                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="relative space-y-6">
                      {/* Icon */}
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${product.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-semibold tracking-tight">
                          {product.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                          {product.description}
                        </p>
                      </div>

                      {/* Link */}
                      <Button 
                        variant="ghost" 
                        className="group/btn p-0 h-auto font-medium hover:bg-transparent"
                      >
                        Learn more
                        <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Button size="lg" className="group">
            View all products
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
