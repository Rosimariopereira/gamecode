/* 
    Equipe: 
        Rosimario de Lima Pereira - Subturma B (Líder)  
        Etapa I e II
*/

var x = 50;
var y = 425;
var xi = 750;
var yi = 395;

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
  
  fill (255, 165, 0)
  rect(xi, yi, 25, 50); // obstaculo 

}