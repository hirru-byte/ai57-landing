"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScholarshipForm } from "./scholarship-form";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 min-h-screen">
      <div className="container mx-auto max-w-[calc(100%-100px)] flex gap-10">
        <motion.div className="w-1/2">
          <Image
            src="/images/cta-section.png"
            alt="CTA Section"
            width={1000}
            height={500}
            className="rounded-2xl w-full h-full object-cover bg-primary"
          />
        </motion.div>
        <div className="text-center w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-3xl md:text-4xl"
          >
            [CHÍNH THỨC] AI57 & ĐH BÁCH KHOA TRAO 5.000 SUẤT HỌC BỔNG 100% HỌC
            PHÍ &#34;AI TOÀN DÂN&#34;
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600 dark:text-neutral-400 sm:text-xl"
          >
            &quot;Cơ hội duy nhất cho học sinh Cấp 3 toàn quốc tiếp cận giáo
            trình AI chuẩn quốc tế Nvidia, được giảng dạy trực tiếp bởi các Giáo
            sư, Tiến sĩ đầu ngành từ ĐH Bách Khoa.&quot;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
                ĐĂNG KÝ NHẬN HỌC BỔNG NGAY!
              </h2>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Số lượng học bổng có hạn. Chỉ còn{" "}
                <span className="font-bold text-primary">4.872</span> suất!
              </p>
            </div>
            <ScholarshipForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
