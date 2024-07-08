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
            Press: Directional Keys to navigate
            to chase the carrots in the field
        `);
        this.rabbit.spawnRandom();
        this.carrot.spawnRandom();
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
            if(this.score === 2)
                this.rabbit._pattern = '🐰​';
            this.carrot.spawnRandom();
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