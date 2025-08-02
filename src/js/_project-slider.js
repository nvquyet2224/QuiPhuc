import Swiper, { Navigation } from "swiper";


export function projectSlider() {
    if (document.querySelector(".projectsSlider")) {
        const slide = document.querySelector(".projectsSlider");
        const elm = document.querySelector("#projects");
        new Swiper(slide, {
            modules: [Navigation],
            effect: "slide",
            loop: true,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 40,
            slidesPerGroup: 1,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 40
                }
            },
            navigation: {
                nextEl: elm.querySelector(".nav-next"),
                prevEl: elm.querySelector(".nav-prev"),
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function (swiper) { },
                click(swiper) { },
            },
        });
    }
}