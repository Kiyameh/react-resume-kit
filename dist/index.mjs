// src/components/ResumeLayout.tsx
import React2 from "react";

// src/components/ui/LanguageSwitcher.module.css
var LanguageSwitcher_default = {
  container: "LanguageSwitcher_container",
  icon: "LanguageSwitcher_icon",
  text: "LanguageSwitcher_text",
  buttons: "LanguageSwitcher_buttons",
  button: "LanguageSwitcher_button",
  active: "LanguageSwitcher_active"
};

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
  return /* @__PURE__ */ jsxs("div", { className: LanguageSwitcher_default.container, children: [
    /* @__PURE__ */ jsx(Globe, { className: LanguageSwitcher_default.icon }),
    /* @__PURE__ */ jsxs("span", { className: LanguageSwitcher_default.text, children: [
      content.switcher_text,
      ":"
    ] }),
    /* @__PURE__ */ jsx("nav", { className: LanguageSwitcher_default.buttons, children: content.language_labels.map((lang, index) => {
      return /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setLanguage(lang.value),
          className: `${LanguageSwitcher_default.button} ${language === lang.value ? LanguageSwitcher_default.active : ""}`,
          children: lang.label
        },
        index
      );
    }) })
  ] });
}

// src/components/ui/PdfDownloadButton.tsx
import { Download } from "lucide-react";

// src/components/ui/PdfDownloadButton.module.css
var PdfDownloadButton_default = {
  icon: "PdfDownloadButton_icon",
  button: "PdfDownloadButton_button"
};

// src/components/ui/PdfDownloadButton.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function PdfDownloadButton() {
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ jsxs2(
    "button",
    {
      onClick: handlePrint,
      className: PdfDownloadButton_default.button,
      children: [
        /* @__PURE__ */ jsx2(Download, { className: PdfDownloadButton_default.icon }),
        "Descargar Pdf"
      ]
    }
  );
}

// src/components/ResumeLayout.module.css
var ResumeLayout_default = {
  resume: "ResumeLayout_resume",
  frame: "ResumeLayout_frame"
};

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
      children: /* @__PURE__ */ jsxs3("main", { className: ResumeLayout_default.resume, children: [
        children,
        enablePdfDownload && /* @__PURE__ */ jsx3(PdfDownloadButton, {}),
        enableLanguageSwitch && /* @__PURE__ */ jsx3(LanguageSwitcher, {})
      ] })
    }
  );
}

// src/components/ResumeHeader.module.css
var ResumeHeader_default = {
  header: "ResumeHeader_header",
  profile: "ResumeHeader_profile",
  picture: "ResumeHeader_picture",
  image: "ResumeHeader_image",
  name: "ResumeHeader_name",
  title: "ResumeHeader_title",
  contact: "ResumeHeader_contact",
  contactItem: "ResumeHeader_contactItem",
  icon: "ResumeHeader_icon"
};

// src/components/ResumeHeader.tsx
import { Mail, MapPin, Phone } from "lucide-react";
import { jsx as jsx4, jsxs as jsxs4 } from "react/jsx-runtime";
function ResumeHeader() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs4("header", { className: ResumeHeader_default.header, children: [
    /* @__PURE__ */ jsxs4("div", { className: ResumeHeader_default.profile, children: [
      content.picture && /* @__PURE__ */ jsx4("div", { className: ResumeHeader_default.picture, children: /* @__PURE__ */ jsx4(
        "img",
        {
          src: content.picture,
          alt: "Profile photo",
          className: ResumeHeader_default.image
        }
      ) }),
      /* @__PURE__ */ jsxs4("div", { children: [
        /* @__PURE__ */ jsx4("h1", { className: ResumeHeader_default.name, children: content.name }),
        /* @__PURE__ */ jsx4("p", { className: ResumeHeader_default.title, children: content.title })
      ] })
    ] }),
    /* @__PURE__ */ jsxs4("div", { className: ResumeHeader_default.contact, children: [
      /* @__PURE__ */ jsxs4("div", { className: ResumeHeader_default.contactItem, children: [
        /* @__PURE__ */ jsx4(Mail, { className: ResumeHeader_default.icon }),
        /* @__PURE__ */ jsx4("a", { href: `mailto:${content.email}`, children: content.email })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: ResumeHeader_default.contactItem, children: [
        /* @__PURE__ */ jsx4(Phone, { className: ResumeHeader_default.icon }),
        /* @__PURE__ */ jsx4("a", { href: `tel:${content.phone}`, children: content.phone })
      ] }),
      /* @__PURE__ */ jsxs4("div", { className: ResumeHeader_default.contactItem, children: [
        /* @__PURE__ */ jsx4(MapPin, { className: ResumeHeader_default.icon }),
        /* @__PURE__ */ jsx4("span", { children: content.location })
      ] })
    ] })
  ] });
}

