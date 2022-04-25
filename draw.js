function draw() {
  simple();
  draw1();
  triangle();
  smile();
  compare();
  multi();
  quadraticCurve();
  quadraticCurve1();
  bezierCurve();
  dot();
  path2d();
  fillStyle();
  strokeStyle();
  globalAlpha();
  rgba();
  lineWidth();
  lineCap();
  lineJoin();
  ant();
  createLinearGradient();
  createRadialGradient();
  pattern();
  fillText();
  image();
  Scaling();
  Scaling1();
  Scaling2();
  Scaling3();
  frame();
  saveAndStore();
  translate();
  transform();
  hover()
}

function simple() {
  const canvas = document.getElementById('simple');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "rgb(200,0,0)";
    ctx.fillRect(10, 10, 50, 50)
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50)
  }
}

function draw1() {
  const canvas = document.getElementById('simple1');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.fillRect(25, 25, 100, 100)
    ctx.clearRect(45, 45, 60, 60)
    ctx.strokeRect(50, 50, 50, 50)
  }
}

function triangle() {
  const canvas = document.getElementById('triangle');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    ctx.beginPath()
    ctx.moveTo(75, 50)
    ctx.lineTo(100, 75)
    ctx.lineTo(100, 25);
    ctx.fill();
  }
}

function smile() {
  const canvas = document.getElementById('smile');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(125, 75);
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true)
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false)
    ctx.stroke();
    ctx.beginPath()
    ctx.arc(75, 75, 35, Math.PI * 1 / 5, Math.PI * 4 / 5, false)
    ctx.moveTo(55, 60);
    ctx.arc(50, 60, 5, 0, Math.PI * 2, true)
    ctx.moveTo(105, 60);
    ctx.arc(100, 60, 5, 0, Math.PI * 2, true)
    ctx.stroke();
  }
}

function compare() {
  const canvas = document.getElementById('compare');
  if (canvas.getContext) {
    const ctx = canvas.getContext('2d')
    ctx.beginPath()
    ctx.moveTo(25, 25);
    ctx.lineTo(105, 25);
    ctx.lineTo(25, 105);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(125, 50);
    ctx.lineTo(125, 130);
    ctx.lineTo(45, 130);
    ctx.closePath();
    ctx.stroke();
  }
}


function multi() {
  const canvas = document.getElementById('multi');
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.beginPath();
      const x = 25 + j * 50;
      const y = 25 + i * 50;
      const radius = 20;
      const startAngle = 0;
      const endAngle = Math.PI + (Math.PI * j) / 2;
      const anticlockwise = i % 2 === 0 ? false : true;
      ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
      if (i > 1) {
        ctx.fill();
      } else {
        ctx.stroke();
      }
    }
  }
}


function quadraticCurve() {
  const canvas = document.getElementById('quadraticCurve')
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.moveTo(75, 25)
  ctx.quadraticCurveTo(25, 25, 25, 62.5)
  ctx.quadraticCurveTo(25, 100, 50, 100)
  ctx.quadraticCurveTo(50, 120, 30, 125)
  ctx.quadraticCurveTo(60, 120, 65, 100)
  ctx.quadraticCurveTo(125, 100, 125, 62.5)
  ctx.quadraticCurveTo(125, 25, 75, 25)
  ctx.stroke()

}

function quadraticCurve1() {
  const canvas = document.getElementById('quadraticCurve1')
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')

  ctx.beginPath()
  ctx.moveTo(75, 25)
  ctx.bezierCurveTo(25, 25, 25, 25, 25, 62.5)
  ctx.bezierCurveTo(25, 100, 25, 100, 50, 100)
  ctx.bezierCurveTo(50, 120, 50, 120, 30, 125)
  ctx.bezierCurveTo(60, 120, 60, 120, 65, 100)
  ctx.bezierCurveTo(125, 100, 125, 100, 125, 62.5)
  ctx.bezierCurveTo(125, 25, 125, 25, 75, 25)
  ctx.stroke()

}

function bezierCurve() {
  const canvas = document.getElementById('bezierCurve');
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')
  ctx.beginPath();
  ctx.moveTo(75, 40);
  ctx.bezierCurveTo(75, 37, 70, 25, 50, 25);
  ctx.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
  ctx.bezierCurveTo(20, 80, 40, 102, 75, 120);
  ctx.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
  ctx.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
  ctx.bezierCurveTo(85, 25, 75, 37, 75, 40);
  ctx.fill();
}


