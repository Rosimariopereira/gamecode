/* 
    Equipe: 
        Rosimario de Lima Pereira - Subturma B (Líder)  
        Etapa I, II, III e IV
*/

var x = 50;
var y = 425;
var xj = 200;
var yj = -40;
var xa = 600;
var ya = -1000;
var xe = 750;
var ye = -500;
var xb = 100;
var yb = -2000;
var xd;
var yd;
var estadoDisparo = false;

function setup() {
  createCanvas(800, 450);
}

function draw() {
  background(135, 206, 235);
  
  if (keyIsDown(RIGHT_ARROW)){
    x = x + 6
    
    if (x > 780){
    x = 780
  }
    // movimento da bola escura para a direita
  }
  
  if (keyIsDown(LEFT_ARROW)){
    x = x - 6

    if (x < 20){
    x = 20
  }
   // movimento da bola escura para a esquerda 
  }
  
  fill (50);
  ellipse (x, y, 40,40); // bola escura
  
  if (keyIsDown(ENTER) && estadoDisparo == false){
    xd = x
    yd = y
    estadoDisparo = true
  }
  
  if (estadoDisparo == true){
    ellipse (xd, yd, 8, 8); // projetil
    yd = yd - 20
    if (yd < 0){
      estadoDisparo = false
    }
  }
  
  fill (255)
  ellipse(xj, yj , 40,40); // circulos que descem
  yj = yj + 2
  if (yj > 460){
    yj = 0 - random (1000)
    xj = 0 + random (800)
    if (xj > 800){
      xj = 50
    }
  }
  
  ellipse(xa, ya , 20,20); // circulos que descem
  ya = ya + 2
  if (ya > 460){
    ya = 0 - random (450)
    xa = 0 + random (800)
    if (xa > 800){
      xa = 30
    }
  }
  
  ellipse(xe, ye , 30,30); // circulos que descem
  ye = ye + 2
  if (ye > 460){
    ye = 0 - random (2000)
    xe = 0 + random (800)
    if (xe > 800){
      xe = 401
    }
  }
  
  ellipse(xb, yb , 25,25); // circulos que descem
  yb = yb + 2
  if (yb > 460){
    yb = 0 - random (3000)
    xb = 0 + random (800)
    if (xb > 800){
      xb = 740
    }
  }

}