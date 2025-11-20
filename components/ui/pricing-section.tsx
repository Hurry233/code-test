"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check } from "lucide-react"

type PricingPlan = {
  name: string
  description: string
  price: number
  period: string
  features: string[]
  highlighted?: boolean
}

type ModeKey = "会员订阅" | "API计费"

const MEMBER_PLANS: PricingPlan[] = [
  {
    name: "基础版",
    description: "个人开发者",
    price: 29,
    period: "月",
    features: [
      "每月 50,000 tokens",
      "支持 GPT-4, Claude, Gemini",
      "标准支持",
      "社区访问",
    ],
  },
  {
    name: "专业版",
    description: "企业和团队",
    price: 99,
    period: "月",
    features: [
      "每月 500,000 tokens",
      "所有模型无限制",
      "优先支持",
      "API 访问",
      "团队协作",
      "高级分析",
    ],
    highlighted: true,
  },
  {
    name: "企业版",
    description: "大规模应用",
    price: 299,
    period: "月",
    features: [
      "无限 tokens",
      "所有模型优先访问",
      "24/7 专属支持",
      "定制集成",
      "SLA 保证",
      "专业咨询",
      "私有部署选项",
    ],
  },
]

const API_PLANS: PricingPlan[] = [
  {
    name: "按需计费",
    description: "为您计费",
    price: 0.002,
    period: "1K tokens",
    features: [
      "按实际使用计费",
      "无最小消费",
      "所有模型支持",
      "实时计费",
      "详细账单",
    ],
  },
  {
    name: "预付套餐",
    description: "节省 20%",
    price: 9.99,
    period: "100K tokens",
    features: [
      "预付费套餐",
      "价格更优惠",
      "所有模型支持",
      "一年有效期",
      "可叠加购买",
    ],
    highlighted: true,
  },
  {
    name: "企业套餐",
    description: "定制化方案",
    price: 0.0015,
    period: "1K tokens",
    features: [
      "定制价格",
      "大额折扣",
      "独立账户管理",
      "技术支持",
      "定制集成",
    ],
  },
]

const MODES: Record<ModeKey, { badge: string; title: string; description: string; plans: PricingPlan[] }> = {
  "会员订阅": {
    badge: "会员订阅",
    title: "按需订阅，按月付费",
    description: "选择合适的计划，享受稳定的 AI 服务。按月订阅，随时升级或降级。",
    plans: MEMBER_PLANS,
  },
  "API计费": {
    badge: "API计费",
    title: "统一网关，按量付费",
    description: "按需购买额度，一键接入主流模型 API，适用于应用开发、自动化工作流、企业系统集成。",
    plans: API_PLANS,
  },
}

export function PricingSection() {
  const [selectedMode, setSelectedMode] = React.useState<ModeKey>("会员订阅")
  const { badge, title, description, plans } = MODES[selectedMode]

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="container relative mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
            {badge}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {description}
          </p>
        </motion.div>

        {/* Mode Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex w-fit rounded-full bg-muted p-1 gap-1">
            {(Object.keys(MODES) as ModeKey[]).map((mode) => (
              <button
                key={mode}
                onClick={() => setSelectedMode(mode)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  selectedMode === mode
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto max-w-6xl grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className={`h-full p-8 flex flex-col border-border/60 ${
                plan.highlighted
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-background"
                  : "bg-card/60"
              }`}>
                {plan.highlighted && (
                  <div className="mb-4 inline-flex w-fit px-3 py-1 rounded-full bg-primary/20 text-sm font-semibold text-primary">
                    推荐
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                
                <div className="my-6">
                  <div className="text-4xl font-bold text-foreground">
                    ¥{plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">/{plan.period}</p>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.highlighted
                      ? ""
                      : "bg-muted text-foreground hover:bg-muted/80"
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  立即购买
                </Button>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground">
            所有计划均包含免费试用。无需信用卡。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
