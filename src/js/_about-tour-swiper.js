import Swiper, { Navigation, Pagination } from "swiper";

export function aboutTourSwipper() {
  if (document.querySelector(".tourSlider")) {
    new Swiper(".tourSlider", {
      modules: [Navigation, Pagination],
      effect: "slide",
      loop: false,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1,
      spaceBetween: 24,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      navigation: {
        nextEl: ".about__tour--gallery__box .swiper-button-next",
        prevEl: ".about__tour--gallery__box .swiper-button-prev",
      },
      on: {
        init: function () { },
        transitionStart: function () { },
        transitionEnd: function () { },
      },
    });
  }
}
