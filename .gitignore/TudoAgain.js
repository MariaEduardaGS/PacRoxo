var img1;
var tela=1;
var tempo = 0; 

function preload() {
	img1 = loadImage("file:///C:/Users/Gabrielly%20Dantas/Desktop/Pac-MAN/logotipo.gif");
}

function setup() {
	createCanvas(1110, 660);
	frameRate(30);
}

var img;
var tela = 1; 
var x, y;
var vida;
var pontos;
var tamBloco = 40; 
var imgParede;
var indiceDaVez=0; 
var CodigoX=[];
var CodigoY=[];
var cenario1;
var cenario2;
var cenario3;
var cenario4;
var cenario5;
var cenario6;
var X;
var Y;
var posColuna;
var posLinha;
var linha = [];

var gabarito=['var','n1,','n2,'];
var indiceG = 0; //indice gabarito

cenario1= [
['',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
['','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
['','#',' ',' ',' ',' ',' ','','','',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#','',' ',' ',' ','soma;',' ','#',' ','n2=',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#',' ',' ','#',' ',' ','','',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#','parseInt( ',' ',' ',' ','var','','',' ',' ','n1=',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#',' ',' ',' ','#',' ',' ','alert(soma);',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#',' ','parseInt(',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#','#',' ',' ','Entre com um ',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
['','#','',' ',' ',' ',' ',' ','n1,',' ','soma=n1+n2; ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
[' ','#',' ','#',' ',' ','#',' ',' ','numero:"));',' ',' ','n2,',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
[' ','#',' ','',' numero:"));',' ',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
[' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
];
cenario2= [
	['',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
	['','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
	['','#',' ',' ',' ',' ',' ','','','',' ','',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#','',' ',' ',' ','massa,',' ','#',' ','altura,',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#',' ',' ','#',' ',' ','','',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#','parseFloat( ',' ',' ',' ','var','','',' ',' ','massa=',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#',' ',' ',' ','#',' ',' ','alert(imc);',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#',' ','parseFloat(',' ',' ','(prompt("','Entre com uma',' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#','#',' ',' ','Entre com uma',' ',' ',' ',' ',' ','imc;',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	['','#','',' ',' ',' ',' ',' ','n1,',' ','imc=massa/',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	[' ','#',' ','#',' ',' ','#',' ',' ','altura:"));',' ',' ','n2,',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	[' ','#',' ','',' massa:"));','Math.pow(altura,2);',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
	[' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
	];
	
cenario3= [
		['',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
		['','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
		['','#',' ',' ',' ',' ',' ','','','',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#','',' ',' ',' ','n;',' ','#',' ','alert("Nao divisivel")}',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#',' ',' ','#',' ',' ','','',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#','parseInt( ',' ','n%5==0){',' ','var','','',' ',' ','n=',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#',' ',' ',' ','#',' ',' ','alert("Divisivel");','}',' ','(prompt("',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#',' ','||',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#','#',' ',' ','Entre com um ',' ','n%4==0',' ',' ','||',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		['','#','',' ',' ',' ',' ',' ','if(n%3==0,',' ','',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		[' ','#',' ','#','else{',' ','#',' ',' ','',' ',' ','',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		[' ','#',' ','',' numero:"));',' ',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
		[' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
		];
	
cenario4= [
			['',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
			['','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
			['','#',' ',' ',' ',' ',' ','','','',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#','',' ',' ',' ','num,',' ','#',' ','result;',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#',' ',' ','#',' ',' ','','num=',' ','parseInt(',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#','parseInt(',' ',' ',' ','var','','',' ',' ','result=" ";',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#',' ',' ',' ','#',' ',' ','alert(result);',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#',' ','',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#','#',' ',' ','Entre com um ',' ','result=result+num+" ";',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			['','#','',' ',' ',' ',' ',' ','n1,',' ','num=',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			[' ','#',' ','#',' ',' ','#',' ',' ','numero:"));',' ',' ','n2,',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			[' ','#',' ','',' numero:"));',' Entre com um',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
			[' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
			];
		
cenario5= [
				['',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
				['','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
				['','#',' ',' ',' ',' ',' ','','','',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#','',' ',' ',' ','result;',' ','#',' ','result=" ";',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#',' ',' ','#',' ',' ','','',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#','result=',' ',' ',' ','var','','',' ',' ','',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#',' ',' ',' ','#',' ',' ','alert(result);',' ',' ','',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#',' ','i--){',' ',' ','for(i=10;',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#','#',' ',' ','i>=1;',' ',' ',' ',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				['','#','',' ',' ',' ',' ',' ','',' ','result+i+" ";}',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				[' ','#',' ','#',' ',' ','#',' ',' ','',' ',' ',',',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				[' ','#',' ','','',' ',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
				[' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
				];
			
cenario6= [
					['',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
					['','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#'],
					['','#',' ',' ',' ',' ',' ','','','',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#','',' ','nPar=" ";',' ','N;',' ','#',' ','Par=[]','',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#',' ',' ','#',' ',' ','Par[i]=','',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#','parseInt( ','if(i%2==0){',' ',' ','var','','" ";',' ',' ','N=',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#',' ',' ',' ','#',' ',' ','alert(nPar);}',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#',' ','parseInt(',' ',' ','(prompt("',' ',' ','#',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#','#',' ',' ','Entre com um ',' ',' ','Entre com um',' ',' ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					['','#','',' ','nPar=Par[i]+',' ',' ',' ','for(i=0;',' ','i<N;; ',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					[' ','#',' ','#',' ',' ','#',' ',' ','numero:"));',' ',' ','i+=1){,',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					[' ','#',' ','',' numero:"));',' ',' ',' ',' ','#','#',' ',' ',' ','#',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','#'],
					[' ','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#','#']
					];
function setup() {
    frameRate(30); 
    createCanvas(1110,570);
    x= 100; 
    y = 100;
    linha[0] = "var";
    linha[1] = "n1,";
    linha[2] = "n2,";
    linha[3] = "soma";
    for(i=0;i<4;i++){//Sorteio do X da linha de código
    CodigoX[i]=Math.random(0,600);
    CodigoY[i]=Math.random(0,600);
    }
}


function pacMan(x, y) { 
stroke(250,250,5); 
strokeWeight(0); 
fill(250,194,0);
arc(x, y, 45, 45, 0, PI+HALF_PI+QUARTER_PI, PIE);
} 

function FundoTela(){
textStyle(BOLD);
vida=0;
pontos=0;
fill(50,50,50);
noStroke(); 
textSize(15);

fill(51,51,153); //Retângulo (Vida)
//rect(480,10,75,17.5); //Retângulo (Vida)
fill(255,255,255); // (Vida)
textSize(20); //(Vida)
text(" VIDAS:"+vida,480,30); //(Vida)
fill(51,51,153); //Retângulo (Pontos)
//rect(100,6,95,17.5); // Retângulo (Pontos)
fill(255,255,255); //Retângulo (Pontos)
textSize(20); //Retângulo (Pontos)
text(" PONTOS:"+pontos,100,30);
} 

function Niveis1(){
    
    textSize(18);
    text("OBJETIVO:", 610, 110 ); 
    text("Somar dois numeros digitados pelo usuario.", 630,140); 
    
}
function Niveis2() {
       
    textSize(18);
    text("OBJETIVO:", 920, 80 ); 
    text("Calcular o IMC a partir do usuario.", 800,100); 
}
function Niveis3() {
   
    textSize(17.3);
    text("OBJETIVO:", 920, 80 ); 
    text("Verificar se um numero eh divisivel ", 800,100); 
    text("por 3, 4 ou 5. ", 800,120);
}
   
function Niveis4() {

    textSize(17.3);
    text("OBJETIVO:", 920, 80 ); 
    text("Contagem até 22.", 800,100); 
}
   
function Niveis5() {

    textSize(17.3);
    text("OBJETIVO:", 920, 80 ); 
    text("Imprimir os 10 primeiros numeros em ", 800, 100);
    text("ordem decrescente.", 820,120); 
}
   
function Niveis6() {
    
    textSize(17.3);
    text("OBJETIVO:", 920, 80 ); 
    text("Imprimir apenas os elementos com indice par", 800,100);
}
   
    function Respostas1(){
    text("var n1, n2, soma;", 630,160);
    text("n1=parseInt(prompt('Entre com um numero:'));", 630,180 );
    text("n2=parseInt(prompt('Entre com um numero:'));",630,200);             //QUESTÃO 1 
    text("soma=n1+n2;",630,220 ); 
	text("alert(soma);",630,240);
}
function Respostas2() {
	text("var massa, altura, imc;", 650, 150);
    text("massa=parseFloat(prompt('Entre com uma massa: '));", 650, 170);
    text("altura=parseFloat(prompt('Entre com uma altura: '));", 650, 190);            // QUESTÃO 2
	text("imc=massa/Math.pow(altura,2);", 650, 210);
	text("imc", 650, 230);
}
   
function Respostas3() {
	text("var n;", 700, 170);
    text("n=parseInt(prompt('Entre com um número: '));" , 700, 190);
    text("if(n%3==0 || n%4==0 || n%5==0){", 700, 210);                //QUESTÃO 3
    text("alert('Divisivel');", 700, 230);
    text("}", 700, 250);
    text("else{", 700, 270);
    text("alert('Nao divisivel');", 700, 290);
    text("}", 700, 310);
}
   
function Respostas4() {
	text("var num, result;", 700, 150);
    text("result=' '", 700, 170);
    text("num=parseInt(prompt(''));", 700, 190);
    text("while(num !=22){", 700, 210);                             //QUESTÃO 4 
    text("result=result+num+' ';", 700, 230);
    text("num=parseInt(prompt(' '));", 700, 250);
    text("}", 700, 270);
    text("alert(result);", 700, 310);
}
    
function Respostas5() {
	text(" var result;", 700, 150);
    text("result=' ';", 700, 170);
    text("for(i=10;i>=1;i--){", 700, 190);                               //QUESTÃO 5 
    text("result=result+i+' ';", 700, 210);
    text("}", 700, 230);
    text("alert(result);", 700, 250);
}
 
function Respostas6() {
	text("var N, Par=[], nPar=' ';", 700, 150);
    text("N=parseInt(prompt(' ');", 700, 170);
    text("for(i=0; i<N; i+=1){", 700, 190);
    text("Par[i]=parseInt(prompt(' '));", 700, 210);                       //QUESTÃO DESAFIO
    text("if(i%2===0){", 700, 230);
    text("nPar=Par[i]+' ';", 700, 250);
    text("alert(nPar);", 700, 270);
    text("}", 700, 290);
}    
    
    


function DesenharCenario1()
{
    for ( i = 0; i < cenario1.length; i++ )
    { 
        for ( j = 0; j < cenario1[0].length; j++ )
        {
            var caractere = cenario1[i][j]      
            if (  caractere == '#' )
            {
  
                fill(51,51,153);
                stroke(150,150,150);
                rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
            }
            else
            {
                fill(255,255,255); //Texto(Nivel)
                textSize(15);
                text(caractere, j*tamBloco, i*tamBloco); //Inicialização Nível 1
            }
        }
	}
}
function DesenharCenario2(){
	for ( i = 0; i < cenario2.length; i++ )
    { 
        for ( j = 0; j < cenario2[0].length; j++ )
        {
            var caractere = cenario2[i][j]      
            if (  caractere == '#' )
            {
  
                fill(51,51,153);
                stroke(150,150,150);
                rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
            }
            else
            {
                fill(255,255,255); //Texto(Nivel)
                textSize(15);
                text(caractere, j*tamBloco, i*tamBloco); //Inicialização Nível 1
            }
        }
	}
}
function DesenharCenario3() {
	for ( i = 0; i < cenario3.length; i++ )
    { 
        for ( j = 0; j < cenario3[0].length; j++ )
        {
            var caractere = cenario3[i][j]      
            if (  caractere == '#' )
            {
  
                fill(51,51,153);
                stroke(150,150,150);
                rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
            }
            else
            {
                fill(255,255,255); //Texto(Nivel)
                textSize(15);
                text(caractere, j*tamBloco, i*tamBloco); //Inicialização Nível 1
            }
        }
	}
}	
function DesenharCenario4(){
	for ( i = 0; i < cenario4.length; i++ )
    { 
        for ( j = 0; j < cenario4[0].length; j++ )
        {
            var caractere = cenario4[i][j]      
            if (  caractere == '#' )
            {
  
                fill(51,51,153);
                stroke(150,150,150);
                rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
            }
            else
            {
                fill(255,255,255); //Texto(Nivel)
                textSize(15);
                text(caractere, j*tamBloco, i*tamBloco); //Inicialização Nível 1
            }
        }
	}
}

function DesenharCenario5(){
	for ( i = 0; i < cenario5.length; i++ )
    { 
        for ( j = 0; j < cenario5[0].length; j++ )
        {
            var caractere = cenario5[i][j]      
            if (  caractere == '#' )
            {
  
                fill(51,51,153);
                stroke(150,150,150);
                rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
            }
            else
            {
                fill(255,255,255); //Texto(Nivel)
                textSize(15);
                text(caractere, j*tamBloco, i*tamBloco); //Inicialização Nível 1
            }
        }
	}
}

function DesenharCenario6() {
	for ( i = 0; i < cenario6.length; i++ )
    { 
        for ( j = 0; j < cenario6[0].length; j++ )
        {
            var caractere = cenario6[i][j]      
            if (  caractere == '#' )
            {
  
                fill(51,51,153);
                stroke(150,150,150);
                rect(j*tamBloco,i*tamBloco,tamBloco,tamBloco); 
            }
            else
            {
                fill(255,255,255); //Texto(Nivel)
                textSize(15);
                text(caractere, j*tamBloco, i*tamBloco); //Inicialização Nível 1
            }
        }
	}
}


	
function colisao(px, py) 
{
    posColuna = Math.floor( px / tamBloco ); 
    posLinha = Math.floor( py / tamBloco );
    if ( cenario[posLinha][posColuna] == '#' )
    {
        return true; 
    }
    else
    {
        return false; 
    }
}

function draw() {
		if (tela==1) {
			image(img1, 20, 20);
			textSize(70);
			textStyle(BOLD);
			fill(255, 255, 255);
			text("Welcome To", 350, 150);
			textSize(35);
			textStyle(BOLD);
			fill(250, 550);
			text("Press 'START' to begin", 350, 550);
			
			if(keyIsDown(ENTER)){
			tela=2;
			
		}
	}
	if (tela==2) {
		tempo++;
		clear();
        background(0,0,0);
        textSize(32); 
        fill(135,206,235);
		text("Nivel 1", 750, 35);
		text("Tempo: "+(Math.floor(tempo/6)), 750, 550);
        FundoTela(); //Chamar função FundoTela
        Niveis1(); //Chamar função Niveis
        Respostas1();// Chamar funções Respostas
        DesenharCenario1();
        pacMan();
		MoverPacMan();
		if(tempo==12){
			tela=3;
		}
	}

	if (tela==3) {
		tempo++;
		clear();
        background(0,0,0);
        textSize(32); 
        fill(135,206,235);
		text("Nivel 2", 750, 35);
		text("Tempo: "+(Math.floor(tempo/3)), 750, 550);
        FundoTela(); //Chamar função FundoTela
        Niveis2(); //Chamar função Niveis
        Respostas2();// Chamar funções Respostas
        DesenharCenario2();
        pacMan();
		MoverPacMan();
		if(tempo==24){
			tela=4;
		}
	}
	if (tela==4) {
		tempo++;
		clear();
        background(0,0,0);
        textSize(32); 
        fill(135,206,235);
		text("Nivel 3", 750, 35);
		text("Tempo: "+(Math.floor(tempo/3)), 750, 550);
        FundoTela(); //Chamar função FundoTela
        Niveis3(); //Chamar função Niveis
        Respostas3();// Chamar funções Respostas
        DesenharCenario3();
        pacMan();
		MoverPacMan();
		if(tempo==48){
			tela=5;
		}
	}
	if (tela==5) {
		tempo++;
		clear();
        background(0,0,0);
        textSize(32); 
        fill(135,206,235);
		text("Nivel 4", 750, 35);
		text("Tempo: "+(Math.floor(tempo/3)), 750, 550);
        FundoTela(); //Chamar função FundoTela
        Niveis4(); //Chamar função Niveis
        Respostas4();// Chamar funções Respostas
        DesenharCenario4();
        pacMan();
		MoverPacMan();
		if(tempo==60){
			tela=6;
		}
	}
	if (tela==6) {
		tempo++;
		clear();
        background(0,0,0);
        textSize(32); 
        fill(135,206,235);
		text("Nivel 5", 750, 35);
		text("Tempo: "+(Math.floor(tempo/3)), 750, 550);
        FundoTela(); //Chamar função FundoTela
        Niveis5(); //Chamar função Niveis
        Respostas5();// Chamar funções Respostas
        DesenharCenario5();
        pacMan();
		MoverPacMan();
		if(tempo==72){
			tela=7;
		}
	}
	if (tela==7) {
		tempo++;
		clear();
        background(0,0,0);
        textSize(32); 
        fill(135,206,235);
		text("Nivel 6", 750, 35);
		text("Tempo: "+(Math.floor(tempo/3)), 750, 550);
        FundoTela(); //Chamar função FundoTela
        Niveis6(); //Chamar função Niveis
        Respostas6();// Chamar funções Respostas
        DesenharCenario6();
        pacMan();
		MoverPacMan();
		if(tempo==84){
			tela=8;
		}
	}
	function preload() {
		img = loadImage("file:///C:/Users/Gabrielly%20Dantas/Desktop/Pac-MAN/it.gif");
	}
	
	if (tela==8) {
		clear();
		image(img, 10, 10);
        textSize(32); 
        fill(135,206,235);
		text("GAME", 750, 350);
		text("OVER"+(Math.floor(tempo/3)), 750, 550);
    	}
		
}

function MoverPacMan(){
	if (keyIsDown(LEFT_ARROW)) {
	if ( ! colisao( x - 12 - tamBloco/2, y ) ) {
	x = x - 12; 
	}
	}
	if ( keyIsDown(RIGHT_ARROW)) { 
	if ( ! colisao( x + 12, y ) ) {
	x = x + 12; 
	} 
	}
	if (keyIsDown(UP_ARROW)) {
	if ( ! colisao( x , y - 12 - tamBloco/2) ) {
	y = y - 12; 
	}
	}
	if ( keyIsDown(DOWN_ARROW)) { 
	if ( ! colisao( x , y+12 -tamBloco/2 ) ) {
	y = y + 12; 
	} 
	}
	
	pacMan(x,y); 
	//for(i=0;i<4;i++){
	  //  text(linha[i], CodigoX[i], CodigoY[i]); //Pegar código
	//     if(dist(x,y,CodigoX[i], CodigoY[i] < 20)){
	//         if(linha[indiceDaVez]==linha[i])
	//         {
	//             pontos++;
	//         indiceDaVez++;
	//         //if(indiceDaVez==4){
	
	//         //}
	//         }
	//     }
	// }
	//     
	}
