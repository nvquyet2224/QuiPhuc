import Swiper, { Navigation, Scrollbar, FreeMode, Mousewheel } from "swiper";


export function combineSlider() {
    if (document.querySelector(".combineSlider")) {
        new Swiper(".combineSlider", {
            modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 4,
            spaceBetween: 18,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                320: {
                    slidesPerView: 2.6,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 18,
                },
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function () { },
                click(swiper) { },
            },
        });
    }
}
