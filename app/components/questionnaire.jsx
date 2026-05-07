import RSVP from "./rsvp";

export default function Questionnaire({ t, lang}) {
  return (
    <div className="flex flex-col gap-8 w-full px-5 text-black">
      <div className="flex flex-col">
        <span
          className={`${lang === "ru" ? "russianFont" : "handwrittenFont"} text-5xl text-center mb-3`}
        >
          {t.confirm}
        </span>
        <span
          className={`${lang === "ru" ? "russianFont" : "handwrittenFont"} text-5xl text-center`}
        >
          16.06.26
        </span>
      </div>
      <RSVP translation={t} language={lang} />
    </div>
  );
}
