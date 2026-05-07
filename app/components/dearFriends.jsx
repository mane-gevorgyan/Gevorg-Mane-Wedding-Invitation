export default function DearFriends({ t }) {
  return (
    <div className="z-10 flex flex-col items-center justify-center text-center text-white gap-8 -translate-y-[45vh] px-5">
      <h1>{t.guests}</h1>
      <p>{t.invite1}</p>
      <p>
        {t.invite2}
        <br />
        <br />
        {t.invite3}
      </p>
    </div>
  );
}
