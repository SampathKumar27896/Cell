class Game {
    inputReader = null;
    userInput = null;
    rabbit = null;
    carrot = null;
    score = 0;
    _interval = null;
    constructor(inputReader, userInput, object, targets, grid) {
        this.keyboard = inputReader;
        this.userInput = userInput;
        this.rabbit = object;
        this.carrot = targets;
        this.field = grid;
    }
    start() {
        console.log(`
            Welcome to the Game. You are a hungry rabbit chasing carrots!.
            Press: Directional Keys to navigate
            to chase the carrots in the field
        `);
        this.spawnRandom(this.rabbit);
        for(let target of this.carrot) {
            this.spawnRandom(target);
        }
        this.field.init();
        this.refreshField();
        this.field.clearObjects();
    }
    load(rawInput) {
        console.log("Input received--------------")
        this.userInput.input = rawInput;
        this.field.clearObjects();
        if(this.userInput.isEndOfInput()) {
            this.endGame();
            return;
        }
        console.log(`=======================\n`);
        let direction = this.userInput.getDirection(this.userInput.input);
        this.rabbit.makeAMove(direction);
        this.field._objects = [...this.field._objects, this.rabbit];
        const isObject = this.isRabbitSameAsCarrot();
        if(isObject) {
            this.score++;
            this.spawnRandom(isObject);
        }
        this.refreshField();
        console.log(`=======================\nScore 🥕: ${this.score}, Enter your input.`);
        
    }
    endGame() {
        console.log(`That was a great chase, You have ${this.score} 🥕`);
        this.keyboard.close();
    }

    isRabbitSameAsCarrot() {
        for(let object of this.carrot) {
            if(this.rabbit.m === object.m && this.rabbit.n === object.n)
                return object;
        }
        return false;
    }

    refreshField() {
        this.field.reset();
        this.field.display();
    }

    spawnRandom(object) {
       
        console.log(object)
        object.spawnRandom();
        this.field._objects = [...this.field._objects, object];
    }
}

module.exports = Game;