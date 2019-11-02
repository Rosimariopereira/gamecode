/* 
    Equipe: 
        Rosimario de Lima Pereira - Subturma B (Líder)  
        Etapa I, II, III, IV, V e VI
*/

var vetorX = [], vetorY = [], vetorD = [], vetorV = [], star = 500;
var vetorF = [], vetorG = [], vetorH = [], vetorI = [], heart = 2
var vidas = 3, pontos = 0, nivel = 1;
var x = 50, y = 425, xd = -10000, yd = -10000;
var vetorA = [], vetorB = [], vetorC = [], vetorE = [], qtd = 5
var estadoDisparo = false;
var barreiraDePontos = 50;

function setup() {
  createCanvas(800, 450);
  
  for (i = 0; i < star; i++){
    vetorX[i] = random (0, 800);
    vetorY[i] = random (-100, 450);
    vetorD[i] = random (0.1, 2.5);
    vetorV[i] = random (1,3);
  } // estrelas
  
  for (cont = 0; cont < qtd; cont++){
    vetorA[cont] = random (0, 800);
    vetorB[cont] = random (-200, 0);
    vetorC[cont] = random (15, 40);
    vetorE[cont] = random(1,2);
  } // obstaculos
  
  for (i = 0; i < heart; i++){
    vetorF[i] = random (0, 800);
    vetorG[i] = random (-10000, -1000);
    vetorH[i] = 20;
    vetorI[i] = 2;
  } // bonus de vida
}

function draw() {
  background(0);
  
  {
    fill(0, 102, 153);
    textSize(18);
    fill (255)
    text('Vidas: '+vidas, 10, 30);
    text('Pontos: '+pontos, 350, 30);
    text('Nível: '+nivel, 720, 30);
  } // informações
  
  for(i = 0; i < star; i++){
    
    vetorY[i] += vetorV[i];
    ellipse(vetorX[i], vetorY[i], vetorD[i], vetorD[i]);
    if(vetorY[i] > 450){
      vetorY[i] = random(-450, -100); 
    }
  } // estrelas
  
  for(i = 0; i < heart; i++){
    
    vetorG[i] += vetorI[i];
    fill (255, 0, 0);
    ellipse(vetorF[i], vetorG[i], vetorH[i], vetorH[i]);
    if(vetorG[i] > 450){
      vetorG[i] = random(-10000, -1000); 
    }
  } // bonus de vida
  
  fill (255);
  ellipse (x, y, 40,40); // jogador
  
  for(cont = 0; cont < qtd; cont++){
    
    vetorB[cont] += vetorE[cont];
    ellipse(vetorA[cont], vetorB[cont], vetorC[cont], vetorC[cont]);
    if(vetorB[cont] > 500){
      vetorB[cont] = random(-450, -100); 
    }
  } // obstaculos
  
  {
    if (keyIsDown(RIGHT_ARROW)){
      x = x + 5
    
      if (x > 780){
        x = 780
      }
    }
  
    if (keyIsDown(LEFT_ARROW)){
      x = x - 5

      if (x < 20){
        x = 20
      }
    }
  } // movimento do jogador
  
  {
    if (keyIsDown(ENTER) && estadoDisparo == false){
      xd = x
      yd = y
      estadoDisparo = true
    }
  
    if (estadoDisparo == true){
      ellipse (xd, yd, 8, 8);
      yd = yd - 20
      if (yd < 0){
        estadoDisparo = false
      }
    }
  } // projetil
  
  {
    
  for(cont = 0; cont < qtd; cont++){
    
    if (dist(xd, yd, vetorA[cont], vetorB[cont]) <= (((vetorC[cont])/2)+4)){
      vetorB[cont] = random (-800);
      vetorA[cont] = random (0, 800);
      
      if(vetorC[cont] >= 35){
        pontos = pontos + 2
      }
      
      if(vetorC[cont] >= 20 && vetorC[cont] < 35){
        pontos = pontos + 3 
      }
      
      if(vetorC[cont] >= 15 && vetorC[cont] < 20){
        pontos = pontos + 5 
      }
      
    }
    
  } // colisão do projetil com o obstaculo
    
  for(i = 0; i < heart; i++){
    
    if (dist(xd, yd, vetorF[i], vetorG[i]) <= (((vetorH[i])/2)+4)){
      vetorG[i] = random(-10000, -1000);
      vetorF[i] = random(0, 800);
      vidas = vidas + 1
    }
    
  } // bonus de vida
  
  for (cont = 0; cont < qtd; cont++){
    
    if (dist(x, y, vetorA[cont], vetorB[cont]) <= (((vetorC[cont])/2)+20)){
      vetorB[cont] = random (-1000, -50)
      vetorA[cont] = random (0, 800)
      vidas--
    }
    
  } // colisão do jogador
  
  } // colisão
    
    if (pontos >= barreiraDePontos){
      nivel++;
      barreiraDePontos = barreiraDePontos + 100;  
    } // niveis
}