// src/components/ResumeAbout.tsx
import { InfoIcon } from "lucide-react";

// src/components/ResumeAbout.module.css
var ResumeAbout_default = {
  card: "ResumeAbout_card",
  icon: "ResumeAbout_icon",
  text: "ResumeAbout_text"
};

// src/components/ResumeAbout.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "react/jsx-runtime";
function ResumeAbout() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs5("section", { children: [
    /* @__PURE__ */ jsx5("h2", { children: content.about_title }),
    /* @__PURE__ */ jsxs5("div", { className: ResumeAbout_default.card, children: [
      /* @__PURE__ */ jsx5(InfoIcon, { className: ResumeAbout_default.icon }),
      /* @__PURE__ */ jsx5("p", { className: ResumeAbout_default.text, children: content.about_text })
    ] })
  ] });
}

// src/components/ResumeWorks.module.css
var ResumeWorks_default = {
  work: "ResumeWorks_work",
  workHeader: "ResumeWorks_workHeader",
  leftHeader: "ResumeWorks_leftHeader",
  rightHeader: "ResumeWorks_rightHeader",
  title: "ResumeWorks_title",
  location: "ResumeWorks_location",
  company: "ResumeWorks_company",
  points: "ResumeWorks_points"
};

// src/components/Common.module.css
var Common_default = {
  dateChip: "Common_dateChip"
};

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
          className: ResumeWorks_default.work,
          children: [
            /* @__PURE__ */ jsxs6("div", { className: ResumeWorks_default.workHeader, children: [
              /* @__PURE__ */ jsxs6("div", { className: ResumeWorks_default.leftHeader, children: [
                /* @__PURE__ */ jsx6("h3", { className: ResumeWorks_default.title, children: work.title }),
                /* @__PURE__ */ jsx6("p", { className: ResumeWorks_default.company, children: work.company })
              ] }),
              /* @__PURE__ */ jsxs6("div", { className: ResumeWorks_default.rightHeader, children: [
                /* @__PURE__ */ jsx6("p", { className: Common_default.dateChip, children: work.date }),
                /* @__PURE__ */ jsx6("p", { className: ResumeWorks_default.location, children: work.location })
              ] })
            ] }),
            /* @__PURE__ */ jsx6("ul", { className: ResumeWorks_default.points, children: work.points.map((point, index2) => {
              return /* @__PURE__ */ jsx6("li", { children: point }, index2);
            }) })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeCourses.module.css
var ResumeCourses_default = {
  course: "ResumeCourses_course",
  degree: "ResumeCourses_degree",
  school: "ResumeCourses_school"
};

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
          className: ResumeCourses_default.course,
          children: [
            /* @__PURE__ */ jsxs7("div", { children: [
              /* @__PURE__ */ jsx7("h3", { className: ResumeCourses_default.degree, children: course.degree }),
              /* @__PURE__ */ jsx7("p", { className: ResumeCourses_default.school, children: course.school })
            ] }),
            /* @__PURE__ */ jsx7("p", { className: Common_default.dateChip, children: course.date })
          ]
        },
        index
      );
    })
  ] });
}

// src/components/ResumeTechnologies.module.css
var ResumeTechnologies_default = {
  techContainer: "ResumeTechnologies_techContainer",
  techChip: "ResumeTechnologies_techChip",
  icon: "ResumeTechnologies_icon",
  text: "ResumeTechnologies_text"
};

