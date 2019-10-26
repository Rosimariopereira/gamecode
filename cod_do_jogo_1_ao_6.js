/* 
    Equipe: 
        Rosimario de Lima Pereira - Subturma B (Líder)  
        Etapa I, II, III, IV, V e VI
*/

var vidas = 5;
var pontos = 0;
var nivel = 1;
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
  
  fill(0, 102, 153);
  textSize(18);
  fill (255)
  text('Vidas: '+vidas, 10, 30);
  text('Pontos: '+pontos, 350, 30);
  text('Nível: '+nivel, 720, 30);
  
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
  
  if (dist(xd, yd, xj, yj) <= 24){
    yj = 0 - random (1000)
    xj = 0 + random (800)
    pontos = pontos + 2
  }
  
  if (dist(x, y, xj, yj) <= 40){
    yj = 0 - random (1000)
    xj = 0 + random (800)
    vidas--
  }

  if (pontos >= 20){

    nivel = 2
  
    ellipse(xa, ya , 20,20); // circulos que descem
    ya = ya + 2
    if (ya > 460){
      ya = 0 - random (450)
      xa = 0 + random (800)
      if (xa > 800){
        xa = 30
      }
    }
  
    if (dist(xd, yd, xa, ya) <= 14){
      ya = 0 - random (1000)
      xa = 0 + random (800)
      pontos = pontos + 10
    }

    if (dist(x, y, xa, ya) <= 30){
      ya = 0 - random (1000)
      xa = 0 + random (800)
      vidas--
    }
    
  if (pontos >= 150){
    
    nivel = 3
    
    ellipse(xe, ye , 30,30); // circulos que descem
    ye = ye + 2
    if (ye > 460){
      ye = 0 - random (2000)
      xe = 0 + random (800)
      if (xe > 800){
        xe = 401
      }
    }
  
    if (dist(xd, yd, xe, ye) <= 19){
      ye = 0 - random (1000)
      xe = 0 + random (800)
      pontos = pontos + 5
    }
  
    if (dist(x, y, xe, ye) <= 35){
      ye = 0 - random (1000)
      xe = 0 + random (800)
      vidas--
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
  
    if (dist(xd, yd, xb, yb) <= 16.5){
      yb = 0 - random (1000)
      xb = 0 + random (800)
      pontos = pontos + 8
    }

    if (dist(x, y, xb, yb) <= 32.5){
      yb = 0 - random (1000)
      xb = 0 + random (800)
      vidas--
    }
    }
    
    if (pontos >= 300){
      nivel = 4
      yj += 2.6
      ye += 2.6
      yb += 2.6
    }
    
    if (pontos >= 400){
      nivel = 5
      yj += 2.8
      ye += 2.8
    }
    
  }
}