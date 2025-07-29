import "../sass/product-lists.scss";

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
  menuAnim();
  resize();
})();
