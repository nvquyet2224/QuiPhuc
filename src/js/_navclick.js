export function navClick() {
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
      const target = e.target.closest(".c-btn--full");
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
