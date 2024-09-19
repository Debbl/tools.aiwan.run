"use client";
import { useHydrated } from "@debbl/ahooks";
import { Button, Checkbox, Select, SelectItem } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import type { Monaco, Theme } from "@monaco-editor/react";
import type { ChangeEventHandler } from "react";
import { useTranslations } from "~/hooks/useTranslations";
import { useMainStore } from "../hooks/useMainStore";
import { FlowbiteLanguageOutline, RiResetRightFill } from "../icons";

export default function Operator({ monaco }: { monaco?: Monaco }) {
  const {
    language,
    languages,
    theme: editorTheme,
    setTheme: setEditorTheme,
    renderSideBySide,
    setLanguage,
    setRenderSideBySide,
  } = useMainStore();

  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(editorTheme === "light" ? "light" : "dark");
  }, [editorTheme, setTheme]);

  const resetMonacoValue = () => {
    monaco?.editor.getModels().forEach((model) => {
      model.setValue("");
    });
  };

  const { isHydrated } = useHydrated();

  const { t, locale, setLocale } = useTranslations({
    en: {
      selectLanguage: "Select Language",
      selectTheme: "Select Theme",
      sideBySide: "Side by Side",
    },
    zh: {
      selectLanguage: "选择语言",
      selectTheme: "选择主题",
      sideBySide: "并排显示",
    },
  });

  const handleSetTheme: ChangeEventHandler<HTMLSelectElement> = (e) => {
    const theme = e.target.value as Theme;

    setEditorTheme(theme);
  };

  if (!isHydrated) return null;

  return (
    <div className="flex items-center justify-center gap-x-4 py-4">
      <Select
        selectedKeys={[language]}
        onChange={(e) => setLanguage(e.target.value)}
        label={t("selectLanguage")}
        size="sm"
        classNames={{
          base: "max-w-xs items-center",
          mainWrapper: "flex-1",
        }}
        labelPlacement="outside-left"
      >
        {languages.map((lang) => (
          <SelectItem key={lang.id}>{lang.id}</SelectItem>
        ))}
      </Select>

      <Select
        selectedKeys={[editorTheme]}
        onChange={handleSetTheme}
        label={t("selectTheme")}
        size="sm"
        classNames={{
          base: "max-w-52 items-center",
          mainWrapper: "flex-1",
        }}
        labelPlacement="outside-left"
      >
        <SelectItem key="light">light</SelectItem>
        <SelectItem key="vs-dark">vs-dark</SelectItem>
      </Select>

      <Checkbox
        isSelected={renderSideBySide}
        onValueChange={setRenderSideBySide}
        size="md"
        defaultSelected
      >
        {t("sideBySide")}
      </Checkbox>

      <Button size="sm" isIconOnly onClick={resetMonacoValue}>
        <RiResetRightFill />
      </Button>
      <Button
        size="sm"
        isIconOnly
        variant="ghost"
        onClick={() => {
          setLocale(locale === "en" ? "zh" : "en");
        }}
      >
        <FlowbiteLanguageOutline />
      </Button>
    </div>
  );
}
