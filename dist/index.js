// src/components/ResumeLayout.tsx
import React2 from "react";

// src/context/language-context.ts
import React from "react";
var LanguageContext = React.createContext(void 0);
function useLanguage() {
  const context = React.useContext(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// src/components/ui/LanguageSwitcher.tsx
import { Globe } from "lucide-react";
import { jsx, jsxs } from "react/jsx-runtime";
function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();
  return /* @__PURE__ */ jsxs("div", { className: "language-switcher-container", children: [
    /* @__PURE__ */ jsx(Globe, { className: "language-switcher-icon" }),
    /* @__PURE__ */ jsxs("span", { className: "language-switcher-text", children: [
      content.switcher_text,
      ":"
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "language-switcher-buttons", children: content.language_labels.map((lang, index) => {
      return /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setLanguage(lang.value),
          className: `language-switcher-button ${language === lang.value ? "language-switcher-active" : ""}`,
          children: lang.label
        },
        index
      );
    }) })
  ] });
}

// src/components/ui/PdfDownloadButton.tsx
import { Download } from "lucide-react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function PdfDownloadButton() {
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ jsxs2(
    "button",
    {
      onClick: handlePrint,
      className: "pdf-download-button",
      children: [
        /* @__PURE__ */ jsx2(Download, { className: "pdf-download-icon" }),
        "Descargar Pdf"
      ]
    }
  );
}

// src/components/ResumeLayout.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
function ResumeLayout({
  initialLanguage = "en",
  resumeContent,
  enableLanguageSwitch,
  enablePdfDownload,
  children
}) {
  const [language, setLanguage] = React2.useState(initialLanguage);
  return /* @__PURE__ */ jsx3(
    LanguageContext.Provider,
    {
      value: { language, setLanguage, content: resumeContent[language] },
      children: /* @__PURE__ */ jsxs3("main", { className: "resume", children: [
        children,
        enablePdfDownload && /* @__PURE__ */ jsx3(PdfDownloadButton, {}),
        enableLanguageSwitch && /* @__PURE__ */ jsx3(LanguageSwitcher, {})
      ] })
    }
  );
}

// src/components/ResumeHeader.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function ResumeHeader() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs4("header", { className: "resume-header-header", children: [
    /* @__PURE__ */ jsxs4("div", { className: "resume-header-profile", children: [
      content.picture && /* @__PURE__ */ jsx4("div", { className: "resume-header-picture", children: /* @__PURE__ */ jsx4(
        "img",
        {
          src: content.picture,
          alt: "Profile photo",
          className: "resume-header-image"
        }
      ) }),
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx4("h1", { className: "resume-header-name", children: content.name }),
        /* @__PURE__ */ jsx4("p", { className: "resume-header-title", children: content.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: "resume-header-contact", children: [
      /* @__PURE__ */ jsxs4("div", { className: "resume-header-contactItem", children: [
        /* @__PURE__ */ jsx4(Mail, { className: "resume-header-icon" }),
        /* @__PURE__ */ jsx4("a", { href: `mailto:${content.email}`, children: content.email })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "resume-header-contactItem", children: [
        /* @__PURE__ */ jsx4(Phone, { className: "resume-header-icon" }),
        /* @__PURE__ */ jsx4("a", { href: `tel:${content.phone}`, children: content.phone })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: "resume-header-contactItem", children: [
        /* @__PURE__ */ jsx4(MapPin, { className: "resume-header-icon" }),
        /* @__PURE__ */ jsx4("span", { children: content.location })
      ] })
    ] })
  ] });
}

// src/components/ResumeAbout.tsx
import { InfoIcon } from "lucide-react";
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function ResumeAbout() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs5("section", { children: [
    /* @__PURE__ */ jsx5("h2", { children: content.about_title }),
    /* @__PURE__ */ jsxs5("div", { className: "resume-about-card", children: [
      /* @__PURE__ */ jsx5(InfoIcon, { className: "resume-about-icon" }),
      /* @__PURE__ */ jsx5("p", { className: "resume-about-text", children: content.about_text })
    ] })
  ] });
}

