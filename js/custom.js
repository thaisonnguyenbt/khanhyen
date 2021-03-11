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
