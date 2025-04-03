var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// package/index.ts
var index_exports = {};
__export(index_exports, {
  ResumeAbout: () => ResumeAbout,
  ResumeContact: () => ResumeContact,
  ResumeCourses: () => ResumeCourses,
  ResumeHeader: () => ResumeHeader,
  ResumeLayout: () => ResumeLayout,
  ResumeProjects: () => ResumeProjects,
  ResumeSoftSkills: () => ResumeSoftSkills,
  ResumeTechnologies: () => ResumeTechnologies,
  ResumeWorks: () => ResumeWorks
});
module.exports = __toCommonJS(index_exports);

// src/components/ResumeLayout.tsx
var import_react2 = __toESM(require("react"), 1);

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
var import_react = __toESM(require("react"), 1);
var LanguageContext = import_react.default.createContext(void 0);
function useLanguage() {
  const context = import_react.default.useContext(LanguageContext);
  if (context === void 0) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// src/components/ui/LanguageSwitcher.tsx
var import_lucide_react = require("lucide-react");
var import_jsx_runtime = require("react/jsx-runtime");
function LanguageSwitcher() {
  const { language, setLanguage, content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: LanguageSwitcher_default.container, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Globe, { className: LanguageSwitcher_default.icon }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: LanguageSwitcher_default.text, children: [
      content.switcher_text,
      ":"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: LanguageSwitcher_default.buttons, children: content.language_labels.map((lang, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_lucide_react2 = require("lucide-react");

// src/components/ui/PdfDownloadButton.module.css
var PdfDownloadButton_default = {
  icon: "PdfDownloadButton_icon",
  button: "PdfDownloadButton_button"
};

// src/components/ui/PdfDownloadButton.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function PdfDownloadButton() {
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      onClick: handlePrint,
      className: PdfDownloadButton_default.button,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Download, { className: PdfDownloadButton_default.icon }),
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
var import_jsx_runtime3 = require("react/jsx-runtime");
function ResumeLayout({
  initialLanguage = "en",
  resumeContent,
  enableLanguageSwitch,
  enablePdfDownload,
  children
}) {
  const [language, setLanguage] = import_react2.default.useState(initialLanguage);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    LanguageContext.Provider,
    {
      value: { language, setLanguage, content: resumeContent[language] },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: ResumeLayout_default.resume, children: [
        children,
        enablePdfDownload && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PdfDownloadButton, {}),
        enableLanguageSwitch && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LanguageSwitcher, {})
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
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function ResumeHeader() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: ResumeHeader_default.header, children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ResumeHeader_default.profile, children: [
      content.picture && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: ResumeHeader_default.picture, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "img",
        {
          src: content.picture,
          alt: "Profile photo",
          className: ResumeHeader_default.image
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: ResumeHeader_default.name, children: content.name }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: ResumeHeader_default.title, children: content.title })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ResumeHeader_default.contact, children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ResumeHeader_default.contactItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Mail, { className: ResumeHeader_default.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: `mailto:${content.email}`, children: content.email })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ResumeHeader_default.contactItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Phone, { className: ResumeHeader_default.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: `tel:${content.phone}`, children: content.phone })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: ResumeHeader_default.contactItem, children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.MapPin, { className: ResumeHeader_default.icon }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: content.location })
      ] })
    ] })
  ] });
}

// src/components/ResumeAbout.tsx
var import_lucide_react4 = require("lucide-react");

// src/components/ResumeAbout.module.css
var ResumeAbout_default = {
  card: "ResumeAbout_card",
  icon: "ResumeAbout_icon",
  text: "ResumeAbout_text"
};

