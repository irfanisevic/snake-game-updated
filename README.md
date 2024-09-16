# Snake Game

A simple snake game implemented in JavaScript using HTML5 Canvas.

## Table of Contents

- [Overview](#overview)
- [Gameplay](#gameplay)
- [Installation](#installation)
- [How to Play](#how-to-play)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Overview

This is a classic Snake game where the player controls a snake on a grid to collect food. The snake grows longer every time it eats, and the player scores points. The game ends when the snake collides with itself or the walls.

## Gameplay

- **Objective**: Control the snake to collect food and grow longer. Avoid colliding with the walls or yourself.
- **Score**: You gain 10 points for every food item the snake consumes.

## Installation

To play the game locally on your computer:

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/snake-game.git
   ```
2. Open the `index.html` file in your web browser.

That's it! The game should run in any modern web browser.

## How to Play

1. **Start the Game**:
   The game starts when you press any arrow key.
2. **Controls**:
   - Use the arrow keys to move the snake:
     - `ArrowUp` to move up
     - `ArrowDown` to move down
     - `ArrowLeft` to move left
     - `ArrowRight` to move right
3. **Goal**:
   - Eat the red food to grow the snake and earn points.
   - Avoid running into the walls or the snake's body.

## Features

- Dynamic grid-based movement using arrow keys.
- Randomized food placement after the snake eats.
- Collision detection for both walls and snake body.
- Simple scoring system.

## Code Explanation

- **Snake Movement**: The snake is represented as an array of grid positions. Pressing an arrow key changes the direction, and the snake moves in that direction on the grid.
- **Food Placement**: After the snake eats food, the food is randomly placed on the grid again.
- **Collision Detection**: The game checks if the snake collides with the walls or its own body, ending the game if a collision occurs.

## Contributing

Feel free to fork this project, submit issues, or send pull requests!

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
