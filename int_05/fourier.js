const _0x30ea=['pop','option','Square\x20Wave','Frequency','#ffffff','300px','style','200px','unshift','Sawtooth\x20Signal','sOEXZ','n\x20:\x20','Fourier\x20Series','ELblz','width','length','value','color','position'];(function(_0x4b1ee9,_0x30ea66){const _0x192cac=function(_0x72cda5){while(--_0x72cda5){_0x4b1ee9['push'](_0x4b1ee9['shift']());}};_0x192cac(++_0x30ea66);}(_0x30ea,0x19f));const _0x192c=function(_0x4b1ee9,_0x30ea66){_0x4b1ee9=_0x4b1ee9-0x0;let _0x192cac=_0x30ea[_0x4b1ee9];return _0x192cac;};let time=0x0;let wave=[];let path=[];let slider;let radio;let title=_0x192c('0xf');function setup(){createCanvas(0x2ee,0x2ee);radio=createRadio();radio[_0x192c('0x4')](_0x192c('0x5'),0x2);radio[_0x192c('0x4')](_0x192c('0xc'),0x1);radio[_0x192c('0x9')](_0x192c('0x11'),_0x192c('0x8'));radio[_0x192c('0x9')]('color',_0x192c('0x7'));radio['value'](0x2);radio[_0x192c('0x2')](0x14,0x1e);slider=createSlider(0x1,0x32,0x2);slider[_0x192c('0x9')]('width',_0x192c('0xa'));slider[_0x192c('0x9')](_0x192c('0x1'),'#ffffff');slider[_0x192c('0x2')](0x14,0x46);slider1=createSlider(0x1,0x32,0xa);slider1[_0x192c('0x9')](_0x192c('0x11'),_0x192c('0xa'));slider1[_0x192c('0x9')](_0x192c('0x1'),_0x192c('0x7'));slider1[_0x192c('0x2')](0x14,0x7d);}function draw(){background(0x0);noFill();stroke(0xff);rect(0xa,0xa,0xfa,0x96);line(0xa,0x37,0x104,0x37);line(0xa,0x6e,0x104,0x6e);push();translate(0x96,0x177);strokeWeight(0x1);let _0x418f68=0x0;let _0x2cab81=0x0;for(let _0x264593=0x0;_0x264593<slider[_0x192c('0x0')]();_0x264593++){if(_0x192c('0x10')==='SfsKD'){background(0x0);noFill();stroke(0xff);rect(0xa,0xa,0xfa,0x96);line(0xa,0x37,0x104,0x37);line(0xa,0x6e,0x104,0x6e);push();translate(0x96,0x177);strokeWeight(0x1);let _0x2ca838=0x0;let _0x3cd318=0x0;for(let _0x587f4d=0x0;_0x587f4d<slider[_0x192c('0x0')]();_0x587f4d++){let _0x1e9c71=_0x2ca838;let _0x5a891f=_0x3cd318;let _0x2361ad=_0x587f4d*radio['value']()+0x1;let _0xd643f9=0x4b*(0x4/(_0x2361ad*PI));_0x2ca838+=_0xd643f9*cos(_0x2361ad*time);_0x3cd318+=_0xd643f9*sin(_0x2361ad*time);stroke(0xff,0x64);noFill();ellipse(_0x1e9c71,_0x5a891f,_0xd643f9*0x2);stroke(0xff);line(_0x1e9c71,_0x5a891f,_0x2ca838,_0x3cd318);stroke(0xff,0x80,0x0);ellipse(_0x2ca838,_0x3cd318,0x8);}wave['unshift'](_0x3cd318);translate(0xc8,0x0);stroke(0xff);line(_0x2ca838-0xc8,_0x3cd318,0x0,wave[0x0]);stroke(0xff,0x80,0x0);strokeWeight(0x2);beginShape();noFill();for(let _0x16ddb9=0x0;_0x16ddb9<wave[_0x192c('0x12')];_0x16ddb9++){vertex(_0x16ddb9,wave[_0x16ddb9]);}endShape();time+=slider1[_0x192c('0x0')]()/0x1f4;if(wave[_0x192c('0x12')]>0x190){wave[_0x192c('0x3')]();}pop();noStroke();fill(0xff);textSize(0xe);textAlign(LEFT);text(_0x192c('0xe')+str(slider[_0x192c('0x0')]()),0x14,0x64);text('Frequency',0x14,0x96);textSize(0x12);textAlign(CENTER);text(title,width/0x2,height-0x14);}else{let _0x21fa00=_0x418f68;let _0x2b6305=_0x2cab81;let _0xa47f84=_0x264593*radio[_0x192c('0x0')]()+0x1;let _0x5e01b1=0x4b*(0x4/(_0xa47f84*PI));_0x418f68+=_0x5e01b1*cos(_0xa47f84*time);_0x2cab81+=_0x5e01b1*sin(_0xa47f84*time);stroke(0xff,0x64);noFill();ellipse(_0x21fa00,_0x2b6305,_0x5e01b1*0x2);stroke(0xff);line(_0x21fa00,_0x2b6305,_0x418f68,_0x2cab81);stroke(0xff,0x80,0x0);ellipse(_0x418f68,_0x2cab81,0x8);}}wave[_0x192c('0xb')](_0x2cab81);translate(0xc8,0x0);stroke(0xff);line(_0x418f68-0xc8,_0x2cab81,0x0,wave[0x0]);stroke(0xff,0x80,0x0);strokeWeight(0x2);beginShape();noFill();for(let _0x58c7e7=0x0;_0x58c7e7<wave[_0x192c('0x12')];_0x58c7e7++){vertex(_0x58c7e7,wave[_0x58c7e7]);}endShape();time+=slider1[_0x192c('0x0')]()/0x1f4;if(wave[_0x192c('0x12')]>0x190){if(_0x192c('0xd')===_0x192c('0xd')){wave[_0x192c('0x3')]();}else{let _0x4d3f05=_0x418f68;let _0x1eaf47=_0x2cab81;let _0xfb1dae=i*radio['value']()+0x1;let _0x34f520=0x4b*(0x4/(_0xfb1dae*PI));_0x418f68+=_0x34f520*cos(_0xfb1dae*time);_0x2cab81+=_0x34f520*sin(_0xfb1dae*time);stroke(0xff,0x64);noFill();ellipse(_0x4d3f05,_0x1eaf47,_0x34f520*0x2);stroke(0xff);line(_0x4d3f05,_0x1eaf47,_0x418f68,_0x2cab81);stroke(0xff,0x80,0x0);ellipse(_0x418f68,_0x2cab81,0x8);}}pop();noStroke();fill(0xff);textSize(0xe);textAlign(LEFT);text(_0x192c('0xe')+str(slider[_0x192c('0x0')]()),0x14,0x64);text(_0x192c('0x6'),0x14,0x96);textSize(0x12);textAlign(CENTER);text(title,width/0x2,height-0x14);}