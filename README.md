# Spline & WorldMap Component Integration with shadcn/ui

This project demonstrates the integration of 3D Spline scenes and interactive world maps with shadcn/ui components, Tailwind CSS, and TypeScript in a Next.js application.

## 🎯 Project Overview

This is a complete Next.js 14 application with:
- ✅ **TypeScript** - Full type safety
- ✅ **Tailwind CSS** - Utility-first CSS framework
- ✅ **shadcn/ui** - High-quality component library
- ✅ **Spline 3D** - Interactive 3D scenes
- ✅ **WorldMap** - Animated world map with connections
- ✅ **Responsive Navbar** - shadcnblocks.com Navbar variation
- ✅ **Framer Motion** - Animation library
- ✅ **Dark Mode** - Theme support with next-themes

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page with demo
│   └── globals.css        # Global styles and Tailwind directives
├── components/
│   ├── theme-provider.tsx # next-themes provider wrapper
│   └── ui/                # shadcn/ui components (IMPORTANT!)
│       ├── splite.tsx     # Main Spline component
│       ├── demo.tsx       # Spline demo implementation
│       ├── world-map.tsx  # Interactive world map component
│       ├── world-map-demo.tsx # World map demo section
│       ├── shadcnblocks-com-navbar1.tsx # Responsive navbar component
│       ├── shadcnblocks-com-navbar1-demo.tsx # Navbar demo
│       ├── accordion.tsx  # Accordion component from shadcn
│       ├── button.tsx     # Button component from shadcn
│       ├── input.tsx      # Input component from shadcn
│       ├── label.tsx      # Label component from shadcn
│       ├── navigation-menu.tsx # Navigation menu component
│       ├── sheet.tsx      # Sheet (mobile drawer) component
│       ├── card.tsx       # Card component from shadcn
│       ├── spotlight.tsx  # Spotlight export (uses aceternity by default)
│       ├── aceternity/    # Aceternity UI variant
│       │   └── spotlight.tsx
│       └── ibelick/       # Alternative Ibelick variant
│           └── spotlight.tsx
├── lib/
│   └── utils.ts           # Utility functions (cn helper)
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.mjs        # Next.js configuration
└── package.json           # Dependencies
```

## 🎨 Why /components/ui?

The `/components/ui` folder is the **standard convention** for shadcn/ui projects:

1. **Consistency** - All shadcn components live in `components/ui` by default
2. **CLI Integration** - The shadcn CLI automatically installs components to this path
3. **Import Paths** - Makes imports clean: `@/components/ui/card`
4. **Community Standard** - Widely recognized pattern in the React/Next.js ecosystem
5. **Separation of Concerns** - UI primitives separate from feature components

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

```bash
npm install
```

This will install all required packages including:
- `@splinetool/react-spline` - React bindings for Spline
- `@splinetool/runtime` - Spline runtime
- `framer-motion` - Animation library
- `dotted-map` - World map generation library
- `next-themes` - Theme management for Next.js
- `lucide-react` - Icon set used across components
- `@radix-ui/*` packages - Accessibility primitives for accordion, navigation menu, sheet, label, and slot
- `class-variance-authority` - Variant helpers for button styling
- All Next.js, React, TypeScript, and Tailwind dependencies

2. **Run the development server:**

```bash
npm run dev
```

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Components

### SplineScene

The main component for rendering Spline 3D scenes:

```tsx
import { SplineScene } from "@/components/ui/splite";

<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
  className="w-full h-full"
/>
```

**Props:**
- `scene` (string, required) - URL to your Spline scene
- `className` (string, optional) - Additional CSS classes

**Features:**
- Lazy loading with `React.lazy()` for optimal performance
- Suspense fallback with animated loader
- Full TypeScript support

### SplineSceneBasic (Demo)

A complete demo implementation showing:
- Spline 3D scene integration
- Spotlight effect
- Card wrapper
- Responsive layout

```tsx
import { SplineSceneBasic } from "@/components/ui/demo";

<SplineSceneBasic />
```

### WorldMap

Animated dotted world map with arc transitions between locations.

```tsx
import { WorldMap } from "@/components/ui/world-map";

<WorldMap
  dots=[
    {
      start: { lat: 40.7128, lng: -74.0060 },
      end: { lat: 51.5074, lng: -0.1278 },
    },
  ]
/>
```

**Props:**
- `dots` (Array, optional) – list of connections to draw between coordinates
- `lineColor` (string, optional) – HEX color used for the arcs and points (default: `#0ea5e9`)

**Features:**
- Generates a dotted map SVG using `dotted-map`
- Animates path drawing with `framer-motion`
- Reacts to dark/light themes via `next-themes`
- Smooth pulsing indicators on origin/destination points

### WorldMapDemo

Complete marketing section using the world map component.

```tsx
import { WorldMapDemo } from "@/components/ui/world-map-demo";

<WorldMapDemo />
```

**Highlights:**
- Animated headline powered by `framer-motion`
- Multiple predefined routes to showcase connectivity
- Theme-aware colors and gradients

### Spotlight Variants

Two spotlight implementations are provided:

**1. Aceternity (Default):**
```tsx
import { Spotlight } from "@/components/ui/spotlight";
// or
import { Spotlight } from "@/components/ui/aceternity/spotlight";
```

**2. Ibelick (Interactive):**
```tsx
import { Spotlight } from "@/components/ui/ibelick/spotlight";
```

To switch the default spotlight, edit `/components/ui/spotlight.tsx`:
```tsx
// Current (Aceternity)
export { Spotlight } from "./aceternity/spotlight";

// To use Ibelick instead
export { Spotlight } from "./ibelick/spotlight";
```

## 🛠️ Setup from Scratch

If you're starting a new project, here's how to set it up:

### 1. Initialize Next.js with TypeScript

```bash
npx create-next-app@latest my-spline-app --typescript --tailwind --app --no-src-dir
cd my-spline-app
```

When prompted:
- ✅ TypeScript
- ✅ ESLint
- ✅ Tailwind CSS
- ✅ App Router
- ❌ src/ directory
- ✅ Customize default import alias (@/*)

### 2. Install shadcn/ui

```bash
npx shadcn-ui@latest init
```

Configuration options:
- Style: Default
- Base color: Slate (or your preference)
- CSS variables: Yes

### 3. Install Required Components

```bash
# Install Card component
npx shadcn-ui@latest add card
```

### 4. Install Required Dependencies

```bash
npm install @splinetool/react-spline @splinetool/runtime framer-motion dotted-map next-themes
```

### 5. Add Components

Copy the components from this project:
- `/components/ui/splite.tsx`
- `/components/ui/demo.tsx`
- `/components/ui/world-map.tsx`
- `/components/ui/world-map-demo.tsx`
- `/components/ui/aceternity/spotlight.tsx`
- `/components/ui/ibelick/spotlight.tsx`
- `/components/ui/spotlight.tsx`
- `/components/theme-provider.tsx`

### 6. Update Tailwind Config

Add the spotlight animation to your `tailwind.config.ts`:

```typescript
keyframes: {
  spotlight: {
    "0%": {
      opacity: "0",
      transform: "translate(-72%, -62%) scale(0.5)",
    },
    "100%": {
      opacity: "1",
      transform: "translate(-50%,-40%) scale(1)",
    },
  },
},
animation: {
  spotlight: "spotlight 2s ease .75s 1 forwards",
},
```

### 7. Add Loader Styles

Add to your `globals.css`:

```css
@layer components {
  .loader {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }

  @keyframes rotation {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
```

### 8. Wire Up Theme Provider

Update your root layout (e.g., `/app/layout.tsx`) to include the theme provider:

```tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 🎨 Customization

### Using Your Own Spline Scene

1. Create a scene at [spline.design](https://spline.design)
2. Export and get the scene URL
3. Replace the scene URL in your component:

```tsx
<SplineScene 
  scene="https://prod.spline.design/YOUR_SCENE_ID/scene.splinecode"
/>
```

### Styling

All components use Tailwind CSS and can be customized via className:

```tsx
<SplineScene 
  scene="..."
  className="w-screen h-screen rounded-xl"
/>
```

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🔧 Troubleshooting

### Spline Not Loading

- Check your scene URL is correct
- Ensure you have internet connection (Spline CDN)
- Check browser console for errors

### TypeScript Errors

- Run `npm install` to ensure all types are installed
- Check `tsconfig.json` paths are correct

### Tailwind Classes Not Working

- Verify `tailwind.config.ts` content paths include your files
- Check `globals.css` has Tailwind directives
- Restart development server

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Spline Documentation](https://docs.spline.design)
- [Framer Motion Documentation](https://www.framer.com/motion)

## 🎓 Learn More

- **shadcn/ui components**: Browse at [ui.shadcn.com](https://ui.shadcn.com)
- **Spline tutorials**: Visit [spline.design/tutorials](https://spline.design/tutorials)
- **Aceternity UI**: Check out [ui.aceternity.com](https://ui.aceternity.com)

## 📄 License

This project structure and integration pattern is free to use for any purpose.
