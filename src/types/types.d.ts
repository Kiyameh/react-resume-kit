import {suportedLanguages} from '../data/exampleContent'
import * as LucideIcons from 'lucide-react'
import * as SimpleIcons from '@icons-pack/react-simple-icons'

export type LucideIconName = keyof typeof LucideIcons
export type SimpleIconName = keyof typeof SimpleIcons
export type IconName = SimpleIconName | LucideIconName

export type Language = (typeof suportedLanguages)[number]

type LanguageLabel = {
  value: Language
  label: string
}

interface WorkItem {
  title: string
  company: string
  date: string
  location: string
  points: string[]
}

interface CourseItem {
  degree: string
  school: string
  date: string
}

interface ProjectItem {
  title: string
  description: string
  technologies?: string[]
  features?: string
  link?: string
}

interface SoftSkillItem {
  title: string
  description: string
  icon: LucideIconName
}

interface TechItem {
  name: string
  icon: SimpleIconName
}

interface SocialLink {
  name: string
  icon: IconName
  url: string
}

export interface ResumeContent {
  // Sections
  about_title: string
  works_title: string
  courses_title: string
  techs_title: string
  soft_skills_title: string
  soft_skills_subtitle: string
  projects_title: string
  projects_subtitle: string
  connect_title: string

  // Download button text
  download_pdf: string

  // Language switcher text
  switcher_text: string
  language_labels: LanguageLabel[]

  // Header
  name: string
  title: string
  email?: string
  phone?: string
  location?: string
  picture?: string

  // About
  about_text: string

  // Work experience
  works: WorkItem[]

  // Courses
  courses: CourseItem[]

  // Technologies
  technologies: TechItem[]

  // Soft Skills
  soft_skills: SoftSkillItem[]

  // Projects
  projects: ProjectItem[]

  // Footer
  author?: string
  social_links: SocialLink[]
}

export type Content = Record<Language, ResumeContent>
