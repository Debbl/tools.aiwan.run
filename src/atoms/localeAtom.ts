import { atomWithStorage } from "jotai/utils";

export type Locale = "en" | "zh";
export interface Messages<T> {
  en: {
    [key in keyof T]: string;
  };
  zh: {
    [key in keyof T]: string;
  };
}

export const localeAtom = atomWithStorage<Locale>("locale", "en");
