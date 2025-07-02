import React, { isValidElement, cloneElement } from "react";
import "./ResumeTechnologies.css";
import { useLanguage } from "../../context/language-context";
import { ResumeContent } from "../../types/types";

export default function ResumeTechnologies() {
  const { content } = useLanguage();
  return (
    <section>
      <h2>{content.techs_title}</h2>
      <div className="rrk-technologies-container">
        {content.technologies.map(
          (tech: ResumeContent["technologies"][number], index: number) => (
            <div key={index} className="rrk-technologies-chip">
              {isValidElement(tech.icon)
                ? cloneElement(tech.icon as React.ReactElement<any>, {
                    className: [
                      (tech.icon as React.ReactElement<any>).props.className,
                      "rrk-technologies-icon",
                    ]
                      .filter(Boolean)
                      .join(" "),
                  })
                : tech.icon}
              <span className="rrk-technologies-text">{tech.name}</span>
            </div>
          )
        )}
      </div>
    </section>
  );
}
