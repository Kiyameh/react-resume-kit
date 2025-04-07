import React from 'react'
import {ExternalLink} from 'lucide-react'
import {useLanguage} from '../../context/language-context'
import './ResumeProjects.css'

export default function ResumeProjects() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.projects_title}</h2>

      <div>
        {content.projects.map((project, index) => (
          <div
            key={index}
            className="resume-projects-project"
          >
            <div className="resume-projects-header">
              <h3 className="resume-projects-title">{project.title}</h3>
              {project.link && (
                <a
                  href={`//${project.link}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <ExternalLink className="resume-projects-icon" />
                </a>
              )}
            </div>
            <div className="resume-projects-technologies">
              {project.technologies?.map((technology, index) => (
                <span
                  className="resume-projects-chip"
                  key={index}
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="resume-projects-description">
              <p>{project.description}</p>
              <p className="resume-projects-features">
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
