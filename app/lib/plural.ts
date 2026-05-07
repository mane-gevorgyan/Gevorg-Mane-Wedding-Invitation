import { Lang } from "../page";

export function getPlural(value: number, forms: string[], lang: Lang): string {
  if (lang === "ru") {
    if (value % 10 === 1 && value % 100 !== 11) return forms[0];
    if (
      value % 10 >= 2 &&
      value % 10 <= 4 &&
      (value % 100 < 10 || value % 100 >= 20)
    )
      return forms[1];
    return forms[2];
  }

  if (lang === "en") {
    return value === 1 ? forms[0] : forms[1];
  }

  // Armenian
  return forms[0];
}
