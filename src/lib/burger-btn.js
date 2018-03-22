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

  itemsList.addEventListener("click", () => {
    toggleList();
  });

  burger.addEventListener("click", () => {
    toggleList();
  });
};
