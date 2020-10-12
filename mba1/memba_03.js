let streams = [];
let fadeInterval = 1.5;
let symbolSize = 14;
let img, font, d, off;
let fac = 1;
let input1, input2, btn;
let iSize = 300;

function preload() {
//   img = loadImage('assets/memba_logo_color_01.png');
  img = loadImage('assets/title_tr.png');
  font = loadFont('assets/memba_script.otf');
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );
  
  input1 = createInput('Song name');
  input2 = createInput('Email Id');
  btn = createButton('Submit', '');

  input1.size(iSize);  
  input2.size(iSize);
  btn.size(iSize);

  input1.position(width/2-iSize/2,height-130);
  input2.position(width/2-iSize/2,height-100);
  btn.position(width/2-iSize/2, height-70);

  

  if (width<height){
    img.resize(width,0);
  }else{
    img.resize(height,0);
  }

  
  d = pixelDensity();  
  
  
  image(img,width/2 - img.width/2, height/2 - img.height/2);
  loadPixels();
  background(0);
  let x = 0;
  for (let i = 0; i <= width*fac / symbolSize; i++) {
    let stream = new Stream();
    stream.generateSymbols(x, 0);
    stream.generateSymbols(x, round(random(-height,0)));
    streams.push(stream);
    x += symbolSize/fac;
  }

  // textFont('consolas');
  textFont(font);
  textSize(symbolSize);
  tint(255,200,0,100);
}

function draw() {
  background(0, 200);
  streams.forEach(function(stream) {
    stream.render();
  });
  // print(frameRate());
  image(img,width/2 - img.width/2, height/2 - img.height/2);
  // print(random(10));
}


function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));
  // this.switchInterval = round(100);

  this.setToRandomSymbol = function() {
    var charType = round(random(0, 5));
    if (frameCount % this.switchInterval == 0) {
        // set it to Katakana
        this.value = String.fromCharCode(
          // 0x30A0 + floor(random(0, 97))
          floor(random(66,91))
        );
    }
  }

  this.rain = function() {
    this.y = (this.y >= height) ? 0 : this.y += this.speed;
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(5, 10));
  this.speed = random(5, 22);

  this.generateSymbols = function(x, y) {
    var opacity = 255;
    var first = round(random(0, 4)) == 1;
    for (var i =0; i <= this.totalSymbols; i++) {
      symbol = new Symbol(
        x,
        y,
        this.speed,
        first,
        opacity
      );
      symbol.setToRandomSymbol();
      this.symbols.push(symbol);
      opacity -= (255 / this.totalSymbols) / fadeInterval;
      y -= symbolSize;
      first = false;
    }
  }

  this.render = function() {
    this.symbols.forEach(function(symbol) {
      if (symbol.first) {
        fill(255, symbol.opacity);
      } else {
        fill(150, symbol.opacity);
      }
      text(symbol.value, symbol.x, symbol.y);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