function dot() {
  const canvas = document.getElementById('dot')
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')
  for (let i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 35, 4, 4)
  }
  for (i = 0; i < 6; i++) {
    ctx.fillRect(115, 51 + i * 16, 4, 4);
  }

  for (i = 0; i < 8; i++) {
    ctx.fillRect(51 + i * 16, 99, 4, 4);
  }
}

function path2d() {
  const canvas = document.getElementById('path2d')
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')

  const rectangle = new Path2D()
  rectangle.rect(10, 10, 50, 50);

  const circle = new Path2D()
  ctx.moveTo(115, 35)
  circle.arc(90, 35, 25, 0, Math.PI * 2, true);

  ctx.stroke(rectangle)
  ctx.fill(circle)
}


function fillStyle() {
  const canvas = document.getElementById('fillStyle')
  if (!canvas.getContext) {
    return
  }
  const ctx = canvas.getContext('2d')
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
      ctx.fillRect(j * 25, i * 25, 25, 25)
    }
  }
}

function strokeStyle() {
  const ctx = document.getElementById('strokeStyle').getContext('2d');
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx.fillStyle = 'rgb(' + Math.floor(255 - 42.5 * i) + ',' + Math.floor(255 - 42.5 * j) + ',0)';
      ctx.strokeStyle = 'rgb(0,' + Math.floor(255 - 42.5 * i) + ',' +
        Math.floor(255 - 42.5 * j) + ')';
      ctx.beginPath();
      ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2, true)
      ctx.fill();
      ctx.stroke();
    }
  }
}


function globalAlpha() {
  const ctx = document.getElementById('globalAlpha').getContext('2d')
  ctx.fillStyle = "#FD0"
  ctx.fillRect(0, 0, 75, 75)
  ctx.fillStyle = "#6C0"
  ctx.fillRect(75, 0, 75, 75)
  ctx.fillStyle = "#09F"
  ctx.fillRect(0, 75, 75, 75)
  ctx.fillStyle = "#F30"
  ctx.fillRect(75, 75, 75, 75)

  ctx.fillStyle = '#fff'
  ctx.globalAlpha = 0.2
  for (let i = 0; i < 7; i++) {
    ctx.beginPath()
    ctx.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true)
    ctx.fill();
  }
}


function rgba() {
  const ctx = document.getElementById('rgba').getContext('2d')
  ctx.fillStyle = 'rgb(255,221,0)';
  ctx.fillRect(0, 0, 150, 37.5);
  ctx.fillStyle = 'rgb(102,204,0)';
  ctx.fillRect(0, 37.5, 150, 37.5);
  ctx.fillStyle = 'rgb(0,153,255)';
  ctx.fillRect(0, 75, 150, 37.5);
  ctx.fillStyle = 'rgb(255,51,0)';
  ctx.fillRect(0, 112.5, 150, 37.5);

  for (let i = 0; i < 10; i++) {
    ctx.fillStyle = 'rgba(255,255,255,' + (i + 1) / 10 + ')';
    for (let j = 0; j < 4; j++) {
      ctx.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5)
    }
  }
}

function lineWidth() {
  const ctx = document.getElementById('lineWidth').getContext('2d')
  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = i + 1;
    ctx.beginPath();
    ctx.moveTo(i * 14, 0);
    ctx.lineTo(i * 14, 20);
    ctx.stroke();
  }

  for (let i = 0; i < 10; i++) {
    ctx.lineWidth = i + 1;
    ctx.beginPath();
    ctx.moveTo(0.5 + i * 14, 30);
    ctx.lineTo(0.5 + i * 14, 50);
    ctx.stroke();
  }
}


function lineCap() {
  const ctx = document.getElementById('lineCap').getContext('2d')
  const style = ['butt', 'round', 'square']
  ctx.strokeStyle = "#09f"
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(140, 10);
  ctx.moveTo(10, 140);
  ctx.lineTo(140, 140);
  ctx.stroke();

  ctx.strokeStyle = 'black'

  for (let i = 0; i < 3; i++) {
    ctx.lineWidth = 15;
    ctx.lineCap = style[i];
    ctx.beginPath();
    ctx.moveTo(25 + i * 50, 10)
    ctx.lineTo(25 + i * 50, 140);
    ctx.stroke();
  }

}

