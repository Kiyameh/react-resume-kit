import React from "react";
import "./ResumeAbout.css";
import { useLanguage } from "../../context/language-context";

export default function ResumeAbout() {
  const { content } = useLanguage();

  return (
    <section>
      <h2>{content.about_title}</h2>
      <div className="rrk-about-card">
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
          className="rrk-about-icon"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
        <p className="rrk-about-text">{content.about_text}</p>
      </div>
    </section>
  );
}
