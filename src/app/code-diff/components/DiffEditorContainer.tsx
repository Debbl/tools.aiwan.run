"use client";
import { useHydrated, useLatest } from "@debbl/ahooks";
import { DiffEditor } from "@monaco-editor/react";
import hljs from "highlight.js";
import { useRef } from "react";
import toast from "react-hot-toast";
import type { DiffOnMount, Monaco } from "@monaco-editor/react";
import { useTranslations } from "~/hooks/useTranslations";
import { useMainStore } from "../hooks/useMainStore";
import Operator from "./Operator";

export default function DiffEditorContainer() {
  const {
    originalValue,
    modifiedValue,
    language,
    languages,
    theme,
    renderSideBySide,
    setOriginalValue,
    setModifiedValue,
    setLanguage,
    setLanguages,
  } = useMainStore();

  const monacoRef = useRef<Monaco>();

  const { isHydrated } = useHydrated();

  const languageRef = useLatest(language);
  const themeRef = useLatest(theme);

  const { t } = useTranslations({
    en: {
      "auto detect language": "Auto detect language",
    },
    zh: {
      "auto detect language": "已自动检测到语言",
    },
  });

  const handleOnMount: DiffOnMount = (editor, monaco) => {
    monacoRef.current = monaco;

    setLanguages(monaco.languages.getLanguages());
    editor.getOriginalEditor().setValue(originalValue);
    editor.getModifiedEditor().setValue(modifiedValue);

    editor.onDidUpdateDiff(() => {
      const ov = editor.getModel()?.original.getValue() || "";
      const mv = editor.getModel()?.modified.getValue() || "";

      const guessLanguage = hljs.highlightAuto(ov).language;
      const languagesId = languages.map((v) => v.id);

      if (
        guessLanguage &&
        guessLanguage !== languageRef.current &&
        languagesId.includes(guessLanguage)
      ) {
        toast.success(`${t("auto detect language")}: ${guessLanguage}`, {
          position: "top-right",
          ...(themeRef.current === "vs-dark" && {
            style: {
              background: "#333",
              color: "#fff",
            },
          }),
        });
        setLanguage(guessLanguage);
      }

      setOriginalValue(ov);
      setModifiedValue(mv);
    });
  };

  return (
    <>
      {/* eslint-disable-next-line react-compiler/react-compiler */}
      <Operator monaco={monacoRef.current} />

      {isHydrated && (
        <DiffEditor
          options={{
            originalEditable: true,
            renderSideBySide,
          }}
          onMount={handleOnMount}
          height="100%"
          theme={theme}
          language={language}
        />
      )}
    </>
  );
}
