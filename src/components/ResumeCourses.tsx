import {useLanguage} from '../context/language-context'
import styles from './ResumeCourses.module.css'
import component from './Common.module.css'

export default function ResumeCourses() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.courses_title}</h2>
      {content.courses.map((course, index) => {
        return (
          <div
            key={index}
            className={styles.course}
          >
            <div>
              <h3 className={styles.degree}>{course.degree}</h3>
              <p className={styles.school}>{course.school}</p>
            </div>
            <p className={component.dateChip}>{course.date}</p>
          </div>
        )
      })}
    </section>
  )
}
