import Swiper, { Navigation, Scrollbar, FreeMode, Mousewheel } from "swiper";

export function productRelatedSlider() {
    if (document.querySelector(".product-related .productsSlider")) {
        new Swiper(".product-related .productsSlider", {
            modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            },
            navigation: {
                nextEl: ".product-related .nav-next",
                prevEl: ".product-related .nav-prev",
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