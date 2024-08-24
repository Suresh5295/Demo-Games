const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 50,
    height: 50,
    dx: 0,
    speed: 5
};

const obstacles = [];
const obstacleSpeed = 3;
let score = 0;

// Load the obstacle image
const obstacleImage = new Image();
obstacleImage.src = '../images/apple.png'; // Path to your obstacle icon

function createObstacle() {
    const width = Math.random() * 100 + 20;
    const height = 20;
    const x = Math.random() * (canvas.width - width);
    const y = -height;
    obstacles.push({ x, y, width, height });
}

function drawPlayer() {
    ctx.fillStyle = 'green';
    
    // Draw head (circle)
    ctx.beginPath();
    ctx.arc(player.x + player.width / 2, player.y + player.height / 4, player.width / 4, 0, Math.PI * 2);
    ctx.fill();

    // Draw body (rectangle)
    ctx.fillRect(player.x + player.width / 3, player.y + player.height / 4, player.width / 5, player.height / 3);

    // Draw arms
    ctx.beginPath();
    ctx.moveTo(player.x, player.y + player.height / 4);
    ctx.lineTo(player.x + player.width / 3, player.y + player.height / 2);
    ctx.moveTo(player.x + player.width, player.y + player.height / 4);
    ctx.lineTo(player.x + player.width - player.width / 3, player.y + player.height / 2);
    ctx.stroke();

    // Draw legs
    ctx.beginPath();
    ctx.moveTo(player.x + player.width / 3, player.y + player.height);
    ctx.lineTo(player.x + player.width / 3, player.y + player.height / 2);
    ctx.moveTo(player.x + player.width - player.width / 3, player.y + player.height);
    ctx.lineTo(player.x + player.width - player.width / 3, player.y + player.height / 2);
    ctx.stroke();
}

const playerImage = new Image();
playerImage.src = '../images/boy-avatar.png'; // Replace with the path to your image

function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

playerImage.onload = function() {
    update(); // Start the game loop only after the image is loaded
};

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.drawImage(obstacleImage, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        obstacle.y += obstacleSpeed;
    });
}

function movePlayer() {
    player.x += player.dx;

    if (player.x < 0) player.x = 0;
    if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
}

function checkCollision() {
    obstacles.forEach((obstacle, index) => {
        if (player.x < obstacle.x + obstacle.width &&
            player.x + player.width > obstacle.x &&
            player.y < obstacle.y + obstacle.height &&
            player.y + player.height > obstacle.y) {
            alert('Game Over! Score: ' + score);
            document.location.reload();
        }
        if (obstacle.y > canvas.height) {
            obstacles.splice(index, 1);
            score++;
        }
    });
}

function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePlayer();
    drawPlayer();
    drawObstacles();
    checkCollision();

    if (Math.random() < 0.05) createObstacle();

    requestAnimationFrame(update);
}

function keyDown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a') player.dx = -player.speed;
    if (e.key === 'ArrowRight' || e.key === 'd') player.dx = player.speed;
}

function keyUp(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'a' || e.key === 'd') player.dx = 0;
}

document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

update();
