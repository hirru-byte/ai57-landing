"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { DollarSign, Globe, GraduationCap, Users } from "lucide-react";

export function FeaturesSection() {
  const handleScrollToHero = () => {
    const heroSection = document.querySelector("section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[radial-gradient(circle,#93c5fd_1px,transparent_1px)] bg-size-[20px_20px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle,#93c5fd_1px,transparent_1px)] bg-size-[20px_20px]" />
      </div>

      <div className="container relative mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                &quot;BẢO CHỨNG VÀNG&quot; TỪ CÁC GIÁO SƯ HÀNG ĐẦU VIỆT NAM
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-700 text-lg leading-relaxed"
            >
              &quot;100% đội ngũ giảng dạy là các Giáo sư, Phó Giáo sư, Tiến sĩ
              đầu ngành đang công tác và giảng dạy tại Đại học Bách Khoa Hà
              Nội.&quot;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-2xl border-2 border-gray-200 p-8 shadow-lg"
            >
              <div className="space-y-6">
                <StatItem
                  icon={<GraduationCap className="w-6 h-6 text-white" />}
                  text=""
                  subtext="GS.TS. Nguyễn Văn A - Trưởng khoa..., Đại học Bách Khoa Hà Nội."
                  delay={0.4}
                />
                <StatItem
                  icon={<Globe className="w-6 h-6 text-white" />}
                  text=""
                  subtext="PGS.TS. Trần Văn B - Viện trưởng Viện..., Đại học Bách Khoa Hà Nội."
                  delay={0.5}
                />
                <StatItem
                  icon={<DollarSign className="w-6 h-6 text-white" />}
                  text=""
                  subtext="Đội ngũ hơn 10 Giáo sư đầu ngành hỗ trợ chuyên môn, biên soạn giáo tình"
                  delay={0.6}
                />
                <StatItem
                  icon={<Users className="w-6 h-6 text-white" />}
                  text=""
                  subtext="Giáo trình chuẩn NVIDIA"
                  delay={0.7}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button
                onClick={() => {
                  handleScrollToHero();
                }}
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold text-lg px-8 py-6 rounded-md shadow-lg cursor-pointer"
              >
                NHẬN TƯ VẤN
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Images */}
          <div className="relative h-[600px] hidden lg:block">
            <motion.svg
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 0.2, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-1/4 left-0 w-64 h-32"
              viewBox="0 0 200 100"
            >
              <motion.path
                d="M 0 50 Q 50 0 100 50 T 200 50"
                stroke="#3b82f6"
                strokeWidth="2"
                fill="none"
                strokeDasharray="5,5"
              />
            </motion.svg>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute top-12 right-12 w-64 h-48 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="absolute top-32 right-32 w-64 h-48 rounded-lg overflow-hidden shadow-2xl"
            >
              <div className="w-full h-full bg-gradient-to-br from-orange-100 to-orange-200" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-32 left-12 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-blue-300" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="absolute bottom-32 left-48 w-48 h-56 rounded-2xl overflow-hidden shadow-2xl z-10"
            >
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gray-300" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: -6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.8,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="absolute bottom-12 left-24 w-32 h-32 bg-yellow-400 rounded-lg shadow-xl flex items-center justify-center font-bold text-2xl text-gray-800"
            >
              SA
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 6 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.9,
                type: "spring",
                bounce: 0.4,
              }}
              whileHover={{ scale: 1.1, rotate: 0 }}
              className="absolute bottom-12 right-24 w-32 h-32 bg-purple-600 rounded-lg shadow-xl flex items-center justify-center font-bold text-2xl text-white"
            >
              NYU
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 }}
              animate={{ y: [0, -10, 0] }}
              style={{
                animationDuration: "3s",
                animationIterationCount: "infinite",
              }}
              className="absolute top-1/2 right-4 w-16 h-20 bg-orange-300 rounded shadow-lg transform rotate-12"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.1 }}
              animate={{ y: [0, -15, 0] }}
              style={{
                animationDuration: "4s",
                animationIterationCount: "infinite",
              }}
              className="absolute bottom-48 right-12 w-12 h-16 bg-blue-300 rounded shadow-lg transform -rotate-12"
            />

            <motion.div
              initial={{ opacity: 0, rotate: 6 }}
              whileInView={{ opacity: 0.6, rotate: 6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.2 }}
              animate={{ y: [0, -12, 0], rotate: [6, 12, 6] }}
              style={{
                animationDuration: "5s",
                animationIterationCount: "infinite",
              }}
              className="absolute top-1/3 right-8 w-20 h-24 bg-blue-100 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({
  icon,
  text,
  subtext,
  delay,
}: {
  icon: React.ReactNode;
  text: string;
  subtext: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex items-center gap-4"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="flex-shrink-0 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-md"
      >
        {icon}
      </motion.div>
      <div>
        <span className="text-blue-600 font-bold text-lg">{text}</span>
        <span className="text-gray-700 text-lg ml-1">{subtext}</span>
      </div>
    </motion.div>
  );
}
