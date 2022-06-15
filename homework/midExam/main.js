const canvas = document.getElementById('game');
const ctx = canvas.getContext("2d");



let score;
let scoreText;
let highscore;
let highscoreText;
let player;
let gravity;
let obstacles = [];
let gameSpeed;
let keys = [];


document.addEventListener('keydown', function(evt) {
    keys[evt.code] = true;
});
document.addEventListener('keyup', function(evt) {
    keys[evt.code] = false;
});


class Player {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;

        this.dy = 0;
        this.jumpForce = 15;
        this.originalHeight = h;
        this.grounded = false;
        this.jumpTimer = 0;
    }

    Animate() {

        if (keys['Space'] || keys['KeyW']) this.Jump();
        else this.jumpTimer = 0;
        if (keys['ShiftLeft'] || keys['KeyS']) this.h = this.originalHeight / 2;
        else this.h = this.originalHeight;

        this.y += this.dy;

        //gravity
        if (this.y + this.h < canvas.height) {
            this.dy += gravity;
            this.grounded = false;
        } else {
            this.dy = 0;
            this.grounded = true;
            this.y = canvas.height - this.h;
        }

        this.Draw();
    }

    Jump() {
        if (this.grounded && this.jumpTimer == 0) {
            this.jumpTimer = 1;
            this.dy = -this.jumpForce;
        } else if (this.jumpForce > 0 && this.jumpTimer < 15) {
            this.jumpTimer++;
            this.dy = -this.jumpForce - (this.jumpTimer / 50);
        }
    }

    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}

class Obstacle {
    constructor(x, y, w, h, c) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.dx = -gameSpeed;
    }
    Update() {
        this.x += this.dx;
        this.Draw();
    }
    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.fillRect(this.x, this.y, this.w, this.h);
        ctx.closePath();
    }
}

class Text {
    constructor(t, x, y, a, c, s) {
        this.t = t;
        this.x = x;
        this.y = y;
        this.a = a;
        this.c = c;
        this.s = s;
    }
    Draw() {
        ctx.beginPath();
        ctx.fillStyle = this.c;
        ctx.font = this.s + "px Black";
        ctx.textAlign = this.a;
        ctx.fillText(this.t, this.x, this.y);
        ctx.closePath();
    }
}


function SpawnObstacle() {
    let size = Math.round(Math.random() * 50 + 20);
    let type = Math.round(Math.random());
    let obstacle = new Obstacle(canvas.width + size, canvas.height - size, size, size, '#2484E4');
    if (type == 1) obstacle.y -= player.originalHeight - 10;
    obstacles.push(obstacle);
}

function Start() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.font = "20px Black";

    gameSpeed = 3;
    gravity = 1;

    score = 0;
    highscore = 0;
    if (localStorage.getItem('highscore')) {
        highscore = localStorage.getItem('highscore');
    }

    player = new Player(25, 0, 50, 50, '#FF5858');

    scoreText = new Text("Score: " + score, 25, 25, "left", "#212121", "20");
    highscoreText = new Text("Highscore: " + highscore, canvas.width - 25, 25, "right", "#212121", "20");

    requestAnimationFrame(Update);
}

let initialSpawnTimer = 200;
let spawnTimer = initialSpawnTimer;

function Update() {
    requestAnimationFrame(Update);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    spawnTimer--;
    gameSpeed
    if (spawnTimer <= 0) {
        SpawnObstacle();
        console.log(obstacles);

        spawnTimer = initialSpawnTimer - gameSpeed * 8;
    }


    for (let i = 0; i < obstacles.length; i++) {
        let o = obstacles[i];

        if (o.x + o.w < 0) obstacles.splice(i, 1);

        if (player.x < o.x + o.w && player.x + player.w > o.x && player.y < o.y + o.h && player.y + player.h > o.y) {
            obstacles = [];
            score = 0;
            spawnTimer = initialSpawnTimer;
            gameSpeed = 3;
            window.localStorage.setItem('highscore', highscore);
        }
        o.Update();
    }
    player.Animate();

    score++;
    scoreText.t = "分數: " + score;
    scoreText.Draw();

    if (score > highscore) {
        highscore = score;
        highscoreText.t = "最高分數: " + highscore;
    }

    highscoreText.Draw();
}


Start();

//報告https://hackmd.io/@yAywlvh8QrOW-y_aYbMdCQ/HkQ9srPK9