import * as React from "react"
import { Check, MoveRight, PhoneCall } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingFeature {
  title: string
  description?: string
}

interface PricingAction {
  label: string
  variant?: ButtonProps["variant"]
  icon?: "move-right" | "phone-call"
  className?: string
}

export interface PricingPlan {
  name: string
  description: string
  price: string
  priceSuffix?: string
  features: PricingFeature[]
  action: PricingAction
  highlight?: boolean
}

export interface PricingProps {
  badge?: React.ReactNode
  title?: string
  description?: string
  plans: PricingPlan[]
  switcher?: React.ReactNode
}

const ICONS = {
  "move-right": MoveRight,
  "phone-call": PhoneCall,
}

function Pricing({
  badge = "Pricing",
  title = "Prices that make sense!",
  description = "Managing a small business today is already tough.",
  plans,
  switcher,
}: PricingProps) {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex text-center justify-center items-center gap-4 flex-col">
          {badge ? (
            typeof badge === "string" ? <Badge>{badge}</Badge> : badge
          ) : null}
          <div className="flex gap-2 flex-col">
            {title && (
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-center font-regular">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl text-center">
                {description}
              </p>
            )}
          </div>
          {switcher}
          <div className="grid pt-20 text-left grid-cols-1 lg:grid-cols-3 w-full gap-8">
            {plans.map((plan) => {
              const Icon = plan.action.icon ? ICONS[plan.action.icon] : undefined
              const variant = plan.action.variant ?? (plan.highlight ? "default" : "outline")

              return (
                <Card
                  key={plan.name}
                  className={cn(
                    "w-full rounded-md",
                    plan.highlight && "shadow-2xl"
                  )}
                >
                  <CardHeader>
                    <CardTitle>
                      <span className="flex flex-row gap-4 items-center font-normal">
                        {plan.name}
                      </span>
                    </CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col gap-8 justify-start">
                      <p className="flex flex-row items-center gap-2 text-xl">
                        <span className="text-4xl">{plan.price}</span>
                        {plan.priceSuffix ? (
                          <span className="text-sm text-muted-foreground">
                            {plan.priceSuffix}
                          </span>
                        ) : null}
                      </p>
                      {plan.features.length ? (
                        <div className="flex flex-col gap-4 justify-start">
                          {plan.features.map((feature) => (
                            <div className="flex flex-row gap-4" key={`${plan.name}-${feature.title}`}>
                              <Check className="w-4 h-4 mt-2 text-primary" />
                              <div className="flex flex-col">
                                <p>{feature.title}</p>
                                {feature.description ? (
                                  <p className="text-muted-foreground text-sm">
                                    {feature.description}
                                  </p>
                                ) : null}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : null}
                      <Button
                        variant={variant}
                        className={cn("gap-4", plan.action.className)}
                      >
                        {plan.action.label}
                        {Icon ? <Icon className="w-4 h-4" /> : null}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Pricing }
