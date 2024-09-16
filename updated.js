const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
canvas.width = 400;
canvas.height = 400;

let snake = [{x: 160, y: 160}, {x: 140, y: 160}, {x: 120, y: 160}];
let direction = {x: 0, y: 0};  // Start with no movement
let food = {x: 80, y: 80};
let score = 0;
let gameStarted = false;  // Flag to track game start

function drawSnake() {
    snake.forEach(snakePart => {
        ctx.fillStyle = 'lime';
        ctx.fillRect(snakePart.x, snakePart.y, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function moveSnake() {
    const head = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        score += 10;
        placeFood();
    } else {
        snake.pop();
    }
}

function placeFood() {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
    food.y = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
}

function detectCollision() {
    const head = snake[0];

    // Check if the snake hits the walls
    if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
        return true;
    }

    // Check if the snake hits itself
    for (let i = 4; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            return true;
        }
    }
    return false;
}

function gameLoop() {
    if (gameStarted) {  // Only move the snake if the game has started
        if (detectCollision()) {
            alert(`Game over! Your score: ${score}`);
            document.location.reload();
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        moveSnake();
    }

    drawSnake();
    drawFood();

    setTimeout(gameLoop, 100);
}

gameLoop();

window.addEventListener("keydown", (event) => {
    // Start the game on the first arrow key press
    switch (event.key) {
        case "ArrowUp":
            if (direction.y === 0) direction = { x: 0, y: -gridSize };
            gameStarted = true;  // Start the game
            break;
        case "ArrowDown":
            if (direction.y === 0) direction = { x: 0, y: gridSize };
            gameStarted = true;  // Start the game
            break;
        case "ArrowLeft":
            if (direction.x === 0) direction = { x: -gridSize, y: 0 };
            gameStarted = true;  // Start the game
            break;
        case "ArrowRight":
            if (direction.x === 0) direction = { x: gridSize, y: 0 };
            gameStarted = true;  // Start the game
            break;
    }
});
