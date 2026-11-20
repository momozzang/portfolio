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

  // "education" is parked (hidden) for now — re-add to SECTIONS + render() to restore.
  var SECTIONS = [
    "interests",
    "publications",
    "skills",
    "experience",
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

  function hero() {
    var p = DATA.profile;
    var u = DATA.ui[lang];
    var links = p.links
      .map(function (l) {
        return (
          '<a class="chip link" href="' +
          esc(l.url) +
          '" target="_blank" rel="noopener">' +
          esc(l.label) +
          "</a>"
        );
      })
      .join("");
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
            return '<span class="chip">' + esc(i) + "</span>";
          })
          .join("");
        return (
          '<div class="skill-card"><h3>' +
          esc(t(g.title)) +
          '</h3><div class="chips">' +
          items +
          "</div></div>"
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
          "<h3>" +
          esc(t(p.title)) +
          "</h3>" +
          '<div class="role">' +
          esc(t(p.role)) +
          "</div>" +
          '<div class="period">' +
          esc(p.period) +
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

  // Parked: hidden from the page for now. Re-add to SECTIONS + render() to restore.
  function education() {
    var u = DATA.ui[lang];
    var html =
      '<section id="education" class="section"><h2>' +
      esc(u.education) +
      '</h2><div class="timeline">' +
      timeline(DATA.education) +
      "</div>";
    if (DATA.awards && DATA.awards.length) {
      html +=
        '<h3 class="subhead">' +
        esc(u.awards) +
        '</h3><div class="timeline">' +
        timeline(DATA.awards) +
        "</div>";
    }
    return html + "</section>";
  }

  function contact() {
    var p = DATA.profile;
    var u = DATA.ui[lang];
    var links = p.links
      .map(function (l) {
        return (
          '<a href="' +
          esc(l.url) +
          '" target="_blank" rel="noopener">' +
          esc(l.label) +
          "</a>"
        );
      })
      .join("");
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
      links +
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
