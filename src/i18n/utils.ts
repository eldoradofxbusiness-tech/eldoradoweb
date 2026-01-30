import { ui } from "./ui";
import type { UILanguage, UIKey } from "./ui";

export type TranslationPath = keyof UIKey;

export function useTranslations(lang: UILanguage) {
  const translations = ui[lang];

  const t = (path: string): string => {
    const keys = path.split(".");
    let value: any = translations;

    for (const key of keys) {
      if (value && typeof value === "object" && key in value) {
        value = value[key];
      } else {
        return getFallbackTranslation(path);
      }
    }

    if (typeof value === "string") {
      return value;
    }

    return path;
  };

  return t;
}

function getFallbackTranslation(path: string): string {
  const keys = path.split(".");
  let value: any = ui.en;

  for (const key of keys) {
    if (value && typeof value === "object" && key in value) {
      value = value[key];
    } else {
      return path;
    }
  }

  if (typeof value === "string") {
    return value;
  }

  return path;
}

export function getLanguageFromPath(pathname: string): UILanguage {
  return pathname.startsWith("/es") ? "es" : "en";
}