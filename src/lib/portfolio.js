export default () => {
  const title = document.querySelector('.portfolio-menu__title');
  title.addEventListener('click', () => {
    if (document.body.offsetWidth < 800 - 17) {
      document.querySelector('.portfolio-menu__list').classList.toggle('portfolio-menu__list_active');
      title.classList.toggle('portfolio-menu__title_active');
}
});

}
