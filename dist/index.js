import e, { cloneElement as o, isValidElement as i } from "react";
import './index.css';const m = e.createContext(void 0);
function c() {
  const t = e.useContext(m);
  if (t === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return t;
}
function E() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.about_title), /* @__PURE__ */ e.createElement("div", { className: "rrk-about-card" }, /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "rrk-about-icon"
    },
    /* @__PURE__ */ e.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e.createElement("path", { d: "M12 16v-4" }),
    /* @__PURE__ */ e.createElement("path", { d: "M12 8h.01" })
  ), /* @__PURE__ */ e.createElement("p", { className: "rrk-about-text" }, t.about_text)));
}
function p() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.connect_title), /* @__PURE__ */ e.createElement("div", { className: "rrk-contact-social-buttons" }, t.social_links.map(
    (r, a) => /* @__PURE__ */ e.createElement(
      "a",
      {
        key: a,
        href: `//${r.url}`,
        target: "_blank",
        rel: "noreferrer noopener"
      },
      /* @__PURE__ */ e.createElement("div", { className: "rrk-contact-social-item" }, /* @__PURE__ */ e.createElement("span", { className: "rrk-contact-button" }, r.icon), /* @__PURE__ */ e.createElement("span", { className: "rrk-contact-url" }, r.url))
    )
  )), /* @__PURE__ */ e.createElement("p", { className: "rrk-contact-attribution" }, /* @__PURE__ */ e.createElement("span", null, (/* @__PURE__ */ new Date()).getFullYear(), " ", t.author), /* @__PURE__ */ e.createElement(
    "a",
    {
      href: "https://opensource.org/license/mit",
      target: "_blank",
      rel: "noreferrer noopener"
    },
    "MIT License",
    /* @__PURE__ */ e.createElement(
      "svg",
      {
        role: "img",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        className: "rrk-contact-icon"
      },
      /* @__PURE__ */ e.createElement("path", { d: "M11.959.447A11.938 11.938 0 000 12.407c0 5.576 3.874 10.097 7.783 11.114.193.05.392-.05.467-.234l2.771-6.822a.396.396 0 00-.246-.528C9.365 15.47 8.53 14.32 8.48 12.4c-.024-1.828 1.5-3.45 3.561-3.447 1.931.003 3.479 1.632 3.479 3.453 0 .966-.203 1.687-.575 2.238-.371.552-.922.951-1.695 1.239a.396.396 0 00-.23.515l2.685 6.903a.396.396 0 00.465.24C20.163 22.534 24 18.062 24 12.406 24 5.804 18.603.447 11.959.447zm0 .791c6.22 0 11.25 4.997 11.25 11.168 0 5.138-3.423 9.208-6.895 10.272L13.9 16.47c.703-.308 1.302-.79 1.702-1.384.477-.708.709-1.602.709-2.68 0-2.266-1.898-4.24-4.27-4.244-2.48-.004-4.382 1.976-4.352 4.25.023 1.995.934 3.492 2.451 4.13L7.648 22.66C4.251 21.592.791 17.458.791 12.406A11.13 11.13 0 0111.959 1.238zm10.617 20.149a1.03 1.03 0 000 2.058 1.03 1.03 0 000-2.058zm0 .162c.48 0 .865.388.865.867a.856.856 0 01-.271.623l-.172-.342a.847.847 0 00-.111-.178.263.263 0 00-.114-.084.301.301 0 00.17-.117.356.356 0 00.061-.21c0-.13-.038-.227-.113-.292-.076-.064-.192-.095-.346-.095h-.41v1.343h.181v-.568h.2c.072 0 .128.015.17.045a.48.48 0 01.129.18l.171.343.157.001a.878.878 0 01-.567.216.865.865 0 010-1.732zm-.26.322h.229c.088 0 .155.018.2.059.044.04.066.099.066.177 0 .079-.022.14-.067.18-.044.04-.111.06-.2.06h-.228z" })
    )
  )), /* @__PURE__ */ e.createElement("p", { className: "rrk-contact-attribution" }, /* @__PURE__ */ e.createElement("span", null, "This resume was built with React."), /* @__PURE__ */ e.createElement("a", { href: "https://github.com/Kiyameh/react-resume-kit" }, /* @__PURE__ */ e.createElement("span", null, " You can fork it here"), /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "rrk-contact-icon"
    },
    /* @__PURE__ */ e.createElement("circle", { cx: "12", cy: "18", r: "3" }),
    /* @__PURE__ */ e.createElement("circle", { cx: "6", cy: "6", r: "3" }),
    /* @__PURE__ */ e.createElement("circle", { cx: "18", cy: "6", r: "3" }),
    /* @__PURE__ */ e.createElement("path", { d: "M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" }),
    /* @__PURE__ */ e.createElement("path", { d: "M12 12v3" })
  )), /* @__PURE__ */ e.createElement("span", { className: "rrk-contact-repository-url" }, "https://github.com/Kiyameh/react-resume-kit")));
}
function g() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.courses_title), t.courses.map((r, a) => /* @__PURE__ */ e.createElement("div", { key: a, className: "rrk-courses-course" }, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h3", { className: "rrk-courses-degree" }, r.degree), /* @__PURE__ */ e.createElement("p", { className: "rrk-courses-school" }, r.school)), /* @__PURE__ */ e.createElement("p", { className: "rrk-dateChip" }, r.date))));
}
function w() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("header", { className: "rrk-header-layout" }, /* @__PURE__ */ e.createElement("div", { className: "rrk-header-profile" }, t.picture && /* @__PURE__ */ e.createElement("div", { className: "rrk-header-picture" }, /* @__PURE__ */ e.createElement(
    "img",
    {
      src: t.picture,
      alt: "Profile photo",
      className: "rrk-header-image"
    }
  )), /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("h1", { className: "rrk-header-name" }, t.name), /* @__PURE__ */ e.createElement("p", { className: "rrk-header-title" }, t.title))), /* @__PURE__ */ e.createElement("div", { className: "rrk-header-contact" }, /* @__PURE__ */ e.createElement("div", { className: "rrk-header-contactItem" }, /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "rrk-header-icon"
    },
    /* @__PURE__ */ e.createElement("path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }),
    /* @__PURE__ */ e.createElement("rect", { x: "2", y: "4", width: "20", height: "16", rx: "2" })
  ), /* @__PURE__ */ e.createElement("a", { href: `mailto:${t.email}` }, t.email)), /* @__PURE__ */ e.createElement("div", { className: "rrk-header-contactItem" }, /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "rrk-header-icon"
    },
    /* @__PURE__ */ e.createElement("path", { d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" })
  ), /* @__PURE__ */ e.createElement("a", { href: `tel:${t.phone}` }, t.phone)), /* @__PURE__ */ e.createElement("div", { className: "rrk-header-contactItem" }, /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "rrk-header-icon"
    },
    /* @__PURE__ */ e.createElement("path", { d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" }),
    /* @__PURE__ */ e.createElement("circle", { cx: "12", cy: "10", r: "3" })
  ), /* @__PURE__ */ e.createElement("span", null, t.location))));
}
function h() {
  const { language: t, setLanguage: r, content: a } = c();
  return /* @__PURE__ */ e.createElement("div", { className: "language-switcher-container" }, /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "language-switcher-icon"
    },
    /* @__PURE__ */ e.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    /* @__PURE__ */ e.createElement("path", { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" }),
    /* @__PURE__ */ e.createElement("path", { d: "M2 12h20" })
  ), /* @__PURE__ */ e.createElement("span", { className: "language-switcher-text" }, a.switcher_text, ":"), /* @__PURE__ */ e.createElement("nav", { className: "language-switcher-buttons" }, a.language_labels.map(
    (n, l) => /* @__PURE__ */ e.createElement(
      "button",
      {
        key: l,
        onClick: () => r(n.value),
        className: `language-switcher-button ${t === n.value ? "language-switcher-active" : ""}`
      },
      n.label
    )
  )));
}
function d() {
  const t = () => {
    window.print();
  };
  return /* @__PURE__ */ e.createElement("button", { onClick: t, className: "pdf-download-button" }, /* @__PURE__ */ e.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: "pdf-download-icon"
    },
    /* @__PURE__ */ e.createElement("path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" }),
    /* @__PURE__ */ e.createElement("path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }),
    /* @__PURE__ */ e.createElement("path", { d: "M12 18v-6" }),
    /* @__PURE__ */ e.createElement("path", { d: "m9 15 3 3 3-3" })
  ), "Descargar Pdf");
}
function v({
  initialLanguage: t = "en",
  resumeContent: r,
  enableLanguageSwitch: a,
  enablePdfDownload: n,
  children: l
}) {
  const [s, u] = e.useState(t);
  return /* @__PURE__ */ e.createElement(
    m.Provider,
    {
      value: { language: s, setLanguage: u, content: r[s] }
    },
    /* @__PURE__ */ e.createElement("main", { className: "rrk-resume" }, l, n && /* @__PURE__ */ e.createElement(d, null), a && /* @__PURE__ */ e.createElement(h, null))
  );
}
function N() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.projects_title), /* @__PURE__ */ e.createElement("div", null, t.projects.map((r, a) => {
    var n;
    return /* @__PURE__ */ e.createElement("div", { key: a, className: "rrk-projects-card" }, /* @__PURE__ */ e.createElement("div", { className: "rrk-projects-header" }, /* @__PURE__ */ e.createElement("h3", { className: "rrk-projects-title" }, r.title), r.link && /* @__PURE__ */ e.createElement(
      "a",
      {
        href: `//${r.link}`,
        target: "_blank",
        rel: "noreferrer noopener"
      },
      /* @__PURE__ */ e.createElement(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: "rrk-projects-icon"
        },
        /* @__PURE__ */ e.createElement("path", { d: "M15 3h6v6" }),
        /* @__PURE__ */ e.createElement("path", { d: "M10 14 21 3" }),
        /* @__PURE__ */ e.createElement("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" })
      ),
      /* @__PURE__ */ e.createElement("p", { className: "rrk-projects-link" }, r.link)
    )), /* @__PURE__ */ e.createElement("div", { className: "rrk-projects-technologies" }, (n = r.technologies) == null ? void 0 : n.map((l, s) => /* @__PURE__ */ e.createElement("span", { className: "rrk-projects-chip", key: s }, l))), /* @__PURE__ */ e.createElement("div", { className: "rrk-projects-description" }, /* @__PURE__ */ e.createElement("p", null, r.description), /* @__PURE__ */ e.createElement("p", { className: "rrk-projects-features" }, /* @__PURE__ */ e.createElement("span", null, `${t.projects_subtitle}: `), r.features)));
  })));
}
function f() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.soft_skills_title), /* @__PURE__ */ e.createElement("h3", { className: "rrk-soft-skills-subtitle" }, t.soft_skills_subtitle), /* @__PURE__ */ e.createElement("div", { className: "rrk-soft-skills-container" }, t.soft_skills.map(
    (r, a) => /* @__PURE__ */ e.createElement("div", { key: a, className: "rrk-soft-skills-card" }, i(r.icon) ? o(r.icon, {
      className: [
        r.icon.props.className,
        "rrk-soft-skills-icon"
      ].filter(Boolean).join(" ")
    }) : r.icon, /* @__PURE__ */ e.createElement("div", null, /* @__PURE__ */ e.createElement("p", { className: "rrk-soft-skills-skillTitle" }, r.title), /* @__PURE__ */ e.createElement("p", { className: "rrk-soft-skills-skillDescription" }, r.description)))
  )));
}
function x() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.techs_title), /* @__PURE__ */ e.createElement("div", { className: "rrk-technologies-container" }, t.technologies.map(
    (r, a) => /* @__PURE__ */ e.createElement("div", { key: a, className: "rrk-technologies-chip" }, i(r.icon) ? o(r.icon, {
      className: [
        r.icon.props.className,
        "rrk-technologies-icon"
      ].filter(Boolean).join(" ")
    }) : r.icon, /* @__PURE__ */ e.createElement("span", { className: "rrk-technologies-text" }, r.name))
  )));
}
function L() {
  const { content: t } = c();
  return /* @__PURE__ */ e.createElement("section", null, /* @__PURE__ */ e.createElement("h2", null, t.works_title), /* @__PURE__ */ e.createElement("div", null, t.works.map(
    (r, a) => /* @__PURE__ */ e.createElement("div", { key: a, className: "rrk-works-work" }, /* @__PURE__ */ e.createElement("div", { className: "rrk-works-workHeader" }, /* @__PURE__ */ e.createElement("div", { className: "rrk-works-leftHeader" }, /* @__PURE__ */ e.createElement("h3", { className: "rrk-works-title" }, r.title), /* @__PURE__ */ e.createElement("p", { className: "rrk-works-company" }, r.company)), /* @__PURE__ */ e.createElement("div", { className: "rrk-works-rightHeader" }, /* @__PURE__ */ e.createElement("p", { className: "rrk-dateChip" }, r.date), /* @__PURE__ */ e.createElement("p", { className: "rrk-works-location" }, r.location))), /* @__PURE__ */ e.createElement("ul", { className: "rrk-works-points" }, r.points.map(
      (n, l) => /* @__PURE__ */ e.createElement("li", { key: l }, n)
    )))
  )));
}
export {
  E as ResumeAbout,
  p as ResumeContact,
  g as ResumeCourses,
  w as ResumeHeader,
  v as ResumeLayout,
  N as ResumeProjects,
  f as ResumeSoftSkills,
  x as ResumeTechnologies,
  L as ResumeWorks
};
