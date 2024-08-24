// const canvas = document.getElementById('gameCanvas');
// const ctx = canvas.getContext('2d');
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const player = {
//     x: canvas.width / 2,
//     y: canvas.height - 50,
//     width: 20,
//     height: 20,
//     dx: 0,
//     speed: 3
// };

// const obstacles = [];
// const obstacleSpeed = 1;
// let score = 0;
// let lives = 3;
// let gameOver = false; // Add a flag to check if the game is over

// // Load the obstacle image
// const obstacleImage = new Image();
// obstacleImage.src = '../images/asteroid.png'; // Path to your obstacle icon

// function drawLives() {
//     ctx.fillStyle = 'white';
//     ctx.font = '20px Arial';
//     ctx.fillText('Lives: ' + lives, 10, 20); // Display lives in the top-left corner
// }

// function createObstacle() {
//     // Define a size range for the square obstacles
//     const size = Math.random() * 20 + 20; // Size between 20 and 40
//     const x = Math.random() * (canvas.width - size);
//     const y = -size; // Start above the canvas
//     obstacles.push({ x, y, width: size, height: size }); // Use the same size for width and height
// }


// function drawPlayer() {
//     ctx.fillStyle = 'green';
    
//     // Draw head (circle)
//     ctx.beginPath();
//     ctx.arc(player.x + player.width / 2, player.y + player.height / 4, player.width / 4, 0, Math.PI * 2);
//     ctx.fill();

//     // Draw body (rectangle)
//     ctx.fillRect(player.x + player.width / 3, player.y + player.height / 4, player.width / 5, player.height / 3);

//     // Draw arms
//     ctx.beginPath();
//     ctx.moveTo(player.x, player.y + player.height / 4);
//     ctx.lineTo(player.x + player.width / 3, player.y + player.height / 2);
//     ctx.moveTo(player.x + player.width, player.y + player.height / 4);
//     ctx.lineTo(player.x + player.width - player.width / 3, player.y + player.height / 2);
//     ctx.stroke();

//     // Draw legs
//     ctx.beginPath();
//     ctx.moveTo(player.x + player.width / 3, player.y + player.height);
//     ctx.lineTo(player.x + player.width / 3, player.y + player.height / 2);
//     ctx.moveTo(player.x + player.width - player.width / 3, player.y + player.height);
//     ctx.lineTo(player.x + player.width - player.width / 3, player.y + player.height / 2);
//     ctx.stroke();
// }

// const playerImage = new Image();
// playerImage.src = '../images/boy-avatar.png'; // Replace with the path to your image

// function drawPlayer() {
//     ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
// }

// playerImage.onload = function() {
//     update(); // Start the game loop only after the image is loaded
// };

// function drawObstacles() {
//     obstacles.forEach(obstacle => {
//         ctx.drawImage(obstacleImage, obstacle.x, obstacle.y, obstacle.width, obstacle.height);
//         obstacle.y += obstacleSpeed;
//     });
// }

// function movePlayer() {
//     player.x += player.dx;

//     if (player.x < 0) player.x = 0;
//     if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
// }

// function checkCollision() {
//     obstacles.forEach((obstacle, index) => {
//         if (player.x < obstacle.x + obstacle.width &&
//             player.x + player.width > obstacle.x &&
//             player.y < obstacle.y + obstacle.height &&
//             player.y + player.height > obstacle.y) {
            
//             lives--; // Reduce lives
            
//             if (lives > 0) {
//                 alert('Collision detected! Lives remaining: ' + lives + '. The game will restart.');
//                 resetGame(); // Reset the game state but keep the same page
//             } else {
//                 showGameOverModal(); // Show modal when lives reach 0
//             }
//         }
//         if (obstacle.y > canvas.height) {
//             obstacles.splice(index, 1);
//             score++;
//         }
//     });
// }

// function showGameOverModal() {
//     const modal = document.getElementById('gameOverModal');
//     const message = document.getElementById('gameOverMessage');
//     message.textContent = 'Game Over! Final Score: ' + score + '. Click the "Reload Game" button to restart.';
//     modal.style.display = 'block'; // Show the modal
//     gameOver = true; // Set gameOver to true
//     // Remove event listeners to prevent further interaction
//     document.removeEventListener('keydown', keyDown);
//     document.removeEventListener('keyup', keyUp);
// }

// // Add click event to the reload button
// document.getElementById('reloadButton').addEventListener('click', function() {
//     // Reset lives and score when reloading the page
//     lives = 3;
//     score = 0;
//     gameOver = false; // Reset gameOver flag
//     location.reload(); // Reload the page to restart the game
// });

// function update() {
//     if (gameOver) return; // Stop updating if gameOver is true
    
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     movePlayer();
//     drawPlayer();
//     drawObstacles();
//     checkCollision();
//     drawLives(); // Draw lives on the canvas

//     if (Math.random() < 0.05) createObstacle();

//     requestAnimationFrame(update);
// }

// function resetGame() {
//     obstacles.length = 0; // Clear all obstacles
//     player.x = canvas.width / 2; // Reset player position
//     player.y = canvas.height - 50;
// }

// function keyDown(e) {
//     if (e.key === 'ArrowLeft' || e.key === 'a') {
//         player.dx = -player.speed; // Move left
//     }
//     if (e.key === 'ArrowRight' || e.key === 'd') {
//         player.dx = player.speed; // Move right
//     }
// }

// function keyUp(e) {
//     if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'a' || e.key === 'd') {
//         player.dx = 0; // Stop moving when the key is released
//     }
// }

// function resizeCanvas() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     player.x = canvas.width / 2; // Recenter player
//     player.y = canvas.height - 50; // Adjust player position
// }
// window.addEventListener('resize', resizeCanvas);
// resizeCanvas(); // Initial call to set size


// const controls = {
//     left: false,
//     right: false
// };

// document.addEventListener('touchstart', function(e) {
//     if (e.touches[0].clientX < canvas.width / 2) {
//         controls.left = true;
//     } else {
//         controls.right = true;
//     }
// });

// document.addEventListener('touchend', function(e) {
//     controls.left = false;
//     controls.right = false;
// });

// function movePlayer() {
//     if (controls.left) {
//         player.dx = -player.speed;
//     } else if (controls.right) {
//         player.dx = player.speed;
//     } else {
//         player.dx = 0;
//     }

//     player.x += player.dx;

//     if (player.x < 0) player.x = 0;
//     if (player.x + player.width > canvas.width) player.x = canvas.width - player.width;
// }


// document.addEventListener('keydown', keyDown);
// document.addEventListener('keyup', keyUp);



// update();
/////////////////////////////////////////////////////////////////////////

const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = {
    x: canvas.width / 2,
    y: canvas.height - 50,
    width: 20,
    height: 20,
    dx: 0,
    speed: 5
};

const obstacles = [];
const obstacleSpeed = 1;
let score = 0;
let lives = 3;
let gameOver = false; // Flag to check if the game is over

// Load the obstacle image
const obstacleImage = new Image();
obstacleImage.src = '../images/asteroid.png'; // Path to your obstacle icon

function drawLives() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Lives: ' + lives, 10, 20); // Display lives in the top-left corner
}

