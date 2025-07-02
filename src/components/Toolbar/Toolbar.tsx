import React from "react";
import "./Toolbar.css";
import { ResumeContent } from "../../types/types";
import { useToolbar } from "../../hooks/useToolbar";

export default function Toolbar({
  enableLanguageSwitch,
  enablePdfDownload,
}: {
  enableLanguageSwitch: boolean;
  enablePdfDownload: boolean;
}) {
  const {
    handlePrint,
    handleLanguageSelect,
    handleLanguageButtonClick,
    isLanguageMenuOpen,
    isMounted,
    content,
    languageLabels,
    isLanguageActive,
  } = useToolbar();

  return (
    <nav className="rrk-toolbar">
      {/* Download button */}
      {enablePdfDownload && (
        <button onClick={handlePrint} className="rrk-download-button">
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
            className="rrk-download-button-icon"
          >
            <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
            <path d="M14 2v4a2 2 0 0 0 2 2h4" />
            <path d="M12 18v-6" />
            <path d="m9 15 3 3 3-3" />
          </svg>
          <span className="rrk-download-button-text">Pdf</span>
        </button>
      )}
      {/* Language switcher */}
      {enableLanguageSwitch && (
        <button
          className={`rrk-language-switcher ${
            isLanguageMenuOpen ? "active" : ""
          }`}
          onClick={handleLanguageButtonClick}
        >
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
            className="rrk-language-switcher-icon"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          <span className="rrk-language-switcher-text">
            {content.switcher_text}
          </span>

          <nav
            className={`rrk-language-switcher-buttons ${
              isMounted && isLanguageMenuOpen ? "open" : ""
            }`}
          >
            {languageLabels.map(
              (
                lang: ResumeContent["language_labels"][number],
                index: number
              ) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleLanguageSelect(lang.value)}
                    className={`language-switcher-button ${
                      isLanguageActive(lang.value)
                        ? "language-switcher-active"
                        : ""
                    }`}
                  >
                    {lang.label}
                  </button>
                );
              }
            )}
          </nav>
        </button>
      )}
    </nav>
  );
}
