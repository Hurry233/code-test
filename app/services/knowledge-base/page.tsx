import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Database, BookOpen } from "lucide-react";

const highlights = [
  "梳理企业文档、规范、产品手册、FAQ 等知识资源",
  "搭建专属知识库，支持自然语言查询与智能检索",
  "结合大模型实现知识问答、流程推荐、智能客服等功能",
  "支持私有化部署与数据隔离，满足合规与安全要求",
  "提供管理后台，支持增量更新与版本控制",
];

export default function KnowledgeBaseServicePage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">定制服务 · 知识库搭建</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  让企业知识与大模型无缝融合
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们帮助企业梳理内部知识资产，构建智能知识库，让 AI 模型基于企业数据进行准确回答，提升内部协作效率与客户服务质量。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    咨询实施方案
                    <Database className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    查看案例演示
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="rounded-3xl border border-border/60 bg-card/50 p-8 shadow-xl backdrop-blur">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">服务内容</h2>
                    <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                      {highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <Check className="mt-1 h-4 w-4 text-primary" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 rounded-2xl bg-muted/50 p-5 space-y-3">
                    <p className="text-sm font-semibold">适用场景</p>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>内部知识查询与员工培训</li>
                      <li>智能客服与自动问答系统</li>
                      <li>产品手册与技术文档检索</li>
                      <li>企业规范与合规性自查</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
      </main>
    </>
  );
}
