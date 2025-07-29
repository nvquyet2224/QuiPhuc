import "../sass/business.scss";
import Swiper, {
  Autoplay,
  Pagination,
  Navigation,
  Scrollbar,
  FreeMode,
  Mousewheel,
} from "swiper";


import { kitchenSlider } from './_kitchen-slider';
import { projectSlider } from './_project-slider';
import { collectionSlider } from './_collection-slider';

function brandSlider() {
  if (document.querySelector(".brandCertiSlider")) {
    const slide = document.querySelector(".brandCertiSlider");
    new Swiper(slide, {
      slidesPerView: "auto",
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      on: {
        init: function (swiper) { },
        transitionStart: function (swiper) { },
        transitionEnd: function (swiper) { },
        click(swiper) { },
      },
    });
  }

  const elm = document.querySelector(".brand__personal-accordion");
  if (elm) {
    const accordions = elm.querySelectorAll(".accordion-item .title");
    accordions.forEach((item) => {
      item.addEventListener("click", (e) => {
        const parent = item.closest(".accordion-item");
        if (!parent) return;

        if (parent.classList.contains("current")) {
          // Đã có class current rồi → không làm gì
          return;
        }

        // Xóa class current ở tất cả các accordion-item khác
        const allItems = elm.querySelectorAll(".accordion-item");
        allItems.forEach((el) => el.classList.remove("current"));

        // Thêm class current vào item được click
        parent.classList.add("current");
      });
    });
  }
}


//import { bannerSwipper } from "./_banner-swiper";
(function () {
  kitchenSlider();
  brandSlider();
  projectSlider();
  collectionSlider();
})();
