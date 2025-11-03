"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { DollarSign, Globe, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import featuresSectionImage1 from "@/public/images/lenp2025.jpeg";
import featuresSectionImage2 from "@/public/images/thu.jpg";
import featuresSectionImage3 from "@/public/images/thay-hanh.jpg";

const images = [
  {
    src: featuresSectionImage1,
    alt: "nguyen-phi-le",
    name: "Nguyễn Phi Lê",
  },
  {
    src: featuresSectionImage2,
    alt: "nguyen-thi-thu",
    name: "Nguyễn Thị Thu",
  },
  {
    src: featuresSectionImage3,
    alt: "nguyen-van-hanh",
    name: "Nguyễn Văn Hạnh",
  },
];

export function FeaturesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleScrollToHero = () => {
    const heroSection = document.querySelector("section");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="features" className="px-4 py-20 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-[100px] bg-primary rounded-b-[50%]" />
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
              <h2 className="text-3xl lg:text-4xl font-bold leading-normal text-gray-900 mb-2 text-balance text-center">
                <span className="bg-amber-400 text-white px-4 py-2 rounded-2xl">
                  BẢO CHỨNG VÀNG
                </span>{" "}
                TỪ CÁC GIÁO SƯ HÀNG ĐẦU VIỆT NAM
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-md leading-relaxed"
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
              className="bg-primary/10 rounded-2xl  p-8 shadow-2xl"
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
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold text-lg px-8 py-6 rounded-2xl shadow-lg cursor-pointer"
              >
                NHẬN TƯ VẤN
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Images */}
          <div className="relative flex items-center justify-center mx-auto w-full gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  scale: currentIndex === index ? 1 : 0.9,
                  y: currentIndex === index ? 0 : 20,
                }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="absolute w-full flex items-center justify-center"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="rounded-2xl bg-primary/10 aspect-square object-cover object-top"
                />
                <span className="text-white bg-primary/70 px-4 py-2 rounded-2xl text-lg absolute bottom-2 left-1/2 -translate-x-1/2">
                  {image.name}
                </span>
              </motion.div>
            ))}
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
