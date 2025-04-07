import React from 'react'
import {useLanguage} from '../../context/language-context'
import './ResumeWorks.css'
import '../common.css'
import {ResumeContent} from '../../types/types'

export default function ResumeWorks() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.works_title}</h2>
      <div>
        {content.works.map(
          (work: ResumeContent['works'][number], index: number) => {
            return (
              <div
                key={index}
                className="resume-works-work"
              >
                <div className="resume-works-workHeader">
                  <div className="resume-works-leftHeader">
                    <h3 className="resume-works-title">{work.title}</h3>
                    <p className="resume-works-company">{work.company}</p>
                  </div>
                  <div className="resume-works-rightHeader">
                    <p className="dateChip">{work.date}</p>
                    <p className="resume-works-location">{work.location}</p>
                  </div>
                </div>

                <ul className="resume-works-points">
                  {work.points.map(
                    (
                      point: ResumeContent['works'][number]['points'][number],
                      index: number
                    ) => {
                      return <li key={index}>{point}</li>
                    }
                  )}
                </ul>
              </div>
            )
          }
        )}
      </div>
    </section>
  )
}
