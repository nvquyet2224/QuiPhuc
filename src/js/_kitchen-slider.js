
import Swiper, { Autoplay, Pagination, Navigation, Scrollbar } from "swiper";

export function kitchenSlider() {
    const setCurrent = (clickedSlide) => {
        let cur = clickedSlide.querySelector(".kitchen_thumb--img");
        if (!cur) {
            cur = clickedSlide.querySelector(".kitchen_pot");
        }
        const target = cur.getAttribute("data-target");
        // Banner
        document.querySelectorAll(".kitchen_banner--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
        // Hot pot
        document.querySelectorAll(".kitchen_pot").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
    };

    if (document.querySelector(".thumbSlider")) {
        new Swiper(".thumbSlider", {
            modules: [Pagination, Autoplay, Navigation, Scrollbar],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 3,
            spaceBetween: 10,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: ".kitchen_thumb .swiper-scrollbar",
                hide: false,
                draggable: false,
            },
            navigation: {
                nextEl: ".kitchen_thumb .swiper-button-next",
                prevEl: ".kitchen_thumb .swiper-button-prev",
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function () { },
                click(swiper) {
                    const clickedSlide = swiper.clickedSlide;
                    const clickedIndex = swiper.clickedIndex;
                    if (clickedSlide) {
                        setCurrent(clickedSlide);
                        swiper.slideTo(clickedIndex);
                    }
                },
            },
        });

        new Swiper(".cardSlider", {
            modules: [Navigation, Scrollbar],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 10,
            allowTouchMove: false,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: ".cardSlider .swiper-scrollbar",
                hide: false,
                draggable: false,
            },
            navigation: {
                nextEl: ".kitchen .nav-next",
                prevEl: ".kitchen .nav-prev",
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) {
                    const currentIndex = swiper.activeIndex;
                    const currentSlide = swiper.slides[currentIndex];
                    if (currentSlide) {
                        setCurrent(currentSlide);
                    }
                },
                transitionEnd: function () { },
                click(swiper) {
                    // const clickedSlide = swiper.clickedSlide;
                    // const clickedIndex = swiper.clickedIndex;
                    // if (clickedSlide) {
                    //   setCurrent(clickedSlide);
                    //   swiper.slideTo(clickedIndex);
                    // }
                },
            },
        });
    }
}
