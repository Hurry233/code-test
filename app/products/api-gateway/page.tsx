import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Check, Code2, Terminal, Zap, Shield, BarChart3, ArrowRight, Sparkles } from "lucide-react";

const features = [
  "一键接入 Claude Code、GPT-4 Turbo、Gemini 等 50+ 主流模型 API",
  "统一 API 格式，兼容 OpenAI SDK，无缝迁移现有代码",
  "按实际调用量计费，支持充值额度包与企业定制预算",
  "实时监控 QPS、延迟、成功率、Token 消耗，精准成本把控",
  "多环境密钥隔离、IP 白名单、专用网关，满足合规安全需求",
];

const pricingTiers = [
  {
    name: "入门版",
    price: "¥1,000",
    description: "适合个人开发者与小型项目",
    features: ["50+ 主流模型", "基础监控面板", "7x24 小时支持"],
  },
  {
    name: "专业版",
    price: "¥5,000",
    description: "适合团队研发与中型企业",
    features: ["赠送 50% 额度", "高级监控与告警", "专属技术顾问", "多环境隔离"],
    highlight: true,
  },
  {
    name: "企业版",
    price: "定制",
    description: "适合大规模生产与企业级应用",
    features: ["专用网关", "SLA 保障", "联合研发", "数据合规支持"],
  },
];

const claudeCodeHighlights = [
  "5 分钟完成 Claude Code 插件配置，无需复杂环境搭建",
  "支持 GPT-4、Claude 3.5、Gemini 等多模型自由切换",
  "完整调用日志与 Token 消耗统计，成本透明可控",
  "与 Cursor、Continue 等 AI 编程工具无缝集成",
];

export default function APIGatewayPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/35 via-teal-50/25 to-background dark:from-emerald-500/5 dark:via-background dark:to-background" />
          <div className="absolute inset-y-0 right-[15%] hidden h-80 w-80 rounded-full bg-gradient-to-br from-emerald-200/40 to-teal-100/25 blur-3xl lg:block dark:opacity-0" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">统一 API 网关</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  一行代码接入，灵活按量计费
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  通过统一的 RESTful API 网关，您只需几分钟就能将 GPT-4、Claude、Gemini 等主流大模型集成到您的应用中。
                  支持开发、测试、生产多环境配置，适配个人项目、团队研发与企业级系统。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    立即充值额度
                    <Code2 className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    查看 API 文档
                    <Terminal className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <Card className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">核心优势</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <p className="text-sm font-semibold">快速开始</p>
                    <pre className="overflow-x-auto rounded-lg bg-background/60 p-3 text-xs">
{`import openai

client = openai.OpenAI(
  base_url="https://api.yourgateway.com/v1",
  api_key="YOUR_API_KEY"
)

response = client.chat.completions.create(
  model="gpt-4",
  messages=[{"role": "user", "content": "Hello"}]
)`}
                    </pre>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Claude Code Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <Card className="border-violet-200/60 bg-gradient-to-br from-violet-50/50 via-background to-background dark:from-violet-950/10 dark:via-background dark:to-background overflow-hidden">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] p-8 lg:p-12">
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                    <Sparkles className="w-4 h-4 text-violet-600" />
                    <span className="text-sm font-semibold text-violet-600">Claude Code 一键接入</span>
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-bold">
                    5 分钟配置 Claude Code，解锁 AI 编程助手
                  </h2>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    通过我们的 API 网关，您可以快速在 VS Code、Cursor、Continue 等开发环境中接入 Claude Code 插件，享受代码补全、重构、调试等智能编程体验。无需科学上网，稳定低延迟。
                  </p>
                  <ul className="space-y-3 text-sm">
                    {claudeCodeHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="mt-1 h-4 w-4 text-violet-600 flex-shrink-0" />
                        <span className="text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                      <Link href="/products/api-gateway/claude-code">
                        查看完整接入流程 <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-violet-300">
                      <Link href="#pricing">
                        立即充值使用
                      </Link>
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <Card className="border border-border/60 bg-background/80 p-6 space-y-4">
                    <h3 className="text-lg font-semibold">为什么选择我们的 Claude Code 服务？</h3>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-violet-600 font-semibold">1</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">国内直连，无需翻墙</p>
                          <p>我们在国内部署高速节点，延迟低至 50ms，告别科学上网的不稳定。</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-violet-600 font-semibold">2</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">多模型切换，灵活调度</p>
                          <p>支持 Claude 3.5、GPT-4、Gemini 等模型，根据任务自动选择最优方案。</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                          <span className="text-violet-600 font-semibold">3</span>
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">按量计费，成本透明</p>
                          <p>只为实际调用付费，后台实时查看每次请求的 Token 消耗与成本明细。</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">为什么选择我们的 API 网关</h2>
              <p className="text-lg text-muted-foreground">
                专业、稳定、易用的大模型 API 中转服务
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">极速响应</h3>
                <p className="text-muted-foreground">
                  全球多节点部署，智能路由选择最优线路，平均响应时间小于 100ms，保障应用流畅体验。
                </p>
              </Card>
              <Card className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">企业级安全</h3>
                <p className="text-muted-foreground">
                  支持 IP 白名单、密钥加密、访问审计等安全策略，满足金融、政务等行业合规要求。
                </p>
              </Card>
              <Card className="bg-background rounded-2xl p-6 border border-border/60 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">实时监控</h3>
                <p className="text-muted-foreground">
                  可视化监控面板，实时查看调用量、成功率、延迟、成本等关键指标，精准掌控运营状况。
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">灵活的计费方案</h2>
              <p className="text-lg text-muted-foreground">
                按需充值，按量计费，透明实惠
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className={`rounded-2xl p-8 border ${
                    tier.highlight
                      ? "border-primary bg-primary/5 shadow-lg scale-105"
                      : "border-border/60 bg-background"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="text-3xl font-bold text-primary mb-2">{tier.price}</div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.description}</p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={tier.highlight ? "default" : "outline"}
                  >
                    {tier.price === "定制" ? "联系商务" : "立即充值"}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
