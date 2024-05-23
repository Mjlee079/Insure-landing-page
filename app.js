const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  const menu = document.querySelector(".nav-links");
  const icon = menuBtn.querySelector("img");
  menu.classList.toggle("active");

});
