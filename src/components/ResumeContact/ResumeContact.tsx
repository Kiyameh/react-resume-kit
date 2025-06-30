import React from 'react'
import './ResumeContact.css'
import * as SimpleIcons from '@icons-pack/react-simple-icons'
import * as LucideIcons from 'lucide-react'
import {useLanguage} from '../../context/language-context'
import {ResumeContent} from '../../types/types'

export default function ResumeContact() {
  const {content} = useLanguage()
  return (
    <section>
      <h2>{content.connect_title}</h2>
      <div className="resume-contact-socialButtons">
        {content.social_links.map(
          (link: ResumeContent['social_links'][number], index: number) => (
            <a
              key={index}
              href={`//${link.url}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              <div className="resume-contact-button">
                {link.icon}
              </div>
              <div className="resume-contact-url">
                {link.icon}
                <span>{link.url}</span>
              </div>
            </a>
          )
        )}
      </div>
      <p className="resume-contact-atribution">
        <span>
          {new Date().getFullYear()} {content.author}
        </span>
        <a
          href="https://opensource.org/license/mit"
          target="_blank"
          rel="noreferrer noopener"
        >
          MIT License
          <SimpleIcons.SiOpensourceinitiative className="resume-contact-icon" />
        </a>
      </p>
      <p className="resume-contact-atribution">
        <span>This resume was built with React.</span>
        <a
          className="resume-contact-github"
          href="https://github.com/Kiyameh/react-resume-kit"
        >
          <span> You can fork it here</span>
          <LucideIcons.GitFork className="resume-contact-icon" />
        </a>
      </p>
    </section>
  )
}
