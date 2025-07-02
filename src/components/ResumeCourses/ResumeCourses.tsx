import React from "react";
import { useLanguage } from "../../context/language-context";
import "./ResumeCourses.css";

export default function ResumeCourses() {
  const { content } = useLanguage();

  return (
    <section>
      <h2>{content.courses_title}</h2>
      {content.courses.map((course, index) => {
        return (
          <div key={index} className="rrk-courses-course">
            <div>
              <h3 className="rrk-courses-degree">{course.degree}</h3>
              <p className="rrk-courses-school">{course.school}</p>
            </div>
            <p className="rrk-dateChip">{course.date}</p>
          </div>
        );
      })}
    </section>
  );
}
