import {
  ResumeLayout,
  ResumeHeader,
  ResumeAbout,
  ResumeContact,
  ResumeProjects,
  ResumeTechnologies,
  ResumeSoftSkills,
  ResumeCourses,
} from 'react-resume-kit'
import './App.css'

import {content} from './data/exampleContent'
import PackageLinks from './PackageLinks/PackageLinks'
function App() {
  return (
    <div className="frame">
      <ResumeLayout
        resumeContent={content}
        initialLanguage="en"
        enableLanguageSwitch={true}
        enablePdfDownload={true}
      >
        <ResumeHeader />
        <ResumeAbout />
        <ResumeContact />
        <ResumeProjects />
        <ResumeTechnologies />
        <ResumeSoftSkills />
        <ResumeCourses />
      </ResumeLayout>
      <PackageLinks
        npmUrl="https://www.npmjs.com/package/react-resume-kit"
        githubUrl="https://github.com/Kiyameh/react-resume-kit"
        packageName="react-resume-kit"
      />
      <img
        className="background"
        src="/background.svg"
        alt=""
      />
    </div>
  )
}

export default App
