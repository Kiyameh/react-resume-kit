import React from "react";
import "./ResumeHeader.css";
import { useLanguage } from "../../context/language-context";

export default function ResumeHeader() {
  const { content } = useLanguage();
  return (
    <header className="rrk-header-layout">
      <div className="rrk-header-profile">
        {content.picture && (
          <div className="rrk-header-picture">
            <img
              src={content.picture}
              alt="Profile photo"
              className="rrk-header-image"
            />
          </div>
        )}
        <div>
          <h1 className="rrk-header-name">{content.name}</h1>
          <p className="rrk-header-title">{content.title}</p>
        </div>
      </div>
      <div className="rrk-header-contact">
        <div className="rrk-header-contactItem">
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
            className="rrk-header-icon"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <a href={`mailto:${content.email}`}>{content.email}</a>
        </div>
        <div className="rrk-header-contactItem">
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
            className="rrk-header-icon"
          >
            <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
          </svg>
          <a href={`tel:${content.phone}`}>{content.phone}</a>
        </div>
        <div className="rrk-header-contactItem">
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
            className="rrk-header-icon"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{content.location}</span>
        </div>
      </div>
    </header>
  );
}
