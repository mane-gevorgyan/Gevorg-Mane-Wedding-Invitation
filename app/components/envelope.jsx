"use client";

import { useRef, useState, useEffect } from "react";

export default function EnvelopeSequence({ setNextStep}) {
  const flapRef = useRef(null);
  const letterRef = useRef(null);
  const videoRef = useRef(null);

  const [step, setStep] = useState(0);

  const showEnvelope = step < 6;

  const startAnimation = () => {
    setStep(1);

    setTimeout(() => setStep(2), 700);
    setTimeout(() => setStep(3), 1400);
    setTimeout(() => setStep(4), 1600);
    setTimeout(() => setStep(5), 3000);
    setTimeout(() => setStep(6), 3000); // 👉 NEW STEP
    setTimeout(() => setNextStep("details"), 19000);
  };

  // 👉 autoplay video when step 6 is reached
  useEffect(() => {
    if (step === 6 && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [step]);

  return (
    <div className="relative flex h-screen items-center justify-center bg-[#ece5d8] overflow-hidden">
      <div className={`relative w-[340px] h-[220px]`}>
        {/* BACK */}
        <div className="absolute inset-0 bg-[#e7d8b8] rounded-sm shadow-xl" />

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
            w-[300px] h-[180px]
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
            absolute inset-y-0 left-0 w-1/2 bg-[#d8c7a6]
            [clip-path:polygon(0_0,100%_50%,0_100%)]
            ${step >= 3 ? "z-0" : "z-10"}
          `}
        />

        {/* RIGHT */}
        <div
          className={`
            absolute inset-y-0 right-0 w-1/2 bg-[#d2c09c]
            [clip-path:polygon(100%_0,0_50%,100%_100%)]
            ${step >= 3 ? "z-0" : "z-10"}
          `}
        />

        {/* BOTTOM */}
        <div
          className={`
            absolute bottom-0 left-0 w-full h-1/2 bg-[#cdbb97]
            [clip-path:polygon(0_100%,50%_0,100%_100%)]
            ${step >= 3 ? "z-0" : "z-20"}
          `}
        />

        {/* TOP FLAP */}
        <div
          ref={flapRef}
          className={`
            absolute top-0 left-0 w-full h-1/2
            bg-[#e2d3b4]
            [clip-path:polygon(0_0,50%_100%,100%_0)]
            origin-top
            transition-transform duration-700 ease-in-out
            ${step >= 1 ? "rotate-x-180" : "rotate-x-0"}
            ${step >= 2 ? "z-0" : "z-30"}
          `}
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* BUTTON */}
        {step === 0 && (
          <button
            onClick={startAnimation}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow"
          >
            Open
          </button>
        )}
      </div>
    </div>
  );
}
