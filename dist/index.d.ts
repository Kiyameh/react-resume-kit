import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';
import * as LucideIcons from 'lucide-react';
import * as SimpleIcons from '@icons-pack/react-simple-icons';

declare const suportedLanguages: readonly ["en", "es"];

type LucideIconName = keyof typeof LucideIcons
type SimpleIconName = keyof typeof SimpleIcons
type IconName = SimpleIconName | LucideIconName

type Language = (typeof suportedLanguages)[number]

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

interface ResumeContent {
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

type Content = Record<Language, ResumeContent>

interface ResumeProps {
    resumeContent: Record<Language, ResumeContent>;
    initialLanguage?: Language;
    enableLanguageSwitch?: boolean;
    enablePdfDownload?: boolean;
    children: React.ReactNode;
}
declare function ResumeLayout({ initialLanguage, resumeContent, enableLanguageSwitch, enablePdfDownload, children, }: ResumeProps): react_jsx_runtime.JSX.Element;

declare function ResumeHeader(): react_jsx_runtime.JSX.Element;

declare function ResumeAbout(): react_jsx_runtime.JSX.Element;

declare function ResumeWorks(): react_jsx_runtime.JSX.Element;

declare function ResumeCourses(): react_jsx_runtime.JSX.Element;

declare function ResumeTechnologies(): react_jsx_runtime.JSX.Element;

declare function ResumeSoftSkills(): react_jsx_runtime.JSX.Element;

declare function ResumeProjects(): react_jsx_runtime.JSX.Element;

declare function ResumeContact(): react_jsx_runtime.JSX.Element;

export { type Content, type IconName, type Language, type LucideIconName, ResumeAbout, ResumeContact, ResumeCourses, ResumeHeader, ResumeLayout, ResumeProjects, ResumeSoftSkills, ResumeTechnologies, ResumeWorks, type SimpleIconName };
