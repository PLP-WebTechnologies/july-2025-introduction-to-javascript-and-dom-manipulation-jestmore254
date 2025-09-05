// ==============================
// Part 1: Variables & Conditionals
// ==============================
let user = "Morgan";
let loggedIn = true;

// Show greeting in console
if (loggedIn) {
  console.log(`Welcome back, ${user}!`);
} else {
  console.log("Please log in to see news updates.");
}

// ==============================
// Part 2: Functions
// ==============================

// Function 1: Create a news card dynamically
function createNewsCard(title, image) {
  const newsList = document.getElementById("news-list");
  const card = document.createElement("div");
  card.classList.add("news-card");

  card.innerHTML = `
    <img src="${image}" alt="News Image">
    <h3>${title}</h3>
  `;

  newsList.appendChild(card);
}

// Function 2: Toggle dark/light mode
function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const button = document.getElementById("theme-toggle");
  button.textContent = document.body.classList.contains("dark-mode")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
}

// ==============================
// Part 3: Loops
// ==============================

const topHeadlines = [
  { title: "Kenya launches AI farming system 🌱", img: "images/news1.jpg" },
  { title: "Safaricom introduces cheaper data bundles 📱", img: "images/news2.jpg" },
  { title: "Nairobi marathon set for October 2025 🏃", img: "images/news3.jpg" }
];

// Using a for loop to display top headlines
for (let i = 0; i < topHeadlines.length; i++) {
  createNewsCard(topHeadlines[i].title, topHeadlines[i].img);
}

// Using forEach for breaking news list
const breakingNews = [
  "Fuel prices expected to drop next week ⛽",
  "KRA introduces new tax reforms 💰",
  "Heavy rains to hit Nairobi 🌧️"
];
breakingNews.forEach((headline) => {
  const li = document.createElement("li");
  li.textContent = headline;
  document.getElementById("breaking-list").appendChild(li);
});

// Tech news loop using for...of
const techNews = [
  "Elon Musk unveils Starlink expansion in Kenya 🚀",
  "Apple to open first Kenyan flagship store 🍏",
  "Google launches AI hub in Nairobi 🤖"
];
for (const tech of techNews) {
  const li = document.createElement("li");
  li.textContent = tech;
  document.getElementById("tech-list").appendChild(li);
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// 1. Add user-submitted news headline
document.getElementById("add-btn").addEventListener("click", () => {
  const input = document.getElementById("news-input");
  if (input.value.trim() === "") {
    alert("Please enter a valid headline!");
  } else {
    createNewsCard(input.value, "images/news1.jpg");
    input.value = "";
  }
});

// 2. Toggle theme on button click
document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

// 3. Change main title dynamically
document.getElementById("main-title").addEventListener("click", () => {
  document.getElementById("main-title").textContent = "🔥 Morgan Breaking News!";
});
