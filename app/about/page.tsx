"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Target, Users, Zap, Heart, Award, Globe, Briefcase, Sparkles, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "使命驱动",
    description: "以推动人工智能普惠为目标，打造值得信赖的大模型基础设施。",
  },
  {
    icon: Users,
    title: "共创协作",
    description: "与客户、伙伴、开发者紧密合作，共建开放繁荣的 AI 生态。",
  },
  {
    icon: Zap,
    title: "持续创新",
    description: "保持技术探索与产品迭代，让先进能力快速落地到真实场景。",
  },
  {
    icon: Heart,
    title: "责任为先",
    description: "坚持安全合规与伦理要求，保障数据隐私与业务连续性。",
  },
  {
    icon: Award,
    title: "极致体验",
    description: "关注每一个交付细节，打造稳定可靠、易用高效的产品体验。",
  },
  {
    icon: Globe,
    title: "全球视野",
    description: "在全球范围内部署节点与服务网络，助力企业走向海外。",
  },
];

const milestones = [
  {
    year: "2022",
    title: "公司成立",
    description: "完成核心技术团队组建，推出首批 GPT 镜像节点和代理服务。",
  },
  {
    year: "2023",
    title: "产品矩阵成型",
    description: "上线统一大模型网关、官方订阅代充、企业知识库等系列产品。",
  },
  {
    year: "2024",
    title: "企业级升级",
    description: "支持私有化部署、专线接入、安全合规审计，服务客户遍布 20+ 行业。",
  },
];

const teams = [
  {
    icon: Briefcase,
    title: "策略运营团队",
    description: "洞察行业需求，规划产品路线，与客户共同设计最佳落地方案。",
  },
  {
    icon: Sparkles,
    title: "算法研究团队",
    description: "长期跟进前沿模型研究，提供微调、蒸馏、部署等全栈能力支持。",
  },
  {
    icon: Shield,
    title: "安全合规团队",
    description: "建立数据安全与合规体系，保障服务在复杂监管环境下稳定运行。",
  },
];

const stats = [
  { number: "500+", label: "企业客户" },
  { number: "20+", label: "服务行业" },
  { number: "99.9%", label: "服务可用性" },
  { number: "15min", label: "平均响应时间" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                连接世界级大模型与中国企业的桥梁
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                我们致力于提供稳定、安全、合规的大模型基础设施，为企业与开发者提供高速镜像、统一网关、定制化服务，让技术价值真正转化为业务生产力。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 sm:py-20 border-y border-border/40 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8 text-lg leading-relaxed text-muted-foreground">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold text-foreground"
              >
                我们的故事
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                伴随着全球大模型技术的快速演进，我们敏锐地捕捉到国内市场对高质量模型服务的迫切需求。团队核心成员来自人工智能、云计算、安全合规等领域的头部企业，从成立之初便确立了“让前沿模型触手可得”的使命。
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                我们坚持自主研发和开放生态并行，在全球多地部署镜像节点，搭建统一的 API 网关体系；同时关注国内企业在数据合规、成本控制、业务落地上的实际挑战，提供贴近业务的解决方案。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">发展历程</h2>
              <p className="text-lg text-muted-foreground">每一步都源于客户的信任与合作</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {milestones.map((item) => (
                <div key={item.year} className="relative pl-12">
                  <span className="absolute left-0 top-1 text-2xl font-bold text-primary">{item.year}</span>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-4xl font-bold"
              >
                核心价值观
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-base text-muted-foreground"
              >
                驱动我们不断前行的原则与信念
              </motion.p>
            </div>
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                        <div className="flex flex-col space-y-4">
                          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <h3 className="text-xl font-semibold tracking-tight">{value.title}</h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">值得信赖的专家团队</h2>
              <p className="text-lg text-muted-foreground">跨学科协作，让技术与业务深度融合</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {teams.map((team) => {
                const Icon = team.icon;
                return (
                  <div key={team.title} className="rounded-2xl border border-border/60 bg-background p-6">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{team.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{team.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
                与我们一起探索 AI 的无限可能
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                期待与您携手，将先进技术转化为实在的业务价值。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-8 py-6"
                >
                  联系我们
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-8 py-6"
                >
                  浏览产品
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