// src/components/ResumeTechnologies.tsx
import * as SimpleIcons from "@icons-pack/react-simple-icons";
import { jsx as jsx8, jsxs as jsxs8 } from "react/jsx-runtime";
function ResumeTechnologies() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs8("section", { children: [
    /* @__PURE__ */ jsx8("h2", { children: content.techs_title }),
    /* @__PURE__ */ jsx8("div", { className: ResumeTechnologies_default.techContainer, children: content.technologies.map((tech, index) => {
      const IconComponent = SimpleIcons[tech.icon];
      return /* @__PURE__ */ jsxs8(
        "div",
        {
          className: ResumeTechnologies_default.techChip,
          children: [
            /* @__PURE__ */ jsx8(IconComponent, { className: ResumeTechnologies_default.icon }),
            /* @__PURE__ */ jsx8("span", { className: ResumeTechnologies_default.text, children: tech.name })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeSoftSkills.module.css
var ResumeSoftSkills_default = {
  subtitle: "ResumeSoftSkills_subtitle",
  container: "ResumeSoftSkills_container",
  skill: "ResumeSoftSkills_skill",
  icon: "ResumeSoftSkills_icon",
  skillTitle: "ResumeSoftSkills_skillTitle",
  skillDescription: "ResumeSoftSkills_skillDescription"
};

// src/components/ResumeSoftSkills.tsx
import * as LucideIcons from "lucide-react";
import { jsx as jsx9, jsxs as jsxs9 } from "react/jsx-runtime";
function ResumeSoftSkills() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs9("section", { children: [
    /* @__PURE__ */ jsx9("h2", { children: content.soft_skills_title }),
    /* @__PURE__ */ jsx9("h3", { className: ResumeSoftSkills_default.subtitle, children: content.soft_skills_subtitle }),
    /* @__PURE__ */ jsx9("div", { className: ResumeSoftSkills_default.container, children: content.soft_skills.map((skill, index) => {
      const IconComponent = LucideIcons[skill.icon];
      return /* @__PURE__ */ jsxs9(
        "div",
        {
          className: ResumeSoftSkills_default.skill,
          children: [
            /* @__PURE__ */ jsx9(IconComponent, { className: ResumeSoftSkills_default.icon }),
            /* @__PURE__ */ jsxs9("div", { children: [
              /* @__PURE__ */ jsx9("p", { className: ResumeSoftSkills_default.skillTitle, children: skill.title }),
              /* @__PURE__ */ jsx9("p", { className: ResumeSoftSkills_default.skillDescription, children: skill.description })
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

// src/components/ResumeProjects.module.css
var ResumeProjects_default = {
  header: "ResumeProjects_header",
  project: "ResumeProjects_project",
  title: "ResumeProjects_title",
  icon: "ResumeProjects_icon",
  technologies: "ResumeProjects_technologies",
  chip: "ResumeProjects_chip",
  description: "ResumeProjects_description",
  features: "ResumeProjects_features"
};

// src/components/ResumeProjects.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "react/jsx-runtime";
function ResumeProjects() {
  const { content } = useLanguage();
  return /* @__PURE__ */ jsxs10("section", { children: [
    /* @__PURE__ */ jsx10("h2", { children: content.projects_title }),
    /* @__PURE__ */ jsx10("div", { children: content.projects.map((project, index) => /* @__PURE__ */ jsxs10(
      "div",
      {
        className: ResumeProjects_default.project,
        children: [
          /* @__PURE__ */ jsxs10("div", { className: ResumeProjects_default.header, children: [
            /* @__PURE__ */ jsx10("h3", { className: ResumeProjects_default.title, children: project.title }),
            project.link && /* @__PURE__ */ jsx10(
              "a",
              {
                href: `//${project.link}`,
                target: "_blank",
                rel: "noreferrer noopener",
                children: /* @__PURE__ */ jsx10(ExternalLink, { className: ResumeProjects_default.icon })
              }
            )
          ] }),
          /* @__PURE__ */ jsx10("div", { className: ResumeProjects_default.technologies, children: project.technologies?.map((technology, index2) => /* @__PURE__ */ jsx10(
            "span",
            {
              className: ResumeProjects_default.chip,
              children: technology
            },
            index2
          )) }),
          /* @__PURE__ */ jsxs10("div", { className: ResumeProjects_default.description, children: [
            /* @__PURE__ */ jsx10("p", { children: project.description }),
            /* @__PURE__ */ jsxs10("p", { className: ResumeProjects_default.features, children: [
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

// src/components/ResumeContact.module.css
var ResumeContact_default = {
  socialButtons: "ResumeContact_socialButtons",
  button: "ResumeContact_button",
  bigIcon: "ResumeContact_bigIcon",
  url: "ResumeContact_url",
  icon: "ResumeContact_icon",
  atribution: "ResumeContact_atribution",
  github: "ResumeContact_github"
};

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
    /* @__PURE__ */ jsx11("div", { className: ResumeContact_default.socialButtons, children: content.social_links.map((link, index) => {
      const IconComponent = icons[link.icon];
      return /* @__PURE__ */ jsxs11(
        "a",
        {
          href: `//${link.url}`,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ jsx11("div", { className: ResumeContact_default.button, children: /* @__PURE__ */ jsx11(IconComponent, { className: ResumeContact_default.bigIcon }) }),
            /* @__PURE__ */ jsxs11("div", { className: ResumeContact_default.url, children: [
              /* @__PURE__ */ jsx11(IconComponent, { className: ResumeContact_default.icon }),
              /* @__PURE__ */ jsx11("span", { children: link.url })
            ] })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ jsxs11("p", { className: ResumeContact_default.atribution, children: [
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
            /* @__PURE__ */ jsx11(SimpleIcons2.SiOpensourceinitiative, { className: ResumeContact_default.icon })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs11("p", { className: ResumeContact_default.atribution, children: [
      /* @__PURE__ */ jsx11("span", { children: "This resume was built with React." }),
      /* @__PURE__ */ jsxs11(
        "a",
        {
          className: ResumeContact_default.github,
          href: "https://github.com/Kiyameh/react-resume-kit",
          children: [
            /* @__PURE__ */ jsx11("span", { children: " You can fork it here" }),
            /* @__PURE__ */ jsx11(LucideIcons2.GitFork, { className: ResumeContact_default.icon })
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
