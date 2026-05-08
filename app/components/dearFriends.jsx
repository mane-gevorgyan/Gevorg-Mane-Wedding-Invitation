export default function DearFriends({ t }) {
  return (
    <div className="z-10 flex flex-col items-center justify-center text-center gap-8 -translate-y-[45vh] px-15">
      <h1 className="kotaykFont">{t.guests}</h1>
      <p className="artiFont">{t.invite1}</p>
      <p className="artiFont">{t.invite2}</p>
      <p className="artiFont">{t.invite3}</p>
    </div>
  );
}
