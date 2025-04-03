import {ExternalLink} from 'lucide-react'
import {useLanguage} from '../context/language-context'
import styles from './ResumeProjects.module.css'

export default function ResumeProjects() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.projects_title}</h2>

      <div>
        {content.projects.map((project, index) => (
          <div
            key={index}
            className={styles.project}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>{project.title}</h3>
              {project.link && (
                <a
                  href={`//${project.link}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ExternalLink className={styles.icon} />
                </a>
              )}
            </div>
            <div className={styles.technologies}>
              {project.technologies?.map((technology, index) => (
                <span
                  className={styles.chip}
                  key={index}
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className={styles.description}>
              <p>{project.description}</p>
              <p className={styles.features}>
                <span>{`${content.projects_subtitle}: `}</span>
                {project.features}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
