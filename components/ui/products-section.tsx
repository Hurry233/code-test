"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Code, Image, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    title: "大模型镜像服务",
    description: "订阅会员即可无限畅享GPT-4、Claude 3.5、Gemini Pro、Midjourney等50+主流模型，无需翻墙直连官方。",
    icon: MessageSquare,
    color: "from-emerald-500 to-teal-600",
    href: "/products/mirror",
    badge: "会员热选"
  },
  {
    title: "统一API网关",
    description: "一行代码接入所有主流模型API，支持Claude Code、GPT-4 Turbo等，按量计费，灵活扩展。",
    icon: Code,
    color: "from-violet-500 to-purple-600",
    href: "/products/api-gateway",
    badge: "开发者首选"
  },
  {
    title: "ChatGPT官方代充",
    description: "安全快捷的ChatGPT Plus/Team官方订阅代充服务，支持企业批量购买，提供发票。",
    icon: Image,
    color: "from-pink-500 to-rose-600",
    href: "/products/recharge",
  },
  {
    title: "ChatGPT镜像系统",
    description: "国内直连ChatGPT官网，无需魔法上网，包含GPT-4、DALL-E 3、插件等完整生态。",
    icon: Mic,
    color: "from-blue-500 to-cyan-600",
    href: "/products/mirror-system",
    badge: "预售中"
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
            覆盖全场景的核心服务
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-base sm:text-lg text-muted-foreground"
          >
            从镜像服务到API网关，从官方代充到镜像系统，帮助您快速接入并扩展全球顶尖大模型。
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
                        了解详情
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
            查看全部服务
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
