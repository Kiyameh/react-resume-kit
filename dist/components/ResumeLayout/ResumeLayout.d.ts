import { default as React } from 'react';
import { Language, ResumeContent } from '../../types/types';
export interface ResumeProps {
    resumeContent: Record<Language, ResumeContent>;
    initialLanguage?: Language;
    enableLanguageSwitch?: boolean;
    enablePdfDownload?: boolean;
    children: React.ReactNode;
}
export default function ResumeLayout({ initialLanguage, resumeContent, enableLanguageSwitch, enablePdfDownload, children, }: ResumeProps): React.JSX.Element;
