"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  title: string;
  content: ReactNode;
}

export function Timeline({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      {React.Children.map(children, (child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          className="pl-8 pb-12 relative last:pb-0"
        >
          <div className="absolute left-0 top-0 w-2 h-2 bg-primary rounded-full" />
          {index < React.Children.count(children) - 1 && (
            <div className="absolute left-0.5 top-2 w-0.5 h-full bg-primary/20" />
          )}
          {child}
        </motion.div>
      ))}
    </div>
  );
}

export function TimelineItem({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <div className="text-muted-foreground">{children}</div>
    </div>
  );
}
