"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

interface SubItem {
  name: string;
  href: string;
  description?: string;
}

interface NavItem {
  name: string;
  href?: string;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  {
    name: "Products",
    subItems: [
      { name: "AI Platform", href: "/products/ai-platform", description: "Build with our AI technology" },
      { name: "API Access", href: "/products/api", description: "Integrate our APIs" },
      { name: "Enterprise", href: "/products/enterprise", description: "Solutions for teams" },
    ],
  },
  {
    name: "Resources",
    subItems: [
      { name: "Documentation", href: "/resources/docs", description: "Technical guides" },
      { name: "Blog", href: "/blog", description: "Latest updates" },
      { name: "Case Studies", href: "/resources/case-studies", description: "Customer stories" },
    ],
  },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact", href: "/contact" },
];

export function SimplifiedNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      setOpenMobileDropdown(null);
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border/40"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
                  AI
                </span>
                <span className="text-2xl font-light text-muted-foreground">
                  Corp
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;

                if (hasSubItems) {
                  return (
                    <div key={item.name} className="relative group">
                      <button
                        type="button"
                        className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        {item.name}
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:-rotate-180" />
                      </button>
                      <div className="pointer-events-none absolute left-0 top-full mt-2 w-64 overflow-hidden rounded-xl border border-border/60 bg-background/95 p-3 opacity-0 shadow-lg backdrop-blur transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 translate-y-2">
                        <div className="flex flex-col gap-1">
                          {item.subItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="rounded-lg px-3 py-2 text-left transition-colors hover:bg-muted/60"
                            >
                              <p className="text-sm font-semibold text-foreground">
                                {subItem.name}
                              </p>
                              {subItem.description ? (
                                <p className="text-xs text-muted-foreground">
                                  {subItem.description}
                                </p>
                              ) : null}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return item.href ? (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
                  >
                    {item.name}
                  </Link>
                ) : null;
              })}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm">
                Log in
              </Button>
              <Button size="sm">Sign up</Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-lg border-b border-border/40"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navItems.map((item, index) => {
                const hasSubItems = item.subItems && item.subItems.length > 0;

                if (hasSubItems) {
                  const isOpen = openMobileDropdown === item.name;

                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-2"
                    >
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        onClick={() =>
                          setOpenMobileDropdown(isOpen ? null : item.name)
                        }
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            isOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="space-y-2 border-l border-border/40 pl-6"
                          >
                            {item.subItems?.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="block rounded-lg px-2 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/50 hover:text-foreground"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                <p className="font-medium text-foreground">
                                  {subItem.name}
                                </p>
                                {subItem.description ? (
                                  <p className="text-xs text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                ) : null}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                }

                if (item.href) {
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted/50"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                }

                return null;
              })}
              <div className="pt-4 border-t border-border/40 space-y-4">
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full" size="lg">
                    Log in
                  </Button>
                  <Button className="w-full" size="lg">
                    Sign up
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
