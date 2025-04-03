import {SVGProps} from 'react'
import {useLanguage} from '../context/language-context'
import styles from './ResumeSoftSkills.module.css'
import * as LucideIcons from 'lucide-react'
import {LucideIconName} from '../types/types'

export default function ResumeSoftSkills() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.soft_skills_title}</h2>
      <h3 className={styles.subtitle}>{content.soft_skills_subtitle}</h3>

      <div className={styles.container}>
        {content.soft_skills.map((skill, index) => {
          const IconComponent = LucideIcons[
            skill.icon as LucideIconName
          ] as React.ComponentType<SVGProps<SVGSVGElement>>

          return (
            <div
              key={index}
              className={styles.skill}
            >
              <IconComponent className={styles.icon} />
              <div>
                <p className={styles.skillTitle}>{skill.title}</p>
                <p className={styles.skillDescription}>{skill.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
