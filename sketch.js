var car, wall;
function setup() {
  createCanvas(800,400);

  wall= createSprite(600, 200, 50, 150);
  car= createSprite(200, 200, 80, 30);

  wall.shapeColor="blue";
  car.shapeColor="yellow";
}

function draw() {
  background("green");  

  car.x=mouseX;
  car.y=mouseY;
  if (isTouching(car,wall)) {
    car.shapeColor="red";
    wall.shapeColor="red";
  } else {
    car.shapeColor="yellow";
    wall.shapeColor ="blue";
  }

  drawSprites();
}

