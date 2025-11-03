"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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
    <section ref={ref} className="relative bg-cyan-100 py-16 overflow-hidden">
      {/* Torn paper effect top */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-white">
        <svg
          className="absolute top-0 w-full h-8"
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 48C120 38 240 28 360 35C480 42 600 48 720 45C840 42 960 30 1080 28C1200 26 1320 34 1380 38L1440 42V0H0V48Z"
            fill="#7DD3FC"
          />
        </svg>
      </div>

      {/* Torn paper effect bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-white">
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
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-700" />
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-6">
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
          <div className="flex items-center justify-center min-h-[600px]">
            <svg
              viewBox="0 0 400 600"
              className="w-full h-full max-w-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Cylinder 1 - Bottom (tallest) */}
              <motion.g
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Cylinder body */}
                <defs>
                  <linearGradient
                    id="cylinder1"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect
                  x="50"
                  y="350"
                  width="120"
                  height="200"
                  fill="url(#cylinder1)"
                  rx="5"
                />
                {/* Top ellipse */}
                <ellipse cx="110" cy="350" rx="60" ry="15" fill="#60a5fa" />
                {/* Student illustration on top */}
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  <circle cx="110" cy="330" r="8" fill="#fbbf24" />
                  <rect
                    x="105"
                    y="338"
                    width="10"
                    height="15"
                    fill="#3b82f6"
                    rx="2"
                  />
                </motion.g>
              </motion.g>

              {/* Cylinder 2 - Middle Left */}
              <motion.g
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <defs>
                  <linearGradient
                    id="cylinder2"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect
                  x="180"
                  y="250"
                  width="120"
                  height="150"
                  fill="url(#cylinder2)"
                  rx="5"
                />
                <ellipse cx="240" cy="250" rx="60" ry="15" fill="#60a5fa" />
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.3,
                  }}
                >
                  <circle cx="240" cy="230" r="8" fill="#fbbf24" />
                  <rect
                    x="235"
                    y="238"
                    width="10"
                    height="15"
                    fill="#3b82f6"
                    rx="2"
                  />
                </motion.g>
              </motion.g>

              {/* Cylinder 3 - Top */}
              <motion.g
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <defs>
                  <linearGradient
                    id="cylinder3"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect
                  x="50"
                  y="180"
                  width="120"
                  height="120"
                  fill="url(#cylinder3)"
                  rx="5"
                />
                <ellipse cx="110" cy="180" rx="60" ry="15" fill="#60a5fa" />
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.6,
                  }}
                >
                  <circle cx="110" cy="160" r="8" fill="#fbbf24" />
                  <rect
                    x="105"
                    y="168"
                    width="10"
                    height="15"
                    fill="#3b82f6"
                    rx="2"
                  />
                </motion.g>
              </motion.g>

              {/* Cylinder 4 - Middle Right */}
              <motion.g
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <defs>
                  <linearGradient
                    id="cylinder4"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect
                  x="180"
                  y="120"
                  width="120"
                  height="100"
                  fill="url(#cylinder4)"
                  rx="5"
                />
                <ellipse cx="240" cy="120" rx="60" ry="15" fill="#60a5fa" />
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.9,
                  }}
                >
                  <circle cx="240" cy="100" r="8" fill="#fbbf24" />
                  <rect
                    x="235"
                    y="108"
                    width="10"
                    height="15"
                    fill="#3b82f6"
                    rx="2"
                  />
                </motion.g>
              </motion.g>

              {/* Cylinder 5 - Smallest Top */}
              <motion.g
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                <defs>
                  <linearGradient
                    id="cylinder5"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
                <rect
                  x="50"
                  y="80"
                  width="120"
                  height="80"
                  fill="url(#cylinder5)"
                  rx="5"
                />
                <ellipse cx="110" cy="80" rx="60" ry="15" fill="#60a5fa" />
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1.2,
                  }}
                >
                  <circle cx="110" cy="60" r="8" fill="#fbbf24" />
                  <rect
                    x="105"
                    y="68"
                    width="10"
                    height="15"
                    fill="#3b82f6"
                    rx="2"
                  />
                </motion.g>
              </motion.g>
            </svg>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
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
