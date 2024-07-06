const Grid  = require('./Grid');
const Snake = require('./Snake');
const Position = require('./Position');


const position = new Position();
const grid = new Grid();


//const snake = new Snake(userInput, position);

class Game {
    inputReader = null;
    userInput = null;
    snake = null;
    constructor(inputReader, userInput, snake, grid) {
        this.inputReader = inputReader;
        this.userInput = userInput;
        this.snake = snake;
        this.grid = grid;
    }
    load(rawInput) {
        this.userInput.input = rawInput;
        if(this.userInput.isEndOfInput()) {
            this.endGame();
            return;
        }
        console.log("Enter your Input: ");
        let direction = this.userInput.getDirection(this.userInput.input);
        this.snake.makeAMove(direction);
        this.grid.displayGrid();
    }
    endGame() {
        console.log("Thankyou for playing!...");
        this.inputReader.close();
    }
}

module.exports = Game;