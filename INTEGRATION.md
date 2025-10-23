# WorldMap Component Integration Guide

This guide explains how the WorldMap component was integrated into the existing project and how to use it.

## ✅ Integration Summary

The WorldMap component has been successfully integrated into the existing Next.js + shadcn/ui project. Here's what was added:

### New Dependencies Installed

```bash
npm install dotted-map next-themes
```

- **`dotted-map`** - Generates the dotted SVG world map
- **`next-themes`** - Manages dark/light theme switching

### New Files Created

1. **`/components/ui/world-map.tsx`** - Main WorldMap component
2. **`/components/ui/world-map-demo.tsx`** - Demo implementation
3. **`/components/theme-provider.tsx`** - Theme provider wrapper

### Modified Files

1. **`/app/layout.tsx`** - Added ThemeProvider wrapper
2. **`/app/page.tsx`** - Added WorldMapDemo to homepage
3. **`/components/ui/index.ts`** - Exported new components
4. **`/package.json`** - Added new dependencies

## 🎯 Quick Start

### Basic Usage

```tsx
import { WorldMap } from "@/components/ui/world-map";

export function MyMap() {
  return (
    <WorldMap
      dots={[
        {
          start: { lat: 40.7128, lng: -74.0060 }, // New York
          end: { lat: 51.5074, lng: -0.1278 },    // London
        },
      ]}
    />
  );
}
```

### With Custom Colors

```tsx
<WorldMap
  lineColor="#22d3ee" // Cyan color
  dots={[
    {
      start: { lat: 37.7749, lng: -122.4194 },
      end: { lat: 35.6762, lng: 139.6503 },
    },
  ]}
/>
```

### Using the Demo Component

```tsx
import { WorldMapDemo } from "@/components/ui/world-map-demo";

export function MyPage() {
  return (
    <section>
      <WorldMapDemo />
    </section>
  );
}
```

## 🎨 Customization

### Change Line Colors

```tsx
<WorldMap
  lineColor="#ff6b6b" // Red
  dots={yourConnections}
/>
```

### Add More Connections

```tsx
const connections = [
  {
    start: { lat: 51.5074, lng: -0.1278 },  // London
    end: { lat: 48.8566, lng: 2.3522 },     // Paris
  },
  {
    start: { lat: 48.8566, lng: 2.3522 },   // Paris
    end: { lat: 41.9028, lng: 12.4964 },    // Rome
  },
  {
    start: { lat: 41.9028, lng: 12.4964 },  // Rome
    end: { lat: 40.4168, lng: -3.7038 },    // Madrid
  },
];

<WorldMap dots={connections} />;
```

### Styling the Container

```tsx
<div className="max-w-6xl mx-auto p-8 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
  <WorldMap dots={connections} />
</div>
```

## 🌓 Theme Support

The WorldMap component automatically adapts to your site's theme:

