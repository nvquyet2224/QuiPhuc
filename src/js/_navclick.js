export function navClick() {
  // Toggle menu
  document.querySelector(".toggle-menu").addEventListener("click", () => {
    const menu = document.querySelector(".header");
    const overlayHeader = document.querySelector(".header-overlay");
    if (menu && menu.classList.contains("open-menu")) {
      menu.classList.remove("open-menu");
      document.querySelector("html, body").classList.remove("no-scroll");
      overlayHeader.classList.remove("open-overlay");
    } else {
      document.querySelector("html, body").classList.add("no-scroll");
      overlayHeader.classList.add("open-overlay");
      menu.classList.add("open-menu");
    }
  });
  // Open sub menu
  const nav = document.querySelector(".nav");
  if (nav) {
    nav.addEventListener("click", (e) => {
      const target = e.target.closest(".nav-menu > li > span");
      if (target) {
        if (target.classList.contains('current')) {
          target.classList.remove('current');
        } else {
          target.classList.add('current');
        }
      }
      const target2 = e.target.closest(".sub-menu > span");
      if(target2) {
        if(document.querySelector('span.current')) {
          document.querySelector('span.current').classList.remove('current');
        }
      }
    });
  }
  const body = document.querySelector('body');
  if(body) {
    const page = body.getAttribute('data-page');
    if(document.querySelector('.nav-menu li[data-page='+ page +'] > a')) {
      document.querySelector('.nav-menu li[data-page='+ page +'] > a').classList.add('active');
    }
    if(document.querySelector('.sub-menu li[data-sub='+ page +'] > a')) {
      document.querySelector('.sub-menu li[data-sub='+ page +'] > a').classList.add('active');
      const nav = document.querySelector('.sub-menu li[data-sub='+ page +'] > a').closest(".nav-menu > li");
      if(nav) {
        nav.querySelector('span').classList.add('current');
      }
    }
  }

}
