import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "使用教程 - AI大模型服务",
  description: "学习如何使用AI大模型服务的各项功能和最佳实践",
};

export default function TutorialsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
