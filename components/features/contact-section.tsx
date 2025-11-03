"use client";

import { motion } from "framer-motion";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-4xl">
              Liên hệ với chúng tôi
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy gửi tin nhắn
              cho chúng tôi và chúng tôi sẽ phản hồi trong thời gian sớm nhất.
            </p>
            <div className="mt-8 space-y-4">
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Email
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  contact@ai57.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Điện thoại
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  +84 123 456 789
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 dark:text-neutral-50">
                  Địa chỉ
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Hà Nội, Việt Nam
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
