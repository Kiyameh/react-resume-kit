import {
  ResumeLayout,
  ResumeHeader,
  ResumeAbout,
  ResumeWorks,
  ResumeCourses,
  ResumeTechnologies,
  ResumeSoftSkills,
  ResumeProjects,
  ResumeContact,
} from 'react-resume-kit'
import './App.css'
import {content} from './data/content'
import PackageLinks from './components/PackageLinks'

function App() {
  return (
    <div className="frame">
      <div>
        <ResumeLayout
          resumeContent={content}
          enableLanguageSwitch
          enablePdfDownload
          initialLanguage="es"
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
