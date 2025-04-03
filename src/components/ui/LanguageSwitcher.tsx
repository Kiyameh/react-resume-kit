import './LanguageSwitcher.css'
import {useLanguage} from '../../context/language-context'
import {LanguageLabel} from '../../types/types'
import {Globe} from 'lucide-react'

export default function LanguageSwitcher() {
  const {language, setLanguage, content} = useLanguage()

  return (
    <div className="language-switcher-container">
      <Globe className="language-switcher-icon" />
      <span className="language-switcher-text">{content.switcher_text}:</span>
      <nav className="language-switcher-buttons">
        {content.language_labels.map((lang: LanguageLabel, index: number) => {
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
        })}
      </nav>
    </div>
  )
}
