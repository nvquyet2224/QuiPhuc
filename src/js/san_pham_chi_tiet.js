import "../sass/san-pham-chi-tiet.scss";

import { combineSlider } from './_combine-slider';
import { productRelatedSlider } from './_product-related-slider';

function fakeOrder() {
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

}


(function () {
  combineSlider();
  productRelatedSlider();
  fakeOrder();
})();