function lineJoin() {
  const ctx = document.getElementById('lineJoin').getContext('2d')

  const lineJoin = ['round', 'bevel', 'miter'];

  ctx.lineWidth = 10;

  for (let i = 0; i < 3; i++) {
    ctx.lineJoin = lineJoin[i];

    ctx.beginPath();
    ctx.moveTo(0, 5 + i * 40)
    ctx.lineTo(35, 45 + i * 40);
    ctx.lineTo(70, 5 + i * 40);
    ctx.lineTo(105, 45 + i * 40)
    ctx.lineTo(140, 5 + i * 40)
    ctx.stroke();
  }
}


function ant() {
  const canvas = document.getElementById('ant')
  const ctx = canvas.getContext('2d')

  let offset = 0;
  ctx.setLineDash([4, 2]);

  function march() {
    offset++;
    if (offset > 16) {
      offset = 0;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineDashOffset = -offset;
    ctx.strokeRect(10, 10, 100, 100)
    setTimeout(march, 20)
  }
  march()
}

function createLinearGradient() {
  const ctx = document.getElementById('createLinearGradient').getContext('2d');


  const lingrad = ctx.createLinearGradient(0, 0, 0, 150);
  lingrad.addColorStop(0, '#00ABEB');
  lingrad.addColorStop(0.5, '#fff')
  lingrad.addColorStop(0.5, '#26C000')
  lingrad.addColorStop(1, '#fff')

  const lingrad2 = ctx.createLinearGradient(0, 50, 0, 150);
  lingrad2.addColorStop(0.5, '#000')
  lingrad2.addColorStop(1, 'rgba(0,0,0,0)')

  ctx.strokeStyle = lingrad2;
  ctx.fillStyle = lingrad;
  ctx.fillRect(10, 10, 200, 150);
  ctx.strokeRect(50, 50, 50, 100);
}


function createRadialGradient() {
  const ctx = document.getElementById('createRadialGradient').getContext('2d');

  const radgrad = ctx.createRadialGradient(45, 45, 10, 52, 50, 20)
  radgrad.addColorStop(0, '#A7D30C')
  radgrad.addColorStop(0.9, '#019F62')
  radgrad.addColorStop(1, 'rgba(1,159,98,0)')

  ctx.fillStyle = radgrad;
  ctx.fillRect(0, 0, 150, 150);
}

function pattern() {
  const ctx = document.getElementById('pattern').getContext('2d')

  const img = new Image();
  img.src = "https://mdn.mozillademos.org/files/222/Canvas_createpattern.png";
  img.onload = function () {
    const ptrn = ctx.createPattern(img, 'repeat');
    ctx.fillStyle = ptrn;
    ctx.fillRect(0, 0, 200, 200)
  }
}

function fillText() {
  const ctx = document.getElementById('fillText').getContext('2d');

  ctx.font = "48px serif";
  ctx.fillText('hello world', 10, 50)

  ctx.strokeText('hello world', 10, 100)

  const text = ctx.measureText("hello world")
}


function image() {

  const ctx = document.getElementById('image').getContext('2d');
  const img = new Image()
  img.src = "https://mdn.mozillademos.org/files/5395/backdrop.png"
  // img.src = "data:image/gif;base64,R0lGODlhCwALAIAAAAAA3pn/ZiH5BAEAAAEALAAAAAALAAsAAAIUhA+hkcuO4lmNVindo7qyrIXiGBYAOw=="
  img.onload = function () {
    ctx.drawImage(img, 0, 0)

    ctx.beginPath()
    ctx.moveTo(30, 96)
    ctx.lineTo(70, 66)
    ctx.lineTo(103, 76)
    ctx.lineTo(170, 15)
    ctx.stroke()
  }
}


function Scaling() {
  const ctx = document.getElementById('Scaling').getContext('2d');

  const img = new Image();

  img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg"

  img.onload = function () {
    ctx.drawImage(img, 0, 0)
  }
}

function Scaling1() {
  const ctx = document.getElementById('Scaling1').getContext('2d');

  const img = new Image();

  img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg"

  img.onload = function () {
    ctx.drawImage(img, 21, 20)
  }
}

function Scaling2() {
  const ctx = document.getElementById('Scaling2').getContext('2d');

  const img = new Image();

  img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg"

  img.onload = function () {

    ctx.drawImage(img, 21, 20, 87, 104);
  }
}

function Scaling3() {
  const ctx = document.getElementById('Scaling3').getContext('2d');

  const img = new Image();

  img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg"

  img.onload = function () {
    ctx.drawImage(img, 33, 71, 104, 124, 21, 20, 87, 104);
    // ctx.drawImage(img, 21, 20, 87, 104);
  }
}

function frame() {
  const ctx = document.getElementById('frame').getContext('2d')

  const img = new Image();
  img.src = "https://mdn.mozillademos.org/files/5397/rhino.jpg"
  const frame = new Image();
  frame.src = "https://mdn.mozillademos.org/files/242/Canvas_picture_frame.png"

  img.onload = () => {
    ctx.drawImage(img, 33, 71, 104, 124, 21, 20, 87, 104)
  }

  frame.onload = () => {
    ctx.drawImage(frame, 0, 0)
  }

}

function saveAndStore() {
  const ctx = document.getElementById('saveAndStore').getContext('2d')

  ctx.fillRect(0, 0, 150, 150); // 使用默认设置绘制一个矩形
  ctx.save();

  ctx.fillStyle = "#09F";
  ctx.fillRect(15, 15, 120, 120)
  ctx.save();

  ctx.fillStyle = "#fff";
  ctx.globalAlpha = 0.5;
  ctx.fillRect(30, 30, 90, 90);

  ctx.restore();
  ctx.fillRect(45, 45, 60, 60);

  ctx.restore();
  ctx.fillRect(60, 60, 30, 30);
}

function translate() {
  const ctx = document.getElementById('translate').getContext('2d');

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ctx.save();
      ctx.fillStyle = 'rgb(' + (51 * i) + ', ' + (255 - 51 * i) + ', 255)';

      ctx.translate(i * 40, j * 40);
      ctx.fillRect(0, 0, 20, 20);
      ctx.restore();
    }
  }
}

