import React from 'react'
import './ResumeHeader.css'
import {useLanguage} from '../../context/language-context'
import {Mail, MapPin, Phone} from 'lucide-react'

export default function ResumeHeader() {
  const {content} = useLanguage()
  return (
    <header className="resume-header-header">
      <div className="resume-header-profile">
        {content.picture && (
          <div className="resume-header-picture">
            <img
              src={content.picture}
              alt="Profile photo"
              className="resume-header-image"
            />
          </div>
        )}
        <div>
          <h1 className="resume-header-name">{content.name}</h1>
          <p className="resume-header-title">{content.title}</p>
        </div>
      </div>
      <div className="resume-header-contact">
        <div className="resume-header-contactItem">
          <Mail className="resume-header-icon" />
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className="resume-header-contactItem">
          <Phone className="resume-header-icon" />
          <a href={`tel:${content.phone}`}>{content.phone}</a>
        </div>
        <div className="resume-header-contactItem">
          <MapPin className="resume-header-icon" />
          <span>{content.location}</span>
        </div>
      </div>
    </header>
  )
}
