var canvas;
var music ;
var surf1 , surf2 ,surf3 ,surf4 , ball,ballgroup;
var topEdge , leftEdge , rightEdge;
var edgeThickness = 20;

function preload(){
   //load sounds 
   music = loadSound("music.mp3");
}


function setup()
{
    canvas = createCanvas(800,600);

    
    //canvas.mousePressed(togglePlaying);
    
    

    //create ball sprite and give velocity and shape color to it
    ball = createSprite(random(20,750) , 20 , 30 , 30);
    ball.shapeColor = rgb (250, 250, 255);
    ball.velocityX = 4;
    ball.velocityY = 6;
    ballgroup = new Group;
    ballgroup.add(ball);

    //create 4 different surfaces
    surf1 = createSprite(100 , 570 , 200 , 50);
    surf1.shapeColor = rgb (38, 64, 139);
    surf1.debug = false;

    surf2 = createSprite(300 , 570 , 200 , 50);
    surf2.shapeColor = rgb (222, 184, 65);
    surf2.debug = false;

    surf3 = createSprite(500 , 570 , 200 , 50);
    surf3.shapeColor = rgb (154, 184, 122);
    surf3.debug = false;

    surf4 = createSprite(700 , 570 , 200 , 50);
    surf4.shapeColor = rgb (239, 111, 108);
    surf4.debug = false;

    //creates 3 edges(leftedge , rightedge , topedge)
    this.leftEdge = this.createSprite(-edgeThickness / 2, height / 2, edgeThickness, height);
    leftEdge.debug = false;

    this.rightEdge = this.createSprite(width + (edgeThickness / 2), height / 2, edgeThickness, height);
    rightEdge.debug = false;

    this.topEdge = this.createSprite(width / 2, -edgeThickness / 2, width, edgeThickness);
    topEdge.debug = false;

    //music1.addSound("music" , music );
    

}

// function togglePlaying()
// {
//    music.play();

// }


function draw() {
    background(rgb(135, 151, 175));
    //create edgeSprite
    

    createEdgeSprites();
    
    //add condition to check if box touching surface and make it box
    
    //condition where in if ball touches and bounceoff of surface 1 
    //Ball's shapecolor copies surf1's shape color
    if (isTouching( ball , surf1) && ball.bounceOff(surf1))
    {
       ball.shapeColor = surf1.shapeColor;
       music.play();
    }


    if (isTouching(ball , surf2 ))
    {
       ball.shapeColor = surf2.shapeColor;
       ball.velocityY = 0 ;
       ball.velocityX = 0 ;

       music.stop();
    }

    //condition where in if ball touches and bounceoff of surface 3 
    //Ball's shapecolor copies surf3's shape color
    if (isTouching( ball , surf3) && ball.bounceOff(surf3))
    {
       ball.shapeColor = surf3.shapeColor;
    }

    //condition where in if ball touches and bounceoff of surface 4 
    //Ball's shapecolor copies surf4's shape color
    if (isTouching( ball , surf4) && ball.bounceOff(surf4))
    {
       ball.shapeColor = surf4.shapeColor;
    }

   //  bounceOff(ball , surf1);
   //  bounceOff(ball , surf3);
   //  bounceOff(ball , surf4);
    //makes the ball bounce off edges
    ball.bounceOff(leftEdge);
    ball.bounceOff(rightEdge);
    ball.bounceOff(topEdge);

    

    

    
    drawSprites();
    
}
