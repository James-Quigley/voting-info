import { createContext, useContext, useMemo } from "react"
import LocalizedStrings from "react-localization"

export { TranslationProvider, useTranslation }

const TranslationContext = createContext()

function useTranslation() {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
  // t.setLanguage('de') if we want to create a language switch later
}

function TranslationProvider({ translations, ...props }) {
  let t
  if (translations) {
    t = new LocalizedStrings(translations)
  }
  const value = useMemo(() => t, [t])
  return <TranslationContext.Provider value={value} {...props} />
}
