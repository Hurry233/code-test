"use client";

import { motion } from "framer-motion";
import { Globe, Zap, Users, TrendingUp } from "lucide-react";

export function GlobalImpactSection() {
  const stats = [
    {
      icon: Users,
      value: "11k+",
      label: "平台活跃用户",
    },
    {
      icon: TrendingUp,
      value: "99.8%",
      label: "全年服务可用性",
    },
    {
      icon: Zap,
      value: "20+",
      label: "平台每年大版本更新次数",
    },
    {
      icon: Globe,
      value: "98.5%",
      label: "用户满意度",
    },
  ];

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
              多设施保障
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              全球多地部署 负载均衡
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              我们的服务采用集群化部署策略，全球多地部署节点，提高容灾能力，确保服务稳定可靠。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Icon className="w-5 h-5 text-primary" />
                      <p className="text-3xl font-semibold text-foreground">
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
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
              <div className="rounded-2xl border border-border/60 bg-muted/20 p-8 flex items-center justify-center h-64">
                <div className="text-center space-y-4">
                  <Globe className="w-16 h-16 mx-auto text-primary/50" />
                  <p className="text-muted-foreground">全球节点分布图</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
