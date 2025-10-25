"use client"

import * as React from "react"

import { Pricing, type PricingPlan } from "@/components/ui/pricing-cards"
import { Tab } from "@/components/ui/pricing-tab"

type ModeKey = "Time-based" | "Usage-based"

const TIME_BASED_PLANS: PricingPlan[] = [
  {
    name: "Monthly Pass",
    description: "Flexible access with month-to-month billing for smaller teams just getting started.",
    price: "$39",
    priceSuffix: "/ month",
    features: [
      {
        title: "Unlimited core usage",
        description: "All essential endpoints included with fair use limits.",
      },
      {
        title: "Community support",
        description: "Get help from our engineers within 24 hours.",
      },
      {
        title: "Cancel anytime",
        description: "No long-term contracts or hidden fees.",
      },
    ],
    action: {
      label: "Start monthly",
      icon: "move-right",
    },
  },
  {
    name: "Quarterly Pass",
    description: "Best balance between savings and flexibility for growing teams.",
    price: "$99",
    priceSuffix: "/ quarter",
    features: [
      {
        title: "Priority support",
        description: "Direct chat with our specialists during business hours.",
      },
      {
        title: "Advanced analytics",
        description: "Detailed insights into usage trends and performance.",
      },
      {
        title: "Automation toolkit",
        description: "Workflow templates to help you launch faster.",
      },
    ],
    action: {
      label: "Upgrade now",
      icon: "move-right",
    },
    highlight: true,
  },
  {
    name: "Annual Pass",
    description: "Lock in our best rate and partner with us for long-term success.",
    price: "$349",
    priceSuffix: "/ year",
    features: [
      {
        title: "Dedicated success manager",
        description: "Planning sessions to keep your roadmap on track.",
      },
      {
        title: "Custom integrations",
        description: "We help connect your data sources and tooling.",
      },
      {
        title: "Priority roadmap access",
        description: "Early access to new platform capabilities.",
      },
    ],
    action: {
      label: "Talk to sales",
      icon: "phone-call",
      variant: "outline",
    },
  },
]

const USAGE_BASED_PLANS: PricingPlan[] = [
  {
    name: "$20 Credits",
    description: "Ideal for prototypes, hackathons, or occasional workloads.",
    price: "$20",
    priceSuffix: "credit pack",
    features: [
      {
        title: "Full platform access",
        description: "Experiment with every model without restrictions.",
      },
      {
        title: "Never expires",
        description: "Top up once and use credits whenever you need them.",
      },
      {
        title: "Instant provisioning",
        description: "Credits unlock in seconds after checkout.",
      },
    ],
    action: {
      label: "Purchase credits",
      icon: "move-right",
    },
  },
  {
    name: "$100 Credits",
    description: "Perfect for teams running pilots or onboarding new products.",
    price: "$100",
    priceSuffix: "credit pack",
    features: [
      {
        title: "Volume bonus",
        description: "Automatic 10% extra usage on every purchase.",
      },
      {
        title: "Shared wallets",
        description: "Distribute credits across teams and projects.",
      },
      {
        title: "Flexible limits",
        description: "Scale usage up or down with no penalties.",
      },
    ],
    action: {
      label: "Purchase credits",
      icon: "move-right",
    },
    highlight: true,
  },
  {
    name: "$500 Credits",
    description: "Designed for production workloads that demand consistency.",
    price: "$500",
    priceSuffix: "credit pack",
    features: [
      {
        title: "Enterprise SLA",
        description: "Guaranteed uptime with priority incident response.",
      },
      {
        title: "Dedicated support",
        description: "Direct line to our solutions architects.",
      },
      {
        title: "Custom invoicing",
        description: "Flexible billing to match your procurement process.",
      },
    ],
    action: {
      label: "Contact sales",
      icon: "phone-call",
      variant: "outline",
    },
  },
]

const MODES: Record<ModeKey, { badge: string; title: string; description: string; plans: PricingPlan[] }> = {
  "Time-based": {
    badge: "Time-based billing",
    title: "Predictable subscriptions that scale with you",
    description: "Pick the pass that fits your runway. All plans include collaboration tools, analytics, and security defaults.",
    plans: TIME_BASED_PLANS,
  },
  "Usage-based": {
    badge: "Usage-based billing",
    title: "Only pay for the usage you need",
    description: "Load up credits for bursts of demand or seasonal traffic. Spend them whenever you want with no expiration.",
    plans: USAGE_BASED_PLANS,
  },
}

export function PricingSection() {
  const [selectedMode, setSelectedMode] = React.useState<ModeKey>("Time-based")
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
                  discount={mode === "Time-based"}
                />
              ))}
            </div>
          }
        />
      </div>
    </section>
  )
}
