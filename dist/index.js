import e from "react";
import * as m from "lucide-react";
import { InfoIcon as E, Mail as d, Phone as p, MapPin as h, Globe as N, Download as g, ExternalLink as f } from "lucide-react";
import * as o from "@icons-pack/react-simple-icons";
import './index.css';const u = e.createContext(void 0);
function c() {
  const t = e.useContext(u);
  if (t === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return t;
}
function y() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.about_title), /* @__PURE__ */ e.createElement("div", { className: "resume-about-card" }, /* @__PURE__ */ e.createElement(E, { className: "resume-about-icon" }), /* @__PURE__ */ e.createElement("p", { className: "resume-about-text" }, t.about_text)));
}
const k = {
  ...o,
  ...m
};
function C() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.connect_title), /* @__PURE__ */ e.createElement("div", { className: "resume-contact-socialButtons" }, t.social_links.map(
    (a, s) => {
      const n = k[a.icon];
      return /* @__PURE__ */ e.createElement(
        "a",
        {
          key: s,
          href: `//${a.url}`,
          target: "_blank",
          rel: "noreferrer noopener"
        },
        /* @__PURE__ */ e.createElement("div", { className: "resume-contact-button" }, /* @__PURE__ */ e.createElement(n, { className: "resume-contact-bigIcon" })),
        /* @__PURE__ */ e.createElement("div", { className: "resume-contact-url" }, /* @__PURE__ */ e.createElement(n, { className: "resume-contact-icon" }), /* @__PURE__ */ e.createElement("span", null, a.url))
      );
    }
  )), /* @__PURE__ */ e.createElement("p", { className: "resume-contact-atribution" }, /* @__PURE__ */ e.createElement("span", null, (/* @__PURE__ */ new Date()).getFullYear(), " ", t.author), /* @__PURE__ */ e.createElement(
    "a",
    {
      href: "https://opensource.org/license/mit",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    "MIT License",
    /* @__PURE__ */ e.createElement(o.SiOpensourceinitiative, { className: "resume-contact-icon" })
  )), /* @__PURE__ */ e.createElement("p", { className: "resume-contact-atribution" }, /* @__PURE__ */ e.createElement("span", null, "This resume was built with React."), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "resume-contact-github",
      href: "https://github.com/Kiyameh/react-resume-kit"
    },
    /* @__PURE__ */ e.createElement("span", null, " You can fork it here"),
    /* @__PURE__ */ e.createElement(m.GitFork, { className: "resume-contact-icon" })
  )));
}
function I() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.courses_title), t.courses.map((a, s) => /* @__PURE__ */ e.createElement(
    "div",
    {
      key: s,
      className: "resume-courses-course"
    },
    /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: "resume-courses-degree" }, a.degree), /* @__PURE__ */ e.createElement("p", { className: "resume-courses-school" }, a.school)),
    /* @__PURE__ */ e.createElement("p", { className: "dateChip" }, a.date)
  )));
}
function L() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("header", { className: "resume-header-header" }, /* @__PURE__ */ e.createElement("div", { className: "resume-header-profile" }, t.picture && /* @__PURE__ */ e.createElement("div", { className: "resume-header-picture" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: t.picture,
      alt: "Profile photo",
      className: "resume-header-image"
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h1", { className: "resume-header-name" }, t.name), /* @__PURE__ */ e.createElement("p", { className: "resume-header-title" }, t.title))), /* @__PURE__ */ e.createElement("div", { className: "resume-header-contact" }, /* @__PURE__ */ e.createElement("div", { className: "resume-header-contactItem" }, /* @__PURE__ */ e.createElement(d, { className: "resume-header-icon" }), /* @__PURE__ */ e.createElement("a", { href: `mailto:${t.email}` }, t.email)), /* @__PURE__ */ e.createElement("div", { className: "resume-header-contactItem" }, /* @__PURE__ */ e.createElement(p, { className: "resume-header-icon" }), /* @__PURE__ */ e.createElement("a", { href: `tel:${t.phone}` }, t.phone)), /* @__PURE__ */ e.createElement("div", { className: "resume-header-contactItem" }, /* @__PURE__ */ e.createElement(h, { className: "resume-header-icon" }), /* @__PURE__ */ e.createElement("span", null, t.location))));
}
function v() {
  const { language: t, setLanguage: a, content: s } = c();
  return /* @__PURE__ */ e.createElement("div", { className: "language-switcher-container" }, /* @__PURE__ */ e.createElement(N, { className: "language-switcher-icon" }), /* @__PURE__ */ e.createElement("span", { className: "language-switcher-text" }, s.switcher_text, ":"), /* @__PURE__ */ e.createElement("nav", { className: "language-switcher-buttons" }, s.language_labels.map(
    (n, r) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: r,
        onClick: () => a(n.value),
        className: `language-switcher-button ${t === n.value ? "language-switcher-active" : ""}`
      },
      n.label
    )
  )));
}
function b() {
  const t = () => {
    window.print();
  };
  return /* @__PURE__ */ e.createElement(
    "button",
    {
      onClick: t,
      className: "pdf-download-button"
    },
    /* @__PURE__ */ e.createElement(g, { className: "pdf-download-icon" }),
    "Descargar Pdf"
  );
}
function x({
  initialLanguage: t = "en",
  resumeContent: a,
  enableLanguageSwitch: s,
  enablePdfDownload: n,
  children: r
}) {
  const [l, i] = e.useState(t);
  return /* @__PURE__ */ e.createElement(
    u.Provider,
    {
      value: { language: l, setLanguage: i, content: a[l] }
    },
    /* @__PURE__ */ e.createElement("main", { className: "resume" }, r, n && /* @__PURE__ */ e.createElement(b, null), s && /* @__PURE__ */ e.createElement(v, null))
  );
}
function R() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.projects_title), /* @__PURE__ */ e.createElement("div", null, t.projects.map((a, s) => {
    var n;
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        key: s,
        className: "resume-projects-project"
      },
      /* @__PURE__ */ e.createElement("div", { className: "resume-projects-header" }, /* @__PURE__ */ e.createElement("h3", { className: "resume-projects-title" }, a.title), a.link && /* @__PURE__ */ e.createElement(
        "a",
        {
          href: `//${a.link}`,
          target: "_blank",
          rel: "noreferrer noopener"
        },
        /* @__PURE__ */ e.createElement(f, { className: "resume-projects-icon" })
      )),
      /* @__PURE__ */ e.createElement("div", { className: "resume-projects-technologies" }, (n = a.technologies) == null ? void 0 : n.map((r, l) => /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "resume-projects-chip",
          key: l
        },
        r
      ))),
      /* @__PURE__ */ e.createElement("div", { className: "resume-projects-description" }, /* @__PURE__ */ e.createElement("p", null, a.description), /* @__PURE__ */ e.createElement("p", { className: "resume-projects-features" }, /* @__PURE__ */ e.createElement("span", null, `${t.projects_subtitle}: `), a.features))
    );
  })));
}
function P() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.soft_skills_title), /* @__PURE__ */ e.createElement("h3", { className: "resume-soft-skills-subtitle" }, t.soft_skills_subtitle), /* @__PURE__ */ e.createElement("div", { className: "resume-soft-skills-container" }, t.soft_skills.map(
    (a, s) => {
      const n = m[a.icon];
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: s,
          className: "resume-soft-skills-skill"
        },
        /* @__PURE__ */ e.createElement(n, { className: "resume-soft-skills-icon" }),
        /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "resume-soft-skills-skillTitle" }, a.title), /* @__PURE__ */ e.createElement("p", { className: "resume-soft-skills-skillDescription" }, a.description))
      );
    }
  )));
}
function j() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.techs_title), /* @__PURE__ */ e.createElement("div", { className: "resume-technologies-container" }, t.technologies.map(
    (a, s) => {
      const n = o[a.icon];
      return /* @__PURE__ */ e.createElement(
        "div",
        {
          key: s,
          className: "resume-technologies-chip"
        },
        /* @__PURE__ */ e.createElement(n, { className: "resume-technologies-icon" }),
        /* @__PURE__ */ e.createElement("span", { className: "resume-technologies-text" }, a.name)
      );
    }
  )));
}
function S() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.works_title), /* @__PURE__ */ e.createElement("div", null, t.works.map(
    (a, s) => /* @__PURE__ */ e.createElement(
      "div",
      {
        key: s,
        className: "resume-works-work"
      },
      /* @__PURE__ */ e.createElement("div", { className: "resume-works-workHeader" }, /* @__PURE__ */ e.createElement("div", { className: "resume-works-leftHeader" }, /* @__PURE__ */ e.createElement("h3", { className: "resume-works-title" }, a.title), /* @__PURE__ */ e.createElement("p", { className: "resume-works-company" }, a.company)), /* @__PURE__ */ e.createElement("div", { className: "resume-works-rightHeader" }, /* @__PURE__ */ e.createElement("p", { className: "dateChip" }, a.date), /* @__PURE__ */ e.createElement("p", { className: "resume-works-location" }, a.location))),
      /* @__PURE__ */ e.createElement("ul", { className: "resume-works-points" }, a.points.map(
        (n, r) => /* @__PURE__ */ e.createElement("li", { key: r }, n)
      ))
    )
  )));
}
const $ = ["en", "es"];
export {
  u as LanguageContext,
  v as LanguageSwitcher,
  b as PdfDownloadButton,
  y as ResumeAbout,
  C as ResumeContact,
  I as ResumeCourses,
  L as ResumeHeader,
  x as ResumeLayout,
  R as ResumeProjects,
  P as ResumeSoftSkills,
  j as ResumeTechnologies,
  S as ResumeWorks,
  $ as suportedLanguages,
  c as useLanguage
};
