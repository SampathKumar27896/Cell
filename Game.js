class Game {
    inputReader = null;
    userInput = null;
    object = null;
    target = null;
    score = 0;
    _interval = null;
    constructor(inputReader, userInput, object, target, grid) {
        this.inputReader = inputReader;
        this.userInput = userInput;
        this.object = object;
        this.target = target;
        this.grid = grid;
    }
    start() {
        console.log(`
            Welcome to the Game. You are a hungry rabbit chasing carrots!.
            Press:
            'a' to move left
            'w' to move up
            'd' to move right
            's' to move down
        `);
        this.initDisplay();
    }
    load(rawInput) {
        this.userInput.input = rawInput;
        if(this.userInput.isEndOfInput()) {
            this.endGame();
            return;
        }
        console.log(`=======================\n`);
        let direction = this.userInput.getDirection(this.userInput.input);
        this.object.makeAMove(direction);
        if(this.isObjectSameAsTarget()) {
            this.score++;
            this.target.makeRandomMove();
        }
        this.grid.refreshGrid();
        this.grid.displayGrid();
        console.log(`=======================\nScore 🥕: ${this.score}, Enter your input.`);
    }
    endGame() {
        console.log("Thankyou for playing!...");
        this.inputReader.close();
    }

    isObjectSameAsTarget() {
        return this.object.m === this.target.m && this.object.n === this.target.n;
    }

    initDisplay() {
        this.grid.refreshGrid();
        this.grid.displayGrid();
    }
}

module.exports = Game;