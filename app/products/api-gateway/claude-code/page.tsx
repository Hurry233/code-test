import Link from "next/link";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Code2,
  Download,
  ListChecks,
  Plug,
  Settings2,
  ShieldCheck,
  Terminal,
} from "lucide-react";

const steps = [
  {
    title: "安装 Claude Code 插件",
    description:
      "在 VS Code、Cursor 或 Continue 中打开扩展市场，搜索 “Claude Code” 并完成安装。无需额外代理设置。",
    icon: Download,
    commands: [
      {
        label: "VS Code",
        code: "Extensions → 搜索 Claude Code → Install",
      },
      {
        label: "Cursor",
        code: "Cmd/Ctrl + Shift + P → Install Extension → Claude Code",
      },
    ],
  },
  {
    title: "配置 API 网关地址",
    description:
      "在插件的设置面板中，将默认的 Anthropic 端点替换为 XYAI 提供的统一网关地址，并保存。",
    icon: Plug,
    commands: [
      {
        label: "Base URL",
        code: "https://api.your-gateway.com/anthropic/v1",
      },
      {
        label: "Model",
        code: "claude-3.5-sonnet",
      },
    ],
  },
  {
    title: "创建并绑定 API Key",
    description:
      "在 XYAI 控制台生成专属密钥，复制后粘贴到插件的 API Key 输入框，同时勾选保存到安全存储。",
    icon: ShieldCheck,
    commands: [
      {
        label: "Key",
        code: "xyai-sk-live-xxxxxxxxxxxxxxxx",
      },
      {
        label: "Dashboard",
        code: "控制台 → API 访问 → 新建密钥",
      },
    ],
  },
  {
    title: "验证连接并开始使用",
    description:
      "打开任意文件，使用 Chat 面板发送 “请帮我解释这段代码”，确认 Claude Code 已成功响应。",
    icon: Terminal,
    commands: [
      {
        label: "快捷命令",
        code: "Cmd/Ctrl + Shift + I → Chat with Claude",
      },
      {
        label: "示例提示",
        code: "请优化这段 TypeScript 代码的性能",
      },
    ],
  },
];

const customisations = [
  {
    title: "切换模型与推理策略",
    description:
      "在设置中自定义默认模型、推理温度、最大 Token 等参数，按场景切换 Claude 3.5 / GPT-4o。",
    icon: Settings2,
  },
  {
    title: "自定义企业 API",
    description:
      "基于 XYAI 网关创建企业级路由策略，覆盖调用限流、白名单校验与成本中心统计。",
    icon: ListChecks,
  },
  {
    title: "安全与日志留痕",
    description:
      "与网关实时日志打通，记录操作人、请求耗时、Token 消耗等信息，支持导出审计。",
    icon: ShieldCheck,
  },
];

export default function ClaudeCodeGuidePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        {/* Hero */}
        <section className="relative overflow-hidden py-16 sm:py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-violet-500/10 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="space-y-6 max-w-3xl">
              <Badge className="w-fit bg-violet-500/10 text-violet-600">
                Claude Code 接入手册
              </Badge>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                从安装到自定义 API：Claude Code 一站式配置流程
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                按照下面 4 个步骤，5 分钟内即可在本地开发环境中启用 Claude Code 插件。我们提供统一的网关地址与密钥管理，让模型能力稳定、低延迟地服务于你的编码工作流。
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                  <Link href="/products/api-gateway">
                    返回 API 网关 <ArrowLeft className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-violet-200">
                  <Link href="#customize">
                    跳转到自定义 API 指南
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold">4 个步骤完成接入</h2>
              <p className="text-muted-foreground">
                适用于 VS Code、Cursor、Continue 等主流 IDE，流程统一且可复制到团队成员。
              </p>
            </div>
            <div className="space-y-10">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <Card
                    key={step.title}
                    className="border border-border/60 bg-background/80 p-8 lg:p-10"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-violet-600" />
                        </div>
                        <div className="space-y-2">
                          <div className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600">
                            STEP {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {step.title}
                          </h3>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className="w-full lg:w-72 space-y-2">
                        {step.commands.map((cmd) => (
                          <div
                            key={cmd.label}
                            className="rounded-lg border border-violet-500/20 bg-violet-500/5 p-3"
                          >
                            <div className="text-xs font-semibold uppercase text-violet-600 tracking-wide">
                              {cmd.label}
                            </div>
                            <code className="mt-2 block text-sm text-foreground">
                              {cmd.code}
                            </code>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Customization */}
        <section id="customize" className="py-16 sm:py-24 bg-muted/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <Badge className="w-fit mx-auto bg-primary/10 text-primary">企业级自定义</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">自定义 API 接入与团队治理</h2>
              <p className="text-muted-foreground">
                完成基础配置后，你可以根据团队需要扩展更多能力，提升安全性与协作效率。
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {customisations.map((item) => {
                const Icon = item.icon;
                return (
                  <Card
                    key={item.title}
                    className="border border-border/60 bg-background/80 p-6 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <div className="container mx-auto px-4">
            <Card className="border border-violet-200/50 bg-gradient-to-r from-violet-500/10 via-background to-background p-8 sm:p-12">
              <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    需要帮助？获得工程师 1 对 1 接入支持
                  </h2>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    无论你在团队内推广 Claude Code，还是希望统一管理调用策略，我们都可以提供插件配置、密钥管理、成本控制等全流程支持。
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700">
                    <Link href="/contact">
                      预约技术顾问 <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/products/api-gateway#pricing">
                      查看按量计费方案
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
