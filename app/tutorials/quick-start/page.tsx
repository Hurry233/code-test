"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";

const steps = [
  {
    title: "创建账户",
    description: "访问平台官网注册您的账户，完成邮箱验证后即可开始使用。",
    code: "# 仅需3步完成注册\n1. 访问 www.example.com\n2. 点击注册\n3. 完成邮箱验证",
  },
  {
    title: "获取API密钥",
    description: "在账户设置中生成您的API密钥，用于API调用的身份验证。",
    code: "# 保存您的API密钥\napi_key = 'sk-xxxxx'\napi_secret = 'sk-xxxxx'",
  },
  {
    title: "安装SDK",
    description: "根据您的编程语言选择相应的SDK进行安装。",
    code: "# Python SDK\npip install ai-sdk\n\n# Node.js SDK\nnpm install ai-sdk",
  },
  {
    title: "发起第一个请求",
    description: "使用SDK发起您的第一个API请求，测试连接是否正常。",
    code: "from ai_sdk import Client\n\nclient = Client(api_key='your-key')\nresponse = client.chat.create(\n  messages=[{'role': 'user', 'content': 'Hello!'}]\n)",
  },
];

export default function QuickStartPage() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden pt-24">
        {/* Hero */}
        <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              返回教程列表
            </Link>
            <div className="mx-auto max-w-4xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              >
                5分钟快速入门
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                按照以下步骤，您可以在5分钟内完成账户设置并发起第一个API请求。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="grid gap-8 md:grid-cols-2 items-start"
                >
                  <div>
                    <div className="flex items-start gap-4">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-foreground mb-2">
                          {step.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Card className="p-6 bg-muted/20 border-border/40">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{step.code}</code>
                    </pre>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                下一步
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                完成快速入门后，建议您查看API文档和最佳实践指南。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/tutorials/api-guide">
                    查看API文档
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tutorials/best-practices">
                    最佳实践
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
