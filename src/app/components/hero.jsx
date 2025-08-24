"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden rounded-2xl shadow-md">
      {/* Background Image */}
      <Image
        src="/banner.jpg" // 👉 public ফোল্ডারে ইমেজ রাখবে
        alt="Bookshelf Banner"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-lg"
        >
          Explore Your Next Favorite Book
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-4 text-lg md:text-xl lg:text-2xl max-w-2xl text-gray-200"
        >
          A curated collection of timeless classics & modern masterpieces.
        </motion.p>
      </div>
    </section>
  );
}
