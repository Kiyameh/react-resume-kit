import P from "react";
import * as D from "lucide-react";
import { Globe as xe, Download as je, Mail as be, Phone as ve, MapPin as Ne, InfoIcon as ge, ExternalLink as ke } from "lucide-react";
import * as F from "@icons-pack/react-simple-icons";
var w = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var X;
function Re() {
  if (X) return R;
  X = 1;
  var n = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function a(o, i, _) {
    var b = null;
    if (_ !== void 0 && (b = "" + _), i.key !== void 0 && (b = "" + i.key), "key" in i) {
      _ = {};
      for (var k in i)
        k !== "key" && (_[k] = i[k]);
    } else _ = i;
    return i = _.ref, {
      $$typeof: n,
      type: o,
      key: b,
      ref: i !== void 0 ? i : null,
      props: _
    };
  }
  return R.Fragment = r, R.jsx = a, R.jsxs = a, R;
}
var E = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Z;
function Ee() {
  return Z || (Z = 1, process.env.NODE_ENV !== "production" && function() {
    function n(t) {
      if (t == null) return null;
      if (typeof t == "function")
        return t.$$typeof === he ? null : t.displayName || t.name || null;
      if (typeof t == "string") return t;
      switch (t) {
        case C:
          return "Fragment";
        case ce:
          return "Profiler";
        case oe:
          return "StrictMode";
        case ue:
          return "Suspense";
        case _e:
          return "SuspenseList";
        case me:
          return "Activity";
      }
      if (typeof t == "object")
        switch (typeof t.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), t.$$typeof) {
          case re:
            return "Portal";
          case ie:
            return (t.displayName || "Context") + ".Provider";
          case ae:
            return (t._context.displayName || "Context") + ".Consumer";
          case le:
            var s = t.render;
            return t = t.displayName, t || (t = s.displayName || s.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
          case de:
            return s = t.displayName || null, s !== null ? s : n(t.type) || "Memo";
          case W:
            s = t._payload, t = t._init;
            try {
              return n(t(s));
            } catch {
            }
        }
      return null;
    }
    function r(t) {
      return "" + t;
    }
    function a(t) {
      try {
        r(t);
        var s = !1;
      } catch {
        s = !0;
      }
      if (s) {
        s = console;
        var c = s.error, l = typeof Symbol == "function" && Symbol.toStringTag && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c.call(
          s,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          l
        ), r(t);
      }
    }
    function o(t) {
      if (t === C) return "<>";
      if (typeof t == "object" && t !== null && t.$$typeof === W)
        return "<...>";
      try {
        var s = n(t);
        return s ? "<" + s + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var t = $.A;
      return t === null ? null : t.getOwner();
    }
    function _() {
      return Error("react-stack-top-frame");
    }
    function b(t) {
      if (U.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning) return !1;
      }
      return t.key !== void 0;
    }
    function k(t, s) {
      function c() {
        G || (G = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          s
        ));
      }
      c.isReactWarning = !0, Object.defineProperty(t, "key", {
        get: c,
        configurable: !0
      });
    }
    function ne() {
      var t = n(this.type);
      return J[t] || (J[t] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), t = this.props.ref, t !== void 0 ? t : null;
    }
    function se(t, s, c, l, p, m, O, A) {
      return c = m.ref, t = {
        $$typeof: q,
        type: t,
        key: s,
        props: m,
        _owner: p
      }, (c !== void 0 ? c : null) !== null ? Object.defineProperty(t, "ref", {
        enumerable: !1,
        get: ne
      }) : Object.defineProperty(t, "ref", { enumerable: !1, value: null }), t._store = {}, Object.defineProperty(t._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(t, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(t, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.defineProperty(t, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(t.props), Object.freeze(t)), t;
    }
    function H(t, s, c, l, p, m, O, A) {
      var u = s.children;
      if (u !== void 0)
        if (l)
          if (fe(u)) {
            for (l = 0; l < u.length; l++)
              M(u[l]);
            Object.freeze && Object.freeze(u);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else M(u);
      if (U.call(s, "key")) {
        u = n(t);
        var v = Object.keys(s).filter(function(pe) {
          return pe !== "key";
        });
        l = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", V[u + l] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          l,
          u,
          v,
          u
        ), V[u + l] = !0);
      }
      if (u = null, c !== void 0 && (a(c), u = "" + c), b(s) && (a(s.key), u = "" + s.key), "key" in s) {
        c = {};
        for (var I in s)
          I !== "key" && (c[I] = s[I]);
      } else c = s;
      return u && k(
        c,
        typeof t == "function" ? t.displayName || t.name || "Unknown" : t
      ), se(
        t,
        u,
        m,
        p,
        i(),
        c,
        O,
        A
      );
    }
    function M(t) {
      typeof t == "object" && t !== null && t.$$typeof === q && t._store && (t._store.validated = 1);
    }
    var T = P, q = Symbol.for("react.transitional.element"), re = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), oe = Symbol.for("react.strict_mode"), ce = Symbol.for("react.profiler"), ae = Symbol.for("react.consumer"), ie = Symbol.for("react.context"), le = Symbol.for("react.forward_ref"), ue = Symbol.for("react.suspense"), _e = Symbol.for("react.suspense_list"), de = Symbol.for("react.memo"), W = Symbol.for("react.lazy"), me = Symbol.for("react.activity"), he = Symbol.for("react.client.reference"), $ = T.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, fe = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    T = {
      "react-stack-bottom-frame": function(t) {
        return t();
      }
    };
    var G, J = {}, z = T["react-stack-bottom-frame"].bind(
      T,
      _
    )(), B = S(o(_)), V = {};
    E.Fragment = C, E.jsx = function(t, s, c, l, p) {
      var m = 1e4 > $.recentlyCreatedOwnerStacks++;
      return H(
        t,
        s,
        c,
        !1,
        l,
        p,
        m ? Error("react-stack-top-frame") : z,
        m ? S(o(t)) : B
      );
    }, E.jsxs = function(t, s, c, l, p) {
      var m = 1e4 > $.recentlyCreatedOwnerStacks++;
      return H(
        t,
        s,
        c,
        !0,
        l,
        p,
        m ? Error("react-stack-top-frame") : z,
        m ? S(o(t)) : B
      );
    };
  }()), E;
}
var Q;
function Te() {
  return Q || (Q = 1, process.env.NODE_ENV === "production" ? w.exports = Re() : w.exports = Ee()), w.exports;
}
var e = Te();
const we = "_container_1fqu5_1", ye = "_icon_1fqu5_29", Pe = "_text_1fqu5_39", Ce = "_buttons_1fqu5_49", $e = "_button_1fqu5_49", Se = "_active_1fqu5_99", N = {
  container: we,
  icon: ye,
  text: Pe,
  buttons: Ce,
  button: $e,
  active: Se
}, ee = P.createContext(void 0);
function f() {
  const n = P.useContext(ee);
  if (n === void 0)
    throw new Error("useLanguage must be used within a LanguageProvider");
  return n;
}
function Oe() {
  const { language: n, setLanguage: r, content: a } = f();
  return /* @__PURE__ */ e.jsxs("div", { className: N.container, children: [
    /* @__PURE__ */ e.jsx(xe, { className: N.icon }),
    /* @__PURE__ */ e.jsxs("span", { className: N.text, children: [
      a.switcher_text,
      ":"
    ] }),
    /* @__PURE__ */ e.jsx("nav", { className: N.buttons, children: a.language_labels.map((o, i) => /* @__PURE__ */ e.jsx(
      "button",
      {
        onClick: () => r(o.value),
        className: `${N.button} ${n === o.value ? N.active : ""}`,
        children: o.label
      },
      i
    )) })
  ] });
}
const Ae = "_icon_1tpr3_1", Ie = "_button_1tpr3_11", K = {
  icon: Ae,
  button: Ie
};
function Le() {
  const n = () => {
    window.print();
  };
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      onClick: n,
      className: K.button,
      children: [
        /* @__PURE__ */ e.jsx(je, { className: K.icon }),
        "Descargar Pdf"
      ]
    }
  );
}
const Ye = "_resume_1o2tb_1", De = {
  resume: Ye
};
function Yt({
  initialLanguage: n = "en",
  resumeContent: r,
  enableLanguageSwitch: a,
  enablePdfDownload: o,
  children: i
}) {
  const [_, b] = P.useState(n);
  return /* @__PURE__ */ e.jsx(
    ee.Provider,
    {
      value: { language: _, setLanguage: b, content: r[_] },
      children: /* @__PURE__ */ e.jsxs("main", { className: De.resume, children: [
        i,
        o && /* @__PURE__ */ e.jsx(Le, {}),
        a && /* @__PURE__ */ e.jsx(Oe, {})
      ] })
    }
  );
}
const Fe = "_header_upaou_1", He = "_profile_upaou_17", Me = "_picture_upaou_33", qe = "_image_upaou_87", We = "_name_upaou_99", Ue = "_title_upaou_115", Ge = "_contact_upaou_127", Je = "_contactItem_upaou_165", ze = "_icon_upaou_177", d = {
  header: Fe,
  profile: He,
  picture: Me,
  image: qe,
  name: We,
  title: Ue,
  contact: Ge,
  contactItem: Je,
  icon: ze
};
function Dt() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("header", { className: d.header, children: [
    /* @__PURE__ */ e.jsxs("div", { className: d.profile, children: [
      n.picture && /* @__PURE__ */ e.jsx("div", { className: d.picture, children: /* @__PURE__ */ e.jsx(
        "img",
        {
          src: n.picture,
          alt: "Profile photo",
          className: d.image
        }
      ) }),
      /* @__PURE__ */ e.jsxs("div", { children: [
        /* @__PURE__ */ e.jsx("h1", { className: d.name, children: n.name }),
        /* @__PURE__ */ e.jsx("p", { className: d.title, children: n.title })
      ] })
    ] }),
    /* @__PURE__ */ e.jsxs("div", { className: d.contact, children: [
      /* @__PURE__ */ e.jsxs("div", { className: d.contactItem, children: [
        /* @__PURE__ */ e.jsx(be, { className: d.icon }),
        /* @__PURE__ */ e.jsx("a", { href: `mailto:${n.email}`, children: n.email })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: d.contactItem, children: [
        /* @__PURE__ */ e.jsx(ve, { className: d.icon }),
        /* @__PURE__ */ e.jsx("a", { href: `tel:${n.phone}`, children: n.phone })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { className: d.contactItem, children: [
        /* @__PURE__ */ e.jsx(Ne, { className: d.icon }),
        /* @__PURE__ */ e.jsx("span", { children: n.location })
      ] })
    ] })
  ] });
}
const Be = "_card_8peg5_1", Ve = "_icon_8peg5_35", Xe = "_text_8peg5_65", L = {
  card: Be,
  icon: Ve,
  text: Xe
};
function Ft() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.about_title }),
    /* @__PURE__ */ e.jsxs("div", { className: L.card, children: [
      /* @__PURE__ */ e.jsx(ge, { className: L.icon }),
      /* @__PURE__ */ e.jsx("p", { className: L.text, children: n.about_text })
    ] })
  ] });
}
const Ze = "_work_1shpf_1", Qe = "_workHeader_1shpf_7", Ke = "_leftHeader_1shpf_23", et = "_rightHeader_1shpf_33", tt = "_title_1shpf_63", nt = "_location_1shpf_73", st = "_company_1shpf_89", rt = "_points_1shpf_105", x = {
  work: Ze,
  workHeader: Qe,
  leftHeader: Ke,
  rightHeader: et,
  title: tt,
  location: nt,
  company: st,
  points: rt
}, ot = "_dateChip_1n4d4_1", te = {
  dateChip: ot
};
function Ht() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.works_title }),
    /* @__PURE__ */ e.jsx("div", { children: n.works.map((r, a) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: x.work,
        children: [
          /* @__PURE__ */ e.jsxs("div", { className: x.workHeader, children: [
            /* @__PURE__ */ e.jsxs("div", { className: x.leftHeader, children: [
              /* @__PURE__ */ e.jsx("h3", { className: x.title, children: r.title }),
              /* @__PURE__ */ e.jsx("p", { className: x.company, children: r.company })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { className: x.rightHeader, children: [
              /* @__PURE__ */ e.jsx("p", { className: te.dateChip, children: r.date }),
              /* @__PURE__ */ e.jsx("p", { className: x.location, children: r.location })
            ] })
          ] }),
          /* @__PURE__ */ e.jsx("ul", { className: x.points, children: r.points.map((o, i) => /* @__PURE__ */ e.jsx("li", { children: o }, i)) })
        ]
      },
      a
    )) })
  ] });
}
const ct = "_course_189mo_1", at = "_degree_189mo_29", it = "_school_189mo_49", Y = {
  course: ct,
  degree: at,
  school: it
};
function Mt() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.courses_title }),
    n.courses.map((r, a) => /* @__PURE__ */ e.jsxs(
      "div",
      {
        className: Y.course,
        children: [
          /* @__PURE__ */ e.jsxs("div", { children: [
            /* @__PURE__ */ e.jsx("h3", { className: Y.degree, children: r.degree }),
            /* @__PURE__ */ e.jsx("p", { className: Y.school, children: r.school })
          ] }),
          /* @__PURE__ */ e.jsx("p", { className: te.dateChip, children: r.date })
        ]
      },
      a
    ))
  ] });
}
const lt = "_techContainer_d2kpw_1", ut = "_techChip_d2kpw_15", _t = "_icon_d2kpw_45", dt = "_text_d2kpw_55", y = {
  techContainer: lt,
  techChip: ut,
  icon: _t,
  text: dt
};
function qt() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.techs_title }),
    /* @__PURE__ */ e.jsx("div", { className: y.techContainer, children: n.technologies.map((r, a) => {
      const o = F[r.icon];
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: y.techChip,
          children: [
            /* @__PURE__ */ e.jsx(o, { className: y.icon }),
            /* @__PURE__ */ e.jsx("span", { className: y.text, children: r.name })
          ]
        },
        a
      );
    }) })
  ] });
}
const mt = "_subtitle_18ftl_1", ht = "_container_18ftl_27", ft = "_skill_18ftl_59", pt = "_icon_18ftl_87", xt = "_skillTitle_18ftl_107", jt = "_skillDescription_18ftl_125", g = {
  subtitle: mt,
  container: ht,
  skill: ft,
  icon: pt,
  skillTitle: xt,
  skillDescription: jt
};
function Wt() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.soft_skills_title }),
    /* @__PURE__ */ e.jsx("h3", { className: g.subtitle, children: n.soft_skills_subtitle }),
    /* @__PURE__ */ e.jsx("div", { className: g.container, children: n.soft_skills.map((r, a) => {
      const o = D[r.icon];
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: g.skill,
          children: [
            /* @__PURE__ */ e.jsx(o, { className: g.icon }),
            /* @__PURE__ */ e.jsxs("div", { children: [
              /* @__PURE__ */ e.jsx("p", { className: g.skillTitle, children: r.title }),
              /* @__PURE__ */ e.jsx("p", { className: g.skillDescription, children: r.description })
            ] })
          ]
        },
        a
      );
    }) })
  ] });
}
const bt = "_header_1nvlo_1", vt = "_project_1nvlo_11", Nt = "_title_1nvlo_19", gt = "_icon_1nvlo_39", kt = "_technologies_1nvlo_65", Rt = "_chip_1nvlo_89", Et = "_description_1nvlo_141", Tt = "_features_1nvlo_149", j = {
  header: bt,
  project: vt,
  title: Nt,
  icon: gt,
  technologies: kt,
  chip: Rt,
  description: Et,
  features: Tt
};
function Ut() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.projects_title }),
    /* @__PURE__ */ e.jsx("div", { children: n.projects.map((r, a) => {
      var o;
      return /* @__PURE__ */ e.jsxs(
        "div",
        {
          className: j.project,
          children: [
            /* @__PURE__ */ e.jsxs("div", { className: j.header, children: [
              /* @__PURE__ */ e.jsx("h3", { className: j.title, children: r.title }),
              r.link && /* @__PURE__ */ e.jsx(
                "a",
                {
                  href: `//${r.link}`,
                  target: "_blank",
                  rel: "noreferrer noopener",
                  children: /* @__PURE__ */ e.jsx(ke, { className: j.icon })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsx("div", { className: j.technologies, children: (o = r.technologies) == null ? void 0 : o.map((i, _) => /* @__PURE__ */ e.jsx(
              "span",
              {
                className: j.chip,
                children: i
              },
              _
            )) }),
            /* @__PURE__ */ e.jsxs("div", { className: j.description, children: [
              /* @__PURE__ */ e.jsx("p", { children: r.description }),
              /* @__PURE__ */ e.jsxs("p", { className: j.features, children: [
                /* @__PURE__ */ e.jsx("span", { children: `${n.projects_subtitle}: ` }),
                r.features
              ] })
            ] })
          ]
        },
        a
      );
    }) })
  ] });
}
const wt = "_socialButtons_1bflo_1", yt = "_button_1bflo_29", Pt = "_bigIcon_1bflo_79", Ct = "_url_1bflo_89", $t = "_icon_1bflo_113", St = "_atribution_1bflo_129", Ot = "_github_1bflo_165", h = {
  socialButtons: wt,
  button: yt,
  bigIcon: Pt,
  url: Ct,
  icon: $t,
  atribution: St,
  github: Ot
}, At = {
  ...F,
  ...D
};
function Gt() {
  const { content: n } = f();
  return /* @__PURE__ */ e.jsxs("section", { children: [
    /* @__PURE__ */ e.jsx("h2", { children: n.connect_title }),
    /* @__PURE__ */ e.jsx("div", { className: h.socialButtons, children: n.social_links.map((r, a) => {
      const o = At[r.icon];
      return /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: `//${r.url}`,
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            /* @__PURE__ */ e.jsx("div", { className: h.button, children: /* @__PURE__ */ e.jsx(o, { className: h.bigIcon }) }),
            /* @__PURE__ */ e.jsxs("div", { className: h.url, children: [
              /* @__PURE__ */ e.jsx(o, { className: h.icon }),
              /* @__PURE__ */ e.jsx("span", { children: r.url })
            ] })
          ]
        },
        a
      );
    }) }),
    /* @__PURE__ */ e.jsxs("p", { className: h.atribution, children: [
      /* @__PURE__ */ e.jsxs("span", { children: [
        (/* @__PURE__ */ new Date()).getFullYear(),
        " ",
        n.author
      ] }),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          href: "https://opensource.org/license/mit",
          target: "_blank",
          rel: "noreferrer noopener",
          children: [
            "MIT License",
            /* @__PURE__ */ e.jsx(F.SiOpensourceinitiative, { className: h.icon })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ e.jsxs("p", { className: h.atribution, children: [
      /* @__PURE__ */ e.jsx("span", { children: "This resume was built with React." }),
      /* @__PURE__ */ e.jsxs(
        "a",
        {
          className: h.github,
          href: "https://github.com/Kiyameh/react-resume-kit",
          children: [
            /* @__PURE__ */ e.jsx("span", { children: " You can fork it here" }),
            /* @__PURE__ */ e.jsx(D.GitFork, { className: h.icon })
          ]
        }
      )
    ] })
  ] });
}
export {
  Ft as ResumeAbout,
  Gt as ResumeContact,
  Mt as ResumeCourses,
  Dt as ResumeHeader,
  Yt as ResumeLayout,
  Ut as ResumeProjects,
  Wt as ResumeSoftSkills,
  qt as ResumeTechnologies,
  Ht as ResumeWorks
};
