import React, {useState} from 'react'
import {Github, Package, ChevronUp, ChevronDown} from 'lucide-react'
import styles from './PackageLinks.module.css'

interface PackageLinksProps {
  npmUrl: string
  githubUrl: string
  packageName: string
}

export default function PackageLinks({
  npmUrl,
  githubUrl,
  packageName,
}: PackageLinksProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  return (
    <div
      className={`${styles.container} ${!isExpanded ? styles.collapsed : ''}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.toggleButton}
      >
        <Package size={18} />
        <span className={styles.packageName}>{packageName}</span>
        {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </button>

      <div className={styles.content}>
        <p className={styles.description}>Get this package from:</p>

        <div className={styles.linkContainer}>
          <a
            href={npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.npmLink}`}
          >
            <Package size={16} />
            <span>Npm</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.githubLink}`}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  )
}
