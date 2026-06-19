document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("[data-site-search-input]");
  const results = document.querySelector("[data-site-search-results]");

  if (!input || !results || !window.TRL_SEARCH_INDEX) {
    return;
  }

  function render(items) {
    results.innerHTML = "";

    if (!items.length) {
      results.innerHTML = '<article class="search-result-card"><h3>No signal found.</h3><p>Try a different keyword. The archive is not psychic yet.</p></article>';
      return;
    }

    items.slice(0, 24).forEach((item) => {
      const card = document.createElement("a");
      card.className = "search-result-card";
      card.href = item.url;
      card.innerHTML = `
        <span class="nav-badge">${item.section}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
      results.appendChild(card);
    });
  }

  function search(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      render(window.TRL_SEARCH_INDEX);
      return;
    }

    const items = window.TRL_SEARCH_INDEX.filter((item) => {
      const haystack = [
        item.title,
        item.description,
        item.section,
        (item.tags || []).join(" ")
      ].join(" ").toLowerCase();

      return haystack.includes(normalized);
    });

    render(items);
  }

  input.addEventListener("input", () => search(input.value));
  render(window.TRL_SEARCH_INDEX);
});

window.TRL_SEARCH_INDEX = [
  { title: "Home", url: "index.html", section: "Core", description: "The Radical Libertarian homepage.", tags: ["home", "radical", "libertarian"] },
  { title: "Manifesto", url: "manifesto.html", section: "Core", description: "The ideological spine: self-ownership, exit, speech, and decentralization.", tags: ["manifesto", "sovereignty", "exit"] },
  { title: "Essays", url: "essays.html", section: "Essays", description: "Long-form essays, rants, and philosophical grenades.", tags: ["essays", "writing", "archive"] },
  { title: "Podcast", url: "podcast.html", section: "Podcast", description: "Podcast hub for episodes, clips, transcripts, and guest pitches.", tags: ["podcast", "audio", "clips"] },
  { title: "Join", url: "join.html", section: "Core", description: "Subscribe, follow, and help distribute the signal.", tags: ["subscribe", "join", "newsletter"] },
  { title: "The Architecture of Digital Serfdom", url: "essays/digital-serfdom.html", section: "Essays", description: "How convenience became the leash.", tags: ["technology", "surveillance", "platforms"] },
  { title: "Exit Over Voice", url: "essays/exit-over-voice.html", section: "Essays", description: "Build escape hatches instead of complaint rituals.", tags: ["exit", "sovereignty", "parallel"] },
  { title: "Tools", url: "tools/", section: "Tools", description: "Interactive scorecards, checklists, generators, and printables.", tags: ["tools", "scorecard", "checklist"] },
  { title: "Tyranny Detector", url: "tools/tyranny-detector.html", section: "Tools", description: "A satirical policy sniff test.", tags: ["tyranny", "satire", "quiz"] },
  { title: "Resources", url: "resources/", section: "Resources", description: "Resource hub for liberty, privacy, organizations, and civic action.", tags: ["resources", "library", "lp"] },
  { title: "Library", url: "library.html", section: "Resources", description: "Books, tools, definitions, organizations, and civic action paths.", tags: ["library", "reading", "resources"] },
  { title: "YouTube", url: "youtube.html", section: "Media", description: "Video archive and playlist hub.", tags: ["youtube", "video", "podcast"] },
  { title: "Spotify", url: "spotify.html", section: "Media", description: "Audio archive and listening hub.", tags: ["spotify", "audio", "podcast"] },
  { title: "Assets", url: "assets.html", section: "Assets", description: "Brand assets, icons, social cards, and image prompts.", tags: ["assets", "brand", "og"] },
  { title: "Archive", url: "archive/", section: "Archive", description: "Recovered older platform content.", tags: ["archive", "youtube", "spotify", "instagram"] }
];
