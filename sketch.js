let c1 = 100; // Left Color
let c2 = 255; // Top Color
let c3 = 255; // Right Color
let c4 = 100; // Bottom Color

function setup() {
  createCanvas(540, 540);
  
  noCursor();

}

function draw() {
  background(0);
  stroke(51, 51, 153);

  
  strokeWeight(0);


  //Changes rate of separation
  // top separate -> bottom together
  const r = map(mouseY, height, 0, 0, 55, true);
  // top together -> bottom separate
  const r2 = map(mouseY, 0, height, 0, 55, true);
  
  scale(.575);

  
  drawS(160, 90, r2, c1, c2, c3, c4);
  drawE(320, 90, r2, c1, c2, c3, c4);
  drawP(480, 90, r2, c1, c2, c3, c4);
  drawA(640, 90, r2, c1, c2, c3, c4);
  drawR(160, 240, r2, c1, c2, c3, c4);
  drawA(330, 240, r2, c1, c2, c3, c4);
  drawT(520, 240, r2, c1, c2, c3, c4);
  drawE(690, 240, r2, c1, c2, c3, c4);
  
  drawStud(70, 210, r2, c1, c2, c3, c4);
  drawStud(830, 210, r2, c1, c2, c3, c4);
  
  drawT(175, 580, r, c1, c2, c3, c4);
  drawO(345, 580, r, c1, c2, c3, c4);
  drawG(505, 580, r, c1, c2, c3, c4);
  drawE(665, 580, r, c1, c2, c3, c4);
  drawT(175, 730, r, c1, c2, c3, c4);
  drawH(345, 730, r, c1, c2, c3, c4);
  drawE(505, 730, r, c1, c2, c3, c4);
  drawR(665, 730, r, c1, c2, c3, c4);
  
  drawStud(70, 700, r, c1, c2, c3, c4);
  drawStud(830, 700, r, c1, c2, c3, c4);
  

}

