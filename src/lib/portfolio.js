export default () => {
  const title = document.querySelector('.portfolio-menu__title');
  const list = document.querySelector('.portfolio-menu__list');
  const links = document.querySelectorAll('.portfolio-menu__list a');

  function changeActive(trueForRemove) {
    const menuList = document.querySelector('.portfolio-menu__list');
    if (document.body.offsetWidth < 800 - 17) {
      if (trueForRemove) {
        menuList.classList.remove('portfolio-menu__list_active');
        title.classList.remove('portfolio-menu__title_active');
      } else {
        menuList.classList.toggle('portfolio-menu__list_active');
        title.classList.toggle('portfolio-menu__title_active');
      }
    }
  }

  title.addEventListener('click', () => {
    changeActive();
  });

  list.addEventListener('click', (e) => {
    changeActive(true);
  });

  document.body.addEventListener('click', () => {
    if (title.classList.contains('portfolio-menu__title')){
      changeActive(true);
    }
  });
}
