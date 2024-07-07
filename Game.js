class Game {
    inputReader = null;
    userInput = null;
    rabbit = null;
    carrot = null;
    score = 0;
    _interval = null;
    constructor(inputReader, userInput, object, target, grid) {
        this.keyboard = inputReader;
        this.userInput = userInput;
        this.rabbit = object;
        this.carrot = target;
        this.field = grid;
    }
    start() {
        console.log(`
            Welcome to the Game. You are a hungry rabbit chasing carrots!.
            Press:
            'a' to move left
            'w' to move up
            'd' to move right
            's' to move down
            'c' to quite game
            to chase the carrots in the field
        `);
        this.rabbit.makeRandomMove();
        this.carrot.makeRandomMove();
        this.field.init();
        this.refreshField();
    }
    load(rawInput) {
        this.userInput.input = rawInput;
        if(this.userInput.isEndOfInput()) {
            this.endGame();
            return;
        }
        console.log(`=======================\n`);
        let direction = this.userInput.getDirection(this.userInput.input);
        this.rabbit.makeAMove(direction);
        if(this.isRabbitSameAsCarrot()) {
            this.score++;
            this.carrot.makeRandomMove();
        }
        this.refreshField();
        console.log(`=======================\nScore 🥕: ${this.score}, Enter your input.`);
    }
    endGame() {
        console.log(`That was a great chase, You have ${this.score} 🥕`);
        this.keyboard.close();
    }

    isRabbitSameAsCarrot() {
        return this.rabbit.m === this.carrot.m && this.rabbit.n === this.carrot.n;
    }

    refreshField() {
        this.field.reset();
        this.field.display();
    }
}

module.exports = Game;