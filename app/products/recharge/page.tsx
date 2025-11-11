import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Building2,
  Check,
  CreditCard,
  Layers,
  MessageSquare,
  Receipt,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const heroBenefits = [
  "支持 ChatGPT Plus / Pro / Business 官方订阅代充",
  "全流程官方渠道，保障账号安全与权益",
  "可开具企业抬头发票、合同及付款凭证",
  "支持批量充值、团队共享额度与统一续费",
  "会员权益同步，包括 GPT-4、Code Interpreter、插件商店等",
];

const plans = [
  {
    name: "ChatGPT Plus",
    tag: "个人订阅",
    price: "USD $20/月",
    description:
      "面向个人用户的旗舰方案，快速解锁 GPT-4/4o、插件生态与 30 天聊天历史同步，适合自由职业者与内容创作者。",
    highlights: [
      "GPT-4、GPT-4o、GPT-4o mini 等高阶模型",
      "联网搜索、插件商店、文件上传",
      "最多 30 天的聊天记录与会话同步",
    ],
    cta: "了解 Plus 方案",
  },
  {
    name: "ChatGPT Pro",
    tag: "进阶创作者版",
    price: "USD $200/月",
    description:
      "针对重度创作者与专业开发者的 Pro 版本，提升消息速率与模型调用额度，适合高频创作与多模态实验。",
    highlights: [
      "更高的 GPT-4o 调用权重与优先队列",
      "视频、语音、多文件处理能力升级",
      "提升上传大小、项目空间与自动化脚本运行时限",
    ],
    cta: "了解 Pro 方案",
  },
  {
    name: "ChatGPT Business",
    tag: "团队 / 企业订阅",
    price: "USD $60/用户/月 起",
    description:
      "官方提供的企业级方案，支持团队管理、权限分级与数据加密，适合需要统一管理与扩展能力的组织。",
    highlights: [
      "私有化知识库、品牌工作区、统一账单",
      "成员权限、使用审计、对话留痕",
      "企业级隐私承诺与 SOC2 合规保障",
    ],
    cta: "了解 Business 方案",
  },
];

const comparison = [
  {
    feature: "适用人群",
    plus: "个人创作者 / 自由职业者",
    pro: "重度内容生产者 / 高频开发者",
    business: "团队协作 / 企业部署",
  },
  {
    feature: "核心模型",
    plus: "GPT-4 / GPT-4o / GPT-4o mini",
    pro: "GPT-4o (优先队列) + 视频/语音能力",
    business: "GPT-4o + 企业加密专线",
  },
  {
    feature: "使用额度",
    plus: "标准调用速率与消息配额",
    pro: "高级速率 + 扩展消息上限",
    business: "自定义配额 + 可选包年",
  },
  {
    feature: "聊天记录",
    plus: "保留 30 天历史",
    pro: "扩展历史与多空间同步",
    business: "企业空间永久留存与归档",
  },
  {
    feature: "团队管理",
    plus: "—",
    pro: "—",
    business: "成员邀请、权限分级、统一账单",
  },
  {
    feature: "数据安全",
    plus: "个人隐私控制",
    pro: "增强型个人隐私",
    business: "零数据训练、SOC2、GDPR 合规",
  },
];

const recommendations = [
  {
    title: "优先关注聊天记录与灵活使用",
    description:
      "如果你希望保留个人聊天记录、轻松切换不同设备，并偶尔使用 GPT-4 进行创作，建议选择 ChatGPT Plus 个人订阅，官方权益完整同步。",
    icon: MessageSquare,
    action: "推荐方案：ChatGPT Plus",
  },
  {
    title: "需要更强模型能力与调用次数",
    description:
      "如果你需要更大的调用额度、多人协作、统一账单与企业级安全保障，首选 ChatGPT Business，性价比远高于单独开多份 Plus。",
    icon: Building2,
    action: "推荐方案：ChatGPT Business",
  },
];

export default function RechargePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-cyan-50/30 to-background dark:from-primary/5 dark:via-background dark:to-background" />
          <div className="absolute inset-y-0 left-[10%] hidden h-72 w-72 rounded-full bg-gradient-to-br from-blue-200/40 to-cyan-100/30 blur-3xl lg:block dark:opacity-0" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">
                  ChatGPT 官方订阅代充
                </Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  官方渠道代充，安全快捷有保障
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  为国内用户与企业提供安全可靠的 ChatGPT 官方订阅代充服务。无论是个人还是团队，我们均以官方标准流程完成订阅，权益即时同步。
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
                <Card className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">服务亮点</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {heroBenefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Layers className="h-4 w-4" />
                      代充流程
                    </div>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>提交目标账号邮箱或官方邀请链接</li>
                      <li>选择订阅类型与周期（Plus / Pro / Business）</li>
                      <li>完成支付并获取订单凭证</li>
                      <li>10-30 分钟内完成代充，支持加急处理</li>
                    </ol>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Introductions */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">
                官方订阅类型介绍
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">Plus、Pro 与 Business 如何选择？</h2>
              <p className="text-lg text-muted-foreground">
                我们为不同阶段的用户提供三种官方订阅方案介绍，帮助你快速匹配合适的权益组合。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <Card
                  key={plan.name}
                  className="h-full border border-border/60 bg-background/80 p-8 space-y-6"
                >
                  <div className="space-y-2">
                    <Badge className="bg-primary/10 text-primary w-fit">{plan.tag}</Badge>
                    <h3 className="text-2xl font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.price}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                  <ul className="space-y-3 text-sm text-foreground">
                    {plan.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <ShieldCheck className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full">
                    {plan.cta}
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">功能差异一览</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">三种订阅模式的详细对比</h2>
              <p className="text-lg text-muted-foreground">
                从适用人群、模型能力到安全合规，我们整理出最关键的差异点，帮助你快速决策。
              </p>
            </div>
            <Card className="border border-border/60 bg-background/80 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-muted/50">
                    <tr className="text-muted-foreground">
                      <th className="px-6 py-4 font-medium">对比维度</th>
                      <th className="px-6 py-4 font-medium">ChatGPT Plus</th>
                      <th className="px-6 py-4 font-medium">ChatGPT Pro</th>
                      <th className="px-6 py-4 font-medium">ChatGPT Business</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr
                        key={row.feature}
                        className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
                      >
                        <td className="px-6 py-4 font-medium text-foreground">{row.feature}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.plus}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.pro}</td>
                        <td className="px-6 py-4 text-muted-foreground">{row.business}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* Recommendations */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">选型建议</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">根据使用场景选择合适的订阅</h2>
              <p className="text-lg text-muted-foreground">
                不同诉求对应不同方案，我们给出最常见的两种选择建议。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {recommendations.map((item) => {
                const Icon = item.icon;
                return (
                  <Card key={item.title} className="h-full border border-border/60 bg-background/80 p-8 space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                      <Star className="w-4 h-4" />
                      {item.action}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <Card className="border border-primary/20 bg-background/80 p-10 sm:p-14">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <Badge className="bg-primary/10 text-primary w-fit">快速下单</Badge>
                  <h2 className="text-3xl sm:text-4xl font-bold">确认方案后，即刻代充，同步官方权益</h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    我们的顾问团队将为你核对订阅类型、账单信息与发票需求。下单之后，10-30 分钟内完成官方订阅，支持加急通道与批量代充。
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  <Button size="lg" className="gap-2">
                    获取代充报价 <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    预约顾问沟通 <Users className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
