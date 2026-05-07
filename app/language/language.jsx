export default function LanguageSwitcher({ onChange }) {
  const changeLang = (newLang) => {
    localStorage.setItem("lang", newLang);
    onChange(newLang);
  };

  return (
    <div className="flex gap-2 bg-[#e8e7e3] rounded-4xl border-[#e8e7e3] border-8 shadow-lg">
      <button onClick={() => changeLang("hy")}>🇦🇲</button>
      <button onClick={() => changeLang("ru")}>🇷🇺</button>
      <button onClick={() => changeLang("en")}>🇬🇧</button>
    </div>
  );
}
