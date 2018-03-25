exports.setBurger = (selector, toggleFunc) => {
  const itemsList = document.querySelector(selector);
  const clickDelay = 500;
  let clickDelayTimer = null;
  const burger = document.querySelector(".burger-click-region");

  burger.addEventListener("click", () => {
    if (clickDelayTimer === null) {
      burger.classList.toggle("active");
      burger.parentNode.classList.toggle("is-open");
      // itemsList.classList.toggle(toggleClass);
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

  itemsList.addEventListener("click", () => {
    if (clickDelayTimer === null) {
      burger.classList.remove("active");
      burger.parentNode.classList.remove("is-open");
      // itemsList.classList.add(toggleClass);
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