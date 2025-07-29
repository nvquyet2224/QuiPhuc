import Swiper from "swiper";


export function promotionSlider() {
    if (document.querySelector(".promotionSlider")) {
        new Swiper(".promotionSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 2,
            spaceBetween: 0,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 0
                }
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });
    }
}