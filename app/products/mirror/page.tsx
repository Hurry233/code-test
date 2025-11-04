import Image from "next/image";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Check,
  Clapperboard,
  Database,
  Layers,
  MessageSquare,
  PenTool,
  Sparkles,
  Zap,
} from "lucide-react";

const aggregatorAdvantages = [
  "40+ 主流模型一站式聚合",
  "对话、绘画、视频、PPT 全覆盖",
  "企业级工作流编排",
  "多团队协作与权限管理",
  "按需灵活扩展",
];

const mirrorAdvantages = [
  "100% 还原 ChatGPT 官方体验",
  "完整插件生态与代码解释器",
  "熟悉的界面，零学习成本",
  "会员制不限次数使用",
  "对抗降智策略保障",
];

const aggregatorModules = [
  {
    icon: MessageSquare,
    title: "AI 对话",
    description:
      "聚合 GPT-4 Turbo、Claude 3.5、Gemini 1.5 Pro 等对话模型，内置行业 Prompt 模板与知识库接入。",
    bullets: [
      "智能客服、营销文案、数据分析一体化",
      "知识库一键绑定，支持上下文检索",
      "会话看板与任务流转，保障团队协同",
    ],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: PenTool,
    title: "AI 绘画",
    description:
      "集成 Midjourney、Flux、Stable Diffusion XL，提供品牌视觉、海报、产品设计的定制化生成。",
    bullets: [
      "Prompt 工作坊与风格库管理",
      "批量生成与尺寸自适应",
      "版权审核与敏感内容拦截",
    ],
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Clapperboard,
    title: "AI 视频",
    description:
      "从脚本生成、分镜设计到视频成片，全流程 AI 驱动，适配短视频与长内容。",
    bullets: [
      "多语言脚本一键生成",
      "AI 配音、字幕、背景音乐自动匹配",
      "与主流剪辑软件无缝衔接",
    ],
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    icon: Layers,
    title: "AI PPT",
    description:
      "支持一键生成商业计划书、培训课件、汇报材料，模板与品牌规范自动匹配。",
    bullets: [
      "导入大纲、Excel 即刻出稿",
      "公司品牌色、字体一键应用",
      "在线协作与多人审批流程",
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  },
];

const valueHighlights = [
  "一次接入覆盖多模态创作场景，缩短内容生产周期 70%",
  "SOP 模板、行业素材库实时更新，帮你快速上手 AI 创作",
  "支持 SaaS、专属实例与私有化部署，满足不同规模团队",
];

const interfaceShots = [
  {
    title: "多模态统一控制台",
    description: "模块化布局，快速切换对话、绘画、视频、PPT 工作区。",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "创作流程编排",
    description: "拖拽式工作流连线，自动触发生成、审核与发布。",
    image:
      "https://images.unsplash.com/photo-1523475472560-418a6e9403cc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "实时数据监控",
    description: "多维度图表呈现模型调用、创作进度、业务效果。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
];

export default function AIAggregationStationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 via-sky-100/30 to-purple-100/25 dark:from-indigo-500/20 dark:via-background dark:to-background pointer-events-none" />
          <div className="absolute inset-y-0 right-[10%] hidden h-64 w-64 rounded-full bg-gradient-to-br from-sky-200/50 to-indigo-200/20 blur-3xl lg:block" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-indigo-500/10 text-indigo-600 dark:text-indigo-300">
                  AI 聚合站 · 全模态创作中心
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  AI 聚合站：一站式激活对话、绘画、视频、PPT 创作力
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  面对日益复杂的内容生产诉求，AI 聚合站以多模型编排为底座，将对话生成、视觉创作、视频脚本与 PPT 报告统一在一个工作台，让团队高效协同、快速交付。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    注册免费试用 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    申请产品演示 <Sparkles className="h-4 w-4" />
                  </Button>
                </div>
                <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4 text-sm text-slate-600 dark:text-slate-300">
                  {valueHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Zap className="mt-1 h-4 w-4 text-indigo-500 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="border-transparent bg-gradient-to-br from-white/90 via-indigo-50/80 to-sky-50/60 dark:from-indigo-950/60 dark:via-background/80 dark:to-background/70 backdrop-blur-xl shadow-xl">
                  <div className="p-8 space-y-6">
                    <h2 className="text-2xl font-semibold">为什么需要 AI 聚合站？</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      当团队需要在同一时间处理大量文案、海报、短视频与汇报材料时，传统工具链容易割裂效率。AI 聚合站通过统一登录、统一资产库、统一工作流，让多模态创作真正形成闭环。
                    </p>
                    <div className="grid gap-4">
                      <div className="rounded-2xl bg-muted/60 p-4">
                        <p className="text-sm font-semibold text-foreground">多模型聚合</p>
                        <p className="text-sm text-muted-foreground">
                          GPT、Claude、Gemini、Midjourney、Runway、Designify…一次接入，持续更新。
                        </p>
                      </div>
                      <div className="rounded-2xl bg-muted/60 p-4">
                        <p className="text-sm font-semibold text-foreground">企业级协作</p>
                        <p className="text-sm text-muted-foreground">
                          席位管理、权限分级、流程审批与成果留痕，满足大型组织的治理需求。
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section - Redesigned */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="space-y-4 text-center max-w-3xl mx-auto mb-12">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">产品对比</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">AI 聚合站 vs GPT 镜像系统</h2>
              <p className="text-muted-foreground">
                两款产品各有所长，根据您的使用场景选择最合适的解决方案
              </p>
            </div>
            
            {/* Horizontal Comparison */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* AI 聚合站 */}
              <Card className="border-indigo-200/60 bg-indigo-50/50 dark:bg-indigo-950/10 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center">
                      <Layers className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-indigo-600">AI 聚合站</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    多模态创作平台，聚合对话、绘画、视频、PPT 能力，适合内容团队与企业协作
                  </p>
                  <div className="space-y-3">
                    {aggregatorAdvantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    了解 AI 聚合站
                  </Button>
                </div>
              </Card>

              {/* GPT 镜像系统 */}
              <Card className="border-primary/30 bg-primary/5 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">GPT 镜像系统</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    ChatGPT 官方生态复刻，保留原生界面与完整插件能力，适合个人与小团队
                  </p>
                  <div className="space-y-3">
                    {mirrorAdvantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full border-primary/30">
                    了解镜像系统
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Modules Section with Images */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">四大核心能力模块</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">覆盖全链路内容生产需求</h2>
              <p className="text-muted-foreground text-lg">
                对话、绘画、视频、PPT 四大模块既可独立使用，也能通过工作流串联成完整的内容生产流水线。
              </p>
            </div>
            <div className="space-y-16">
              {aggregatorModules.map((module, index) => {
                const Icon = module.icon;
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={module.title}
                    className={`grid gap-8 lg:grid-cols-2 lg:items-center ${
                      isEven ? "" : "lg:grid-flow-dense"
                    }`}
                  >
                    {/* Image */}
                    <div className={isEven ? "lg:order-1" : "lg:order-2"}>
                      <Card className="overflow-hidden border-border/60 bg-background/90">
                        <div className="relative aspect-[16/10]">
                          <Image
                            src={module.image}
                            alt={module.title}
                            fill
                            className="object-cover"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                        </div>
                      </Card>
                    </div>

                    {/* Content */}
                    <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                      <Card className="border-border/60 bg-background/80 p-8">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <h3 className="text-2xl font-semibold">{module.title}</h3>
                        </div>
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">
                          {module.description}
                        </p>
                        <ul className="space-y-3">
                          {module.bullets.map((bullet) => (
                            <li key={bullet} className="flex items-start gap-3">
                              <Check className="mt-1 h-5 w-5 text-primary flex-shrink-0" />
                              <span className="text-sm text-foreground">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Interface Showcase */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">界面展示</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">所见即所得的统一工作台</h2>
              <p className="text-muted-foreground text-lg">
                通过可视化操作界面，将复杂的模型调用、工作流编排与运营数据呈现得直观易懂。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {interfaceShots.map((shot) => (
                <Card key={shot.title} className="overflow-hidden border-border/60 bg-background/90 backdrop-blur">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={shot.image}
                      alt={shot.title}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-semibold">{shot.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{shot.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Free Trial CTA */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="container mx-auto px-4">
            <Card className="max-w-5xl mx-auto border border-primary/30 bg-background/80 backdrop-blur-xl p-10 sm:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary text-primary-foreground">立即体验 AI 聚合站</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">注册免费试用，5 分钟搭建属于你的 AI 创作中心</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    试用期间即可获得 300 元模型调用额度、行业模板包与一对一顾问辅导。支持快速迁移现有账号与内容资产。
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="gap-2">
                    立即免费注册 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    预约顾问答疑 <Database className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
