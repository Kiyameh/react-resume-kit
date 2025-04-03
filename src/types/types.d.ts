import type {SimpleIconName} from '../ui/simple-icon'
import type {LucideIconName} from '../ui/lucide-icon'
import {suportedLanguages} from '../data/content'

export type Language = (typeof suportedLanguages)[number]

export type LanguageLabel = {
  value: Language
  label: string
}

export interface WorkItem {
  title: string
  company: string
  date: string
  location: string
  points: string[]
}

export interface CourseItem {
  degree: string
  school: string
  date: string
}

export interface ProjectItem {
  title: string
  description: string
  technologies?: string[]
  features?: string
  link?: string
}

export interface SoftSkillItem {
  title: string
  description: string
  icon: LucideIconName
}

export interface TechItem {
  name: string
  icon: SimpleIconName
}

export interface SocialLink {
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
