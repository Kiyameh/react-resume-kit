import { ReactElement } from 'react';
export declare const suportedLanguages: readonly ["en", "es"];
export type Language = (typeof suportedLanguages)[number];
export interface ResumeContent {
    about_title: string;
    works_title: string;
    courses_title: string;
    techs_title: string;
    soft_skills_title: string;
    soft_skills_subtitle: string;
    projects_title: string;
    projects_subtitle: string;
    connect_title: string;
    download_pdf: string;
    switcher_text: string;
    language_labels: Array<{
        value: Language;
        label: string;
    }>;
    name: string;
    title: string;
    email?: string;
    phone?: string;
    location?: string;
    picture?: string;
    about_text: string;
    works: Array<{
        title: string;
        company: string;
        date: string;
        location: string;
        points: string[];
    }>;
    courses: Array<{
        degree: string;
        school: string;
        date: string;
    }>;
    technologies: Array<{
        name: string;
        icon: ReactElement;
    }>;
    soft_skills: Array<{
        title: string;
        description: string;
        icon: ReactElement;
    }>;
    projects: Array<{
        title: string;
        description: string;
        technologies?: string[];
        features?: string;
        link?: string;
    }>;
    author?: string;
    social_links: Array<{
        name: string;
        icon: ReactElement;
        url: string;
    }>;
}
export type Content = Record<Language, ResumeContent>;
