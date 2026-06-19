document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector("main");
  if (!main || document.querySelector("[data-related-module]")) return;

  const path = window.location.pathname;
  const prefix = path.split("/").filter(Boolean).length <= 1 ? "" : "../";
  let links = [
    { title: "Explore", href: prefix + "explore.html", description: "Choose your rabbit hole." },
    { title: "Search", href: prefix + "search.html", description: "Find the signal faster." },
    { title: "Sitemap", href: prefix + "sitemap.html", description: "Open the whole map." }
  ];

  if (path.includes("/essays/") || path.endsWith("essays.html")) {
    links = [
      { title: "Podcast", href: prefix + "podcast.html", description: "Turn the written grenades into audio ones." },
      { title: "Tools", href: prefix + "tools/", description: "Run scorecards, checklists, and printable chaos." },
      { title: "Newsletter", href: prefix + "newsletter.html", description: "Get the next drop directly." }
    ];
  } else if (path.includes("/podcast") || path.endsWith("podcast.html")) {
    links = [
      { title: "Episodes", href: prefix + "podcast/episodes.html", description: "Browse the episode archive." },
      { title: "Clips", href: prefix + "podcast/clips.html", description: "Short-form hooks and quote ammo." },
      { title: "Guest Intake", href: prefix + "guest.html", description: "Pitch a guest or topic." }
    ];
  } else if (path.includes("/tools/")) {
    links = [
      { title: "Essays", href: prefix + "essays.html", description: "Read the arguments behind the tools." },
      { title: "Resources", href: prefix + "resources/", description: "Browse the library and glossary." },
      { title: "Join", href: prefix + "join.html", description: "Subscribe before the algorithm gets moody." }
    ];
  } else if (path.includes("/resources/") || path.endsWith("library.html")) {
    links = [
      { title: "Glossary", href: prefix + "resources/glossary.html", description: "Define the battlefield." },
      { title: "Civic Action", href: prefix + "resources/civic-action.html", description: "Do something beyond posting." },
      { title: "Tools", href: prefix + "tools/", description: "Use the interactive chaos engine." }
    ];
  }

  const module = document.createElement("section");
  module.className = "related-module";
  module.setAttribute("data-related-module", "true");
  module.innerHTML = `<h2 class="related-module-title">Keep digging.</h2><div class="related-link-grid">${links.map(item => `<article class="related-link-card"><h3>${item.title}</h3><p>${item.description}</p><a href="${item.href}">Open</a></article>`).join("")}</div>`;
  main.appendChild(module);
});
