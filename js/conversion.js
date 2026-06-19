document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-static-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const targetId = form.getAttribute("data-result-target");
      const target = targetId ? document.getElementById(targetId) : null;
      if (target) {
        target.innerHTML = `<h2>Static scaffold confirmed.</h2><p>This form is front-end only. Wire it to Tally, Formspree, Basin, Airtable, Notion, Beehiiv, ConvertKit, or your preferred provider when ready.</p>`;
      }
    });
  });
});