function transform() {
  const ctx = document.getElementById('transform').getContext('2d')
  ctx.fillRect(0, 0, 100, 100)
  ctx.transform(0, 1, 1, 0, 100, 100)
  ctx.fillRect(0, 0, 100, 100)

  // var sin = Math.sin(Math.PI/6);
  // var cos = Math.cos(Math.PI/6);
  // ctx.translate(100, 100);
  // var c = 0;
  // for (var i=0; i <= 12; i++) {
  //   c = Math.floor(255 / 12 * i);
  //   ctx.fillStyle = "rgb(" + c + "," + c + "," + c + ")";
  //   ctx.fillRect(0, 0, 100, 10);
  //   ctx.transform(cos, sin, -sin, cos, 0, 0);
  // }

  // ctx.fillStyle = "rgba(255, 128, 255, 0.5)";
  // ctx.fillRect(0, 50, 100, 100);
}

function hover() {
  var canvas = document.querySelector("#hover"),
    ctx = canvas.getContext("2d"),
    rects = [{
      x: 10,
      y: 10,
      w: 200,
      h: 50
    },
    {
      x: 50,
      y: 70,
      w: 150,
      h: 30
    } // etc.
    ],
    i = 0,
    r;

  // render initial rects.
  while (r = rects[i++]) ctx.rect(r.x, r.y, r.w, r.h);
  ctx.fillStyle = "blue";
  ctx.fill();

  canvas.onmousemove = function (e) {

    // important: correct mouse position:
    var rect = this.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top,
      i = 0,
      r;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // for demo

    while (r = rects[i++]) {
      // add a single rect to path:
      ctx.beginPath();
      ctx.rect(r.x, r.y, r.w, r.h);

      // check if we hover it, fill red, if not fill it blue
      ctx.fillStyle = ctx.isPointInPath(x, y) ? "red" : "blue";
      ctx.fill();
    }

  };
  ctx.rect(10, 10, 100, 100);
  ctx.fill();
  console.log(document.querySelector("#hover").getContext('2d').isPointInPath(10, 10)); // true
}