"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, CheckCircle } from "lucide-react";

const practices = [
  {
    title: "优化API调用",
    tips: [
      "使用连接池减少网络开销",
      "启用请求缓存避免重复调用",
      "合理设置超时时间",
      "实现指数退避重试策略",
    ],
  },
  {
    title: "成本优化",
    tips: [
      "选择合适的模型和参数",
      "使用批量处理接口",
      "监控使用量和成本",
      "设置合理的配额限制",
    ],
  },
  {
    title: "安全性最佳实践",
    tips: [
      "定期轮换API密钥",
      "使用HTTPS加密传输",
      "实现请求签名验证",
      "审计API使用日志",
    ],
  },
  {
    title: "可靠性保障",
    tips: [
      "实现错误处理和日志记录",
      "使用多区域备份",
      "设置监控和告警",
      "定期进行压力测试",
    ],
  },
];

export default function BestPracticesPage() {
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
                最佳实践指南
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                行业专家总结的最佳实践和优化建议，帮助您充分利用AI大模型服务。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Practices Grid */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
              {practices.map((practice, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full p-8 bg-card/60 border-border/60">
                    <h3 className="text-2xl font-semibold text-foreground mb-6">
                      {practice.title}
                    </h3>
                    <ul className="space-y-3">
                      {practice.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex gap-3 items-start">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Tips */}
        <section className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold tracking-tight mb-8"
              >
                性能优化建议
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">请求优化</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`# 使用流式响应减少延迟
response = client.chat.create(
  messages=[...],
  stream=True  # 启用流式响应
)

# 使用并发请求提高吞吐量
tasks = [
  client.chat.create(messages=msg) 
  for msg in messages_list
]
results = await asyncio.gather(*tasks)`}</code>
                    </pre>
                  </Card>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">缓存策略</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`# 缓存相同的请求结果
cache = {}

def get_response(query):
    if query in cache:
        return cache[query]
    
    response = client.chat.create(
      messages=[{'role': 'user', 'content': query}]
    )
    cache[query] = response
    return response`}</code>
                    </pre>
                  </Card>
                </div>
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
                  <Link href="/tutorials/advanced">
                    高级功能
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
