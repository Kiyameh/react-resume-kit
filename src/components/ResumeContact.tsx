import styles from './ResumeContact.module.css'
import {useLanguage} from '../context/language-context'
import * as SimpleIcons from '@icons-pack/react-simple-icons'
import * as LucideIcons from 'lucide-react'

const icons = {
  ...SimpleIcons,
  ...LucideIcons,
}

import {SVGProps} from 'react'

type SympleIconName = keyof typeof SimpleIcons
type LucideIconName = keyof typeof LucideIcons
export type IconName = SympleIconName | LucideIconName

export default function ResumeContact() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.connect_title}</h2>
      <div className={styles.socialButtons}>
        {content.social_links.map((link, index) => {
          const IconComponent = icons[
            link.icon as IconName
          ] as React.ComponentType<SVGProps<SVGSVGElement>>

          return (
            <a
              key={index}
              href={`//${link.url}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className={styles.button}>
                <IconComponent className={styles.bigIcon} />
              </div>
              <div className={styles.url}>
                <IconComponent className={styles.icon} />
                <span>{link.url}</span>
              </div>
            </a>
          )
        })}
      </div>
      <p className={styles.atribution}>
        <span>
          {new Date().getFullYear()} {content.author}
        </span>
        <a
          href="https://opensource.org/license/mit"
          target="_blank"
          rel="noreferrer noopener"
        >
          MIT License
          <SimpleIcons.SiOpensourceinitiative className={styles.icon} />
        </a>
      </p>
      <p className={styles.atribution}>
        <span>This resume was built with React.</span>
        <a
          className={styles.github}
          href="https://github.com/Kiyameh/react-resume-kit"
        >
          <span> You can fork it here</span>
          <LucideIcons.GitFork className={styles.icon} />
        </a>
      </p>
    </section>
  )
}