// p = where to set rate of separation
// A
function drawA(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(50 - p * 2, 10 - p);
  vertex(54 - p * 2, 24 - p);
  vertex(24 - p * 2, 100 - p);
  vertex(10 - p * 2, 110 - p);
  endShape(CLOSE);
  beginShape();
  vertex(66 + p, 24);
  vertex(85 + p, 74);
  vertex(72 + p, 65);
  vertex(60 + p, 34);
  endShape(CLOSE);
  beginShape();
  vertex(85 + p, 74 + p);
  vertex(95 + p, 100 + p);
  vertex(90 + p, 110 + p);
  vertex(80 + p, 85 + p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(50, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(66, 24 - p * 2);
  vertex(54, 24 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(48, 65);
  vertex(72, 65);
  vertex(85, 75);
  vertex(34, 75);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(54 - p, 24);
  vertex(60 - p, 34);
  vertex(48 - p, 65);
  vertex(34 - p, 75);
  endShape(CLOSE);
  beginShape();
  vertex(34 - p, 75 + p);
  vertex(40 - p, 85 + p);
  vertex(30 - p, 110 + p);
  vertex(24 - p, 100 + p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 2, 10 - p);
  vertex(110 + p * 2, 110 - p);
  vertex(95 + p * 2, 100 - p);
  vertex(66 + p * 2, 24 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(54, 24 - p);
  vertex(66, 24 - p);
  vertex(60, 34 - p);
  endShape(CLOSE);
  beginShape();
  vertex(34, 75 + p);
  vertex(85, 75 + p);
  vertex(80, 85 + p);
  vertex(40, 85 + p);
  endShape(CLOSE);
  beginShape();
  vertex(24 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(95 + p * 2, 100 + p * 3);
  vertex(110 + p * 2, 110 + p * 3);
  vertex(90 + p * 2, 110 + p * 3);
  endShape(CLOSE);

  pop();
}

// B
function drawB(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 17);
  vertex(20 - p * 2, 102);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(66 + p, 21 - p);
  vertex(69 + p, 24 - p);
  vertex(69 + p, 52 - p);
  vertex(62 + p, 60 - p);
  vertex(60 + p, 52 - p);
  vertex(62 + p, 50 - p);
  vertex(62 + p, 30 - p);
  vertex(60 + p, 26 - p);
  endShape(CLOSE);
  beginShape();
  vertex(62 + p, 60 + p);
  vertex(69 + p, 68 + p);
  vertex(69 + p, 96 + p);
  vertex(66 + p, 99 + p);
  vertex(60 + p, 94 + p);
  vertex(62 + p, 90 + p);
  vertex(62 + p, 70 + p);
  vertex(60 + p, 68 + p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(68, 10 - p * 2);
  vertex(73, 15 - p * 2);
  vertex(66, 21 - p * 2);
  vertex(62, 18 - p * 2);
  vertex(20, 18 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 52);
  vertex(60, 52);
  vertex(62, 60);
  vertex(20, 60);
  endShape(CLOSE);
  beginShape();
  vertex(30, 94 + p * 2);
  vertex(60, 94 + p * 2);
  vertex(66, 99 + p * 2);
  vertex(62, 102 + p * 2);
  vertex(20, 102 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 18 - p);
  vertex(30 - p, 26 - p);
  vertex(30 - p, 52 - p);
  vertex(20 - p, 60 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 60 + p * 2);
  vertex(30 - p, 68 + p * 2);
  vertex(30 - p, 94 + p * 2);
  vertex(20 - p, 102 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(73 + p * 2, 15 - p);
  vertex(78 + p * 2, 20 - p);
  vertex(78 + p * 2, 54 - p);
  vertex(73 + p * 2, 60 - p);
  vertex(62 + p * 2, 60 - p);
  vertex(69 + p * 2, 52 - p);
  vertex(69 + p * 2, 24 - p);
  vertex(66 + p * 2, 21 - p);
  endShape(CLOSE);
  beginShape();
  vertex(62 + p * 2, 60 + p);
  vertex(73 + p * 2, 60 + p);
  vertex(78 + p * 2, 66 + p);
  vertex(78 + p * 2, 100 + p);
  vertex(73 + p * 2, 105 + p);
  vertex(66 + p * 2, 99 + p);
  vertex(69 + p * 2, 96 + p);
  vertex(69 + p * 2, 68 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 18 - p);
  vertex(62, 18 - p);
  vertex(66, 21 - p);
  vertex(60, 26 - p);
  vertex(30, 26 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 60 + p);
  vertex(62, 60 + p);
  vertex(60, 68 + p);
  vertex(30, 68 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 102 + p * 3);
  vertex(62, 102 + p * 3);
  vertex(66, 99 + p * 3);
  vertex(73, 105 + p * 3);
  vertex(68, 110 + p * 3);
  vertex(10, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// C
function drawC(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(15 - p * 2, 15);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(15 - p * 2, 105);
  vertex(10 - p * 2, 100);
  vertex(10 - p * 2, 20);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20);
  vertex(70 + p, 30);
  vertex(60 + p, 40);
  vertex(60 + p, 30);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 90);
  vertex(70 + p, 100);
  vertex(60 + p, 90);
  vertex(60 + p, 80);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(15, 15 - p * 2);
  vertex(20, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(75, 15 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p * 2, 80 - p);
  vertex(80 + p * 2, 80 - p);
  vertex(70 + p * 2, 90 - p);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 30);
  vertex(30 - p, 90);
  vertex(20 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 20 - p);
  vertex(80 + p * 2, 40 - p);
  vertex(70 + p * 2, 30 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 80 + p);
  vertex(80 + p * 2, 100 + p);
  vertex(75 + p * 2, 105 + p);
  vertex(70 + p * 2, 100 + p);
  vertex(70 + p * 2, 90 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(60, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 2, 30 + p);
  vertex(80 + p * 2, 40 + p);
  vertex(60 + p * 2, 40 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
  pop();
}

// D
function drawD(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(67 + p, 23);
  vertex(70 + p, 26);
  vertex(70 + p, 94);
  vertex(67 + p, 97);
  vertex(60 + p, 90);
  vertex(60 + p, 30);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(75, 15 - p * 2);
  vertex(67, 23 - p * 2);
  vertex(64, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(67, 97 + p * 2);
  vertex(64, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 30);
  vertex(30 - p, 90);
  vertex(20 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 20 - p);
  vertex(80 + p * 2, 100 - p);
  vertex(75 + p * 2, 105 - p);
  vertex(67 + p * 2, 97 - p);
  vertex(70 + p * 2, 94 - p);
  vertex(70 + p * 2, 26 - p);
  vertex(67 + p * 2, 23 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(64, 20 - p);
  vertex(67, 23 - p);
  vertex(60, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(64, 100 + p * 3);
  vertex(67, 97 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(10, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// E
function drawE(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(80, 10 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 55);
  vertex(70, 55);
  vertex(62, 63);
  vertex(20, 63);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(80, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20 - p);
  vertex(30 - p, 30 - p);
  vertex(30 - p, 55 - p);
  vertex(20 - p, 63 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 63 + p * 2);
  vertex(30 - p, 70 + p * 2);
  vertex(30 - p, 90 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 10 - p);
  vertex(80 + p * 2, 30 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 2, 55);
  vertex(70 + p * 2, 70);
  vertex(62 + p * 2, 63);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 90 + p * 2);
  vertex(80 + p * 2, 110 + p * 2);
  vertex(70 + p * 2, 100 + p * 2);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(80, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 63 + p);
  vertex(62, 63 + p);
  vertex(70, 70 + p);
  vertex(30, 70 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(80, 110 + p * 3);
  vertex(10, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// F
function drawF(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(80, 10 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 55);
  vertex(70, 55);
  vertex(62, 63);
  vertex(20, 63);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20 - p);
  vertex(30 - p, 30 - p);
  vertex(30 - p, 55 - p);
  vertex(20 - p, 63 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 63 + p * 2);
  vertex(30 - p, 70 + p * 2);
  vertex(30 - p, 110 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 10 - p);
  vertex(80 + p * 2, 30 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 2, 55);
  vertex(70 + p * 2, 70);
  vertex(62 + p * 2, 63);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(80, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 63 + p);
  vertex(62, 63 + p);
  vertex(70, 70 + p);
  vertex(30, 70 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// G
function drawG(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(15 - p * 2, 15);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(15 - p * 2, 105);
  vertex(10 - p * 2, 100);
  vertex(10 - p * 2, 20);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20 - p);
  vertex(70 + p, 30 - p);
  vertex(60 + p, 40 - p);
  vertex(60 + p, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 70 + p);
  vertex(70 + p, 100 + p);
  vertex(60 + p, 90 + p);
  vertex(60 + p, 70 + p);
  endShape(CLOSE);
  beginShape();
  vertex(50, 60);
  vertex(60, 70);
  vertex(50, 80);
  endShape(CLOSE);
  
  //Top color
  fill(c2);
  beginShape();
  vertex(15, 15 - p * 2);
  vertex(20, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(75, 15 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(50 + p * 2, 60);
  vertex(80 + p * 2, 60);
  vertex(70 + p * 2, 70);
  vertex(60 + p * 2, 70);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 30);
  vertex(30 - p, 90);
  vertex(20 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 20 - p);
  vertex(80 + p * 2, 40 - p);
  vertex(70 + p * 2, 30 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 60 + p);
  vertex(80 + p * 2, 100 + p);
  vertex(75 + p * 2, 105 + p);
  vertex(70 + p * 2, 100 + p);
  vertex(70 + p * 2, 70 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(60, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 2, 30);
  vertex(80 + p * 2, 40);
  vertex(60 + p * 2, 40);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
    beginShape();
  vertex(60, 70 + p);
  vertex(60, 80 + p);
  vertex(50, 80 + p);
  endShape(CLOSE);
  pop();
}

// H
function drawH(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p, 10 - p);
  vertex(70 + p, 20 - p);
  vertex(70 + p, 63 - p);
  vertex(60 + p, 55 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 63 + p * 2);
  vertex(70 + p, 100 + p * 2);
  vertex(60 + p, 110 + p * 2);
  vertex(60 + p, 70 + p * 2);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p * 2, 10 - p * 2);
  vertex(30 - p * 2, 10 - p * 2);
  vertex(20 - p * 2, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 55);
  vertex(60, 55);
  vertex(70, 63);
  vertex(20, 63);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p * 2, 10 - p * 2);
  vertex(80 + p * 2, 10 - p * 2);
  vertex(70 + p * 2, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20 - p);
  vertex(30 - p, 10 - p);
  vertex(30 - p, 55 - p);
  vertex(20 - p, 63 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 63 + p * 2);
  vertex(30 - p, 70 + p * 2);
  vertex(30 - p, 110 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 10);
  vertex(80 + p * 2, 110);
  vertex(70 + p * 2, 100);
  vertex(70 + p * 2, 20);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 63 + p);
  vertex(70, 63 + p);
  vertex(60, 70 + p);
  vertex(30, 70 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 2, 100 + p * 3);
  vertex(80 + p * 2, 110 + p * 3);
  vertex(60 + p * 2, 110 + p * 3);
  endShape(CLOSE);
  pop();
}


// I
function drawI(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p, 10);
  vertex(20 - p, 17);
  vertex(20 - p, 100);
  vertex(10 - p, 110);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(30, 10 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 + p, 20);
  vertex(30 + p, 10);
  vertex(30 + p, 110);
  vertex(20 + p, 100);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(30, 110 + p * 3);
  vertex(10, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// J
function drawJ(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 80);
  vertex(20 - p * 2, 90);
  vertex(20 - p * 2, 100);
  vertex(15 - p * 2, 105);
  vertex(10 - p * 2, 100);
  endShape(CLOSE);
  beginShape();
  vertex(50 - p, 10 - p);
  vertex(60 - p, 20 - p);
  vertex(50 - p, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20);
  vertex(70 + p, 100);
  vertex(60 + p, 90);
  vertex(60 + p, 30);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(50, 10 - p * 2);
  vertex(80, 10 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(60, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(10, 80 - p);
  vertex(30, 80 - p);
  vertex(20, 90 - p);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 + p, 90);
  vertex(30 + p, 80);
  vertex(30 + p, 90);
  vertex(20 + p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 10 - p);
  vertex(80 + p * 2, 100 - p);
  vertex(75 + p * 2, 105 - p);
  vertex(70 + p * 2, 100 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(60, 20 - p);
  vertex(70, 20 - p);
  vertex(60, 30 - p);
  vertex(50, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
  pop();
}

// K
function drawK(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(54 + p, 10 - p);
  vertex(58 + p, 20 - p);
  vertex(42 + p, 58 - p);
  vertex(38 + p, 50 - p);
  endShape(CLOSE);
  beginShape();
  vertex(42 + p, 58 + p);
  vertex(64 + p, 100 + p);
  vertex(60 + p, 110 + p);
  vertex(38 + p, 65 + p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p * 2, 10 - p * 2);
  vertex(30 - p * 2, 10 - p * 2);
  vertex(20 - p * 2, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(54 + p * 2, 10 - p * 2);
  vertex(72 + p * 2, 10 - p * 2);
  vertex(58 + p * 2, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 50);
  vertex(38, 50);
  vertex(42, 58);
  vertex(20, 58);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20 - p);
  vertex(30 - p, 10 - p);
  vertex(30 - p, 50 - p);
  vertex(20 - p, 58 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 58 + p * 2);
  vertex(30 - p, 65 + p * 2);
  vertex(30 - p, 110 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(58 + p * 2, 20 - p);
  vertex(72 + p * 2, 10 - p);
  vertex(52 + p * 2, 58 - p);
  vertex(42 + p * 2, 58 - p);
  endShape(CLOSE);
  beginShape();
  vertex(42 + p * 2, 58 + p);
  vertex(52 + p * 2, 58 + p);
  vertex(80 + p * 2, 110 + p);
  vertex(64 + p * 2, 100 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 58 + p);
  vertex(42, 58 + p);
  vertex(38, 65 + p);
  vertex(30, 65 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(64 + p * 2, 100 + p * 3);
  vertex(80 + p * 2, 110 + p * 3);
  vertex(60 + p * 2, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// L
function drawL(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 17);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p, 10 - p * 2);
  vertex(30 - p, 10 - p * 2);
  vertex(20 - p, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p);
  vertex(80, 90 + p);
  vertex(70, 100 + p);
  vertex(20, 100 + p);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20, 20 - p);
  vertex(30, 10 - p);
  vertex(30, 90 - p);
  vertex(20, 100 - p);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p, 90 + p * 2);
  vertex(80 + p, 110 + p * 2);
  vertex(70 + p, 100 + p * 2);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(80, 110 + p * 3);
  vertex(10, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// M
function drawM(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(32 - p, 20);
  vertex(55 - p, 60);
  vertex(50 - p, 70);
  vertex(30 - p, 35);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p, 10 - p);
  vertex(78 + p, 20 - p);
  vertex(55 + p, 60 - p);
  vertex(55 + p, 45 - p);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p, 35 + p);
  vertex(90 + p, 20 + p);
  vertex(90 + p, 100 + p);
  vertex(80 + p, 110 + p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p * 2, 10 - p * 2);
  vertex(35 - p * 2, 10 - p * 2);
  vertex(32 - p * 2, 20 - p * 2);
  vertex(20 - p * 2, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 10 - p * 2);
  vertex(100 + p * 2, 10 - p * 2);
  vertex(90 + p * 2, 20 - p * 2);
  vertex(78 + p * 2, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20 + p);
  vertex(30 - p, 35 + p);
  vertex(30 - p, 110 + p);
  vertex(20 - p, 100 + p);
  endShape(CLOSE);
  beginShape();
  vertex(35 - p, 10 - p);
  vertex(55 - p, 45 - p);
  vertex(55 - p, 60 - p);
  vertex(32 - p, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(78 + p, 20);
  vertex(80 + p, 35);
  vertex(60 + p, 70);
  vertex(55 + p, 60);
  endShape(CLOSE);
  beginShape();
  vertex(100 + p * 2, 10);
  vertex(100 + p * 2, 110);
  vertex(90 + p * 2, 100);
  vertex(90 + p * 2, 20);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(90 + p * 2, 100 + p * 3);
  vertex(100 + p * 2, 110 + p * 3);
  vertex(80 + p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p * 2, 20 - p * 1.5);
  vertex(32 - p * 2, 20 - p * 1.5);
  vertex(30 - p * 2, 35 - p * 1.5);
  endShape(CLOSE);
  beginShape();
  vertex(78 + p * 2, 20 - p * 1.5);
  vertex(90 + p * 2, 20 - p * 1.5);
  vertex(80 + p * 2, 35 - p * 1.5);
  endShape(CLOSE);
  beginShape();
  vertex(55, 60);
  vertex(60, 70);
  vertex(50, 70);
  endShape(CLOSE);

  pop();
}

// N
function drawN(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(22 - p * 2, 18);
  vertex(22 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(22, 18 + p);
  vertex(68, 100 + p);
  vertex(60, 110 + p);
  vertex(30, 52 + p);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p, 10 - p);
  vertex(68 + p, 18 - p);
  vertex(68 + p, 100 - p);
  vertex(60 + p, 70 - p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p * 2, 10 - p * 2);
  vertex(30 - p * 2, 10 - p * 2);
  vertex(22 - p * 2, 18 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p * 2, 10 - p * 2);
  vertex(80 + p * 2, 10 - p * 2);
  vertex(68 + p * 2, 18 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(22 - p, 18 + p);
  vertex(30 - p, 52 + p);
  vertex(30 - p, 110 + p);
  vertex(22 - p, 100 + p);
  endShape(CLOSE);
  beginShape();
  vertex(30, 10 - p);
  vertex(60, 70 - p);
  vertex(68, 100 - p);
  vertex(22, 18 - p);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 10);
  vertex(80 + p * 2, 110);
  vertex(68 + p * 2, 100);
  vertex(68 + p * 2, 18);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(22 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(68 + p * 2, 100 + p * 3);
  vertex(80 + p * 2, 110 + p * 3);
  vertex(60 + p * 2, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// O
function drawO(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(15 - p * 2, 15);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(15 - p * 2, 105);
  vertex(10 - p * 2, 100);
  vertex(10 - p * 2, 20);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20);
  vertex(70 + p, 100);
  vertex(60 + p, 90);
  vertex(60 + p, 30);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(15, 15 - p * 2);
  vertex(20, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(75, 15 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 30);
  vertex(30 - p, 90);
  vertex(20 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 20 - p);
  vertex(80 + p * 2, 100 - p);
  vertex(75 + p * 2, 105 - p);
  vertex(70 + p * 2, 100 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(60, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
  pop();
}

// P
function drawP(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 18);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(66 + p, 21 - p);
  vertex(69 + p, 24 - p);
  vertex(69 + p, 56 - p);
  vertex(66 + p, 60 - p);
  vertex(60 + p, 55 - p);
  vertex(62 + p, 52 - p);
  vertex(62 + p, 30 - p);
  vertex(60 + p, 26 - p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(68, 10 - p * 2);
  vertex(73, 15 - p * 2);
  vertex(66, 21 - p * 2);
  vertex(62, 18 - p * 2);
  vertex(20, 18 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(20, 63);
  vertex(30, 55);
  vertex(60, 55);
  vertex(66, 60);
  vertex(62, 63);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 18 - p);
  vertex(30 - p, 26 - p);
  vertex(30 - p, 55 - p);
  vertex(20 - p, 63 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 63 + p * 2);
  vertex(30 - p, 71 + p * 2);
  vertex(30 - p, 110 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(73 + p * 2, 15 - p);
  vertex(78 + p * 2, 20 - p);
  vertex(78 + p * 2, 60 - p);
  vertex(73 + p * 2, 66 - p);
  vertex(66 + p * 2, 60 - p);
  vertex(69 + p * 2, 56 - p);
  vertex(69 + p * 2, 24 - p);
  vertex(66 + p * 2, 21 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(20, 18 - p);
  vertex(62, 18 - p);
  vertex(66, 21 - p);
  vertex(60, 26 - p);
  vertex(30, 26 - p);
  endShape(CLOSE);
  beginShape();
  vertex(62, 63 + p);
  vertex(66, 60 + p);
  vertex(73, 66 + p);
  vertex(68, 71 + p);
  vertex(30, 71 + p);
  vertex(20, 63 + p);
  endShape(CLOSE);
  pop();
}

// Q
function drawQ(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(15 - p * 2, 15);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 100);
  vertex(15 - p * 2, 105);
  vertex(10 - p * 2, 100);
  vertex(10 - p * 2, 20);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20);
  vertex(70 + p, 100);
  vertex(60 + p, 90);
  vertex(60 + p, 30);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 100 + p * 3);
  vertex(80 + p, 100 + p * 3);
  vertex(90 + p, 110 + p * 3);
  vertex(60 + p, 110 + p * 3);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(15, 15 - p * 2);
  vertex(20, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(75, 15 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 90 + p * 2);
  vertex(90 + p * 2, 90 + p * 2);
  vertex(80 + p * 2, 100 + p * 2);
  vertex(70 + p * 2, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 30);
  vertex(30 - p, 90);
  vertex(20 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 20 - p);
  vertex(80 + p * 2, 90 - p);
  vertex(70 + p * 2, 100 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(90 + p * 2, 90 + p * 3);
  vertex(90 + p * 2, 110 + p * 3);
  vertex(80 + p * 2, 100 + p * 3);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(60, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(60, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
  pop();
}

// R
function drawR(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 18);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  beginShape();
  vertex(66 + p, 21 - p);
  vertex(69 + p, 24 - p);
  vertex(69 + p, 56 - p);
  vertex(66 + p, 60 - p);
  vertex(60 + p, 55 - p);
  vertex(62 + p, 52 - p);
  vertex(62 + p, 29 - p);
  vertex(60 + p, 26 - p);
  endShape(CLOSE);
  beginShape();
  vertex(54 + p, 63 + p * 2);
  vertex(74 + p, 100 + p * 2);
  vertex(70 + p, 110 + p * 2);
  vertex(51 + p, 71 + p * 2);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(68, 10 - p * 2);
  vertex(73, 15 - p * 2);
  vertex(66, 21 - p * 2);
  vertex(62, 18 - p * 2);
  vertex(20, 18 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 55);
  vertex(60, 55);
  vertex(66, 60);
  vertex(62, 63);
  vertex(20, 63);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 18 - p);
  vertex(30 - p, 26 - p);
  vertex(30 - p, 55 - p);
  vertex(20 - p, 63 - p);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 63 + p * 2);
  vertex(30 - p, 71 + p * 2);
  vertex(30 - p, 110 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(73 + p * 2, 15 - p);
  vertex(78 + p * 2, 20 - p);
  vertex(78 + p * 2, 60 - p);
  vertex(73 + p * 2, 66 - p);
  vertex(66 + p * 2, 60 - p);
  vertex(69 + p * 2, 56 - p);
  vertex(69 + p * 2, 24 - p);
  vertex(66 + p * 2, 21 - p);
  endShape(CLOSE);
  beginShape();
  vertex(54 + p * 2, 63 + p);
  vertex(68 + p * 2, 71 + p);
  vertex(90 + p * 2, 110 + p);
  vertex(74 + p * 2, 100 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(10 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(74 + p * 2, 100 + p * 3);
  vertex(90 + p * 2, 110 + p * 3);
  vertex(70 + p * 2, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(20, 18 - p);
  vertex(62, 18 - p);
  vertex(66, 21 - p);
  vertex(60, 26 - p);
  vertex(30, 26 - p);
  endShape(CLOSE);
  beginShape();
  vertex(30, 71 + p);
  vertex(51, 71 + p);
  vertex(54, 63 + p);
  vertex(20, 63 + p);
  endShape(CLOSE);
  beginShape();
  vertex(54 + p * 2, 63);
  vertex(62 + p * 2, 63);
  vertex(66 + p * 2, 60);
  vertex(73 + p * 2, 66);
  vertex(68 + p * 2, 71);
  endShape(CLOSE);
  pop();
}

// S
function drawS(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(15 - p * 2, 15);
  vertex(20 - p * 2, 20);
  vertex(20 - p * 2, 46);
  vertex(25 - p * 2, 51);
  vertex(15 - p * 2, 57);
  vertex(10 - p * 2, 52);
  vertex(10 - p * 2, 20);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p * 2, 90 + p);
  vertex(20 - p * 2, 100 + p);
  vertex(15 - p * 2, 105 + p);
  vertex(10 - p * 2, 100 + p);
  vertex(10 - p * 2, 80 + p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20);
  vertex(70 + p, 30);
  vertex(60 + p, 40);
  vertex(60 + p, 30);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 73 + p);
  vertex(70 + p, 100 + p);
  vertex(60 + p, 90 + p);
  vertex(60 + p, 78 + p);
  vertex(56 + p, 75 + p);
  vertex(65 + p, 68 + p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(15, 15 - p * 2);
  vertex(20, 10 - p * 2);
  vertex(70, 10 - p * 2);
  vertex(75, 15 - p * 2);
  vertex(70, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(34, 44);
  vertex(75, 62);
  vertex(65, 68);
  vertex(25, 51);
  endShape(CLOSE);
  beginShape();
  vertex(10 - p, 80 - p);
  vertex(30 - p, 80 - p);
  vertex(20 - p, 90 - p);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 30);
  vertex(30 - p, 41);
  vertex(34 - p, 44);
  vertex(25 - p, 51);
  vertex(20 - p, 46);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 90 + p);
  vertex(30 - p, 80 + p);
  vertex(30 - p, 90 + p);
  vertex(20 - p, 100 + p);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 15 - p);
  vertex(80 + p * 2, 20 - p);
  vertex(80 + p * 2, 40 - p);
  vertex(70 + p * 2, 30 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(75 + p * 2, 62 + p);
  vertex(80 + p * 2, 67 + p);
  vertex(80 + p * 2, 100 + p);
  vertex(75 + p * 2, 105 + p);
  vertex(70 + p * 2, 100 + p);
  vertex(70 + p * 2, 73 + p);
  vertex(65 + p * 2, 68 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(70, 20 - p);
  vertex(60, 30 - p);
  vertex(30, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 30 + p);
  vertex(80 + p, 40 + p);
  vertex(60 + p, 40 + p);
  endShape(CLOSE);
  beginShape();
  vertex(25, 51 + p);
  vertex(65, 68 + p);
  vertex(56, 75 + p);
  vertex(15, 57 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
  pop();
}

// T
function drawT(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 3, 10 - p);
  vertex(20 - p * 3, 20 - p);
  vertex(10 - p * 3, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(50 - p, 20 + p * 2);
  vertex(50 - p, 100 + p * 2);
  vertex(40 - p, 110 + p * 2);
  vertex(40 - p, 30 + p * 2);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(90, 10 - p * 2);
  vertex(80, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(90 + p * 3, 10);
  vertex(90 + p * 3, 30);
  vertex(80 + p * 3, 20);
  endShape(CLOSE);
  beginShape();
  vertex(50 + p, 20 + p * 2);
  vertex(60 + p, 30 + p * 2);
  vertex(60 + p, 110 + p * 2);
  vertex(50 + p, 100 + p * 2);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(50 + p, 20);
  vertex(80 + p, 20);
  vertex(90 + p, 30);
  vertex(60 + p, 30);
  endShape(CLOSE);
  beginShape();
  vertex(20 - p, 20);
  vertex(50 - p, 20);
  vertex(40 - p, 30);
  vertex(10 - p, 30);
  endShape(CLOSE);
  beginShape();
  vertex(50, 100 + p * 3);
  vertex(60, 110 + p * 3);
  vertex(40, 110 + p * 3);
  endShape(CLOSE);

  pop();
}

// U
function drawU(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10 - p);
  vertex(20 - p * 2, 20 - p);
  vertex(20 - p * 2, 100 - p);
  vertex(15 - p * 2, 105 - p);
  vertex(10 - p * 2, 100 - p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 20);
  vertex(70 + p, 100);
  vertex(60 + p, 90);
  vertex(60 + p, 10);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p, 10 - p * 2);
  vertex(30 - p, 10 - p * 2);
  vertex(20 - p, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p, 10 - p * 2);
  vertex(80 + p, 10 - p * 2);
  vertex(70 + p, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(30, 90 + p * 2);
  vertex(60, 90 + p * 2);
  vertex(70, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 10);
  vertex(30 - p, 90);
  vertex(20 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 10 - p);
  vertex(80 + p * 2, 100 - p);
  vertex(75 + p * 2, 105 - p);
  vertex(70 + p * 2, 100 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(70, 100 + p * 3);
  vertex(75, 105 + p * 3);
  vertex(70, 110 + p * 3);
  vertex(20, 110 + p * 3);
  vertex(15, 105 + p * 3);
  endShape(CLOSE);
  pop();
}

// V
function drawV(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10 - p);
  vertex(20 - p * 2, 20 - p);
  vertex(39 - p * 2, 100 - p);
  vertex(31 - p * 2, 110 - p);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p, 10);
  vertex(70 + p, 20);
  vertex(53 + p, 100);
  vertex(46 + p, 90);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p, 10 - p * 2);
  vertex(30 - p, 10 - p * 2);
  vertex(20 - p, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p, 10 - p * 2);
  vertex(80 + p, 10 - p * 2);
  vertex(70 + p, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(46, 90 + p * 2);
  vertex(53, 100 + p * 2);
  vertex(39, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 20);
  vertex(30 - p, 10);
  vertex(46 - p, 90);
  vertex(39 - p, 100);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 10 - p);
  vertex(61 + p * 2, 110 - p);
  vertex(53 + p * 2, 100 - p);
  vertex(70 + p * 2, 20 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(39, 100 + p * 3);
  vertex(53, 100 + p * 3);
  vertex(61, 110 + p * 3);
  vertex(31, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// W
function drawW(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10 - p);
  vertex(20 - p * 2, 20 - p);
  vertex(30 - p * 2, 100 - p);
  vertex(20 - p * 2, 110 - p);
  endShape(CLOSE);
  beginShape();
  vertex(60 - p, 50 + p);
  vertex(65 - p, 60 + p);
  vertex(42 - p, 100 + p);
  vertex(40 - p, 85 + p);
  endShape(CLOSE);
  beginShape();
  vertex(65 + p, 60 + p * 2);
  vertex(88 + p, 100 + p * 2);
  vertex(85 + p, 110 + p * 2);
  vertex(65 + p, 75 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(100 + p, 10 - p);
  vertex(110 + p, 20 - p);
  vertex(100 + p, 100 - p);
  vertex(90 + p, 85 - p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p, 10 - p * 2);
  vertex(30 - p, 10 - p * 2);
  vertex(20 - p, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(40 - p * 2, 85 + p * 2);
  vertex(42 - p * 2, 100 + p * 2);
  vertex(30 - p * 2, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(60, 50);
  vertex(70, 50);
  vertex(65, 60);
  endShape(CLOSE);
  beginShape();
  vertex(90 + p * 2, 85 + p * 2);
  vertex(100 + p * 2, 100 + p * 2);
  vertex(88 + p * 2, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(100 + p, 10 - p * 2);
  vertex(120 + p, 10 - p * 2);
  vertex(110 + p, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(30 - p, 10 - p);
  vertex(40 - p, 85 - p);
  vertex(30 - p, 100 - p);
  vertex(20 - p, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(65 - p, 60 + p * 2);
  vertex(65 - p, 75 + p * 2);
  vertex(45 - p, 110 + p * 2);
  vertex(42 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 50 + p);
  vertex(90 + p, 85 + p);
  vertex(88 + p, 100 + p);
  vertex(65 + p, 60 + p);
  endShape(CLOSE);
  beginShape();
  vertex(120 + p * 2, 10 - p);
  vertex(110 + p * 2, 110 - p);
  vertex(100 + p * 2, 100 - p);
  vertex(110 + p * 2, 20 - p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(30 - p, 100 + p * 3);
  vertex(42 - p, 100 + p * 3);
  vertex(45 - p, 110 + p * 3);
  vertex(20 - p, 110 + p * 3);
  endShape(CLOSE);
  beginShape();
  vertex(88 + p, 100 + p * 3);
  vertex(100 + p, 100 + p * 3);
  vertex(110 + p, 110 + p * 3);
  vertex(85 + p, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// X
function drawX(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(5 - p * 2, 10 - p);
  vertex(24 - p * 2, 20 - p);
  vertex(50 - p * 2, 56 - p);
  vertex(40 - p * 2, 56 - p);
  endShape(CLOSE);
  beginShape();
  vertex(50 - p * 2, 56 + p);
  vertex(24 - p * 2, 100 + p);
  vertex(5 - p * 2, 110 + p);
  vertex(40 - p * 2, 56 + p);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p, 10 - p);
  vertex(76 + p, 20 - p);
  vertex(50 + p, 56 - p);
  vertex(50 + p, 43 - p);
  endShape(CLOSE);
  beginShape();
  vertex(50 + p, 56 + p);
  vertex(76 + p, 100 + p);
  vertex(70 + p, 110 + p);
  vertex(50 + p, 75 + p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(5 - p * 3, 10 - p * 2);
  vertex(30 - p * 3, 10 - p * 2);
  vertex(24 - p * 3, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(70 + p * 3, 10 - p * 2);
  vertex(95 + p * 3, 10 - p * 2);
  vertex(76 + p * 3, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(30 - p, 10 - p);
  vertex(50 - p, 43 - p);
  vertex(50 - p, 56 - p);
  vertex(24 - p, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(50 - p, 56 + p);
  vertex(50 - p, 75 + p);
  vertex(30 - p, 110 + p);
  vertex(24 - p, 100 + p);
  endShape(CLOSE);
  beginShape();
  vertex(76 + p * 2, 20 - p);
  vertex(95 + p * 2, 10 - p);
  vertex(60 + p * 2, 56 - p);
  vertex(50 + p * 2, 56 - p);
  endShape(CLOSE);
  beginShape();
  vertex(95 + p * 2, 110 + p);
  vertex(76 + p * 2, 100 + p);
  vertex(50 + p * 2, 56 + p);
  vertex(60 + p * 2, 56 + p);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(24 - p * 2, 100 + p * 3);
  vertex(30 - p * 2, 110 + p * 3);
  vertex(5 - p * 2, 110 + p * 3);
  endShape(CLOSE);
  fill(c4);
  beginShape();
  vertex(76 + p * 2, 100 + p * 3);
  vertex(95 + p * 2, 110 + p * 3);
  vertex(70 + p * 2, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// Y
function drawY(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10 - p);
  vertex(28 - p * 2, 20 - p);
  vertex(50 - p * 2, 64 - p);
  vertex(40 - p * 2, 64 - p);
  endShape(CLOSE);
  beginShape();
  vertex(50 - p, 64 + p * 2);
  vertex(50 - p, 100 + p * 2);
  vertex(40 - p, 110 + p * 2);
  vertex(40 - p, 64 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(65 + p, 10 - p);
  vertex(71 + p, 20 - p);
  vertex(50 + p, 64 - p);
  vertex(50 + p, 45 - p);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10 - p * 3, 10 - p * 2);
  vertex(35 - p * 3, 10 - p * 2);
  vertex(28 - p * 3, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(65 + p * 3, 10 - p * 2);
  vertex(90 + p * 3, 10 - p * 2);
  vertex(71 + p * 3, 20 - p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(35 - p, 10 - p);
  vertex(50 - p, 45 - p);
  vertex(50 - p, 64 - p);
  vertex(28 - p, 20 - p);
  endShape(CLOSE);
  beginShape();
  vertex(71 + p * 2, 20 - p);
  vertex(90 + p * 2, 10 - p);
  vertex(60 + p * 2, 64 - p);
  vertex(50 + p * 2, 64 - p);
  endShape(CLOSE);
  beginShape();
  vertex(60 + p, 110 + p * 2);
  vertex(50 + p, 100 + p * 2);
  vertex(50 + p, 64 + p * 2);
  vertex(60 + p, 64 + p * 2);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(50, 100 + p * 3);
  vertex(60, 110 + p * 3);
  vertex(40, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// Z
function drawZ(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(10 - p * 2, 10);
  vertex(20 - p * 2, 20);
  vertex(10 - p * 2, 30);
  endShape(CLOSE);
  beginShape();
  vertex(80 + p * 2, 20 - p * 2);
  vertex(80 + p * 2, 32 - p * 2);
  vertex(67 + p * 2, 30 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(10 - p * 2, 82);
  vertex(20 - p * 2, 88);
  vertex(20 - p * 2, 100);
  vertex(10 - p * 2, 110);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(10, 10 - p * 2);
  vertex(90, 10 - p * 2);
  vertex(80, 20 - p * 2);
  vertex(20, 20 - p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(67, 30);
  vertex(80, 32);
  vertex(20, 88);
  vertex(10, 82);
  endShape(CLOSE);
  beginShape();
  vertex(33, 90 + p * 2);
  vertex(90, 90 + p * 2);
  vertex(80, 100 + p * 2);
  vertex(20, 100 + p * 2);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(20 - p, 88 + p * 2);
  vertex(33 - p, 90 + p * 2);
  vertex(20 - p, 100 + p * 2);
  endShape(CLOSE);
  beginShape();
  vertex(90 + p * 2, 10 + p);
  vertex(90 + p * 2, 38 + p);
  vertex(80 + p * 2, 32 + p);
  vertex(80 + p * 2, 20 + p);
  endShape(CLOSE);
  beginShape();
  vertex(90 + p * 2, 90 + p * 2);
  vertex(90 + p * 2, 110 + p * 2);
  vertex(80 + p * 2, 100 + p * 2);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 - p);
  vertex(80, 20 - p);
  vertex(67, 30 - p);
  vertex(10, 30 - p);
  endShape(CLOSE);
  beginShape();
  vertex(80, 32 + p);
  vertex(90, 38 + p);
  vertex(33, 90 + p);
  vertex(20, 88 + p);
  endShape(CLOSE);
  beginShape();
  vertex(20, 100 + p * 3);
  vertex(80, 100 + p * 3);
  vertex(90, 110 + p * 3);
  vertex(10, 110 + p * 3);
  endShape(CLOSE);
  pop();
}

// Stud
function drawStud(x, y, p, c1, c2, c3, c4) {
  push();
  translate(x, y);
  // Left Color
  fill(c1);
  beginShape();
  vertex(0 - p, 0);
  vertex(10 - p, 10);
  vertex(10 - p, 20);
  vertex(0 - p, 30);
  endShape(CLOSE);
  //Top color
  fill(c2);
  beginShape();
  vertex(0, 0 - p);
  vertex(30, 0 - p);
  vertex(20, 10 - p);
  vertex(10, 10- p);
  endShape(CLOSE);
  // Right Color
  fill(c3);
  beginShape();
  vertex(30 + p, 0);
  vertex(30 + p, 30);
  vertex(20 + p, 20);
  vertex(20 + p, 10);
  endShape(CLOSE);
  // Bottom Color
  fill(c4);
  beginShape();
  vertex(20, 20 + p);
  vertex(30, 30 + p);
  vertex(0, 30 + p);
  vertex(10, 20 + p);
  endShape(CLOSE);

  pop();
}
