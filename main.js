img="";
function preload(){
    img = loadImage("dog_cat.jpg");
}
function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
}
function draw(){
    image(img,0,0,500,400);
    fill("red");
    text("Dog",55,75);
    text("Cat",255,80);
    noFill();
    stroke("red")
    rect(45,60,200,300)
    
    rect(240,65,200,310)
}