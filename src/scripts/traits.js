const swiper = new Swiper(".swiper", {
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-paginations",
    clickable: true,
    renderBullet: function (index, className) {
      // Array of image URLs for pagination (replace with your own image URLs)
      const images = [
        "./src/assets/images/traits/hog-1.webp",
        "./src/assets/images/traits/hog-2.webp",
        "./src/assets/images/traits/hog-3.webp",
        "./src/assets/images/traits/hog-4.webp",
        "./src/assets/images/traits/hog-5.webp",
        "./src/assets/images/traits/hog-6.webp",
      ];
      return `<div class="${className}">
      <img src="${images[index]}" alt="hog-${index + 1}">
      </div>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
