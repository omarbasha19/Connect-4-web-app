# Connect 4 Web App 🎮

## Overview 🌐

The **Connect 4 Web App** is a browser-based implementation of the classic Connect 4 game. It allows two players to compete against each other on a dynamic and responsive 4x4 grid board. This web app leverages HTML, CSS, and JavaScript to deliver a seamless and interactive user experience.

## Features ✨

- **Interactive 4x4 Grid Board:** The game board is built using CSS Grid, providing a clean and responsive layout.
- **Real-Time Gameplay:** Players take turns by clicking on the grid cells to place their marks. The game handles turns dynamically using JavaScript.
- **Win Detection:** The app checks for winning conditions in real-time (horizontal, vertical, diagonal) and declares a winner or tie when applicable.
- **Reset Functionality:** A reset button allows players to start a new game without refreshing the page.
- **Dynamic UI Updates:** The game board updates in real-time with visual indicators (blue for 'X' and red for 'O').

## Current Design 🖼
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connect 4 Web App</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
        }
        .image-container {
            margin: 20px;
        }
        img {
            max-width: 100%;
            height: auto;
            border: 1px solid #ccc;
        }
    </style>
</head>
<body>
    <


## How to Play 🕹

1. **Start the Game:** Open the web app in your browser. You will see a 4x4 grid board ready for the first move.
2. **Player Turns:** Player 'X' starts the game. Click on an empty cell to place your mark. The game will automatically switch turns between 'X' and 'O'.
3. **Win or Tie:** The game will check for four consecutive marks horizontally, vertically, or diagonally. If a player achieves this, a winning message will appear. If all cells are filled without a winner, it declares a tie.
4. **Reset Game:** Click the "Reset" button to start a new game.

## Installation and Setup 🚀

To run this project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/connect4-web-app.git
