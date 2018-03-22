exports.setBurger = (selector, toggleClass) => {
  const itemsList = document.querySelector(selector);
  const clickDelay = 500;
  let clickDelayTimer = null;
  const burger = document.querySelector(".burger-click-region");

  function toggleList() {
    if (clickDelayTimer === null) {
      burger.classList.toggle("active");
      burger.parentNode.classList.toggle("is-open");
      itemsList.classList.toggle(toggleClass);
      if (!burger.classList.contains("active")) {
        burger.classList.add("closing");
      }

      clickDelayTimer = setTimeout(() => {
        burger.classList.remove("closing");
        clearTimeout(clickDelayTimer);
        clickDelayTimer = null;
      }, clickDelay);
    }
  }

  burger.addEventListener("click", () => {
    toggleList();
  });

  itemsList.addEventListener("click", () => {
    if (clickDelayTimer === null) {
      burger.classList.remove("active");
      burger.parentNode.classList.remove("is-open");
      itemsList.classList.add(toggleClass);
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
