import React from 'react'
import {SVGProps} from 'react'
import {useLanguage} from '../../context/language-context'
import './ResumeSoftSkills.css'
import * as LucideIcons from 'lucide-react'
import {LucideIconName, ResumeContent} from '../../types/types'

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
          (skill: ResumeContent['soft_skills'][number], index: number) => {
            const IconComponent = LucideIcons[
              skill.icon as LucideIconName
            ] as React.ComponentType<SVGProps<SVGSVGElement>>

            return (
              <div
                key={index}
                className="resume-soft-skills-skill"
              >
                <IconComponent className="resume-soft-skills-icon" />
                <div>
                  <p className="resume-soft-skills-skillTitle">{skill.title}</p>
                  <p className="resume-soft-skills-skillDescription">
                    {skill.description}
                  </p>
                </div>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}
