let streams = [];
let fadeInterval = 1.5;
let symbolSize = 12;
let img, font, d, off;
let fac = 2;

function preload() {
  img = loadImage('assets/memba_logo_color_01.png');
  font = loadFont('assets/memba_script.otf');
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );

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
    stream.generateSymbols(x, round(random(-1000,0)));
    streams.push(stream);
    x += symbolSize/fac;
  }

  // textFont('consolas');
  textFont(font);
  textSize(symbolSize);
  
}

function draw() {
  background(0, 100);
  streams.forEach(function(stream) {
    stream.render();
  });
  print(frameRate());
}

function Symbol(x, y, speed, first, opacity) {
  this.x = x;
  this.y = y;
  this.value;

  this.speed = speed;
  this.first = first;
  this.opacity = opacity;

  this.switchInterval = round(random(2, 25));


  this.setToRandomSymbol = function() {
    if (frameCount % this.switchInterval == 0) {
        this.value = String.fromCharCode(
          floor(random(65, 90))
        );
    }
  }

  this.rain = function() {
    if (this.y >= height*d){
      this.y = 0;
    }else{
      this.y += this.speed;
    }
  }

}

function Stream() {
  this.symbols = [];
  this.totalSymbols = round(random(15, 30));
  this.speed = (random(1,5));

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
        fill(255,0,0, symbol.opacity);
      }else{
        off = (round(symbol.y)*width + round(symbol.x)) *d*4;
        fill(pixels[off],pixels[off+1],pixels[off+2],symbol.opacity);
      }
      
      // let c = img.get(symbol.x,symbol.y);
      // fill(c);
      if (pixels[off]>20){
        text(symbol.value, symbol.x, symbol.y/d);
      }
      
      // ellipse(symbol.x,symbol.y/d,symbolSize-5,symbolSize-5);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}