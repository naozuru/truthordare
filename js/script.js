import { TOD_DATA, welcomeMessages } from "./data.js";

/* =========================
   DETECT MODE FROM PAGE
========================= */
const page = window.location.pathname.toLowerCase();

let mode = "basic";
if (page.includes("couple")) mode = "couple";
else if (page.includes("kids")) mode = "kids";
else if (page.includes("extreme")) mode = "extreme";

const truths = TOD_DATA[mode].truths;
const dares = TOD_DATA[mode].dares;

/* =========================
   STATE
========================= */
let lastTruthIndex = -1;
let lastDareIndex = -1;
let darkMode = false;
let currentMessageIndex = 0;

/* =========================
   ELEMENTS (SAFE)
========================= */
const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");
const truthButton = document.getElementById("truthButton");
const dareButton = document.getElementById("dareButton");
const resultElement = document.getElementById("result");
const modeTitle = document.getElementById("modeTitle");

/* =========================
   SET MODE TITLE (OPTIONAL)
========================= */
if (modeTitle) {
  modeTitle.textContent =
    "🎲 " + mode.charAt(0).toUpperCase() + mode.slice(1) + " Mode";
}

/* =========================
   DARK MODE
========================= */
function toggleDarkMode() {
  darkMode = !darkMode;

  document.body.classList.toggle("dark-mode", darkMode);

  if (modeIcon) {
    modeIcon.classList.toggle("bi-moon-stars-fill", !darkMode);
    modeIcon.classList.toggle("bi-sun-fill", darkMode);
  }

  localStorage.setItem("darkMode", darkMode);
}

// Load saved dark mode
(function loadDarkMode() {
  const saved = localStorage.getItem("darkMode");
  if (saved === "true") {
    darkMode = false;
    toggleDarkMode();
  }
})();

/* =========================
   RANDOM PICK (ANTI DUPLICATE)
========================= */
function getRandomIndex(length, lastIndex) {
  if (length <= 1) return 0;

  let index;
  do {
    index = Math.floor(Math.random() * length);
  } while (index === lastIndex);

  return index;
}

function getRandomTruth() {
  if (!truths.length) return "Truth belum tersedia.";
  lastTruthIndex = getRandomIndex(truths.length, lastTruthIndex);
  return truths[lastTruthIndex];
}

function getRandomDare() {
  if (!dares.length) return "Dare belum tersedia.";
  lastDareIndex = getRandomIndex(dares.length, lastDareIndex);
  return dares[lastDareIndex];
}

/* =========================
   WELCOME MESSAGE
========================= */
function showWelcomeMessage() {
  if (!welcomeMessages || !welcomeMessages.length) return;

  const message = welcomeMessages[currentMessageIndex];
  if (!message) return;

  if (window.confirm(message + "\n\nKlik OK untuk melanjutkan.")) {
    currentMessageIndex++;
    if (currentMessageIndex < welcomeMessages.length) {
      showWelcomeMessage();
    }
  }
}

/* =========================
   EVENTS
========================= */
if (truthButton && resultElement) {
  truthButton.addEventListener("click", () => {
    resultElement.textContent = getRandomTruth();
  });
}

if (dareButton && resultElement) {
  dareButton.addEventListener("click", () => {
    resultElement.textContent = getRandomDare();
  });
}

if (modeToggle) {
  modeToggle.addEventListener("click", toggleDarkMode);
}

/* =========================
   INIT
========================= */
showWelcomeMessage();
