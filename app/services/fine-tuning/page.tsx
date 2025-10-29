import { SimplifiedNavbar } from "@/components/ui/simplified-navbar";
import { CTASection } from "@/components/ui/cta-section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Settings2, Cpu } from "lucide-react";

const highlights = [
  "支持 GPT-4、Claude、Llama 等多模型微调与指令优化",
  "提供数据清洗、标注、增强全流程服务",
  "结合企业知识库与领域语料，实现专属语言风格与知识沉淀",
  "可选私有化部署或托管运行，满足数据安全要求",
  "专业团队提供多轮调试、评估与上线保障",
];

export default function FineTuningServicePage() {
  return (
    <>
      <SimplifiedNavbar />
      <main className="min-h-screen bg-background pt-24 pb-32">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
          <div className="container relative mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6">
                <Badge className="w-fit bg-primary/10 text-primary">定制服务 · 模型微调</Badge>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                  为业务场景量身打造的专属大模型
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  我们提供从数据准备到上线监控的一站式模型微调服务，帮助企业打造高准确度、高安全性的专属 AI 助手与业务模型。
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2">
                    预约技术评估
                    <Settings2 className="h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    下载服务手册
                    <Cpu className="h-4 w-4" />
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
                    <p className="text-sm font-semibold">交付流程</p>
                    <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                      <li>业务场景调研与目标设定</li>
                      <li>数据采集、清洗与标注</li>
                      <li>模型微调与多轮评估</li>
                      <li>上线部署与监控反馈</li>
                    </ol>
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
