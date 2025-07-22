import Swiper, { Navigation } from "swiper";

export function relationGallery() {
  if (document.querySelector(".relationSlider")) {
    new Swiper(".relationSlider", {
      modules: [Navigation],
      effect: "slide",
      loop: false,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1,
      spaceBetween: 20,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      breakpoints: {
        1023: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: ".relation__box--gallery .swiper-button-next",
        prevEl: ".relation__box--gallery .swiper-button-prev",
      },
      on: {
        init: function (swiper) { },
        transitionStart: function () {
        },
        transitionEnd: function () { },
      },
    });
  }

}
