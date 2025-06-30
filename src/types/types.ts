import * as LucideIcons from 'lucide-react'
import * as SimpleIcons from '@icons-pack/react-simple-icons'
import { ReactNode, ReactElement } from 'react'

export type LucideIconName = keyof typeof LucideIcons
export type SimpleIconName = keyof typeof SimpleIcons
export type IconName = SimpleIconName | LucideIconName

export const suportedLanguages = ['en', 'es'] as const

export type Language = (typeof suportedLanguages)[number]

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
  language_labels: Array<{
    value: Language
    label: string
  }>

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
  works: Array<{
    title: string
    company: string
    date: string
    location: string
    points: string[]
  }>

  // Courses
  courses: Array<{
    degree: string
    school: string
    date: string
  }>

  // Technologies
  technologies: Array<{
    name: string
    icon: ReactElement
  }>

  // Soft Skills
  soft_skills: Array<{
    title: string
    description: string
    icon: ReactElement
  }>

  // Projects
  projects: Array<{
    title: string
    description: string
    technologies?: string[]
    features?: string
    link?: string
  }>

  // Footer
  author?: string
  social_links: Array<{
    name: string
    icon: ReactElement
    url: string
  }>
}

export type Content = Record<Language, ResumeContent>
