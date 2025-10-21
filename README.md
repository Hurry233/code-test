# AI 企业网站（React 和 Vue）

一个使用 React 与 Vue 两种技术栈分别实现的极简 AI 企业网站（模仿 openai.com 首页风格）。

- 极简设计风格，专注留白与排版
- 响应式布局，移动端优先
- 细腻交互与动画（滚动出现、悬浮、磁性按钮、光斑背景）
- 组件化、可扩展的结构

仓库采用 Monorepo：
- `apps/react-app` 使用 React + Vite
- `apps/vue-app` 使用 Vue 3 + Vite

## 开发

1. 安装依赖（使用 npm 的 workspace）：

```bash
npm install
```

2. 启动 React 版本：

```bash
npm run dev:react
```

3. 启动 Vue 版本：

```bash
npm run dev:vue
```

## 构建

```bash
npm run build
```

分别也可预览：

```bash
npm run preview:react
npm run preview:vue
```

## 目录结构

```
apps/
  react-app/
    index.html
    vite.config.js
    src/
      main.jsx
      App.jsx
      components/
      styles/
  vue-app/
    index.html
    vite.config.js
    src/
      main.js
      App.vue
      components/
      styles/
```

## 自定义
- 站点文案、导航、功能点均集中在各自应用的 `src/config/site.js` 中，便于扩展。
- 样式采用 CSS 变量与原子化工具类思路，易于主题扩展。

## 许可
MIT
