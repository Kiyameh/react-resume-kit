import styles from './ResumeHeader.module.css'
import {useLanguage} from '../context/language-context'
import {Mail, MapPin, Phone} from 'lucide-react'

export default function ResumeHeader() {
  const {content} = useLanguage()
  return (
    <header className={styles.header}>
      <div className={styles.profile}>
        {content.picture && (
          <div className={styles.picture}>
            <img
              src={content.picture}
              alt="Profile photo"
              className={styles.image}
            />
          </div>
        )}
        <div>
          <h1 className={styles.name}>{content.name}</h1>
          <p className={styles.title}>{content.title}</p>
        </div>
      </div>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <Mail className={styles.icon} />
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className={styles.contactItem}>
          <Phone className={styles.icon} />
          <a href={`tel:${content.phone}`}>{content.phone}</a>
        </div>
        <div className={styles.contactItem}>
          <MapPin className={styles.icon} />
          <span>{content.location}</span>
        </div>
      </div>
    </header>
  )
}
