import React from "react";
import "./LanguageSwitcher.css";
import { useLanguage } from "../../context/language-context";
import { ResumeContent } from "../../types/types";

export default function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();

  return (
    <div className="language-switcher-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="language-switcher-icon"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
      <span className="language-switcher-text">{content.switcher_text}:</span>
      <nav className="language-switcher-buttons">
        {content.language_labels.map(
          (lang: ResumeContent["language_labels"][number], index: number) => {
            return (
              <button
                key={index}
                onClick={() => setLanguage(lang.value)}
                className={`language-switcher-button ${
                  language === lang.value ? "language-switcher-active" : ""
                }`}
              >
                {lang.label}
              </button>
            );
          }
        )}
      </nav>
    </div>
  );
}
