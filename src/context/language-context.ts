import React from 'react'
import {Language, ResumeContent} from '../types/types'

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  content: ResumeContent
}

export const LanguageContext = React.createContext<
  LanguageContextType | undefined
>(undefined)

export function useLanguage() {
  const context = React.useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
