import React from 'react'
import {useLanguage} from '../../context/language-context'
import './ResumeCourses.css'
import '../common.css'

export default function ResumeCourses() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.courses_title}</h2>
      {content.courses.map((course, index) => {
        return (
          <div
            key={index}
            className="resume-courses-course"
          >
            <div>
              <h3 className="resume-courses-degree">{course.degree}</h3>
              <p className="resume-courses-school">{course.school}</p>
            </div>
            <p className="dateChip">{course.date}</p>
          </div>
        )
      })}
    </section>
  )
}
