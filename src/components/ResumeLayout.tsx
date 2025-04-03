import React from 'react'
import LanguageSwitcher from './ui/LanguageSwitcher'
import PdfDownloadButton from './ui/PdfDownloadButton'
import styles from './ResumeLayout.module.css'
import {LanguageContext} from '../context/language-context'
import {Language, ResumeContent} from '../types/types'

export interface ResumeProps {
  resumeContent: Record<Language, ResumeContent>
  initialLanguage?: Language
  enableLanguageSwitch?: boolean
  enablePdfDownload?: boolean
  children: React.ReactNode
}

export default function ResumeLayout({
  initialLanguage = 'en',
  resumeContent,
  enableLanguageSwitch,
  enablePdfDownload,
  children,
}: ResumeProps) {
  const [language, setLanguage] = React.useState<Language>(initialLanguage)

  return (
    <LanguageContext.Provider
      value={{language, setLanguage, content: resumeContent[language]}}
    >
      <main className={styles.resume}>
        {children}
        {enablePdfDownload && <PdfDownloadButton />}
        {enableLanguageSwitch && <LanguageSwitcher />}
      </main>
    </LanguageContext.Provider>
  )
}
