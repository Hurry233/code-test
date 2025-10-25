# Pricing Component Integration

This document describes the new pricing component integration with shadcn/ui.

## Overview

The pricing section has been completely redesigned with a new, flexible component architecture that supports:

- **Two billing modes**: Time-based (monthly, quarterly, yearly) and Usage-based ($20, $100, $500 credits)
- **Interactive tab switcher**: Smooth animations when switching between modes
- **Fully customizable**: Easy to modify pricing plans, features, and descriptions
- **Responsive design**: Works seamlessly on all device sizes

## New Components

### 1. Badge Component (`/components/ui/badge.tsx`)

A versatile badge component for displaying labels and tags.

**Usage:**
```tsx
import { Badge } from "@/components/ui/badge"

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="outline">Outline</Badge>
<Badge variant="destructive">Destructive</Badge>
```

### 2. Pricing Tab Component (`/components/ui/pricing-tab.tsx`)

An animated tab switcher with optional discount badge, using Framer Motion for smooth transitions.

**Props:**
- `text`: Tab label
- `selected`: Whether this tab is currently selected
- `setSelected`: Callback function when tab is clicked
- `discount`: Optional boolean to show a "Save 35%" badge

**Usage:**
```tsx
import { Tab } from "@/components/ui/pricing-tab"

<div className="flex w-fit rounded-full bg-muted p-1">
  <Tab
    text="monthly"
    selected={selected === "monthly"}
    setSelected={setSelected}
  />
  <Tab
    text="yearly"
    selected={selected === "yearly"}
    setSelected={setSelected}
    discount={true}
  />
</div>
```

### 3. Pricing Cards Component (`/components/ui/pricing-cards.tsx`)

The main pricing component that displays pricing plans in a grid layout.

**Props:**
- `badge`: Optional badge text or custom React node
- `title`: Main heading
- `description`: Subtitle text
- `plans`: Array of pricing plans
- `switcher`: Optional React node for custom switcher (e.g., tabs)

**PricingPlan Interface:**
```tsx
interface PricingPlan {
  name: string
  description: string
  price: string
  priceSuffix?: string
  features: PricingFeature[]
  action: PricingAction
  highlight?: boolean
}

interface PricingFeature {
  title: string
  description?: string
}

interface PricingAction {
  label: string
  variant?: "default" | "outline" | "secondary" | "ghost" | "link"
  icon?: "move-right" | "phone-call"
  className?: string
}
```

**Usage:**
```tsx
import { Pricing } from "@/components/ui/pricing-cards"

<Pricing
  badge="Pricing"
  title="Prices that make sense!"
  description="Managing a small business today is already tough."
  plans={pricingPlans}
/>
```

### 4. Pricing Section Component (`/components/ui/pricing-section.tsx`)

The complete pricing section with integrated mode switching between time-based and usage-based billing.

**Features:**
- Default mode: Time-based billing (Monthly, Quarterly, Yearly passes)
- Alternative mode: Usage-based billing ($20, $100, $500 credit packs)
- Smooth tab transitions with save badge on time-based option
- Pre-configured pricing tiers for both modes

**Usage:**
Simply import and use in your pages:

```tsx
import { PricingSection } from "@/components/ui/pricing-section"

<PricingSection />
```

## Installation & Dependencies

All required dependencies are already included in the project:

- `lucide-react` - Icon library (Check, MoveRight, PhoneCall icons)
- `framer-motion` - Animation library for tab transitions
- `class-variance-authority` - Utility for variant classes
- `@radix-ui/react-slot` - For button composition

## Component Architecture

The pricing system is modular:

```
pricing-section.tsx (wrapper with state management)
  └── pricing-cards.tsx (layout and card rendering)
      ├── badge.tsx (labels)
      ├── card.tsx (shadcn card components)
      ├── button.tsx (action buttons)
      └── lucide-react (icons)
  └── pricing-tab.tsx (mode switcher)
      └── badge.tsx (discount label)
```

## Customization

### Changing Pricing Plans

Edit the `TIME_BASED_PLANS` and `USAGE_BASED_PLANS` constants in `/components/ui/pricing-section.tsx`:

```tsx
const TIME_BASED_PLANS: PricingPlan[] = [
  {
    name: "Custom Plan",
    description: "Your custom description",
    price: "$99",
    priceSuffix: "/ month",
    features: [
      {
        title: "Feature 1",
        description: "Feature description",
      },
    ],
    action: {
      label: "Get Started",
      icon: "move-right",
    },
    highlight: true, // Makes this plan stand out
  },
]
```

### Changing Mode Labels

Edit the `MODES` constant to customize badge, title, and description for each billing mode:

```tsx
const MODES: Record<ModeKey, { badge: string; title: string; description: string; plans: PricingPlan[] }> = {
  "Time-based": {
    badge: "Time-based billing",
    title: "Your custom title",
    description: "Your custom description",
    plans: TIME_BASED_PLANS,
  },
  // ...
}
```

### Adding More Icons

To add more icon options, update the `ICONS` object in `pricing-cards.tsx`:

```tsx
import { YourIcon } from "lucide-react"

const ICONS = {
  "move-right": MoveRight,
  "phone-call": PhoneCall,
  "your-icon": YourIcon,
}
```

## Migration from Old Pricing Component

The old pricing component has been replaced but is still accessible via the re-export in `/components/ui/pricing.tsx`. The new component structure is completely separate to avoid conflicts.

### Old Import (deprecated)
```tsx
import { Pricing } from "@/components/ui/pricing"
// This now imports from pricing-cards.tsx
```

### New Import (recommended)
```tsx
import { Pricing } from "@/components/ui/pricing-cards"
import { PricingSection } from "@/components/ui/pricing-section"
```

## Pages Using Pricing

The new pricing section is automatically used in:
- `/app/page.tsx` (homepage)
- `/app/products/page.tsx` (products page)

## Demo Component

A demo component is available at `/components/ui/pricing-demo.tsx` showing basic usage with tab switching.

## Styling

All components use Tailwind CSS with shadcn/ui conventions:

- Colors: Uses CSS variables like `--primary`, `--muted`, etc.
- Spacing: Standard Tailwind spacing scale
- Typography: Responsive text sizes
- Dark mode: Automatically supported via Tailwind dark mode

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Requires JavaScript for tab animations

## Performance

- Static rendering: All pricing content is pre-rendered at build time
- Client-side: Only tab switching requires client-side JavaScript
- Bundle size: ~2-3KB gzipped for pricing components
- Animations: Hardware-accelerated via Framer Motion

## Accessibility

- Semantic HTML with proper heading structure
- Keyboard navigation support for tabs
- Focus states on interactive elements
- Screen reader compatible

## Testing

Build the project to verify everything works:
```bash
npm run build
```

Run the development server to test interactivity:
```bash
npm run dev
```

## Support

For issues or questions about the pricing components, check:
- shadcn/ui documentation: https://ui.shadcn.com
- Framer Motion docs: https://www.framer.com/motion
- Lucide React icons: https://lucide.dev
