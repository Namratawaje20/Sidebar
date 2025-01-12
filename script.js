// Get references to DOM elements
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");

// Open the sidebar 
openBtn.addEventListener("click", () => {
  sidebar.style.width = "250px"; 
  openBtn.style.display = "none";
});

// Close the sidebar 
closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0"; 
  openBtn.style.display = "block"; 
});