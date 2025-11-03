"use client";

import { motion } from "framer-motion";
import { benefits } from "@/constants/landing";

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="bg-neutral-50 px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Discover the benefits that make us the right choice for your needs.
          </p>
        </motion.div>

        <div className="mt-16 space-y-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex flex-col gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-50">
                  {benefit.title}
                </h3>
                <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
                  {benefit.description}
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center rounded-lg bg-neutral-100 p-12 dark:bg-neutral-800">
                <div className="text-6xl">{benefit.icon}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
