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

  var SECTIONS = [
    "interests",
    "publications",
    "skills",
    "experience",
    "education",
    "projects",
    "contact",
  ];

  function renderHeader() {
    var u = DATA.ui[lang];
    document.getElementById("brand").textContent = t(DATA.profile.name);
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

  function hero() {
    var p = DATA.profile;
    var u = DATA.ui[lang];
    var links = iconLinks(p.links);
    var interests = DATA.interests
      .map(function (i) {
        return '<span class="chip">' + esc(t(i)) + "</span>";
      })
      .join("");
    return (
      '<section class="hero">' +
      "<h1>" +
      esc(t(p.name)) +
      "</h1>" +
      '<p class="lead">' +
      esc(t(p.title)) +
      "</p>" +
      '<p class="summary">' +
      esc(t(p.summary)) +
      "</p>" +
      '<div class="meta">' +
      "<span>" +
      esc(t(p.location)) +
      "</span>" +
      '<a href="mailto:' +
      esc(p.email) +
      '">' +
      esc(p.email) +
      "</a>" +
      "</div>" +
      '<div class="links">' +
      links +
      "</div>" +
      "</section>" +
      '<section id="interests" class="section">' +
      "<h2>" +
      esc(u.interests) +
      "</h2>" +
      '<div class="chips">' +
      interests +
      "</div>" +
      "</section>"
    );
  }

  function skills() {
    var u = DATA.ui[lang];
    var cards = DATA.skills
      .map(function (g) {
        var items = g.items
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
          .join("");
        return (
          '<div class="skill-card"><h3>' +
          esc(t(g.title)) +
          '</h3><ul class="skill-list">' +
          items +
          "</ul></div>"
        );
      })
      .join("");
    return (
      '<section id="skills" class="section"><h2>' +
      esc(u.skills) +
      '</h2><div class="skill-grid">' +
      cards +
      "</div></section>"
    );
  }

  function timeline(rows) {
    return rows
      .map(function (e) {
        return (
          '<div class="item">' +
          '<div class="period">' +
          esc(e.period) +
          "</div>" +
          "<div>" +
          "<h3>" +
          esc(t(e.role || e.degree || e.text)) +
          "</h3>" +
          (e.company || e.school
            ? '<div class="company">' + esc(t(e.company || e.school)) + "</div>"
            : "") +
          (e.summary || e.detail
            ? "<p>" + esc(t(e.summary || e.detail)) + "</p>"
            : "") +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function experience() {
    var u = DATA.ui[lang];
    return (
      '<section id="experience" class="section"><h2>' +
      esc(u.experience) +
      '</h2><div class="timeline">' +
      timeline(DATA.experience) +
      "</div></section>"
    );
  }

  function projects() {
    var u = DATA.ui[lang];
    var cards = DATA.projects
      .slice()
      .sort(function (a, b) {
        return (b.year || 0) - (a.year || 0);
      })
      .map(function (p) {
        var tech = (p.tech || [])
          .map(function (x) {
            return "<span>" + esc(x) + "</span>";
          })
          .join("");
        return (
          '<div class="card">' +
          '<div class="period">' +
          esc(p.period) +
          "</div>" +
          "<h3>" +
          esc(t(p.title)) +
          "</h3>" +
          '<div class="role">' +
          esc(t(p.role)) +
          "</div>" +
          "<p>" +
          esc(t(p.description)) +
          "</p>" +
          '<div class="tech">' +
          tech +
          "</div>" +
          "</div>"
        );
      })
      .join("");
    return (
      '<section id="projects" class="section"><h2>' +
      esc(u.projects) +
      '</h2><div class="cards">' +
      cards +
      "</div></section>"
    );
  }

  function publications() {
    var u = DATA.ui[lang];
    var items = DATA.publications
      .map(function (p) {
        var doi = p.doi
          ? ' <a href="https://doi.org/' +
            esc(p.doi) +
            '" target="_blank" rel="noopener">doi:' +
            esc(p.doi) +
            "</a>"
          : "";
        return (
          '<div class="pub">' +
          '<p class="title">' +
          esc(p.title) +
          "</p>" +
          '<p class="authors">' +
          esc(p.authors) +
          "</p>" +
          '<p class="venue"><em>' +
          esc(p.venue) +
          "</em> · " +
          esc(p.year) +
          doi +
          "</p>" +
          "</div>"
        );
      })
      .join("");
    return (
      '<section id="publications" class="section"><h2>' +
      esc(u.publications) +
      "</h2>" +
      items +
      "</section>"
    );
  }

  function education() {
    var u = DATA.ui[lang];
    var html =
      '<section id="education" class="section"><h2>' +
      esc(u.education) +
      '</h2><div class="timeline">' +
      timeline(DATA.education) +
      "</div>";
    return html + "</section>";
  }

  function contact() {
    var p = DATA.profile;
    var u = DATA.ui[lang];
    var links = iconLinks(p.links);
    return (
      '<section id="contact" class="section">' +
      "<h2>" +
      esc(u.contact) +
      "</h2>" +
      '<div class="contact">' +
      '<a href="mailto:' +
      esc(p.email) +
      '"><span class="label">Email</span>' +
      esc(p.email) +
      "</a>" +
      '<div class="links">' +
      links +
      "</div>" +
      "</div>" +
      "</section>"
    );
  }

  function render() {
    var u = DATA.ui[lang];
    document.documentElement.lang = lang === "ko" ? "ko" : "en";
    document.title = t(DATA.profile.name) + " — " + t(DATA.profile.title);
    renderHeader();
    document.getElementById("app").innerHTML =
      hero() +
      publications() +
      skills() +
      experience() +
      education() +
      projects() +
      contact();
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
