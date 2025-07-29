import "../sass/index.scss";
//import Swiper, { Autoplay, Pagination, Navigation, Scrollbar, FreeMode, Mousewheel } from "swiper";

import { kitchenSlider } from './_kitchen-slider';
import { productNewSlider } from './_product-new-slider';
import { productPromotionSlider } from './_product-promotion-slider';
import { whatnowSlider } from './_what-now-slider';
import { promotionSlider } from './_promotion-slider';

(function () {
  kitchenSlider();
  productNewSlider();
  productPromotionSlider();
  whatnowSlider();
  promotionSlider();
})();