// src/components/ResumeAbout.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
function ResumeAbout() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { children: content.about_title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: ResumeAbout_default.card, children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.InfoIcon, { className: ResumeAbout_default.icon }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: ResumeAbout_default.text, children: content.about_text })
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
var import_jsx_runtime6 = require("react/jsx-runtime");
function ResumeWorks() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h2", { children: content.works_title }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { children: content.works.map((work, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
        "div",
        {
          className: ResumeWorks_default.work,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ResumeWorks_default.workHeader, children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ResumeWorks_default.leftHeader, children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: ResumeWorks_default.title, children: work.title }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ResumeWorks_default.company, children: work.company })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: ResumeWorks_default.rightHeader, children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: Common_default.dateChip, children: work.date }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: ResumeWorks_default.location, children: work.location })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: ResumeWorks_default.points, children: work.points.map((point, index2) => {
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: point }, index2);
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
var import_jsx_runtime7 = require("react/jsx-runtime");
function ResumeCourses() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { children: content.courses_title }),
    content.courses.map((course, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
        "div",
        {
          className: ResumeCourses_default.course,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: ResumeCourses_default.degree, children: course.degree }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: ResumeCourses_default.school, children: course.school })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: Common_default.dateChip, children: course.date })
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
var SimpleIcons = __toESM(require("@icons-pack/react-simple-icons"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
function ResumeTechnologies() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: content.techs_title }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: ResumeTechnologies_default.techContainer, children: content.technologies.map((tech, index) => {
      const IconComponent = SimpleIcons[tech.icon];
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "div",
        {
          className: ResumeTechnologies_default.techChip,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(IconComponent, { className: ResumeTechnologies_default.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: ResumeTechnologies_default.text, children: tech.name })
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
var LucideIcons = __toESM(require("lucide-react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
function ResumeSoftSkills() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: content.soft_skills_title }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: ResumeSoftSkills_default.subtitle, children: content.soft_skills_subtitle }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: ResumeSoftSkills_default.container, children: content.soft_skills.map((skill, index) => {
      const IconComponent = LucideIcons[skill.icon];
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "div",
        {
          className: ResumeSoftSkills_default.skill,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(IconComponent, { className: ResumeSoftSkills_default.icon }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: ResumeSoftSkills_default.skillTitle, children: skill.title }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: ResumeSoftSkills_default.skillDescription, children: skill.description })
            ] })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeProjects.tsx
var import_lucide_react5 = require("lucide-react");

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
var import_jsx_runtime10 = require("react/jsx-runtime");
function ResumeProjects() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { children: content.projects_title }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: content.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: ResumeProjects_default.project,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ResumeProjects_default.header, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: ResumeProjects_default.title, children: project.title }),
            project.link && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "a",
              {
                href: `//${project.link}`,
                target: "_blank",
                rel: "noreferrer noopener",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react5.ExternalLink, { className: ResumeProjects_default.icon })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: ResumeProjects_default.technologies, children: project.technologies?.map((technology, index2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              className: ResumeProjects_default.chip,
              children: technology
            },
            index2
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: ResumeProjects_default.description, children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: project.description }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: ResumeProjects_default.features, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: `${content.projects_subtitle}: ` }),
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
var SimpleIcons2 = __toESM(require("@icons-pack/react-simple-icons"), 1);
var LucideIcons2 = __toESM(require("lucide-react"), 1);
var import_jsx_runtime11 = require("react/jsx-runtime");
var icons = {
  ...SimpleIcons2,
  ...LucideIcons2
};
function ResumeContact() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("h2", { children: content.connect_title }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: ResumeContact_default.socialButtons, children: content.social_links.map((link, index) => {
      const IconComponent = icons[link.icon];
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "a",
        {
          href: `//${link.url}`,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: ResumeContact_default.button, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconComponent, { className: ResumeContact_default.bigIcon }) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: ResumeContact_default.url, children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconComponent, { className: ResumeContact_default.icon }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: link.url })
            ] })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: ResumeContact_default.atribution, children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("span", { children: [
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        content.author
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "a",
        {
          href: "https://opensource.org/license/mit",
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            "MIT License",
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SimpleIcons2.SiOpensourceinitiative, { className: ResumeContact_default.icon })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: ResumeContact_default.atribution, children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "This resume was built with React." }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "a",
        {
          className: ResumeContact_default.github,
          href: "https://github.com/Kiyameh/react-resume-kit",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: " You can fork it here" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LucideIcons2.GitFork, { className: ResumeContact_default.icon })
          ]
        }
      )
    ] })
  ] });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  ResumeAbout,
  ResumeContact,
  ResumeCourses,
  ResumeHeader,
  ResumeLayout,
  ResumeProjects,
  ResumeSoftSkills,
  ResumeTechnologies,
  ResumeWorks
});
