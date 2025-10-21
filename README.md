# Nova AI — 极简 OpenAI 风格企业网站

一个模仿 openai.com 首页风格的极简 AI 企业官网，注重可扩展性、丰富交互与响应式体验。纯静态实现（HTML/CSS/JS），无需构建步骤即可运行。

- 极简设计：深色主题、大字号排版、留白与细腻边界/阴影
- 丰富交互：滚动出现、磁吸按钮、卡片倾斜、搜索快捷键（⌘/Ctrl + K）
- 完全响应式：移动、平板、桌面良好适配
- 可扩展：清晰的样式/脚本/资产目录，组件化样式与实用工具类

## 结构

```
.
├── index.html            # 首页
├── styles/
│   ├── base.css          # 变量、基础样式、布局与通用组件
│   ├── components.css    # 组件与分区样式（卡片、横幅、页脚等）
│   └── utilities.css     # 工具类（布局小工具、显示隐藏等）
├── scripts/
│   └── app.js            # 交互脚本（滚动出现、倾斜、磁吸、搜索等）
└── assets/
    └── logo.svg          # 站点 Logo（用于 favicon 与品牌）
```

## 本地运行

无需依赖，直接用任意静态服务器打开即可，例如：

- Python 3: `python3 -m http.server 8000`
- Node (npx): `npx serve .`
- 或直接把 `index.html` 拖到浏览器

访问 http://localhost:8000

## 可定制项

- 品牌与文案：修改 `index.html` 中品牌名、导航与各区文案
- 色彩与风格：在 `styles/base.css` 的 `:root` 中调整色板与圆角、阴影
- 交互细节：在 `scripts/app.js` 中增改交互（例如添加更多动画或模块化拆分）

## 无障碍与体验

- 提供 Skip Link，键盘可访问
- 支持 `prefers-reduced-motion`，在低动效偏好时降级动画
- 对话框使用 `<dialog>`，提供 ESC 关闭、快捷键 ⌘/Ctrl + K 打开

## 许可

本模板可自由用于学习、演示与业务快速起步。品牌、图片与第三方商标请替换为您自己的资源。
