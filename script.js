const swiper = new Swiper('.mySwiper', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    '@0.75': {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    '@1.00': {
      slidesPerView: 2,
      spaceBetween: 20,
    }
  },
  
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});