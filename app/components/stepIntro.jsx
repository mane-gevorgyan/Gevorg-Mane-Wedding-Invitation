import { motion } from "framer-motion";
import LanguageSwitcher from "../language/language";

export default function StepIntro({ t, setLang, setStep }) {

    const handleStart = () => {
        setStep("opening");
    };

    return (
        <motion.div
            className="absolute inset-0 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/silk.jpg')" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="absolute inset-0 bg-[#d0cfc2]/50" />

            {/* Langage Switcher */}
            <div className="absolute top-3 right-3 z-20">
                <LanguageSwitcher onChange={setLang} />
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6 text-center">
                <h1 className=" text-[#9a8a6f] allegroFont">
                    {t.wedding}
                    <br />
                    {t.invitation}
                </h1>

                <img src="/letter_close_edit.png" className="w-65" alt="Letter" />

                <button
                    onClick={handleStart}
                    // className="w-24 h-10 bg-white/60 text-[#9a8a6f] rounded-full cursor-pointer"
                    className="relative overflow-hidden px-8 py-3 rounded-full bg-[#ede6d6] text-[#9a8a6f] border border-[#d6cbb5]"
                >
                    {t.open}
                    <span className="absolute inset-0 before:absolute before:inset-0 before:-translate-x-full before:skew-x-12 before:bg-white/40 before:animate-shine" />
                </button>
            </div>
        </motion.div>
    );
}
