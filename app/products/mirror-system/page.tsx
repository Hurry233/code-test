import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Rocket } from "lucide-react";

const highlights = [
  "国内直连 ChatGPT 官网，无需 VPN 或魔法上网",
  "完整生态：GPT-4、DALL-E 3、代码解释器、插件商店、语音输入等全部功能",
  "与官方同步更新，第一时间体验最新模型与特性",
  "企业级数据加密与合规策略，满足政企场景需求",
  "预售期享受专属优惠与优先开通权益",
];

export default function MirrorSystemPage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">即将上线 · 预售中</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  国内直连 ChatGPT 官网，完整生态零障碍
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们正在构建一套国内可直接访问的 ChatGPT 官网镜像系统，让您无需翻墙即可体验完整的 ChatGPT 官方生态。
                  预售期间享受专属优惠，提前锁定名额。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    立即预约
                    <Rocket className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    了解预售详情
                    <Globe className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">产品亮点</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <p className="text-sm font-semibold">预售专属权益</p>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>首批用户享受终身 8 折优惠</li>
                      <li>赠送 3 个月会员体验期</li>
                      <li>预约用户优先开通白名单</li>
                      <li>专属客服与使用指南</li>
                    </ul>
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
