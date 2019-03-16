//Hello Asher!!  Welcome to the first stage of building a Plants VS Zombies EXE game!

//This file is written using the Javascript language.
//This file can be one level of a bigger game.  You can use it to learn how to code a simple part of a game.
//In javascript, each line is either an instruction, or a comment.
//The lines are comments, because they start with two forwardslashes.
//Two forwardslashes tells the computer to ignore this line, and that it only has information for human readers.
//It's like whispering, so that Alexa doesn't get confused.  It's a useful way to put explanations in your code for humans.

//I got the code from https://www.w3schools.com/graphics/game_intro.asp which teaches you the basics of building a game.
//I suggest that you play around with this file, and figure out how the Javascript Language works.
//Once you've got this down, you can try building a bigger game, with different sorts of levels.

//Javascript is one of many coding languages.  You can make several languages work together to make a game.
//The important things to remember are that this is the asherGameScript.js file, which is a Javascript file.
//It makes the game happen in the asherGameInterface.html file.
//The Javascript file is like the Playstation, which makes the game happen.
//The HTML file is like the TV, where you see the game happen.

//To change the behaviour of the game, change this file.
//To chang how you see the game, change the HTML file.

// ------------------------------  VARIABLES ------------------------------
//Here are the variables! they are the things that will change as the program runs.

//This line just tells the computer that the thing we will make your sunflower exists.
//it doesn't say that we will make it a sunflower
var myGamePiece;

//This bit explains how the game will look on the screen.
var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.frameNo = 0;
        this.interval = setInterval(updateGameArea, 20);
        },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop : function() {
        clearInterval(this.interval);
    }
}

// ------------------------------  FUNCTIONS ------------------------------
//These are the bits that make the game happen!  They're called functions.  They're like little programs, or subroutines.
//They are SUPER powerful & useful, and a bit confusing. There's some info here - https://www.w3schools.com/js/js_functions.asp
//But probably just ask your dad.

//Every function is defined as a function by having the blue word function at the start.
//Then, they have their name written in green, followed by some brackets ().
//Brackets sometimes have extra information to tell the function what to do.
//then, there are some curly brackets {}, which contain the contents of the function.

//This function starts as soon as the HTML file has finished loading.
//The HTML file makes it happen with the following code: <body onload="startGame()">
function startGame() {
    //This line explains what your sunflower will look like.
    //Remember we told it that the myGamePiece variable existed a few lines above?  This is where we explain what it looks like
    //But this only explains some of how the sunflower image will work.  The rest is explained below in "function component"
    myGamePiece = new component(60, 60, "sunflower.png", 10, 120, "image");
    //now that we have loaded the sunflower image & called it myGamePiece, this line builds the myGameArea as defined above.
    myGameArea.start();
}

//This function gets called every time the program needs to draw or move the sunflower image.
function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image") {
            ctx.drawImage(this.image, 
                this.x, 
                this.y,
                this.width, this.height);
        } else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;        
    }
}

//After we have done the loading, nothing happens.
//Unless you click one of the 4 buttons on the HTML file.
//Each of those buttons calls one of the following functions:
function moveup() {
    myGamePiece.speedY = -1; 
}

function movedown() {
    myGamePiece.speedY = 1; 
}

function moveleft() {
    myGamePiece.speedX = -1; 
}

function moveright() {
    myGamePiece.speedX = 1; 
}

//Now, if you look at the buttons on the HTML file, you'll notice they all call two functions.
//When you hold the mouse button down on each of them, they do the 4 functions above this line.
//This makes the sunflower move in the direction the button tells it to.
//When you release the mouse button, it does the function below, and stops the sunflower moving.
function clearmove() {
    myGamePiece.speedX = 0; 
    myGamePiece.speedY = 0; 
}

//now, there are five functions about this one. each of the starts or stops the sunflower moving.
//But that only tells the game where the sunflower SHOULD be.
//This function tells the game to update the screen to make the sunflower actually go there.
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.newPos();
    myGamePiece.update();
}

//Okay cool!  here is a really simply bit of game to play around with! Have fun! tweak & hack the code!
//If you've broken it, just download a fresh copy from https://github.com/jclarke-sw/asherGame and start again!