// src/components/ResumeWorks.tsx
import { jsx as jsx6, jsxs as jsxs6 } from "react/jsx-runtime";
function ResumeWorks() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs6("section", { children: [
    /* @__PURE__ */ jsx6("h2", { children: content.works_title }),
    /* @__PURE__ */ jsx6("div", { children: content.works.map((work, index) => {
      return /* @__PURE__ */ jsxs6(
        "div",
        {
          className: "resume-works-work",
          children: [
            /* @__PURE__ */ jsxs6("div", { className: "resume-works-workHeader", children: [
              /* @__PURE__ */ jsxs6("div", { className: "resume-works-leftHeader", children: [
                /* @__PURE__ */ jsx6("h3", { className: "resume-works-title", children: work.title }),
                /* @__PURE__ */ jsx6("p", { className: "resume-works-company", children: work.company })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: "resume-works-rightHeader", children: [
                /* @__PURE__ */ jsx6("p", { className: "dateChip", children: work.date }),
                /* @__PURE__ */ jsx6("p", { className: "resume-works-location", children: work.location })
              ] })
            ] }),
            /* @__PURE__ */ jsx6("ul", { className: "resume-works-points", children: work.points.map((point, index2) => {
              return /* @__PURE__ */ jsx6("li", { children: point }, index2);
            }) })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeCourses.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "react/jsx-runtime";
function ResumeCourses() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs7("section", { children: [
    /* @__PURE__ */ jsx7("h2", { children: content.courses_title }),
    content.courses.map((course, index) => {
      return /* @__PURE__ */ jsxs7(
        "div",
        {
          className: "resume-courses-course",
          children: [
            /* @__PURE__ */ jsxs7("div", { children: [
              /* @__PURE__ */ jsx7("h3", { className: "resume-courses-degree", children: course.degree }),
              /* @__PURE__ */ jsx7("p", { className: "resume-courses-school", children: course.school })
            ] }),
            /* @__PURE__ */ jsx7("p", { className: "dateChip", children: course.date })
          ]
        },
        index
      );
    })
  ] });
}

// src/components/ResumeTechnologies.tsx
import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function ResumeTechnologies() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs8("section", { children: [
    /* @__PURE__ */ jsx8("h2", { children: content.techs_title }),
    /* @__PURE__ */ jsx8("div", { className: "resume-technologies-container", children: content.technologies.map((tech, index) => {
      const IconComponent = SimpleIcons[tech.icon];
      return /* @__PURE__ */ jsxs8(
        "div",
        {
          className: "resume-technologies-chip",
          children: [
            /* @__PURE__ */ jsx8(IconComponent, { className: "resume-technologies-icon" }),
            /* @__PURE__ */ jsx8("span", { className: "resume-technologies-text", children: tech.name })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeSoftSkills.tsx
import * as LucideIcons from "lucide-react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function ResumeSoftSkills() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs9("section", { children: [
    /* @__PURE__ */ jsx9("h2", { children: content.soft_skills_title }),
    /* @__PURE__ */ jsx9("h3", { className: "resume-soft-skills-subtitle", children: content.soft_skills_subtitle }),
    /* @__PURE__ */ jsx9("div", { className: "resume-soft-skills-container", children: content.soft_skills.map((skill, index) => {
      const IconComponent = LucideIcons[skill.icon];
      return /* @__PURE__ */ jsxs9(
        "div",
        {
          className: "resume-soft-skills-skill",
          children: [
            /* @__PURE__ */ jsx9(IconComponent, { className: "resume-soft-skills-icon" }),
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx9("p", { className: "resume-soft-skills-skillTitle", children: skill.title }),
              /* @__PURE__ */ jsx9("p", { className: "resume-soft-skills-skillDescription", children: skill.description })
            ] })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeProjects.tsx
import { ExternalLink } from "lucide-react";
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function ResumeProjects() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs10("section", { children: [
    /* @__PURE__ */ jsx10("h2", { children: content.projects_title }),
    /* @__PURE__ */ jsx10("div", { children: content.projects.map((project, index) => /* @__PURE__ */ jsxs10(
      "div",
      {
        className: "resume-projects-project",
        children: [
          /* @__PURE__ */ jsxs10("div", { className: "resume-projects-header", children: [
            /* @__PURE__ */ jsx10("h3", { className: "resume-projects-title", children: project.title }),
            project.link && /* @__PURE__ */ jsx10(
              "a",
              {
                href: `//${project.link}`,
                target: "_blank",
                rel: "noreferrer noopener",
                children: /* @__PURE__ */ jsx10(ExternalLink, { className: "resume-projects-icon" })
              }
            )
          ] }),
          /* @__PURE__ */ jsx10("div", { className: "resume-projects-technologies", children: project.technologies?.map((technology, index2) => /* @__PURE__ */ jsx10(
            "span",
            {
              className: "resume-projects-chip",
              children: technology
            },
            index2
          )) }),
          /* @__PURE__ */ jsxs10("div", { className: "resume-projects-description", children: [
            /* @__PURE__ */ jsx10("p", { children: project.description }),
            /* @__PURE__ */ jsxs10("p", { className: "resume-projects-features", children: [
              /* @__PURE__ */ jsx10("span", { children: `${content.projects_subtitle}: ` }),
              project.features
            ] })
          ] })
        ]
      },
      index
    )) })
  ] });
}

// src/components/ResumeContact.tsx
import * as SimpleIcons2 from "@icons-pack/react-simple-icons";
import * as LucideIcons2 from "lucide-react";
import { jsx as jsx11, jsxs as jsxs11 } from "react/jsx-runtime";
var icons = {
  ...SimpleIcons2,
  ...LucideIcons2
};
function ResumeContact() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs11("section", { children: [
    /* @__PURE__ */ jsx11("h2", { children: content.connect_title }),
    /* @__PURE__ */ jsx11("div", { className: "resume-contact-socialButtons", children: content.social_links.map((link, index) => {
      const IconComponent = icons[link.icon];
      return /* @__PURE__ */ jsxs11(
        "a",
        {
          href: `//${link.url}`,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ jsx11("div", { className: "resume-contact-button", children: /* @__PURE__ */ jsx11(IconComponent, { className: "resume-contact-bigIcon" }) }),
            /* @__PURE__ */ jsxs11("div", { className: "resume-contact-url", children: [
              /* @__PURE__ */ jsx11(IconComponent, { className: "resume-contact-icon" }),
              /* @__PURE__ */ jsx11("span", { children: link.url })
            ] })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs11("p", { className: "resume-contact-atribution", children: [
      /* @__PURE__ */ jsxs11("span", { children: [
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        content.author
      ] }),
      /* @__PURE__ */ jsxs11(
        "a",
        {
          href: "https://opensource.org/license/mit",
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            "MIT License",
            /* @__PURE__ */ jsx11(SimpleIcons2.SiOpensourceinitiative, { className: "resume-contact-icon" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs11("p", { className: "resume-contact-atribution", children: [
      /* @__PURE__ */ jsx11("span", { children: "This resume was built with React." }),
      /* @__PURE__ */ jsxs11(
        "a",
        {
          className: "resume-contact-github",
          href: "https://github.com/Kiyameh/react-resume-kit",
          children: [
            /* @__PURE__ */ jsx11("span", { children: " You can fork it here" }),
            /* @__PURE__ */ jsx11(LucideIcons2.GitFork, { className: "resume-contact-icon" })
          ]
        }
      )
    ] })
  ] });
}
export {
  ResumeAbout,
  ResumeContact,
  ResumeCourses,
  ResumeHeader,
  ResumeLayout,
  ResumeProjects,
  ResumeSoftSkills,
  ResumeTechnologies,
  ResumeWorks
};
