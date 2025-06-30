import React, { isValidElement, cloneElement } from 'react'
import {useLanguage} from '../../context/language-context'
import './ResumeSoftSkills.css'
import {ResumeContent} from '../../types/types'

export default function ResumeSoftSkills() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.soft_skills_title}</h2>
      <h3 className="resume-soft-skills-subtitle">
        {content.soft_skills_subtitle}
      </h3>

      <div className="resume-soft-skills-container">
        {content.soft_skills.map(
          (skill: ResumeContent['soft_skills'][number], index: number) => (
            <div
              key={index}
              className="resume-soft-skills-skill"
            >
              {isValidElement(skill.icon)
                ? cloneElement(skill.icon as React.ReactElement<any, any>, {
                    className: [
                      (skill.icon as React.ReactElement<any, any>).props.className,
                      'resume-soft-skills-icon'
                    ].filter(Boolean).join(' ')
                  })
                : skill.icon}
              <div>
                <p className="resume-soft-skills-skillTitle">{skill.title}</p>
                <p className="resume-soft-skills-skillDescription">
                  {skill.description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
