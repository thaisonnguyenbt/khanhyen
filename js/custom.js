function toggleMusic() {
  if ($('#background-music-button').hasClass('active')) {
    $('#background-music-button').removeClass('active');
  } else {
    $('#background-music-button').addClass('active');
  }
}

setTimeout(function () {
  $('#background-music-button').removeClass('active');
}, 10000);

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
