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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "language-switcher-container", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Globe, { className: "language-switcher-icon" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { className: "language-switcher-text", children: [
      content.switcher_text,
      ":"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", { className: "language-switcher-buttons", children: content.language_labels.map((lang, index) => {
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
var import_lucide_react2 = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function PdfDownloadButton() {
  const handlePrint = () => {
    window.print();
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "button",
    {
      onClick: handlePrint,
      className: "pdf-download-button",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react2.Download, { className: "pdf-download-icon" }),
        "Descargar Pdf"
      ]
    }
  );
}

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
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("main", { className: "resume", children: [
        children,
        enablePdfDownload && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(PdfDownloadButton, {}),
        enableLanguageSwitch && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(LanguageSwitcher, {})
      ] })
    }
  );
}

// src/components/ResumeHeader.tsx
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
function ResumeHeader() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("header", { className: "resume-header-header", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "resume-header-profile", children: [
      content.picture && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "resume-header-picture", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        "img",
        {
          src: content.picture,
          alt: "Profile photo",
          className: "resume-header-image"
        }
      ) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h1", { className: "resume-header-name", children: content.name }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "resume-header-title", children: content.title })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "resume-header-contact", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "resume-header-contactItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Mail, { className: "resume-header-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: `mailto:${content.email}`, children: content.email })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "resume-header-contactItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.Phone, { className: "resume-header-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: `tel:${content.phone}`, children: content.phone })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "resume-header-contactItem", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react3.MapPin, { className: "resume-header-icon" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: content.location })
      ] })
    ] })
  ] });
}

// src/components/ResumeAbout.tsx
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime5 = require("react/jsx-runtime");
function ResumeAbout() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h2", { children: content.about_title }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "resume-about-card", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react4.InfoIcon, { className: "resume-about-icon" }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "resume-about-text", children: content.about_text })
    ] })
  ] });
}

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
          className: "resume-works-work",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "resume-works-workHeader", children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "resume-works-leftHeader", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "resume-works-title", children: work.title }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "resume-works-company", children: work.company })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "resume-works-rightHeader", children: [
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "dateChip", children: work.date }),
                /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "resume-works-location", children: work.location })
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("ul", { className: "resume-works-points", children: work.points.map((point, index2) => {
              return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("li", { children: point }, index2);
            }) })
          ]
        },
        index
      );
    }) })
  ] });
}

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
          className: "resume-courses-course",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h3", { className: "resume-courses-degree", children: course.degree }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "resume-courses-school", children: course.school })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "dateChip", children: course.date })
          ]
        },
        index
      );
    })
  ] });
}

// src/components/ResumeTechnologies.tsx
var SimpleIcons = __toESM(require("@icons-pack/react-simple-icons"), 1);
var import_jsx_runtime8 = require("react/jsx-runtime");
function ResumeTechnologies() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: content.techs_title }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "resume-technologies-container", children: content.technologies.map((tech, index) => {
      const IconComponent = SimpleIcons[tech.icon];
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
        "div",
        {
          className: "resume-technologies-chip",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(IconComponent, { className: "resume-technologies-icon" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "resume-technologies-text", children: tech.name })
          ]
        },
        index
      );
    }) })
  ] });
}

// src/components/ResumeSoftSkills.tsx
var LucideIcons = __toESM(require("lucide-react"), 1);
var import_jsx_runtime9 = require("react/jsx-runtime");
function ResumeSoftSkills() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { children: content.soft_skills_title }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "resume-soft-skills-subtitle", children: content.soft_skills_subtitle }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "resume-soft-skills-container", children: content.soft_skills.map((skill, index) => {
      const IconComponent = LucideIcons[skill.icon];
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        "div",
        {
          className: "resume-soft-skills-skill",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(IconComponent, { className: "resume-soft-skills-icon" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "resume-soft-skills-skillTitle", children: skill.title }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "resume-soft-skills-skillDescription", children: skill.description })
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
var import_jsx_runtime10 = require("react/jsx-runtime");
function ResumeProjects() {
  const { content } = useLanguage();
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("section", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h2", { children: content.projects_title }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { children: content.projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
      "div",
      {
        className: "resume-projects-project",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "resume-projects-header", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "resume-projects-title", children: project.title }),
            project.link && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
              "a",
              {
                href: `//${project.link}`,
                target: "_blank",
                rel: "noreferrer noopener",
                children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react5.ExternalLink, { className: "resume-projects-icon" })
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "resume-projects-technologies", children: project.technologies?.map((technology, index2) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              className: "resume-projects-chip",
              children: technology
            },
            index2
          )) }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "resume-projects-description", children: [
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { children: project.description }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "resume-projects-features", children: [
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
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "resume-contact-socialButtons", children: content.social_links.map((link, index) => {
      const IconComponent = icons[link.icon];
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "a",
        {
          href: `//${link.url}`,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("div", { className: "resume-contact-button", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconComponent, { className: "resume-contact-bigIcon" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "resume-contact-url", children: [
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(IconComponent, { className: "resume-contact-icon" }),
              /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: link.url })
            ] })
          ]
        },
        index
      );
    }) }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "resume-contact-atribution", children: [
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
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(SimpleIcons2.SiOpensourceinitiative, { className: "resume-contact-icon" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("p", { className: "resume-contact-atribution", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: "This resume was built with React." }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
        "a",
        {
          className: "resume-contact-github",
          href: "https://github.com/Kiyameh/react-resume-kit",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: " You can fork it here" }),
            /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(LucideIcons2.GitFork, { className: "resume-contact-icon" })
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
