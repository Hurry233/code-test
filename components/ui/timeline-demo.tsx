"use client";

import React from "react";
import { motion } from "framer-motion";

export function TimelineDemo() {
  const milestones = [
    {
      title: "2024 Q4",
      description: "推出ChatGPT官网镜像系统，国内用户无需翻墙即可访问完整的ChatGPT官方生态，包括GPT-4、DALL-E 3、代码解释器等所有功能",
    },
    {
      title: "2024 Q2",
      description: "上线统一大模型API网关服务，支持一键接入Claude Code、GPT-4、Gemini等50+主流模型。提供按量计费模式。",
    },
    {
      title: "最新动态",
      highlights: [
        "✅ 支持GPT-4、Claude 3.5、Gemini Pro等50+主流模型",
        "✅ Midjourney图像生成服务稳定运行",
        "✅ ChatGPT官方订阅代充服务持续升级",
        "✅ 企业级知识库和工作流定制服务上线",
        "✅ ChatGPT官网镜像系统即将发布（预售中）",
      ],
    },
  ];

  return (
    <div className="w-full py-12">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="mb-12 pl-8 relative last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
              
              {/* Timeline line */}
              {index < milestones.length - 1 && (
                <div className="absolute left-1.5 top-6 w-0.5 h-20 bg-primary/30" />
              )}

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {milestone.title}
                </h3>
                {milestone.description && (
                  <p className="text-muted-foreground mb-4">
                    {milestone.description}
                  </p>
                )}
                {milestone.highlights && (
                  <ul className="space-y-2">
                    {milestone.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground">
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
