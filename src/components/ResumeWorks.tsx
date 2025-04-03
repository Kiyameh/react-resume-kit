import {useLanguage} from '../context/language-context'
import styles from './ResumeWorks.module.css'
import component from './Common.module.css'

export default function ResumeWorks() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.works_title}</h2>
      <div>
        {content.works.map((work, index) => {
          return (
            <div
              key={index}
              className={styles.work}
            >
              <div className={styles.workHeader}>
                <div className={styles.leftHeader}>
                  <h3 className={styles.title}>{work.title}</h3>
                  <p className={styles.company}>{work.company}</p>
                </div>
                <div className={styles.rightHeader}>
                  <p className={component.dateChip}>{work.date}</p>
                  <p className={styles.location}>{work.location}</p>
                </div>
              </div>

              <ul className={styles.points}>
                {work.points.map((point, index) => {
                  return <li key={index}>{point}</li>
                })}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}
