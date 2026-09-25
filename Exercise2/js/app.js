
"use strict";

const THEME_STORAGE_KEY = "theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");
const themeLabel = document.querySelector("#theme-label");


function getSavedTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);

    if (savedTheme === LIGHT_THEME || savedTheme === DARK_THEME) {
      return savedTheme;
    }
  } catch (error) {
  }

  return DARK_THEME;
}


function applyTheme(theme) {
  const isLightTheme = theme === LIGHT_THEME;

  document.documentElement.dataset.theme = theme;

  if (themeIcon) {
    themeIcon.textContent = isLightTheme ? "☀" : "☾";
  }

  if (themeLabel) {
    themeLabel.textContent = isLightTheme
      ? "Light mode"
      : "Dark mode";
  }

  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-pressed",
      String(isLightTheme)
    );

    themeToggle.setAttribute(
      "aria-label",
      isLightTheme
        ? "Switch to dark theme"
        : "Switch to light theme"
    );
  }
}


function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    // Theme still works for the current page session.
  }
}


function toggleTheme() {
  const currentTheme =
    document.documentElement.dataset.theme || DARK_THEME;

  const nextTheme =
    currentTheme === DARK_THEME
      ? LIGHT_THEME
      : DARK_THEME;

  applyTheme(nextTheme);
  saveTheme(nextTheme);
}


function initializeTheme() {
  const savedTheme = getSavedTheme();

  applyTheme(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
}

initializeTheme();