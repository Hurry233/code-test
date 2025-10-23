# Component Documentation

## Overview

This document provides detailed information about all components in the `/components/ui` directory.

## Components

### 1. SplineScene (`splite.tsx`)

**Purpose:** Render interactive 3D Spline scenes with lazy loading and suspense fallback.

**Location:** `/components/ui/splite.tsx`

**Usage:**
```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `scene` | `string` | Yes | URL to your Spline scene |
| `className` | `string` | No | Additional CSS classes |

**Features:**
- ✅ Lazy loading with `React.lazy()`
- ✅ Suspense boundary with animated loader
- ✅ Full TypeScript support
- ✅ Client-side only rendering with `'use client'`

**Performance:**
- The component uses code splitting to only load Spline when needed
- Fallback UI shows during loading for better UX
- Optimized for Next.js App Router

---

### 2. SplineSceneBasic (`demo.tsx`)

**Purpose:** Complete demo implementation showing Spline integration with shadcn components.

**Location:** `/components/ui/demo.tsx`

**Usage:**
```tsx
import { SplineSceneBasic } from "@/components/ui/demo";

<SplineSceneBasic />
```

**Props:** None - fully self-contained demo

**Features:**
- ✅ Responsive layout (split left/right on desktop, stacked on mobile)
- ✅ Gradient text effects
- ✅ Spotlight animation
- ✅ Dark theme card with glass effect
- ✅ Complete example you can copy and modify

**Layout:**
- Left side: Text content with gradient title
- Right side: Spline 3D scene
- Background: Dark card with spotlight effect

---

### 3. Card (`card.tsx`)

**Purpose:** shadcn-style card component with multiple sub-components.

**Location:** `/components/ui/card.tsx`

**Usage:**
```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>
```

**Sub-components:**

#### Card
Base container for all card content.

**Props:** Standard HTML div attributes + `className`

#### CardHeader
Container for card title and description.

**Props:** Standard HTML div attributes + `className`

#### CardTitle
Heading for the card (renders as h3).

**Props:** Standard HTML heading attributes + `className`

#### CardDescription
Subtitle or description text.

**Props:** Standard HTML p attributes + `className`

#### CardContent
Main content area of the card.

**Props:** Standard HTML div attributes + `className`

#### CardFooter
Footer section for actions or additional info.

**Props:** Standard HTML div attributes + `className`

---

### 4. Spotlight (Aceternity) (`aceternity/spotlight.tsx`)

**Purpose:** Static SVG spotlight effect for dramatic lighting.

**Location:** `/components/ui/aceternity/spotlight.tsx`

**Usage:**
```tsx
import { Spotlight } from "@/components/ui/aceternity/spotlight";

<div className="relative">
  <Spotlight
    className="-top-40 left-0 md:left-60 md:-top-20"
    fill="white"
  />
  {/* Your content */}
</div>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | `string` | No | Position and styling classes |
| `fill` | `string` | No | Color of the spotlight (default: "white") |

**Features:**
- ✅ SVG-based spotlight effect
- ✅ Animate-in with CSS animation
- ✅ Customizable position and color
- ✅ Lightweight (no JavaScript required)

**Best for:**
- Hero sections
- Feature highlights
- Dramatic backgrounds

---

### 5. Spotlight (Ibelick) (`ibelick/spotlight.tsx`)

**Purpose:** Interactive mouse-following spotlight effect.

**Location:** `/components/ui/ibelick/spotlight.tsx`

**Usage:**
```tsx
import { Spotlight } from "@/components/ui/ibelick/spotlight";

<div className="relative">
  <Spotlight size={300} />
  {/* Your content */}
</div>
```

**Props:**
| Prop | Type | Required | Description |
|------|------|----------|-------------|
| `className` | `string` | No | Additional CSS classes |
| `size` | `number` | No | Spotlight size in pixels (default: 200) |
| `springOptions` | `SpringOptions` | No | Framer Motion spring config |

**Features:**
- ✅ Follows mouse movement
- ✅ Smooth spring animations
- ✅ Radial gradient effect
- ✅ Automatically sets parent element styles

**Best for:**
- Interactive cards
- Product showcases
- Hover effects

**Dependencies:** Requires `framer-motion`

---

### 6. Spotlight (Default Export) (`spotlight.tsx`)

**Purpose:** Re-exports the default spotlight variant.

**Location:** `/components/ui/spotlight.tsx`

**Current Default:** Aceternity variant

**Usage:**
```tsx
import { Spotlight } from "@/components/ui/spotlight";
// Uses Aceternity variant by default
```

**To Change Default:**
Edit `/components/ui/spotlight.tsx`:
```tsx
// Option 1: Aceternity (current)
export { Spotlight } from "./aceternity/spotlight";

// Option 2: Ibelick
export { Spotlight } from "./ibelick/spotlight";
```

