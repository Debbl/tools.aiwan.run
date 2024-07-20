"use client";
import type { DiffOnMount, Monaco } from "@monaco-editor/react";
import { DiffEditor } from "@monaco-editor/react";
import hljs from "highlight.js";
import { useRef } from "react";
import { useHydrated, useLatest } from "@debbl/ahooks";
import toast from "react-hot-toast";
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
        toast.success(`已自动检测到语言: ${guessLanguage}`, {
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
