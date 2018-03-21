const setContentHeight = (selector = '.content') => {
    const contentWrapper = document.querySelector(selector);
    contentWrapper.style.minHeight = (document.documentElement.clientHeight - 220) + 'px';
    contentWrapper.style.marginTop = '110px';
};

window.addEventListener('resize', () => {
  setContentHeight();
});

exports.contentHeight = setContentHeight;