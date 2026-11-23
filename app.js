/* Renders window.PORTFOLIO (data.js) into the page. No build step. */
(function () {
  "use strict";

  var DATA = window.PORTFOLIO;
  var STORE_KEY = "moses-portfolio-lang";
  var lang = localStorage.getItem(STORE_KEY) || "en";

  function t(v) {
    if (v == null) return "";
    if (typeof v === "object") return v[lang] != null ? v[lang] : v.en || "";
    return v;
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // Simple Icons (CC0) paths, 24x24 viewBox; keyed by link label in data.js.
  var ICONS = {
    LinkedIn: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    ORCID: "M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c3.272 0 4.022-2.484 4.022-3.722 0-2.016-1.284-3.722-4.097-3.722h-2.222z",
    "Google Scholar": "M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z",
  };

  // Order = page order; numbers shown next to each section title.
  var SECTIONS = ["history", "skills", "career", "publications", "contact"];

  function num(i) {
    return i < 9 ? "0" + (i + 1) : String(i + 1);
  }

  function title(key, label) {
    var i = SECTIONS.indexOf(key);
    return (
      '<div class="sec-head"><h2>' +
      esc(label) +
      '</h2><span class="num">' +
      num(i) +
      "</span></div>"
    );
  }

  function renderHeader() {
    var u = DATA.ui[lang];
    document.getElementById("brand").textContent = t(DATA.profile.name) + " Portfolio";
    document.getElementById("nav").innerHTML = SECTIONS.map(function (k) {
      return '<a href="#' + k + '">' + esc(u[k]) + "</a>";
    }).join("");
    document.getElementById("langToggle").textContent = u.toggle;
  }

  function iconLinks(links) {
    return links
      .map(function (l) {
        return (
          '<a class="icon-link" href="' +
          esc(l.url) +
          '" target="_blank" rel="noopener" aria-label="' +
          esc(l.label) +
          '" title="' +
          esc(l.label) +
          '"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="' +
          ICONS[l.label] +
          '"/></svg></a>'
        );
      })
      .join("");
  }

  function rows(list, label, body) {
    return (
      '<div class="rows">' +
      list
        .map(function (e) {
          return (
            '<div class="row"><div class="row-label">' +
            label(e) +
            '</div><div class="row-body">' +
            body(e) +
            "</div></div>"
          );
        })
        .join("") +
      "</div>"
    );
  }

  function timeline(list) {
    return rows(
      list,
      function (e) {
        return esc(e.period);
      },
      function (e) {
        var org = e.company || e.school;
        return (
          "<h3>" +
          esc(t(e.role || e.degree)) +
          "</h3>" +
          (org ? '<div class="sub">' + esc(t(org)) + "</div>" : "") +
          (e.summary || e.detail ? "<p>" + esc(t(e.summary || e.detail)) + "</p>" : "")
        );
      }
    );
  }

  function history() {
    var p = DATA.profile;
    var u = DATA.ui[lang];
    var interests = DATA.interests
      .map(function (i) {
        return "<li>" + esc(t(i)) + "</li>";
      })
      .join("");
    return (
      '<section id="history" class="sec">' +
      title("history", u.history) +
      '<div class="hero"><div class="hero-main">' +
      "<h1>" +
      esc(t(p.name)) +
      "</h1>" +
      '<p class="lead">' +
      esc(t(p.title)) +
      "</p>" +
      '<div class="meta"><span>' +
      esc(t(p.location)) +
      '</span><a href="mailto:' +
      esc(p.email) +
      '">' +
      esc(p.email) +
      "</a></div>" +
      '<div class="links">' +
      iconLinks(p.links) +
      "</div></div>" +
      '<div class="hero-side"><p class="summary">' +
      esc(t(p.summary)) +
      "</p></div></div>" +
      '<h3 class="bar">' +
      esc(u.interests) +
      "</h3>" +
      '<div class="rows"><div class="row"><div class="row-label"></div><div class="row-body"><ul>' +
      interests +
      "</ul></div></div></div>" +
      '<h3 class="bar">' +
      esc(u.experience) +
      "</h3>" +
      timeline(DATA.experience) +
      '<h3 class="bar">' +
      esc(u.education) +
      "</h3>" +
      timeline(DATA.education) +
      "</section>"
    );
  }

  function skills() {
    var u = DATA.ui[lang];
    var list = rows(
      DATA.skills,
      function (g) {
        return "<strong>" + esc(t(g.title)) + "</strong>";
      },
      function (g) {
        return (
          "<ul>" +
          g.items
            .map(function (i) {
              var s = t(i);
              var k = s.indexOf(": ");
              return (
                "<li><strong>" +
                esc(k < 0 ? s : s.slice(0, k)) +
                "</strong>" +
                (k < 0 ? "" : esc(s.slice(k))) +
                "</li>"
              );
            })
            .join("") +
          "</ul>"
        );
      }
    );
    return '<section id="skills" class="sec">' + title("skills", u.skills) + list + "</section>";
  }

  function career() {
    var u = DATA.ui[lang];
    var cards = DATA.projects
      .slice()
      .sort(function (a, b) {
        return (b.year || 0) - (a.year || 0);
      })
      .map(function (p) {
        return (
          '<article class="project"><h3>' +
          esc(t(p.title)) +
          '</h3><div class="project-meta"><span>' +
          esc(t(p.role)) +
          "</span><span>" +
          esc((p.tech || []).join(" · ")) +
          "</span><span>" +
          esc(p.period) +
          "</span></div><p>" +
          esc(t(p.description)) +
          "</p></article>"
        );
      })
      .join("");
    return (
      '<section id="career" class="sec">' +
      title("career", u.career) +
      '<div class="projects">' +
      cards +
      "</div></section>"
    );
  }

  function publications() {
    var u = DATA.ui[lang];
    var list = rows(
      DATA.publications,
      function (p) {
        return esc(p.year);
      },
      function (p) {
        var doi = p.doi
          ? ' · <a href="https://doi.org/' +
            esc(p.doi) +
            '" target="_blank" rel="noopener">doi:' +
            esc(p.doi) +
            "</a>"
          : "";
        return (
          '<div class="pub-title">' +
          esc(p.title) +
          '</div><div class="pub-meta">' +
          esc(p.authors) +
          "</div>" +
          '<div class="pub-meta"><em>' +
          esc(p.venue) +
          "</em>" +
          doi +
          "</div>"
        );
      }
    );
    return (
      '<section id="publications" class="sec">' +
      title("publications", u.publications) +
      list +
      "</section>"
    );
  }

  function contact() {
    var p = DATA.profile;
    var u = DATA.ui[lang];
    return (
      '<section id="contact" class="sec">' +
      title("contact", u.contact) +
      '<div class="contact"><a class="mail" href="mailto:' +
      esc(p.email) +
      '">' +
      esc(p.email) +
      '</a><div class="links">' +
      iconLinks(p.links) +
      "</div></div></section>"
    );
  }

  function render() {
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
    document.title = t(DATA.profile.name) + " — " + t(DATA.profile.title);
    renderHeader();
    document.getElementById("app").innerHTML =
      history() + skills() + career() + publications() + contact();
    document.getElementById("footNote").textContent =
      "© " + new Date().getFullYear() + " " + t(DATA.profile.name) + ".";
  }

  document
    .getElementById("langToggle")
    .addEventListener("click", function () {
      lang = lang === "en" ? "ko" : "en";
      localStorage.setItem(STORE_KEY, lang);
      render();
    });

  // Always start at the top on load/refresh (disable browser scroll restoration).
  if ("scrollRestoration" in history) history.scrollRestoration = "manual";
 window.addEventListener("load", function () {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  });

  render();
})();
