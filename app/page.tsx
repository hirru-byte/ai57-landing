"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950">
      <div className="flex w-full max-w-4xl flex-col items-center justify-center gap-12 px-6 py-16 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-6xl md:text-7xl"
          >
            Welcome to Next.js
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            Your Next.js project is set up with TypeScript, Tailwind CSS,
            shadcn/ui, and Framer Motion. Everything is ready to build amazing
            things!
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Button size="lg" className="min-w-[160px]">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="min-w-[160px]">
            Learn More
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            { title: "Next.js", desc: "App Router" },
            { title: "TypeScript", desc: "Type Safe" },
            { title: "Tailwind CSS", desc: "Styling" },
            { title: "Framer Motion", desc: "Animations" },
          ].map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg border border-neutral-200 bg-white p-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
            >
              <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                {tech.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
