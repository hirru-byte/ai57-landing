"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ScholarshipForm } from "./scholarship-form";
import heroImage from "@/public/images/le-ky-ket.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center bg-linear-to-b from-blue-900 from-90% to-primary">
      <div className="container mx-auto max-w-[calc(100%-200px)] flex flex-col md:flex-row gap-10 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 h-fit"
        >
          <Image
            src={heroImage}
            alt="CTA Section"
            width={1000}
            height={500}
            className="rounded-2xl w-full h-full object-contain bg-transparent"
          />
        </motion.div>
        <div className="text-center w-full md:w-1/2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold tracking-tight leading-normal text-neutral-50 dark:text-neutral-900 sm:text-3xl md:text-4xl"
          >
            <span className="text-primary bg-white px-2 py-1 rounded-2xl shadow-lg ">
              CHÍNH THỨC
            </span>{" "}
            AI57 & ĐH BÁCH KHOA TRAO 5.000 SUẤT HỌC BỔNG 100% HỌC PHÍ &#34;AI
            TOÀN DÂN&#34;
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-50 dark:text-neutral-900 sm:text-xl"
          >
            &quot;Cơ hội duy nhất cho học sinh Cấp 3 toàn quốc tiếp cận giáo
            trình AI chuẩn quốc tế Nvidia, được giảng dạy trực tiếp bởi các Giáo
            sư, Tiến sĩ đầu ngành từ ĐH Bách Khoa.&quot;
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 max-w-md mx-auto bg-white rounded-[30px] p-6 shadow-lg"
          >
            <div className="mb-6 text-center">
              <h2 className="text-2xl tracking-tight font-bold text-neutral-700 dark:text-neutral-50">
                ĐĂNG KÝ NHẬN HỌC BỔNG NGAY!
              </h2>
              <p className="bg-primary rounded-2xl px-4 py-2 mt-2 text-sm text-white dark:text-neutral-50">
                Số lượng học bổng có hạn. Chỉ còn{" "}
                <span className="font-bold text-primary bg-white px-2 py-1 rounded-2xl shadow-lg">
                  4.872
                </span>{" "}
                suất!
              </p>
            </div>
            <ScholarshipForm />
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary mask-[radial-gradient(circle_at_30%_50%,black,transparent_40%)] animate-[pulse_10s_linear_infinite]  dark:bg-black"></div>
    </section>
  );
}
