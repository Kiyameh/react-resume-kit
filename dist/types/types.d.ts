import { ReactElement } from 'react';
import * as LucideIcons from 'lucide-react';
import * as SimpleIcons from '@icons-pack/react-simple-icons';
export type LucideIconName = keyof typeof LucideIcons;
export type SimpleIconName = keyof typeof SimpleIcons;
export type IconName = SimpleIconName | LucideIconName;
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
        icon: LucideIconName;
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
        icon: IconName;
        url: string;
    }>;
}
export type Content = Record<Language, ResumeContent>;
