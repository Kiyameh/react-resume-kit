import React from "react";
import "./../reset.css";
import "./../common.css";
import "./../theme.css";

import "./ResumeLayout.css";
import { LanguageContext } from "../../context/language-context";
import { Language, ResumeContent } from "../../types/types";
import Toolbar from "../Toolbar/Toolbar";

export interface ResumeProps {
  resumeContent: Record<Language, ResumeContent>;
  initialLanguage?: Language;
  enableLanguageSwitch?: boolean;
  enablePdfDownload?: boolean;
  children: React.ReactNode;
}

export default function ResumeLayout({
  initialLanguage = "en",
  resumeContent,
  enableLanguageSwitch,
  enablePdfDownload,
  children,
}: ResumeProps) {
  const [language, setLanguage] = React.useState<Language>(initialLanguage);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, content: resumeContent[language] }}
    >
      <main className="rrk-resume">
        {children}
        <Toolbar
          enableLanguageSwitch={enableLanguageSwitch}
          enablePdfDownload={enablePdfDownload}
        />
      </main>
    </LanguageContext.Provider>
  );
}
