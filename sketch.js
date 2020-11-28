const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var players,player1,player2,player3,player4,player;
var player1img,player2img,player3img,player4img,playerimg;
var database,canvas,backgroundimg;
var gameState;
var intro_display=false;
players=[player1,player2,player3,player4]

function preload() {

seaRoseLines = loadStrings('intro.txt');
     
     
/*player1img=loadImage("images/player1.png")
player2img=loadImage("images/player2.png")
player3img=loadImage("images/player3.png")
player4img=loadImage("images/player4.png")*/
}

function setup() {
    canvas=createCanvas(displayWidth,displayHeight)
database=firebase.database()
form=new Form()
form.getState()

}

function draw() {
background("white")
if(gameState==0){
    form.intro()
}
drawSprites()
}