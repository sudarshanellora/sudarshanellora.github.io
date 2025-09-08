document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("mobile-menu"); // matches your HTML
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    // Toggle mobile menu
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open"); // animate hamburger
    });

    // Close menu when any link is clicked
    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }
});
