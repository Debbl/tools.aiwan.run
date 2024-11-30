import { useLingui } from "@lingui/react/macro";
import { usePathname, useRouter } from "next/navigation";

export function useI18n() {
  const router = useRouter();
  const pathname = usePathname();
  const { i18n } = useLingui();

  const switchLocale = () => {
    const sourceLocale = "en";
    const locales = ["en", "zh"];

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

  return {
    // FIXME import from config file
    sourceLocale: "en",
    locales: ["en", "zh"],
    switchLocale,
  };
}
