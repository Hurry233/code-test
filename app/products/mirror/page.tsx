import Image from "next/image";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  BarChart3,
  Clapperboard,
  Database,
  Layers,
  MessageSquare,
  PenTool,
  Scale,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";

const comparisonPoints = [
  {
    aspect: "产品定位",
    aggregator: "面向多模态内容创作的全能工作台，集合对话、绘画、视频、文档能力。",
    mirror: "专注于还原 ChatGPT 官网体验，提供官方生态的稳定访问。",
  },
  {
    aspect: "交互体验",
    aggregator: "统一控制台，一次登录畅享 40+ 模型，支持多终端与协同管理。",
    mirror: "保留官方界面，适合对原生 ChatGPT 生态有强需求的个人与团队。",
  },
  {
    aspect: "内容形态",
    aggregator: "涵盖文本、图片、视频、PPT 等多形态创作流程，可串联企业工作流。",
    mirror: "聚焦文本对话、代码解释器、插件等 ChatGPT 原生能力。",
  },
  {
    aspect: "适用人群",
    aggregator: "市场营销、品牌运营、教育培训、视频创作者、企业内部协作团队。",
    mirror: "喜欢原生 ChatGPT 体验的个人用户、需要保留官方功能的团队。",
  },
  {
    aspect: "付费模式",
    aggregator: "按席位/功能包灵活组合，支持企业批量开通与私有化部署。",
    mirror: "会员制或按量付费，按账号维度计费。",
  },
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
  },
  {
    icon: Clapperboard,
    title: "AP 视频",
    description:
      "从脚本生成、分镜设计到视频成片，全流程 AI 驱动，适配短视频与长内容。",
    bullets: [
      "多语言脚本一键生成",
      "AI 配音、字幕、背景音乐自动匹配",
      "与主流剪辑软件无缝衔接",
    ],
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
  },
];

const technicalHighlights = [
  {
    title: "多模型编排引擎",
    description:
      "支持 40+ 国际主流模型热切换，自动根据任务类型匹配最优模型与参数。",
  },
  {
    title: "安全合规体系",
    description:
      "多租户隔离、全链路加密、敏感词审查、操作审计与自定义审批流。",
  },
  {
    title: "自研 Prompt 服务器",
    description:
      "Prompt 版本管理、质量监测、最佳实践沉淀，保障企业知识资产安全可控。",
  },
  {
    title: "可视化运营大屏",
    description:
      "实时监测调用量、成本、转化效果，按部门/项目分账，轻松对齐业务指标。",
  },
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

const valueHighlights = [
  "一次接入覆盖多模态创作场景，缩短内容生产周期 70%",
  "SOP 模板、行业素材库实时更新，帮你快速上手 AI 创作",
  "支持 SaaS、专属实例与私有化部署，满足不同规模团队",
];

export default function AIAggregationStationPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-background to-background pointer-events-none" />
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
                <ul className="grid gap-3 sm:grid-cols-3 sm:gap-4 text-sm text-muted-foreground">
                  {valueHighlights.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Zap className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <Card className="border border-indigo-200/50 bg-card/60 backdrop-blur-xl shadow-xl">
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

        {/* Comparison Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4 space-y-10">
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">AI 聚合站 vs GPT 镜像系统</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">两者如何取长补短？</h2>
              <p className="text-muted-foreground">
                GPT 镜像系统强调“官方生态复刻”，AI 聚合站强调“多模态创作聚合”。了解它们的差异，有助于为团队选择最合适的产品组合。
              </p>
            </div>
            <div className="grid gap-4">
              <div className="hidden lg:grid grid-cols-[0.6fr_0.7fr_0.7fr] text-sm font-semibold text-muted-foreground/80 px-6">
                <span className="flex items-center gap-2">
                  <Scale className="h-4 w-4" /> 对比维度
                </span>
                <span className="text-indigo-600">AI 聚合站</span>
                <span className="text-primary">GPT 镜像系统</span>
              </div>
              <div className="space-y-4">
                {comparisonPoints.map((point) => (
                  <Card
                    key={point.aspect}
                    className="grid gap-6 lg:grid-cols-[0.6fr_0.7fr_0.7fr] p-6 border-border/60 bg-background/80"
                  >
                    <div className="space-y-1">
                      <p className="text-sm font-semibold text-muted-foreground">{point.aspect}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-indigo-600 font-medium">AI 聚合站</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.aggregator}</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm text-primary font-medium">GPT 镜像系统</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{point.mirror}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">四大核心能力模块</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">覆盖全链路内容生产需求</h2>
              <p className="text-muted-foreground text-lg">
                对话、绘画、视频、PPT 四大模块既可独立使用，也能通过工作流串联成完整的内容生产流水线。
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              {aggregatorModules.map((module) => {
                const Icon = module.icon;
                return (
                  <Card key={module.title} className="h-full border-border/60 bg-background/80 p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{module.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{module.description}</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {module.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <BarChart3 className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Highlights */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="space-y-4">
                <Badge className="w-fit bg-primary/10 text-primary">技术特点</Badge>
                <h2 className="text-3xl sm:text-4xl font-bold">以企业级架构托底多模态创作</h2>
                <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                  XYAI 在网络、算力、安全、协同四个层面深度打磨，确保 AI 聚合站在大型团队场景下依旧稳定可靠。
                </p>
              </div>
              <div className="grid gap-4">
                {technicalHighlights.map((item) => (
                  <Card key={item.title} className="p-6 border-border/60 bg-background">
                    <div className="flex items-center gap-3">
                      <Settings2 className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interface Showcase */}
        <section className="py-16 sm:py-24">
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
