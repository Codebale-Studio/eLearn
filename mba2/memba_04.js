const _0x5b6d=['push','switchInterval','speed','opacity','assets/comp_text.png','forEach','value','setToRandomSymbol','rain','height','Submit','totalSymbols','symbols','first','Decode\x20Song\x20Title','size','render','innerHeight','position','generateSymbols','width','consolas','Email\x20Id','resize'];(function(_0x1ab325,_0x5b6d25){const _0x54eb00=function(_0x31fc8d){while(--_0x31fc8d){_0x1ab325['push'](_0x1ab325['shift']());}};_0x54eb00(++_0x5b6d25);}(_0x5b6d,0x1ec));const _0x54eb=function(_0x1ab325,_0x5b6d25){_0x1ab325=_0x1ab325-0x0;let _0x54eb00=_0x5b6d[_0x1ab325];return _0x54eb00;};let streams=[],fadeInterval=1.5,symbolSize=0xe,img,font,d,off,img1,img2,fac=0x1,input1,input2,btn,iSize=0x12c;function preload(){const _0x2c406e=_0x54eb;img1=loadImage(_0x2c406e('0x10')),img2=loadImage('assets/comp_img.png');}function setup(){const _0x4b1f94=_0x54eb;createCanvas(window['innerWidth'],window[_0x4b1f94('0x5')]),input1=createInput(_0x4b1f94('0x2')),input2=createInput(_0x4b1f94('0xa')),btn=createButton(_0x4b1f94('0x16'),''),input1[_0x4b1f94('0x3')](iSize),input2[_0x4b1f94('0x3')](iSize),btn[_0x4b1f94('0x3')](iSize/0x3),input1[_0x4b1f94('0x6')](width/0x2-iSize/0x2,height-0x6e),input2['position'](width/0x2-iSize/0x2,height-0x50),btn[_0x4b1f94('0x6')](width/0x2-iSize/0x6,height-0x32);width<height?(img1[_0x4b1f94('0xb')](width,0x0),img2['resize'](width,0x0)):(img1[_0x4b1f94('0xb')](height,0x0),img2[_0x4b1f94('0xb')](height,0x0));d=pixelDensity(),image(img2,width/0x2-img2[_0x4b1f94('0x8')]/0x2,height/0x2-img2[_0x4b1f94('0x15')]/0x2),loadPixels(),background(0x0);let _0x31fc8d=0x0;for(let _0x3081ac=0x0;_0x3081ac<=width*fac/symbolSize;_0x3081ac++){let _0x19e90f=new Stream();_0x19e90f[_0x4b1f94('0x7')](_0x31fc8d,0x0),_0x19e90f[_0x4b1f94('0x7')](_0x31fc8d,round(random(-height,0x0))),streams['push'](_0x19e90f),_0x31fc8d+=symbolSize/fac;}textFont(_0x4b1f94('0x9')),textSize(symbolSize);}function draw(){const _0x42a71a=_0x54eb;background(0x0,0xc8),streams[_0x42a71a('0x11')](function(_0x461299){const _0x3afa34=_0x42a71a;_0x461299[_0x3afa34('0x4')]();}),tint(0xff,0xc8,0x0,0x64),image(img1,width/0x2-img1[_0x42a71a('0x8')]/0x2,height/0x2-img1['height']/0x2-0x1e),tint(0xff,0xc8,0x0,0x14),image(img2,width/0x2-img2[_0x42a71a('0x8')]/0x2,height/0x2-img2['height']/0x2);}function Symbol(_0xca808,_0x17532d,_0x2091ff,_0x1fa5fb,_0x1f4586){const _0x207745=_0x54eb;this['x']=_0xca808,this['y']=_0x17532d,this[_0x207745('0x12')],this[_0x207745('0xe')]=_0x2091ff,this[_0x207745('0x1')]=_0x1fa5fb,this[_0x207745('0xf')]=_0x1f4586,this[_0x207745('0xd')]=round(random(0x2,0x19)),this[_0x207745('0x13')]=function(){const _0x2ef6cb=_0x207745;frameCount%this[_0x2ef6cb('0xd')]==0x0&&(this[_0x2ef6cb('0x12')]=String['fromCharCode'](0x30a0+floor(random(0x0,0x61))));},this[_0x207745('0x14')]=function(){const _0x984342=_0x207745;this['y']>=height*d?this['y']=0x0:this['y']+=this[_0x984342('0xe')];};}function Stream(){const _0x1e2c8a=_0x54eb;this[_0x1e2c8a('0x0')]=[],this[_0x1e2c8a('0x17')]=round(random(0xa,0x19)),this[_0x1e2c8a('0xe')]=random(0x5,0x16),this[_0x1e2c8a('0x7')]=function(_0x509de1,_0x2b329e){const _0x449e6e=_0x1e2c8a;var _0x1573a9=0xff,_0x1de4ba=round(random(0x0,0x4))==0x1;for(var _0x3eb8ab=0x0;_0x3eb8ab<=this[_0x449e6e('0x17')];_0x3eb8ab++){symbol=new Symbol(_0x509de1,_0x2b329e,this[_0x449e6e('0xe')],_0x1de4ba,_0x1573a9),symbol[_0x449e6e('0x13')](),this[_0x449e6e('0x0')][_0x449e6e('0xc')](symbol),_0x1573a9-=0xff/this[_0x449e6e('0x17')]/fadeInterval,_0x2b329e-=symbolSize,_0x1de4ba=![];}},this[_0x1e2c8a('0x4')]=function(){const _0x543ea7=_0x1e2c8a;this[_0x543ea7('0x0')][_0x543ea7('0x11')](function(_0x143a2d){const _0xecfdf1=_0x543ea7;_0x143a2d[_0xecfdf1('0x1')]?fill(0xff,_0x143a2d['opacity']):(off=(round(_0x143a2d['y'])*width+round(_0x143a2d['x']))*d*0x4,pixels[off]>0x14?fill(pixels[off],pixels[off+0x1],pixels[off+0x2]):fill(0x96,_0x143a2d['opacity'])),text(_0x143a2d[_0xecfdf1('0x12')],_0x143a2d['x'],_0x143a2d['y']/d),_0x143a2d[_0xecfdf1('0x14')](),_0x143a2d[_0xecfdf1('0x13')]();});};}