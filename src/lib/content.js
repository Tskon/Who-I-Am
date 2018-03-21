const contentHeight = (selector) => {
  const contentWrapper = document.querySelector(selector);
  contentWrapper.style.minHeight = (document.documentElement.clientHeight - 150) + 'px';
};

exports.contentHeight = contentHeight;