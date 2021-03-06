

function drawLetter(text, type) {
  var canv = document.createElement('canvas');
  canv.id = 'canvas';
  canv.height = 2780;
  canv.width = 2160;
  document.body.appendChild(canv);

  var ctx = document.getElementById('canvas').getContext('2d');

  var img = new Image();
  img.onload = function(){
    ctx.drawImage(img,0,0, 2160, 2780);
  };
  switch (type) {
    case 0:
      img.src = '../../img/cards/thiep-bao-hy-nha-trai.jpg';
      break;
    case 1:
      img.src = '../../img/cards/thiep-nha-trai.jpg';
      break;
    case 2:
      img.src = '../../img/cards/thiep-nha-gai.jpg';
      break;
    case 3:
      img.src = '../../img/cards/thiep-nha-gai-9h.jpg';
      break;
    default:
      img.src = '../../img/cards/thiep-bao-hy-nha-trai.jpg';
      break;
  }
  
  ctx.font = 'normal 20px VL Good Vibes Pro';
  var isFontLoaded = false;
  var TEXT_TEXT = 'Some test text;';
  var initialMeasure = ctx.measureText(TEXT_TEXT);
  var initialWidth = initialMeasure.width;

  function whenFontIsLoaded(callback, attemptCount) {
  if (attemptCount === undefined) {
    attemptCount = 0;
  }
  if (attemptCount >= 20) {
    callback();
    return;
  }
  if (isFontLoaded) {
    callback();
    return;
  }
  const metrics = ctx.measureText(TEXT_TEXT);
  const width = metrics.width;
  if (width !== initialWidth) {
    isFontLoaded = true;
    callback();
  } else {
    setTimeout(function() {
    whenFontIsLoaded(callback, attemptCount + 1);
    }, 1000);
  }
  }

  whenFontIsLoaded(function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "#d8a449";
    ctx.font = 'normal 65px VL Good Vibes Pro';
    ctx.fillText(text, 870, 1025);
    if (type != 0) {
      ctx.textAlign = 'center';
      ctx.fillText(text, 1620, 1625);
    }
  });
}

drawLetter("Gia đình Sơn & Tri", 1); // nha trai
drawLetter("Tuyền +", 2); // nha gai 10h
drawLetter("Tuyền +", 3); // nha gai 9h
drawLetter("   anh Quốc", 0); // bao hy nha trai

//https://javascriptobfuscator.com/Javascript-Obfuscator.aspx