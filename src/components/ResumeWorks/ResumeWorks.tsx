import React from "react";
import "./ResumeWorks.css";
import { useLanguage } from "../../context/language-context";
import { ResumeContent } from "../../types/types";

export default function ResumeWorks() {
  const { content } = useLanguage();

  return (
    <section>
      <h2>{content.works_title}</h2>
      <div>
        {content.works.map(
          (work: ResumeContent["works"][number], index: number) => {
            return (
              <div key={index} className="rrk-works-work">
                <div className="rrk-works-workHeader">
                  <div className="rrk-works-leftHeader">
                    <h3 className="rrk-works-title">{work.title}</h3>
                    <p className="rrk-works-company">{work.company}</p>
                  </div>
                  <div className="rrk-works-rightHeader">
                    <p className="rrk-dateChip">{work.date}</p>
                    <p className="rrk-works-location">{work.location}</p>
                  </div>
                </div>

                <ul className="rrk-works-points">
                  {work.points.map(
                    (
                      point: ResumeContent["works"][number]["points"][number],
                      index: number
                    ) => {
                      return <li key={index}>{point}</li>;
                    }
                  )}
                </ul>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
