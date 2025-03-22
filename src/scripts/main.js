window.addEventListener("scroll", function () {
  const hogDiv = document.querySelector(".hog");
  const hero = document.querySelector(".hero");
  if (!hogDiv) return; // Exit if no .hog div found

  const heroHeight = hero.clientHeight;
  const scrollHeight = window.scrollY;

  // Check if div is fully in view
  if ((heroHeight / 100) * 20 <= scrollHeight) {
    hogDiv.classList.add("hog-down");
    hogDiv.classList.remove("hog-up");
  }
  // Check if div is less than fully in view
  else {
    hogDiv.classList.add("hog-up");
    hogDiv.classList.remove("hog-down");
  }
});
