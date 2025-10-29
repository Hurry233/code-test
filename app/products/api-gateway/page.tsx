import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Code2, Terminal } from "lucide-react";

const features = [
  "一键接入 Claude Code、GPT-4 Turbo、Gemini 等 50+ 主流模型 API",
  "统一 API 格式，兼容 OpenAI SDK，无缝迁移现有代码",
  "按实际调用量计费，支持充值额度包与企业定制预算",
  "实时监控 QPS、延迟、成功率、Token 消耗，精准成本把控",
  "多环境密钥隔离、IP 白名单、专用网关，满足合规安全需求",
];

export default function APIGatewayPage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
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
                <div className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">核心优势</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
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
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
