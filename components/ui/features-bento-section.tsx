"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Brain, Briefcase, Palette, BarChart3 } from "lucide-react";

const features = [
  {
    title: "智能对话",
    description: "自然语言交互",
    icon: Brain,
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "内容创作",
    description: "自媒体创作助手",
    icon: Palette,
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "数据分析",
    description: "金融数据洞察",
    icon: BarChart3,
    color: "from-green-500 to-green-600",
  },
  {
    title: "教育应用",
    description: "智能教学助手",
    icon: Sparkles,
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "业务自动化",
    description: "流程优化方案",
    icon: Zap,
    color: "from-pink-500 to-pink-600",
  },
  {
    title: "企业应用",
    description: "定制化解决方案",
    icon: Briefcase,
    color: "from-cyan-500 to-cyan-600",
  },
];

export function FeaturesBentoSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            用自然语言驱动AI生产力
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 text-base sm:text-lg text-muted-foreground"
          >
            多个AI应用场景，覆盖学术科研、自媒体创作、金融、教育医疗等，全方位满足您的大模型应用需求
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="h-full p-6 bg-card/40 border-border/40 hover:border-primary/50 transition-all">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${feature.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">{feature.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
