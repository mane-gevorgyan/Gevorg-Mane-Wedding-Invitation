import { motion } from "framer-motion";

export default function StepVideo({ step, setStep, videoRef }) {
    return (
        <motion.video
            ref={videoRef}
            src="/video.mp4"
            className="fixed inset-0 w-full h-full object-cover"
            playsInline
            onEnded={() => setStep("details")}
            initial={{
                opacity: 0,
                scale: 0.2,
            }}
            animate={
                step === "video"
                    ? {
                        opacity: 1,
                        scale: 1,
                    }
                    : {
                        opacity: 0,
                        scale: 0,
                    }
            }
            transition={{ duration: 0.1 }}
        />
    );
}
