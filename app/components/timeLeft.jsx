import Countdown from "./countdown";
import { translations } from "../lib/translations";

export default function TimeLeft({ lang }) {
  return (
    <div className="flex flex-col z-20 justify-center items-center gap-8 px-5 w-full -translate-y-[20vh]">
      <h1 className={`${lang === "ru" ? "russianFont" : "handwrittenFont"}`}>
        {translations[lang].countdown}
      </h1>
      <Countdown lang={lang} t={translations[lang]} />
    </div>
  );
}
