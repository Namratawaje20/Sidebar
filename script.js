const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
 
openBtn.addEventListener("click", () => {
  sidebar.style.width = "250px"; 
  openBtn.style.display = "none";
});
 
closeBtn.addEventListener("click", () => {
  sidebar.style.width = "0"; 
  openBtn.style.display = "block"; 
});