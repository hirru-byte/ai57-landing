"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-neutral-200 bg-gradient-to-r from-blue-600 to-purple-600 p-12 text-center text-white shadow-xl dark:border-neutral-800"
        >
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg opacity-90">
            Join thousands of satisfied users and start building amazing things
            today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="min-w-[160px]">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="min-w-[160px] bg-white/10 text-white hover:bg-white/20"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
