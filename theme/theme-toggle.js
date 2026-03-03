(function () {
  "use strict";

  var STORAGE_KEY = "theme-preference";
  var THEME_EVENT = "codex-theme-change";
  var mediaQuery = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var hasManualPreference = false;

  function getStoredTheme() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "dark" || stored === "light") return stored;
    } catch (e) {
      return null;
    }
    return null;
  }

  function setStoredTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      return;
    }
  }

  function getSystemTheme() {
    return mediaQuery && mediaQuery.matches ? "dark" : "light";
  }

  function getCurrentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function emitThemeChange(theme) {
    window.dispatchEvent(
      new CustomEvent(THEME_EVENT, {
        detail: { theme: theme }
      })
    );
  }

  function updateToggleButton(theme) {
    var button = document.getElementById("theme-toggle-btn");
    if (!button) return;

    var darkLabel = button.getAttribute("data-label-dark") || "Switch to dark mode";
    var lightLabel = button.getAttribute("data-label-light") || "Switch to light mode";
    var nextLabel = theme === "dark" ? lightLabel : darkLabel;

    button.setAttribute("aria-label", nextLabel);
    button.setAttribute("title", nextLabel);
    button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function applyTheme(theme, options) {
    var nextTheme = theme === "dark" ? "dark" : "light";
    var config = options || {};

    document.documentElement.setAttribute("data-theme", nextTheme);
    document.documentElement.style.colorScheme = nextTheme;
    updateToggleButton(nextTheme);

    if (config.persist) {
      setStoredTheme(nextTheme);
    }

    if (config.emit !== false) {
      emitThemeChange(nextTheme);
    }
  }

  function toggleTheme() {
    var nextTheme = getCurrentTheme() === "dark" ? "light" : "dark";
    hasManualPreference = true;
    applyTheme(nextTheme, { persist: true, emit: true });
  }

  function bindToggleButton() {
    var button = document.getElementById("theme-toggle-btn");
    if (!button || button.getAttribute("data-theme-ready") === "true") return;

    button.setAttribute("data-theme-ready", "true");
    button.addEventListener("click", toggleTheme);
    updateToggleButton(getCurrentTheme());
  }

  function initTheme() {
    var stored = getStoredTheme();
    hasManualPreference = !!stored;

    var initialTheme = stored || getSystemTheme();
    applyTheme(initialTheme, { emit: true });
  }

  function handleSystemThemeChange(event) {
    if (hasManualPreference) return;
    applyTheme(event.matches ? "dark" : "light", { emit: true });
  }

  initTheme();
  bindToggleButton();

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindToggleButton);
  }

  if (mediaQuery) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleSystemThemeChange);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(handleSystemThemeChange);
    }
  }
})();
