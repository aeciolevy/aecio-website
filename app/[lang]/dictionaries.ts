import "server-only";
import { Language } from "@/app/types/language";

export type Locale = Language;

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pt: () =>
    import("./dictionaries/pt-br.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();

