import { useAtom } from 'jotai'
import { useMainStoreAtom } from '../atoms/use-main-store-atom'
import type { MainStoreState } from '../atoms/use-main-store-atom'

export interface MainStoreActions {
  setOriginalValue: (originalValue: MainStoreState['originalValue']) => void
  setModifiedValue: (modifiedValue: MainStoreState['modifiedValue']) => void
  setLanguage: (language: MainStoreState['language']) => void
  setLanguages: (languages: MainStoreState['languages']) => void
  setTheme: (theme: MainStoreState['theme']) => void
  setRenderSideBySide: (
    renderSideBySide: MainStoreState['renderSideBySide'],
  ) => void
}

export function useMainStore() {
  const [state, set] = useAtom(useMainStoreAtom)

  return {
    ...state,
    setOriginalValue: (originalValue) => set((s) => ({ ...s, originalValue })),
    setModifiedValue: (modifiedValue) => set((s) => ({ ...s, modifiedValue })),
    setLanguage: (language) => set((s) => ({ ...s, language })),
    setLanguages: (languages) => set((s) => ({ ...s, languages })),
    setTheme: (theme) => set((s) => ({ ...s, theme })),
    setRenderSideBySide: (renderSideBySide) =>
      set((s) => ({ ...s, renderSideBySide })),
  } as MainStoreActions & MainStoreState
}
