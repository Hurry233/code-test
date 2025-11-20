"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        <section className="relative min-h-[60vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <div className="inline-flex items-center justify-center">
                  <div className="text-9xl font-bold bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">
                    404
                  </div>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4"
              >
                页面未找到
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8"
              >
                抱歉，您访问的页面不存在。可能是链接已过期或输入有误。请返回首页或浏览其他内容。
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button asChild size="lg">
                  <Link href="/" className="inline-flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    返回首页
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/tutorials" className="inline-flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" />
                    查看教程
                  </Link>
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-16 pt-12 border-t border-border/40"
              >
                <p className="text-sm text-muted-foreground mb-4">您可能感兴趣的页面：</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { href: "/products/mirror", label: "AI聚合站" },
                    { href: "/products/api-gateway", label: "API网关" },
                    { href: "/tutorials", label: "使用教程" },
                  ].map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
