var _0x4a7e=['shift','#355c7d','90°','180°','sinθ','cosθ','Identity\x20between\x20Sine\x20and\x20Cosine','push','#355c7d99','length'];(function(_0x5bf972,_0x8c0fd0){var _0x2800ae=function(_0x15983f){while(--_0x15983f){_0x5bf972['push'](_0x5bf972['shift']());}};_0x2800ae(++_0x8c0fd0);}(_0x4a7e,0x1ba));var _0x3f7e=function(_0x57fa76,_0x5709a5){_0x57fa76=_0x57fa76-0x0;var _0x1c4275=_0x4a7e[_0x57fa76];return _0x1c4275;};let r=0x4b;let theta=0x0;let dist=0x0;let points=[];let points1=[];let length=0x320;function setup(){createCanvas(0x2bc,0x2bc);angleMode(DEGREES);rectMode(CENTER);}function draw(){background(0x0,0x1e);theta+=0x2;dist=1.2;push();stroke(0xff);strokeWeight(0.05);line(0x0,height/0x4,width,height/0x4);line(width/0x4,0x0,width/0x4,height);pop();push();fill(0xff);text('0°',width/0x4+r+0x3,height/0x4-0x2);text(_0x3f7e('0x0'),width/0x4-0x7,height/0x4-r-0x3);text(_0x3f7e('0x1'),width/0x4-r-0x1b,height/0x4-0x2);text('270°',width/0x4-0xa,height/0x4+r+0xb);textAlign(CENTER);textSize(0xf);text(_0x3f7e('0x2'),width*0x3/0x4-0x32,height/0x4-r-0x28);text(_0x3f7e('0x3'),width/0x4-r-0x28,height*0x3/0x4-0x32);textSize(0x14);text(_0x3f7e('0x4'),width*0x3/0x4-0x32,height*0x3/0x4+0x32);pop();translate(width/0x4,height/0x4);noStroke();noFill();stroke(0xff);strokeWeight(0.5);ellipse(0x0,0x0,r*0x2);fill(0xff);ellipse(r*sin(theta),r*cos(theta),0xa);points[_0x3f7e('0x5')]({'x':r*1.5,'y':r*cos(theta)});points1[_0x3f7e('0x5')]({'x':r*sin(theta),'y':r*1.5});fill(_0x3f7e('0x6'));for(let _0x5b146e=0x0;_0x5b146e<points[_0x3f7e('0x7')];_0x5b146e++){ellipse(points[_0x5b146e]['x'],points[_0x5b146e]['y'],0x5);points[_0x5b146e]['x']+=dist;}if(points[_0x3f7e('0x7')]>length){points[_0x3f7e('0x8')]();}for(let _0x1626ad=0x0;_0x1626ad<points1[_0x3f7e('0x7')];_0x1626ad++){ellipse(points1[_0x1626ad]['x'],points1[_0x1626ad]['y'],0x5);points1[_0x1626ad]['y']+=dist;}if(points1[_0x3f7e('0x7')]>length){points1[_0x3f7e('0x8')]();}stroke(_0x3f7e('0x9'));strokeWeight(0x1);line(0x0,0x0,r*sin(theta),r*cos(theta));line(r*sin(theta),r*cos(theta),r*1.5,r*cos(theta));line(r*sin(theta),r*cos(theta),r*sin(theta),r*1.5);}