document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll("[data-copy-text]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy-text") || "";
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "COPIED";
        setTimeout(() => {
          button.textContent = "COPY";
        }, 1400);
      } catch (error) {
        button.textContent = "COPY FAILED";
      }
    });
  });

  const guestForm = document.querySelector("[data-guest-form]");
  if (guestForm) {
    guestForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const result = document.querySelector("[data-guest-result]");
      if (result) {
        result.innerHTML = "<h2>Pitch staged.</h2><p>This static form is a front-end scaffold. Wire it to Tally, Formspree, Basin, Airtable, Notion, or your preferred intake tool when ready.</p>";
      }
    });
  }
});
