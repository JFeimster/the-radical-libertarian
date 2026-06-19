document.addEventListener("DOMContentLoaded", () => {
  const yearNodes = document.querySelectorAll("[data-year]");
  yearNodes.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  const quoteButtons = document.querySelectorAll("[data-random-quote]");
  quoteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const quotes = [
        "Freedom is not supposed to be comfortable.",
        "The leash is always marketed as convenience.",
        "Question the consensus before it becomes a cage.",
        "Exit is a strategy. Voice is a suggestion box.",
        "The state is a fiction with a billing department."
      ];

      const target = document.querySelector(button.dataset.randomQuote);
      if (target) {
        target.textContent = quotes[Math.floor(Math.random() * quotes.length)];
      }
    });
  });
});
