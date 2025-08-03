
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
    document.body.style.setProperty("--winH", `${window.innerHeight}px`);
  };

  updateHeaderHeight();
  window.addEventListener("resize", updateHeaderHeight);
}

function navClick() {
  // Toggle menu
  document.querySelector(".toggle-menu").addEventListener("click", () => {
    const menu = document.querySelector(".header");
    if (menu && menu.classList.contains("open-menu")) {
      menu.classList.remove("open-menu");
      document.querySelector("html, body").classList.remove("no-scroll");
    } else {
      document.querySelector("html, body").classList.add("no-scroll");
      menu.classList.add("open-menu");
    }
  });

  // Open sub menu
  const nav = document.querySelector(".nav");

  if (nav) {
    nav.addEventListener("click", (e) => {
      const item = e.target.closest(".nav-item");
      if (item) {
        item.classList.add('current');
      }

      //close
      const target = e.target.closest(".back-menu");
      if (target) {
        if (document.querySelector('.nav-item.current')) {
          document.querySelector('.nav-item.current').classList.remove('current');
        }
      }
    });

  }

  const body = document.querySelector('body');

  if (body) {
    const page = body.getAttribute('data-page');
    if (document.querySelector('.nav-menu li[data-page=' + page + '] > a')) {
      document.querySelector('.nav-menu li[data-page=' + page + '] > a').classList.add('current');
    }
  }

}

function selectClick() {


  // Open dropdown
  $('.select-header').on('click', function () {
    if ($(this).parent().hasClass('open')) {
      $(this).parent().removeClass('open');
    } else {
      $('.open').removeClass('open');
      $(this).parent().addClass('open');
    }
  });

  // Fake select apartment item
  $('.select-box li').on('click', function () {
    let text = $(this).html();
    const select = $(this).closest('.select');
    select.find('.select-selected').html(text);
    select.removeClass('open');
    select.find('.selected').removeClass('selected');
    $(this).addClass('selected');
  });

  // Close dropdown when click out
  $(document).on('click', function (event) {
    if (!$(event.target).closest('.select').length) {
      $('.select.open').removeClass('open');
    }
  });

}

function onScroll() {

  function setDelay(items, start) {
    if ($(items).length) {
      $(items).each(function (index) {
        $(this).css('animation-delay', `${(index + 1) * start}s`); // Delay increases for each item
      });
    }
  }

  // Function to add/remove class on scroll
  var lastScrollTop = 0;
  function toggleClassOnView() {
    setTimeout(() => {
      const items = ``;
      $(items).each(function () {
        if ($(this).length) {
          var elementTop = $(this).offset().top;
          var elementBottom = elementTop + $(this).outerHeight();
          var viewportTop = $(window).scrollTop();
          var viewportBottom = viewportTop + $(window).height();

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ vÃ o khung nhÃ¬n
          if (elementTop < viewportBottom && elementBottom > viewportTop) {
            $(this).addClass('in-view');
          }

          // Kiá»ƒm tra náº¿u pháº§n tá»­ Ä‘Ã£ thoÃ¡t khá»i khung nhÃ¬n
          if (elementBottom <= viewportTop || elementTop >= viewportBottom) {
            $(this).removeClass('in-view');
          }
        }

      });
      var scrollTop = $(this).scrollTop();
      //if (scrollTop > lastScrollTop) {
      if (scrollTop > 50) {
        $('.header').addClass('sticky');
      } else {
        $('.header').removeClass('sticky');
      }
      //} else if (scrollTop < lastScrollTop) {
      //$('.header').removeClass('sticky');
      //}
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, 50);
  }

  $(window).on('scroll resize', toggleClassOnView);

  setDelay('.breadcrumb li', 0.15);
  setDelay('.tab-menu li', 0.15);
  toggleClassOnView();


}


(function () {
  navClick();
  menuAnim();
  resize();
  onScroll();
  selectClick();
})();
