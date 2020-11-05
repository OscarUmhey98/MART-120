var characterX = 100;
var characterY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var shapeX = 30;
var shapeY = 50;
var shapeXSpeed;
var shapeYSpeed;

var mouseShapeX;
var mouseShapeY;
function setup()
{
    createCanvas(500, 600);
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
}
function draw()
{
    //call drawBackground function
    drawBackground ();
    //call createBorders function
    createBorders ();
    //call displayObjective function
    displayObjective ();
    //call createPlayer function
    createPlayer ();
    //call movePlayer function
    movePlayer ();
    //call createEnemy1 function
    createEnemy1 ();
   //call moveEnemy1 function
    moveEnemy1 ();
    //call createEnemy2 function
    createEnemy2 ();
    //call moveEnemy2 function
    moveEnemy2 ();
    //call winGame function
    winGame ();
    //call mouseClicked function
    mouseClicked ();
}



function createPlayer()
{
    fill(300,40,40);
    circle(characterX,characterY,10); 
}

function drawBackground()
{
    background(120,100,300);
    stroke(0);
    fill(0);  
}

function movePlayer()
{
    if(keyIsDown(w))
    {
        characterY -= 10;   
    }
    if(keyIsDown(s))
    {
        characterY += 10;   
    }
    if(keyIsDown(a))
    {
        characterX -= 10;   
    }
    if(keyIsDown(d))
    {
        characterX += 10;
    }
}

function displayObjective()
{
    textSize(16);
    text("GET OUT", width-100,height-100)
}

function createBorders()
{
    rect(0,0,width,5);
    rect(0,0,5,height);
    rect(0, height-5,width, 5);
    rect(width-5,0,5,height-50); 
}

function createEnemy1()
{
    fill(20,200,20);
    circle(shapeX, shapeY, 30);  
}

function moveEnemy1()
{
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shapeX += shapeXSpeed;
   shapeY += shapeYSpeed;
   if(shapeX > width)
   {
       shapeX = 0;
   }
   if(shapeX < 0)
   {
       shapeX = width;
   }
   if(shapeY > height)
   {
       shapeY = 0;
   }
   if(shapeY < 0)
   {
       shapeY = height;
   }
}

function createEnemy2 ()
{
    fill(20,200,200);
    circle(shapeY, shapeX, 40);  
}

function moveEnemy2()
{
    shapeXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    shapeYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
   shapeX += shapeXSpeed;
   shapeY += shapeYSpeed;
   if(shapeX > width)
   {
       shapeX = 0;
   }
   if(shapeX < 0)
   {
       shapeX = width;
   }
   if(shapeY > height)
   {
       shapeY = 0;
   }
   if(shapeY < 0)
   {
       shapeY = height;
   }
}

function winGame()
{
    if(characterX > width && characterY > width-50)
    {
        fill(0);
        stroke(5);
        textSize(48);
        text("ESCAPED", width/2-50, height/2-50);
    }
}

function mouseClicked()
{
    {
    fill(25,50,0)
    circle(mouseShapeX,mouseShapeY,15)
    }
}
