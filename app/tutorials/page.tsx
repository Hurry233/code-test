"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ArrowUpRight, Clock, Zap } from "lucide-react";

const tutorialCategories = [
  {
    id: "quick-start",
    title: "快速入门",
    description: "5分钟快速了解如何开始使用AI大模型服务",
    href: "/tutorials/quick-start",
    icon: <Zap className="w-6 h-6" />,
    duration: "5 min",
  },
  {
    id: "api-guide",
    title: "API文档",
    description: "详细的API接口文档和参数说明",
    href: "/tutorials/api-guide",
    icon: <BookOpen className="w-6 h-6" />,
    duration: "15 min",
  },
  {
    id: "deployment",
    title: "部署指南",
    description: "学习如何部署和配置AI大模型服务",
    href: "/tutorials/deployment",
    icon: <BookOpen className="w-6 h-6" />,
    duration: "20 min",
  },
  {
    id: "best-practices",
    title: "最佳实践",
    description: "行业专家分享的最佳实践和优化建议",
    href: "/tutorials/best-practices",
    icon: <BookOpen className="w-6 h-6" />,
    duration: "25 min",
  },
  {
    id: "integration",
    title: "集成教程",
    description: "学习如何将AI服务集成到您的应用中",
    href: "/tutorials/integration",
    icon: <BookOpen className="w-6 h-6" />,
    duration: "30 min",
  },
  {
    id: "advanced",
    title: "高级功能",
    description: "探索高级功能和自定义配置选项",
    href: "/tutorials/advanced",
    icon: <BookOpen className="w-6 h-6" />,
    duration: "40 min",
  },
];

export default function TutorialsPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                使用教程与学习资源
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                从快速入门到高级功能，我们提供全面的教程和最佳实践指南，帮助您快速掌握AI大模型服务。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Tutorial Grid */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {tutorialCategories.map((tutorial, index) => (
                <motion.div
                  key={tutorial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="h-full p-8 flex flex-col justify-between border-border/60 bg-card/60 backdrop-blur hover:shadow-lg transition-shadow">
                    <div className="space-y-4 mb-6">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {tutorial.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {tutorial.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {tutorial.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.duration}</span>
                      </div>
                      <Button variant="ghost" asChild className="p-0 h-auto">
                        <Link href={tutorial.href} className="group">
                          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                需要更多帮助？
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                查看我们的文档或联系支持团队获得专业协助。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    联系我们
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">
                    返回首页
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
