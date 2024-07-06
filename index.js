
const InputReader = require('./InputReader');
const UserInput = require('./UserInput');
const Position = require('./Position');
const GameObject = require('./core/GameObject');
const Grid = require('./Grid');


const objectPosition = new Position();
const targetPosition = new Position();
const inputReader = new InputReader();
const userInput = new UserInput();
const cell = new GameObject(objectPosition, '🐇');
const target = new GameObject(targetPosition, '🥕');
const grid = new Grid([target, cell]);
const Game = require('./Game');
const game = new Game(inputReader, userInput, cell, target, grid);
game.start();
inputReader.listenInput(game);







/**
 * O  O  O
 * O  O  O
 * O  O  O
 */

