# 批量更新页面指南

## 需要更新的页面

以下页面需要替换导航栏和添加页脚：

### 产品页面
- [ ] `/app/products/api-gateway/page.tsx`
- [x] `/app/products/mirror/page.tsx` ✅ 已完成
- [ ] `/app/products/mirror-system/page.tsx`
- [ ] `/app/products/recharge/page.tsx`
- [ ] `/app/products/page.tsx`

### 服务页面
- [ ] `/app/services/fine-tuning/page.tsx`
- [ ] `/app/services/knowledge-base/page.tsx`
- [ ] `/app/services/workflow/page.tsx`

### 其他页面
- [ ] `/app/about/page.tsx`
- [ ] `/app/blog/page.tsx`
- [ ] `/app/contact/page.tsx`

## 更新步骤

对每个页面执行以下操作：

### 1. 替换导入语句

**旧代码**:
```tsx
import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
```

**新代码**:
```tsx
import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
```

### 2. 替换导航栏组件

**旧代码**:
```tsx
<SimplifiedNavbar />
```

**新代码**:
```tsx
<Navbar />
```

### 3. 添加padding-top

因为新导航栏是固定定位，需要给main容器添加padding-top：

**旧代码**:
```tsx
<main className="min-h-screen bg-background pb-32">
```

**新代码**:
```tsx
<main className="min-h-screen bg-background pt-24 pb-32">
```

### 4. 添加页脚

在`</main>`之后，`</>`之前添加：

```tsx
      </main>
      <SiteFooter />
    </>
```

## 完整示例

### 修改前
```tsx
import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";

export default function Page() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pb-32">
        {/* 内容 */}
        <CTASection />
      </main>
    </>
  );
}
```

### 修改后
```tsx
import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { CTASection } from "@/components/ui/cta-section";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* 内容 */}
        <CTASection />
      </main>
      <SiteFooter />
    </>
  );
}
```

## 批量替换命令（仅供参考）

```bash
# 在项目根目录执行
find app -name "page.tsx" -type f -exec sed -i 's/SimplifiedNavbar/Navbar/g' {} \;
```

**注意**: 手动更新更安全，可以确保每个文件的修改正确。

## 验证清单

更新每个页面后，检查：

- [ ] 导入语句正确
- [ ] Navbar组件已替换
- [ ] SiteFooter已添加
- [ ] main标签有pt-24类
- [ ] 页面能正常构建
- [ ] 导航菜单工作正常
- [ ] 页脚显示正常
- [ ] 响应式布局正常

## 构建测试

更新所有页面后运行：

```bash
npm run build
```

确保没有TypeScript错误或构建失败。
