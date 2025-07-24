import "../sass/doanh_nghiep.scss";
import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  FreeMode,
  Mousewheel,
} from "swiper";

function gocbepSlider() {
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
      // autoplay: {
      //   delay: 11000
      // },
      // pagination: {
      //   el: ".kitchen_thumb .swiper-pagination",
      //   clickable: true,
      // },
      navigation: {
        nextEl: ".kitchen_thumb .swiper-button-next",
        prevEl: ".kitchen_thumb .swiper-button-prev",
      },
      on: {
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function () {},
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
        init: function (swiper) {},
        transitionStart: function (swiper) {
          const currentIndex = swiper.activeIndex;
          const currentSlide = swiper.slides[currentIndex];
          if (currentSlide) {
            setCurrent(currentSlide);
          }
        },
        transitionEnd: function () {},
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

function productNewSlider() {
  if (document.querySelector(".product-new .productsSlider")) {
    new Swiper(".product-new .productsSlider", {
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
        el: ".product-new .swiper-scrollbar",
        hide: false,
        draggable: true,
      },
      mousewheel: {
        sensitivity: 1,
        forceToAxis: true, // Bắt buộc cuộn theo trục chính
        releaseOnEdges: true, // Tiếp tục cuộn khi đến cuối
      },
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
        nextEl: ".product-new .nav-next",
        prevEl: ".product-new .nav-prev",
      },
      on: {
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function () {},
        click(swiper) {},
      },
    });
  }
}

function productPromotionSlider() {
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
        el: ".product-promotion .swiper-scrollbar",
        hide: false,
        draggable: true,
      },
      mousewheel: {
        sensitivity: 1,
        forceToAxis: true, // Bắt buộc cuộn theo trục chính
        releaseOnEdges: true, // Tiếp tục cuộn khi đến cuối
      },
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
        nextEl: ".product-promotion .nav-next",
        prevEl: ".product-promotion .nav-prev",
      },
      on: {
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function () {},
        click(swiper) {},
      },
    });
  }
}

function whatnowSlider() {
  const setCurrent = (target) => {
    // nav
    document.querySelectorAll(".nav-overlay li").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });

    // banner
    document.querySelectorAll(".whatnow_banner--item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
    //item
    document.querySelectorAll(".whatnow_thumb--item").forEach((elm) => {
      const _target = elm.getAttribute("data-target");
      if (_target === target) {
        elm.classList.add("current");
      } else {
        elm.classList.remove("current");
      }
    });
  };

  if (document.querySelector(".whatnowSlider")) {
    document.querySelectorAll(".whatnow_thumb--item").forEach((elm) => {
      const slide = elm.querySelector(".whatnowSlider");
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
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        },
        navigation: {
          nextEl: elm.querySelector(".nav-next"),
          prevEl: elm.querySelector(".nav-prev"),
        },
        on: {
          init: function (swiper) {},
          transitionStart: function (swiper) {},
          transitionEnd: function () {},
          click(swiper) {},
        },
      });
    });
  }

  //filter nav
  const navTab = document.querySelector(".whatnow .nav-overlay");
  if (navTab) {
    navTab.addEventListener("click", (e) => {
      const target = e.target.closest(".nav-overlay li");
      if (target) {
        if (!target.classList.contains("current")) {
          const tab = target.getAttribute("data-target");
          setCurrent(tab);
        }
      }
    });
  }
}

function promotionSlider() {
  if (document.querySelector(".promotionSlider")) {
    new Swiper(".promotionSlider", {
      //modules: [Navigation],
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
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
      },
      // navigation: {
      //   nextEl: ".product-promotion .nav-next",
      //   prevEl: ".product-promotion .nav-prev",
      // },
      on: {
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function () {},
        click(swiper) {},
      },
    });
  }
}

function menuAnim() {
  // Mouse event
  document.querySelectorAll(".nav-item").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
      var container = item.querySelector(".dropdown-menu > .container");
      var menuH = container ? container.offsetHeight : 0;
      var winH = window.innerHeight - 200;
      var realH = menuH < winH ? menuH : winH;

      document.querySelector(".header").classList.add("header-in");
      document.querySelector(".bg-menu").style.height = realH + "px";
      item.classList.add("active");
    });

    item.addEventListener("mouseleave", function () {
      document.querySelector(".bg-menu").style.height = "0px";
      item.classList.remove("active");
      document.querySelector(".header").classList.remove("header-in");
    });
  });
}

function resize() {
  const updateHeaderHeight = () => {
    //if (headerRef.current) {
    //const headerHeight = headerRef.current.offsetHeight;
    //document.body.style.setProperty("--headerH", `${headerHeight}px`);
    document.body.style.setProperty("--winH", `${window.innerHeight}px`);

    //document.body.style.setProperty("--global-color", `#636be3`);
    //}
    //if (sliderRef.current) {
    //const refHeight = sliderRef.current.offsetHeight;
    //document.body.style.setProperty("--refH", `${refHeight}px`);
    //}
  };

  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
}

function brandSlider() {
  if (document.querySelector(".brandCertiSlider")) {
    const slide = document.querySelector(".brandCertiSlider");
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
      navigation: false,
      on: {
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function (swiper) {},
        click(swiper) {},
      },
    });
  }
}

function collectionSlider() {
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
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function (swiper) {
          const activeSlide = swiper.slides[swiper.activeIndex];
          const target = activeSlide.getAttribute("data-target");

          console.log(
            "Active slide element:",
            activeSlide.getAttribute("data-target")
          );
          setCurrent(target);
        },
        click(swiper) {},
      },
    });
  }
}

function projectSlider() {
  if (document.querySelector(".projectsSlider")) {
    const slide = document.querySelector(".projectsSlider");
    const elm = document.querySelector("#projects")
    new Swiper(slide, {
      modules: [Navigation],
      effect: "slide",
      loop: true,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 2,
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
        init: function (swiper) {},
        transitionStart: function (swiper) {},
        transitionEnd: function (swiper) {},
        click(swiper) {},
      },
    });
  }
}

//import { bannerSwipper } from "./_banner-swiper";
(function () {
  gocbepSlider();
  productNewSlider();
  productPromotionSlider();
  whatnowSlider();
  promotionSlider();
  brandSlider();
  collectionSlider();
  projectSlider();
  menuAnim();
  resize();
})();
