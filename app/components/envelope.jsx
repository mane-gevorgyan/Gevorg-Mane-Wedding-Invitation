"use client";

import { useRef, useState, useEffect } from "react";
import LanguageSwitcher from "../language/language";
import { motion } from "framer-motion";

export default function EnvelopeSequence({
  setNextStep,
  setLang,
  t,
  audioRef,
  font,
}) {
  const flapRef = useRef(null);
  const letterRef = useRef(null);
  const videoRef = useRef(null);

  const [step, setStep] = useState(0);

  const startAnimation = async () => {
    // unlock audio
    const audio = audioRef?.current;

    if (audio) {
      try {
        audio.muted = true;
        await audio.play();
        audio.pause();
        audio.currentTime = 0;
      } catch (err) {
        console.log(err);
      }
    }

    setStep(1);

    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1400);
    setTimeout(() => setStep(4), 1600);
    setTimeout(() => setStep(5), 3000);
    setTimeout(() => setStep(6), 3000);
    setTimeout(() => setNextStep("details"), 19000);
  };

  // 👉 autoplay video when step 6 is reached
  useEffect(() => {
    if (step === 6 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [step]);

  return (
    <div
      className="relative flex flex-col w-full h-screen items-center justify-center bg-[#ece5d8] overflow-hidden object-contain object-center "
      style={{ backgroundImage: "url('/silk.jpg')" }}
    >
      {/* Langage Switcher */}
      <motion.div
        className={`absolute top-3 right-3 z-20`}
        animate={
          step > 0
            ? {
                opacity: 0,
                y: -20,
                filter: "blur(8px)",
              }
            : {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        <LanguageSwitcher onChange={setLang} />
      </motion.div>

      <motion.h1
        className={`text-[#f1f0f0] text-center z-50 absolute top-16 leading-15 ${font.title}`}
        animate={
          step > 0
            ? {
                opacity: 0,
                y: -20,
                filter: "blur(8px)",
              }
            : {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.65, 0, 0.35, 1],
        }}
      >
        {t.wedding}
        <br />
        {t.invitation}
      </motion.h1>

      <div
        className="absolute left-1/2 top-1/2 w-85 h-55 shadow-2xl shrink-0 -translate-x-1/2 -translate-y-1/2"
        style={{ perspective: "2000px" }}
      >
        {/* BACK */}
        <div className="absolute inset-0 bg-[#dedede] rounded-sm shadow-xl" />

        {/* VIDEO (NEW LAYER - BEHIND EVERYTHING UNTIL STEP 6) */}
        <div
          className={`
            absolute inset-0 transition-all duration-2000 ease-in-out z-50
            ${step >= 6 ? "opacity-100 scale-320" : "opacity-0 scale-75"}
            `}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-contain"
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* LETTER */}
        <div
          ref={letterRef}
          style={{ backgroundImage: "url('/redBridge.JPG')" }}
          className={`
            absolute left-1/2 top-6 -translate-x-1/2
            w-75 h-45
            rounded-sm shadow-lg
            transition-all duration-700 ease-in-out
            bg-center bg-cover bg-no-repeat
            transform-gpu
            z-[5]

            ${step >= 2 ? "-translate-y-60" : ""}
            ${step >= 3 ? "z-50" : ""}
            ${step >= 4 ? "translate-y-2" : ""}
          `}
        />

        {/* LEFT */}
        <div
          className={`
            absolute inset-y-0 left-0 w-1/2
            [clip-path:polygon(0_0,100%_50%,0_100%)]

            border-l border-t border-b border-black/10
            shadow-[inset_-8px_0_12px_rgba(0,0,0,0.08)]

            ${step >= 3 ? "z-0" : "z-10"}
        `}
          style={{
            backgroundImage: "url('/envelope_bg.jpg')",
            backgroundSize: "cover",
          }}
        >
          {/* seam highlight */}
          <div className="absolute right-0 top-0 h-full w-px bg-white/20" />
        </div>

        {/* RIGHT */}
        <div
          className={`
            absolute inset-y-0 right-0 w-1/2
            [clip-path:polygon(100%_0,0_50%,100%_100%)]

            border-r border-t border-b border-black/10
            shadow-[inset_8px_0_12px_rgba(0,0,0,0.08)]

            ${step >= 3 ? "z-0" : "z-10"}
        `}
          style={{
            backgroundImage: "url('/envelope_bg.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute left-0 top-0 h-full w-px bg-white/20" />
        </div>

        {/* BOTTOM */}
        <div
          className={`
            absolute bottom-0 left-0 w-full h-1/2
            [clip-path:polygon(0_100%,50%_0,100%_100%)]

            border-b border-black/10
            shadow-[inset_0_-10px_20px_rgba(0,0,0,0.08)]

            ${step >= 3 ? "z-0" : "z-20"}
        `}
          style={{
            backgroundImage: "url('/envelope_bg.jpg')",
            backgroundSize: "cover",
          }}
        >
          <div className="absolute top-0 left-1/2 h-px w-24 -translate-x-1/2 bg-white/20" />
        </div>

        {/* TOP FLAP */}
        <div
          ref={flapRef}
          className={`
            absolute top-0 left-0 w-full h-1/2
            bg-[#e2d3b4]
            [clip-path:polygon(0_0,50%_100%,100%_0)]
            origin-top
            transition-transform duration-700 ease-in-out
            border-2 border-black/10
            ${step >= 1 ? "transform-[rotateX(180deg)]" : "transform-[rotateX(0deg)]"}
            ${step >= 2 ? "z-0" : "z-30"}
          `}
          style={{
            transformStyle: "preserve-3d",
            backgroundImage: "url(./envelope_bg.jpg)",
          }}
        />
      </div>

      {/* BUTTON */}
      {step === 0 && (
        <motion.button
          onClick={startAnimation}
          className={`text-[#f1f0f0] bg-[#a9a298] px-5 py-2 rounded-full shadow absolute bottom-38 ${font.body}`}
        >
          {t.open}
        </motion.button>
      )}
    </div>
  );
}
