const Grid = require('./Grid');
const {Cell, Body} = require('./core/core');
const InputReader = require('./InputReader');
const UserInput = require('./UserInput');
const Game = require('./Game');
//body, userInput, grid, inputReader
const inputReader = new InputReader();
const userInput = new UserInput();

const grid = new Grid(10,[]);
const bodyLength = 6;
const body = new Body(null, grid.getSize());
for(let i = 0; i < bodyLength; i++) {
    body.addCell();
}
grid.init();
console.log(body.head)
grid.update(body.head);
grid.display();
const game = new Game(body, userInput, grid, inputReader);
inputReader.listenInput(game);
