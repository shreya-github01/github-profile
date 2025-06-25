const entryBox = document.getElementById("entry");
const entriesContainer = document.getElementById("entries");
const music = document.getElementById("bgMusic");
const quoteBox = document.getElementById("quote");
let isMusicPlaying = false;

const quotes = [
  '"Peace comes from within. Do not seek it without." – Buddha',
  '"The quieter you become, the more you are able to hear." – Rumi',
  '"Inhale the future, exhale the past." – Unknown',
  '"Heaven is under our feet as well as over our heads." – Thoreau'
];

function saveEntry() {
  const text = entryBox.value.trim();
  if (!text) return;
  const date = new Date().toLocaleString();
  const final = `[${date}]\n${text}\n\n`;
  const old = localStorage.getItem("diary") || "";
  localStorage.setItem("diary", old + final);
  entryBox.value = "";
}

function toggleDiary() {
  entriesContainer.classList.toggle("hidden");
  if (!entriesContainer.classList.contains("hidden")) {
    renderEntries();
  }
}

function renderEntries() {
  const saved = localStorage.getItem("diary");
  entriesContainer.textContent = saved || "No entries yet.";
}

function toggleMusic() {
  if (isMusicPlaying) {
    music.pause();
  } else {
    music.play();
  }
  isMusicPlaying = !isMusicPlaying;
}

function createSnowflake() {
  const snow = document.createElement("div");
  snow.classList.add("snowflake");
  snow.textContent = ["🌸", "🌸",][Math.floor(Math.random() * 3)];
  snow.style.left = Math.random() * 100 + "vw";
  snow.style.animationDuration = (5 + Math.random() * 5) + "s";
  document.getElementById("snow").appendChild(snow);
  setTimeout(() => snow.remove(), 10000);
}

// Start snowfall and rotating quotes
setInterval(createSnowflake, 300);
setInterval(() => {
  quoteBox.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}, 8000);
