const setContentHeight = (selector = '.content') => {
    const contentWrapper = document.querySelector(selector);
    contentWrapper.style.minHeight = (document.documentElement.clientHeight - 150) + 'px';
};

window.addEventListener('resize', () => {
  setContentHeight();
});

exports.contentHeight = setContentHeight;