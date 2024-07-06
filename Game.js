class Game {
    inputReader = null;
    userInput = null;
    object = null;
    target = null;
    score = 0;
    constructor(inputReader, userInput, object, target, grid) {
        this.inputReader = inputReader;
        this.userInput = userInput;
        this.object = object;
        this.target = target;
        this.grid = grid;
    }
    load(rawInput) {
        this.userInput.input = rawInput;
        if(this.userInput.isEndOfInput()) {
            this.endGame();
            return;
        }
        console.log(`Your score: ${this.score}, Enter your input.`);
        let direction = this.userInput.getDirection(this.userInput.input);
        this.object.makeAMove(direction);
        // this.target.makeAMove();
        if(this.isObjectSameAsTarget()) {
            this.score++;
            this.target.makeRandomMove();
        }
        this.grid.refreshGrid();
        this.grid.displayGrid();
    }
    endGame() {
        console.log("Thankyou for playing!...");
        this.inputReader.close();
    }

    isObjectSameAsTarget() {
        return this.object.m === this.target.m && this.object.n === this.target.n;
    }
}

module.exports = Game;