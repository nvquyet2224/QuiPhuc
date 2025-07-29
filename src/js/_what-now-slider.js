import Swiper, { Navigation } from "swiper";

export function whatnowSlider() {

    const setCurrent = (target) => {
        // nav
        document.querySelectorAll('.nav-overlay li').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });

        // banner
        document.querySelectorAll('.whatnow_banner--item').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });
        //item
        document.querySelectorAll('.whatnow_thumb--item').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });
    }

    if (document.querySelector(".whatnowSlider")) {
        document.querySelectorAll('.whatnow_thumb--item').forEach((elm) => {
            const slide = elm.querySelector('.whatnowSlider')
            new Swiper(slide, {
                modules: [Navigation],
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
                breakpoints: {
                    320: {
                        slidesPerView: 2.1,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                },
                navigation: {
                    nextEl: elm.querySelector('.nav-next'),
                    prevEl: elm.querySelector('.nav-prev'),
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
        });


    }

    //filter nav
    const navTab = document.querySelector('.whatnow .nav-overlay');
    if (navTab) {
        navTab.addEventListener("click", (e) => {
            const target = e.target.closest(".nav-overlay li");
            if (target) {
                if (!target.classList.contains('current')) {
                    const tab = target.getAttribute('data-target');
                    setCurrent(tab);
                }
            }
        });
    }

}