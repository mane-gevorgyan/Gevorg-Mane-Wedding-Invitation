import RSVP from "./rsvp";

export default function Questionnaire({ t, lang}) {
  return (
    <div className="flex flex-col gap-8 w-full px-10 mb-10">
      <div className="flex flex-col">
        <h1
          className={`${lang === "ru" ? "russianFont" : "kotaykFont"} text-5xl text-center mb-3`}
        >
          {t.confirm}
        </h1>
        <h1
          className={`${lang === "ru" ? "russianFont" : "kotaykFont"} text-5xl text-center`}
        >
          16.06.26
        </h1>
      </div>
      <RSVP translation={t} language={lang} />
    </div>
  );
}
