document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.querySelector(".navbar .mobile-menu-toggle");

  const navMobile = document.querySelector(".navbar .mobile-menu-items");

  toggleBtn.addEventListener("click", () => {
    navMobile.classList.toggle("active");
  });
});

// Change navbar bacground on scroll
window.addEventListener("scroll", () => {
  const scrollBar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    scrollBar.classList.add("navbar-scroll");
  } else {
    scrollBar.classList.remove("navbar-scroll");
  }
});
