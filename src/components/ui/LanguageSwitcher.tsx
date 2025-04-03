import styles from './LanguageSwitcher.module.css'
import {useLanguage} from '../../context/language-context'
import {LanguageLabel} from '../../types/types'
import {Globe} from 'lucide-react'

export default function LanguageSwitcher() {
  const {language, setLanguage, content} = useLanguage()

  return (
    <div className={styles.container}>
      <Globe className={styles.icon} />
      <span className={styles.text}>{content.switcher_text}:</span>
      <nav className={styles.buttons}>
        {content.language_labels.map((lang: LanguageLabel, index: number) => {
          return (
            <button
              key={index}
              onClick={() => setLanguage(lang.value)}
              className={`${styles.button} ${
                language === lang.value ? styles.active : ''
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
