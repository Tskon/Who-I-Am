exports.setBurger = (selector, toggleFunc, menuItems) => {
  function changeMenuText() {
    const burgerText = document.querySelector('.burger-menu-txt');
    menuItems.forEach((item) => {
      if (item.link === window.location.hash.slice(1)) {
        burgerText.innerHTML = item.title;
      }
    });
  }
  changeMenuText();

  const burgerWrapper = document.querySelector(selector);
  const clickDelay = 200;
  let clickDelayTimer = null;
  const burger = document.querySelector(".burger-click-region");

  burgerWrapper.addEventListener("click", (e) => {
    if (clickDelayTimer === null) {
      burger.classList.toggle("active");
      burger.parentNode.classList.toggle("is-open");
      toggleFunc();
      if (!burger.classList.contains("active")) {
        burger.classList.add("closing");
      }

      clickDelayTimer = setTimeout(() => {
        burger.classList.remove("closing");
        clearTimeout(clickDelayTimer);
        clickDelayTimer = null;
        if (e.target.classList.contains('main-menu__li')) changeMenuText();
      }, clickDelay);
    }
  });
};

exports.setBurgerWidth = (num, callbackTrue, callbackFalse) => {
  function checkWidth() {
    if (document.body.clientWidth < num) {
      callbackTrue();
    } else {
      callbackFalse();
    }
  }
  window.addEventListener('resize', () => {
    checkWidth();
  })
  window.addEventListener('load', () => {
    checkWidth();
  })
};