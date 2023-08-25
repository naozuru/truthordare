import { truths, dares, welcomeMessages } from "./data.js";

let lastTruthIndex = -1;
let lastDareIndex = -1;
let darkMode = false;

const modeToggle = document.getElementById("modeToggle");
const modeIcon = document.getElementById("modeIcon");
const truthButton = document.getElementById("truthButton");
const dareButton = document.getElementById("dareButton");
const resultElement = document.getElementById("result");

let currentMessageIndex = 0;

function toggleDarkMode() {
  darkMode = !darkMode;
  if (darkMode) {
    document.body.classList.add("dark-mode");
    modeIcon.classList.remove("bi-moon-stars-fill");
    modeIcon.classList.add("bi-sun-fill");
  } else {
    document.body.classList.remove("dark-mode");
    modeIcon.classList.remove("bi-sun-fill");
    modeIcon.classList.add("bi-moon-stars-fill");
  }
}

function getRandomTruth() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * truths.length);
  } while (randomIndex === lastTruthIndex);
  lastTruthIndex = randomIndex;
  return truths[randomIndex];
}

function getRandomDare() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * dares.length);
  } while (randomIndex === lastDareIndex);
  lastDareIndex = randomIndex;
  return dares[randomIndex];
}

function showWelcomeMessage() {
    const message = welcomeMessages[currentMessageIndex];
    if (message) {
        if (window.confirm(message + "\n\nKlik OK untuk melanjutkan.")) {
            currentMessageIndex++;
            if (currentMessageIndex >= welcomeMessages.length) {
                resultElement.textContent = "";
                return;
            }
            showWelcomeMessage();
        }
    }
}

truthButton.addEventListener("click", () => {
  const randomTruth = getRandomTruth();
  resultElement.textContent = randomTruth;
});

dareButton.addEventListener("click", () => {
  const randomDare = getRandomDare();
  resultElement.textContent = randomDare;
});

modeToggle.addEventListener("click", toggleDarkMode);

showWelcomeMessage();