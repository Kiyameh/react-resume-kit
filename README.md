# React Resume Kit

<br/>
<br/>
<div align="center">
  <img src="https://github.com/Kiyameh/react-resume-kit/blob/main/public/logo.png" alt="React Resume Kit Logo" width="300"/>
</div>
<br/>
<br/>

A modern, customizable React component for creating beautiful and professional resumes or curriculum for your website. Built with TypeScript.

## Live Demo

Check out the live demo at [https://react-resume-kit.vercel.app/](https://react-resume-kit.vercel.app/)

## Features

- 🌐 Multi-language support
- 📄 PDF download functionality
- 🎨 Customizable themes
- 🎯 Icon support (any React element, recommended Lucide Icons, Simple Icons, etc.)
- ⚡ Easy to configure and integrate
- 📱 Responsive design
- 🎨 Modern and clean UI

## Installation

```bash
npm install react-resume-kit
```

## Quick Start

```tsx
import {ResumeLayout, ResumeHeader} from 'react-resume-kit'
import {content} from './your-content-file'

function App() {
  return(
    <ResumeLayout resumeContent={content}>
      <ResumeHeader />
    </ResumeLayout>
  )
}
```

## Configuration

STEP1: Add the ResumeLayout component by wrapping one or more of the following:

```tsx
 <ResumeHeader/>
 <ResumeAbout/>
 <ResumeWorks/>
 <ResumeCourses/>
 <ResumeTechnologies/>
 <ResumeSoftSkills/>
 <ResumeProjects/>
 <ResumeContact/>
```

STEP2: You can add the following props to ResumeLayout component:

- initialLanguage="es"
- resumeContent={content}
- enableLanguageSwitch
- enablePdfDownload

STEP3: Copy the data/exampleContent file that contains all the resume data. Update it. The content should follow this structure:

```typescript
import { ReactElement } from 'react'

type ResumeContent = {
  // One for each language
  en: {
    // Section names
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

    // Language switcher
    switcher_text: string
    language_labels: Array<{label: string; value: string}>

    // Header
    name: string
    title: string
    email: string
    phone: string
    location: string
    picture?: string

    // About
    about_text: string

    // Experience
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
      features: string
      technologies: string[]
      link?: string
    }>

    // Footer
    author: string
    socialLinks: Array<{
      name: string
      icon: ReactElement
      url: string
    }>
  }
}
```

### Example usage for technologies

```tsx
import { SiReact, SiTypescript } from '@icons-pack/react-simple-icons';

const content = {
  en: {
    // ...
    technologies: [
      { name: 'React', icon: <SiReact /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      // ...
    ],
    // ...
  },
  // ...
}
```

---

## Icons

The component supports any React element as an icon. You can use icons from any library, such as [Simple Icons](https://simpleicons.org) or [Lucide Icons](https://lucide.dev/), by importing the icon component and passing it directly:

```tsx
import { SiReact } from '@icons-pack/react-simple-icons';

// ...
technologies: [
  { name: 'React', icon: <SiReact /> },
  // ...
]
```

You are responsible for importing and rendering the icon you want. The component will automatically inject the necessary CSS class for consistent styling.

---

## Language Support

The component supports multiple languages. You need to provide the content for each language in the content object:

```typescript
const content = {
  en: {
    /* English content */
  },
  es: {
    /* Spanish content */
  },
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT

## Author

Andoni Gallardo
