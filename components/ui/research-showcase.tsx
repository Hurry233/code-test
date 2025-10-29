"use client";

import { motion } from "framer-motion";

export function ResearchShowcase() {
  const highlightCards = [
    {
      title: "行业解决方案蓝图",
      caption: "场景设计",
      description: "结合金融、教育、制造、政务等行业痛点，输出可落地的大模型应用方案。",
    },
    {
      title: "安全合规白皮书",
      caption: "合规研究",
      description: "从数据治理、访问控制、合规审计多维度，保障企业级大模型应用安全可控。",
    },
    {
      title: "AI 生产力工具包",
      caption: "工具集",
      description: "提供工作流、知识库、智能助手等模板，帮助团队快速搭建专属 AI 能力。",
    },
    {
      title: "部署实施手册",
      caption: "上线指南",
      description: "覆盖镜像部署、API 接入、运维监控等环节，确保项目高效上线并稳定运行。",
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              行业洞察
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
            >
              从场景到落地的全链路赋能
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              我们深入垂直行业场景，结合技术能力与行业洞察，输出可落地的大模型应用方案，并提供从接入到运维的全流程支持。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {[
                {
                  title: "行业顾问陪伴",
                  description: "资深架构师与行业专家联合调研，明确业务目标与实施路径。"
                },
                {
                  title: "解决方案设计",
                  description: "定制镜像接入、API 网关、知识库、工作流、微调等组合方案。"
                },
                {
                  title: "交付与培训",
                  description: "提供环境部署、权限配置、团队培训、运营手册等配套服务。"
                },
                {
                  title: "持续运营优化",
                  description: "监控效果指标，持续调优模型与流程，保障业务成果。"
                }
              ].map((item) => (
                <div key={item.title} className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full rounded-3xl border border-border/60 bg-background/60 p-6 shadow-[0px_0px_70px_-25px_rgba(80,80,120,0.35)]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 via-primary/0 to-primary/30 blur-3xl" />
              <div className="relative grid gap-6 sm:grid-cols-2">
                {highlightCards.map((card) => (
                  <div
                    key={card.title}
                    className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/80 p-6 backdrop-blur"
                  >
                    <span className="text-xs uppercase tracking-wider text-primary/80">
                      {card.caption}
                    </span>
                    <h3 className="mt-3 text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