function createObstacle() {
    const size = Math.random() * 20 + 20; // Keep obstacles square
    const x = Math.random() * (canvas.width - size);
    const y = -size;
    obstacles.push({ x, y, width: size, height: size });
}

function drawPlayer() {
    ctx.drawImage(playerImage, player.x, player.y, player.width, player.height);
}

const playerImage = new Image();
playerImage.src = '../images/boy-avatar.png'; // Replace with the path to your image

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
            
            lives--; // Reduce lives
            
            if (lives > 0) {
                alert('Collision detected! Lives remaining: ' + lives + '. The game will restart.');
                resetGame(); // Reset the game state but keep the same page
            } else {
                showGameOverModal(); // Show modal when lives reach 0
            }
        }
        if (obstacle.y > canvas.height) {
            obstacles.splice(index, 1);
            score++;
        }
    });
}

function showGameOverModal() {
    const modal = document.getElementById('gameOverModal');
    const message = document.getElementById('gameOverMessage');
    message.textContent = 'Game Over! Final Score: ' + score + '. Click the "Reload Game" button to restart.';
    modal.style.display = 'block'; // Show the modal
    gameOver = true; // Set gameOver to true
    // Remove event listeners to prevent further interaction
    document.removeEventListener('keydown', keyDown);
    document.removeEventListener('keyup', keyUp);
    canvas.removeEventListener('touchstart', handleTouchStart);
    canvas.removeEventListener('touchmove', handleTouchMove);
    canvas.removeEventListener('touchend', handleTouchEnd);
}

// Add click event to the reload button
document.getElementById('reloadButton').addEventListener('click', function() {
    // Reset lives and score when reloading the page
    lives = 3;
    score = 0;
    gameOver = false; // Reset gameOver flag
    location.reload(); // Reload the page to restart the game
});

function update() {
    if (gameOver) return; // Stop updating if gameOver is true
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    movePlayer();
    drawPlayer();
    drawObstacles();
    checkCollision();
    drawLives(); // Draw lives on the canvas

    if (Math.random() < 0.05) createObstacle();

    requestAnimationFrame(update);
}

function resetGame() {
    obstacles.length = 0; // Clear all obstacles
    player.x = canvas.width / 2; // Reset player position
    player.y = canvas.height - 50;
}

function keyDown(e) {
    if (e.key === 'ArrowLeft' || e.key === 'a') {
        player.dx = -player.speed; // Move left
    }
    if (e.key === 'ArrowRight' || e.key === 'd') {
        player.dx = player.speed; // Move right
    }
}

function keyUp(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === 'a' || e.key === 'd') {
        player.dx = 0; // Stop moving when the key is released
    }
}

// Add event listeners for keypress events
document.addEventListener('keydown', keyDown);
document.addEventListener('keyup', keyUp);

// Touch event handlers
let touchStartX = null;

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
}

function handleTouchMove(e) {
    if (!touchStartX) return;
    
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX;
    
    player.dx = deltaX * 0.4; // Scale down the movement to make it smoother
    
    // Update touchStartX to the current position to continue tracking movement
    touchStartX = currentX;
}

function handleTouchEnd(e) {
    player.dx = 0; // Stop moving when the touch ends
    touchStartX = null;
}

// Add event listeners for touch events
canvas.addEventListener('touchstart', handleTouchStart);
canvas.addEventListener('touchmove', handleTouchMove);
canvas.addEventListener('touchend', handleTouchEnd);

update();
