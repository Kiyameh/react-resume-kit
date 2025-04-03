import './App.css'
import ResumeAbout from './components/ResumeAbout'
import ResumeContact from './components/ResumeContact'
import ResumeCourses from './components/ResumeCourses'
import ResumeHeader from './components/ResumeHeader'
import ResumeLayout from './components/ResumeLayout'
import ResumeProjects from './components/ResumeProjects'
import ResumeSoftSkills from './components/ResumeSoftSkills'
import ResumeTechnologies from './components/ResumeTechnologies'
import ResumeWorks from './components/ResumeWorks'

import {content} from './data/exampleContent'
function App() {
  return (
    <div>
      <div className="frame">
        <ResumeLayout
          initialLanguage="es"
          resumeContent={content}
          enableLanguageSwitch
          enablePdfDownload
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
      </div>
      <div className="background" />
    </div>
  )
}

export default App
