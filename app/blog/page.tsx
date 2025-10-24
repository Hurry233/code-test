"use client";

import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Tag, ArrowUpRight } from "lucide-react";

const featuredPost = {
  title: "Advancing AI safety research through interpretability",
  excerpt:
    "How we're building tools that help researchers understand and steer large language model behavior in real time.",
  date: "October 15, 2024",
  tag: "Research",
  href: "#",
};

const posts = [
  {
    title: "Introducing GPT-Next: reasoning at scale",
    excerpt:
      "Our latest model delivers unprecedented reasoning capabilities with improved safety guardrails.",
    date: "September 27, 2024",
    tag: "Product",
    href: "#",
  },
  {
    title: "Building trustworthy AI with human feedback",
    excerpt:
      "A look into the systems we use to align our models with human intent and values.",
    date: "September 12, 2024",
    tag: "Safety",
    href: "#",
  },
  {
    title: "Partner spotlight: transforming customer support with AI",
    excerpt:
      "How leading enterprises are using our platform to deliver instant, personalized customer experiences.",
    date: "August 30, 2024",
    tag: "Customers",
    href: "#",
  },
  {
    title: "Research breakthroughs from the alignment team",
    excerpt:
      "Three key papers that advance our understanding of robust model alignment techniques.",
    date: "August 18, 2024",
    tag: "Research",
    href: "#",
  },
];

export default function BlogPage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="overflow-hidden">
        {/* Hero */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                Stories from the frontier of AI
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                Explore research updates, product announcements, and insights from the teams building the future of artificial intelligence.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-5xl"
            >
              <Card className="overflow-hidden border-primary/30 bg-card/40 backdrop-blur">
                <div className="grid gap-8 p-10 lg:grid-cols-2">
                  <div className="flex flex-col space-y-4">
                    <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      {featuredPost.tag}
                    </span>
                    <h2 className="text-3xl font-semibold tracking-tight text-foreground">
                      {featuredPost.title}
                    </h2>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div>
                      <Button variant="ghost" asChild>
                        <Link href={featuredPost.href} className="group">
                          Read full story
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/50 bg-muted/20 p-6">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      &ldquo;We are investing heavily in interpretability research because understanding our models is the most important step toward making them safer and more controllable.&rdquo;
                    </p>
                    <div className="mt-6 text-sm">
                      <p className="font-semibold text-foreground">Dr. Maya Chen</p>
                      <p className="text-muted-foreground">Head of Interpretability Research</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="pb-32">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Latest updates</h2>
              <Button variant="outline" size="sm">
                Subscribe to newsletter
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {posts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="h-full p-6 flex flex-col justify-between border-border/60 bg-card/60 backdrop-blur">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Tag className="h-4 w-4" />
                          {post.tag}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                    <div className="pt-6">
                      <Button variant="ghost" asChild>
                        <Link href={post.href} className="group">
                          Read more
                          <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Never miss an update
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Join thousands of developers, researchers, and creators who receive our latest news directly in their inbox.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex h-12 w-full sm:w-auto min-w-[240px] rounded-md border border-input bg-background px-4 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                />
                <Button size="lg" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
