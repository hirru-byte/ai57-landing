"use client";

import { motion } from "framer-motion";
import { FileText, Award, Star, Mail, PenTool } from "lucide-react";
import Image from "next/image";

export function BenefitsSection() {
  const requirements = [
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Lợi thế học bạ",
      description:
        "Làm đẹp hồ sơ (portfolio), tạo lợi thế vượt trội khi xét tuyển Đại học (đặc biệt khối ngành Công nghệ) hoặc săn học bổng du học.",
    },
    {
      icon: <Award className="w-8 h-8 text-white" />,
      title: "Kiến thức nền tảng",
      description:
        "Nắm vững tư duy AI cốt lõi và cách ứng dụng AI (AI Literacy), sẵn sàng cho mọi ngành học thay vì bị AI đào thải.",
    },
    {
      icon: <Star className="w-8 h-8 text-white" />,
      title: "Uy tín",
      description:
        "Nhận chứng nhận hoàn thành khóa học có giá trị, được cấp bởi AI57 và bảo chứng chuyên môn bởi Đại học Bách Khoa Hà Nội.",
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Mạng lưới & định hướng",
      description:
        "Cơ hội kết nối, học hỏi trực tiếp và được định hướng nghề nghiệp tương lai từ các Giáo sư, Tiến sĩ đầu ngành",
    },
  ];

  return (
    <section
      id="benefits"
      className=" px-4 py-20 dark:bg-neutral-900 sm:px-6 lg:px-8 relative "
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg, #2563eb 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header with university images */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-[calc(100%-12rem)] bg-primary rounded-2xl shadow-2xl mb-12 overflow-hidden"
        >
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-48 h-32 relative"
            >
              <Image
                src="/images/university-left.jpg"
                alt="University building"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1 text-center py-8 px-4"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                TẠI SAO PHỤ HUYNH VÀ HỌC SINH CẤP 3
                <br />
                KHÔNG THỂ BỎ LỠ CƠ HỘI NÀY?
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-48 h-32 relative"
            >
              <Image
                src="/images/university-right.jpg"
                width={100}
                height={100}
                alt="University building"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Requirements cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-6 shadow-2xl shadow-primary border-2 border-primary flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 shadow-lg"
              >
                {req.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {req.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {req.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[100px] bg-primary rounded-t-[50%] " />
    </section>
  );
}
