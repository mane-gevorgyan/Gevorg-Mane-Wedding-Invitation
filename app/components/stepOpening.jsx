// StepOpening.tsx

import { motion } from "framer-motion";

export default function StepOpening({ step, setStep }) {
  return (
    <motion.div className="absolute inset-0 z-20 flex flex-col items-center justify-center overflow-hidden">
      {/* TOP IMAGE */}
      <motion.div
        className="relative h-[200px] w-[500px] overflow-hidden"
        initial={{ y: 0 }}
        animate={
          step === "opening"
            ? {
                y: "-120vh",
              }
            : {
                y: 0,
              }
        }
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
      >
        <img
          src="/letter_1.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Top"
        />
      </motion.div>

      {/* BOTTOM IMAGE */}
      <motion.div
        className="relative h-[200px] w-[500px] overflow-hidden"
        initial={{ y: 0 }}
        animate={
          step === "opening"
            ? {
                y: "120vh",
              }
            : {
                y: 0,
              }
        }
        transition={{
          duration: 1.2,
          ease: [0.76, 0, 0.24, 1],
        }}
        onAnimationComplete={() => {
          if (step === "opening") {
            setStep("video");
          }
        }}
      >
        <img
          src="/letter_2.jpg"
          className="absolute inset-0 h-full w-full object-cover"
          alt="Bottom"
        />
      </motion.div>
    </motion.div>
  );
}
