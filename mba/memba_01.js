let img, font, d;

function preload() {
  img = loadImage('assets/memba_logo_color.jpg');
}

function setup() {
  noStroke();
  createCanvas(window.innerWidth,
    window.innerHeight);
  img.resize(0,height);
  d = pixelDensity();  
  
  
  image(img,0,0);
  loadPixels(); 
  background(0); 
}

function draw() {
  for (let i=0; i<50;i++){
    let x = round(random(width));
    let y = round(random(height*d));
    let off = (y*width + x) *d*4;
    fill(pixels[off],pixels[off+1],pixels[off+2]);
    // fill(img.get(x,y));
    ellipse(x,y/d,5,5);
  }

}