document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll("[data-copy-home-link]");

  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const url = button.getAttribute("data-copy-home-link") || window.location.href;
      try {
        await navigator.clipboard.writeText(url);
        button.textContent = "COPIED";
        setTimeout(() => {
          button.textContent = "COPY LINK";
        }, 1400);
      } catch (error) {
        button.textContent = "COPY FAILED";
      }
    });
  });
});