### Dark Mode
- Background: Black
- Dots: White with transparency (#FFFFFF40)
- Lines: Your specified color (default: cyan)

### Light Mode
- Background: White
- Dots: Black with transparency (#00000040)
- Lines: Your specified color (default: cyan)

### Theme Provider Setup

Make sure your root layout includes the ThemeProvider:

```tsx
// app/layout.tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
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

### Add a Theme Toggle (Optional)

```tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-800"
    >
      {theme === "dark" ? "🌞" : "🌙"}
    </button>
  );
}
```

## 📊 Finding Coordinates

To add your own locations, you need latitude and longitude coordinates:

### Online Tools
- [LatLong.net](https://www.latlong.net/) - Search by city name
- [Google Maps](https://www.google.com/maps) - Right-click on map → "What's here?"

### Major Cities

```tsx
const majorCities = {
  newYork: { lat: 40.7128, lng: -74.0060 },
  london: { lat: 51.5074, lng: -0.1278 },
  tokyo: { lat: 35.6762, lng: 139.6503 },
  paris: { lat: 48.8566, lng: 2.3522 },
  sydney: { lat: -33.8688, lng: 151.2093 },
  dubai: { lat: 25.2048, lng: 55.2708 },
  singapore: { lat: 1.3521, lng: 103.8198 },
  sanFrancisco: { lat: 37.7749, lng: -122.4194 },
  berlin: { lat: 52.5200, lng: 13.4050 },
  mumbai: { lat: 19.0760, lng: 72.8777 },
};
```

## 🎬 Animation Customization

The component uses Framer Motion for animations. To customize:

### Sequential Animation Timing

By default, paths animate with a 0.5s delay between each. To modify, edit `world-map.tsx`:

```tsx
transition={{
  duration: 1,
  delay: 0.5 * i, // Change 0.5 to adjust delay
  ease: "easeOut",
}}
```

### Faster Animation

```tsx
transition={{
  duration: 0.5,  // Shorter duration
  delay: 0.2 * i, // Shorter delay
  ease: "easeInOut",
}}
```

### Simultaneous Animation

```tsx
transition={{
  duration: 1,
  delay: 0, // No delay = all at once
  ease: "easeOut",
}}
```

## 🔧 Troubleshooting

### Map Not Showing

**Issue:** Component renders but map is blank

**Solutions:**
- ✅ Check that `dotted-map` is installed: `npm install dotted-map`
- ✅ Ensure component has width/height (aspect-[2/1] is applied by default)
- ✅ Verify ThemeProvider is properly set up

### Theme Not Working

**Issue:** Map doesn't change with theme

**Solutions:**
- ✅ Add `suppressHydrationWarning` to `<html>` tag
- ✅ Ensure `attribute="class"` on ThemeProvider
- ✅ Add `darkMode: ["class"]` to `tailwind.config.ts`

### Lines Not Appearing

**Issue:** Dots show but no connecting lines

**Solutions:**
- ✅ Verify `dots` prop is an array with start/end objects
- ✅ Check latitude/longitude values are valid (-90 to 90, -180 to 180)
- ✅ Inspect browser console for errors

### Gradient ID Conflicts

**Issue:** Multiple maps on same page show incorrect gradients

**Solution:**
The component uses `useId()` to generate unique IDs automatically. This should work out of the box. If issues persist, check for duplicate gradient IDs in your console.

## 💡 Use Cases

### SaaS Landing Page

```tsx
<section className="py-20 bg-black text-white">
  <div className="max-w-7xl mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold">Global Infrastructure</h2>
    <p className="text-gray-400 mt-4">
      Serving customers in over 50 countries worldwide
    </p>
  </div>
  <WorldMap
    lineColor="#3b82f6"
    dots={globalDataCenters}
  />
</section>
```

### Logistics Company

```tsx
<WorldMap
  lineColor="#10b981" // Green for shipping routes
  dots={shippingRoutes}
/>
```

### Remote Team

```tsx
<WorldMap
  lineColor="#8b5cf6" // Purple for team connections
  dots={teamLocations}
/>
```

## 📦 Component Props Reference

### WorldMap

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `dots` | `Array<Connection>` | `[]` | Array of location connections |
| `lineColor` | `string` | `"#0ea5e9"` | Hex color for lines and points |

### Connection Object

```typescript
interface Connection {
  start: {
    lat: number;     // -90 to 90
    lng: number;     // -180 to 180
    label?: string;  // Optional label (not rendered yet)
  };
  end: {
    lat: number;
    lng: number;
    label?: string;
  };
}
```

## 🚀 Performance Tips

1. **Limit Connections**: Too many lines can impact performance
   - Recommended: 5-15 connections
   - Maximum: 30 connections

2. **Optimize Renders**: Use `useMemo` for static data
   ```tsx
   const connections = useMemo(() => [...], []);
   ```

3. **Code Splitting**: For large pages, lazy load the component
   ```tsx
   const WorldMap = dynamic(() => import("@/components/ui/world-map").then(m => ({ default: m.WorldMap })));
   ```

4. **Responsive Display**: Consider hiding on mobile for performance
   ```tsx
   <div className="hidden md:block">
     <WorldMap dots={connections} />
   </div>
   ```

## 📚 Further Reading

- [dotted-map Documentation](https://github.com/IonicaBizau/dotted-map)
- [Framer Motion Animation Guide](https://www.framer.com/motion/)
- [next-themes Documentation](https://github.com/pacocoursey/next-themes)
- [Latitude/Longitude Basics](https://en.wikipedia.org/wiki/Geographic_coordinate_system)

## 🤝 Contributing

To add features to the WorldMap component:

1. Edit `/components/ui/world-map.tsx`
2. Test in both light and dark modes
3. Update this documentation
4. Update `/COMPONENTS.md` with API changes

## 📝 License

This component and integration guide are free to use in any project.
