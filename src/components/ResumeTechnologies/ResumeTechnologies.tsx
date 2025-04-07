import React from 'react'
import {SVGProps} from 'react'
import {useLanguage} from '../../context/language-context'
import './ResumeTechnologies.css'
import * as SimpleIcons from '@icons-pack/react-simple-icons'
import {ResumeContent, SimpleIconName} from '../../types/types'

export default function ResumeTechnologies() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.techs_title}</h2>
      <div className="resume-technologies-container">
        {content.technologies.map(
          (tech: ResumeContent['technologies'][number], index: number) => {
            const IconComponent = SimpleIcons[
              tech.icon as SimpleIconName
            ] as React.ComponentType<SVGProps<SVGSVGElement>>
            return (
              <div
                key={index}
                className="resume-technologies-chip"
              >
                <IconComponent className="resume-technologies-icon" />
                <span className="resume-technologies-text">{tech.name}</span>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}
