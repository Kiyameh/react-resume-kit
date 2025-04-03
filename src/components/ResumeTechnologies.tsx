import {SVGProps} from 'react'
import {useLanguage} from '../context/language-context'
import styles from './ResumeTechnologies.module.css'
import * as SimpleIcons from '@icons-pack/react-simple-icons'

type SympleIconName = keyof typeof SimpleIcons

export default function ResumeTechnologies() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.techs_title}</h2>
      <div className={styles.techContainer}>
        {content.technologies.map((tech, index) => {
          const IconComponent = SimpleIcons[
            tech.icon as SympleIconName
          ] as React.ComponentType<SVGProps<SVGSVGElement>>
          return (
            <div
              key={index}
              className={styles.techChip}
            >
              <IconComponent className={styles.icon} />
              <span className={styles.text}>{tech.name}</span>
            </div>
          )
        })}
      </div>
    </section>
  )
}
