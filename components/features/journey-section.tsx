"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColumnRanking from "../animation/column-ranking";

const leftSteps = [
  {
    number: "01",
    title: "TƯ DUY AI & ĐẠO ĐỨC KỶ NGUYÊN SỐ",
    description:
      "Hiểu đúng AI là gì, tại sao AI quan trọng với mọi ngành nghề, và các vấn đề đạo đức khi sử dụng AI",
  },
  {
    number: "02",
    title: `NHẬP MÔN PYTHON - "NGÔN NGỮ" CỦA KHOA HỌC DỮ LIỆU`,
    description: `Làm quen với lập trình Python - công cụ thiết yếu để "ra lệnh" cho máy học và xử lý dữ liệu.`,
  },
];

const rightSteps = [
  {
    number: "03",
    title: "GIẢI MÃ HỌC MÁY (MACHINE LEARNING)",
    description: `Khám phá nguyên lý cốt lõi giúp máy tính có thể "học" từ dữ liệu, nhận diện hình ảnh và ra quyết định.`,
  },
  {
    number: "04",
    title: "SỨC MẠNH CỦA AI TẠO SINH (GENERATIVE AI)",
    description:
      "Trải nghiệm và hiểu cách AI viết văn, vẽ tranh, sáng tác nhạc (như ChatGPT, Midjourney) và ứng dụng trong học tập.",
  },
  {
    number: "05",
    title: `AI "NHÌN" VÀ "HIỂU" (THỊ GIÁC MÁY TÍNH & NLP)`,
    description: `Khám phá cách xe tự lái "nhìn" đường (Thị giác máy tính) và cách Google Dịch "hiểu" ngôn ngữ (Xử lý ngôn ngữ tự nhiên)`,
  },
];

export default function JourneySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative bg-primary py-16 overflow-hidden">
      {/* Torn paper effect top */}

      {/* Torn paper effect bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-transparent">
        <svg
          className="absolute bottom-0 w-full h-8"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 0C120 10 240 20 360 13C480 6 600 0 720 3C840 6 960 18 1080 20C1200 22 1320 14 1380 10L1440 6V48H0V0Z"
            fill="#7DD3FC"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative bg-blue-700 rounded-3xl px-8 py-6 shadow-xl">
            <h2 className="text-white text-2xl md:text-3xl font-bold text-center leading-tight">
              LỘ TRÌNH HỌC TINH GỌN (6 BUỔI)
              <br />
              KHAI MỞ TƯ DUY AI CÙNG CÁC GIÁO SƯ BÁCH KHOA
            </h2>
            {/* Arrow pointer */}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6 col-span-1 order-1">
            {leftSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-900 font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center Column - Growing Cylinders Animation */}
          <div className="flex items-center justify-center h-full lg:col-span-3 lg:order-2 order-3">
            <ColumnRanking />
          </div>

          {/* Right Column */}
          <div className="space-y-6 col-span-1 lg:order-3 order-2">
            {rightSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-cyan-200">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-blue-900 font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-blue-900 font-bold text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
