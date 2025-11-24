import Image from "next/image";

import { Navbar } from "@/components/layout/navbar";
import { SiteFooter } from "@/components/layout/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
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
  Globe,
  Code2,
  Briefcase,
  GraduationCap
} from "lucide-react";

const aggregatorAdvantages = [
  "使用官方API接入，支持多个国际主流模型",
  "对话、绘画、视频、PPT 全覆盖",
  "无感切换Claude-4.5、Gemini-2.5-Pro等顶尖模型",
  "支持Midjourney、Sora、Nano-banana等图像/视频生成模型",
  "综合成本更低",
];

const mirrorAdvantages = [
  "100% 还原 ChatGPT 官方体验",
  "完整GPTs生态与代码解释器",
  "支持GPT-5-Thinking、GPT-5-Pro顶级模型",
  "会员制不限次数使用",
  "智能网关系统全力对抗降智问题",
];

const features = [
  {
    Icon: MessageSquare,
    name: "AI 对话",
    description: "聚合 GPT-5、Claude-4.5、Gemini-2.5-Pro 等顶尖模型，支持深度思考与联网搜索。",
    href: "#",
    cta: "开始对话",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-50" />
    ),
  },
  {
    Icon: PenTool,
    name: "AI 绘画",
    description: "集成 Midjourney、Nano-banana、Flux，支持精准控图与超高清生成。",
    href: "#",
    cta: "开始创作",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80"
        alt="AI Art"
        fill
        className="absolute inset-0 object-cover opacity-20 hover:opacity-30 transition-opacity"
      />
    ),
  },
  {
    Icon: Clapperboard,
    name: "AI 视频",
    description: "Sora 引擎驱动，文字一键生成高清视频，支持运镜控制与物理模拟。",
    href: "#",
    cta: "生成视频",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Image
        src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80"
        alt="AI Video"
        fill
        className="absolute inset-0 object-cover opacity-20 hover:opacity-30 transition-opacity"
      />
    ),
  },
  {
    Icon: Layers,
    name: "AI PPT",
    description: "一键生成精美 PPT 大纲与设计，支持实时编辑与导出，办公效率倍增。",
    href: "#",
    cta: "制作演示文稿",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-900/20 dark:to-cyan-900/20 opacity-50" />
    ),
  },
];

const valueHighlights = [
  "众多主流大模型一站式聚合，无感切换快速响应",
  "无需翻墙，无需多平台订阅，直接使用多个国际主流模型",
  "快速、高效、低成本，提高AI使用效率，降低综合成本",
];

const interfaceShots = [
  {
    title: "多模态视觉识别",
    description: "支持图像、视频、文件分析，快速理解内容，降低沟通成本。",
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "创成式图片生成",
    description: "支持Midjourney、Sora、Nano-banana等图像/视频生成模型，快速生成高质量图片/视频。",
    image:
      "https://images.unsplash.com/photo-1523475472560-418a6e9403cc?auto=format&fit=crop&w=1600&q=80",
  },
  {
    title: "无感切换国际主流模型",
    description: "支持GPT-5系列、Claude-4.5系列、Gemini-2.5-Pro系列、Gork系列等众多国际主流模型，持续跟进最新版本。",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
];

const useCases = [
  {
    icon: Code2,
    title: "程序员/开发者",
    description: "使用 Claude-4.5 分析复杂代码逻辑，利用 GPT-5 生成单元测试与技术文档。",
  },
  {
    icon: Briefcase,
    title: "产品与运营",
    description: "利用 AI PPT 快速产出方案，使用 Midjourney 制作活动海报与营销素材。",
  },
  {
    icon: GraduationCap,
    title: "科研与学术",
    description: "使用 Gemini-2.5-Pro 读取长篇论文，快速提炼核心观点与数据结论。",
  },
  {
    icon: Globe,
    title: "跨境电商",
    description: "批量生成多语言商品文案，制作本地化营销视频，提升转化率。",
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
                  全模态创作中心
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  AI 聚合服务平台
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  面对日益复杂的内容生产诉求，AI 聚合站以多模型编排为底座，将不同模型的对话生成、图片创作、文件分析与视频创作融合在一个工作台，提高AI使用效率，降低综合成本。
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
                <Card className="rounded-3xl border-transparent bg-gradient-to-br from-white/90 via-indigo-50/80 to-sky-50/60 dark:from-indigo-950/60 dark:via-background/80 dark:to-background/70 backdrop-blur-xl shadow-xl">
                  <div className="p-8 space-y-6">
                    <h2 className="text-2xl font-semibold">什么是 AI 聚合系统？</h2>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      AI 聚合系统是一个多模态创作平台，使用官方API接入多个国际主流模型，让用户能低成本、一站式使用多种类型的大模型，降低综合成本。
                    </p>
                    <div className="grid gap-4">
                      <div className="rounded-2xl bg-muted/60 p-4">
                        <p className="text-sm font-semibold text-foreground">多种对话大模型</p>
                        <p className="text-sm text-muted-foreground">
                          GPT-5系列、Claude-4.5系列、Gemini-2.5-Pro系列、Gork系列等众多国际主流模型，持续跟进最新版本
                        </p>
                      </div>
                      <div className="rounded-2xl bg-muted/60 p-4">
                        <p className="text-sm font-semibold text-foreground">多模态创作模型</p>
                        <p className="text-sm text-muted-foreground">
                          众多多模态功能，包含视觉识别、文件分析、深度思考、PPT创作，支持Midjourney、Sora、Nano-banana等图像/视频生成模型
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Modules Section with BentoGrid */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">四大核心能力</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">一站式全能创作工作台</h2>
              <p className="text-muted-foreground text-lg">
                打破模型壁垒，将对话、绘图、视频、PPT 能力深度融合，让创意无限流动。
              </p>
            </div>
            <BentoGrid>
              {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl text-center mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">应用场景</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">赋能千行百业</h2>
              <p className="text-muted-foreground text-lg">
                无论您是个人创作者还是企业团队，都能找到适合的 AI 提效路径。
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {useCases.map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <Card key={useCase.title} className="p-6 border-border/60 hover:shadow-lg transition-shadow">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {useCase.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 sm:py-24">
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
                    多模态创作平台，聚合对话、绘画、视频、PPT 能力，适合需要多模态创作的用户
                  </p>
                  <div className="space-y-3">
                    {aggregatorAdvantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">  
                    总结：整体使用体验不如官方大厂原生系统，但综合成本更低，且支持多个国际主流模型，满足多场景需求
                  </div>
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
                    ChatGPT 官方镜像，使用原生界面与完整插件能力，适合完全使用ChatGPT的用户
                  </p>
                  <div className="space-y-3">
                    {mirrorAdvantages.map((advantage) => (
                      <div key={advantage} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground">{advantage}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-sm text-muted-foreground leading-relaxed">  
                    总结：官方原厂体验更好，能使用官方顶尖模型，但存在官方降智策略，可能影响使用体验。
                  </div>
                </div>
              </Card>
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
                灵活的侧边栏和插件系统，简化与AI沟通的流程，提高使用效率
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
                  <h2 className="text-3xl sm:text-4xl font-bold">注册免费试用，购买合适的套餐享受更便捷的AI服务</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    推荐购买月/季度/年度会员套餐，会员期间无次数限制，让每次对话都更加轻松高效。所有套餐均支持开具增值税发票。
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="gap-2">
                    注册试用 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    联系客服 <Database className="h-4 w-4" />
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
