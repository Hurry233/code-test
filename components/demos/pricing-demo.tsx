"use client"

import * as React from "react"

import { Pricing, type PricingPlan } from "@/components/ui/pricing-cards"
import { Tab } from "@/components/ui/pricing-tab"

const DEMO_PLANS: PricingPlan[] = [
  {
    name: "Startup",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
    price: "$40",
    priceSuffix: "/ month",
    features: [
      {
        title: "Fast and reliable",
        description: "We've made it fast and reliable.",
      },
      {
        title: "Easy to use",
        description: "Simple and intuitive interface.",
      },
      {
        title: "24/7 Support",
        description: "We're here to help you anytime.",
      },
    ],
    action: {
      label: "Sign up today",
      icon: "move-right",
    },
  },
  {
    name: "Growth",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
    price: "$40",
    priceSuffix: "/ month",
    features: [
      {
        title: "Fast and reliable",
        description: "We've made it fast and reliable.",
      },
      {
        title: "Priority support",
        description: "Get help when you need it.",
      },
      {
        title: "Advanced features",
        description: "Access to all premium features.",
      },
    ],
    action: {
      label: "Sign up today",
      icon: "move-right",
    },
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Our goal is to streamline SMB trade, making it easier and faster than ever for everyone and everywhere.",
    price: "$40",
    priceSuffix: "/ month",
    features: [
      {
        title: "Fast and reliable",
        description: "We've made it fast and reliable.",
      },
      {
        title: "Dedicated support",
        description: "Your own account manager.",
      },
      {
        title: "Custom solutions",
        description: "Tailored to your needs.",
      },
    ],
    action: {
      label: "Book a meeting",
      icon: "phone-call",
    },
  },
]

export function PricingDemo() {
  const [selectedMode, setSelectedMode] = React.useState("monthly")

  return (
    <div className="w-full">
      <Pricing
        badge="Pricing"
        title="Prices that make sense!"
        description="Managing a small business today is already tough."
        plans={DEMO_PLANS}
        switcher={
          <div className="flex w-fit rounded-full bg-muted p-1">
            <Tab
              text="monthly"
              selected={selectedMode === "monthly"}
              setSelected={setSelectedMode}
            />
            <Tab
              text="yearly"
              selected={selectedMode === "yearly"}
              setSelected={setSelectedMode}
              discount
            />
          </div>
        }
      />
    </div>
  )
}
