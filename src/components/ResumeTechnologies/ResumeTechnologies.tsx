import React, { isValidElement, cloneElement } from 'react'
import {useLanguage} from '../../context/language-context'
import './ResumeTechnologies.css'
import {ResumeContent} from '../../types/types'

export default function ResumeTechnologies() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.techs_title}</h2>
      <div className="resume-technologies-container">
        {content.technologies.map((tech: ResumeContent['technologies'][number], index: number) => (
          <div
            key={index}
            className="resume-technologies-chip"
          >
            {isValidElement(tech.icon)
              ? cloneElement(tech.icon as React.ReactElement<any>, {
                  className: [((tech.icon as React.ReactElement<any>).props.className), 'resume-technologies-icon'].filter(Boolean).join(' ')
                })
              : tech.icon}
            <span className="resume-technologies-text">{tech.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
