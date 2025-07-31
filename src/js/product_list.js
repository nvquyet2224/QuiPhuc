import "../sass/product-lists.scss";
import $ from "jquery";
import "jquery-ui/ui/widgets/slider";
import { onScroll } from "./_scrolling";

// Làm theo home page dùm anh

function rangeValue() {
  const $slider = $("#slider-range");
  const $inputLeft = $("#number-left");
  const $inputRight = $("#number-right");

  const min = parseInt($inputLeft.attr("min"), 10) || 0;
  const max = parseInt($inputRight.attr("max"), 10) || 30000000;

  // Formatter chỉ số, KHÔNG style: 'currency'
  const numberFormatter = new Intl.NumberFormat("vi-VN");

  function formatVND(value) {
    if (value === 0) return "0";
    return numberFormatter.format(value) + " đ";
  }

  function parseNumber(value) {
    return parseInt(value.replace(/[^\d]/g, ""), 10) || 0;
  }

  $slider.slider({
    range: true,
    min: min,
    max: max,
    values: [
      parseNumber($inputLeft.val()) || min,
      parseNumber($inputRight.val()) || max,
    ],
    slide: function (event, ui) {
      $inputLeft.val(formatVND(ui.values[0]));
      $inputRight.val(formatVND(ui.values[1]));
    },
  });

  // Giá trị ban đầu
  $inputLeft.val(formatVND($slider.slider("values", 0)));
  $inputRight.val(formatVND($slider.slider("values", 1)));

  $inputLeft.on("change", function () {
    let val = parseNumber($inputLeft.val());
    let right = $slider.slider("values", 1);
    if (val > right) val = right;
    if (val < min) val = min;
    $slider.slider("values", 0, val);
    $inputLeft.val(formatVND(val));
  });

  $inputRight.on("change", function () {
    let val = parseNumber($inputRight.val());
    let left = $slider.slider("values", 0);
    if (val < left) val = left;
    if (val > max) val = max;
    $slider.slider("values", 1, val);
    $inputRight.val(formatVND(val));
  });
}

function hanleFilter() {
  const btnOpen = document.getElementById("open-filter");
  const btnClose = document.getElementById("btn-close-filter");
  const elmFilter = document.getElementById("filter__accordion");
  if (btnOpen && elmFilter) {
    btnOpen.addEventListener("touchstart", () => {
      elmFilter.classList.add("show");
      $("body").addClass("noScroll");
    });
  }

  if (btnClose && elmFilter) {
    btnClose.addEventListener("click", () => {
      elmFilter.classList.remove("show");
      $("body").removeClass("noScroll");
    });
  }
}

function onToggle(box, use) {
  if (box.classList.contains("open")) {
    box.classList.remove("open");
    use.setAttribute('xlink:href', '#icon-increase');
    setTimeout(() => (box.style.display = "none"), 200);
  } else {
    box.style.display = "block";
    use.setAttribute('xlink:href', '#icon-decrease');
    setTimeout(() => box.classList.add("open"), 10);
  }
}

function onToggleAccordion() {
  const accordionHeaders = document.querySelectorAll(".accordion__header");
  if (accordionHeaders.length > 0) {
    accordionHeaders.forEach((item) => {
      item.addEventListener("click", () => {
        const parent = item.closest(".list_accordion");
        const content = parent.querySelector(".accordion__content");
        const use = parent.querySelector("use");
        console.log("content", content);
        onToggle(content, use);
      });
    });
  }
}

(function () {
  rangeValue();
  hanleFilter();
  onToggleAccordion();
})();
