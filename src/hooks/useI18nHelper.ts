import { useLingui } from "@lingui/react/macro";
import { usePathname, useRouter } from "next/navigation";

export function useI18nHelper() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useLingui();

  const sourceLocale = "en";
  const locales = ["en", "zh"];

  const switchLocale = () => {
    const newLocale =
      locales.find((locale) => locale !== i18n.locale) || sourceLocale;

    const realPathname = pathname.split("/").filter((i, index) => {
      if (index === 1 && i === i18n.locale) return false;
      return Boolean(i);
    });

    const newPathname =
      newLocale === sourceLocale
        ? `/${realPathname.join("/")}`
        : `/${newLocale}/${realPathname.join("/")}`;

    router.push(newPathname);
  };

  const getRealPathname = (path: string) => {
    const isLocalePath = locales.includes(pathname.split("/")[1]);

    return isLocalePath
      ? [i18n.locale, ...path.split("/").filter(Boolean)].join("/")
      : path;
  };

  return {
    // FIXME import from config file
    sourceLocale,
    locales,
    switchLocale,
    getRealPathname,
  };
}
