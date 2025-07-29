
import Swiper, { Navigation, Scrollbar, FreeMode, Mousewheel } from "swiper";

export function productPromotionSlider() {
    if (document.querySelector(".product-promotion .productsSlider")) {
        new Swiper(".product-promotion .productsSlider", {
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
            allowTouchMove: false,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.product-promotion .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            },
            navigation: {
                nextEl: ".product-promotion .nav-next",
                prevEl: ".product-promotion .nav-prev",
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
