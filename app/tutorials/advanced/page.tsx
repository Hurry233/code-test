"use client";

import { Navbar } from "@/components/ui/navbar";
import { SiteFooter } from "@/components/ui/site-footer";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";

const advancedTopics = [
  {
    title: "模型微调",
    description: "使用您的专有数据微调模型以获得更好的性能",
  },
  {
    title: "向量嵌入和语义搜索",
    description: "利用嵌入向量实现高级搜索和推荐功能",
  },
  {
    title: "多模态处理",
    description: "处理文本、图像、音频等多种数据类型",
  },
  {
    title: "实时流处理",
    description: "构建实时流式处理应用",
  },
  {
    title: "知识库构建",
    description: "建立和管理企业知识库系统",
  },
  {
    title: "Agent系统",
    description: "构建自主Agent系统完成复杂任务",
  },
];

export default function AdvancedPage() {
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
                高级功能指南
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="mt-6 text-lg sm:text-xl text-muted-foreground leading-relaxed"
              >
                探索AI大模型服务的高级功能和自定义配置选项。
              </motion.p>
            </div>
          </div>
        </section>

        {/* Advanced Topics */}
        <section className="py-24 sm:py-32">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedTopics.map((topic, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="h-full p-8 bg-card/60 border-border/60">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {topic.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Deep Dive */}
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
                模型微调深入指南
              </motion.h2>

              <div className="space-y-6">
                {/* Fine-tuning Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">微调流程</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`# 准备训练数据
training_data = [
  {
    "messages": [
      {"role": "user", "content": "..."},
      {"role": "assistant", "content": "..."}
    ]
  },
  ...
]

# 创建微调任务
job = client.fine_tuning.create(
  model="gpt-4",
  training_data=training_data,
  epochs=3,
  learning_rate=0.0001
)

# 监控微调进度
status = client.fine_tuning.retrieve(job.id)
print(f"Status: {status.status}")`}</code>
                    </pre>
                  </Card>
                </motion.div>

                {/* Prompt Engineering */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">高级提示工程</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`# Few-shot学习示例
prompt = """
示例1:
Q: 如何优化API调用?
A: 使用连接池和缓存...

示例2:
Q: 如何处理错误?
A: 实现重试机制...

Q: 如何保证安全性?
A: """

response = client.chat.create(
  model="gpt-4",
  messages=[{"role": "user", "content": prompt}]
)`}</code>
                    </pre>
                  </Card>
                </motion.div>

                {/* RAG Implementation */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <h4 className="text-lg font-semibold text-foreground mb-3">检索增强生成 (RAG)</h4>
                  <Card className="p-6 bg-card/60 border-border/60">
                    <pre className="text-sm text-muted-foreground overflow-x-auto">
                      <code>{`# 构建RAG系统
def rag_query(question):
  # 1. 将问题转换为向量
  question_embedding = client.embeddings.create(
    input=question,
    model="text-embedding-3"
  )
  
  # 2. 从知识库检索相关文档
  relevant_docs = vector_db.search(
    question_embedding,
    top_k=3
  )
  
  # 3. 用检索文档增强提示
  context = "\\n".join([doc.content for doc in relevant_docs])
  prompt = f"基于以下信息回答问题:\\n{context}\\n\\n问题:{question}"
  
  # 4. 生成回答
  response = client.chat.create(
    model="gpt-4",
    messages=[{"role": "user", "content": prompt}]
  )
  
  return response`}</code>
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
                需要技术支持？
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                我们的技术团队随时准备为您提供帮助。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/contact">
                    联系技术支持
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
