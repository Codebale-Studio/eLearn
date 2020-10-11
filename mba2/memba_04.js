let streams = [];
let fadeInterval = 1.5;
let symbolSize = 14;
let img, font, d, off;
let img1, img2;
let fac = 1;

function preload() {
//   img = loadImage('assets/title_tr.png');
  img1 = loadImage('assets/comp_text.png');
  img2 = loadImage('assets/comp_img.png');
}

function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );

  if (width<height){
    img1.resize(width,0);
    img2.resize(width,0);
  }else{
    img1.resize(height,0);
    img2.resize(height,0);
  }

  d = pixelDensity();  
  
  image(img2,width/2 - img2.width/2, height/2 - img2.height/2);
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

  textFont('consolas');
  textSize(symbolSize);
  
}

function draw() {
  background(0, 100);
  streams.forEach(function(stream) {
    stream.render();
  });
//   print(frameRate());
  tint(255,200,0,100);
  image(img1,width/2 - img1.width/2, height/2 - img1.height/2);
  tint(255,200,0,20);
  image(img2,width/2 - img2.width/2, height/2 - img2.height/2);

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
    if (frameCount % this.switchInterval == 0) {
        this.value = String.fromCharCode(0x30A0 + floor(random(0, 97)));
        // set it to Katakana
        
        // if (random(10)>3){
        //     textFont('consolas');
        //     this.value = String.fromCharCode(
        //         0x30A0 + floor(random(0, 97))
        //       );
        // }else{
        //     textFont(font);
        //     this.value = String.fromCharCode(
        //         floor(random(66,90))
        //       );
        // }
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
  this.totalSymbols = round(random(5, 10));
  this.speed = random(5,15);

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
        off = (round(symbol.y)*width + round(symbol.x)) *d*4;
        if (pixels[off]>20){
            fill(pixels[off],pixels[off+1],pixels[off+2]);
          }else{
            fill(150, symbol.opacity);
          }
        
      }
      
      text(symbol.value, symbol.x, symbol.y/d);
      symbol.rain();
      symbol.setToRandomSymbol();
    });
  }
}
