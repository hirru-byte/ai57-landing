"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/80"
    >
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-lg font-semibold text-neutral-900 dark:text-neutral-50"
        >
          AI57
        </Link>
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("features")}
          >
            Features
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollToSection("benefits")}
          >
            Benefits
          </Button>
          <Link href="/about">
            <Button variant="ghost" size="sm">
              About
            </Button>
          </Link>
          <Button size="sm">Get Started</Button>
        </div>
      </nav>
    </motion.header>
  );
}
