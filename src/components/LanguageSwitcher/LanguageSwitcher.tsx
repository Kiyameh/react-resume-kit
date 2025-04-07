import React from 'react'
import './LanguageSwitcher.css'
import {useLanguage} from '../../context/language-context'
import {Globe} from 'lucide-react'
import {ResumeContent} from '../../types/types'

export default function LanguageSwitcher() {
  const {language, setLanguage, content} = useLanguage()

  return (
    <div className="language-switcher-container">
      <Globe className="language-switcher-icon" />
      <span className="language-switcher-text">{content.switcher_text}:</span>
      <nav className="language-switcher-buttons">
        {content.language_labels.map(
          (lang: ResumeContent['language_labels'][number], index: number) => {
            return (
              <button
                key={index}
                onClick={() => setLanguage(lang.value)}
                className={`language-switcher-button ${
                  language === lang.value ? 'language-switcher-active' : ''
                }`}
              >
                {lang.label}
              </button>
            )
          }
        )}
      </nav>
    </div>
  )
}
