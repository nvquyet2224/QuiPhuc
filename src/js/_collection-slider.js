import Swiper, { Navigation } from "swiper";


export function collectionSlider() {
    const setCurrent = (target) => {
        // nav
        // banner
        document.querySelectorAll(".collection_banner--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
        //item
        document.querySelectorAll(".collection_product--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
    };

    if (document.querySelector(".collectionNavSlider")) {
        const elm = document.querySelector("#slider-nav");
        const slide = elm.querySelector(".collectionNavSlider");
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
            spaceBetween: 10,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            navigation: {
                nextEl: elm.querySelector(".nav-next"),
                prevEl: elm.querySelector(".nav-prev"),
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function (swiper) {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    const target = activeSlide.getAttribute("data-target");

                    console.log(
                        "Active slide element:",
                        activeSlide.getAttribute("data-target")
                    );
                    setCurrent(target);
                },
                click(swiper) { },
            },
        });
    }
}