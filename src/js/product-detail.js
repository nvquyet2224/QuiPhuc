import "../sass/product-detail.scss";
import Swiper, { Autoplay, Pagination, Navigation, Scrollbar, FreeMode, Mousewheel } from "swiper";
// console.log('___detail page');
// const boxes = document.querySelectorAll('.padding-p');
// // Bấm vào ô → bật màu, tắt màu các ô còn lại
// boxes.forEach(box => {
//   box.addEventListener('click', function (e) {
//     e.stopPropagation(); // Ngăn click lan ra ngoài
//     boxes.forEach(b => b.classList.remove('active'));
//     this.classList.add('active');
//   });
// });
// // Bấm vào bất kỳ đâu ngoài box → tắt hết
// document.addEventListener('click', () => {
//   boxes.forEach(b => b.classList.remove('active'));
// });
// cộng trừ thêm giỏ hàng
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
      allowTouchMove: false,
      watchOverflow: true,
      initialSlide: 0,
      autoHeight: false,
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
        nextEl: ".product-related .nav-next",
        prevEl: ".product-related .nav-prev",
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

(function () {
  productRelatedSlider();
})();
