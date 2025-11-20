import Link from "next/link";
import { Sparkles, Twitter, Github, Linkedin } from "lucide-react";

export function SiteFooter() {
  const mainLinks = [
    { href: "/products/mirror", label: "大模型镜像" },
    { href: "/products/api-gateway", label: "API 网关" },
    { href: "/products/recharge", label: "官方代充" },
    { href: "/products/mirror-system", label: "镜像系统" },
  ];

  const legalLinks = [
    { href: "/privacy", label: "隐私政策" },
    { href: "/terms", label: "服务条款" },
  ];

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <span className="font-semibold text-lg">AI大模型服务</span>
            </div>
            <p className="text-sm text-muted-foreground">
              一站式 AI 大模型服务平台
            </p>
          </div>

          {/* Main Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">产品</h3>
            <ul className="space-y-2">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tutorials */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">资源</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tutorials"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  使用教程
                </Link>
              </li>
              <li>
                <Link
                  href="/tutorials/api-guide"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  API 文档
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  博客
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">社交</h3>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary/10 transition-colors text-muted-foreground hover:text-primary"
                    aria-label={link.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AI大模型服务平台. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
