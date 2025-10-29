import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap } from "lucide-react";

const features = [
  "无限畅享 GPT-4 / Claude 3.5 / Gemini Pro / Midjourney 等 50+ 主流模型",
  "国内高速节点 + 智能路由，低延迟直连海外官方",
  "会员权益包含品牌专属模型、插件、文件上传、代码解释器等高级功能",
  "支持团队共享、用量统计、成员管理，适配个人与企业场景",
  "7x24 小时运维监控与技术支持，异常自动切换备用节点",
];

export default function MirrorServicePage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">国际大模型镜像服务</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  会员期内不限次数，畅享全系顶尖大模型
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  通过我们部署在全球的镜像节点，您无需翻墙或复杂配置，即可稳定使用 GPT-4、Claude 3.5、Gemini Pro、Midjourney 等最新模型。
                  服务覆盖个人创作、团队协作与企业落地场景。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    立即开通会员
                    <Sparkles className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    查看会员权益
                    <Zap className="h-4 w-4" />
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
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5">
                    <p className="text-sm text-muted-foreground">
                      支持 Midjourney 绘图、ChatGPT 插件、代码解释器、文件上传、语音识别等官方全部功能；提供团队账号共享与企业级风控。
                    </p>
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
