document.addEventListener("DOMContentLoaded", () => {
  const statusPanels = document.querySelectorAll("[data-provider-status]");
  if (!statusPanels.length) return;

  statusPanels.forEach((panel) => {
    panel.innerHTML = `
      <h2>Provider wiring scaffold active.</h2>
      <p>No real external URL or provider endpoint has been inserted by this script. Add confirmed URLs only.</p>
    `;
  });

  document.querySelectorAll("[data-copy-provider-template]").forEach((button) => {
    button.addEventListener("click", async () => {
      const text = button.getAttribute("data-copy-provider-template") || "";
      try {
        await navigator.clipboard.writeText(text);
        button.textContent = "COPIED";
        setTimeout(() => (button.textContent = "COPY TEMPLATE"), 1400);
      } catch (error) {
        button.textContent = "COPY FAILED";
      }
    });
  });
});
