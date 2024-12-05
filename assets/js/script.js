document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const mainMenu = document.querySelector(".main-menu");
  const closeMenuButton = document.querySelector(".close-menu");

  // Open menu
  menuToggle.addEventListener("click", () => {
    mainMenu.classList.add("active");
  });

  // Close menu
  closeMenuButton.addEventListener("click", () => {
    mainMenu.classList.remove("active");
  });

  // close menu when clicked outside
  document.addEventListener("click", (event) => {
    if (!mainMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      mainMenu.classList.remove("active");
    }
  });
});
