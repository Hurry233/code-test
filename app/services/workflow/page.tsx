import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Workflow, Wand2 } from "lucide-react";

const highlights = [
  "梳理业务场景，定制 AI 创作与审核流程",
  "支持图文生成、脚本撰写、视频分镜、社交媒体排期等场景",
  "结合企业知识库与品牌语调，保障内容一致性",
  "可视化流程编排，自动化触发与协同审批",
  "提供运营指南与培训，确保团队快速上手",
];

export default function WorkflowServicePage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">定制服务 · 创作工作流</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  搭建属于您的 AI 创作流水线
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们从策略、流程、工具三个维度入手，帮助企业构建高效的 AI 创作体系，覆盖内容规划、创作、审核、分发全流程。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    预约方案顾问
                    <Workflow className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    获取成功案例
                    <Wand2 className="h-4 w-4" />
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
                    <p className="text-sm font-semibold">交付成果</p>
                    <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
                      <li>定制化工作流图与 SOP 文档</li>
                      <li>企业专属创作模板与指令集</li>
                      <li>AI 运营手册与培训课程</li>
                      <li>上线后 30 天跟进与优化</li>
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
