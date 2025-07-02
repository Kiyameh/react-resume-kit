import React from "react";
import { useLanguage } from "../../context/language-context";
import "./ResumeProjects.css";

export default function ResumeProjects() {
  const { content } = useLanguage();
  return (
    <section>
      <h2>{content.projects_title}</h2>

      <div>
        {content.projects.map((project, index) => (
          <div key={index} className="rrk-projects-card">
            <div className="rrk-projects-header">
              <h3 className="rrk-projects-title">{project.title}</h3>
              {project.link && (
                <a
                  href={`//${project.link}`}
                  target="_blank"
                  rel="noreferrer noopener"
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
                    className="rrk-projects-icon"
                  >
                    <path d="M15 3h6v6" />
                    <path d="M10 14 21 3" />
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  </svg>
                  <p className="rrk-projects-link">{project.link}</p>
                </a>
              )}
            </div>
            <div className="rrk-projects-technologies">
              {project.technologies?.map((technology, index) => (
                <span className="rrk-projects-chip" key={index}>
                  {technology}
                </span>
              ))}
            </div>
            <div className="rrk-projects-description">
              <p>{project.description}</p>
              <p className="rrk-projects-features">
                <span>{`${content.projects_subtitle}: `}</span>
                {project.features}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
