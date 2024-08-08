const Grid = require('./Grid');
const {Cell, Body} = require('./core/core');
const InputReader = require('./InputReader');
const UserInput = require('./UserInput');
const Game = require('./Game');
//body, userInput, grid, inputReader
const inputReader = new InputReader();
const userInput = new UserInput();

const grid = new Grid(10,[]);
const bodyLength = 2;
const body = new Body(null, grid.getSize());
for(let i = 0; i < bodyLength; i++) {
    body.addCell(new Cell('🟧'));
}
const food = new Cell('🟦');
const foodBody = new Body(food, grid.getSize());
grid.init();

grid.update(body.head);
grid.update(foodBody.head);
grid.display();
const game = new Game(body, foodBody, userInput, grid, inputReader);
inputReader.listenInput(game);
