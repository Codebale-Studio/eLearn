const _0x32e0=['length','#ffffff','200px','width','style','Square\x20Wave','300px','tEoua','option','Frequency\x20(Hz)','color','position','changed','pop','n\x20:\x20','Sawtooth\x20Wave','pXldd','unshift','value'];(function(_0x235b3a,_0x32e081){const _0x398661=function(_0x249911){while(--_0x249911){_0x235b3a['push'](_0x235b3a['shift']());}};_0x398661(++_0x32e081);}(_0x32e0,0x6d));const _0x3986=function(_0x235b3a,_0x32e081){_0x235b3a=_0x235b3a-0x0;let _0x398661=_0x32e0[_0x235b3a];return _0x398661;};let time=0x0;let wave=[];let path=[];let crvPos=[];let slider;let radio;let maxP=0x15e;let title='Fourier\x20Series';function setup(){createCanvas(0x2ee,0x2ee);radio=createRadio();radio[_0x3986('0xd')](_0x3986('0xa'),0x2);radio[_0x3986('0xd')](_0x3986('0x1'),0x1);radio['style'](_0x3986('0x8'),_0x3986('0xb'));radio[_0x3986('0x9')](_0x3986('0xf'),_0x3986('0x6'));radio[_0x3986('0x4')](0x2);radio[_0x3986('0x10')](0x14,0x258);slider=createSlider(0x1,0x1e,0x2);slider['style'](_0x3986('0x8'),'200px');slider[_0x3986('0x9')](_0x3986('0xf'),_0x3986('0x6'));slider[_0x3986('0x10')](0x14,0x280);slider1=createSlider(0x1,0x32,0xa);slider1[_0x3986('0x9')](_0x3986('0x8'),_0x3986('0x7'));slider1[_0x3986('0x9')](_0x3986('0xf'),_0x3986('0x6'));slider1[_0x3986('0x10')](0x14,0x2b7);}function draw(){slider[_0x3986('0x11')](reset);background(0x0);noFill();stroke(0xff);line(0xa,0x244,0x104,0x244);line(0xa,0x271,0x104,0x271);line(0xa,0x2a8,0x104,0x2a8);line(0xa,0x2da,0x104,0x2da);push();translate(0x96,0x177);strokeWeight(0x1);let _0x7042d5=0x0;let _0x460af8=0x0;let _0xdc94e0=0x0;for(let _0x10b5e9=0x0;_0x10b5e9<slider['value']();_0x10b5e9++){if(_0x3986('0x2')==='FTkET'){crvPos=[];}else{let _0x362e22=_0x7042d5;let _0xf5e7f=_0x460af8;let _0x5d26ec=_0x10b5e9*radio['value']()+0x1;let _0x508444=0x4b*(0x4/(_0x5d26ec*PI));_0xdc94e0=_0x508444*sin(_0x5d26ec*time);_0x7042d5+=_0x508444*cos(_0x5d26ec*time);_0x460af8+=_0x508444*sin(_0x5d26ec*time);stroke(0xff,0x64);noFill();ellipse(_0x362e22,_0xf5e7f,_0x508444*0x2);stroke(0xff);line(_0x362e22,_0xf5e7f,_0x7042d5,_0x460af8);stroke(0xff,0x80,0x0);ellipse(_0x7042d5,_0x460af8,+0x8);crvPos[_0x3986('0x3')](_0xdc94e0);if(crvPos[_0x3986('0x5')]>maxP*slider['value']()){crvPos['pop']();}}}wave['unshift'](_0x460af8);translate(0xc8,0x0);stroke(0xff);line(_0x7042d5-0xc8,_0x460af8,0x0,wave[0x0]);fill(0x64);noStroke();for(let _0xf41fcb=0x0;_0xf41fcb<crvPos['length'];_0xf41fcb++){ellipse(_0xf41fcb/slider[_0x3986('0x4')](),crvPos[_0xf41fcb],0x2,0x2);}noFill();stroke(0xff,0x80,0x0);strokeWeight(0x2);noFill();beginShape();for(let _0x195f0f=0x0;_0x195f0f<wave[_0x3986('0x5')];_0x195f0f++){if(_0x3986('0xc')!=='tEoua'){vertex(_0x195f0f,wave[_0x195f0f]);}else{vertex(_0x195f0f,wave[_0x195f0f]);}}endShape();time+=slider1[_0x3986('0x4')]()/0x1f4;if(wave[_0x3986('0x5')]>maxP){wave[_0x3986('0x12')]();}pop();noStroke();fill(0xff);textSize(0xe);textAlign(LEFT);text(_0x3986('0x0')+str(slider[_0x3986('0x4')]()),0x14,0x29e);text(_0x3986('0xe'),0x14,0x2d0);textSize(0x12);textAlign(CENTER);text(title,width/0x2,0x32);}function reset(){crvPos=[];}
