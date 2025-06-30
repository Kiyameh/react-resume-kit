import e, { cloneElement as m, isValidElement as o } from "react";
import * as E from "lucide-react";
import { InfoIcon as d, Mail as p, Phone as h, MapPin as N, Globe as g, Download as f, ExternalLink as v } from "lucide-react";
import * as k from "@icons-pack/react-simple-icons";
import './index.css';const i = e.createContext(void 0);
function l() {
  const t = e.useContext(i);
  if (t === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return t;
}
function x() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.about_title), /* @__PURE__ */ e.createElement("div", { className: "resume-about-card" }, /* @__PURE__ */ e.createElement(d, { className: "resume-about-icon" }), /* @__PURE__ */ e.createElement("p", { className: "resume-about-text" }, t.about_text)));
}
function L() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.connect_title), /* @__PURE__ */ e.createElement("div", { className: "resume-contact-socialButtons" }, t.social_links.map(
    (a, n) => /* @__PURE__ */ e.createElement(
      "a",
      {
        key: n,
        href: `//${a.url}`,
        target: "_blank",
        rel: "noreferrer noopener"
      },
      /* @__PURE__ */ e.createElement("div", { className: "resume-contact-button" }, a.icon),
      /* @__PURE__ */ e.createElement("div", { className: "resume-contact-url" }, a.icon, /* @__PURE__ */ e.createElement("span", null, a.url))
    )
  )), /* @__PURE__ */ e.createElement("p", { className: "resume-contact-atribution" }, /* @__PURE__ */ e.createElement("span", null, (/* @__PURE__ */ new Date()).getFullYear(), " ", t.author), /* @__PURE__ */ e.createElement(
    "a",
    {
      href: "https://opensource.org/license/mit",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    "MIT License",
    /* @__PURE__ */ e.createElement(k.SiOpensourceinitiative, { className: "resume-contact-icon" })
  )), /* @__PURE__ */ e.createElement("p", { className: "resume-contact-atribution" }, /* @__PURE__ */ e.createElement("span", null, "This resume was built with React."), /* @__PURE__ */ e.createElement(
    "a",
    {
      className: "resume-contact-github",
      href: "https://github.com/Kiyameh/react-resume-kit"
    },
    /* @__PURE__ */ e.createElement("span", null, " You can fork it here"),
    /* @__PURE__ */ e.createElement(E.GitFork, { className: "resume-contact-icon" })
  )));
}
function R() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.courses_title), t.courses.map((a, n) => /* @__PURE__ */ e.createElement(
    "div",
    {
      key: n,
      className: "resume-courses-course"
    },
    /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: "resume-courses-degree" }, a.degree), /* @__PURE__ */ e.createElement("p", { className: "resume-courses-school" }, a.school)),
    /* @__PURE__ */ e.createElement("p", { className: "dateChip" }, a.date)
  )));
}
function j() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("header", { className: "resume-header-header" }, /* @__PURE__ */ e.createElement("div", { className: "resume-header-profile" }, t.picture && /* @__PURE__ */ e.createElement("div", { className: "resume-header-picture" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: t.picture,
      alt: "Profile photo",
      className: "resume-header-image"
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h1", { className: "resume-header-name" }, t.name), /* @__PURE__ */ e.createElement("p", { className: "resume-header-title" }, t.title))), /* @__PURE__ */ e.createElement("div", { className: "resume-header-contact" }, /* @__PURE__ */ e.createElement("div", { className: "resume-header-contactItem" }, /* @__PURE__ */ e.createElement(p, { className: "resume-header-icon" }), /* @__PURE__ */ e.createElement("a", { href: `mailto:${t.email}` }, t.email)), /* @__PURE__ */ e.createElement("div", { className: "resume-header-contactItem" }, /* @__PURE__ */ e.createElement(h, { className: "resume-header-icon" }), /* @__PURE__ */ e.createElement("a", { href: `tel:${t.phone}` }, t.phone)), /* @__PURE__ */ e.createElement("div", { className: "resume-header-contactItem" }, /* @__PURE__ */ e.createElement(N, { className: "resume-header-icon" }), /* @__PURE__ */ e.createElement("span", null, t.location))));
}
function w() {
  const { language: t, setLanguage: a, content: n } = l();
  return /* @__PURE__ */ e.createElement("div", { className: "language-switcher-container" }, /* @__PURE__ */ e.createElement(g, { className: "language-switcher-icon" }), /* @__PURE__ */ e.createElement("span", { className: "language-switcher-text" }, n.switcher_text, ":"), /* @__PURE__ */ e.createElement("nav", { className: "language-switcher-buttons" }, n.language_labels.map(
    (s, r) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: r,
        onClick: () => a(s.value),
        className: `language-switcher-button ${t === s.value ? "language-switcher-active" : ""}`
      },
      s.label
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
    /* @__PURE__ */ e.createElement(f, { className: "pdf-download-icon" }),
    "Descargar Pdf"
  );
}
function C({
  initialLanguage: t = "en",
  resumeContent: a,
  enableLanguageSwitch: n,
  enablePdfDownload: s,
  children: r
}) {
  const [c, u] = e.useState(t);
  return /* @__PURE__ */ e.createElement(
    i.Provider,
    {
      value: { language: c, setLanguage: u, content: a[c] }
    },
    /* @__PURE__ */ e.createElement("main", { className: "resume" }, r, s && /* @__PURE__ */ e.createElement(b, null), n && /* @__PURE__ */ e.createElement(w, null))
  );
}
function P() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.projects_title), /* @__PURE__ */ e.createElement("div", null, t.projects.map((a, n) => {
    var s;
    return /* @__PURE__ */ e.createElement(
      "div",
      {
        key: n,
        className: "resume-projects-project"
      },
      /* @__PURE__ */ e.createElement("div", { className: "resume-projects-header" }, /* @__PURE__ */ e.createElement("h3", { className: "resume-projects-title" }, a.title), a.link && /* @__PURE__ */ e.createElement(
        "a",
        {
          href: `//${a.link}`,
          target: "_blank",
          rel: "noreferrer noopener"
        },
        /* @__PURE__ */ e.createElement(v, { className: "resume-projects-icon" })
      )),
      /* @__PURE__ */ e.createElement("div", { className: "resume-projects-technologies" }, (s = a.technologies) == null ? void 0 : s.map((r, c) => /* @__PURE__ */ e.createElement(
        "span",
        {
          className: "resume-projects-chip",
          key: c
        },
        r
      ))),
      /* @__PURE__ */ e.createElement("div", { className: "resume-projects-description" }, /* @__PURE__ */ e.createElement("p", null, a.description), /* @__PURE__ */ e.createElement("p", { className: "resume-projects-features" }, /* @__PURE__ */ e.createElement("span", null, `${t.projects_subtitle}: `), a.features))
    );
  })));
}
function I() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.soft_skills_title), /* @__PURE__ */ e.createElement("h3", { className: "resume-soft-skills-subtitle" }, t.soft_skills_subtitle), /* @__PURE__ */ e.createElement("div", { className: "resume-soft-skills-container" }, t.soft_skills.map(
    (a, n) => /* @__PURE__ */ e.createElement(
      "div",
      {
        key: n,
        className: "resume-soft-skills-skill"
      },
      o(a.icon) ? m(a.icon, {
        className: [
          a.icon.props.className,
          "resume-soft-skills-icon"
        ].filter(Boolean).join(" ")
      }) : a.icon,
      /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "resume-soft-skills-skillTitle" }, a.title), /* @__PURE__ */ e.createElement("p", { className: "resume-soft-skills-skillDescription" }, a.description))
    )
  )));
}
function S() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.techs_title), /* @__PURE__ */ e.createElement("div", { className: "resume-technologies-container" }, t.technologies.map((a, n) => /* @__PURE__ */ e.createElement(
    "div",
    {
      key: n,
      className: "resume-technologies-chip"
    },
    o(a.icon) ? m(a.icon, {
      className: [a.icon.props.className, "resume-technologies-icon"].filter(Boolean).join(" ")
    }) : a.icon,
    /* @__PURE__ */ e.createElement("span", { className: "resume-technologies-text" }, a.name)
  ))));
}
function $() {
  const { content: t } = l();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.works_title), /* @__PURE__ */ e.createElement("div", null, t.works.map(
    (a, n) => /* @__PURE__ */ e.createElement(
      "div",
      {
        key: n,
        className: "resume-works-work"
      },
      /* @__PURE__ */ e.createElement("div", { className: "resume-works-workHeader" }, /* @__PURE__ */ e.createElement("div", { className: "resume-works-leftHeader" }, /* @__PURE__ */ e.createElement("h3", { className: "resume-works-title" }, a.title), /* @__PURE__ */ e.createElement("p", { className: "resume-works-company" }, a.company)), /* @__PURE__ */ e.createElement("div", { className: "resume-works-rightHeader" }, /* @__PURE__ */ e.createElement("p", { className: "dateChip" }, a.date), /* @__PURE__ */ e.createElement("p", { className: "resume-works-location" }, a.location))),
      /* @__PURE__ */ e.createElement("ul", { className: "resume-works-points" }, a.points.map(
        (s, r) => /* @__PURE__ */ e.createElement("li", { key: r }, s)
      ))
    )
  )));
}
export {
  x as ResumeAbout,
  L as ResumeContact,
  R as ResumeCourses,
  j as ResumeHeader,
  C as ResumeLayout,
  P as ResumeProjects,
  I as ResumeSoftSkills,
  S as ResumeTechnologies,
  $ as ResumeWorks
};
