const desktopNav = document.querySelector(".desktop-nav");
const mobileNav = document.querySelector(".mobile-nav");
const menuBtn = document.querySelector(".menu-btn");
const closeBtn = document.querySelector(".close-btn");
const mobileContent = document.querySelector(".mobile-content");
const desktopNavButtons = document.querySelectorAll(".desktop-nav ul li a");
const mobileNavButtons = document.querySelectorAll(".mobile-nav ul li a");

let isNavButtonClicked = false;

// toggle menu
const toggleMenu = () => {
  mobileNav?.classList.toggle("show");
  mobileNav?.classList.toggle("hide");

  mobileContent?.classList.toggle("left-0");
  mobileContent?.classList.toggle("-left-1/2");
};

closeBtn?.addEventListener("click", toggleMenu);
menuBtn?.addEventListener("click", toggleMenu);

// if mobile nav button click close the menu
mobileNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toggleMenu();
  });
});

// if nav button click
desktopNavButtons.forEach((button) => {
  button.addEventListener("click", () => {
    isNavButtonClicked = true;
    setTimeout(() => {
      isNavButtonClicked = false;
    }, 1000);
  });
});
// desktop navbar show and hide
let lastScrollY = 0;
window.addEventListener("scroll", () => {
  if (isNavButtonClicked) {
    desktopNav?.classList.remove("scrolled-up");
    desktopNav?.classList.add("scrolled-down");
    return;
  }

  const scrollValue = window.scrollY;

  if (scrollValue > lastScrollY && lastScrollY > 50) {
    // if scroll down hide the navbar
    desktopNav?.classList.remove("scrolled-up");
    desktopNav?.classList.add("scrolled-down");
  } else {
    // if scroll up show the navbar
    desktopNav?.classList.add("scrolled-up");
    desktopNav?.classList.remove("scrolled-down");
  }

  if (scrollValue < 50) {
    desktopNav?.classList.remove("scrolled-up");
    desktopNav?.classList.remove("scrolled-down");
  }
  lastScrollY = scrollValue;
});

// menuBtn.click();
