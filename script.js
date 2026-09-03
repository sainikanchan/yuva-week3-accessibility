// AccessPoint Week 3 — accessible interactions
(() => {
  "use strict";

  const menuButton = document.getElementById("menuToggle");
  const navigation = document.getElementById("primaryNav");
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchStatus = document.getElementById("searchStatus");

  // Graceful failure if the expected interactive elements are missing.
  if (!menuButton || !navigation || !searchForm || !searchInput || !searchStatus) {
    console.error("AccessPoint initialization failed: required elements are missing.");
    return;
  }

  function setMenu(open) {
    navigation.classList.toggle("is-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
  }

  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") !== "true";
    setMenu(open);
  });

  // Close the mobile menu after a navigation link is activated.
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  // Escape closes the mobile navigation when it is open.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
      setMenu(false);
      menuButton.focus();
    }
  });

  // Demo search interaction. No network request is required.
  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = searchInput.value.trim();

    if (!query) {
      searchStatus.textContent = "Please enter a search term.";
      searchInput.focus();
      return;
    }

    searchStatus.textContent = `Showing accessible article results for “${query}”.`;
  });
})();
