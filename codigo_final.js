/* 
    Equipe: 
        Rosimario de Lima Pereira - Subturma B (Líder)  
        Etapas I, II, III, IV, V, VI, VII, VIII, IX e X
*/

var tempo = 0, tela = 1
var vetorX = [], vetorY = [], vetorD = [], vetorV = [], star = 500;
var vetorF = [], vetorG = [], vetorH = [], vetorI = [], heart = 2
var vidas = 3, pontos = 0, nivel = 1;
var x = 400, y = 415, xd = -10000, yd = -10000;
var vetorA = [], vetorB = [], vetorC = [], vetorE = [], qtd = 4
var estadoDisparo = false;
var barreiraDePontos = 50;
var imgColi = [];

let imgNave;
let imgVida;
let imgTela1;
let imgTela3;
let imgObs;
let imgProj;
function preload() {
  
  imgNave = loadImage('nave2.png');
  imgVida = loadImage('coracao.png');
  imgTela1 = loadImage('tela_1.png');
  imgTela3 = loadImage('tela_3.png');
  imgObs = loadImage('asteroid_render_04.png');
  imgProj = loadImage('shot1.png');
  for (i = 1; i <= 10; i++){
    imgColi[i] = loadImage('bubble_explo'+i+'.png');
  }
}

function setup() {
  createCanvas(800, 450);
  frameRate(30);
  
  for (i = 0; i < star; i++){
    vetorX[i] = random (0, 800);
    vetorY[i] = random (-100, 450);
    vetorD[i] = random (0.1, 2.5);
    vetorV[i] = random (1,3);
  } // estrelas
  
  for (cont = 0; cont < qtd; cont++){
    vetorA[cont] = random (0, 800);
    vetorB[cont] = random (-1000, -100);
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

  if (tela == 1){
    //Inicio do jogo
    background(0);
    image(imgTela1, 0, 0, 800, 450);
    textSize(50);
    fill(255);
    text("CosmusX", 290, 250);
    textSize(20);
    text("> > Pra começar pressione CONTROL", 240, 420);
    //tecla para começar o jogo
    if(keyIsDown(CONTROL)){
      tela = 2
      }
  }
  if (tela == 2){
    // Execução do jogo
    tempo++
    background(0);
    //textSize(50);
    //fill(255);
    //text("Segundos: "+(Math.floor(tempo/30)), 50, 250);
      {
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
      //ellipse(vetorF[i], vetorG[i], vetorH[i], vetorH[i]);
      imageMode(CENTER);
      image(imgVida, vetorF[i], vetorG[i], 20, 20);
      if(vetorG[i] > 450){
        vetorG[i] = random(-10000, -1000); 
        vetorF[i] = random(0, 800);
      }
    } // bonus de vida
    fill (255);
    //ellipse (x, y, 40,40); // jogador
    imageMode(CENTER);
    image(imgNave, x, y, 50, 60);
    for(cont = 0; cont < qtd; cont++){
      vetorB[cont] += vetorE[cont];
      //ellipse(vetorA[cont], vetorB[cont], vetorC[cont], vetorC[cont]);
      image(imgObs, vetorA[cont], vetorB[cont], 2*vetorC[cont], 2*vetorC[cont]);
      if(vetorB[cont] > 500){
        vetorB[cont] = random(-450, -100);
        vetorA[cont] = random(0, 800);
      }
    } // obstaculos
    {
      if (keyIsDown(RIGHT_ARROW)){
        x = x + 4
        if (x > 790){
          x = 790
        }
      }
      if (keyIsDown(LEFT_ARROW)){
        x = x - 4
        if (x < 10){
          x = 10
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
        //ellipse (xd, yd, 8, 8);
        image(imgProj, xd, yd, 16, 16);
        yd = yd - 20
        if (yd < 0){
          estadoDisparo = false
        }
      }
    } // projetil
    {
    for(cont = 0; cont < qtd; cont++){
      if (dist(xd, yd, vetorA[cont], vetorB[cont]) <= (((vetorC[cont])/2)+4)){
        imageMode(CENTER)
        for(i = 1; i <= 10; i++){
          image(imgColi[i], xd, yd, 30, 30);
        }
        vetorB[cont] = random (-450, -100);
        vetorA[cont] = random (0, 800);
        estadoDisparo = false
        xd = -10000
        yd = -10000
        if(vetorC[cont] >= 35){
          pontos = pontos + 5
        }
        if(vetorC[cont] >= 20 && vetorC[cont] < 35){
          pontos = pontos + 3 
        }
        if(vetorC[cont] >= 15 && vetorC[cont] < 20){
          pontos = pontos + 2 
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
        vetorB[cont] = random (-450, -100)
        vetorA[cont] = random (0, 800)
        vidas--
        imageMode(CENTER);
        for(i = 1; i <= 10; i++){
          image(imgColi[i], x, y, 30, 30);
        }
      }
    } // colisão do jogador
    } // colisão
      if (pontos >= barreiraDePontos){
          nivel++;
          barreiraDePontos = barreiraDePontos + 100;
        if (nivel == 2){
          for (cont = 0; cont < qtd; cont++){
            vetorE[cont] = random(2,3);
          } // obstaculos
          for(cont = 0; cont < qtd; cont++){
            vetorB[cont] += vetorE[cont];
          }
          for(i = 0; i < star; i++){
            vetorV[i] = random(0.3, 2.6);
          } // estrelas
          for(i = 0; i < star; i++){
            vetorY[i] += vetorV[i];
          } // estrelas
        }
        if (nivel == 3){
          for (cont = 0; cont < qtd; cont++){
            vetorE[cont] = random(3,5);
          } // obstaculos
          for(cont = 0; cont < qtd; cont++){
            vetorB[cont] += vetorE[cont];
          }
          for(i = 0; i < star; i++){
            vetorV[i] = random(0.5, 2.8);
          } // estrelas
          for(i = 0; i < star; i++){
            vetorY[i] += vetorV[i];
          } // estrelas
         }
        if(nivel == 4){
          for (cont = 0; cont < qtd; cont++){
            vetorE[cont] = random(5, 6);
          } // obstaculos
          for(cont = 0; cont < qtd; cont++){
            vetorB[cont] += vetorE[cont];
          }
          for(i = 0; i < star; i++){
            vetorV[i] = random(0.6, 2.9);
          } // estrelas
          for(i = 0; i < star; i++){
            vetorY[i] += vetorV[i];
          } // estrelas
          {
            if (keyIsDown(RIGHT_ARROW)){
              x = x + 8
            if (x > 790){
              x = 790
            }
            }
            if (keyIsDown(LEFT_ARROW)){
              x = x - 8
              if (x < 10){
                x = 10
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
              //ellipse (xd, yd, 8, 8);
              image(imgProj, xd, yd, 16, 16);
              yd = yd - 50
              if (yd < 0){
                estadoDisparo = false
              }
            }
          } // projetil
          }
        if (nivel == 5){
          for (cont = 0; cont < qtd; cont++){
            vetorE[cont] = random(6,8);
          } // obstaculos
          for(cont = 0; cont < qtd; cont++){
            vetorB[cont] += vetorE[cont];
          }
          for(i = 0; i < star; i++){
            vetorV[i] = random(0.8, 3);
          } // estrelas
          for(i = 0; i < star; i++){
            vetorY[i] += vetorV[i];
            } // estrelas
          {
            if (keyIsDown(RIGHT_ARROW)){
              x = x + 12
              if (x > 790){
                x = 790
              }
            }
            if (keyIsDown(LEFT_ARROW)){
              x = x - 12
              if (x < 10){
                x = 10
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
              //ellipse (xd, yd, 8, 8);
              image(imgProj, xd, yd, 16, 16);
              yd = yd - 60
              if (yd < 0){
                estadoDisparo = false
              }
            }
          } // projetil
          }
      } // niveis
      }
    //Sistema que acaba o jogo
    if (vidas == 0 || nivel == 6){
      tela = 3
    }
  }
  if (tela == 3){
    //Fim de jogo
    background(0)
    imageMode(CORNER)
    image(imgTela3, 0, 0, 800, 450);
    textSize(50)
    fill(255);
    text("FIM DE JOGO", 250, 250);
    textSize(20);
    text("> > Pressione ESPAÇO para voltar", 250, 420);
    //voltar para a tela 1
    if (keyIsDown(32)){
      tela = 1
      tempo = 0
      vidas = 3
      pontos = 0
      nivel = 1
      for (i = 0; i < star; i++){
        vetorX[i] = random (0, 800);
        vetorY[i] = random (-100, 450);
        vetorD[i] = random (0.1, 2.5);
        vetorV[i] = random (1,3);
      } // estrelas
      for (cont = 0; cont < qtd; cont++){
        vetorA[cont] = random (0, 800);
        vetorB[cont] = random (-1000, -100);
        vetorC[cont] = random (15, 40);
        vetorE[cont] = random(1,2);
      } // obstaculos  
      for (i = 0; i < heart; i++){
        vetorF[i] = random (0, 800);
        vetorG[i] = random (-10000, -1000);
        vetorH[i] = 20;
        vetorI[i] = 2;
      } // bonus de vida
      x = 400
      y = 425
      xd = -10000
      yd = -10000   
    }
  } 
}