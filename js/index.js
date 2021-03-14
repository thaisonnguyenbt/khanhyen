const changeIndexHeaderBg = (srcs) => {
  setTimeout(() => {
    const image = $('.parallax-slider');
    const currentSrc = image.attr('src');

    const index = srcs.indexOf(currentSrc);
    let newSrc;
    if (index === srcs.length - 1) {
      newSrc = srcs[0];
    } else {
      newSrc = srcs[index + 1];
    }

    const clone = image.clone().insertBefore(image);
    setTimeout(() => {
      clone.remove();
    }, 1000);

    image.fadeOut(400, () => {
      image.attr('src', newSrc).fadeIn(400);
    });

    changeIndexHeaderBg(srcs);
  }, 5000);
};

$(document).ready(function () {
  const srcs = ['img/index/header-1.jpg', 'img/index/header-2.jpg', 'img/index/header-3.jpg'];
  changeIndexHeaderBg(srcs);
});