---

## Component Index

All components are also exported from `/components/ui/index.ts` for convenience:

```tsx
import { 
  SplineScene, 
  SplineSceneBasic, 
  Card, 
  Spotlight 
} from "@/components/ui";
```

---

## Styling Guidelines

### Using the `cn` Utility

All components use the `cn` utility from `/lib/utils.ts` for className merging:

```tsx
import { cn } from "@/lib/utils";

<Card className={cn(
  "w-full h-full",
  isActive && "border-primary",
  className
)} />
```

### Tailwind Classes

Components follow shadcn conventions:
- Use semantic color tokens: `bg-card`, `text-card-foreground`
- Responsive classes: `md:`, `lg:`, etc.
- Dark mode support: `dark:` prefix

### CSS Variables

Theme colors are defined in `app/globals.css`:
```css
--background: 0 0% 100%;
--foreground: 222.2 84% 4.9%;
--card: 0 0% 100%;
/* etc... */
```

---

## Examples

### Basic Spline Integration

```tsx
import { SplineScene } from "@/components/ui/splite";

export function MySplineComponent() {
  return (
    <div className="w-screen h-screen">
      <SplineScene 
        scene="https://prod.spline.design/YOUR_ID/scene.splinecode"
      />
    </div>
  );
}
```

### Card with Spotlight

```tsx
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";

export function SpotlightCard() {
  return (
    <Card className="relative overflow-hidden">
      <Spotlight className="top-0 left-0" fill="blue" />
      <div className="relative z-10 p-8">
        <h2>Content here</h2>
      </div>
    </Card>
  );
}
```

### Full Page Layout

```tsx
import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card";

export function FullPageDemo() {
  return (
    <main className="min-h-screen p-8">
      <Card className="h-[600px] grid md:grid-cols-2 gap-8">
        <div className="p-8 flex flex-col justify-center">
          <h1 className="text-4xl font-bold">Welcome</h1>
          <p className="mt-4 text-muted-foreground">
            Explore our 3D showcase
          </p>
        </div>
        <div className="relative">
          <SplineScene 
            scene="https://prod.spline.design/YOUR_ID/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </Card>
    </main>
  );
}
```

---

## TypeScript

All components are fully typed:

```tsx
// Auto-completion and type checking work out of the box
import { SplineScene } from "@/components/ui/splite";

<SplineScene 
  scene="..." // ✅ Required
  className="..." // ✅ Optional
  invalidProp="..." // ❌ TypeScript error
/>
```

---

## Performance Tips

1. **Lazy Loading**: SplineScene already uses React.lazy() - no extra work needed
2. **Code Splitting**: Import components only where needed
3. **Scene Optimization**: Optimize your Spline scenes for web (reduce poly count, optimize textures)
4. **Suspense Boundaries**: Add custom suspense boundaries for better loading UX
5. **Dynamic Imports**: For non-critical components:
   ```tsx
   const SplineScene = dynamic(() => import("@/components/ui/splite").then(m => ({ default: m.SplineScene })), {
     ssr: false,
     loading: () => <div>Loading...</div>
   });
   ```

---

## Troubleshooting

### Component Not Found
- ✅ Check import path: `@/components/ui/[component]`
- ✅ Verify file exists in `/components/ui`
- ✅ Check TypeScript paths in `tsconfig.json`

### Spotlight Not Showing
- ✅ Parent element must have `position: relative`
- ✅ Parent element needs defined width/height
- ✅ Check z-index stacking

### Spline Scene Not Loading
- ✅ Verify scene URL is correct
- ✅ Check browser console for errors
- ✅ Ensure you have internet connection
- ✅ Try the scene URL directly in browser

### TypeScript Errors
- ✅ Run `npm install` to get all types
- ✅ Restart your IDE
- ✅ Check `tsconfig.json` is configured correctly

---

## Dependencies

### Required
- `react` - Core React library
- `react-dom` - React DOM rendering
- `next` - Next.js framework
- `@splinetool/react-spline` - Spline React integration
- `@splinetool/runtime` - Spline runtime
- `framer-motion` - Animation library (for Ibelick spotlight)
- `clsx` - Conditional class names
- `tailwind-merge` - Merge Tailwind classes

### Dev Dependencies
- `typescript` - TypeScript compiler
- `@types/react` - React type definitions
- `@types/react-dom` - React DOM type definitions
- `@types/node` - Node.js type definitions
- `tailwindcss` - Tailwind CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixing

---

## Contributing

When adding new components to `/components/ui`:

1. Follow shadcn naming conventions
2. Use TypeScript with proper types
3. Include `'use client'` directive if using hooks/state
4. Use the `cn` utility for className props
5. Add React.forwardRef for DOM components
6. Export from `/components/ui/index.ts`
7. Document in this file
