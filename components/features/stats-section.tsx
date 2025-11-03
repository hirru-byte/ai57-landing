"use client";

import { motion } from "framer-motion";
import { stats } from "@/constants/landing";

export function StatsSection() {
  return (
    <section className="bg-neutral-900 px-4 py-16 text-white dark:bg-neutral-950 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold sm:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm text-neutral-400 sm:text-base">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
