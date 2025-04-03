import {InfoIcon} from 'lucide-react'
import {useLanguage} from '../context/language-context'
import styles from './ResumeAbout.module.css'

export default function ResumeAbout() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.about_title}</h2>
      <div className={styles.card}>
        <InfoIcon className={styles.icon} />
        <p className={styles.text}>{content.about_text}</p>
      </div>
    </section>
  )
}
