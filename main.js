
//sprites
var Entities = [0];// i have no clue why but the array didnt work until I added the zero. dont question the JS gods/
var Interactions = [0];//for interactable entities

var PlayerInventory = [];

var PlayerOrders = [];

function loadImages(){ // add images here to load them. 
  steve = loadImage('sprites/steve.webp');
  burger = loadImage('sprites/burger.png');
  font = loadFont('sprites/pixelFont.ttf');
  textFont(font);
}

function setup() {
  loadImages();
  createCanvas(400, 400);
  
  SpawnEntity();//spawn entities as a test, not a real function
  Player = new Entity([50, 50], [[32, 32], [32, 64]], steve, "Up");
  //PLAYER MUST BE NAMED "Player"!
  new Entity([0, 350], [[400, 25], [400, 50]], 0, "EndTable")
  new Interaction([0, 0], [[50, 50], [50, 50]], burger, ["Whopper"]);

}

var closeUp = false;

function draw() {
  
  if(closeUp == false){
    background(100)
    Player_Move(Player.Position[0], Player.Position[1]);
    RenderEntities();
    RenderHud();
  
  }
  else if(closeUp){
    keyTyped();
    resetCanvas();
  // draw starting images
  // TODO: draw starting images here
    drawSources();
    displayObjects();
  // draw target areas
  // TODO: draw target areas here

  // draw dragged image
  // TODO: draw dragged image here
  }
  else{
    
  }
  
}





function SpawnEntity(){//test function, ignore
  table1 = new Entity([200, 200], [[32, 32], [32, 32]], 0)
  table2 = new Entity([300, 350], [[32, 32], [32, 32]], 0)
  table3 = new Entity([50, 100], [[300, 80], [300, 100]], 0)
}
