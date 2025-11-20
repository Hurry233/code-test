"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const integrationExamples = [
  {
    platform: "Web应用",
    description: "将AI服务集成到React/Vue/Angular等Web框架",
  },
  {
    platform: "移动应用",
    description: "为iOS和Android应用添加AI功能",
  },
  {
    platform: "后端服务",
    description: "在Node.js、Python、Java等后端框架中使用",
  },
  {
    platform: "数据分析",
    description: "在Jupyter Notebook和数据科学工作流中集成",
  },
];

export default function IntegrationPage() {
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
                集成教程
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                学习如何将AI大模型服务集成到您的应用和工作流中。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Integration Platforms */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
              {integrationExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full p-8 bg-card/60 border-border/60 hover:shadow-lg transition-shadow">
                    <h3 className="text-2xl font-semibold text-foreground mb-3">
                      {example.platform}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {example.description}
                    </p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#integration-code">
                        查看代码示例
                      </Link>
                    </Button>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code Examples */}
        <section id="integration-code" className="py-24 sm:py-32 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-bold tracking-tight mb-8"
              >
                代码示例
              </motion.h2>

              <div className="space-y-8">
                {/* React Example */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">React集成</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`import { useChat } from 'ai/react'

export function ChatComponent() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()
  
  return (
    <div>
      {messages.map((m) => (
        <div key={m.id}>{m.content}</div>
      ))}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleInputChange} />
        <button type="submit">发送</button>
      </form>
    </div>
  )
}`}</code>
                    </pre>
                  </Card>
                </motion.div>

                {/* Python Example */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">Python集成</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`from ai_sdk import Client

client = Client(api_key='your-key')

response = client.chat.create(
  model='gpt-4',
  messages=[
    {'role': 'user', 'content': 'Hello!'}
  ]
)

print(response.choices[0].message.content)`}</code>
                    </pre>
                  </Card>
                </motion.div>

                {/* Node.js Example */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">Node.js集成</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`const { Client } = require('ai-sdk')

const client = new Client({ apiKey: 'your-key' })

async function chat() {
  const response = await client.chat.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: 'Hello!' }]
  })
  
  console.log(response.choices[0].message.content)
}

chat()`}</code>
                    </pre>
                  </Card>
                </motion.div>
              </div>
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
                探索更多功能
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/tutorials/advanced">
                    高级功能
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/tutorials">
                    返回教程首页
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
