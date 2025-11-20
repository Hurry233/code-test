"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const endpoints = [
  {
    method: "POST",
    path: "/v1/chat/completions",
    description: "创建文本生成请求",
    params: ["model", "messages", "max_tokens", "temperature"],
  },
  {
    method: "POST",
    path: "/v1/images/generations",
    description: "生成图像",
    params: ["prompt", "n", "size", "quality"],
  },
  {
    method: "POST",
    path: "/v1/embeddings",
    description: "获取文本嵌入向量",
    params: ["input", "model", "encoding_format"],
  },
  {
    method: "GET",
    path: "/v1/models",
    description: "获取可用模型列表",
    params: ["limit", "offset"],
  },
];

export default function ApiGuidePage() {
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
                API参考文档
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                完整的API接口文档和参数说明。
              </motion.p>
            </div>
          </div>
        </section>

        {/* API Endpoints */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl space-y-6">
              {endpoints.map((endpoint, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="p-6 bg-card/60 border-border/60">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          endpoint.method === 'POST' 
                            ? 'bg-green-500/20 text-green-700 dark:text-green-400'
                            : 'bg-blue-500/20 text-blue-700 dark:text-blue-400'
                        }`}>
                          {endpoint.method}
                        </span>
                        <code className="text-sm font-mono text-foreground">
                          {endpoint.path}
                        </code>
                      </div>
                    </div>
                    <p className="text-muted-foreground mb-4">{endpoint.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">参数：</p>
                      <div className="flex flex-wrap gap-2">
                        {endpoint.params.map((param) => (
                          <span
                            key={param}
                            className="px-2 py-1 rounded text-xs bg-muted/50 text-muted-foreground"
                          >
                            {param}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Auth Section */}
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
                身份验证
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="space-y-4"
              >
                <p className="text-muted-foreground">
                  所有API请求都需要在请求头中包含您的API密钥：
                </p>
                <Card className="p-6 bg-card/60 border-border/60">
                  <pre className="text-sm text-muted-foreground overflow-x-auto">
                    <code>{`Authorization: Bearer sk-your-api-key
Content-Type: application/json`}</code>
                  </pre>
                </Card>
                <p className="text-muted-foreground">
                  不要将您的API密钥公开共享。如果密钥泄露，请立即在账户设置中重新生成。
                </p>
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
                继续学习
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/tutorials/integration">
                    集成教程
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
