import { atomWithStorage } from "jotai/utils";
import type { languages } from "monaco-editor";
import type { Theme } from "../types";

export interface MainStoreState {
  originalValue: string;
  modifiedValue: string;
  language: languages.ILanguageExtensionPoint["id"];
  languages: languages.ILanguageExtensionPoint[];
  theme: Theme;
  renderSideBySide: boolean;
}

export const useMainStoreAtom = atomWithStorage<MainStoreState>(
  "code-diff-main-store",
  {
    originalValue: "",
    modifiedValue: "",
    language: "plaintext",
    languages: [
      {
        id: "plaintext",
      },
    ],
    theme: "light",
    renderSideBySide: true,
  },
);
