
const InputReader = require('./InputReader');
const UserInput = require('./UserInput');
const Position = require('./Position');
const GameObject = require('./core/GameObject');
const Grid = require('./Grid');

const size = 5;
const objectPosition = new Position(size);
const targetPosition = new Position(size);
const inputReader = new InputReader();
const userInput = new UserInput();
const cell = new GameObject(objectPosition, '🐇');
const target = new GameObject(targetPosition, '🥕');
const grid = new Grid(size, [target, cell]);
const Game = require('./Game');
const game = new Game(inputReader, userInput, cell, target, grid);
game.start();
inputReader.listenInput(game);







/**
 * O  O  O
 * O  O  O
 * O  O  O
 */

