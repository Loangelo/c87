// Create canvas variable
var canvas = newfabric.Canvas('mycanvas');
blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
   // para enviar imagens
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '?') // adicione os códigos adequados às teclas
   {
       // enviar ranger escarlate
   }
   if(keyPressed == '86')
   {
       blockX = 200;
       // enviar ranger verde
   }
   
   if(keyPressed == '65')
   {
       blockX =350;
       // enviar ranger amarelo
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       // enviar ranger rosa
   }
   if(keyPressed == '73')
   {
       blockX = 700;
   // enviar ranger índigo
   }
   
}