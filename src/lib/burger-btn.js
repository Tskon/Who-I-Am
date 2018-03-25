exports.setBurger = (selector, toggleFunc) => {
  const burgerWrapper = document.querySelector(selector);
  const clickDelay = 500;
  let clickDelayTimer = null;
  const burger = document.querySelector(".burger-click-region");

  burgerWrapper.addEventListener("click", () => {
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
      }, clickDelay);
    }
  });

  burgerWrapper.addEventListener("click", () => {
    if (clickDelayTimer === null) {
      burger.classList.remove("active");
      burger.parentNode.classList.remove("is-open");
      toggleFunc();
      if (!burger.classList.contains("active")) {
        burger.classList.add("closing");
      }
      clickDelayTimer = setTimeout(() => {
        burger.classList.remove("closing");
        clearTimeout(clickDelayTimer);
        clickDelayTimer = null;
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