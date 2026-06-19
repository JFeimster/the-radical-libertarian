document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer || footer.dataset.enhanced === "true") return;

  const prefix = window.location.pathname.split("/").filter(Boolean).length <= 1 ? "" : "../";
  footer.dataset.enhanced = "true";
  footer.innerHTML = `
    <section class="footer-cta-strip">
      <h2>Join the signal.</h2>
      <p>Essays, audio grenades, tools, archive drops, and useful weirdness. No obedience rituals.</p>
      <p><a class="btn" href="${prefix}newsletter.html">Subscribe Directly</a> <a class="btn" href="${prefix}explore.html">Explore Site</a></p>
    </section>
    <section class="footer-link-grid" aria-label="Footer navigation">
      <div class="footer-link-column"><h3>Core</h3><ul><li><a href="${prefix}index.html">Home</a></li><li><a href="${prefix}start-here.html">Start Here</a></li><li><a href="${prefix}manifesto.html">Manifesto</a></li><li><a href="${prefix}join.html">Join</a></li></ul></div>
      <div class="footer-link-column"><h3>Content</h3><ul><li><a href="${prefix}essays.html">Essays</a></li><li><a href="${prefix}podcast.html">Podcast</a></li><li><a href="${prefix}archive/">Archive</a></li><li><a href="${prefix}updates.html">Updates</a></li></ul></div>
      <div class="footer-link-column"><h3>Tools</h3><ul><li><a href="${prefix}tools/">Tools Index</a></li><li><a href="${prefix}tools/tyranny-detector.html">Tyranny Detector</a></li><li><a href="${prefix}tools/freedom-scorecard.html">Freedom Scorecard</a></li><li><a href="${prefix}tools/propaganda-bingo.html">Propaganda Bingo</a></li></ul></div>
      <div class="footer-link-column"><h3>Utility</h3><ul><li><a href="${prefix}search.html">Search</a></li><li><a href="${prefix}sitemap.html">Sitemap</a></li><li><a href="${prefix}resources/">Resources</a></li><li><a href="${prefix}assets.html">Assets</a></li></ul></div>
    </section>
    <p>© THE RADICAL LIBERTARIAN. NO RIGHTS RESERVED. COPYING IS A VIRTUE.</p>
  `;
});
