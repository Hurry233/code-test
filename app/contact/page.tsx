"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import { Mail, MessageSquare, MapPin, Phone, Send, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const contactMethods = [
  {
    icon: Mail,
    title: "商务合作邮箱",
    description: "欢迎发送需求与合作意向",
    contact: "business@aimatrix.cn",
    href: "mailto:business@aimatrix.cn",
  },
  {
    icon: MessageSquare,
    title: "企业微信顾问",
    description: "工作日 10:00-19:00 在线答疑",
    contact: "扫码添加专属顾问",
    href: "#consultant",
  },
  {
    icon: Phone,
    title: "电话咨询",
    description: "7x24 小时紧急支持",
    contact: "+86 400-800-1234",
    href: "tel:+864008001234",
  },
  {
    icon: MapPin,
    title: "线下交流中心",
    description: "上海市浦东新区张江人工智能岛 A 座 18F",
    contact: "提供预约参观与现场交流",
    href: "https://maps.app.goo.gl",
  },
];

const faqs = [
  {
    question: "如何选择镜像会员与按量计费？",
    answer:
      "如果您主要使用 GPT/Claude 等对话与创作功能，推荐选择镜像会员；需要集成到业务系统、调用 API 的场景，则建议使用按量计费或企业定制方案。",
  },
  {
    question: "支持哪些部署方式？",
    answer:
      "我们支持 SaaS 托管、专属实例、私有化部署三种模式，可根据企业合规要求进行灵活组合。",
  },
  {
    question: "是否提供定制化开发？",
    answer:
      "提供，包括知识库搭建、工作流自动化、模型微调、插件生态接入等服务，欢迎提交需求获取详细方案。",
  },
];

const availability = [
  {
    icon: Clock,
    title: "服务响应",
    description: "售前需求 2 小时内响应，售后工单 15 分钟内接入。",
  },
  {
    icon: ShieldCheck,
    title: "安全保障",
    description: "签署保密协议，支持数据脱敏、私有网络传输与审计。",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                与我们取得联系
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                无论是产品试用、商务合作还是技术支持，我们都将第一时间与您对接，提供专业、可靠的服务体验。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title} className="p-6 border-border/60 bg-background">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                        {method.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {method.description}
                    </p>
                    <a
                      href={method.href}
                      className="text-sm font-medium text-primary underline underline-offset-4"
                    >
                      {method.contact}
                    </a>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact form & availability */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[2fr_1fr]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="border-border/60 bg-card/40 backdrop-blur">
                  <form onSubmit={handleSubmit} className="grid gap-6 p-8">
                    <div className="grid gap-2">
                      <Label htmlFor="name">姓名</Label>
                      <Input
                        id="name"
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={(event) =>
                          setFormData((prev) => ({ ...prev, name: event.target.value }))
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="email">邮箱</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={(event) =>
                          setFormData((prev) => ({ ...prev, email: event.target.value }))
                        }
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="company">公司 / 团队名称</Label>
                      <Input
                        id="company"
                        placeholder="请输入公司或团队名称"
                        value={formData.company}
                        onChange={(event) =>
                          setFormData((prev) => ({ ...prev, company: event.target.value }))
                        }
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="message">合作需求 / 问题描述</Label>
                      <textarea
                        id="message"
                        placeholder="请告诉我们您想了解的服务、业务场景或项目目标"
                        value={formData.message}
                        onChange={(event) =>
                          setFormData((prev) => ({ ...prev, message: event.target.value }))
                        }
                        rows={6}
                        required
                        className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-sm text-muted-foreground">
                        提交后我们将在 2 小时内与您取得联系。
                      </p>
                      <Button type="submit" className="gap-2">
                        发送信息
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                    {submitted && (
                      <p className="text-sm text-emerald-500">
                        信息已提交，我们将尽快与您联系。
                      </p>
                    )}
                  </form>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
              >
                <div className="space-y-6">
                  {availability.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Card key={item.title} className="p-6 border-border/60 bg-background">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                            {item.title}
                          </h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </Card>
                    );
                  })}
                  <Card className="p-6 border-dashed border-primary/30 bg-primary/5 text-sm text-muted-foreground">
                    <p className="font-semibold text-primary mb-2">专属顾问服务</p>
                    <p>针对年框采购、私有化部署等复杂场景，我们提供项目级顾问团队，支持现场调研与联合项目管理。</p>
                  </Card>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">常见问题</h2>
              <p className="text-lg text-muted-foreground">
                如未找到答案，欢迎直接联系我们的顾问团队
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq) => (
                <Card key={faq.question} className="p-6 border-border/60 bg-background">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
