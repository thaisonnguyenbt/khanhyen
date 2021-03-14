const changeIndexHeaderBg = (srcs) => {
  setTimeout(() => {
    var image = $('.parallax-slider');
    const currentSrc = image.attr('src');

    const index = srcs.indexOf(currentSrc);
    let newSrc;
    if (index === srcs.length - 1) {
      newSrc = srcs[0];
    } else {
      newSrc = srcs[index + 1];
    }

    image.fadeOut(50, function () {
      image.attr('src', newSrc);
      image.fadeIn(50);
    });

    changeIndexHeaderBg(srcs);
  }, 5000);
};

$(document).ready(function () {
  const srcs = ['img/index/header-1.jpg', 'img/index/header-2.jpg', 'img/index/header-3.jpg'];
  changeIndexHeaderBg(srcs);
});
