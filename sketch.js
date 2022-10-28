
var ground, invisibleGround, groundImg;
var player, playerGIF;
var monstersGroup, monster, monsterGIF;
var score;

function preload(){
    groundImg = loadImage("ground.png");
    playerGIF = loadImage("player.gif");
    monsterGIF = loadImage("monster.gif");


}

function setup() {
    createCanvas(600, 200);


    invisibleGround = createSprite(200,170,400,10);
    invisibleGround.visible = false;
    ground = createSprite(200,180,400,20);
    ground.addAnimation("ground", groundImg);
    ground.velocityX = -4;
    player = createSprite(50,125,20,50);
    player.addAnimation("running", playerGIF);
    player.scale = 0.2;
    monstersGroup = createGroup();
    score = 0;
    spawnmonster();
    player.setCollider("rectangle",0,0,160,300);
    player.debug = true
}

function draw() {
    background(180);
    player.velocityY = player.velocityY + 0.8

    if(ground.x < 85){
        ground.x = 200;
    }
    if(keyDown("space")&&ground.isTouching(player)){
        player.velocityY = -12;

    }

    player.collide(invisibleGround);

    if(player.isTouching(monstersGroup)){
        player.velocityX = 0;
        monstersGroup.setVelocityXEach(0);
    }


    drawSprites();
 
}

function spawnmonster(){
    if(frameCount === 60){
        var monster = createSprite(600,130,10,40);
        monster.addAnimation(monsterGIF);
        monster.velocityX = -(6 + score/100);        
        monster.scale = 0.2;
        monstersGroup.add(monster);
    }
}