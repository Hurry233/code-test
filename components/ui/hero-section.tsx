"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 border border-border/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">国际大模型服务平台</span>
              </div>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight space-y-2"
            >
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-foreground/60">
                连接世界
              </div>
              <div className="bg-clip-text text-transparent bg-gradient-to-r from-foreground/80 to-muted-foreground">
                顶尖AI模型
              </div>
              <div className="text-4xl md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-primary/60">
                GPT • Claude • Gemini • More
              </div>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              提供国际主流大模型镜像服务、统一API网关和定制化解决方案，
              让您无需翻墙，即可畅享全球顶尖AI能力
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4 pt-4"
            >
              <Button size="lg" className="group" asChild>
                <Link href="#pricing">
                  立即开始
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm" asChild>
                <Link href="/tutorials">
                  查看教程
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              {[
                { value: "200+", label: "国际主流大模型" },
                { value: "900+", label: "稳定运行天数" },
                { value: "7x24h", label: "企业级运维保障" },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right visual area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-[500px] lg:h-[600px] w-full"
          >
            <div className="relative w-full h-full rounded-3xl border border-border/60 bg-gradient-to-br from-primary/10 via-background to-primary/5 p-4 shadow-[0px_0px_70px_-20px_rgba(80,80,120,0.35)] flex items-center justify-center">
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-border/70 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Zap className="w-20 h-20 mx-auto text-primary/50" />
                  <p className="text-xl font-semibold text-foreground">AI 大模型聚合平台</p>
                  <p className="text-sm text-muted-foreground max-w-xs">一站式使用全球顶尖AI能力</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/20 flex items-start justify-center p-2"
        >
          <motion.div className="w-1 h-2 bg-muted-foreground/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
