import React from 'react'
import {
  ResumeLayout,
  ResumeHeader,
  ResumeAbout,
  ResumeCourses,
  ResumeWorks,
  ResumeProjects,
  ResumeSoftSkills,
  ResumeTechnologies,
  ResumeContact,
} from 'react-resume-kit'
import {content} from '../data/content'

export default function Resume() {
  return (
    <ResumeLayout
      resumeContent={content}
      initialLanguage="en"
      enableLanguageSwitch={true}
      enablePdfDownload={true}
    >
      <ResumeHeader />
      <ResumeAbout />
      <ResumeWorks />
      <ResumeCourses />
      <ResumeTechnologies />
      <ResumeSoftSkills />
      <ResumeProjects />
      <ResumeContact />
    </ResumeLayout>
  )
}
