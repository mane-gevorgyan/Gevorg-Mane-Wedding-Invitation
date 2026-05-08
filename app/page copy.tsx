"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StickyImage from "./components/stickyImage";
import DearFriends from "./components/dearFriends";
import SaveTheDate from "./components/saveTheDate";
import ThePlan from "./components/thePlan";
import { translations } from "./lib/translations";
import StepIntro from "./components/stepIntro";
import StepOpening from "./components/stepOpening";
import StepVideo from "./components/stepVideo";
import TimeLeft from "./components/timeLeft";
import Questionnaire from "./components/questionnaire";

import CinematicEnvelopeReveal from "./components/envelope";

type Step = "intro" | "opening" | "video" | "details";
export type Lang = "hy" | "ru" | "en";

export default function InvitationFlow() {
  const [step, setStep] = useState<Step>("intro");
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [lang, setLang] = useState<Lang>("hy");
  const t = translations[lang];

  const fadeInAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0;
    audio.play();

    let vol = 0;
    const interval = setInterval(() => {
      vol += 0.05;
      if (vol >= 0.5) {
        audio.volume = 0.5;
        clearInterval(interval);
      } else {
        audio.volume = vol;
      }
    }, 100);
  };

  useEffect(() => {
    if (step === "video") {
      videoRef.current?.play().catch(() => {});
    }
  }, [step]);

  useEffect(() => {
    if (step === "details") {
      fadeInAudio();
    }
  }, [step]);

  return (
    // <div
    //   className={`inset-0 overflow-hidden ${step === "details" ? "relative" : "fixed"}`}
    // >
    //   <video
    //     className="absolute inset-0 w-full h-full object-cover -z-10"
    //     autoPlay
    //     muted
    //     loop
    //     playsInline
    //   >
    //     <source src="/windyWalpaper.mp4" type="video/mp4" />
    //   </video>
    //   <div className="absolute inset-0 bg-[#d0cfc2]/40" />

    //   <AnimatePresence mode="wait">
    //     {/* INTRO */}
    //     {step === "intro" && (
    //       <StepIntro t={t} setLang={setLang} setStep={setStep} />
    //     )}

    //     {/* OPENING + ENVELOPE ANIMATION */}
    //     {(step === "opening" || step === "video") && (
    //       <motion.div className="absolute inset-0 flex items-center justify-center">
    //         {/* envelope */}
    //         <StepOpening step={step} setStep={setStep} />

    //         {/* video */}
    //         <StepVideo step={step} setStep={setStep} videoRef={videoRef} />
    //       </motion.div>
    //     )}

    //     {/* DETAILS */}
    //     {step === "details" && (
    //       <motion.div
    //         className="flex flex-col items-center justify-center gap-10 text-center"
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //       >
    //         <audio ref={audioRef} src="/feeling_good.MP3" loop preload="true" />
    //         <StickyImage t={t} />
    //         <DearFriends t={t} />
    //         <SaveTheDate t={t} />
    //         <ThePlan t={t} />
    //         <TimeLeft lang={lang} />
    //         <Questionnaire t={t} lang={lang} />
    //       </motion.div>
    //     )}
    //   </AnimatePresence>
    // </div>
    
    <CinematicEnvelopeReveal />
    
  );
}
