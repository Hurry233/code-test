import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, CreditCard, Receipt } from "lucide-react";

const benefits = [
  "支持 ChatGPT Plus / Team / Enterprise 官方订阅代充",
  "全流程官方渠道，保证账号安全与权益",
  "提供企业抬头发票、合同及付款凭证",
  "支持批量充值与团队共享额度",
  "会员权益同步，包括 GPT-4、Code Interpreter、插件商店等",
];

export default function RechargePage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">ChatGPT 官方订阅代充</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  官方渠道代充，安全快捷有保障
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  为国内用户和企业提供安全可靠的 ChatGPT 官方订阅代充服务。
                  登录官方账户即可同步权益，支持开具发票与企业报销流程。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    立即代充
                    <CreditCard className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    咨询优惠方案
                    <Receipt className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">服务亮点</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <p className="text-sm font-semibold">代充流程</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>提交目标账号邮箱或邀请链接</li>
                      <li>选择订阅类型与周期（Plus/Team/Enterprise）</li>
                      <li>完成支付并获取订单凭证</li>
                      <li>系统在 10~30 分钟内完成代充，支持加急</li>
                    </ol>
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
