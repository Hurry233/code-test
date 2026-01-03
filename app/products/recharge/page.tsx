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
  "ChatGPT Plus / Pro / Business 官方订阅代充",
  "全流程官方渠道，保障账号安全与权益",
  "可开具企业抬头发票、合同及付款凭证",
  "支持批量充值、团队共享额度与统一续费",
  "无需提供账户密码，更加隐私可靠",
];

const plans = [
  {
    id: "plus",
    name: "ChatGPT Plus",
    tag: "最受欢迎",
    price: "US$20/月",
    description:
      "面向个人用户的进阶订阅：在免费版基础上获得更高容量与更强推理能力，适合长期学习、写作、编码与日常研究。",
    highlights: [
      "GPT-5.2 Thinking 高级推理（更高使用容量）",
      "消息与上传额度提升；图片生成更快、质量更高",
      "深度研究与智能体模式（Agent Mode）额度扩展",
      "项目（Projects）、任务（Tasks）与自定义 GPT（适合长期工作流）",
      "有限使用 Sora 1 视频生成；包含 Codex 智能体",
    ],
    cta: "了解 Plus 方案",
    href: "https://chatgpt.com/zh-Hans-CN/plans/plus/",
    links: {
      learnMore: "https://chatgpt.com/zh-Hans-CN/plans/plus/",
      comparePlans: "https://chatgpt.com/zh-Hans-CN/pricing",
      getStarted: "https://chatgpt.com/zh-Hans-CN/pricing",
      billingHelp: "https://help.openai.com/",
    },
    footnote:
      "具体可用模型、额度与地区定价可能会调整，请以官方页面展示为准。",
  },

  {
    id: "pro",
    name: "ChatGPT Pro",
    tag: "专业创作者 / 开发者",
    price: "US$200/月",
    description:
      "面向高频使用者的旗舰版本：在 Plus 基础上解锁更强的 GPT-5 专业推理与“无限”容量（受防滥用规则约束），适合研究、工程、内容与多模态重度工作。",
    highlights: [
      "GPT-5.2 Pro 专业推理（更强分析与更稳结果）",
      "消息与上传数量“无限”（受防滥用规则约束）",
      "图片生成“无限”且更快",
      "深度研究与智能体模式最高支持；最大记忆与上下文能力",
      "Sora 1 视频生成高级使用权限；扩展版 Codex 智能体",
      "新能力研究预览（抢先体验）",
    ],
    cta: "了解 Pro 方案",
    href: "https://chatgpt.com/zh-Hans-CN/plans/pro/",
    links: {
      learnMore: "https://chatgpt.com/zh-Hans-CN/plans/pro/",
      comparePlans: "https://chatgpt.com/zh-Hans-CN/pricing",
      getStarted: "https://chatgpt.com/zh-Hans-CN/pricing",
      whatIsPro: "https://help.openai.com/zh-hans-cn/articles/9793128-what-is-chatgpt-pro",
    },
    footnote:
      "“无限”使用需遵守防滥用规则；API 调用不包含在 ChatGPT Pro 内，需单独计费。",
  },

  {
    id: "business",
    name: "ChatGPT Business",
    tag: "团队 / 成长型企业",
    price: "US$25/席位/月（年付）或 US$30/席位/月（月付）",
    description:
      "为团队打造的安全协作工作区：提供共享空间、管理员控制、企业级数据隐私与合规能力，并可连接常用工具形成公司知识工作流。",
    highlights: [
      "2 个席位起订；可按需增减席位并统一结算",
      "安全、专属的团队工作区：权限/管理控制 + SAML SSO + MFA",
      "企业级数据隐私：默认不用于训练；传输与静态加密",
      "公司知识与连接器：可连接 Slack、Google Drive、SharePoint、GitHub 等",
      "支持深度研究、录制模式、Canvas、共享项目、任务、自定义工作区 GPT",
      "可选“积分”机制，给重度用户扩展用量与能力",
    ],
    cta: "了解 Business 方案",
    href: "https://chatgpt.com/zh-Hans-CN/business/business-plan/",
    links: {
      learnMore: "https://chatgpt.com/zh-Hans-CN/business/business-plan/",
      pricing: "https://chatgpt.com/zh-Hans-CN/pricing",
      annualPricingDetail: "https://openai.com/zh-Hans-CN/business/chatgpt-pricing/",
      businessFAQ: "https://help.openai.com/zh-hans-cn/articles/8542115-chatgpt-business-faq",
      contactSales: "https://chatgpt.com/zh-Hans-CN/business/enterprise",
    },
    footnote:
      "企业/教育/更高阶治理（如 SCIM、数据驻留等）通常在 Enterprise 方案中提供。",
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
