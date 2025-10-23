# Bento Grid 组件集成文档

## 📦 组件概述

Bento Grid 是一个现代化的网格布局组件，用于展示产品特性和功能。它采用卡片式设计，支持悬停动画和交互效果。

## ✅ 已完成的集成

### 新增文件

1. **`/components/ui/bento-grid.tsx`** - Bento Grid 核心组件
   - `BentoGrid` - 网格容器组件
   - `BentoCard` - 单个卡片组件

2. **`/components/ui/bento-grid-demo.tsx`** - 演示实现
   - 包含 5 个特性卡片
   - 每个卡片都有自定义的背景效果

3. **`/components/ui/features-bento-section.tsx`** - Section 包装组件
   - 与整体网站风格协调
   - 集成了 framer-motion 动画
   - 响应式设计

### 修改文件

1. **`/app/page.tsx`** - 添加了 FeaturesBentoSection
2. **`/components/ui/index.ts`** - 导出新组件

## 🎨 设计特点

### 整体协调性

✅ **风格一致性**
- 使用与网站其他部分相同的色彩方案
- 采用统一的间距和字体大小
- 保持极简设计原则

✅ **动画效果**
- 使用 framer-motion 实现淡入动画
- 与其他 section 的动画保持一致
- viewport once: true 确保只播放一次

✅ **响应式布局**
- 在大屏幕上显示复杂的网格布局
- 在移动设备上自动调整为堆叠布局
- 使用 Tailwind 的响应式断点

### 卡片交互

**悬停效果**：
- 图标缩小到 75%
- 文字向上移动
- 显示 CTA 按钮
- 背景叠加层淡入

**视觉反馈**：
- 平滑的过渡动画（300ms）
- GPU 加速的变换
- 微妙的背景模糊效果

## 📐 布局结构

### 桌面布局（lg+）

```
┌─────────────────┬───────────────────────┬─────────────────┐
│                 │                       │                 │
│  Full text      │                       │  Calendar       │
│  search         │   Save your files     │                 │
│                 │   (主要特性)          ├─────────────────┤
├─────────────────┤                       │                 │
│                 │                       │                 │
│  Multilingual   │                       │  Notifications  │
│                 │                       │                 │
└─────────────────┴───────────────────────┴─────────────────┘
```

### 移动布局（< lg）

所有卡片自动堆叠为单列布局，每个卡片占满宽度。

## 🎯 特性卡片

### 1. Save your files
- **位置**: 中间大卡片（横跨 3 行）
- **图标**: FileTextIcon
- **颜色**: 主色调蓝色
- **描述**: 自动保存功能

### 2. Full text search
- **位置**: 左上（横跨 2 行）
- **图标**: InputIcon
- **颜色**: 蓝色
- **描述**: 全文搜索功能

### 3. Multilingual
- **位置**: 左下（1 行）
- **图标**: GlobeIcon
- **颜色**: 翡翠绿
- **描述**: 多语言支持

### 4. Calendar
- **位置**: 右上（1 行）
- **图标**: CalendarIcon
- **颜色**: 紫色
- **描述**: 日历过滤功能

### 5. Notifications
- **位置**: 右下（横跨 2 行）
- **图标**: BellIcon
- **颜色**: 琥珀色
- **描述**: 通知系统

## 🔧 自定义配置

### 修改特性内容

编辑 `/components/ui/bento-grid-demo.tsx` 中的 `features` 数组：

```tsx
const features = [
  {
    Icon: YourIcon,
    name: "Feature Name",
    description: "Feature description",
    href: "/your-link",
    cta: "Learn more",
    background: (
      <div className="absolute inset-0">
        <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
      </div>
    ),
    className: "lg:row-start-1 lg:row-end-2 lg:col-start-1 lg:col-end-2",
  },
];
```

### 修改网格布局

在 `/components/ui/bento-grid.tsx` 中修改 `BentoGrid` 组件：

```tsx
className={cn(
  "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
  // 修改行高、列数、间距
  className,
)}
```

### 自定义卡片样式

在 `BentoCard` 组件中修改：
- 背景色
- 阴影效果
- 边框样式
- 动画参数

## 💡 使用示例

### 基础用法

```tsx
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";
import { FileTextIcon } from "@radix-ui/react-icons";

<BentoGrid>
  <BentoCard
    name="Feature Name"
    description="Feature description"
    Icon={FileTextIcon}
    href="/link"
    cta="Learn more"
    background={<div>Custom Background</div>}
    className="lg:col-span-2"
  />
</BentoGrid>
```

### 集成到新页面

```tsx
import { FeaturesBentoSection } from "@/components/ui/features-bento-section";

export default function FeaturesPage() {
  return (
    <main>
      <FeaturesBentoSection />
    </main>
  );
}
```

### 创建自定义 Bento Section

```tsx
"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

export function CustomBentoSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <BentoGrid>
            {/* Your custom cards */}
          </BentoGrid>
        </motion.div>
      </div>
    </section>
  );
}
```

## 🎨 背景效果模式

### 1. 渐变圆圈
```tsx
background: (
  <div className="absolute inset-0">
    <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
    <div className="absolute bottom-10 left-10 h-24 w-24 rounded-full bg-primary/5 blur-2xl" />
  </div>
)
```

### 2. 网格图案
```tsx
background: (
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
  </div>
)
```

### 3. 渐变背景
```tsx
background: (
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
)
```

## 📱 响应式断点

```css
默认: < 1024px (移动端) - 单列堆叠
lg:   >= 1024px (桌面) - 3列网格布局
```

## ⚡ 性能优化

### 已实施
1. ✅ GPU 加速变换（transform-gpu）
2. ✅ will-change 属性（隐式）
3. ✅ 视口触发动画（whileInView）
4. ✅ 动画只播放一次（once: true）

### 建议
1. 避免在 background 中放置大型图片
2. 使用 SVG 替代位图图标
3. 限制卡片数量（建议 4-8 个）
4. 使用 CSS 变量进行主题定制

## 🔍 调试技巧

### 查看网格布局
在浏览器开发工具中启用 CSS Grid 调试器。

### 检查卡片位置
```tsx
className="lg:row-start-1 lg:row-end-3 lg:col-start-2 lg:col-end-3"
//        ↑ 起始行    ↑ 结束行    ↑ 起始列    ↑ 结束列
```

### 调整动画速度
修改 `transition-all duration-300` 中的持续时间（300ms）。

## 🌐 浏览器兼容性

- ✅ Chrome/Edge 88+
- ✅ Firefox 84+
- ✅ Safari 14+
- ✅ 现代移动浏览器

## 📚 相关资源

- [CSS Grid Layout MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Radix UI Icons](https://www.radix-ui.com/icons)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS Grid](https://tailwindcss.com/docs/grid-template-columns)

## 🤝 贡献指南

添加新特性卡片时：
1. 选择合适的 Radix UI 图标
2. 设计独特的背景效果
3. 编写清晰的描述文字
4. 配置合理的网格位置
5. 测试响应式布局
6. 确保深色模式兼容

## ✨ 最佳实践

1. **保持简洁** - 每个卡片的描述不超过 2 行
2. **统一风格** - 所有图标使用相同的大小和样式
3. **合理布局** - 重要特性使用更大的卡片
4. **性能第一** - 避免复杂的背景动画
5. **响应式优先** - 在移动设备上测试布局
6. **无障碍访问** - 确保所有链接可键盘访问

## 📄 许可证

MIT License - 自由使用和修改
