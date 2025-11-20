"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const deploymentSteps = [
  {
    title: "选择部署环境",
    description: "选择适合您的部署环境：云服务器、容器平台或本地服务器。",
  },
  {
    title: "安装依赖",
    description: "安装所需的系统依赖和开发工具。",
  },
  {
    title: "配置环境变量",
    description: "设置API密钥和其他必要的环境配置。",
  },
  {
    title: "启动服务",
    description: "启动服务并验证连接。",
  },
];

export default function DeploymentPage() {
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
                部署指南
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                学习如何在不同的环境中部署和配置AI大模型服务。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Deployment Steps */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-8">
              {deploymentSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex gap-6"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-semibold flex-shrink-0">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Docker Deployment */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold tracking-tight mb-6"
              >
                使用Docker部署
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                <Card className="p-6 bg-card/60 border-border/60">
                  <p className="text-sm font-semibold text-foreground mb-3">Dockerfile示例</p>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`FROM python:3.9
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["python", "app.py"]`}</code>
                  </pre>
                </Card>
                <Card className="p-6 bg-card/60 border-border/60">
                  <p className="text-sm font-semibold text-foreground mb-3">运行Docker容器</p>
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`docker build -t ai-service .
docker run -e API_KEY=your-key -p 8000:8000 ai-service`}</code>
                  </pre>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
                需要帮助？
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    联系支持
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tutorials/best-practices">
                    查看最佳实践
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
