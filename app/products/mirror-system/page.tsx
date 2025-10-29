import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Globe, Rocket, Star, Gift } from "lucide-react";

const highlights = [
  "国内直连 ChatGPT 官网，无需 VPN 或魔法上网",
  "完整生态：GPT-4、DALL-E 3、代码解释器、插件商店、语音输入等全部功能",
  "与官方同步更新，第一时间体验最新模型与特性",
  "企业级数据加密与合规策略，满足政企场景需求",
  "预售期享受专属优惠与优先开通权益",
];

const benefits = [
  {
    title: "首批用户专享",
    items: ["终身 8 折优惠", "赠送 3 个月会员体验期", "优先开通白名单", "专属客服通道"],
  },
  {
    title: "企业客户增值",
    items: ["团队协作空间", "统一账号管理", "发票与合同支持", "技术支持与培训"],
  },
];

export default function MirrorSystemPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-amber-500/10 text-amber-600 dark:text-amber-400">
                  <Star className="w-3 h-3 mr-1 inline" />
                  即将上线 · 预售中
                </Badge>
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
                          <Check className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-5 space-y-3 border border-amber-500/20">
                    <div className="flex items-center gap-2">
                      <Gift className="w-5 h-5 text-amber-600" />
                      <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">预售专属权益</p>
                    </div>
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

        {/* Benefits Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">预售福利抢先看</h2>
              <p className="text-lg text-muted-foreground">
                早鸟用户专享超值权益
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div
                  key={benefit.title}
                  className="bg-background rounded-2xl p-8 border border-border/60 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-primary">{benefit.title}</h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">上线时间表</h2>
              <p className="text-lg text-muted-foreground">
                敬请期待，即将与您见面
              </p>
            </div>
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg mb-1">阶段一：内测阶段（当前）</h3>
                  <p className="text-muted-foreground">
                    开放预约通道，收集用户需求，优化产品体验
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg mb-1">阶段二：小规模公测（预计 2 周后）</h3>
                  <p className="text-muted-foreground">
                    邀请预约用户参与公测，提供免费试用期
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-semibold text-lg mb-1">阶段三：正式上线（预计 1 个月后）</h3>
                  <p className="text-muted-foreground">
                    全量开放，预售用户开始享受专属权益
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
