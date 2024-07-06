
const InputReader = require('./InputReader');
const UserInput = require('./UserInput');
const Position = require('./Position');
const Snake = require('./Snake');
const Grid = require('./Grid');


const position = new Position();
const inputReader = new InputReader();
const userInput = new UserInput();
const snake = new Snake(position);
const grid = new Grid(snake);
const Game = require('./Game');
const game = new Game(inputReader, userInput, snake, grid);
inputReader.listenInput(game);







/**
 * O  O  O
 * O  O  O
 * O  O  O
 */

