"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import StickyImage from "./components/stickyImage";
import DearFriends from "./components/dearFriends";
import SaveTheDate from "./components/saveTheDate";
import ThePlan from "./components/thePlan";
import { translations } from "./lib/translations";
import TimeLeft from "./components/timeLeft";
import Questionnaire from "./components/questionnaire";
import CinematicEnvelopeReveal from "./components/envelope";

type Step = "intro" | "details";
export type Lang = "hy" | "ru" | "en";

export default function InvitationFlow() {
  const [step, setStep] = useState<Step>("intro");
  const audioRef = useRef<HTMLAudioElement>(null);

  const [lang, setLang] = useState<Lang>("hy");
  const t = translations[lang];

  const fontsByLang = {
    hy: {
      title: "kotaykFont",
      body: "ArtiFont",
    },
    ru: {
      title: "boskaFont",
      body: "GeneralSansFont",
    },
    en: {
      title: "boskaFont",
      body: "GeneralSansFont",
    },
  };
  const font = fontsByLang[lang];

  const fadeInAudio = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = false;
    audio.volume = 0;

    await audio.play();

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
    if (step === "details") {
      fadeInAudio();
    }
  }, [step]);

  return (
    <div
      className={`inset-0 overflow-hidden bg-cover ${step === "details" ? "relative" : "fixed"}`}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <audio ref={audioRef} src="/feeling_good.MP3" loop preload="auto" />

      {step === "intro" && (
        <CinematicEnvelopeReveal
          font={font}
          setNextStep={setStep}
          audioRef={audioRef}
          t={t}
          setLang={setLang}
        />
      )}

      {/* DETAILS */}
      {step === "details" && (
        <motion.div
          className="flex flex-col items-center justify-center gap-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <StickyImage t={t} />
          <DearFriends t={t} />
          <SaveTheDate t={t} />
          <ThePlan t={t} />
          <TimeLeft lang={lang} />
          <Questionnaire t={t} lang={lang} />
        </motion.div>
      )}
    </div>
  );
}
