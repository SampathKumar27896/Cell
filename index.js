
const InputReader = require('./InputReader');
const UserInput = require('./UserInput');
const Position = require('./Position');
const MotionObject = require('./core/MotionObject');
const IdleObject = require('./core/IdleObject');
const Grid = require('./Grid');

const size = 10;
const objectPosition = new Position(size);
const targetPosition = new Position(size);
const targetPosition2 = new Position(size);
const inputReader = new InputReader();
const userInput = new UserInput();
const cell = new MotionObject(objectPosition, '🐇');
const target = new IdleObject(targetPosition, '🥕');
const target2 = new IdleObject(targetPosition2, '🍒');
const targets = [target, target2];
const grid = new Grid(size,[]);
const Game = require('./Game');
const game = new Game(inputReader, userInput, cell, targets, grid);
game.start();
inputReader.listenInput(game);







/**
 * O  O  O
 * O  O  O
 * O  O  O
 */

