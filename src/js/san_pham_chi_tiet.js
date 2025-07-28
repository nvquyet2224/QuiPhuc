import "../sass/san-pham-chi-tiet.scss";
import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  FreeMode,
  Mousewheel,
} from "swiper";

let count = 1;

window.increase = function () {
  count++;
  document.getElementById("quantity").textContent = count;
};

window.decrease = function () {
  if (count > 1) {
    // Không giảm dưới 1
    count--;
    document.getElementById("quantity").textContent = count;
  }
};

function structureSlider() {
  if (document.querySelector(".structureSlider")) {
    new Swiper(".structureSlider", {
      modules: [Scrollbar, FreeMode, Mousewheel],
      effect: "slide",
      loop: false,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1.5,
      spaceBetween: 12,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      navigation: false,
      on: {
        init: function (swiper) { },
        transitionStart: function (swiper) { },
        transitionEnd: function () { },
        click(swiper) { },
      },
    });
  }
}

function additionalSlider() {
  if (document.querySelector(".additionalSlider")) {
    new Swiper(".additionalSlider", {
      modules: [Scrollbar, FreeMode, Mousewheel],
      effect: "slide",
      loop: false,
      speed: 1000,
      preloadImages: false,
      lazy: true,
      disableOnInteraction: true,
      pauseOnMouseEnter: true,
      slidesPerView: 1.5,
      spaceBetween: 12,
      freeMode: true,
      grabCursor: true,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
      navigation: false,
      on: {
        init: function (swiper) { },
        transitionStart: function (swiper) { },
        transitionEnd: function () { },
        click(swiper) { },
      },
    });
  }
}

function productRelatedSlider() {
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


function menuAnim() {

  // Mouse event
    document.querySelectorAll('.nav-item').forEach(function (item) {
      item.addEventListener('mouseenter', function () {
        var container = item.querySelector('.dropdown-menu > .container');
        var menuH = container ? container.offsetHeight : 0;
        var winH = window.innerHeight - 200;
        var realH = menuH < winH ? menuH : winH;

        document.querySelector('.header').classList.add('header-in');
        document.querySelector('.bg-menu').style.height = realH + 'px';
        item.classList.add('active');
      });

      item.addEventListener('mouseleave', function () {
        document.querySelector('.bg-menu').style.height = '0px';
        item.classList.remove('active');
        document.querySelector('.header').classList.remove('header-in');
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


(function () {
  productRelatedSlider();
  structureSlider();
  additionalSlider();
  menuAnim();
  resize();
})();
