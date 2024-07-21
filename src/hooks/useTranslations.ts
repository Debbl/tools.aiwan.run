import { useAtom } from "jotai";
import { useEffect } from "react";
import type { Messages } from "~/atoms/localeAtom";
import { localeAtom } from "~/atoms/localeAtom";

export function useTranslations<T>(messages: Messages<T>) {
  const [locale, setLocale] = useAtom(localeAtom);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return {
    locale,
    setLocale,
    t: (key: keyof T) => messages[locale][key],
  };
}
