import React from 'react'
import {InfoIcon} from 'lucide-react'
import {useLanguage} from '../../context/language-context'
import './ResumeAbout.css'

export default function ResumeAbout() {
  const {content} = useLanguage()

  return (
    <section>
      <h2>{content.about_title}</h2>
      <div className="resume-about-card">
        <InfoIcon className="resume-about-icon" />
        <p className="resume-about-text">{content.about_text}</p>
      </div>
    </section>
  )
}
