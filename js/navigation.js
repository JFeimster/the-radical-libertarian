document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".site-nav a").forEach((link) => {
    const href = link.getAttribute("href") || "";
    const target = href.split("/").pop() || "index.html";
    if (target === currentPath) {
      link.classList.add("is-active");
      link.setAttribute("aria-current", "page");
    }
  });
});
