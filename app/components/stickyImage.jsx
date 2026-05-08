"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StickyImage({ t }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const overlayColor = useTransform(
    scrollYProgress,
    [0, 0.7, 1],
    ["rgba(0,0,0,0)", "rgba(220,217,213,0.5)", "rgba(220,217,213,0.89)"],
  );

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.5]);

  return (
    <section className="w-full relative">
      <div ref={containerRef} className="relative h-[150vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ scale, y, opacity }}
            className="relative w-full h-full"
          >
            <Image
              src="/FaceToFace.jpg"
              alt="Wedding Background"
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: overlayColor }}
          />
        </div>

        {/* Scrolling content */}
        <div className="relative z-20 translate-y-[40vh]">
          <div className="flex flex-col items-center justify-center text-center gap-8 px-15">
            <div className="relative">
              <h1 className="absolute bottom-120 right-7 kotaykFont">{t.gevorg}</h1>
              <h1 className="absolute bottom-110 -right-3 kotaykFont">{t.and}</h1>
              <h1 className="absolute bottom-100 left-7 kotaykFont">{t.mane}</h1>
              <p className="absolute bottom-80 -left-30 kotaykFont" style={{fontSize: "46px"}}>26.06.2026</p>
            </div>
            {/* <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="-translate-y-[50vh] text-3xl"
            >
              ↓
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
