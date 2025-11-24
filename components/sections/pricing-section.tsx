"use client"

import * as React from "react"

import { Pricing, type PricingPlan } from "@/components/ui/pricing-cards"
import { Tab } from "@/components/ui/pricing-tab"

type ModeKey = "会员订阅" | "API计费"

const MEMBER_PLANS: PricingPlan[] = [
  {
    name: "月度会员",
    description: "面向个人创作者与小团队，一价畅享GPT、Claude、Gemini、Midjourney等主流模型镜像。",
    price: "¥199",
    priceSuffix: "/ 月",
    features: [
      {
        title: "无限畅享主流模型",
        description: "会员期内不限次数调用GPT-4、Claude 3.5、Gemini Advanced等镜像服务。",
      },
      {
        title: "Midjourney绘图",
        description: "包含Midjourney图像生成额度，快速创作高质量视觉内容。",
      },
      {
        title: "全球节点加速",
        description: "超低延迟接入海外官方服务，7x24小时运维保障。",
      },
    ],
    action: {
      label: "立即开通",
      icon: "move-right",
    },
  },
  {
    name: "季度会员",
    description: "适合长期使用的专业团队，享受更多优惠价格与优先支持。",
    price: "¥549",
    priceSuffix: "/ 季",
    features: [
      {
        title: "全量模型合集",
        description: "同步更新OpenAI、Anthropic、Google最新模型与升级。",
      },
      {
        title: "专属客服与工单",
        description: "企业级响应机制，重大需求优先处理。",
      },
      {
        title: "团队协作",
        description: "支持多人账号共享调用统计与使用管理。",
      },
    ],
    action: {
      label: "首选方案",
      icon: "move-right",
    },
    highlight: true,
  },
  {
    name: "年度会员",
    description: "为企业及机构提供整年服务，包含白名单定制与高级运维。",
    price: "¥1,999",
    priceSuffix: "/ 年",
    features: [
      {
        title: "白名单优先开通",
        description: "提前体验最新模型与功能，专人协助迁移。",
      },
      {
        title: "专属知识库",
        description: "赠送企业知识库搭建与创作工作流诊断。",
      },
      {
        title: "定制合同与发票",
        description: "支持企业采购流程与多种付款方式。",
      },
    ],
    action: {
      label: "预约顾问",
      icon: "phone-call",
      variant: "outline",
    },
  },
]

const API_PLANS: PricingPlan[] = [
  {
    name: "¥1,000 API额度",
    description: "适合验证期项目，零门槛接入统一大模型网关。",
    price: "¥1,000",
    priceSuffix: "充值包",
    features: [
      {
        title: "一键接入Claude Code",
        description: "提供SDK与示例，极速完成代码助手集成。",
      },
      {
        title: "按量计费",
        description: "按实际调用扣费，额度可用于所有模型路线。",
      },
      {
        title: "监控面板",
        description: "实时查看QPS、延迟、消耗与错误率。",
      },
    ],
    action: {
      label: "立即充值",
      icon: "move-right",
    },
  },
  {
    name: "¥5,000 API额度",
    description: "团队研发首选，支持自定义限流与合作伙伴管理。",
    price: "¥5,000",
    priceSuffix: "充值包",
    features: [
      {
        title: "50%额度赠送",
        description: "赠送额外¥2,500额度，降低大模型使用成本。",
      },
      {
        title: "多环境隔离",
        description: "支持开发/测试/生产多环境密钥管理。",
      },
      {
        title: "专属技术顾问",
        description: "接口调优、限流策略、容灾方案一站式支持。",
      },
    ],
    action: {
      label: "团队套餐",
      icon: "move-right",
    },
    highlight: true,
  },
  {
    name: "企业定制额度",
    description: "面向大规模调用场景，提供专线加速与SLA保障。",
    price: "¥20,000+",
    priceSuffix: "按需定制",
    features: [
      {
        title: "专用网关与IP白名单",
        description: "确保与企业内网/云资源安全互通。",
      },
      {
        title: "数据合规支持",
        description: "满足金融、教育、政府等行业合规要求。",
      },
      {
        title: "联合研发",
        description: "模型微调、知识库构建、工作流落地全流程陪跑。",
      },
    ],
    action: {
      label: "联系商务",
      icon: "phone-call",
      variant: "outline",
    },
  },
]

const MODES: Record<ModeKey, { badge: string; title: string; description: string; plans: PricingPlan[] }> = {
  "会员订阅": {
    badge: "会员订阅",
    title: "镜像服务不限次数，全面解锁国际大模型",
    description: "会员期内畅享GPT、Claude、Gemini、Midjourney等顶尖模型镜像，提供企业级运维保障。",
    plans: MEMBER_PLANS,
  },
  "API计费": {
    badge: "API计费",
    title: "统一网关，按量付费",
    description: "按需购买额度，一键接入主流模型API，适用于应用开发、自动化工作流、企业系统集成。",
    plans: API_PLANS,
  },
}

export function PricingSection() {
  const [selectedMode, setSelectedMode] = React.useState<ModeKey>("会员订阅")
  const { badge, title, description, plans } = MODES[selectedMode]

  return (
    <section id="pricing" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/10" />
      <div className="relative">
        <Pricing
          badge={badge}
          title={title}
          description={description}
          plans={plans}
          switcher={
            <div className="flex w-fit rounded-full bg-muted p-1">
              {(Object.keys(MODES) as ModeKey[]).map((mode) => (
                <Tab
                  key={mode}
                  text={mode}
                  selected={selectedMode === mode}
                  setSelected={() => setSelectedMode(mode)}
                  discount={mode === "会员订阅"}
                />
              ))}
            </div>
          }
        />
      </div>
    </section>
  )
}
