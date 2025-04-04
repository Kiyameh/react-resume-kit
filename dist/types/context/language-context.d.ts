import React from 'react';
import { Language, ResumeContent } from '../types';
interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    content: ResumeContent;
}
export declare const LanguageContext: React.Context<LanguageContextType | undefined>;
export declare function useLanguage(): LanguageContextType;
export {};
